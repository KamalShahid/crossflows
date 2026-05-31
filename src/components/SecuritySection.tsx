import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import {
  securityCheckpoints,
  nativeNamespaces,
  terminalLogLines,
} from "../data/security";

const REVEAL_STEP_MS = 700;
const LOOP_PAUSE_MS = 2000;

export default function SecuritySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [visibleLines, setVisibleLines] = useState(0);
  const [loopId, setLoopId] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Track viewport
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Sequential reveal + infinite loop. Starts only once the section scrolls
  // into view. All timers tracked locally so cleanup unmount-safe.
  useEffect(() => {
    if (!isInView) return;
    const timers: number[] = [];
    const clearAllTimers = () => {
      timers.forEach((t) => window.clearTimeout(t));
      timers.length = 0;
    };

    const runCycle = () => {
      clearAllTimers();
      setLoopId((prev) => prev + 1);
      setVisibleLines(0);

      for (let i = 1; i <= terminalLogLines.length; i++) {
        timers.push(
          window.setTimeout(() => setVisibleLines(i), i * REVEAL_STEP_MS),
        );
      }
      timers.push(
        window.setTimeout(
          runCycle,
          terminalLogLines.length * REVEAL_STEP_MS + LOOP_PAUSE_MS,
        ),
      );
    };

    runCycle();
    return clearAllTimers;
  }, [isInView]);

  const activeLogIndex = Math.max(0, visibleLines - 1);

  return (
    <section
      ref={sectionRef}
      style={{
        paddingTop: isMobile ? 64 : 120,
        paddingBottom: isMobile ? 64 : 120,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          paddingLeft: isMobile ? 20 : 48,
          paddingRight: isMobile ? 20 : 48,
          display: "flex",
          alignItems: "center",
          gap: isMobile ? 48 : 64,
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            flex: isMobile ? "1 1 100%" : "1 1 52%",
            width: "100%",
          }}
        >
          {/* Eyebrow pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid var(--color-border)",
              borderRadius: 999,
              padding: "4px 14px",
              marginBottom: 24,
            }}
          >
            <span
              aria-hidden="true"
              style={{ color: "var(--color-accent)", fontSize: "0.5rem" }}
            >
              ●
            </span>
            <span
              style={{
                fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
              }}
            >
              A Security Layer
            </span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--color-text-primary)",
              lineHeight: 1.1,
              marginTop: 0,
              marginBottom: 16,
            }}
          >
            HIPAA &amp; PHI Security.
          </h2>

          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.95rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
              maxWidth: 420,
              marginTop: 0,
              marginBottom: 40,
            }}
          >
            Deterministic safeguards engineered to meet the highest regulatory
            standards.
          </p>

          {/* 2×2 checkpoints */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: 12,
              marginBottom: 48,
            }}
          >
            {securityCheckpoints.map((cp) => (
              <div
                key={cp}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 10,
                  padding: "14px 16px",
                }}
              >
                <div
                  style={{
                    width: 18,
                    height: 18,
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  <Check
                    size={16}
                    color="var(--color-accent)"
                    strokeWidth={2.5}
                  />
                </div>
                <span
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "0.85rem",
                    color: "var(--color-text-primary)",
                    lineHeight: 1.5,
                  }}
                >
                  {cp}
                </span>
              </div>
            ))}
          </div>

          {/* Native Namespaces */}
          <div>
            <div
              style={{
                fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                fontSize: "0.62rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
                marginBottom: 12,
              }}
            >
              Native Namespaces
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {nativeNamespaces.map((ns) => (
                <div
                  key={ns}
                  style={{
                    fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                    fontSize: "0.68rem",
                    letterSpacing: "0.06em",
                    color: "var(--color-text-muted)",
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 6,
                    padding: "6px 14px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {ns}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN — terminal card */}
        <motion.div
          initial={{ opacity: 0, x: 24, scale: 0.97 }}
          animate={
            isInView
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: 24, scale: 0.97 }
          }
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          style={{
            flex: isMobile ? "1 1 100%" : "0 0 44%",
            width: "100%",
            maxWidth: 520,
            minHeight: 320,
            background: "#060B18",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 24,
            padding: "32px 36px 56px 36px",
            position: "relative",
            overflow: "hidden",
            flexShrink: 0,
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.05), 0 32px 64px rgba(0,0,0,0.5)",
          }}
        >
          <div
            style={{
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              fontSize: "0.62rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.25)",
              marginBottom: 28,
            }}
          >
            HANDSHAKE_SEQUENCE_LOG
          </div>

          {/* Log lines area */}
          <div style={{ minHeight: 180 }}>
            <AnimatePresence initial={false}>
              {terminalLogLines.slice(0, visibleLines).map((line) => (
                <motion.div
                  key={`${line.id}-${loopId}`}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      fontFamily:
                        '"JetBrains Mono", ui-monospace, monospace',
                      fontSize: "0.65rem",
                      color: "rgba(255,255,255,0.2)",
                      letterSpacing: "0.04em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {line.timestamp}
                  </span>
                  <span
                    style={{
                      fontFamily:
                        '"JetBrains Mono", ui-monospace, monospace',
                      fontSize: "0.65rem",
                      color: line.statusColor,
                      letterSpacing: "0.06em",
                      textAlign: "right",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {line.status}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Blinking cursor — hard step blink via keyframe times */}
            {visibleLines < terminalLogLines.length && (
              <motion.span
                aria-hidden="true"
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{
                  duration: 0.9,
                  times: [0, 0.49, 0.5, 1],
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 14,
                  background: "var(--color-accent)",
                  borderRadius: 1,
                  marginLeft: 4,
                  verticalAlign: "middle",
                }}
              />
            )}
          </div>

          {/* Status dots */}
          <div
            style={{
              display: "flex",
              gap: 6,
              position: "absolute",
              left: 36,
              bottom: 28,
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background:
                    i === activeLogIndex % 3
                      ? "var(--color-accent)"
                      : "rgba(255,255,255,0.15)",
                  transition: "background 0.4s ease",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
