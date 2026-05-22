import AnimatedCounter from "./AnimatedCounter";

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
}

const stats: Stat[] = [
  { value: 40, suffix: "+", label: "Languages Supported" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Platform Uptime" },
  { value: 15, suffix: "+", label: "Production Use Cases" },
  { value: 20, suffix: "+", label: "Industries Served" },
];

export default function StatBar() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-6 rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-2)] px-6 py-10 sm:grid-cols-4 sm:px-10 sm:py-12">
          {stats.map((s) => (
            <AnimatedCounter
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              prefix={s.prefix}
              decimals={s.decimals}
              label={s.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
