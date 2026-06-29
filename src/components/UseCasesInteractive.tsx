import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Sparkles, type LucideIcon } from "lucide-react";
import { getProduct, type ProductSlug } from "../data/products";
import { useCases } from "../data/useCases";

interface UseCasesInteractiveProps {
  productId: string;
  subheading?: string;
}

interface UnifiedUseCase {
  /** Stable key — uses the global `slug` when filtering useCases.ts, or the curated `id` when reading from `product.productUseCases`. Also doubles as the `/use-cases#...` anchor target. */
  key: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const AUTO_CYCLE_MS = 4000;
const RESUME_AFTER_MS = 10000;

export default function UseCasesInteractive({
  productId,
  subheading,
}: UseCasesInteractiveProps) {
  const items = useMemo<UnifiedUseCase[]>(() => {
    const product = getProduct(productId as ProductSlug);
    if (!product) return [];
    // LearnMate / DriveFlow curate their own use cases. Other products fall
    // back to the global cross-cutting list filtered by productSlug.
    if (product.productUseCases) {
      return product.productUseCases.map((uc) => ({
        key: uc.id,
        title: uc.title,
        description: uc.description,
        icon: Sparkles,
      }));
    }
    return useCases
      .filter((u) => u.productSlugs.includes(product.slug))
      .map((u) => ({
        key: u.slug,
        title: u.title,
        description: u.description,
        icon: u.icon,
      }));
  }, [productId]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const resumeTimer = useRef<number | null>(null);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  // SSR-safe mobile breakpoint detection.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Auto-cycle the active item every 4s. Paused for 10s after any manual click.
  useEffect(() => {
    if (isPaused || items.length === 0) return;
    const t = window.setTimeout(() => {
      setActiveIndex((i) => (i + 1) % items.length);
    }, AUTO_CYCLE_MS);
    return () => window.clearTimeout(t);
  }, [activeIndex, isPaused, items.length]);

  // Clean up the pause-resume timer on unmount.
  useEffect(
    () => () => {
      if (resumeTimer.current !== null) window.clearTimeout(resumeTimer.current);
    },
    [],
  );

  const handleSelect = (i: number) => {
    setActiveIndex(i);
    setIsPaused(true);
    if (resumeTimer.current !== null) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(
      () => setIsPaused(false),
      RESUME_AFTER_MS,
    );
  };

  if (items.length === 0) return null;

  const active = items[activeIndex];
  const ActiveIcon = active.icon;
  const watermarkOrdinal = String(activeIndex + 1).padStart(2, "0");

  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/30 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            style={{
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              fontSize: "0.65rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              marginBottom: 12,
            }}
          >
            Use Cases
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              letterSpacing: "-0.02em",
              marginBottom: 12,
              margin: 0,
            }}
          >
            Applicable Use Cases
          </h2>
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.9rem",
              color: "var(--color-text-muted)",
              maxWidth: 480,
              margin: "12px auto 0",
              lineHeight: 1.6,
            }}
          >
            {subheading ?? "Every scenario handled. Every workflow optimised."}
          </p>
        </div>

        <div
          ref={sectionRef}
          style={
            isMobile
              ? { display: "flex", flexDirection: "column", gap: 20 }
              : {
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 40fr) minmax(0, 58fr)",
                  gap: 32,
                  alignItems: "stretch",
                }
          }
        >
          {/* Detail panel — shown first on mobile (above the selector list) */}
          <DetailPanel
            active={active}
            ActiveIcon={ActiveIcon}
            watermarkOrdinal={watermarkOrdinal}
            isInView={isInView}
            order={isMobile ? -1 : 1}
          />

          {/* Selector */}
          {isMobile ? (
            <HorizontalPills
              items={items}
              activeIndex={activeIndex}
              onSelect={handleSelect}
            />
          ) : (
            <SelectorList
              items={items}
              activeIndex={activeIndex}
              isPaused={isPaused}
              isInView={isInView}
              onSelect={handleSelect}
            />
          )}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
 * Left column — numbered selector list with vertical progress bar
 * ──────────────────────────────────────────────────────── */

interface SelectorListProps {
  items: UnifiedUseCase[];
  activeIndex: number;
  isPaused: boolean;
  isInView: boolean;
  onSelect: (i: number) => void;
}

function SelectorList({
  items,
  activeIndex,
  isPaused,
  isInView,
  onSelect,
}: SelectorListProps) {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06 } },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{
        order: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {items.map((item, i) => {
        const isActive = i === activeIndex;
        const isLast = i === items.length - 1;
        return (
          <motion.div
            key={item.key}
            variants={{
              hidden: { opacity: 0, x: -12 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.35, ease: "easeOut" },
              },
            }}
            style={{
              position: "relative",
              borderBottom: isLast
                ? "none"
                : "1px solid var(--color-border)",
            }}
          >
            {/* Animated progress bar on the active item */}
            {isActive && (
              <motion.div
                key={`progress-${item.key}-${isPaused ? "p" : "r"}`}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: 3,
                  background: "var(--color-accent)",
                  borderRadius: "0 2px 2px 0",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
                initial={{ height: "0%" }}
                animate={{ height: "100%" }}
                transition={{
                  duration: isPaused ? Infinity : AUTO_CYCLE_MS / 1000,
                  ease: "linear",
                }}
              />
            )}

            <button
              type="button"
              onClick={() => onSelect(i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                width: "100%",
                padding: "14px 16px",
                background: isActive ? "var(--color-surface)" : "transparent",
                border: "none",
                borderRadius: isActive ? "0 10px 10px 0" : 0,
                cursor: "pointer",
                textAlign: "left",
                transition: "background 0.2s ease",
              }}
            >
              <span
                style={{
                  fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                  fontSize: "0.65rem",
                  color: isActive
                    ? "var(--color-accent)"
                    : "var(--color-text-muted)",
                  minWidth: 24,
                  letterSpacing: "0.04em",
                  transition: "color 0.2s ease",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "0.88rem",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive
                    ? "var(--color-text-primary)"
                    : "var(--color-text-muted)",
                  flex: 1,
                  transition: "color 0.2s ease",
                }}
              >
                {item.title}
              </span>
              <motion.span
                animate={{
                  opacity: isActive ? 1 : 0,
                  x: isActive ? 0 : -4,
                }}
                transition={{ duration: 0.2 }}
                style={{
                  color: "var(--color-accent)",
                  fontSize: "0.8rem",
                  lineHeight: 1,
                }}
              >
                →
              </motion.span>
            </button>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────
 * Right column — animated detail panel
 * ──────────────────────────────────────────────────────── */

interface DetailPanelProps {
  active: UnifiedUseCase;
  ActiveIcon: LucideIcon;
  watermarkOrdinal: string;
  isInView: boolean;
  order: number;
}

function DetailPanel({
  active,
  ActiveIcon,
  watermarkOrdinal,
  isInView,
  order,
}: DetailPanelProps) {
  const containerStyle: CSSProperties = {
    order,
    position: "relative",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      style={containerStyle}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={active.key}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: 20,
            padding: 36,
            minHeight: 320,
            height: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative watermark ordinal */}
          <div
            aria-hidden="true"
            className="font-display"
            style={{
              position: "absolute",
              top: -10,
              right: 20,
              fontSize: "8rem",
              fontWeight: 800,
              color: "var(--color-accent)",
              opacity: 0.04,
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none",
              letterSpacing: "-0.04em",
            }}
          >
            {watermarkOrdinal}
          </div>

          {/* Header */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <ActiveIcon size={22} color="var(--color-accent)" strokeWidth={2} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: 2,
                }}
              >
                Use Case · {watermarkOrdinal}
              </div>
              <div
                className="font-display"
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  letterSpacing: "-0.01em",
                }}
              >
                {active.title}
              </div>
            </div>
          </div>

          {/* Description */}
          <p
            style={{
              position: "relative",
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.88rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.75,
              marginBottom: 24,
            }}
          >
            {active.description}
          </p>

          {/* CTA row */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <Link
              to={`/use-cases#${active.key}`}
              style={{
                fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "var(--color-accent)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              Read more <span>→</span>
            </Link>
            <span style={{ color: "var(--color-border)", fontSize: "0.7rem" }}>·</span>
            <Link
              to="/contact"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.8rem",
                color: "var(--color-text-muted)",
                textDecoration: "none",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-text-muted)";
              }}
            >
              Talk to sales
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────
 * Mobile — horizontally scrolling selector pills
 * ──────────────────────────────────────────────────────── */

interface HorizontalPillsProps {
  items: UnifiedUseCase[];
  activeIndex: number;
  onSelect: (i: number) => void;
}

function HorizontalPills({ items, activeIndex, onSelect }: HorizontalPillsProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        overflowX: "auto",
        paddingBottom: 8,
        scrollbarWidth: "none",
        WebkitOverflowScrolling: "touch",
        order: 1,
      }}
    >
      {items.map((item, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onSelect(i)}
            style={{
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              fontSize: "0.65rem",
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
              padding: "8px 16px",
              borderRadius: 999,
              border: `1px solid ${isActive ? "var(--color-accent)" : "var(--color-border)"}`,
              background: isActive ? "rgba(0,212,255,0.08)" : "transparent",
              color: isActive
                ? "var(--color-accent)"
                : "var(--color-text-muted)",
              cursor: "pointer",
              flexShrink: 0,
              transition:
                "background 0.2s ease, border-color 0.2s ease, color 0.2s ease",
            }}
          >
            {String(i + 1).padStart(2, "0")} {item.title}
          </button>
        );
      })}
    </div>
  );
}
