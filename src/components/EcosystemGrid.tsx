import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import {
  ecosystemTiles,
  cloudPlatforms,
  complianceBadges,
  type EcosystemTile,
  type CloudPlatform,
  type ComplianceBadge,
} from "../data/ecosystem";

interface TileProps {
  tile: EcosystemTile;
  isHovered: boolean;
  isDimmed: boolean;
  onHover: (id: string | null) => void;
  isInView: boolean;
  staggerIdx: number;
  isMobile: boolean;
}

/**
 * Per-tile CSS color filter pipeline that recolors the monochrome
 * simple-icons SVG to its real brand hex. View-layer concern — lives
 * here, not in the data file. Pipedrive renders its "PI" text fallback
 * and doesn't need a filter.
 */
const logoColorFilters: Record<string, string> = {
  openai: "brightness(0) saturate(100%) invert(52%) sepia(42%) saturate(442%) hue-rotate(116deg) brightness(95%) contrast(93%)",
  anthropic: "brightness(0) saturate(100%) invert(58%) sepia(30%) saturate(600%) hue-rotate(330deg) brightness(98%) contrast(85%)",
  elevenlabs: "brightness(0)",
  twilio: "brightness(0) saturate(100%) invert(22%) sepia(95%) saturate(2000%) hue-rotate(336deg) brightness(98%) contrast(95%)",
  salesforce: "brightness(0) saturate(100%) invert(42%) sepia(90%) saturate(1000%) hue-rotate(175deg) brightness(100%) contrast(100%)",
  hubspot: "brightness(0) saturate(100%) invert(60%) sepia(80%) saturate(800%) hue-rotate(335deg) brightness(105%) contrast(95%)",
  slack: "brightness(0) saturate(100%) invert(14%) sepia(68%) saturate(1200%) hue-rotate(277deg) brightness(80%) contrast(110%)",
  zoho: "brightness(0) saturate(100%) invert(20%) sepia(95%) saturate(2000%) hue-rotate(345deg) brightness(100%) contrast(95%)",
  microsoftteams: "brightness(0) saturate(100%) invert(38%) sepia(50%) saturate(600%) hue-rotate(210deg) brightness(90%) contrast(90%)",
  googlecalendar: "brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(1200%) hue-rotate(205deg) brightness(105%) contrast(100%)",
  stripe: "brightness(0) saturate(100%) invert(38%) sepia(80%) saturate(1500%) hue-rotate(230deg) brightness(100%) contrast(100%)",
  zapier: "brightness(0) saturate(100%) invert(38%) sepia(90%) saturate(2000%) hue-rotate(10deg) brightness(110%) contrast(100%)",
  intercom: "brightness(0) saturate(100%) invert(40%) sepia(80%) saturate(1000%) hue-rotate(195deg) brightness(100%) contrast(100%)",
  deepgram: "brightness(0) saturate(100%) invert(75%) sepia(50%) saturate(800%) hue-rotate(100deg) brightness(100%) contrast(100%)",
  pipedrive: "none",
};

const LIFT_TRANSITION =
  "background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)";

function Tile({
  tile,
  isHovered,
  isDimmed,
  onHover,
  isInView,
  staggerIdx,
  isMobile,
}: TileProps) {
  const iconBoxSize = isMobile ? 80 : 96;
  const iconImgSize = isMobile ? 34 : 40;
  const iconRadius = isMobile ? 18 : 22;

  const baseFilter = logoColorFilters[tile.id] ?? "none";
  const logoFilter = isHovered ? `${baseFilter} brightness(1.15)` : baseFilter;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.4, delay: staggerIdx * 0.04, ease: "easeOut" }}
      onMouseEnter={() => !isMobile && onHover(tile.id)}
      onMouseLeave={() => !isMobile && onHover(null)}
      style={{
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        // Strong wash-out on all non-hovered tiles when another is active.
        opacity: isDimmed ? 0.18 : 1,
        filter: isDimmed ? "grayscale(0.9) blur(0.3px)" : "none",
        transition: "opacity 0.25s ease, filter 0.25s ease",
      }}
    >
      {/* Icon container — soft brand-tinted by default → bright white on
          hover with brand-colored border and a subtle depth shadow. */}
      <div
        style={{
          width: iconBoxSize,
          height: iconBoxSize,
          borderRadius: iconRadius,
          background: isHovered ? tile.tileBgHover : tile.tileBg,
          border: isHovered
            ? `1.5px solid ${tile.borderColorHover}`
            : "1.5px solid transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 14,
          boxShadow: isHovered
            ? "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)"
            : "none",
          transform: isHovered
            ? "translateY(-4px) scale(1.04)"
            : "translateY(0) scale(1)",
          transition: LIFT_TRANSITION,
        }}
      >
        {tile.logoSrc ? (
          <img
            src={tile.logoSrc}
            alt={tile.name}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            style={{
              width: iconImgSize,
              height: iconImgSize,
              objectFit: "contain",
              filter: logoFilter,
              transition: "filter 0.2s ease",
              display: "block",
            }}
          />
        ) : (
          <span
            className="font-display"
            style={{
              fontSize: iconImgSize > 36 ? "1rem" : "0.9rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: isHovered
                ? tile.accentColor
                : `${tile.accentColor}AA`,
              transition: "color 0.2s ease",
            }}
          >
            PI
          </span>
        )}
      </div>

      {/* Name */}
      <div
        style={{
          fontFamily: '"JetBrains Mono", ui-monospace, monospace',
          fontSize: isMobile ? "0.6rem" : "0.68rem",
          fontWeight: isHovered ? 700 : 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--color-text-primary)",
          transition: "font-weight 0.15s ease",
          marginBottom: 3,
        }}
      >
        {tile.name}
      </div>

      {/* Category (hidden on mobile) */}
      {!isMobile && (
        <div
          style={{
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: "0.6rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: isHovered
              ? "var(--color-accent)"
              : "var(--color-text-muted)",
            transition: "color 0.2s ease",
          }}
        >
          {tile.category}
        </div>
      )}
    </motion.div>
  );
}

interface SidePanelProps {
  hoveredCloud: string | null;
  setHoveredCloud: (id: string | null) => void;
  isMobile: boolean;
}

function SidePanel({
  hoveredCloud,
  setHoveredCloud,
  isMobile,
}: SidePanelProps) {
  return (
    <aside
      style={{
        width: isMobile ? "100%" : 280,
        flexShrink: 0,
        position: isMobile ? "static" : "sticky",
        top: 120,
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: 20,
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 28,
      }}
    >
      {/* Native Cloud Sync */}
      <div>
        <div
          style={{
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-text-muted)",
            marginBottom: 20,
          }}
        >
          Native Cloud Sync
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "space-around" : "space-between",
            gap: 12,
          }}
        >
          {cloudPlatforms.map((c: CloudPlatform) => {
            const isHovered = hoveredCloud === c.id;
            const isDimmed = hoveredCloud !== null && hoveredCloud !== c.id;
            return (
              <div
                key={c.id}
                onMouseEnter={() => setHoveredCloud(c.id)}
                onMouseLeave={() => setHoveredCloud(null)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  cursor: "pointer",
                  flex: 1,
                  opacity: isDimmed ? 0.5 : 1,
                  transition: "opacity 0.25s ease",
                }}
              >
                {/* Brand-tinted backdrop appears on hover so each cloud reads as its own color */}
                <div
                  style={{
                    width: 56,
                    height: 40,
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: isHovered
                      ? `${c.accentColor}15`
                      : "transparent",
                    transition: "background 0.2s ease",
                  }}
                >
                  {c.logoSrc ? (
                    <img
                      src={c.logoSrc}
                      alt={c.name}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                      style={{
                        height: 28,
                        maxWidth: 80,
                        objectFit: "contain",
                        display: "block",
                        // White silhouette by default; on hover the filter
                        // clears and the brand color shows through.
                        filter: isHovered ? "none" : "brightness(0) invert(1)",
                        opacity: isHovered ? 1 : 0.85,
                        transition: "opacity 0.2s ease, filter 0.2s ease",
                      }}
                    />
                  ) : (
                    <span
                      className="font-display"
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: isHovered
                          ? c.accentColor
                          : "var(--color-text-primary)",
                        letterSpacing: "0.02em",
                        transition: "color 0.2s ease",
                      }}
                    >
                      {c.name}
                    </span>
                  )}
                </div>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      key="tooltip"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        position: "absolute",
                        top: "calc(100% + 6px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "var(--color-bg)",
                        color: "var(--color-text-primary)",
                        border: "1px solid var(--color-border)",
                        borderRadius: 6,
                        padding: "3px 10px",
                        fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                        fontSize: "0.62rem",
                        letterSpacing: "0.06em",
                        whiteSpace: "nowrap",
                        zIndex: 10,
                      }}
                    >
                      {c.tooltip}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Separator */}
      <div
        aria-hidden="true"
        style={{ width: "100%", height: 1, background: "var(--color-border)" }}
      />

      {/* Certified Compliance */}
      <div>
        <div
          style={{
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-text-muted)",
            marginBottom: 16,
          }}
        >
          Certified Compliance
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {complianceBadges.map((b: ComplianceBadge, idx: number) => (
            <div
              key={b.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 0",
                borderBottom:
                  idx < complianceBadges.length - 1
                    ? "1px solid var(--color-border)"
                    : "none",
              }}
            >
              <ShieldCheck
                size={18}
                color="var(--color-accent)"
                style={{ flexShrink: 0 }}
              />
              <div>
                <div
                  style={{
                    fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "var(--color-text-primary)",
                    textTransform: "uppercase",
                  }}
                >
                  {b.title}
                </div>
                <div
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "0.72rem",
                    color: "var(--color-text-muted)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    marginTop: 2,
                  }}
                >
                  {b.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default function EcosystemGrid() {
  const [hoveredTile, setHoveredTile] = useState<string | null>(null);
  const [hoveredCloud, setHoveredCloud] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Mobile auto-cycle — pick a random tile every 3.5s
  useEffect(() => {
    if (!isMobile) return;
    const interval = window.setInterval(() => {
      const idx = Math.floor(Math.random() * ecosystemTiles.length);
      setHoveredTile(ecosystemTiles[idx].id);
    }, 3500);
    return () => {
      window.clearInterval(interval);
      setHoveredTile(null);
    };
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      style={{
        paddingTop: isMobile ? 64 : 100,
        paddingBottom: isMobile ? 64 : 100,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          paddingLeft: isMobile ? 20 : 48,
          paddingRight: isMobile ? 20 : 48,
        }}
      >
        {/* Header bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 48,
          }}
        >
          <div
            style={{
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--color-accent)",
                display: "inline-block",
              }}
            />
            The Foundation of Enterprise AI
          </div>
          <div
            style={{
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#00CF78",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid rgba(0,207,120,0.4)",
              borderRadius: 999,
              padding: "4px 12px",
              background: "rgba(0,207,120,0.06)",
            }}
          >
            <span
              aria-hidden="true"
              className="ecosystem-nominal-dot"
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#00CF78",
                display: "inline-block",
              }}
            />
            Stack Nominal
          </div>
        </div>

        {/* Main row */}
        <div
          style={{
            display: "flex",
            gap: isMobile ? 32 : 48,
            alignItems: "flex-start",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          {/* Logo grid */}
          <div style={{ flex: 1, width: isMobile ? "100%" : "auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "repeat(3, 1fr)"
                  : "repeat(5, 1fr)",
                gap: 20,
              }}
            >
              {ecosystemTiles.map((tile, idx) => (
                <Tile
                  key={tile.id}
                  tile={tile}
                  isHovered={hoveredTile === tile.id}
                  isDimmed={
                    hoveredTile !== null && hoveredTile !== tile.id
                  }
                  onHover={(id) => setHoveredTile(id)}
                  isInView={isInView}
                  staggerIdx={idx}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </div>

          {/* Side panel */}
          <SidePanel
            hoveredCloud={hoveredCloud}
            setHoveredCloud={setHoveredCloud}
            isMobile={isMobile}
          />
        </div>
      </motion.div>
    </section>
  );
}
