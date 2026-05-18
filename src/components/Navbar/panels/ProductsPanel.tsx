import { Link } from "react-router-dom";
import { MessageSquare, GraduationCap, Workflow, Truck, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { products, type ProductSlug } from "../../../data/products";

interface PanelProps {
  onNavigate: () => void;
}

const iconOverrides: Record<ProductSlug, LucideIcon> = {
  smarttalk: MessageSquare,
  learnmate: GraduationCap,
  worksync: Workflow,
  driveflow: Truck,
};

export default function ProductsPanel({ onNavigate }: PanelProps) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
      {/* Intro card */}
      <div
        className="relative overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-7"
        style={{
          backgroundImage:
            "radial-gradient(120% 90% at 0% 0%, var(--color-glow), transparent 60%)",
        }}
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
          Our Products
        </span>
        <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-[var(--color-text-primary)]">
          Our AI Products
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
          Four intelligent platforms built to automate communication, streamline operations, and
          scale your business.
        </p>
        <Link
          to="/products"
          onClick={onNavigate}
          className="mt-5 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)] hover:text-[var(--color-text-primary)]"
        >
          View all products
          <ArrowRight size={12} />
        </Link>
      </div>

      {/* 2x2 product grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {products.map((p) => {
          const Icon = iconOverrides[p.slug];
          return (
            <Link
              key={p.slug}
              to={`/products/${p.slug}`}
              onClick={onNavigate}
              className="group flex items-start gap-3 rounded-lg border border-l-2 border-[var(--color-border)] border-l-transparent bg-transparent px-5 py-4 transition-[background-color,border-color] duration-150 ease-out hover:border-l-[var(--color-accent)] hover:bg-[var(--color-surface)]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--color-surface-2)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/15">
                <Icon size={18} strokeWidth={2.1} />
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="flex items-center gap-2">
                  <span className="font-display text-base font-semibold tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)]">
                    {p.name}
                  </span>
                  <ArrowRight
                    size={14}
                    className="-translate-x-1 opacity-0 transition-[transform,opacity] duration-150 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </span>
                <span className="text-xs leading-snug text-[var(--color-text-muted)]">
                  {p.subtitle}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
