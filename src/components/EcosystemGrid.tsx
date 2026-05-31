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
  hasError: boolean;
  onImgError: () => void;
  isInView: boolean;
  staggerIdx: number;
  isMobile: boolean;
}

function Tile({
  tile,
  isHovered,
  isDimmed,
  onHover,
  hasError,
  onImgError,
  isInView,
  staggerIdx,
  isMobile,
}: TileProps) {
  const iconBoxSize = isMobile ? 60 : 72;
  const iconImgSize = isMobile ? 28 : 36;
  const iconRadius = isMobile ? 14 : 16;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.4, delay: staggerIdx * 0.04, ease: "easeOut" }}
      whileHover={!isMobile ? { scale: 1.03 } : undefined}
      onMouseEnter={() => !isMobile && onHover(tile.id)}
      onMouseLeave={() => !isMobile && onHover(null)}
      style={{
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {/* Icon container */}
      <div
        style={{
          width: iconBoxSize,
          height: iconBoxSize,
          borderRadius: iconRadius,
          background: isHovered ? tile.logoBg : "var(--color-surface)",
          border: isHovered
            ? "1.5px solid var(--color-border)"
            : "1px solid var(--color-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 12,
          transition: "background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
          boxShadow: isHovered ? "0 4px 20px rgba(0,0,0,0.25)" : "none",
        }}
      >
        {hasError ? (
          <div
            style={{
              width: iconImgSize,
              height: iconImgSize,
              borderRadius: 8,
              background: tile.logoBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Syne, sans-serif",
              fontSize: "0.9rem",
              fontWeight: 700,
              color: tile.accentColor,
              opacity: isDimmed ? 0.2 : 1,
              filter: isDimmed ? "grayscale(1)" : "none",
              transition: "opacity 0.25s ease, filter 0.25s ease",
            }}
          >
            {tile.name.substring(0, 2).toUpperCase()}
          </div>
        ) : (
          <img
            src={tile.logoSrc}
            alt={tile.name}
            onError={onImgError}
            style={{
              width: iconImgSize,
              height: iconImgSize,
              objectFit: "contain",
              transition: "filter 0.25s ease",
              filter: isDimmed ? "grayscale(1) opacity(0.2)" : "none",
            }}
          />
        )}
      </div>

      {/* Name */}
      <div
        style={{
          fontFamily: '"JetBrains Mono", ui-monospace, monospace',
          fontSize: isMobile ? "0.6rem" : "0.7rem",
          fontWeight: isHovered ? 700 : 400,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color:
            isDimmed
              ? "transparent"
              : "var(--color-text-primary)",
          transition: "color 0.25s ease, font-weight 0.25s ease",
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
            fontSize: "0.62rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: isHovered
              ? tile.accentColor
              : isDimmed
                ? "transparent"
                : "var(--color-text-muted)",
            transition: "color 0.25s ease",
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
  cloudErrors: Record<string, boolean>;
  onCloudError: (id: string) => void;
  isMobile: boolean;
}

function SidePanel({
  hoveredCloud,
  setHoveredCloud,
  cloudErrors,
  onCloudError,
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
            const hasError = cloudErrors[c.id];
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
                  opacity: isDimmed ? 0.5 : 1,
                  transition: "opacity 0.25s ease",
                }}
              >
                {hasError ? (
                  <div
                    style={{
                      height: 28,
                      paddingLeft: 12,
                      paddingRight: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "Syne, sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {c.name}
                  </div>
                ) : (
                  <img
                    src={c.logoSrc}
                    alt={c.name}
                    onError={() => onCloudError(c.id)}
                    style={{
                      height: 28,
                      maxWidth: 80,
                      objectFit: "contain",
                    }}
                  />
                )}

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
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
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

  const markImgError = (id: string) =>
    setImgErrors((prev) => (prev[id] ? prev : { ...prev, [id]: true }));

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
                  hasError={Boolean(imgErrors[tile.id])}
                  onImgError={() => markImgError(tile.id)}
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
            cloudErrors={imgErrors}
            onCloudError={markImgError}
            isMobile={isMobile}
          />
        </div>
      </motion.div>
    </section>
  );
}
