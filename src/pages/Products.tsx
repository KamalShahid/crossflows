import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import PageShell from "../components/PageShell";
import HeroBackground from "../components/HeroBackground";
import SectionHeader from "../components/SectionHeader";
import CTAButton from "../components/CTAButton";
import { products } from "../data/products";

export default function Products() {
  return (
    <PageShell
      title="Products · Cross Flows Synergy"
      description="SmartTalk™, DriveFlow™, LearnMate™, WorkSync™ — four AI-powered products built for the highest-leverage moments in modern business operations."
    >
      <section className="relative isolate overflow-hidden">
        <HeroBackground variant="subtle" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pt-28">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]"
          >
            Products
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="mt-4 font-display text-balance text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl md:text-7xl"
          >
            Four products. One unified AI platform built to execute.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
            className="mt-6 max-w-2xl text-base text-[var(--color-text-muted)] sm:text-lg"
          >
            Every product runs on the same AI engine, security framework, and analytics
            infrastructure. Start with one solution and expand seamlessly as you grow with deployment
            measured in days, not quarters.
          </motion.p>
        </div>
      </section>

      <section className="space-y-32 pb-24">
        {products.map((p, idx) => {
          const Icon = p.icon;
          const flip = idx % 2 === 1;
          return (
            <div
              key={p.slug}
              className="mx-auto max-w-7xl px-5 sm:px-8"
            >
              <div
                className={
                  "grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:items-stretch " +
                  (flip ? "lg:[&>div:first-child]:order-2" : "")
                }
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-2)] p-8 lg:aspect-auto lg:h-full"
                >
                  {/* Background image — hides itself on error so the gradient panel remains */}
                  <img
                    src={p.overviewImageUrl}
                    alt={`${p.name} overview`}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                      opacity: 0.3,
                    }}
                  />
                  {/* Dark gradient overlay keeps the icon + labels legible */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, rgba(8,11,24,0.5) 0%, rgba(8,11,24,0.85) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                  {/* Accent-tinted blur corner — kept from the prior design */}
                  <div
                    className={`pointer-events-none absolute -top-20 right-0 h-72 w-72 bg-gradient-to-br ${p.accent} opacity-25 blur-3xl`}
                  />
                  <div
                    className="flex h-full flex-col justify-between"
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} text-black shadow-[0_12px_32px_rgba(0,212,255,0.35)]`}
                    >
                      <Icon className="h-7 w-7" strokeWidth={2} />
                    </span>
                    <div>
                      <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-accent)]">
                        {p.heroEyebrow}
                      </div>
                      <div className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                        {p.name}
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex flex-col gap-6"
                >
                  <h2 className="font-display text-left text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                    {p.tagline}
                  </h2>
                  <p className="text-left text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
                    {p.longDescription}
                  </p>
                  <ul className="flex flex-col gap-4">
                    {(p.listingHighlights ?? p.features.slice(0, 3)).map((f) => (
                      <li
                        key={f.title}
                        className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-text-primary)]/85"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <div className="flex-1 text-left">
                          <div className="font-display font-semibold text-[var(--color-text-primary)]">
                            {f.title}
                          </div>
                          <p className="text-left text-sm leading-relaxed text-[var(--color-text-muted)]">
                            {f.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <CTAButton to={`/products/${p.slug}`} variant="primary" withArrow>
                      Explore {p.name}
                    </CTAButton>
                    <CTAButton to="/contact" variant="secondary">
                      Talk to sales
                    </CTAButton>
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="border-t border-[var(--color-border)] py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <SectionHeader
            label="Not sure where to start?"
            heading="We’ll help you pick the right starting product — and the path to the rest."
            align="center"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton to="/contact" withArrow>
              Book a 30-minute call
            </CTAButton>
            <Link
              to="/use-cases"
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-accent)]"
            >
              Browse use cases <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
