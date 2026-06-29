import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mic, MicOff, Loader2 } from "lucide-react";

type TalkState = "standby" | "connecting" | "live";

interface LiveTalkWidgetProps {
  className?: string;
}

export default function LiveTalkWidget({ className }: LiveTalkWidgetProps) {
  const [talkState, setTalkState] = useState<TalkState>("standby");
  const connectTimerRef = useRef<number | null>(null);

  // Cleanup pending connect timer on unmount
  useEffect(
    () => () => {
      if (connectTimerRef.current !== null) {
        window.clearTimeout(connectTimerRef.current);
      }
    },
    [],
  );

  const handleStartTalking = useCallback(() => {
    setTalkState("connecting");
    /* TODO: Integrate real-time voice SDK here — e.g. Vapi, Retell AI, or ElevenLabs Conversational AI */
    /* TODO: Replace setTimeout with actual voice SDK connection call */
    connectTimerRef.current = window.setTimeout(() => {
      setTalkState("live");
      connectTimerRef.current = null;
    }, 1500);
  }, []);

  const handleEndCall = useCallback(() => {
    /* TODO: Disconnect voice session here */
    if (connectTimerRef.current !== null) {
      window.clearTimeout(connectTimerRef.current);
      connectTimerRef.current = null;
    }
    setTalkState("standby");
  }, []);

  const triggerAction = () => {
    if (talkState === "standby") handleStartTalking();
    else if (talkState === "live") handleEndCall();
    // connecting state: no-op
  };

  const statusDotColor =
    talkState === "live" ? "var(--color-accent)" : "var(--color-text-muted)";
  const statusTextColor = statusDotColor;
  const statusLabel = talkState === "live" ? "LIVE" : "STANDBY";

  const headingLabel =
    talkState === "standby"
      ? "Talk to Nova"
      : talkState === "connecting"
        ? "Connecting…"
        : "Listening…";

  const headingColor =
    talkState === "standby"
      ? "var(--color-text-primary)"
      : talkState === "connecting"
        ? "var(--color-text-muted)"
        : "var(--color-accent)";

  const buttonLabel =
    talkState === "standby"
      ? "START TALKING"
      : talkState === "connecting"
        ? "CONNECTING…"
        : "END CALL";

  const circleBorderColor =
    talkState === "standby" ? "var(--color-border)" : "var(--color-accent)";
  const circleShadow =
    talkState === "connecting"
      ? "0 0 0 8px rgba(0, 212, 255, 0.08), 0 0 0 16px rgba(0, 212, 255, 0.04)"
      : "none";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      className={"w-full max-w-[420px] " + (className ?? "")}
    >
      <div
        className="relative flex flex-col items-center gap-6 rounded-[20px] p-7 sm:p-8 md:rounded-[28px]"
        style={{
          backgroundColor: "var(--color-surface-2)",
          border: "1px solid var(--color-border)",
          paddingTop: 36,
          boxShadow:
            "0 0 0 1px var(--color-border), 0 24px 64px rgba(0, 0, 0, 0.5), 0 0 80px rgba(0, 212, 255, 0.04)",
        }}
      >
        {/* Status indicator */}
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={
              "inline-block h-2 w-2 rounded-full " +
              (talkState === "live" ? "live-talk-dot--live" : "")
            }
            style={{ backgroundColor: statusDotColor }}
          />
          <span
            className="font-mono uppercase"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              color: statusTextColor,
            }}
          >
            {statusLabel}
          </span>
        </div>

        {/* Microphone circle */}
        <motion.button
          type="button"
          aria-label={talkState === "live" ? "End call" : "Start talking"}
          onClick={triggerAction}
          disabled={talkState === "connecting"}
          whileHover={talkState === "standby" ? { scale: 1.04 } : undefined}
          whileTap={talkState !== "connecting" ? { scale: 0.97 } : undefined}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative flex h-40 w-40 items-center justify-center rounded-full"
          style={{
            backgroundColor: "var(--color-surface)",
            border: `1.5px solid ${circleBorderColor}`,
            boxShadow: circleShadow,
            cursor: talkState === "connecting" ? "not-allowed" : "pointer",
            transition: "border-color 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          {/* Ripple rings — LIVE only */}
          {talkState === "live" && (
            <>
              <span className="live-talk-ripple" style={{ animationDelay: "0s" }} />
              <span
                className="live-talk-ripple"
                style={{ animationDelay: "0.5s" }}
              />
              <span className="live-talk-ripple" style={{ animationDelay: "1s" }} />
            </>
          )}

          {/* Icon */}
          <AnimatePresence mode="wait">
            <motion.span
              key={talkState}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2 }}
              className="relative flex items-center justify-center"
            >
              {talkState === "standby" && (
                <Mic
                  size={48}
                  strokeWidth={1.8}
                  color="var(--color-text-muted)"
                />
              )}
              {talkState === "connecting" && (
                <Loader2
                  size={48}
                  strokeWidth={1.8}
                  color="var(--color-accent)"
                  className="animate-spin"
                />
              )}
              {talkState === "live" && (
                <MicOff
                  size={48}
                  strokeWidth={1.8}
                  color="var(--color-accent)"
                />
              )}
            </motion.span>
          </AnimatePresence>
        </motion.button>

        {/* Label */}
        <div className="relative flex h-7 w-full items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={talkState}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="absolute font-display text-center"
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: headingColor,
              }}
            >
              {headingLabel}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Action button */}
        <button
          type="button"
          onClick={triggerAction}
          disabled={talkState === "connecting"}
          data-variant={talkState === "live" ? "live" : "default"}
          className="live-talk-action"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={talkState}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              {buttonLabel}
            </motion.span>
          </AnimatePresence>
        </button>

        {/* Disclaimer */}
        <p
          className="text-center"
          style={{
            fontFamily: '"DM Sans", ui-sans-serif, system-ui, sans-serif',
            fontSize: "0.72rem",
            color: "var(--color-text-muted)",
            opacity: 0.7,
          }}
        >
          Live AI demo. No account required.
        </p>
      </div>
    </motion.div>
  );
}
