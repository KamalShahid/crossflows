import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Filter, X } from "lucide-react";
import PageShell from "../components/PageShell";
import HeroBackground from "../components/HeroBackground";
import SectionHeader from "../components/SectionHeader";
import { useCases } from "../data/useCases";
import { products, type ProductSlug } from "../data/products";
import { industries, type IndustrySlug } from "../data/industries";

export default function UseCases() {
  const [productFilter, setProductFilter] = useState<Set<ProductSlug>>(new Set());
  const [industryFilter, setIndustryFilter] = useState<Set<IndustrySlug>>(new Set());

  const filtered = useMemo(() => {
    return useCases.filter((u) => {
      const productMatch =
        productFilter.size === 0 ||
        u.productSlugs.some((p) => productFilter.has(p));
      const industryMatch =
        industryFilter.size === 0 ||
        u.industrySlugs.some((i) => industryFilter.has(i));
      return productMatch && industryMatch;
    });
  }, [productFilter, industryFilter]);

  const toggleProduct = (slug: ProductSlug) => {
    setProductFilter((prev) => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);
      return next;
    });
  };

  const toggleIndustry = (slug: IndustrySlug) => {
    setIndustryFilter((prev) => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);
      return next;
    });
  };

  const clearAll = () => {
    setProductFilter(new Set());
    setIndustryFilter(new Set());
  };

  const activeCount = productFilter.size + industryFilter.size;

  return (
    <PageShell
      title="Use Cases · Cross Flows Synergy"
      description="Twelve production-grade AI use cases across customer care, routing, payments, identity, learning, and more — filterable by product and industry."
    >
      <section className="relative isolate overflow-hidden">
        <HeroBackground variant="subtle" />
        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-20 sm:px-8 sm:pt-28">
          <SectionHeader
            label="Use Cases"
            heading="Twelve workflows. Real outcomes. Filter for yours."
            subheading="Each use case below is something Cross Flows Synergy ships to production today. Mix and match by product and industry to find the closest match to your reality."
            maxWidth="max-w-4xl"
          />
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 border-y border-[var(--color-border)] bg-[var(--color-bg)]/85 py-5 backdrop-blur-xl sm:top-[72px]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 sm:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
              <Filter className="h-3.5 w-3.5" />
              Filter by Product
            </span>
            {products.map((p) => {
              const active = productFilter.has(p.slug);
              return (
                <button
                  key={p.slug}
                  type="button"
                  onClick={() => toggleProduct(p.slug)}
                  className={
                    "rounded-full border px-3 py-1 text-xs transition " +
                    (active
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)]/15 text-[var(--color-accent)]"
                      : "border-[var(--color-border)] text-[var(--color-text-primary)]/80 hover:border-[var(--color-accent)]/40")
                  }
                >
                  {p.name}
                </button>
              );
            })}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
              <Filter className="h-3.5 w-3.5" />
              Filter by Industry
            </span>
            {industries.map((i) => {
              const active = industryFilter.has(i.slug);
              return (
                <button
                  key={i.slug}
                  type="button"
                  onClick={() => toggleIndustry(i.slug)}
                  className={
                    "rounded-full border px-3 py-1 text-xs transition " +
                    (active
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)]/15 text-[var(--color-accent)]"
                      : "border-[var(--color-border)] text-[var(--color-text-primary)]/80 hover:border-[var(--color-accent)]/40")
                  }
                >
                  {i.name}
                </button>
              );
            })}
            {activeCount > 0 && (
              <button
                type="button"
                onClick={clearAll}
                className="inline-flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
              >
                <X className="h-3 w-3" />
                Clear ({activeCount})
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
              Showing {filtered.length} of {useCases.length} use cases
            </p>
          </div>
          <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((u, idx) => {
                const Icon = u.icon;
                return (
                  <motion.div
                    key={u.slug}
                    layout
                    initial={{ opacity: 0, y: 18, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, delay: idx * 0.03 }}
                    whileHover={{ y: -4 }}
                    className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition hover:border-[var(--color-accent)]/60 hover:shadow-[0_18px_50px_rgba(0,212,255,0.15)]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-surface-2)] text-[var(--color-accent)]">
                      <Icon className="h-5 w-5" strokeWidth={2.1} />
                    </span>
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {u.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {u.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {u.productSlugs.map((p) => (
                        <span
                          key={p}
                          className="rounded-full bg-[var(--color-accent)]/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-accent)]"
                        >
                          {products.find((pp) => pp.slug === p)?.name}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-12 text-center"
            >
              <p className="font-display text-2xl font-semibold">No matches for that combination.</p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Try removing a filter or two — or talk to us about what you’re trying to build.
              </p>
              <button
                type="button"
                onClick={clearAll}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/60 px-4 py-2 text-sm text-[var(--color-accent)]"
              >
                Reset filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
