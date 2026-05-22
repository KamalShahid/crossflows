import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageShell from "../components/PageShell";
import HeroBackground from "../components/HeroBackground";
import SectionHeader from "../components/SectionHeader";
import VideoPlayer from "../components/VideoPlayer";
import CTAButton from "../components/CTAButton";
import {
  solutions,
  solutionsSectionHeadline,
  solutionsSectionIntro,
  toDisplayTitle,
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
          const displayTitle = toDisplayTitle(s.title);
          return (
            <div key={s.slug} className="mx-auto max-w-7xl px-5 sm:px-8">
              <div
                className={
                  "group relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 " +
                  (flip ? "lg:[&>div:first-child]:order-2" : "")
                }
              >
                {/* Stretched link covering the full card row */}
                <Link
                  to={`/solutions/${s.slug}`}
                  aria-label={`Open ${s.title}`}
                  className="absolute inset-0 z-0 focus-visible:outline-none"
                />

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 flex flex-col gap-6"
                >
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${s.accent} text-black shadow-[0_12px_32px_rgba(0,212,255,0.35)]`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    Solution · {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-balance text-3xl font-bold leading-tight tracking-tight transition-colors duration-150 group-hover:text-[var(--color-accent)] sm:text-4xl md:text-5xl">
                    {displayTitle}
                  </h2>
                  <p className="text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
                    {s.description}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link
                      to={`/solutions/${s.slug}`}
                      className="relative z-10 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 font-display text-sm font-semibold tracking-tight text-[#031018] shadow-[0_10px_40px_rgba(0,212,255,0.35)] transition-shadow duration-200 hover:shadow-[0_18px_60px_rgba(0,212,255,0.55)]"
                    >
                      Read more
                      <ArrowRight size={14} />
                    </Link>
                    <CTAButton to="/contact" variant="secondary">
                      Talk to us about this
                    </CTAButton>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, delay: 0.08 }}
                  className="relative z-10"
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
