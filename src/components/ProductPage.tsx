import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import PageShell from "./PageShell";
import HeroBackground from "./HeroBackground";
import SectionHeader from "./SectionHeader";
import VideoPlayer from "./VideoPlayer";
import CTAButton from "./CTAButton";
import ExpandableDescription from "./ExpandableDescription";
import UseCasesShowcase from "./UseCasesShowcase";
import type { Product } from "../data/products";
import { useCases } from "../data/useCases";
import { industries } from "../data/industries";

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  const Icon = product.icon;
  const relatedUseCases = useCases.filter((u) => product.useCaseSlugs.includes(u.slug));
  // Products may opt into a curated `industriesServed` list (e.g. DriveFlow's
  // restaurants/banks split where one industry slug needs to render as multiple
  // distinct cards). Otherwise we fall back to the industries data lookup.
  const industryCards = product.industriesServed
    ? product.industriesServed.map((e) => ({
        key: `${e.slug ?? "custom"}-${e.name}`,
        icon: e.icon,
        name: e.name,
        description: e.description,
        slug: e.slug,
      }))
    : industries
        .filter((i) => product.industrySlugs.includes(i.slug))
        .map((i) => ({
          key: i.slug,
          icon: i.icon,
          name: i.name,
          description: i.description,
          slug: i.slug,
        }));

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
              <span className="bg-gradient-to-br from-white via-[#cfeaff] to-[var(--color-accent)] bg-clip-text text-transparent">
                {product.heroHeading}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
            >
              {product.heroDescription}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="flex flex-col gap-2"
            >
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-accent)]">
                Ideal For
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.idealFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-text-primary)]/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              <CTAButton to="/contact" variant="primary" withArrow>
                Talk to Sales
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
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
                    Live across
                  </div>
                  <div className="font-display text-2xl font-bold tracking-tight">
                    {industryCards.length} industries
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

      {/* Capabilities */}
      <section id="capabilities" className="py-20" style={{ scrollMarginTop: 120 }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            label="Capabilities"
            heading={`What makes ${product.name} different.`}
            align="left"
            maxWidth="max-w-2xl"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-x-6">
            {product.features.map((f, idx) => {
              const restingY = idx % 2 === 0 ? -12 : 12;
              const FIcon = f.icon ?? Sparkles;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: restingY }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.5, delay: idx * 0.06, ease: "easeOut" }}
                  whileHover={{ y: restingY - 4 }}
                  className="capability-card flex flex-col gap-3 rounded-2xl bg-[var(--color-surface)] p-6 pl-7 transition-shadow duration-200"
                  style={{
                    border: "1px solid var(--color-border)",
                    boxShadow: "inset 2px 0 0 0 var(--color-accent)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "inset 4px 0 0 0 var(--color-accent), 0 18px 50px rgba(0,212,255,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "inset 2px 0 0 0 var(--color-accent)";
                  }}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <FIcon size={28} strokeWidth={1.9} />
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {f.title}
                  </h3>
                  <ExpandableDescription
                    text={f.description}
                    className="text-sm leading-relaxed text-[var(--color-text-muted)]"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use cases — animated showcase grid */}
      <UseCasesShowcase productSlug={product.slug} />

      {/* Industries Served — max 4 in 2x2 */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            label="Industries Served"
            heading="Built for the industries that need it most."
            align="left"
            maxWidth="max-w-2xl"
          />
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {industryCards.slice(0, 4).map((card, idx) => {
              const IIcon = card.icon;
              return (
                <motion.div
                  key={card.key}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition hover:border-[var(--color-accent)]/50"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-surface-2)] text-[var(--color-accent)]">
                    <IIcon size={20} strokeWidth={2.1} />
                  </span>
                  {card.slug ? (
                    <Link
                      to={`/industries/${card.slug}`}
                      className="font-display text-base font-semibold tracking-tight text-[var(--color-text-primary)] transition-colors duration-150 hover:text-[var(--color-accent)]"
                    >
                      {card.name}
                    </Link>
                  ) : (
                    <span className="font-display text-base font-semibold tracking-tight text-[var(--color-text-primary)]">
                      {card.name}
                    </span>
                  )}
                  <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] transition-colors duration-150 hover:text-[var(--color-text-primary)]"
            >
              View all industries
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
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
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeader
            label="Next step"
            heading={`See ${product.name} run on your workflow.`}
            subheading="A 30-minute call. Tailored demo. Honest assessment of fit."
            align="left"
          />
          <div className="mt-8 flex flex-wrap gap-3">
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
