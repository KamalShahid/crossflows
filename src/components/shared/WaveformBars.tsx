import { motion } from "framer-motion";

interface WaveformBarsProps {
  isActive: boolean;
  color: string;
}

const HEIGHTS = [3, 6, 10, 8, 14, 10, 6, 12, 8, 4, 10, 6];

export default function WaveformBars({ isActive, color }: WaveformBarsProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        height: 16,
        marginTop: 4,
      }}
    >
      {HEIGHTS.map((h, i) => (
        <motion.div
          key={i}
          style={{
            width: 3,
            borderRadius: 2,
            background: color,
            height: h,
          }}
          animate={
            isActive
              ? { scaleY: [0.3, 1, 0.5, 1, 0.3] }
              : { scaleY: 0.3 }
          }
          transition={
            isActive
              ? {
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.07,
                  ease: "easeInOut",
                }
              : {}
          }
        />
      ))}
    </div>
  );
}
