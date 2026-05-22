import { Link } from "react-router-dom";
import {
  PhoneCall,
  CalendarCheck,
  UserCheck,
  Zap,
  Headphones,
  Radio,
  Clock,
  Settings,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { solutions, toDisplayTitle, type SolutionSlug } from "../../../data/solutions";

interface PanelProps {
  onNavigate: () => void;
}

const iconOverrides: Record<SolutionSlug, LucideIcon> = {
  "ai-reception-call-handling": PhoneCall,
  "ai-appointment-management": CalendarCheck,
  "ai-lead-qualification": UserCheck,
  "ai-workflow-automation": Zap,
  "ai-support-systems": Headphones,
  "ai-communication-management": Radio,
  "ai-scheduling-systems": Clock,
  "ai-operational-assistance": Settings,
};

export default function SolutionsPanel({ onNavigate }: PanelProps) {
  const half = Math.ceil(solutions.length / 2);
  const columns = [solutions.slice(0, half), solutions.slice(half)];

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-x-10">
        {columns.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-2">
            {col.map((s) => {
              const Icon = iconOverrides[s.slug];
              return (
                <Link
                  key={s.slug}
                  to={`/solutions/${s.slug}`}
                  onClick={onNavigate}
                  className="group flex items-start gap-3 rounded-lg border border-l-2 border-[var(--color-border)] border-l-transparent bg-transparent px-4 py-3 transition-[background-color,border-color] duration-150 ease-out hover:border-l-[var(--color-accent)] hover:bg-[var(--color-surface)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[var(--color-surface-2)] text-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/15">
                    <Icon size={17} strokeWidth={2.1} />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span className="font-display text-sm font-semibold tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)]">
                      {toDisplayTitle(s.title)}
                    </span>
                    <span className="text-xs leading-snug text-[var(--color-text-muted)]">
                      {s.description}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      <Link
        to="/solutions"
        onClick={onNavigate}
        className="flex items-center justify-end gap-1 border-t border-[var(--color-border)] pt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
      >
        See all solutions
        <ArrowRight size={12} />
      </Link>
    </div>
  );
}
