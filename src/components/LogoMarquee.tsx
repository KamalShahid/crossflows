const enterpriseLogos = [
  "Northbridge",
  "Helios",
  "Lattice Bank",
  "Skyforge",
  "Verdex",
  "Quantum Rail",
  "Aurelia",
  "Pavo Health",
  "Westline",
  "Atlas Hotels",
];

export default function LogoMarquee() {
  const doubled = [...enterpriseLogos, ...enterpriseLogos];
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-bg)] py-10">
      <div className="mx-auto mb-6 max-w-7xl px-5 sm:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
          Trusted by leading enterprises across 4 continents
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[var(--color-bg)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[var(--color-bg)] to-transparent" />
        <div className="flex w-max animate-marquee gap-12 px-5 sm:px-8">
          {doubled.map((name, idx) => (
            <div
              key={`${name}-${idx}`}
              className="flex items-center gap-3 whitespace-nowrap text-[var(--color-text-muted)]/70"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path
                  d="M3 11 L9 5 L13 9 L19 3"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="19" cy="3" r="1.6" fill="currentColor" />
              </svg>
              <span className="font-display text-xl font-semibold tracking-tight">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
