import { Link } from "react-router-dom";
import { industries } from "../data/industries";

export default function IndustryMarquee() {
  const doubled = [...industries, ...industries];
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-bg)] py-10">
      <div className="mx-auto mb-6 max-w-7xl px-5 sm:px-8">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
          Serving businesses across industries
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[var(--color-bg)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[var(--color-bg)] to-transparent" />
        <div
          className="flex w-max gap-3 px-5 sm:px-8"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {doubled.map((ind, idx) => (
            <Link
              key={`${ind.slug}-${idx}`}
              to={`/industries/${ind.slug}`}
              className="whitespace-nowrap"
              style={{
                backgroundColor: "var(--color-surface-2)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-muted)",
                borderRadius: 999,
                padding: "6px 16px",
                fontSize: "0.8rem",
                fontFamily:
                  '"JetBrains Mono", ui-monospace, "SFMono-Regular", monospace',
              }}
            >
              {ind.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
