import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageShellProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function PageShell({ children, title, description }: PageShellProps) {
  const location = useLocation();

  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname, title, description]);

  return (
    <motion.main
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pt-16 sm:pt-[72px]"
    >
      {children}
    </motion.main>
  );
}
