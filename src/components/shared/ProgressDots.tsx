import { motion } from "framer-motion";

interface ProgressDotsProps {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  /** Color for the currently active dot. Defaults to `var(--color-accent)`. */
  activeColor?: string;
  /** Aria label per dot. */
  getAriaLabel?: (index: number) => string;
}

export default function ProgressDots({
  count,
  activeIndex,
  onSelect,
  activeColor = "var(--color-accent)",
  getAriaLabel,
}: ProgressDotsProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: 6,
        marginTop: 24,
        alignItems: "center",
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          onClick={() => onSelect(i)}
          role="button"
          tabIndex={0}
          aria-label={getAriaLabel ? getAriaLabel(i) : `Slide ${i + 1}`}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelect(i);
            }
          }}
          style={{
            height: 3,
            borderRadius: 999,
            cursor: "pointer",
            background:
              i === activeIndex ? activeColor : "var(--color-border)",
          }}
          animate={{ width: i === activeIndex ? 32 : 8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
