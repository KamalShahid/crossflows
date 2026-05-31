import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type CardId = "rest-api" | "webhooks" | "mcp";

interface IntegrationCard {
  id: CardId;
  iconLabel: string;
  typeLabel: string;
  name: string;
  description: string;
  /** Solid accent color for this card's active connector line. */
  connectorColor: string;
  position: "left-top" | "left-bottom" | "right";
}

interface OrbitBadge {
  letter: string;
  /** Fixed brand color — kept literal regardless of theme tokens. */
  color: string;
}

interface LineCoord {
  id: CardId;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const cards: IntegrationCard[] = [
  {
    id: "rest-api",
    iconLabel: "API",
    typeLabel: "PROTOCOL",
    name: "REST API",
    description:
      "Build custom integrations using our documented REST API endpoints with full authentication support.",
    connectorColor: "#7B6FF0",
    position: "left-top",
  },
  {
    id: "webhooks",
    iconLabel: "HOOK",
    typeLabel: "EVENT",
    name: "Webhooks",
    description:
      "Trigger AI workflows from real-time application events and system notifications.",
    connectorColor: "#00D4FF",
    position: "left-bottom",
  },
  {
    id: "mcp",
    iconLabel: "MCP",
    typeLabel: "STANDARD",
    name: "MCP",
    description:
      "Standardized tool-calling for modern AI stacks and agent-to-agent communication.",
    connectorColor: "#7B6FF0",
    position: "right",
  },
];

const badges: OrbitBadge[] = [
  { letter: "S", color: "#00A1E0" },
  { letter: "M", color: "#E52027" },
  { letter: "C", color: "#F48120" },
  { letter: "Z", color: "#E42527" },
];

const ROTATION_DURATION = 18;
const ORBIT_RADIUS = 130;

interface CardProps {
  card: IntegrationCard;
  isActive: boolean;
  isDimmed: boolean;
  onHover: (id: CardId | null) => void;
  setRef: (el: HTMLDivElement | null) => void;
}

function Card({ card, isActive, isDimmed, onHover, setRef }: CardProps) {
  return (
    <motion.div
      ref={setRef}
      onMouseEnter={() => onHover(card.id)}
      onMouseLeave={() => onHover(null)}
      animate={{
        opacity: isDimmed ? 0.3 : 1,
        filter: isDimmed ? "blur(0.5px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        background: "var(--color-surface)",
        border: isActive
          ? "1px solid var(--color-accent)"
          : "1px solid var(--color-border)",
        borderRadius: 20,
        padding: 24,
        width: "100%",
        cursor: "pointer",
        position: "relative",
        zIndex: 2,
        boxShadow: isActive
          ? "0 0 0 1px var(--color-accent), 0 8px 32px rgba(0, 212, 255, 0.12)"
          : "none",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 16,
        }}
      >
        {/* Icon badge */}
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            background: "var(--color-surface-2)",
            border: "1px solid var(--color-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: "0.65rem",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            letterSpacing: "0.04em",
          }}
        >
          {card.iconLabel}
        </div>

        {/* Type label OR SYNCING badge (cross-fade) */}
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.div
              key="syncing"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.2 }}
              style={{
                background: "rgba(0, 207, 120, 0.12)",
                border: "1px solid rgba(0, 207, 120, 0.4)",
                borderRadius: 999,
                padding: "3px 10px",
                fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                fontSize: "0.65rem",
                color: "#00CF78",
                letterSpacing: "0.06em",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontWeight: 600,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#00CF78",
                  display: "inline-block",
                }}
              />
              SYNCING
            </motion.div>
          ) : (
            <motion.span
              key="type"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              style={{
                fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
              }}
            >
              {card.typeLabel}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <h3
        className="font-display"
        style={{
          fontSize: "1.2rem",
          fontWeight: 700,
          color: "var(--color-text-primary)",
          marginBottom: 8,
          lineHeight: 1.25,
        }}
      >
        {card.name}
      </h3>
      <p
        style={{
          fontSize: "0.85rem",
          color: "var(--color-text-muted)",
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        {card.description}
      </p>
    </motion.div>
  );
}

export default function IntegrationsOrbit() {
  const [hoveredCard, setHoveredCard] = useState<CardId | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [lineCoords, setLineCoords] = useState<LineCoord[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hubRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Record<CardId, HTMLDivElement | null>>({
    "rest-api": null,
    webhooks: null,
    mcp: null,
  });

  // Track viewport — mobile gets a stacked layout, no connector lines, and an auto-cycle
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Mobile auto-cycle: rotate through cards every 3s so users see the highlight effect
  useEffect(() => {
    if (!isMobile) return;
    const ids: CardId[] = ["rest-api", "webhooks", "mcp"];
    let i = 0;
    setHoveredCard(ids[0]);
    const interval = window.setInterval(() => {
      i = (i + 1) % ids.length;
      setHoveredCard(ids[i]);
    }, 3000);
    return () => {
      window.clearInterval(interval);
      setHoveredCard(null);
    };
  }, [isMobile]);

  // Recalculate connector line coords whenever layout changes
  useEffect(() => {
    if (isMobile) return;

    const calc = () => {
      if (!containerRef.current || !hubRef.current) return;
      const cRect = containerRef.current.getBoundingClientRect();
      const hRect = hubRef.current.getBoundingClientRect();
      const hubCx = hRect.left - cRect.left + hRect.width / 2;
      const hubCy = hRect.top - cRect.top + hRect.height / 2;

      const next: LineCoord[] = [];
      cards.forEach((card) => {
        const el = cardRefs.current[card.id];
        if (!el) return;
        const r = el.getBoundingClientRect();
        const isRight = card.position === "right";
        const x1 = r.left - cRect.left + (isRight ? 0 : r.width);
        const y1 = r.top - cRect.top + r.height / 2;
        next.push({ id: card.id, x1, y1, x2: hubCx, y2: hubCy });
      });
      setLineCoords(next);
    };

    calc();
    const observer = new ResizeObserver(calc);
    if (containerRef.current) observer.observe(containerRef.current);
    if (hubRef.current) observer.observe(hubRef.current);
    Object.values(cardRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    window.addEventListener("resize", calc);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", calc);
    };
  }, [isMobile]);

  const hubSize = isMobile ? 260 : 340;

  return (
    <section className="py-20 md:py-[120px]">
      {/* Section header */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8" style={{ textAlign: "center" }}>
        <div
          className="inline-flex items-center justify-center"
          style={{
            border: "1px solid var(--color-border)",
            borderRadius: 999,
            padding: "4px 14px",
          }}
        >
          <span
            style={{
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
            }}
          >
            Connections
          </span>
        </div>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(2rem, 4vw + 1rem, 3rem)",
            fontWeight: 800,
            color: "var(--color-text-primary)",
            lineHeight: 1.1,
            marginTop: 20,
          }}
        >
          Integrate with{" "}
          <span style={{ color: "var(--color-accent)" }}>anything.</span>
        </h2>
        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "1rem",
            marginTop: 16,
            lineHeight: 1.5,
          }}
        >
          Native speed for your essentials.
        </p>
        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "1rem",
            lineHeight: 1.5,
          }}
        >
          Infinite extensibility for your entire enterprise stack.
        </p>
      </div>

      {/* Animation area */}
      <div
        className="mx-auto"
        style={{ maxWidth: 1100, marginTop: 64, paddingLeft: 20, paddingRight: 20 }}
      >
        <div
          ref={containerRef}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0,
            flexDirection: isMobile ? "column" : "row",
            rowGap: isMobile ? 24 : 0,
          }}
        >
          {/* SVG connector lines (desktop only) */}
          {!isMobile && (
            <svg
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 0,
                overflow: "visible",
              }}
            >
              {lineCoords.map((coord) => {
                const card = cards.find((c) => c.id === coord.id);
                if (!card) return null;
                const isActive = hoveredCard === coord.id;
                const opacity =
                  hoveredCard === null ? 0.4 : isActive ? 1 : 0.08;
                return (
                  <line
                    key={coord.id}
                    x1={coord.x1}
                    y1={coord.y1}
                    x2={coord.x2}
                    y2={coord.y2}
                    stroke={
                      isActive ? card.connectorColor : "var(--color-border)"
                    }
                    strokeWidth={isActive ? 1.5 : 0.5}
                    strokeDasharray={isActive ? undefined : "4 4"}
                    opacity={opacity}
                    style={{
                      transition:
                        "stroke 0.3s ease, opacity 0.3s ease, stroke-width 0.3s ease",
                    }}
                  />
                );
              })}
            </svg>
          )}

          {/* Left column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 32,
              width: isMobile ? "100%" : 320,
              flexShrink: 0,
              position: "relative",
              zIndex: 2,
            }}
          >
            {cards
              .filter((c) => c.position.startsWith("left"))
              .map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  isActive={hoveredCard === card.id}
                  isDimmed={hoveredCard !== null && hoveredCard !== card.id}
                  onHover={(id) => !isMobile && setHoveredCard(id)}
                  setRef={(el) => {
                    cardRefs.current[card.id] = el;
                  }}
                />
              ))}
          </div>

          {/* Center hub */}
          <div
            style={{
              width: hubSize,
              height: hubSize,
              flexShrink: 0,
              position: "relative",
              margin: isMobile ? "0" : "0 -10px",
              zIndex: 1,
            }}
          >
            {/* Outer ring */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: 260,
                height: 260,
                borderRadius: "50%",
                border: "1px solid var(--color-border)",
                zIndex: 0,
              }}
            />

            {/* Continuous pulse rings */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`pulse-${i}`}
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  border: "1px solid var(--color-accent)",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
                initial={{ x: "-50%", y: "-50%", scale: 1, opacity: 0 }}
                animate={{
                  x: "-50%",
                  y: "-50%",
                  scale: [1, 2.2],
                  opacity: [0.25, 0],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* Inner circle (hub body) */}
            <div
              ref={hubRef}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: 160,
                height: 160,
                borderRadius: "50%",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Dark core with brand mark */}
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "var(--color-bg)",
                  border: "1.5px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src="/logo-icon.png"
                  alt="Cross Flows Synergy"
                  draggable={false}
                  style={{ width: "62%", height: "62%", objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Orbit ring — rotates clockwise; badges counter-rotate to stay upright */}
            <motion.div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: 260,
                height: 260,
                marginLeft: -130,
                marginTop: -130,
                zIndex: 3,
                pointerEvents: "none",
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: ROTATION_DURATION,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {badges.map((b, i) => {
                const angle = i * 90 * (Math.PI / 180);
                const x = ORBIT_RADIUS * Math.cos(angle);
                const y = ORBIT_RADIUS * Math.sin(angle);
                return (
                  <motion.div
                    key={b.letter}
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      width: 44,
                      height: 44,
                      marginLeft: x - 22,
                      marginTop: y - 22,
                    }}
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: ROTATION_DURATION,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "Syne, sans-serif",
                        fontSize: "1rem",
                        fontWeight: 800,
                        color: b.color,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                      }}
                    >
                      {b.letter}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: isMobile ? "100%" : 320,
              flexShrink: 0,
              position: "relative",
              zIndex: 2,
            }}
          >
            {cards
              .filter((c) => c.position === "right")
              .map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  isActive={hoveredCard === card.id}
                  isDimmed={hoveredCard !== null && hoveredCard !== card.id}
                  onHover={(id) => !isMobile && setHoveredCard(id)}
                  setRef={(el) => {
                    cardRefs.current[card.id] = el;
                  }}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
