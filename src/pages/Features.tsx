import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
import PageShell from "../components/PageShell";
import HeroBackground from "../components/HeroBackground";
import SectionHeader from "../components/SectionHeader";
import CTAButton from "../components/CTAButton";
import { features } from "../data/features";
import {
  integrationsSection,
  integrationLogos,
  integrationCategories,
} from "../data/integrations";
import { insightsSection, securitySection } from "../data/home";

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

      {/* Integrations */}
      <section className="border-t border-[var(--color-border)] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            label={integrationsSection.label}
            heading={integrationsSection.headline}
            subheading={integrationsSection.body}
            maxWidth="max-w-3xl"
          />
          <div className="mt-12 grid items-center gap-6 sm:grid-cols-3 lg:grid-cols-7">
            {integrationLogos.map((logo, idx) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition hover:border-[var(--color-accent)]/60"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[#3a8dff] font-mono text-sm font-semibold text-black">
                  {logo.initials}
                </span>
                <span className="font-display text-xs font-medium text-[var(--color-text-primary)]/85">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {integrationCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Insights & Analytics */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/40 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            label={insightsSection.label}
            heading={insightsSection.headline}
            subheading={insightsSection.body}
            maxWidth="max-w-3xl"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {insightsSection.benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]/60 p-5 transition hover:border-[var(--color-accent)]/60"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                    <Icon className="h-5 w-5" strokeWidth={2.1} />
                  </span>
                  <span className="font-display text-base font-semibold leading-snug tracking-tight">
                    {b.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="border-t border-[var(--color-border)] py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[var(--color-accent)] to-[#3a8dff] text-black shadow-[0_20px_60px_rgba(0,212,255,0.35)]"
            >
              <ShieldCheck className="h-12 w-12" strokeWidth={1.8} />
            </motion.span>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {securitySection.label}
              </span>
              <h2 className="font-display text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {securitySection.headline}
              </h2>
              <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                {securitySection.body}
              </p>
              <div className="pt-2">
                <CTAButton to="/contact" withArrow>
                  Talk to security
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
