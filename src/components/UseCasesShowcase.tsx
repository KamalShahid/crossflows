import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { useCases, type UseCase } from "../data/useCases";
import type { ProductSlug } from "../data/products";

interface UseCasesShowcaseProps {
  productSlug: ProductSlug;
  /** Optional override for the per-product subheading copy. */
  subheading?: string;
}

const PRODUCT_SUBHEADINGS: Record<ProductSlug, string> = {
  smarttalk: "Every conversation handled. Every channel covered.",
  worksync: "Every workflow streamlined. Every process connected.",
  learnmate: "Every learner supported. Every institution empowered.",
  driveflow: "Every dispatch coordinated. Every operation optimized.",
};

const EXCERPT_LIMIT = 80;

function deriveExcerpt(text: string): string {
  if (text.length <= EXCERPT_LIMIT) return text;
  return text.slice(0, EXCERPT_LIMIT).trimEnd() + "…";
}

interface CardProps {
  useCase: UseCase;
}

function Card({ useCase: u }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = u.icon ?? HelpCircle;
  const excerpt = deriveExcerpt(u.description);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.97 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -3 }}
      style={{
        background: "var(--color-surface)",
        border: `1px solid ${
          isHovered ? "var(--color-accent)" : "var(--color-border)"
        }`,
        borderRadius: 16,
        position: "relative",
        overflow: "hidden",
        boxShadow: isHovered
          ? "0 0 0 1px var(--color-accent), 0 8px 32px rgba(0, 212, 255, 0.1)"
          : "none",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      {/* Top accent sweep — Framer Motion (not CSS ::before) */}
      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "var(--color-accent)",
          transformOrigin: "left center",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          pointerEvents: "none",
          zIndex: 1,
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Full-card click target → /use-cases#[slug] */}
      <Link
        to={`/use-cases#${u.slug}`}
        style={{
          display: "block",
          padding: "22px 20px",
          color: "inherit",
          textDecoration: "none",
        }}
        aria-label={`Explore ${u.title}`}
      >
        {/* Icon */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            background: "rgba(0, 212, 255, 0.08)",
            border: "1px solid rgba(0, 212, 255, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={18} color="var(--color-accent)" strokeWidth={2.1} />
        </div>

        {/* Title */}
        <h3
          className="font-display"
          style={{
            fontSize: "0.88rem",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            lineHeight: 1.3,
            marginTop: 14,
            marginBottom: 0,
          }}
        >
          {u.title}
        </h3>

        {/* 2-line clamped excerpt */}
        <p
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "0.78rem",
            color: "var(--color-text-muted)",
            lineHeight: 1.6,
            marginTop: 6,
            marginBottom: 0,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {excerpt}
        </p>

        {/* Hover-only Explore → label */}
        <span
          style={{
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: "0.68rem",
            letterSpacing: "0.06em",
            color: "var(--color-accent)",
            marginTop: 14,
            display: "block",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(4px)",
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}
        >
          Explore →
        </span>
      </Link>
    </motion.div>
  );
}

export default function UseCasesShowcase({
  productSlug,
  subheading,
}: UseCasesShowcaseProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  const relevant = useCases.filter((u) => u.productSlugs.includes(productSlug));
  const resolvedSubheading = subheading ?? PRODUCT_SUBHEADINGS[productSlug];

  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/30 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              fontSize: "0.7rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
            }}
          >
            Use Cases
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              lineHeight: 1.2,
              marginTop: 12,
              marginBottom: 0,
            }}
          >
            Applicable Use Cases
          </h2>
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: "0.9rem",
              color: "var(--color-text-muted)",
              marginTop: 8,
              marginBottom: 0,
            }}
          >
            {resolvedSubheading}
          </p>
        </motion.div>

        {/* Cards grid — staggered entry on viewport enter */}
        <motion.div
          ref={containerRef}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.06, delayChildren: 0.2 },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {relevant.slice(0, 6).map((u) => (
            <Card key={u.slug} useCase={u} />
          ))}
        </motion.div>

        {/* Explore all use cases CTA */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
          <Link
            to="/use-cases"
            style={{
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-text-primary)",
              border: "1px solid var(--color-border)",
              borderRadius: 8,
              padding: "12px 28px",
              transition: "border-color 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-accent)";
              e.currentTarget.style.color = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-border)";
              e.currentTarget.style.color = "var(--color-text-primary)";
            }}
          >
            Explore All Use Cases →
          </Link>
        </div>
      </div>
    </section>
  );
}
