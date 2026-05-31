import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { features } from "../../../data/features";

interface PanelProps {
  onNavigate: () => void;
}

export default function FeaturesPanel({ onNavigate }: PanelProps) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)]">
      {/* Feature links */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <Link
              key={f.slug}
              to={`/features#${f.slug}`}
              onClick={onNavigate}
              className="group flex items-start gap-3 rounded-lg border border-l-2 border-[var(--color-border)] border-l-transparent bg-transparent px-4 py-3 transition-[background-color,border-color] duration-150 ease-out hover:border-l-[var(--color-accent)] hover:bg-[var(--color-surface)]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--color-surface-2)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/15">
                <Icon size={17} strokeWidth={2.1} />
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                <span className="font-display text-sm font-semibold tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)]">
                  {f.label}
                </span>
                <span className="text-xs leading-snug text-[var(--color-text-muted)]">
                  {f.bullets[0]}
                </span>
              </span>
            </Link>
          );
        })}
      </div>

      {/* Right feature card */}
      <div
        className="flex flex-col gap-3 rounded-lg bg-[var(--color-surface)] p-6"
        style={{ borderTop: "4px solid var(--color-accent)" }}
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
          The Platform
        </span>
        <h3 className="font-display text-lg font-bold leading-tight tracking-tight text-[var(--color-text-primary)]">
          Five capability pillars. One platform.
        </h3>
        <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
          From engine architecture to security posture — see how the pieces fit together.
        </p>
        <Link
          to="/features"
          onClick={onNavigate}
          className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)] hover:text-[var(--color-text-primary)]"
        >
          Explore the platform
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}
