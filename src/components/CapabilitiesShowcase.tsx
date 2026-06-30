import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, type LucideIcon } from "lucide-react";
import {
  getProduct,
  type ProductFeature,
  type ProductSlug,
} from "../data/products";

interface CapabilitiesShowcaseProps {
  productId: string;
  productName: string;
}

/**
 * 8 rotating accent colors so the grid reads as varied rather than monotone.
 * Theme-agnostic and product-agnostic — assigned by card index, not by data.
 */
const ACCENT_CYCLE = [
  "#00D4FF", // cyan — var(--color-accent)
  "#F5A623", // amber
  "#7B6FF0", // purple
  "#00CF78", // green
  "#FF6B6B", // coral
  "#4ECDC4", // teal
  "#A78BFA", // violet
  "#FFB347", // warm orange
] as const;

const getAccentColor = (index: number): string =>
  ACCENT_CYCLE[index % ACCENT_CYCLE.length];

export default function CapabilitiesShowcase({
  productId,
  productName,
}: CapabilitiesShowcaseProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const product = getProduct(productId as ProductSlug);
  if (!product) return null;
  const capabilities = product.features;

  return (
    <section
      style={{
        padding: "100px 48px",
        maxWidth: 1280,
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 56 }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: "0.68rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: 12,
          }}
        >
          Capabilities
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display"
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
            fontWeight: 800,
            color: "var(--color-text-primary)",
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          What makes {productName} different.
        </motion.h2>
      </div>

      {/* Card grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          rowGap: 24,
          columnGap: 32,
        }}
      >
        {capabilities.map((cap, index) => {
          const accentColor = getAccentColor(index);
          const isEven = index % 2 === 0;
          // Vertical stagger on desktop only — odd-indexed cards drop 16 px
          // for the asymmetric rhythm. Disabled on mobile for clean stacking.
          const staggerY = isMobile || isEven ? 0 : 16;
          return (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: (index % 4) * 0.08,
                ease: "easeOut",
              }}
              style={{ transform: `translateY(${staggerY}px)` }}
            >
              <CapabilityCard
                capability={cap}
                accentColor={accentColor}
                index={index}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
 * Single capability card — hover lift + icon micro-animation +
 * faint ordinal watermark + animated bottom accent sweep.
 * ──────────────────────────────────────────────────────── */

interface CapabilityCardProps {
  capability: ProductFeature;
  accentColor: string;
  index: number;
}

function CapabilityCard({
  capability,
  accentColor,
  index,
}: CapabilityCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon: LucideIcon = capability.icon ?? Sparkles;
  const ordinal = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      style={{
        position: "relative",
        background: "var(--color-surface)",
        border: `1px solid ${
          isHovered ? `${accentColor}50` : "var(--color-border)"
        }`,
        borderLeft: `3px solid ${
          isHovered ? accentColor : `${accentColor}30`
        }`,
        borderRadius: 16,
        padding: "24px 24px 24px 22px",
        overflow: "hidden",
        cursor: "default",
        transition: "border-color 0.25s ease",
        boxShadow: isHovered
          ? `0 12px 32px ${accentColor}1A, 0 4px 12px rgba(0,0,0,0.3)`
          : "none",
      }}
    >
      {/* Faint ordinal watermark — anchored bottom-right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: -16,
          right: 8,
          fontFamily: '"JetBrains Mono", ui-monospace, monospace',
          fontSize: "4.5rem",
          fontWeight: 700,
          color: accentColor,
          opacity: isHovered ? 0.08 : 0.04,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          transition: "opacity 0.3s ease",
        }}
      >
        {ordinal}
      </div>

      {/* Icon — scales + tilts on hover */}
      <motion.div
        animate={{
          scale: isHovered ? 1.08 : 1,
          rotate: isHovered ? -4 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: `${accentColor}15`,
          border: `1px solid ${accentColor}35`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Icon size={20} color={accentColor} strokeWidth={2} />
      </motion.div>

      {/* Title */}
      <div
        className="font-display"
        style={{
          fontSize: "1rem",
          fontWeight: 700,
          color: "var(--color-text-primary)",
          marginBottom: 8,
          letterSpacing: "-0.01em",
          position: "relative",
          zIndex: 1,
        }}
      >
        {capability.title}
      </div>

      {/* Description */}
      <div
        style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "0.85rem",
          color: "var(--color-text-muted)",
          lineHeight: 1.65,
          position: "relative",
          zIndex: 1,
        }}
      >
        {capability.description}
      </div>

      {/* Bottom accent sweep — slides in from left on hover */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: accentColor,
          transformOrigin: "left center",
          pointerEvents: "none",
        }}
      />
    </motion.div>
  );
}
