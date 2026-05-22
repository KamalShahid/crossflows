import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ShieldCheck, ArrowRight } from "lucide-react";
import PageShell from "../components/PageShell";
import HeroBackground from "../components/HeroBackground";
import SectionHeader from "../components/SectionHeader";
import CTAButton from "../components/CTAButton";
import { features, type FeatureSlug } from "../data/features";
import IntegrationsMarquee from "../components/IntegrationsMarquee";
import { insightsSection, securitySection } from "../data/home";

export default function Features() {
  const [activeSlug, setActiveSlug] = useState<FeatureSlug>(features[0].slug);
  const location = useLocation();
  const isClickScrollingRef = useRef(false);
  const clickScrollTimerRef = useRef<number | null>(null);

  // IntersectionObserver to track which feature section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // While a programmatic scroll is in flight, don't override active state
        if (isClickScrollingRef.current) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          );
        if (visible.length > 0) {
          setActiveSlug(visible[0].target.id as FeatureSlug);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );

    features.forEach((f) => {
      const el = document.getElementById(f.slug);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Smooth-scroll to a hash on mount or hash change
  useEffect(() => {
    const hash = location.hash.replace(/^#/, "");
    if (!hash) return;
    const target = document.getElementById(hash);
    if (!target) return;
    // Slight delay so the page has laid out before scrolling
    const t = window.setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSlug(hash as FeatureSlug);
    }, 60);
    return () => window.clearTimeout(t);
  }, [location.hash]);

  // Cleanup any pending click-scroll guard timer
  useEffect(
    () => () => {
      if (clickScrollTimerRef.current !== null) {
        window.clearTimeout(clickScrollTimerRef.current);
      }
    },
    [],
  );

  const handleTabClick = (slug: FeatureSlug) => {
    setActiveSlug(slug);
    isClickScrollingRef.current = true;
    if (clickScrollTimerRef.current !== null) {
      window.clearTimeout(clickScrollTimerRef.current);
    }
    clickScrollTimerRef.current = window.setTimeout(() => {
      isClickScrollingRef.current = false;
      clickScrollTimerRef.current = null;
    }, 900);
    const target = document.getElementById(slug);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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

      {/* Sticky in-page tab bar */}
      <nav
        aria-label="Feature sections"
        className="sticky top-16 z-30 border-y border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-xl sm:top-[72px]"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="-mb-px flex gap-6 overflow-x-auto py-3 sm:gap-8">
            {features.map((f) => {
              const isActive = activeSlug === f.slug;
              return (
                <button
                  key={f.slug}
                  type="button"
                  onClick={() => handleTabClick(f.slug)}
                  aria-current={isActive ? "true" : undefined}
                  className="relative shrink-0 whitespace-nowrap pb-2 font-display text-sm font-medium tracking-tight transition-colors duration-150 ease-out focus-visible:outline-none"
                  style={{
                    color: isActive
                      ? "var(--color-accent)"
                      : "var(--color-text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      e.currentTarget.style.color = "var(--color-text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      e.currentTarget.style.color = "var(--color-text-muted)";
                  }}
                >
                  {f.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-px h-[2px] origin-center transition-transform duration-200 ease-out"
                    style={{
                      backgroundColor: "var(--color-accent)",
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <section className="space-y-32 py-24">
        {features.map((f, idx) => {
          const Icon = f.icon;
          const flip = idx % 2 === 1;
          return (
            <div
              key={f.slug}
              id={f.slug}
              style={{ scrollMarginTop: 130 }}
              className="mx-auto max-w-7xl px-5 sm:px-8"
            >
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
                      <div className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
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

      {/* Integrations marquee */}
      <div className="border-t border-[var(--color-border)]">
        <IntegrationsMarquee />
      </div>

      {/* Insights & Analytics */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/40 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            label={insightsSection.label}
            heading={insightsSection.headline}
            subheading={insightsSection.body}
            align="center"
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
            </div>
          </div>

          {/* Speak With Our Team About Security */}
          <div className="mt-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
              Speak With Our Team About Security
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-text-muted)] sm:text-base">
              Have questions about our security practices, compliance requirements, or data
              handling? Our team is here to help.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              <CTAButton to="/contact" variant="primary" withArrow>
                Contact Us
              </CTAButton>
              <Link
                to="/resources/trust-center"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] transition-colors duration-150 hover:text-[var(--color-text-primary)]"
              >
                Visit Trust Center
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
