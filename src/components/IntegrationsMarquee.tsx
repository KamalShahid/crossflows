import SectionHeader from "./SectionHeader";
import LogoTile from "./shared/LogoTile";
import {
  integrationsSection,
  integrationLogos,
  integrationCategories,
  type IntegrationLogo,
} from "../data/integrations";

export default function IntegrationsMarquee() {
  const doubled = [...integrationLogos, ...integrationLogos];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          label={integrationsSection.label}
          heading={integrationsSection.headline}
          subheading={integrationsSection.body}
          align="center"
          maxWidth="max-w-3xl"
        />
      </div>

      <div className="relative mt-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[var(--color-bg)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[var(--color-bg)] to-transparent" />
        <div
          className="integrations-marquee flex w-max items-center gap-4 px-5 sm:px-8"
          style={{ animation: "marquee 25s linear infinite" }}
        >
          {doubled.map((logo, idx) => (
            <LogoPill key={`${logo.name}-${idx}`} logo={logo} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-center gap-3 px-5 sm:px-8">
        {integrationCategories.map((category) => (
          <span
            key={category}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]"
          >
            {category}
          </span>
        ))}
      </div>
    </section>
  );
}

function LogoPill({ logo }: { logo: IntegrationLogo }) {
  return (
    <div
      className="group flex items-center justify-center"
      style={{
        backgroundColor: "var(--color-surface-2)",
        border: "1px solid var(--color-border)",
        borderRadius: 12,
        padding: "12px 24px",
        minWidth: 160,
        height: 64,
      }}
    >
      <LogoTile
        name={logo.name}
        logoUrl={logo.url}
        size={28}
        fallbackBg="transparent"
        fallbackColor="var(--color-text-muted)"
      />
    </div>
  );
}
