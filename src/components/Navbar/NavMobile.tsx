import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  MessageSquare,
  GraduationCap,
  Workflow,
  Truck,
  PhoneCall,
  CalendarCheck,
  UserCheck,
  Zap,
  Headphones,
  Radio,
  Clock,
  Settings,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Logo from "./Logo";
import { useScrollLock } from "../../hooks/useScrollLock";
import { products, type ProductSlug } from "../../data/products";
import { industries } from "../../data/industries";
import { solutions, toDisplayTitle, type SolutionSlug } from "../../data/solutions";
import { useCases } from "../../data/useCases";
import { features } from "../../data/features";
import type { PanelId } from "./types";

const productIconOverrides: Record<ProductSlug, LucideIcon> = {
  smarttalk: MessageSquare,
  learnmate: GraduationCap,
  worksync: Workflow,
  driveflow: Truck,
};

const solutionIconOverrides: Record<SolutionSlug, LucideIcon> = {
  "ai-reception-call-handling": PhoneCall,
  "ai-appointment-management": CalendarCheck,
  "ai-lead-qualification": UserCheck,
  "ai-workflow-automation": Zap,
  "ai-support-systems": Headphones,
  "ai-communication-management": Radio,
  "ai-scheduling-systems": Clock,
  "ai-operational-assistance": Settings,
};

interface DrawerSection {
  panelId: PanelId;
  label: string;
}

const drawerSections: DrawerSection[] = [
  { panelId: "products", label: "Products" },
  { panelId: "industries", label: "Industries" },
  { panelId: "solutions", label: "Solutions" },
  { panelId: "useCases", label: "Use Cases" },
  { panelId: "features", label: "Features" },
];

const plainLinks: { label: string; href: string }[] = [
  { label: "Blog", href: "/blog" },
];

export default function NavMobile() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<PanelId | null>(null);
  const location = useLocation();

  useScrollLock(open);

  useEffect(() => {
    setOpen(false);
    setActiveSection(null);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const toggleSection = (id: PanelId) => {
    setActiveSection((prev) => (prev === id ? null : id));
  };

  const closeAll = () => {
    setOpen(false);
    setActiveSection(null);
  };

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:hidden"
        style={{
          backgroundColor: "var(--color-surface)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <Link to="/" aria-label="Cross Flows Synergy home" className="flex items-center">
          <Logo size={34} />
        </Link>

        <button
          type="button"
          aria-label="Open navigation menu"
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-text-primary)]"
        >
          <Menu size={18} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            role="dialog"
            aria-label="Navigation menu"
            className="fixed inset-y-0 left-0 z-[60] flex w-full max-w-full flex-col sm:max-w-[360px] lg:hidden"
            style={{
              backgroundColor: "var(--color-surface)",
              borderRight: "1px solid var(--color-border)",
            }}
          >
            {/* Drawer header */}
            <div
              className="flex h-16 items-center justify-between px-5 sm:h-[72px]"
              style={{
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <Logo size={34} />
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={closeAll}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-text-primary)]"
              >
                <X size={18} />
              </button>
            </div>

            {/* Drawer body */}
            <div className="flex-1 overflow-y-auto px-2 py-3">
              {drawerSections.map((section) => {
                const isOpen = activeSection === section.panelId;
                return (
                  <div key={section.panelId} className="border-b border-[var(--color-border)]">
                    <button
                      type="button"
                      onClick={() => toggleSection(section.panelId)}
                      aria-expanded={isOpen}
                      aria-controls={`drawer-section-${section.panelId}`}
                      className="flex w-full items-center justify-between px-3 py-4 text-left font-display text-base font-semibold tracking-tight text-[var(--color-text-primary)]"
                    >
                      <span>{section.label}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="text-[var(--color-text-muted)]"
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key={`drawer-section-${section.panelId}-content`}
                          id={`drawer-section-${section.panelId}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}
                        >
                          <div className="flex flex-col gap-1 pb-3">
                            {section.panelId === "products" &&
                              products.map((p) => {
                                const Icon = productIconOverrides[p.slug];
                                return (
                                  <Link
                                    key={p.slug}
                                    to={`/products/${p.slug}`}
                                    onClick={closeAll}
                                    className="mx-1 flex items-start gap-3 rounded-md px-3 py-2.5 transition-colors duration-150 ease-out hover:bg-[var(--color-surface-2)]"
                                  >
                                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--color-surface-2)] text-[var(--color-accent)]">
                                      <Icon size={15} strokeWidth={2.1} />
                                    </span>
                                    <span className="flex min-w-0 flex-col gap-0.5">
                                      <span className="font-display text-sm font-semibold text-[var(--color-text-primary)]">
                                        {p.name}
                                      </span>
                                      <span className="text-xs leading-snug text-[var(--color-text-muted)]">
                                        {p.subtitle}
                                      </span>
                                    </span>
                                  </Link>
                                );
                              })}

                            {section.panelId === "industries" &&
                              industries.map((ind) => (
                                <Link
                                  key={ind.slug}
                                  to={`/industries/${ind.slug}`}
                                  onClick={closeAll}
                                  className="mx-1 flex items-center justify-between rounded-md px-3 py-2.5 text-sm text-[var(--color-text-primary)] transition-colors duration-150 ease-out hover:bg-[var(--color-surface-2)] hover:text-[var(--color-accent)]"
                                >
                                  <span>{ind.name}</span>
                                  <ArrowRight
                                    size={12}
                                    className="text-[var(--color-text-muted)]"
                                  />
                                </Link>
                              ))}

                            {section.panelId === "solutions" &&
                              solutions.map((s) => {
                                const Icon = solutionIconOverrides[s.slug];
                                return (
                                  <Link
                                    key={s.slug}
                                    to={`/solutions/${s.slug}`}
                                    onClick={closeAll}
                                    className="mx-1 flex items-center gap-3 rounded-md px-3 py-2.5 transition-colors duration-150 ease-out hover:bg-[var(--color-surface-2)]"
                                  >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--color-surface-2)] text-[var(--color-accent)]">
                                      <Icon size={15} strokeWidth={2.1} />
                                    </span>
                                    <span className="font-display text-sm font-medium text-[var(--color-text-primary)]">
                                      {toDisplayTitle(s.title)}
                                    </span>
                                  </Link>
                                );
                              })}

                            {section.panelId === "useCases" &&
                              useCases.map((u) => (
                                <Link
                                  key={u.slug}
                                  to="/use-cases"
                                  onClick={closeAll}
                                  className="mx-1 flex items-center justify-between rounded-md px-3 py-2.5 text-sm text-[var(--color-text-primary)] transition-colors duration-150 ease-out hover:bg-[var(--color-surface-2)] hover:text-[var(--color-accent)]"
                                >
                                  <span>{u.title}</span>
                                  <ArrowRight
                                    size={12}
                                    className="text-[var(--color-text-muted)]"
                                  />
                                </Link>
                              ))}

                            {section.panelId === "features" &&
                              features.map((f) => {
                                const FIcon = f.icon;
                                return (
                                  <Link
                                    key={f.slug}
                                    to={`/features#${f.slug}`}
                                    onClick={closeAll}
                                    className="mx-1 flex items-center gap-3 rounded-md px-3 py-2.5 transition-colors duration-150 ease-out hover:bg-[var(--color-surface-2)]"
                                  >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--color-surface-2)] text-[var(--color-accent)]">
                                      <FIcon size={15} strokeWidth={2.1} />
                                    </span>
                                    <span className="flex min-w-0 flex-col">
                                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                                        {f.number}
                                      </span>
                                      <span className="font-display text-sm font-medium text-[var(--color-text-primary)]">
                                        {f.label}
                                      </span>
                                    </span>
                                  </Link>
                                );
                              })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {plainLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={closeAll}
                  className="block border-b border-[var(--color-border)] px-3 py-4 font-display text-base font-semibold tracking-tight text-[var(--color-text-primary)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Drawer footer CTA */}
            <div className="border-t border-[var(--color-border)] p-4">
              <Link
                to="/contact"
                onClick={closeAll}
                className="flex w-full items-center justify-center rounded-md px-5 py-3 font-display text-sm font-semibold tracking-tight"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-bg)",
                }}
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
