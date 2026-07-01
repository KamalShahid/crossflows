import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import PageShell from "../components/PageShell";
import HeroBackground from "../components/HeroBackground";
import CTAButton from "../components/CTAButton";
import LiveTalkWidget from "../components/LiveTalkWidget";
import IntegrationsOrbit from "../components/IntegrationsOrbit";
import EcosystemGrid from "../components/EcosystemGrid";
import SecuritySection from "../components/SecuritySection";
import IndustriesOrbit from "../components/IndustriesOrbit";
import StatBar from "../components/StatBar";
import SectionHeader from "../components/SectionHeader";
import VideoPlayer from "../components/VideoPlayer";
import { products } from "../data/products";
import { useCases } from "../data/useCases";
import { features } from "../data/features";
import {
  whatWeDo,
  bottomCTA,
  insightsSection,
  productsSection,
  useCasesSection,
  featuresOverview,
  statsSection,
  videoSection,
} from "../data/home";

const pillarAccents = [
  "var(--color-accent)",
  "#00B8D9",
  "var(--color-accent-warm)",
  "#E8943A",
  "#6ECFB0",
];

const heroWords = ["action", "conversation", "appointment", "lesson", "workflow"];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % heroWords.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <PageShell
      title="Cross Flows Synergy — Where Intelligence Meets Action"
      description="Cross Flows Synergy ships AI-powered business solutions for communication, workflow, education, and operations. Where intelligence meets action."
    >
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <HeroBackground />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-5 pb-24 pt-20 sm:px-8 sm:pt-28 md:pt-32 md:pb-32">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16">
            <div className="flex flex-col items-start gap-7">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
            }}
            className="font-display text-balance text-5xl font-bold leading-[1.02] tracking-tight text-[var(--color-text-primary)] sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            {"Where intelligence meets".split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            ))}
            <span className="relative inline-block overflow-hidden align-baseline">
              {/* Invisible spacer locks the wrapper to the widest rotating word so the
                  headline doesn't reflow as the active word changes. */}
              <span aria-hidden="true" className="invisible whitespace-nowrap">
                conversation.
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={heroWords[wordIndex]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute left-0 top-0 whitespace-nowrap bg-gradient-to-br from-white via-[#cfeaff] to-[var(--color-accent)] bg-clip-text text-transparent"
                >
                  {heroWords[wordIndex]}.
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
            className="max-w-2xl text-balance text-justify text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg md:text-xl"
          >
            Cross Flows Synergy powers intelligent business communication through AI that
            listens, decides, and acts in real time streamlining operations from customer
            engagement to workflow execution.
            <br />
            Four AI-driven products. 40+ supported languages. 
            One scalable platform built for modern enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <CTAButton to="/contact" variant="primary" withArrow>
              Book a Demo
            </CTAButton>
            <CTAButton to="/products" variant="secondary" withArrow>
              Explore Products
            </CTAButton>
          </motion.div>
            </div>

            {/* Right column — Live Talk widget */}
            <div className="mx-auto w-full max-w-[380px] sm:max-w-[420px] lg:mx-0 lg:max-w-none lg:justify-self-end">
              <LiveTalkWidget />
            </div>
          </div>

          {/* Hero floating preview card — spans the full container width so its
              right edge aligns with the LiveTalkWidget above */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
            className="relative w-full overflow-hidden rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-2)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { label: "Active calls", value: "3,142", trend: "+24% this week" },
                { label: "Avg. latency", value: "182ms", trend: "Under target SLA" },
                { label: "Resolution rate", value: "87.4%", trend: "+3.1 pts MoM" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]/70 p-5 text-center"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                    {s.label}
                  </span>
                  <span className="font-display text-3xl font-bold tracking-tight">
                    {s.value}
                  </span>
                  <span className="text-xs text-[var(--color-accent)]">{s.trend}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-accent)]" />
                <span>Live across 14 regions</span>
              </div>
              <Link
                to="/features"
                className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] hover:text-white"
              >
                Inside the platform
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
            <SectionHeader
              label={whatWeDo.label}
              heading={whatWeDo.headline}
              maxWidth="max-w-md"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="text-left text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg"
            >
              {whatWeDo.body}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Products teaser */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            label={productsSection.label}
            heading={productsSection.headline}
            subheading={productsSection.subheading}
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-shadow hover:shadow-[0_20px_60px_rgba(0,212,255,0.18)]"
                >
                  <div
                    className={`pointer-events-none absolute inset-x-0 -top-32 h-40 bg-gradient-to-b ${p.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30`}
                  />
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${p.accent} text-black shadow-[0_8px_24px_rgba(0,212,255,0.3)]`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <h3 className="font-display text-lg font-bold tracking-tight text-[var(--color-text-primary)]">
                    {p.name}
                  </h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {p.shortDescription}
                  </p>
                  <Link
                    to={`/products/${p.slug}`}
                    className="mt-auto inline-flex items-center gap-1 text-[0.8rem] font-medium text-[var(--color-accent)] opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"
                  >
                    Read more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries — hover-reveal orbit */}
      <IndustriesOrbit />

      {/* Stat bar */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            heading={statsSection.headline}
            subheading={statsSection.subheading}
            align="center"
            maxWidth="max-w-3xl"
          />
        </div>
        <div className="mt-12">
          <StatBar />
        </div>
      </section>

      {/* Use cases bento */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            label={useCasesSection.label}
            heading={useCasesSection.headline}
            subheading={useCasesSection.subheading}
          />
          <div className="mt-14 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {useCases.slice(0, 5).map((u, idx) => {
              const Icon = u.icon;
              // Top row (idx 0, 1) → 2 equal cards, each spanning 3 of 6 cols.
              // Bottom row (idx 2, 3, 4) → 3 equal cards, each spanning 2 of 6 cols.
              const span = idx <= 1 ? "lg:col-span-3" : "lg:col-span-2";
              return (
                <motion.div
                  key={u.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -4 }}
                  className={`group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-5 transition-shadow hover:shadow-[0_20px_50px_rgba(0,212,255,0.15)] ${span}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-accent)]">
                      <Icon className="h-5 w-5" strokeWidth={2.1} />
                    </span>
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {u.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {u.homeCard?.excerpt ?? u.description}
                  </p>
                  <Link
                    to={u.homeCard?.detailHref ?? `/use-cases#${u.slug}`}
                    className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] transition hover:text-white"
                  >
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-10 flex justify-center">
            <CTAButton to="/use-cases" variant="secondary" withArrow>
              View All Use Cases
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Features overview */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]/40 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            label={featuresOverview.label}
            heading={featuresOverview.headline}
            align="center"
            maxWidth="max-w-3xl"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {features.map((f, idx) => {
              const Icon = f.icon;
              const accent = pillarAccents[idx % pillarAccents.length];
              const restingY = idx % 2 === 0 ? -12 : 12;
              return (
                <motion.div
                  key={f.slug}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: restingY }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06, ease: "easeOut" }}
                  whileHover={{ y: restingY - 4 }}
                  className="pillar-card group relative flex flex-col gap-3 overflow-hidden rounded-2xl bg-[var(--color-bg)]/70 p-5 pl-6 transition-shadow duration-200"
                  style={{
                    border: "1px solid var(--color-border)",
                    boxShadow: `inset 2px 0 0 0 ${accent}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `inset 4px 0 0 0 ${accent}, 0 18px 50px ${accent}33`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `inset 2px 0 0 0 ${accent}`;
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-3 top-1 select-none font-mono font-bold leading-none"
                    style={{
                      fontSize: "4rem",
                      opacity: 0.06,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {f.number}
                  </span>
                  <span
                    className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-surface-2)]"
                    style={{ color: accent }}
                  >
                    <Icon size={28} strokeWidth={2} />
                  </span>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                    Pillar · {f.number}
                  </div>
                  <h3 className="font-display text-base font-semibold leading-tight tracking-tight">
                    {f.label}
                  </h3>
                  <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">
                    {f.bullets[0]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations — interactive hub + connectors */}
      <IntegrationsOrbit />

      {/* Insights & Analytics */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]/40 py-24">
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

      {/* Video */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader
            label={videoSection.label}
            heading={videoSection.headline}
            subheading={videoSection.subheading}
            align="center"
            maxWidth="max-w-3xl"
          />
          <div className="mt-12">
            {/* TODO: Replace src with actual platform explainer video URL before launch */}
            <VideoPlayer
              src=""
              poster="https://placehold.co/1920x1080/080b12/00d4ff?text=Cross+Flows+Synergy+%E2%80%94+Platform+Tour"
              caption="See Cross Flows Synergy in action"
            />
          </div>
        </div>
      </section>

      {/* Security & Trust — animated terminal handshake */}
      <SecuritySection />

      {/* Foundation of Enterprise AI — ecosystem grid + compliance panel */}
      <EcosystemGrid />

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 50%, rgba(0,212,255,0.18), transparent 70%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <SectionHeader
            label={bottomCTA.label}
            heading={bottomCTA.headline}
            subheading={bottomCTA.subheading}
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {bottomCTA.buttons.map((b, idx) => (
              <CTAButton
                key={b.label}
                to={b.to}
                variant={idx === 0 ? "primary" : "secondary"}
                withArrow={idx === 0}
              >
                {b.label}
              </CTAButton>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
