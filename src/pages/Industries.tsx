import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageShell from "../components/PageShell";
import HeroBackground from "../components/HeroBackground";
import SectionHeader from "../components/SectionHeader";
import CTAButton from "../components/CTAButton";
import { industries } from "../data/industries";
import { getProduct } from "../data/products";
import { getUseCase } from "../data/useCases";

export default function Industries() {

  return (
    <PageShell
      title="Industries · Cross Flows Synergy"
      description="Cross Flows Synergy is deployed across 10 industries — from financial services to drive-thru QSR — with workflows tuned to the operational reality of each."
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

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              const products = ind.productSlugs.map((s) => getProduct(s)!).filter(Boolean);
              const useCases = ind.useCaseSlugs.map((s) => getUseCase(s)!).filter(Boolean);
              return (
                <motion.div
                  key={ind.slug}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-shadow hover:border-[var(--color-accent)]/60 hover:shadow-[0_20px_60px_rgba(0,212,255,0.18)]"
                >
                  {/* Stretched link covers the whole card — inner links sit above via z-10 */}
                  <Link
                    to={`/industries/${ind.slug}`}
                    aria-label={`Open ${ind.name}`}
                    className="absolute inset-0 z-0 focus-visible:outline-none"
                  />
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 bg-gradient-to-br ${ind.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30`}
                  />
                  <span
                    className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${ind.accent} text-black shadow-[0_8px_24px_rgba(0,212,255,0.25)]`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <h3 className="relative z-10 font-display text-xl font-bold tracking-tight transition-colors duration-150 group-hover:text-[var(--color-accent)]">
                    {ind.name}
                  </h3>
                  <p className="relative z-10 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {ind.description}
                  </p>
                  <div className="relative z-10 mt-auto flex flex-col gap-3 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {products.map((p) => (
                        <Link
                          key={p.slug}
                          to={`/products/${p.slug}`}
                          className="relative z-10 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-primary)]/80 transition hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)]"
                        >
                          {p.name}
                        </Link>
                      ))}
                    </div>
                    <div className="opacity-0 transition group-hover:opacity-100">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                        Common use cases
                      </p>
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        {useCases.map((u) => (
                          <span
                            key={u.slug}
                            className="rounded-full bg-[var(--color-accent)]/10 px-2 py-0.5 text-[10px] text-[var(--color-accent)]"
                          >
                            {u.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

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
