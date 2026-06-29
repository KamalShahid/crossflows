import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  solutionCategories,
  type SolutionCategorySlug,
} from "../../../data/solutionCategories";

interface PanelProps {
  onNavigate: () => void;
}

interface MenuItem {
  label: string;
  /** Anchor on the parent category page (corresponds to `useCase.id`). */
  anchor: string;
}

interface MenuCategory {
  slug: SolutionCategorySlug;
  label: string;
  items: MenuItem[];
}

/**
 * Navbar mega-menu uses item labels that read better as one-liners (e.g.
 * "Customer Support" without the trailing "Automation"). Each label still
 * maps to a use case on the category page below.
 */
const NAV_LABEL_OVERRIDES: Record<string, string> = {
  "Customer Support Automation": "Customer Support",
  "Intelligent Call Routing": "Call Routing",
  "Dispatch Management": "Dispatching",
};

const categories: MenuCategory[] = solutionCategories.map((category) => ({
  slug: category.slug,
  label: category.name,
  items: category.useCases.map((uc) => ({
    label: NAV_LABEL_OVERRIDES[uc.title] ?? uc.title,
    anchor: uc.id,
  })),
}));

// Spec layout: column 1 holds categories 1–2, column 2 holds categories 3–5,
// column 3 is the feature card.
const LEFT_COLUMN = categories.slice(0, 2);
const RIGHT_COLUMN = categories.slice(2, 5);

interface CategoryBlockProps {
  category: MenuCategory;
  onNavigate: () => void;
}

function CategoryBlock({ category, onNavigate }: CategoryBlockProps) {
  return (
    <div className="flex flex-col gap-2">
      <Link
        to={`/solutions/${category.slug}`}
        onClick={onNavigate}
        style={{
          fontFamily: '"JetBrains Mono", ui-monospace, monospace',
          fontSize: "0.62rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--color-accent)",
          textDecoration: "none",
          display: "block",
          marginBottom: 6,
        }}
      >
        {category.label}
      </Link>
      <div className="flex flex-col">
        {category.items.map((item) => (
          <Link
            key={item.anchor}
            to={`/solutions/${category.slug}#${item.anchor}`}
            onClick={onNavigate}
            className="group inline-flex items-center gap-1.5 py-1 text-[var(--color-text-muted)] transition-colors duration-150 ease-out hover:text-[var(--color-text-primary)]"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.82rem",
            }}
          >
            <span>{item.label}</span>
            <ArrowRight
              size={12}
              className="-translate-x-1 opacity-0 text-[var(--color-accent)] transition-[transform,opacity] duration-150 ease-out group-hover:translate-x-0 group-hover:opacity-100"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function SolutionsPanel({ onNavigate }: PanelProps) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)]">
      {/* Categories — 2-column grid on the left */}
      <div className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
        <div className="flex flex-col gap-7">
          {LEFT_COLUMN.map((category) => (
            <CategoryBlock
              key={category.label}
              category={category}
              onNavigate={onNavigate}
            />
          ))}
        </div>
        <div className="flex flex-col gap-7">
          {RIGHT_COLUMN.map((category) => (
            <CategoryBlock
              key={category.label}
              category={category}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>

      {/* Right feature card */}
      <div
        className="flex flex-col gap-3 rounded-lg bg-[var(--color-surface)] p-6"
        style={{ borderTop: "4px solid var(--color-accent)" }}
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
          Solutions
        </span>
        <h3 className="font-display text-lg font-bold leading-tight tracking-tight text-[var(--color-text-primary)]">
          Business Problems We Solve
        </h3>
        <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
          From customer engagement to operational coordination — explore AI
          solutions tailored to your specific challenges.
        </p>
        <Link
          to="/solutions"
          onClick={onNavigate}
          className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)] hover:text-[var(--color-text-primary)]"
        >
          Explore all solutions
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}
