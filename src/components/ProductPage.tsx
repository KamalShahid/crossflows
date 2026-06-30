import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageShell from "./PageShell";
import HeroBackground from "./HeroBackground";
import SectionHeader from "./SectionHeader";
import CTAButton from "./CTAButton";
import CapabilitiesShowcase from "./CapabilitiesShowcase";
import UseCasesInteractive from "./UseCasesInteractive";
import type { Product, ProductSlug } from "../data/products";
import { useCases } from "../data/useCases";
import { industries } from "../data/industries";

/** Per-product subheading shown above the Use Cases interactive panel. */
const USE_CASE_SUBHEADINGS: Record<ProductSlug, string> = {
  smarttalk: "Every conversation handled. Every channel covered.",
  worksync: "Every workflow streamlined. Every process connected.",
  learnmate: "Every learner supported. Every institution empowered.",
  driveflow: "Every order captured. Every lane optimised.",
};

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  const Icon = product.icon;
  // Use the curated `productUseCases` count when the product opts in;
  // otherwise count the cross-product slugs resolved from the global use cases data.
  const relatedUseCases = product.productUseCases
    ? product.productUseCases
    : useCases.filter((u) => product.useCaseSlugs.includes(u.slug));
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
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-2)] shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
              {/* Background image — fades gracefully if URL fails */}
              <img
                src={product.heroImageUrl}
                alt={`${product.name} context`}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.35,
                }}
              />
              {/* Dark gradient overlay for legibility — uses the site's
                  near-black so the panel stays cohesive with the dark theme */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(8,11,24,0.85) 0%, rgba(8,11,24,0.6) 40%, rgba(8,11,24,0.9) 100%)",
                }}
              />
              {/* Accent glow corner — kept from prior design for brand depth */}
              <div
                className={`pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br ${product.accent} opacity-25 blur-2xl`}
                aria-hidden
              />
              <div className="relative flex h-full flex-col items-center justify-center gap-6 p-10 text-center">
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
                    {industryCards.length}+ industries
                  </div>
                  <div className="font-display text-2xl font-bold tracking-tight">
                    {relatedUseCases.length}+ use cases
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

      {/* Capabilities — animated showcase grid with per-card accent colors */}
      <div id="capabilities" style={{ scrollMarginTop: 120 }}>
        <CapabilitiesShowcase
          productId={product.slug}
          productName={product.name}
        />
      </div>

      {/* Use cases — interactive split-panel selector + animated detail card */}
      <UseCasesInteractive
        productId={product.slug}
        subheading={USE_CASE_SUBHEADINGS[product.slug]}
      />

      {/* Industries Served — max 4 in 2x2 */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            label="Industries Served"
            heading="Built for the industries that need it most."
            align="left"
            maxWidth="max-w-2xl"
          />
          <div
            className="mx-auto mt-10 grid max-w-3xl grid-cols-1 sm:grid-cols-2"
            style={{ gap: 12 }}
          >
            {industryCards.slice(0, 4).map((card, idx) => {
              const IIcon = card.icon;
              const tagStyle = {
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 16px",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: 10,
                textDecoration: "none",
              } as const;
              const tagInner = (
                <>
                  <IIcon
                    size={16}
                    color="var(--color-accent)"
                    strokeWidth={2}
                    style={{ flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: "0.82rem",
                      color: "var(--color-text-primary)",
                      fontWeight: 500,
                    }}
                  >
                    {card.name}
                  </span>
                </>
              );
              return (
                <motion.div
                  key={card.key}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                >
                  {card.slug ? (
                    <Link to={`/industries/${card.slug}`} style={tagStyle}>
                      {tagInner}
                    </Link>
                  ) : (
                    <div style={tagStyle}>{tagInner}</div>
                  )}
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
