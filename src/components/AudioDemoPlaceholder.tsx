interface AudioDemoPlaceholderProps {
  label?: string;
  duration?: string;
  audioSrc?: string;
  className?: string;
}

// Stable bar heights (px). 28 bars at staggered delays form a continuous
// flowing waveform — no randomness, identical shape across renders.
const BAR_HEIGHTS = [
  4, 8, 14, 10, 18, 6, 20, 12, 8, 16, 22, 10, 6, 18, 14, 8, 20, 12, 6, 16, 10, 18, 8, 14, 6, 20,
  10, 4,
];

export default function AudioDemoPlaceholder({
  label = "Listen to a demo call",
  duration = "0:00 / 2:30",
  audioSrc = "",
  className,
}: AudioDemoPlaceholderProps) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        background: "var(--color-surface-2)",
        border: "1px solid var(--color-border)",
        borderRadius: 12,
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        marginTop: 12,
      }}
    >
      {/* Play button */}
      <button
        type="button"
        onClick={() => {
          /* TODO: Connect audio src */
        }}
        aria-label="Play demo audio"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "var(--color-accent)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "box-shadow 0.2s ease, transform 0.15s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 0 20px rgba(0,212,255,0.4)";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        {/* Triangle play icon — inline SVG so no Lucide import needed here */}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M3 2L12 7L3 12V2Z" fill="var(--color-bg)" />
        </svg>
      </button>

      {/* Label + waveform */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "0.82rem",
            color: "var(--color-text-primary)",
            fontWeight: 500,
            marginBottom: 6,
          }}
        >
          {label}
        </div>
        <div
          aria-hidden="true"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            height: 24,
          }}
        >
          {BAR_HEIGHTS.map((h, i) => (
            <div
              key={i}
              style={{
                width: 3,
                height: h,
                background: "var(--color-accent)",
                borderRadius: 2,
                opacity: 0.5,
                animation: `waveBar 1.4s ease-in-out ${(i * 0.05) % 1.4}s infinite`,
                transformOrigin: "center",
              }}
            />
          ))}
        </div>
      </div>

      {/* Duration */}
      <div
        style={{
          fontFamily: '"JetBrains Mono", ui-monospace, monospace',
          fontSize: "0.72rem",
          color: "var(--color-text-muted)",
          flexShrink: 0,
        }}
      >
        {/* TODO: Replace with real duration when audio is added */}
        {duration}
      </div>

      {/* TODO: Add real audio element when demo recordings are available */}
      {/* <audio src={audioSrc} preload="none" /> */}
      {audioSrc ? null : null}
    </div>
  );
}
