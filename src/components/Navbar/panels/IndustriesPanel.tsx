import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { industries } from "../../../data/industries";

interface PanelProps {
  onNavigate: () => void;
}

export default function IndustriesPanel({ onNavigate }: PanelProps) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)]">
      {/* 3-column industry links */}
      <div className="grid grid-cols-1 gap-y-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind) => (
          <Link
            key={ind.slug}
            to="/industries"
            onClick={onNavigate}
            className="group flex items-center gap-1.5 py-1.5 text-[0.875rem] text-[var(--color-text-muted)] transition-colors duration-150 ease-out hover:text-[var(--color-text-primary)]"
          >
            <span className="truncate">{ind.name}</span>
            <ArrowRight
              size={12}
              className="-translate-x-1 opacity-0 text-[var(--color-accent)] transition-[transform,opacity] duration-150 ease-out group-hover:translate-x-0 group-hover:opacity-100"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>

      {/* Right feature card */}
      <div
        className="flex flex-col gap-3 rounded-lg bg-[var(--color-surface)] p-6"
        style={{ borderTop: "4px solid var(--color-accent)" }}
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
          Explore by Industry
        </span>
        <h3 className="font-display text-lg font-bold leading-tight tracking-tight text-[var(--color-text-primary)]">
          Supporting Businesses Across Multiple Industries
        </h3>
        <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
          Find out how Cross Flows Synergy serves your specific sector.
        </p>
        <Link
          to="/industries"
          onClick={onNavigate}
          className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)] hover:text-[var(--color-text-primary)]"
        >
          See all industries
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}
