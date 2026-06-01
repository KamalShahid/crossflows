import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageShell from "../components/PageShell";
import HeroBackground from "../components/HeroBackground";
import SectionHeader from "../components/SectionHeader";
import CTAButton from "../components/CTAButton";
import IndustriesShowcase from "../components/IndustriesShowcase";

export default function Industries() {
  return (
    <PageShell
      title="Industries · Cross Flows Synergy"
      description="Cross Flows Synergy is deployed across 9 industries — from financial services to logistics — with workflows tuned to the operational reality of each."
    >
      <section className="relative isolate overflow-hidden">
        <HeroBackground variant="subtle" />
        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-20 sm:px-8 sm:pt-28">
          <SectionHeader
            label="Industries"
            heading="Supporting Businesses Across Multiple Industries"
            subheading="Cross Flows Synergy develops AI-powered business solutions tailored for industries where communication, efficiency, and customer experience are critical."
            maxWidth="max-w-4xl"
          />
        </div>
      </section>

      <IndustriesShowcase />

      <section className="border-t border-[var(--color-border)] py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <SectionHeader
            label="Don’t see your industry?"
            heading="If your workflow lives at the intersection of voice, data, and decision — we’re probably a fit."
            align="center"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton to="/contact" withArrow>
              Talk to us
            </CTAButton>
            <Link
              to="/use-cases"
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-accent)]"
            >
              Browse all use cases <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
