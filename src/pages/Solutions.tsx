import PageShell from "../components/PageShell";
import HeroBackground from "../components/HeroBackground";
import SectionHeader from "../components/SectionHeader";
import CTAButton from "../components/CTAButton";
import SolutionsShowcase from "../components/SolutionsShowcase";
import {
  solutionsSectionHeadline,
  solutionsSectionIntro,
} from "../data/solutions";
import { bottomCTA } from "../data/home";

export default function Solutions() {
  return (
    <PageShell
      title="Solutions · Cross Flows Synergy"
      description="AI-powered solutions for reception, scheduling, lead qualification, workflow automation, support, communication, scheduling, and operational assistance."
    >
      <section className="relative isolate overflow-hidden">
        <HeroBackground variant="subtle" />
        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-20 sm:px-8 sm:pt-28">
          <SectionHeader
            label="Solutions"
            heading={solutionsSectionHeadline}
            subheading={solutionsSectionIntro}
            maxWidth="max-w-4xl"
          />
        </div>
      </section>

      <SolutionsShowcase />

      <section className="relative overflow-hidden border-t border-[var(--color-border)] py-24">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 50%, rgba(0,212,255,0.18), transparent 70%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <SectionHeader
            label={bottomCTA.label}
            heading={bottomCTA.headline}
            subheading={bottomCTA.subheading}
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {bottomCTA.buttons.map((b, idx) => (
              <CTAButton
                key={b.label}
                to={b.to}
                variant={idx === 0 ? "primary" : "secondary"}
                withArrow={idx === 0}
              >
                {b.label}
              </CTAButton>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
