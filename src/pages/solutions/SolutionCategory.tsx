import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import PageShell from "../../components/PageShell";
import HeroBackground from "../../components/HeroBackground";
import CTAButton from "../../components/CTAButton";
import SolutionDetail from "../SolutionDetail";
import {
  getSolutionCategory,
  type SolutionCategory,
  type SolutionChallenge,
  type SolutionCategoryUseCase,
} from "../../data/solutionCategories";

// Brand tokens — kept consistent with the industry detail pages.
const ACCENT = "#00D4FF"; // var(--color-accent)
const ACCENT_RGB = "0, 212, 255";
const SCROLL_OFFSET = 96; // navbar (72) + breathing room

interface UseCaseCardProps {
  useCase: SolutionCategoryUseCase;
  index: number;
}

function UseCaseCard({ useCase, index }: UseCaseCardProps) {
  const Icon = useCase.icon;
  return (
    <motion.article
      id={useCase.id}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: 18,
        padding: "28px 28px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 18,
        scrollMarginTop: SCROLL_OFFSET,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: `rgba(${ACCENT_RGB}, 0.10)`,
            border: `1px solid rgba(${ACCENT_RGB}, 0.2)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={28} color={ACCENT} strokeWidth={1.9} />
        </div>
        <h3
          className="font-display"
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          {useCase.title}
        </h3>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "0.92rem",
          color: "var(--color-text-muted)",
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {useCase.description}
      </p>

      {/* Capabilities */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        {useCase.capabilities.map((cap) => (
          <span
            key={cap}
            style={{
              background: "var(--color-surface-2)",
              border: "1px solid var(--color-border)",
              borderRadius: 999,
              padding: "4px 12px",
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.72rem",
              color: "var(--color-text-primary)",
              lineHeight: 1.4,
            }}
          >
            {cap}
          </span>
        ))}
      </div>

      {/* Example panel */}
      <div
        style={{
          background: "var(--color-bg)",
          border: "1px solid var(--color-border)",
          borderRadius: 12,
          padding: "14px 16px",
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        <span
          style={{
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: "0.62rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: ACCENT,
          }}
        >
          Example
        </span>
        <p
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "0.85rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.6,
            fontStyle: "italic",
            margin: 0,
          }}
        >
          {useCase.example}
        </p>
      </div>
    </motion.article>
  );
}

interface ChallengeCardProps {
  challenge: SolutionChallenge;
  index: number;
}

function ChallengeCard({ challenge, index }: ChallengeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: 14,
        padding: "20px 22px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span
          style={{
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            color: ACCENT,
            background: `rgba(${ACCENT_RGB}, 0.1)`,
            border: `1px solid rgba(${ACCENT_RGB}, 0.25)`,
            borderRadius: 6,
            padding: "3px 8px",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3
          className="font-display"
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {challenge.title}
        </h3>
      </div>
      <p
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "0.88rem",
          color: "var(--color-text-muted)",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {challenge.description}
      </p>
    </motion.div>
  );
}

interface CategoryPageProps {
  category: SolutionCategory;
}

function CategoryPage({ category }: CategoryPageProps) {
  const location = useLocation();

  // Hash deep-link (e.g. from the homepage Use Cases cards):
  // `/solutions/communication-customer-engagement#ai-receptionists`.
  // Retries up to 3× because the use case cards render below the hero +
  // challenges section, so they may not be in the DOM on first frame.
  useEffect(() => {
    const hash = location.hash.replace(/^#/, "");
    if (!hash) return;

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

  return (
    <PageShell
      title={`${category.name} · Cross Flows Synergy`}
      description={category.description}
    >
      {/* Breadcrumb */}
      <div
        className="mx-auto max-w-7xl px-5 pb-2 pt-6 sm:px-8"
        style={{
          fontFamily: '"JetBrains Mono", ui-monospace, monospace',
          fontSize: "0.68rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-text-muted)",
        }}
      >
        <Link
          to="/solutions"
          style={{
            color: "var(--color-text-muted)",
            textDecoration: "none",
          }}
        >
          Solutions
        </Link>
        <ChevronRight
          size={11}
          style={{
            display: "inline",
            margin: "0 6px",
            verticalAlign: "middle",
            opacity: 0.6,
          }}
        />
        <span style={{ color: "var(--color-text-primary)" }}>
          {category.name}
        </span>
      </div>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <HeroBackground variant="subtle" />
        <div className="relative mx-auto max-w-4xl px-5 pb-14 pt-10 sm:px-8 sm:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 999,
              background: `rgba(${ACCENT_RGB}, 0.1)`,
              border: `1px solid rgba(${ACCENT_RGB}, 0.3)`,
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              fontSize: "0.65rem",
              letterSpacing: "0.14em",
              color: ACCENT,
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: ACCENT,
              }}
            />
            {category.name}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="font-display"
            style={{
              marginTop: 24,
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "var(--color-text-primary)",
            }}
          >
            {category.heading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
            style={{
              marginTop: 20,
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "1rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.75,
              maxWidth: 720,
            }}
          >
            {category.description}
          </motion.p>
        </div>
      </section>

      {/* Business Challenges */}
      <section
        className="px-5 py-20 sm:px-8"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <div
              style={{
                fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: ACCENT,
              }}
            >
              Business Challenges
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                lineHeight: 1.2,
                marginTop: 12,
                letterSpacing: "-0.02em",
              }}
            >
              Business Challenges We Solve
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {category.challenges.map((challenge, idx) => (
              <ChallengeCard
                key={challenge.title}
                challenge={challenge}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section
        className="px-5 py-20 sm:px-8"
        style={{ background: "var(--color-bg)" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <div
              style={{
                fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: ACCENT,
              }}
            >
              Use Cases
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)",
                fontWeight: 800,
                color: "var(--color-text-primary)",
                lineHeight: 1.2,
                marginTop: 12,
                letterSpacing: "-0.02em",
              }}
            >
              How Cross Flows Synergy Powers {category.name}
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {category.useCases.map((useCase, idx) => (
              <UseCaseCard
                key={useCase.id}
                useCase={useCase}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="relative overflow-hidden px-5 py-24 sm:px-8"
        style={{ background: "var(--color-bg)" }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(60% 50% at 50% 50%, rgba(${ACCENT_RGB}, 0.14), transparent 70%)`,
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
              color: ACCENT,
            }}
          >
            Get Started
          </div>
          <h2
            className="font-display"
            style={{
              marginTop: 12,
              fontSize: "clamp(1.8rem, 3.8vw, 2.4rem)",
              fontWeight: 800,
              color: "var(--color-text-primary)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Ready to put {category.name} on autopilot?
          </h2>
          <p
            style={{
              marginTop: 16,
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.95rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.75,
              maxWidth: 540,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            See how Cross Flows Synergy can help your team work smarter and
            deliver consistent results at every touchpoint.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <CTAButton to="/contact" variant="primary" withArrow>
              Book a Demo
            </CTAButton>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] transition-colors duration-150 hover:text-[var(--color-text-primary)]"
            >
              Explore All Solutions
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

/**
 * Dispatcher for `/solutions/:slug`. When the URL slug matches a category
 * defined in `solutionCategories.ts`, the category template renders.
 * Otherwise the existing per-solution detail page handles the slug, so the
 * legacy `/solutions/[individual-slug]` URLs keep working unchanged.
 */
export default function SolutionCategory() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getSolutionCategory(slug) : undefined;

  if (!category) {
    return <SolutionDetail />;
  }

  return <CategoryPage category={category} />;
}
