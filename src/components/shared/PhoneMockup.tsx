import { type CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WaveformBars from "./WaveformBars";

export type CallStatus = "CONNECTED" | "CALL ENDED";

export interface PhoneMockupProps {
  /** Stable identity per slide — drives the AnimatePresence cross-fade. */
  keyId: string;
  customerName: string;
  customerRole: string;
  agentPersona: string;
  /** CSS gradient string applied as the agent avatar background. */
  agentGradient: string;
  callStatus: CallStatus;
  callTime: string;
  customerQuote: string;
  metric: string;
  metricLabel: string;
  /** Color of the large metric value in the bottom-left white panel. Defaults to dark `#111`. */
  metricColor?: string;
}

const phoneFrameStyle: CSSProperties = {
  width: "100%",
  height: 580,
  background: "#0A0D14",
  border: "1.5px solid rgba(255,255,255,0.1)",
  borderRadius: 40,
  padding: "28px 20px 24px 20px",
  display: "flex",
  flexDirection: "column",
  gap: 20,
  position: "relative",
  boxShadow:
    "0 0 0 6px rgba(255,255,255,0.03), 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(0,212,255,0.04)",
  flexShrink: 0,
};

export default function PhoneMockup({
  keyId,
  customerName,
  customerRole,
  agentPersona,
  agentGradient,
  callStatus,
  callTime,
  customerQuote,
  metric,
  metricLabel,
  metricColor = "#111",
}: PhoneMockupProps) {
  return (
    <div
      className="w-full max-w-[260px] lg:max-w-[300px]"
      style={{ flexShrink: 0 }}
    >
      <div style={phoneFrameStyle}>
        <AnimatePresence mode="wait">
          <motion.div
            key={keyId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              flex: 1,
            }}
          >
            {/* Status bar */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background:
                      callStatus === "CONNECTED" ? "#00CF78" : "#FF4444",
                  }}
                />
                <span
                  style={{
                    fontFamily:
                      '"JetBrains Mono", ui-monospace, monospace',
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {callStatus}
                </span>
              </div>
              <span
                style={{
                  fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                  fontSize: "0.65rem",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                {callTime}
              </span>
            </div>

            {/* Avatar row */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 40,
                marginTop: 4,
              }}
            >
              {/* Customer avatar */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div
                  className="font-display"
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.15)",
                    border: "2px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  {customerName[0]}
                </div>
                <span
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.8)",
                    fontWeight: 500,
                  }}
                >
                  {customerName}
                </span>
                <span
                  style={{
                    fontFamily:
                      '"JetBrains Mono", ui-monospace, monospace',
                    fontSize: "0.58rem",
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {customerRole}
                </span>
                <WaveformBars isActive={true} color="rgba(255,255,255,0.5)" />
              </div>

              {/* CF Agent avatar */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div
                  className="font-display"
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: agentGradient,
                    border: "2px solid rgba(0,212,255,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  CF
                </div>
                <span
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.8)",
                    fontWeight: 500,
                  }}
                >
                  CF Agent
                </span>
                <span
                  style={{
                    fontFamily:
                      '"JetBrains Mono", ui-monospace, monospace',
                    fontSize: "0.58rem",
                    color: "var(--color-accent)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {agentPersona} · AI
                </span>
                <div style={{ display: "flex", gap: 3, marginTop: 4 }}>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: 3,
                        height: 3,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.2)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Customer quote */}
            <div
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14,
                padding: "12px 14px",
                marginTop: "auto",
              }}
            >
              <div
                style={{
                  fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                  fontSize: "0.6rem",
                  letterSpacing: "0.08em",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: 6,
                  textTransform: "uppercase",
                }}
              >
                {customerName}
              </div>
              <div
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.5,
                  fontStyle: "italic",
                }}
              >
                {customerQuote}
              </div>
            </div>

            {/* Bottom stats row */}
            <div style={{ display: "flex", gap: 10 }}>
              <div
                style={{
                  flex: 1,
                  background: "#fff",
                  borderRadius: 12,
                  padding: "12px 14px",
                }}
              >
                <div
                  style={{
                    fontFamily:
                      '"JetBrains Mono", ui-monospace, monospace',
                    fontSize: "0.6rem",
                    letterSpacing: "0.08em",
                    color: "#666",
                    marginBottom: 4,
                    textTransform: "uppercase",
                  }}
                >
                  {metricLabel}
                </div>
                <div
                  className="font-display"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: metricColor,
                    lineHeight: 1,
                  }}
                >
                  {metric}
                </div>
              </div>

              <div
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: 12,
                  padding: "12px 14px",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  style={{
                    fontFamily:
                      '"JetBrains Mono", ui-monospace, monospace',
                    fontSize: "0.6rem",
                    letterSpacing: "0.08em",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: 4,
                    textTransform: "uppercase",
                  }}
                >
                  AGENT
                </div>
                <div
                  className="font-display"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.1,
                  }}
                >
                  {agentPersona}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
