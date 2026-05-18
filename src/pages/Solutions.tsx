import { motion } from "framer-motion";
import PageShell from "../components/PageShell";
import HeroBackground from "../components/HeroBackground";
import SectionHeader from "../components/SectionHeader";
import VideoPlayer from "../components/VideoPlayer";
import CTAButton from "../components/CTAButton";
import {
  solutions,
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

      <section className="space-y-24 pb-24">
        {solutions.map((s, idx) => {
          const Icon = s.icon;
          const flip = idx % 2 === 1;
          return (
            <div key={s.slug} className="mx-auto max-w-7xl px-5 sm:px-8">
              <div
                className={
                  "grid grid-cols-1 items-center gap-12 lg:grid-cols-2 " +
                  (flip ? "lg:[&>div:first-child]:order-2" : "")
                }
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col gap-6"
                >
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${s.accent} text-black shadow-[0_12px_32px_rgba(0,212,255,0.35)]`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    Solution · {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                    {s.title}
                  </h2>
                  <p className="text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
                    {s.description}
                  </p>
                  <div className="pt-2">
                    <CTAButton to="/contact" withArrow>
                      Talk to us about this
                    </CTAButton>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, delay: 0.08 }}
                >
                  {/* TODO: Add problem/solution video URL */}
                  <VideoPlayer src="" poster={s.poster} caption={s.title} />
                </motion.div>
              </div>
            </div>
          );
        })}
      </section>

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
