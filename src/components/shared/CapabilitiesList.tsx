import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { ProductFeature } from "../../data/products";

interface CapabilitiesListProps {
  capabilities: ProductFeature[];
}

/**
 * Lightweight 2-column capability list shared across product subpages.
 * No card chrome — just an accent-tinted icon next to a title + description.
 * Cards stagger in on viewport entry; no hover lift or glow.
 */
export default function CapabilitiesList({ capabilities }: CapabilitiesListProps) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2"
      style={{ rowGap: 32, columnGap: 48 }}
    >
      {capabilities.map((cap, i) => {
        const Icon = cap.icon ?? Sparkles;
        return (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
            style={{
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: "rgba(0, 212, 255, 0.08)",
                border: "1px solid rgba(0, 212, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <Icon size={16} color="var(--color-accent)" strokeWidth={2} />
            </div>
            <div>
              <div
                className="font-display"
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  marginBottom: 4,
                  letterSpacing: "-0.01em",
                }}
              >
                {cap.title}
              </div>
              <div
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "0.86rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.65,
                }}
              >
                {cap.description}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
