import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import NavLink from "./NavLink";
import MegaMenuPanel from "./MegaMenuPanel";
import ProductsPanel from "./panels/ProductsPanel";
import IndustriesPanel from "./panels/IndustriesPanel";
import SolutionsPanel from "./panels/SolutionsPanel";
import UseCasesPanel from "./panels/UseCasesPanel";
import FeaturesPanel from "./panels/FeaturesPanel";
import { isDropdownItem, type NavItem, type PanelId } from "./types";

const NAVBAR_HEIGHT_DESKTOP = 72;

const navItems: NavItem[] = [
  { label: "Products", panelId: "products" },
  { label: "Industries", panelId: "industries" },
  { label: "Solutions", panelId: "solutions" },
  { label: "Use Cases", panelId: "useCases" },
  { label: "Features", panelId: "features" },
  { label: "Blog", href: "/blog" },
];

const panelAriaLabels: Record<PanelId, string> = {
  products: "Products",
  industries: "Industries",
  solutions: "Solutions",
  useCases: "Use Cases",
  features: "Features",
};

const HOVER_OPEN_DELAY_MS = 150;
const HOVER_CLOSE_DELAY_MS = 200;

export default function NavDesktop() {
  const [activePanel, setActivePanel] = useState<PanelId | null>(null);
  const navbarRef = useRef<HTMLElement | null>(null);
  const openTimerRef = useRef<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const location = useLocation();

  const clearTimers = useCallback(() => {
    if (openTimerRef.current !== null) {
      window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const closePanel = useCallback(() => {
    clearTimers();
    setActivePanel(null);
  }, [clearTimers]);

  const openPanel = useCallback(
    (id: PanelId) => {
      clearTimers();
      setActivePanel(id);
    },
    [clearTimers],
  );

  const togglePanel = useCallback(
    (id: PanelId) => {
      clearTimers();
      setActivePanel((prev) => (prev === id ? null : id));
    },
    [clearTimers],
  );

  const scheduleOpen = useCallback(
    (id: PanelId) => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      if (activePanel === id) return;
      if (openTimerRef.current !== null) window.clearTimeout(openTimerRef.current);
      openTimerRef.current = window.setTimeout(() => {
        setActivePanel(id);
        openTimerRef.current = null;
      }, HOVER_OPEN_DELAY_MS);
    },
    [activePanel],
  );

  const scheduleClose = useCallback(() => {
    if (openTimerRef.current !== null) {
      window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setActivePanel(null);
      closeTimerRef.current = null;
    }, HOVER_CLOSE_DELAY_MS);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  // Outside click closes panel
  useEffect(() => {
    if (!activePanel) return;
    const handleMouseDown = (e: MouseEvent) => {
      const navEl = navbarRef.current;
      const panelEl = document.getElementById(`mega-panel-${activePanel}`);
      if (!navEl) return;
      const target = e.target as Node;
      if (navEl.contains(target)) return;
      if (panelEl && panelEl.contains(target)) return;
      closePanel();
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [activePanel, closePanel]);

  // Escape closes panel
  useEffect(() => {
    if (!activePanel) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [activePanel, closePanel]);

  // Cleanup timers on unmount
  useEffect(() => () => clearTimers(), [clearTimers]);

  // Close on route change
  useEffect(() => {
    closePanel();
  }, [location.pathname, closePanel]);

  const renderPanelContent = () => {
    switch (activePanel) {
      case "products":
        return <ProductsPanel onNavigate={closePanel} />;
      case "industries":
        return <IndustriesPanel onNavigate={closePanel} />;
      case "solutions":
        return <SolutionsPanel onNavigate={closePanel} />;
      case "useCases":
        return <UseCasesPanel onNavigate={closePanel} />;
      case "features":
        return <FeaturesPanel onNavigate={closePanel} />;
      default:
        return null;
    }
  };

  return (
    <header
      ref={navbarRef}
      onMouseLeave={scheduleClose}
      className="fixed inset-x-0 top-0 z-50 hidden lg:block"
      style={{
        backgroundColor: "var(--color-surface)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div
        className="mx-auto flex w-full max-w-[1280px] items-center px-6 sm:px-12"
        style={{ height: NAVBAR_HEIGHT_DESKTOP }}
      >
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center" aria-label="Cross Flows Synergy home">
          <Logo size={38} />
        </Link>

        {/* Center-left nav links */}
        <nav className="ml-12 flex flex-1 items-center gap-1">
          {navItems.map((item) => {
            if (isDropdownItem(item)) {
              const isActive = activePanel === item.panelId;
              return (
                <NavLink
                  key={item.label}
                  label={item.label}
                  asTrigger
                  isActive={isActive}
                  onMouseEnter={() => scheduleOpen(item.panelId)}
                  onFocus={() => openPanel(item.panelId)}
                  onClick={() => togglePanel(item.panelId)}
                  ariaControls={`mega-panel-${item.panelId}`}
                />
              );
            }
            return (
              <NavLink
                key={item.label}
                label={item.label}
                href={item.href}
              />
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="ml-4 flex shrink-0 items-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md px-5 py-2.5 font-display text-[0.875rem] font-semibold tracking-tight transition-shadow duration-200 ease-out"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-bg)",
              boxShadow: "0 0 0 0 var(--color-glow)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 20px 4px var(--color-glow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 0 var(--color-glow)";
            }}
          >
            Book a Demo
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {activePanel && (
          <MegaMenuPanel
            panelId={activePanel}
            ariaLabel={panelAriaLabels[activePanel]}
            topOffset={NAVBAR_HEIGHT_DESKTOP}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            {renderPanelContent()}
          </MegaMenuPanel>
        )}
      </AnimatePresence>
    </header>
  );
}
