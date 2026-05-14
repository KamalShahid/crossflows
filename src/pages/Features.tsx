import { motion } from "framer-motion";
import { Check } from "lucide-react";
import PageShell from "../components/PageShell";
import HeroBackground from "../components/HeroBackground";
import SectionHeader from "../components/SectionHeader";
import CTAButton from "../components/CTAButton";
import { features } from "../data/features";

export default function Features() {
  return (
    <PageShell
      title="Features · Cross Flows Synergy"
      description="Inside the Cross Flows Synergy platform: engine, languages, integrations, data, and security — the five pillars that compound into enterprise-grade AI."
    >
      <section className="relative isolate overflow-hidden">
        <HeroBackground variant="subtle" />
        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-20 sm:px-8 sm:pt-28">
          <SectionHeader
            label="The Platform"
            heading="Five pillars. One platform that compounds with every conversation."
            subheading="The capabilities below show up across every Cross Flows Synergy product — and are the reason our customers don’t hit a ceiling six months in."
            maxWidth="max-w-4xl"
          />
        </div>
      </section>

      <section className="space-y-32 pb-24">
        {features.map((f, idx) => {
          const Icon = f.icon;
          const flip = idx % 2 === 1;
          return (
            <div key={f.slug} className="mx-auto max-w-7xl px-5 sm:px-8">
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
                  className="relative overflow-hidden rounded-3xl border border-[var(--color-border)]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/60 to-transparent" />
                  <img
                    src={f.image}
                    alt={f.label}
                    className="w-full"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/70 to-transparent" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, delay: 0.08 }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                        Pillar · {f.number}
                      </div>
                      <div className="font-display text-lg font-semibold tracking-tight">
                        {f.label}
                      </div>
                    </div>
                  </div>
                  <h2 className="font-display text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                    {f.heading}
                  </h2>
                  <div className="flex flex-col gap-3 text-base leading-relaxed text-[var(--color-text-muted)]">
                    {f.copy.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  <ul className="flex flex-col gap-3">
                    {f.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm text-[var(--color-text-primary)]/85"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="border-t border-[var(--color-border)] py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <SectionHeader
            label="Compliance & Trust"
            heading="Built so your security team says yes the first time."
            subheading="SOC 2 Type II. ISO 27001 in progress. HIPAA-aware workflows. Data residency in US, EU, UK, and APAC. PCI DSS aligned for payment flows."
            align="center"
          />
          <div className="mt-8 flex justify-center">
            <CTAButton to="/contact" withArrow>
              Talk to security
            </CTAButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
