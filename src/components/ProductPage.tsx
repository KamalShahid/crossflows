import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import PageShell from "./PageShell";
import HeroBackground from "./HeroBackground";
import SectionHeader from "./SectionHeader";
import VideoPlayer from "./VideoPlayer";
import CTAButton from "./CTAButton";
import type { Product } from "../data/products";
import { useCases } from "../data/useCases";
import { industries } from "../data/industries";

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  const Icon = product.icon;
  const relatedUseCases = useCases.filter((u) => product.useCaseSlugs.includes(u.slug));
  const relatedIndustries = industries.filter((i) => product.industrySlugs.includes(i.slug));

  return (
    <PageShell
      title={`${product.name} · Cross Flows Synergy`}
      description={product.shortDescription}
    >
      {/* HERO */}
      <section className="relative isolate overflow-hidden pb-12">
        <HeroBackground variant="subtle" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pt-20 sm:px-8 sm:pt-28 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="flex flex-col gap-7">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]"
            >
              {product.heroEyebrow}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="font-display text-balance text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl md:text-7xl"
            >
              {product.name}.
              <span className="block bg-gradient-to-br from-white via-[#cfeaff] to-[var(--color-accent)] bg-clip-text text-transparent">
                {product.tagline}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
            >
              {product.longDescription}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              <CTAButton to="/contact" variant="primary" withArrow>
                Request a Demo
              </CTAButton>
              <CTAButton to="/products" variant="secondary">
                Compare products
              </CTAButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-md rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-2)] p-10 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
              <div
                className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${product.accent} opacity-25 blur-2xl`}
                aria-hidden
              />
              <div className="relative flex h-full flex-col items-center justify-center gap-6 text-center">
                <motion.span
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className={`flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br ${product.accent} text-black shadow-[0_20px_60px_rgba(0,212,255,0.45)]`}
                >
                  <Icon className="h-12 w-12" strokeWidth={1.9} />
                </motion.span>
                <div className="space-y-2">
                  <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
                    Live across
                  </div>
                  <div className="font-display text-2xl font-bold tracking-tight">
                    {relatedIndustries.length} industries
                  </div>
                  <div className="font-display text-2xl font-bold tracking-tight">
                    {relatedUseCases.length} use cases
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[var(--color-accent)]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-accent)]" />
                  Production-grade
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {/* TODO: Replace src with actual product video URL before launch */}
          <VideoPlayer
            src=""
            poster={`https://placehold.co/1920x1080/080b12/00d4ff?text=${encodeURIComponent(
              product.name + " — Live Demo",
            )}`}
            caption={product.videoCaption}
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            label="Capabilities"
            heading={`What makes ${product.name} different.`}
            maxWidth="max-w-2xl"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {product.features.map((f, idx) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                whileHover={{ y: -4 }}
                className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition hover:border-[var(--color-accent)]/60"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {f.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/30 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            label="Use Cases"
            heading={`Where ${product.name} earns its keep.`}
            maxWidth="max-w-2xl"
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {relatedUseCases.map((u) => {
              const UIcon = u.icon;
              return (
                <Link
                  key={u.slug}
                  to="/use-cases"
                  className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/60 px-4 py-2 text-sm transition hover:border-[var(--color-accent)]/60 hover:bg-[var(--color-surface-2)]"
                >
                  <UIcon className="h-4 w-4 text-[var(--color-accent)]" />
                  {u.title}
                  <ArrowRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            label="Industries Served"
            heading={`Tuned for the operational reality of ${relatedIndustries.length} verticals.`}
            maxWidth="max-w-2xl"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedIndustries.map((ind, idx) => {
              const IIcon = ind.icon;
              return (
                <motion.div
                  key={ind.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition hover:border-[var(--color-accent)]/50"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-surface-2)] text-[var(--color-accent)]">
                    <IIcon className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                  <div className="font-display text-sm font-semibold">{ind.name}</div>
                  <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">
                    {ind.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mockup */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/60 to-transparent" />
            <img
              src={`https://placehold.co/1600x900/0f1420/00d4ff?text=${encodeURIComponent(
                product.name + " · Live Console",
              )}`}
              alt={`${product.name} interface preview`}
              className="w-full"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-24">
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
            heading={`See ${product.name} run on your workflow.`}
            subheading="A 30-minute call. Tailored demo. Honest assessment of fit."
            align="center"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton to="/contact" variant="primary" withArrow>
              Request a Demo
            </CTAButton>
            <CTAButton to="/products" variant="secondary">
              Back to all products
            </CTAButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
