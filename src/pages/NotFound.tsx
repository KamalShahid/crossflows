import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import CTAButton from "../components/CTAButton";
import HeroBackground from "../components/HeroBackground";

export default function NotFound() {
  return (
    <PageShell title="Not Found · Cross Flows Synergy">
      <section className="relative isolate overflow-hidden">
        <HeroBackground variant="subtle" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 py-32 text-center sm:px-8">
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
            404
          </span>
          <h1 className="font-display text-balance text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            This page took a wrong turn.
          </h1>
          <p className="max-w-md text-[var(--color-text-muted)]">
            The link you followed doesn’t exist anymore. Head home — or jump straight to the
            workflow you care about.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <CTAButton to="/" variant="primary" withArrow>
              Back home
            </CTAButton>
            <Link
              to="/products"
              className="rounded-full border border-[var(--color-border)] px-5 py-3 font-display text-sm font-semibold text-[var(--color-text-primary)] hover:border-[var(--color-accent)]/60"
            >
              Browse products
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
