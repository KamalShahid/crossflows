import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import PageShell from "../components/PageShell";
import HeroBackground from "../components/HeroBackground";
import SectionHeader from "../components/SectionHeader";
import VideoPlayer from "../components/VideoPlayer";
import CTAButton from "../components/CTAButton";
import {
  solutions,
  getSolution,
  toDisplayTitle,
  type SolutionSlug,
} from "../data/solutions";
import { getProduct } from "../data/products";
import { getIndustry } from "../data/industries";

export default function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const solution = slug ? getSolution(slug as SolutionSlug) : undefined;

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  const Icon = solution.icon;
  const displayTitle = toDisplayTitle(solution.title);
  const relatedProducts = solution.productSlugs
    .map((s) => getProduct(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const relatedIndustries = solution.industrySlugs
    .map((s) => getIndustry(s))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));
  const relatedSolutions = solutions
    .filter((s) => s.slug !== solution.slug)
    .slice(0, 3);

  return (
    <PageShell
      title={`${solution.title} · Cross Flows Synergy`}
      description={solution.description}
    >
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <HeroBackground variant="subtle" />
        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-20 sm:px-8 sm:pt-28">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-[0.8rem] text-[var(--color-text-muted)]"
          >
            <Link
              to="/solutions"
              className="font-medium transition-colors duration-150 hover:text-[var(--color-text-primary)]"
            >
              Solutions
            </Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className="text-[var(--color-text-primary)]">{displayTitle}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-6 flex flex-col gap-6"
          >
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${solution.accent} text-black shadow-[0_10px_30px_rgba(0,212,255,0.35)]`}
            >
              <Icon size={28} strokeWidth={2} />
            </span>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Solution
            </span>
            {/* Full title with "AI" prefix restored for the hero heading */}
            <h1 className="font-display text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {solution.title}
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
              {solution.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton to="/contact" variant="primary" withArrow>
                Book a Demo
              </CTAButton>
              <CTAButton to="/solutions" variant="secondary">
                Back to all solutions
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {/* TODO: Add problem/solution video URL */}
          <VideoPlayer src="" poster={solution.poster} caption={solution.title} />
        </div>
      </section>

      {/* Applicable products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-[var(--color-border)] py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeader
              label="Applicable Products"
              heading={`The products powering ${displayTitle.toLowerCase()}.`}
              align="center"
              maxWidth="max-w-3xl"
            />
            <div className="mt-10 flex flex-wrap justify-center gap-2.5">
              {relatedProducts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="solution-pill transition-colors duration-150 ease-out"
                  style={{
                    backgroundColor: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-muted)",
                    borderRadius: 999,
                    padding: "6px 16px",
                    fontSize: "0.8rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.color = "var(--color-text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.color = "var(--color-text-muted)";
                  }}
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Applicable industries */}
      {relatedIndustries.length > 0 && (
        <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/30 py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeader
              label="Applicable Industries"
              heading="Where this solution shows up."
              align="center"
              maxWidth="max-w-3xl"
            />
            <div className="mt-10 flex flex-wrap justify-center gap-2.5">
              {relatedIndustries.map((ind) => (
                <Link
                  key={ind.slug}
                  to={`/industries/${ind.slug}`}
                  className="solution-pill transition-colors duration-150 ease-out"
                  style={{
                    backgroundColor: "var(--color-surface-2)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-muted)",
                    borderRadius: 999,
                    padding: "6px 16px",
                    fontSize: "0.8rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.color = "var(--color-text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.color = "var(--color-text-muted)";
                  }}
                >
                  {ind.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related solutions */}
      <section className="border-t border-[var(--color-border)] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            label="Related Solutions"
            heading="More ways Cross Flows Synergy helps."
            align="center"
            maxWidth="max-w-3xl"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedSolutions.map((s, idx) => {
              const SIcon = s.icon;
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-shadow hover:border-[var(--color-accent)]/60 hover:shadow-[0_18px_50px_rgba(0,212,255,0.15)]"
                >
                  <Link
                    to={`/solutions/${s.slug}`}
                    aria-label={`Open ${s.title}`}
                    className="absolute inset-0 z-0 focus-visible:outline-none"
                  />
                  <span
                    className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} text-black`}
                  >
                    <SIcon size={20} strokeWidth={2.1} />
                  </span>
                  <h3 className="relative z-10 font-display text-lg font-semibold tracking-tight transition-colors duration-150 group-hover:text-[var(--color-accent)]">
                    {toDisplayTitle(s.title)}
                  </h3>
                  <p className="relative z-10 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {s.description}
                  </p>
                  <span className="relative z-10 mt-auto inline-flex items-center gap-1 text-[0.85rem] font-medium text-[var(--color-accent)] opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                    Read more
                    <ArrowRight size={14} />
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

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
            heading={`See ${displayTitle.toLowerCase()} run on your workflow.`}
            subheading="A 30-minute call. Tailored demo. Honest assessment of fit."
            align="center"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton to="/contact" variant="primary" withArrow>
              Book a Demo
            </CTAButton>
            <CTAButton to="/solutions" variant="secondary">
              Back to all solutions
            </CTAButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
