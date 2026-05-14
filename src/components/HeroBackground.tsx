import { motion } from "framer-motion";

interface HeroBackgroundProps {
  variant?: "primary" | "subtle";
}

export default function HeroBackground({ variant = "primary" }: HeroBackgroundProps) {
  const opacity = variant === "primary" ? 1 : 0.65;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Layered radial gradients */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 18% 18%, rgba(0,212,255,0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 82% 30%, rgba(155,107,255,0.16), transparent 65%), radial-gradient(ellipse 80% 60% at 50% 100%, rgba(58,141,255,0.14), transparent 70%)",
          opacity,
        }}
      />

      {/* Grid mesh */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.13]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M56 0H0V56" fill="none" stroke="#3a8dff" strokeWidth="0.6" />
          </pattern>
          <radialGradient id="grid-fade" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="1" />
          </radialGradient>
          <mask id="grid-mask">
            <rect width="100%" height="100%" fill="url(#grid-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#grid-mask)" />
      </svg>

      {/* Animated orbits */}
      <motion.div
        className="absolute -left-32 top-1/3 h-[520px] w-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,212,255,0.28), transparent 60%)",
          filter: "blur(20px)",
        }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 top-1/4 h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(155,107,255,0.24), transparent 60%)",
          filter: "blur(20px)",
        }}
        animate={{ x: [0, -24, 0], y: [0, 18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Particle dots */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: 32 }).map((_, i) => {
          const cx = (i * 113) % 1600;
          const cy = (i * 167) % 900;
          const r = (i % 4) + 1;
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              fill="#7af9ff"
              opacity={0.18 + (i % 5) * 0.06}
            />
          );
        })}
      </svg>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
    </div>
  );
}
