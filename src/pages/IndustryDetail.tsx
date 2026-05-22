import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import PageShell from "../components/PageShell";
import SectionHeader from "../components/SectionHeader";
import CTAButton from "../components/CTAButton";
import { getIndustry, type IndustrySlug } from "../data/industries";
import { getProduct, type ProductSlug } from "../data/products";

const productSolidAccent: Record<ProductSlug, string> = {
  smarttalk: "var(--color-accent)",
  worksync: "#3a8dff",
  learnmate: "#9b6bff",
  driveflow: "var(--color-accent-warm)",
};

export default function IndustryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustry(slug as IndustrySlug) : undefined;

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const Icon = industry.icon;
  const bannerSrc = `https://placehold.co/1440x400/0F1420/00D4FF?text=${encodeURIComponent(
    industry.name,
  )}`;

  return (
    <PageShell
      title={`${industry.name} · Cross Flows Synergy`}
      description={industry.intro}
    >
      {/* Hero banner */}
      <section className="relative isolate">
        <div className="relative h-[260px] w-full overflow-hidden sm:h-[340px] lg:h-[400px]">
          <img
            src={bannerSrc}
            alt={industry.name}
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-transparent to-[var(--color-bg)]" />
          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-7xl flex-col justify-between px-5 py-8 sm:px-8 sm:py-10">
              {/* Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-1.5 text-[0.8rem] text-[var(--color-text-muted)]"
              >
                <Link
                  to="/industries"
                  className="font-medium transition-colors duration-150 hover:text-[var(--color-text-primary)]"
                >
                  Industries
                </Link>
                <ChevronRight size={14} aria-hidden="true" />
                <span className="text-[var(--color-text-primary)]">
                  {industry.name}
                </span>
              </nav>

              {/* Bottom block: icon + name */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="flex flex-col gap-4 sm:flex-row sm:items-end"
              >
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${industry.accent} text-black shadow-[0_10px_30px_rgba(0,212,255,0.35)]`}
                >
                  <Icon size={28} strokeWidth={2.1} />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    Industry
                  </span>
                  <h1 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                    {industry.name}
                  </h1>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Headline + Intro */}
      <section className="border-t border-[var(--color-border)] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="font-display text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl"
          >
            {industry.headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="mt-5 text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
          >
            {industry.intro}
          </motion.p>
        </div>
      </section>

      {/* Product feature sections (or cardOnly fallback) */}
      {industry.cardOnly || industry.productFeatures.length === 0 ? (
        <section className="border-t border-[var(--color-border)] py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <SectionHeader
              label="Tailored Deployment"
              heading="This industry calls for a custom engagement."
              subheading="We scope deployments around your compliance posture, integrations, and operational realities. Talk to our team for a fit assessment."
              align="center"
            />
            <div className="mt-8 flex justify-center">
              <CTAButton to="/contact" variant="primary" withArrow>
                Talk to our team
              </CTAButton>
            </div>
          </div>
        </section>
      ) : (
        <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/30 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeader
              label="How We Help"
              heading={`Cross Flows Synergy products in ${industry.name.toLowerCase()}.`}
              align="center"
              maxWidth="max-w-3xl"
            />
            <div className="mt-12 flex flex-col gap-6">
              {industry.productFeatures.map((group, groupIdx) => {
                const product = getProduct(group.productSlug);
                if (!product) return null;
                const accent = productSolidAccent[group.productSlug];
                const Icon = product.icon;
                return (
                  <motion.article
                    key={group.productSlug}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.55, delay: groupIdx * 0.06 }}
                    className="rounded-2xl bg-[var(--color-surface)] p-6 sm:p-8"
                    style={{
                      border: "1px solid var(--color-border)",
                      borderTop: `4px solid ${accent}`,
                    }}
                  >
                    <div className="flex flex-col gap-3 border-b border-[var(--color-border)] pb-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-10 w-10 items-center justify-center rounded-lg"
                          style={{
                            backgroundColor: "var(--color-surface-2)",
                            color: accent,
                          }}
                        >
                          <Icon size={20} strokeWidth={2.1} />
                        </span>
                        <span
                          className="rounded-full px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.18em]"
                          style={{
                            backgroundColor: "var(--color-surface-2)",
                            border: `1px solid ${accent}`,
                            color: accent,
                          }}
                        >
                          {product.name}
                        </span>
                        <span className="hidden text-sm text-[var(--color-text-muted)] sm:inline">
                          {product.subtitle}
                        </span>
                      </div>
                      <Link
                        to={`/products/${product.slug}`}
                        className="inline-flex items-center gap-1 text-[0.85rem] font-medium text-[var(--color-accent)] transition-colors duration-150 hover:text-[var(--color-text-primary)]"
                      >
                        Explore {product.name}
                        <ArrowRight size={14} />
                      </Link>
                    </div>

                    <div className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-x-8">
                      {group.features.map((f) => (
                        <div key={f.title} className="flex flex-col gap-1.5">
                          <div className="font-display text-base font-semibold tracking-tight text-[var(--color-text-primary)]">
                            {f.title}
                          </div>
                          <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                            {f.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Benefits icon grid */}
      {industry.benefits.length > 0 && (
        <section className="border-t border-[var(--color-border)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeader
              label="Outcomes"
              heading={`Why ${industry.name.toLowerCase()} teams choose Cross Flows Synergy.`}
              align="center"
              maxWidth="max-w-3xl"
            />
            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {industry.benefits.map((b, idx) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-shadow duration-200 hover:shadow-[0_12px_36px_rgba(0,212,255,0.12)]"
                >
                  <CheckCircle
                    size={22}
                    strokeWidth={2}
                    style={{ color: "var(--color-accent)" }}
                  />
                  <span className="font-display text-[0.95rem] font-semibold leading-snug tracking-tight">
                    {b}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="relative overflow-hidden border-t border-[var(--color-border)] py-20">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 50%, rgba(0,212,255,0.16), transparent 70%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <SectionHeader
            label="Next step"
            heading={`See Cross Flows Synergy run for ${industry.name.toLowerCase()}.`}
            subheading="A 30-minute call. Tailored demo. Honest assessment of fit."
            align="center"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton to="/contact" variant="primary" withArrow>
              Book a Demo
            </CTAButton>
            <CTAButton to="/industries" variant="secondary">
              Back to all industries
            </CTAButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
