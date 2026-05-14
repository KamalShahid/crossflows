import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import PageShell from "../components/PageShell";
import HeroBackground from "../components/HeroBackground";
import CTAButton from "../components/CTAButton";
import LogoMarquee from "../components/LogoMarquee";
import StatBar from "../components/StatBar";
import SectionHeader from "../components/SectionHeader";
import VideoPlayer from "../components/VideoPlayer";
import { products } from "../data/products";
import { industries } from "../data/industries";
import { useCases } from "../data/useCases";
import { features } from "../data/features";

const heroWords = ["conversation", "drive-thru", "lesson", "workflow"];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % heroWords.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <PageShell
      title="Cross Flows Synergy — Where Intelligence Meets Action"
      description="Cross Flows Synergy ships enterprise AI for voice, drive-thru, learning, and workflow. Where intelligence meets action."
    >
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <HeroBackground />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-10 px-5 pb-24 pt-20 sm:px-8 sm:pt-28 md:pt-32 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/70 px-4 py-1.5 text-xs font-medium text-[var(--color-text-primary)] backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--color-accent)]" />
            <span className="font-mono uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              Now shipping · WorkSync Agentic Layer
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
            }}
            className="font-display text-balance text-5xl font-bold leading-[1.02] tracking-tight text-[var(--color-text-primary)] sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            {"Where intelligence meets ".split(" ").map((word, i) => (
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
            <span className="relative inline-block align-baseline">
              <AnimatePresence mode="wait">
                <motion.span
                  key={heroWords[wordIndex]}
                  initial={{ y: 26, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -26, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-block bg-gradient-to-br from-white via-[#cfeaff] to-[var(--color-accent)] bg-clip-text text-transparent"
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
            className="max-w-2xl text-balance text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg md:text-xl"
          >
            Cross Flows Synergy builds the enterprise AI layer that listens, decides, and acts —
            from the speaker post to the C-suite. Four products. Twelve use cases. Forty-plus
            languages. One platform that ships.
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

          {/* Hero floating preview card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
            className="relative mt-10 w-full max-w-5xl self-stretch overflow-hidden rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-2)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:mt-12 sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { label: "Active calls", value: "3,142", trend: "+24% this week" },
                { label: "Avg. latency", value: "182ms", trend: "Under target SLA" },
                { label: "Resolution rate", value: "87.4%", trend: "+3.1 pts MoM" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]/70 p-5"
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
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
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

      {/* Logos */}
      <LogoMarquee />

      {/* Products teaser */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            label="Our Products"
            heading="Four products. One platform that ships AI you can stake quarterly numbers on."
            subheading="Each product is purpose-built for the highest-leverage moments in enterprise operations — and shares the same engine, security, and analytics layer underneath."
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
                  <h3 className="font-display text-xl font-bold tracking-tight text-[var(--color-text-primary)]">
                    {p.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {p.shortDescription}
                  </p>
                  <Link
                    to={`/products/${p.slug}`}
                    className="mt-auto inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)] transition group-hover:text-white"
                  >
                    Explore {p.name}
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries strip */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader
              label="Industries"
              heading="Tuned for the operational reality of ten industries."
              maxWidth="max-w-2xl"
            />
            <Link
              to="/industries"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-accent)] hover:text-white"
            >
              View all industries
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.slug}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                >
                  <Link
                    to="/industries"
                    className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/60 px-4 py-2 text-sm text-[var(--color-text-primary)] backdrop-blur-md transition hover:border-[var(--color-accent)]/70 hover:bg-[var(--color-surface-2)]"
                  >
                    <Icon className="h-4 w-4 text-[var(--color-accent)]" />
                    {ind.name}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stat bar */}
      <section className="py-20">
        <StatBar />
      </section>

      {/* Use cases bento */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            label="Use Cases"
            heading="Twelve production-grade use cases, ready to deploy."
            subheading="Each one is a real workflow we run for real customers — not a slide."
          />
          <div className="mt-14 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.slice(0, 9).map((u, idx) => {
              const Icon = u.icon;
              const span = idx === 0 ? "lg:col-span-2" : "";
              return (
                <motion.div
                  key={u.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -4 }}
                  className={`group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-shadow hover:shadow-[0_20px_50px_rgba(0,212,255,0.15)] ${span}`}
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
                    {u.description}
                  </p>
                  <Link
                    to="/use-cases"
                    className="mt-auto inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)] opacity-0 transition group-hover:opacity-100"
                  >
                    See it in action
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-10 flex justify-center">
            <CTAButton to="/use-cases" variant="secondary" withArrow>
              All 12 use cases
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Features overview */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]/40 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeader
            label="The Platform"
            heading="Five capability pillars. Engineered to compound."
            align="center"
            maxWidth="max-w-3xl"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.slug}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]/60 p-5 transition hover:border-[var(--color-accent)]/60"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-surface-2)] text-[var(--color-accent)]">
                    <Icon className="h-5 w-5" strokeWidth={2.1} />
                  </span>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                    {f.number}
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

      {/* Video */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader
            label="See it live"
            heading="Three minutes inside the Cross Flows Synergy platform."
            subheading="A walkthrough of how the four products and the WorkSync orchestration layer fit together."
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

      {/* Demo CTA */}
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
            label="Ready when you are"
            heading="See how Cross Flows Synergy handles your hardest workflow."
            subheading="Tell us where you’d start. We’ll get back to you within one business day with a tailored demo plan."
            align="center"
          />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              console.log("[Demo CTA submission]", Object.fromEntries(data.entries()));
              (e.currentTarget as HTMLFormElement).reset();
              alert("Thanks — we’ll be in touch within 24 hours.");
            }}
            className="mx-auto mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              className="flex-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/70 px-5 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none"
            />
            <CTAButton type="submit" variant="primary" withArrow>
              Book a Demo
            </CTAButton>
          </form>
          <p className="mt-4 text-xs text-[var(--color-text-muted)]">
            By submitting, you agree to our privacy policy. No spam, ever.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
