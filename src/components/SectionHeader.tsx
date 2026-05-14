import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  maxWidth?: string;
}

export default function SectionHeader({
  label,
  heading,
  subheading,
  align = "left",
  maxWidth = "max-w-3xl",
}: SectionHeaderProps) {
  return (
    <div
      className={
        "flex flex-col gap-4 " +
        (align === "center" ? "items-center text-center mx-auto " : "items-start ") +
        maxWidth
      }
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-display text-balance text-3xl font-bold leading-[1.05] tracking-tight text-[var(--color-text-primary)] sm:text-4xl md:text-5xl"
      >
        {heading}
      </motion.h2>
      {subheading && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
          className="text-balance text-base text-[var(--color-text-muted)] sm:text-lg"
        >
          {subheading}
        </motion.p>
      )}
    </div>
  );
}
