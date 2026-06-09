import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import PageShell from "../components/PageShell";
import HeroBackground from "../components/HeroBackground";
import CTAButton from "../components/CTAButton";
import LogoTile from "../components/shared/LogoTile";
import { features, type Feature, type FeatureSlug } from "../data/features";

const STICKY_OFFSET_PX = 130; // 72px navbar + 58px tab bar

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - STICKY_OFFSET_PX;
  window.scrollTo({ top, behavior: "smooth" });
}

/* ──────────────────────────────────────────────────────────
 * Panel-specific decorative content
 * Each pillar gets a distinct visual treatment inside its
 * dark image panel.
 * ──────────────────────────────────────────────────────── */

function TechnologyPanelArt() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 20,
        left: 20,
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
      }}
    >
      {["<200ms", "ASR", "LLM"].map((badge) => (
        <div
          key={badge}
          style={{
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: "0.62rem",
            color: "var(--color-accent)",
            background: "rgba(0,212,255,0.1)",
            border: "1px solid rgba(0,212,255,0.2)",
            borderRadius: 6,
            padding: "3px 8px",
            letterSpacing: "0.08em",
          }}
        >
          {badge}
        </div>
      ))}
    </div>
  );
}

const LANGUAGE_PILLS: { name: string; pos: React.CSSProperties }[] = [
  { name: "ENGLISH", pos: { top: "15%", left: "12%" } },
  { name: "ARABIC", pos: { top: "15%", right: "10%" } },
  { name: "MANDARIN", pos: { top: "45%", left: "5%" } },
  { name: "SPANISH", pos: { top: "45%", right: "5%" } },
  { name: "URDU", pos: { bottom: "20%", left: "15%" } },
  { name: "FRENCH", pos: { bottom: "20%", right: "12%" } },
];

function LanguagesPanelArt() {
  return (
    <>
      {LANGUAGE_PILLS.map((p, i) => (
        <motion.div
          key={p.name}
          style={{
            position: "absolute",
            ...p.pos,
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: "0.6rem",
            letterSpacing: "0.1em",
            color: "var(--color-text-muted)",
            background: "var(--color-surface-2)",
            border: "1px solid var(--color-border)",
            borderRadius: 999,
            padding: "4px 10px",
          }}
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          {p.name}
        </motion.div>
      ))}
    </>
  );
}

interface IntegrationLogoSpec {
  name: string;
  /** Simple Icons slug (jsDelivr-served), or `null` for brands with no Simple Icons entry. */
  slug: string | null;
}

const INTEGRATION_LOGOS: IntegrationLogoSpec[] = [
  { name: "Salesforce", slug: "salesforce" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Twilio", slug: "twilio" },
  { name: "Zoho", slug: "zoho" },
  { name: "Slack", slug: "slack" },
  { name: "Teams", slug: "microsoftteams" },
  { name: "Google", slug: "google" },
  { name: "Stripe", slug: "stripe" },
  { name: "Intercom", slug: "intercom" },
];

const jsDelivrIcon = (slug: string): string =>
  `https://cdn.jsdelivr.net/npm/simple-icons@12/icons/${slug}.svg`;

function IntegrationPanelArt() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 14,
        padding: 32,
        width: "100%",
        maxWidth: 320,
        position: "relative",
        zIndex: 1,
      }}
    >
      {INTEGRATION_LOGOS.map((logo) => (
        <div
          key={logo.name}
          title={logo.name}
          style={{
            aspectRatio: "1 / 1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--color-surface-2)",
            border: "1px solid var(--color-border)",
            borderRadius: 12,
          }}
        >
          <LogoTile
            name={logo.name}
            logoUrl={logo.slug ? jsDelivrIcon(logo.slug) : null}
            size={22}
          />
        </div>
      ))}
    </div>
  );
}

const SPARK_HEIGHTS = [35, 55, 42, 70, 58, 85, 65, 92];

function InsightsPanelArt() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: 8,
        height: 120,
        padding: "0 40px",
        width: "100%",
        maxWidth: 360,
        position: "relative",
        zIndex: 1,
      }}
    >
      {SPARK_HEIGHTS.map((h, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
          style={{
            flex: 1,
            height: `${h}%`,
            background: `rgba(0,212,255,${0.3 + (i / SPARK_HEIGHTS.length) * 0.5})`,
            borderRadius: "4px 4px 0 0",
            transformOrigin: "bottom",
          }}
        />
      ))}
    </div>
  );
}

const SECURITY_LOG: string[] = [
  "> AUTH HANDSHAKE  ✓",
  "> TLS 1.3 ENCRYPTED  ✓",
  "> KEY ROTATED  ✓",
  "> AUDIT WRITTEN  ✓",
];

function SecurityPanelArt() {
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        background: "var(--color-bg)",
        border: "1px solid var(--color-border)",
        borderRadius: 14,
        padding: "18px 22px",
        width: "85%",
        maxWidth: 340,
        boxShadow: "0 0 40px rgba(0,212,255,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 14,
        }}
      >
        {["#FF5F56", "#FFBD2E", "#27C93F"].map((c) => (
          <span
            key={c}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: c,
              display: "inline-block",
            }}
          />
        ))}
        <span
          style={{
            marginLeft: 8,
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: "0.6rem",
            color: "var(--color-text-muted)",
            letterSpacing: "0.1em",
          }}
        >
          handshake.log
        </span>
      </div>
      {SECURITY_LOG.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{
            delay: 0.2 + i * 0.35,
            duration: 0.35,
            ease: "easeOut",
          }}
          style={{
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: "0.72rem",
            color:
              i === SECURITY_LOG.length - 1
                ? "var(--color-accent)"
                : "var(--color-text-primary)",
            letterSpacing: "0.04em",
            marginBottom: i === SECURITY_LOG.length - 1 ? 0 : 6,
          }}
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
}

function PanelArt({ slug }: { slug: FeatureSlug }) {
  switch (slug) {
    case "technology":
      return <TechnologyPanelArt />;
    case "languages":
      return <LanguagesPanelArt />;
    case "integration":
      return <IntegrationPanelArt />;
    case "data-insights":
      return <InsightsPanelArt />;
    case "security":
      return <SecurityPanelArt />;
  }
}

/* ──────────────────────────────────────────────────────────
 * Feature section
 * ──────────────────────────────────────────────────────── */

function FeatureSection({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  const flexDir =
    feature.imagePosition === "left" ? "lg:flex-row" : "lg:flex-row-reverse";

  // Panel content. The panel is centered; the panel-specific art is layered
  // on top of the centered label so each pillar feels distinct.
  const panel = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative flex-1 min-h-[220px] md:min-h-[280px] lg:min-h-[360px]"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Decorative radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      {/* Centered panel label */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="font-display"
        style={{
          fontSize: "1.4rem",
          fontWeight: 700,
          color: "var(--color-accent)",
          textAlign: "center",
          padding: 32,
          letterSpacing: "-0.02em",
          position: "absolute",
          zIndex: 0,
          opacity: feature.slug === "languages" ? 0.4 : 0.25,
        }}
      >
        {feature.panelLabel}
      </motion.div>

      {/* Panel-specific decorative content */}
      <PanelArt slug={feature.slug} />
    </motion.div>
  );

  const text = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
      className="min-w-0 flex-1"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 16,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: "rgba(0,212,255,0.1)",
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
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              color: "var(--color-text-muted)",
              textTransform: "uppercase",
            }}
          >
            PILLAR · {feature.number}
          </div>
          <div
            className="font-display"
            style={{
              fontSize: "0.82rem",
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
          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          fontWeight: 800,
          color: "var(--color-text-primary)",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          marginBottom: 20,
          maxWidth: 460,
        }}
      >
        {feature.heading}
      </h2>

      <p
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "0.92rem",
          color: "var(--color-text-muted)",
          lineHeight: 1.75,
          marginBottom: 16,
          maxWidth: 460,
        }}
      >
        {feature.copy[0]}
      </p>
      <p
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "0.92rem",
          color: "var(--color-text-muted)",
          lineHeight: 1.75,
          marginBottom: 28,
          maxWidth: 460,
        }}
      >
        {feature.copy[1]}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
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
      className="px-5 py-20 sm:px-8 sm:py-24"
    >
      <div
        className={`mx-auto flex max-w-7xl flex-col-reverse items-stretch gap-10 lg:items-center lg:gap-20 ${flexDir}`}
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
