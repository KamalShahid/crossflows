import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MegaMenuPanelProps {
  panelId: string;
  ariaLabel: string;
  topOffset: number;
  children: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function MegaMenuPanel({
  panelId,
  ariaLabel,
  topOffset,
  children,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuPanelProps) {
  return (
    <motion.div
      key={`mega-${panelId}`}
      id={`mega-panel-${panelId}`}
      role="region"
      aria-label={`${ariaLabel} menu`}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: "fixed",
        top: topOffset,
        left: 0,
        width: "100vw",
        zIndex: 49,
        backgroundColor: "var(--color-surface-2)",
        borderBottom: "1px solid var(--color-border)",
        boxShadow: "0 16px 48px rgba(0, 0, 0, 0.4)",
      }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 py-10 sm:px-12">
        {children}
      </div>
    </motion.div>
  );
}
