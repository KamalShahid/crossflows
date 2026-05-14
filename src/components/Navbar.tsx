import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import LogoMark from "./LogoMark";
import CTAButton from "./CTAButton";
import { products } from "../data/products";
import { useScrollLock } from "../hooks/useScrollLock";

const navLinks: { label: string; to: string; hasMega?: boolean }[] = [
  { label: "Products", to: "/products", hasMega: true },
  { label: "Industries", to: "/industries" },
  { label: "Use Cases", to: "/use-cases" },
  { label: "Features", to: "/features" },
  { label: "Blog", to: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useScrollLock(mobileOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 " +
        (scrolled
          ? "bg-[var(--color-bg)]/80 backdrop-blur-xl border-b border-[var(--color-border)]"
          : "bg-transparent border-b border-transparent")
      }
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[72px] sm:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Cross Flows Synergy home">
          <LogoMark size={32} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.hasMega ? (
              <div
                key={link.to}
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
                className="relative"
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    "flex items-center gap-1 rounded-full px-4 py-2 font-display text-sm font-medium tracking-tight transition " +
                    (isActive
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-text-primary)]/85 hover:text-[var(--color-accent)]")
                  }
                >
                  {link.label}
                  <ChevronDown
                    className={
                      "h-3.5 w-3.5 transition-transform " + (megaOpen ? "rotate-180" : "")
                    }
                  />
                </NavLink>

                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3"
                    >
                      <div className="grid grid-cols-2 gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/95 p-4 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                        {products.map((p) => {
                          const Icon = p.icon;
                          return (
                            <Link
                              key={p.slug}
                              to={`/products/${p.slug}`}
                              className="group flex items-start gap-3 rounded-xl border border-transparent p-3 transition hover:border-[var(--color-border)] hover:bg-[var(--color-surface-2)]"
                            >
                              <span
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${p.accent} text-black shadow-[0_8px_24px_rgba(0,212,255,0.25)]`}
                              >
                                <Icon className="h-5 w-5" strokeWidth={2.2} />
                              </span>
                              <span className="flex flex-col gap-0.5">
                                <span className="font-display text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)]">
                                  {p.name}
                                </span>
                                <span className="text-xs text-[var(--color-text-muted)] leading-snug">
                                  {p.tagline}
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
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  "rounded-full px-4 py-2 font-display text-sm font-medium tracking-tight transition " +
                  (isActive
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-primary)]/85 hover:text-[var(--color-accent)]")
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CTAButton to="/contact" variant="primary" withArrow>
            Book a Demo
          </CTAButton>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-primary)] lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[60] bg-[var(--color-bg)]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-4">
                <LogoMark size={30} />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
                }}
                className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-6"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.to}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <NavLink
                      to={link.to}
                      className="block rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 font-display text-xl font-semibold tracking-tight"
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="mt-2 grid grid-cols-2 gap-2"
                >
                  {products.map((p) => {
                    const Icon = p.icon;
                    return (
                      <Link
                        key={p.slug}
                        to={`/products/${p.slug}`}
                        className="flex flex-col gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-3"
                      >
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${p.accent} text-black`}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="font-display text-sm font-semibold">{p.name}</span>
                      </Link>
                    );
                  })}
                </motion.div>
              </motion.nav>

              <div className="border-t border-[var(--color-border)] px-5 py-4">
                <CTAButton to="/contact" variant="primary" withArrow className="w-full">
                  Book a Demo
                </CTAButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
