import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Filter, X } from "lucide-react";
import PageShell from "../components/PageShell";
import HeroBackground from "../components/HeroBackground";
import SectionHeader from "../components/SectionHeader";
import ExpandableDescription from "../components/ExpandableDescription";
import AudioDemoPlaceholder from "../components/AudioDemoPlaceholder";
import { useCases, type UseCaseSlug, getUseCase } from "../data/useCases";
import { products, getProduct, type ProductSlug } from "../data/products";
import { industries, getIndustry, type IndustrySlug } from "../data/industries";

export default function UseCases() {
  const [productFilter, setProductFilter] = useState<Set<ProductSlug>>(new Set());
  const [industryFilter, setIndustryFilter] = useState<Set<IndustrySlug>>(new Set());
  const [selectedSlug, setSelectedSlug] = useState<UseCaseSlug | null>(null);
  const location = useLocation();
  const detailRef = useRef<HTMLDivElement | null>(null);
  // When the hash triggers selection we want to scroll to the *card*, not
  // re-scroll to the detail panel below. This ref suppresses the detail-panel
  // scroll for the immediately following selectedSlug change.
  const suppressDetailScrollRef = useRef(false);

  // Hash deep-link from the homepage cards or navbar dropdown: open the
  // detail panel for that slug AND scroll the card into view (above the
  // detail panel, not at the bottom of the page). Uses rAF + retry so it
  // works even if the card hasn't finished laying out on first frame.
  useEffect(() => {
    const hash = location.hash.replace(/^#/, "") as UseCaseSlug;
    if (!hash) return;
    if (!getUseCase(hash)) return;

    suppressDetailScrollRef.current = true;
    setSelectedSlug(hash);

    // 72px navbar + ~112px sticky filter bar + 16px breathing room.
    const SCROLL_OFFSET = 200;

    let cancelled = false;
    const attemptScroll = (retriesLeft: number) => {
      if (cancelled) return;
      const el = document.getElementById(hash);
      if (!el) {
        if (retriesLeft > 0) {
          window.setTimeout(() => attemptScroll(retriesLeft - 1), 100);
        }
        return;
      }
      requestAnimationFrame(() => {
        if (cancelled) return;
        const top =
          el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
      });
    };
    attemptScroll(3);
    return () => {
      cancelled = true;
    };
  }, [location.hash]);

  // Smooth scroll the detail panel into view when the user *clicks* a card
  // directly. Skipped when the selection came from a hash deep-link (the
  // hash effect above scrolls to the card instead).
  useEffect(() => {
    if (!selectedSlug) return;
    if (suppressDetailScrollRef.current) {
      suppressDetailScrollRef.current = false;
      return;
    }
    const t = window.setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(t);
  }, [selectedSlug]);

  // Escape closes the panel
  useEffect(() => {
    if (!selectedSlug) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedSlug(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selectedSlug]);

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

  const handleCardClick = useCallback((slug: UseCaseSlug) => {
    setSelectedSlug((prev) => (prev === slug ? null : slug));
  }, []);

  const handleCardKeyDown = useCallback(
    (e: React.KeyboardEvent, slug: UseCaseSlug) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleCardClick(slug);
      }
    },
    [handleCardClick],
  );

  const selected = selectedSlug ? getUseCase(selectedSlug) : undefined;
  const SelectedIcon = selected?.icon;
  const selectedProducts = selected
    ? selected.productSlugs
        .map((s) => getProduct(s))
        .filter((p): p is NonNullable<typeof p> => Boolean(p))
    : [];
  const selectedIndustries = selected
    ? selected.industrySlugs
        .map((s) => getIndustry(s))
        .filter((i): i is NonNullable<typeof i> => Boolean(i))
    : [];

  return (
    <PageShell
      title="Use Cases · Cross Flows Synergy"
      description="Thirteen production-grade AI use cases across customer care, routing, payments, identity, learning, and more — filterable by product and industry."
    >
      <section className="relative isolate overflow-hidden">
        <HeroBackground variant="subtle" />
        {/* Decorative flowing-lines SVG (Fix 6.2) */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 520"
          style={{ opacity: 0.1 }}
        >
          <defs>
            <linearGradient id="uc-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--color-accent)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M-50,160 C220,80 460,260 720,180 S1180,80 1500,200"
            stroke="url(#uc-line)"
            strokeWidth="1.4"
            fill="none"
          />
          <path
            d="M-50,260 C260,180 520,360 780,280 S1240,180 1500,300"
            stroke="url(#uc-line)"
            strokeWidth="1.2"
            fill="none"
          />
          <path
            d="M-50,360 C200,300 480,440 740,380 S1200,280 1500,400"
            stroke="url(#uc-line)"
            strokeWidth="1"
            fill="none"
          />
          {[
            [120, 160],
            [380, 220],
            [620, 200],
            [880, 240],
            [1180, 180],
            [240, 280],
            [520, 320],
            [780, 290],
            [1040, 320],
            [1280, 260],
            [180, 380],
            [460, 410],
            [720, 380],
            [1000, 400],
            [1320, 360],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={(i % 3) + 1.5} fill="var(--color-accent)" />
          ))}
        </svg>
        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-20 sm:px-8 sm:pt-28">
          <SectionHeader
            label="Use Cases"
            heading="Production-grade AI workflows, ready to deploy."
            subheading="Each use case below is something Cross Flows Synergy ships to production today. Mix and match by product and industry to find the closest match to your reality."
            maxWidth="max-w-4xl"
          />
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 border-y border-[var(--color-border)] bg-[var(--color-bg)]/85 py-5 backdrop-blur-xl sm:top-[72px]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 sm:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
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
            <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
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
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
              Showing {filtered.length} of {useCases.length} use cases
            </p>
          </div>
          <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((u, idx) => {
                const Icon = u.icon;
                const isSelected = selectedSlug === u.slug;
                return (
                  <motion.div
                    key={u.slug}
                    id={u.slug}
                    layout
                    initial={{ opacity: 0, y: 18, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, delay: idx * 0.03 }}
                    whileHover={{ y: -4 }}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isSelected}
                    aria-controls="use-case-detail"
                    onClick={() => handleCardClick(u.slug)}
                    onKeyDown={(e) => handleCardKeyDown(e, u.slug)}
                    style={{ scrollMarginTop: 120 }}
                    className={
                      "group flex cursor-pointer flex-col gap-4 rounded-2xl border bg-[var(--color-surface)] px-6 py-5 transition-shadow hover:border-[var(--color-accent)]/60 hover:shadow-[0_18px_50px_rgba(0,212,255,0.15)] focus-visible:outline-none " +
                      (isSelected
                        ? "border-[var(--color-accent)] shadow-[0_0_0_2px_var(--color-accent),0_18px_50px_rgba(0,212,255,0.25)]"
                        : "border-[var(--color-border)]")
                    }
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-surface-2)] text-[var(--color-accent)]">
                      <Icon className="h-5 w-5" strokeWidth={2.1} />
                    </span>
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {u.title}
                    </h3>
                    <ExpandableDescription
                      text={u.description}
                      className="text-sm leading-relaxed text-[var(--color-text-muted)]"
                    />
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                      {u.productSlugs.map((p) => (
                        <span
                          key={p}
                          className="rounded-full bg-[var(--color-accent)]/10 px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--color-accent)]"
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

      {/* Detail panel (Fix 6.3) */}
      <AnimatePresence>
        {selected && SelectedIcon && (
          <motion.section
            ref={detailRef}
            id="use-case-detail"
            key={selected.slug}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ scrollMarginTop: 160 }}
            className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/30 py-16"
          >
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <div className="relative rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-10">
                <button
                  type="button"
                  aria-label="Close use case detail"
                  onClick={() => setSelectedSlug(null)}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors duration-150 ease-out hover:text-[var(--color-text-primary)]"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="flex flex-col gap-5">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[#3a8dff] text-black shadow-[0_12px_36px_rgba(0,212,255,0.35)]">
                    <SelectedIcon size={48} strokeWidth={1.8} />
                  </span>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    Use Case
                  </span>
                  <h2 className="font-display text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
                    {selected.title}
                  </h2>
                  <p className="max-w-3xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
                    {selected.description}
                  </p>

                  <AudioDemoPlaceholder />

                  {selectedProducts.length > 0 && (
                    <div className="flex flex-col gap-2 pt-2">
                      <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                        Applicable Products
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedProducts.map((p) => (
                          <span
                            key={p.slug}
                            className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1 text-[0.8rem] text-[var(--color-text-primary)]/85"
                          >
                            {p.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedIndustries.length > 0 && (
                    <div className="flex flex-col gap-2 pt-2">
                      <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                        Applicable Industries
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedIndustries.map((ind) => (
                          <span
                            key={ind.slug}
                            className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1 text-[0.8rem] text-[var(--color-text-primary)]/85"
                          >
                            {ind.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </PageShell>
  );
}
