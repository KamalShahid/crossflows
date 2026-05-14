import { useScrollReveal } from "../hooks/useScrollReveal";
import { useCountUp } from "../hooks/useCountUp";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  label,
}: AnimatedCounterProps) {
  const { ref, isInView } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const current = useCountUp(value, isInView, { decimals });

  const display =
    decimals === 0 ? current.toLocaleString() : current.toFixed(decimals);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="font-display text-4xl font-bold leading-none tracking-tight text-[var(--color-text-primary)] sm:text-5xl md:text-6xl">
        <span className="bg-gradient-to-br from-white via-[#cfeaff] to-[var(--color-accent)] bg-clip-text text-transparent">
          {prefix}
          {display}
          {suffix}
        </span>
      </div>
      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
        {label}
      </div>
    </div>
  );
}
