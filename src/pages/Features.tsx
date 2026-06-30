import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import PageShell from "../components/PageShell";
import HeroBackground from "../components/HeroBackground";
import CTAButton from "../components/CTAButton";
import { features, type Feature, type FeatureSlug } from "../data/features";

const STICKY_OFFSET_PX = 130; // 72px navbar + 58px tab bar

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - STICKY_OFFSET_PX;
  window.scrollTo({ top, behavior: "smooth" });
}

/* ──────────────────────────────────────────────────────────
 * Feature section
 * ──────────────────────────────────────────────────────── */

function FeatureSection({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  // Desktop direction alternates per pillar; mobile always stacks with the
  // image on top (image-first), so use plain `flex-col`, not `flex-col-reverse`.
  const flexDir =
    feature.imagePosition === "left" ? "lg:flex-row" : "lg:flex-row-reverse";

  // Image-based panel: hotlinked Unsplash photo + dark gradient overlay +
  // bottom-left panel label in accent cyan. Falls back to a plain dark
  // panel + label if the image fails to load.
  const panel = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative w-full aspect-[16/9] lg:aspect-[4/3] lg:basis-[52%] lg:max-w-[52%]"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: 20,
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <img
        src={feature.imageUrl}
        alt={`${feature.label} illustration`}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Dark gradient overlay keeps the accent label legible — slightly
          deeper at the corners so the bottom-left label always reads cleanly. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(8,11,24,0.72) 0%, rgba(8,11,24,0.28) 50%, rgba(8,11,24,0.82) 100%)",
        }}
      />

      {/* Bottom-left panel label */}
      <div
        className="font-display"
        style={{
          position: "absolute",
          bottom: 20,
          left: 24,
          fontSize: "1rem",
          fontWeight: 700,
          color: "var(--color-accent)",
          letterSpacing: "-0.01em",
          textShadow: "0 1px 8px rgba(0,0,0,0.6)",
          zIndex: 1,
        }}
      >
        {feature.panelLabel}
      </div>
    </motion.div>
  );

  const text = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
      className="w-full min-w-0 lg:flex-1"
    >
      {/* Inner wrapper caps the text column at 520px on desktop so lines stay
          readable. Mobile gets full width via `w-full` on the parent. */}
      <div className="w-full lg:max-w-[520px]">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "rgba(0,212,255,0.10)",
              border: "1px solid rgba(0,212,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Icon size={16} color="var(--color-accent)" strokeWidth={2} />
          </div>
          <div>
            <div
              style={{
                fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                fontSize: "0.58rem",
                letterSpacing: "0.1em",
                color: "var(--color-text-muted)",
                textTransform: "uppercase",
                marginBottom: 1,
              }}
            >
              PILLAR · {feature.number}
            </div>
            <div
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--color-text-primary)",
              }}
            >
              {feature.label}
            </div>
          </div>
        </div>

        <h2
          className="font-display"
          style={{
            fontSize: "clamp(1.7rem, 2.8vw, 2.1rem)",
            fontWeight: 800,
            color: "var(--color-text-primary)",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: 20,
          }}
        >
          {feature.heading}
        </h2>

        <p
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "0.9rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.75,
            marginBottom: 14,
          }}
        >
          {feature.copy[0]}
        </p>
        <p
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "0.9rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.75,
            marginBottom: 28,
          }}
        >
          {feature.copy[1]}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            marginTop: 24,
          }}
        >
          {feature.bullets.map((bullet, i) => (
            <motion.div
              key={bullet}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.35, ease: "easeOut" }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: "rgba(0,212,255,0.12)",
                  border: "1px solid rgba(0,212,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <Check size={10} color="var(--color-accent)" strokeWidth={3} />
              </div>
              <span
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "0.88rem",
                  color: "var(--color-text-primary)",
                  lineHeight: 1.5,
                }}
              >
                {bullet}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id={feature.slug}
      style={{
        scrollMarginTop: STICKY_OFFSET_PX,
        borderBottom:
          feature.slug === "security" ? "none" : "1px solid var(--color-border)",
      }}
      className="px-6 py-16 sm:px-12 lg:py-[100px]"
    >
      <div
        className={`mx-auto flex max-w-[1280px] flex-col items-stretch gap-10 lg:items-center lg:gap-[72px] ${flexDir}`}
      >
        {panel}
        {text}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
 * Page
 * ──────────────────────────────────────────────────────── */

export default function Features() {
  const [activeSlug, setActiveSlug] = useState<FeatureSlug>(features[0].slug);
  const location = useLocation();
  const clickGuardRef = useRef(false);
  const clickGuardTimer = useRef<number | null>(null);

  // IntersectionObserver to set the active tab while scrolling.
  // The "active band" is roughly 30%-45% of the viewport; whichever section's
  // top crosses into that band is the active one.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (clickGuardRef.current) return;
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

  // Smooth-scroll to a hash target on arrival (e.g. from the navbar mega-menu).
  useEffect(() => {
    const hash = location.hash.replace(/^#/, "");
    if (!hash) return;
    const t = window.setTimeout(() => {
      scrollToSection(hash);
      setActiveSlug(hash as FeatureSlug);
    }, 60);
    return () => window.clearTimeout(t);
  }, [location.hash]);

  // Cleanup the click-guard timer on unmount.
  useEffect(
    () => () => {
      if (clickGuardTimer.current !== null) {
        window.clearTimeout(clickGuardTimer.current);
      }
    },
    [],
  );

  const handleTabClick = (slug: FeatureSlug) => {
    setActiveSlug(slug);
    clickGuardRef.current = true;
    if (clickGuardTimer.current !== null) {
      window.clearTimeout(clickGuardTimer.current);
    }
    clickGuardTimer.current = window.setTimeout(() => {
      clickGuardRef.current = false;
      clickGuardTimer.current = null;
    }, 900);
    scrollToSection(slug);
  };

  return (
    <PageShell
      title="Features · Cross Flows Synergy"
      description="Inside the Cross Flows Synergy platform: engine, languages, integrations, data, and security — the five pillars that compound into enterprise-grade AI."
    >
      {/* Hero — left-aligned per spec */}
      <section className="relative isolate overflow-hidden">
        <HeroBackground variant="subtle" />
        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-20 sm:px-8 sm:pt-24">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 12px",
              borderRadius: 999,
              background: "rgba(0,212,255,0.1)",
              border: "1px solid rgba(0,212,255,0.25)",
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              fontSize: "0.65rem",
              letterSpacing: "0.16em",
              color: "var(--color-accent)",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "var(--color-accent)",
              }}
            />
            The Platform
          </div>
          <h1
            className="font-display"
            style={{
              marginTop: 24,
              fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              color: "var(--color-text-primary)",
              maxWidth: 720,
            }}
          >
            Five pillars. One platform that compounds with every conversation.
          </h1>
          <p
            style={{
              marginTop: 16,
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.95rem",
              color: "var(--color-text-muted)",
              maxWidth: 520,
              lineHeight: 1.75,
            }}
          >
            The capabilities below show up across every Cross Flows Synergy
            product — and are the reason our customers don’t hit a ceiling six
            months in.
          </p>
        </div>
      </section>

      {/* Sticky tab bar */}
      <nav
        aria-label="Feature pillars"
        className="sticky top-16 z-30 border-y border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur-xl sm:top-[72px]"
      >
        <div className="mx-auto max-w-7xl overflow-x-auto px-5 sm:px-8">
          <div className="flex gap-1 sm:gap-2">
            {features.map((f) => {
              const isActive = activeSlug === f.slug;
              return (
                <button
                  key={f.slug}
                  type="button"
                  onClick={() => handleTabClick(f.slug)}
                  aria-current={isActive ? "true" : undefined}
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "0.88rem",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive
                      ? "var(--color-accent)"
                      : "var(--color-text-muted)",
                    background: "none",
                    border: "none",
                    borderBottom: isActive
                      ? "2px solid var(--color-accent)"
                      : "2px solid transparent",
                    padding: "14px 20px",
                    cursor: "pointer",
                    transition:
                      "color 0.2s ease, border-color 0.2s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "var(--color-text-primary)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "var(--color-text-muted)";
                    }
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Pillars */}
      {features.map((f) => (
        <FeatureSection key={f.slug} feature={f} />
      ))}

      {/* Bottom CTA */}
      <section className="relative overflow-hidden px-5 py-24 sm:px-8">
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(60% 50% at 50% 50%, rgba(0,212,255,0.14), transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <div
            style={{
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
            }}
          >
            Explore More
          </div>
          <h2
            className="font-display"
            style={{
              marginTop: 12,
              fontSize: "clamp(1.6rem, 3.4vw, 2rem)",
              fontWeight: 800,
              color: "var(--color-text-primary)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Talk to our team about the platform.
          </h2>
          <p
            style={{
              marginTop: 16,
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.95rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.75,
            }}
          >
            Cross Flows Synergy is built to compound. The more you use it, the
            smarter it gets.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CTAButton to="/contact" variant="primary" withArrow>
              Speak With Our Team
            </CTAButton>
            <Link
              to="/resources/trust-center"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] transition-colors duration-150 hover:text-[var(--color-text-primary)]"
            >
              Visit Trust Center
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
