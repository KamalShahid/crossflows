import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getIndustry, type IndustrySlug } from "../data/industries";

interface OrbitConfig {
  slug: IndustrySlug;
  /** Shortened label rendered inside the pill (full name kept on aria-label). */
  displayLabel: string;
  /** Percentage x-offset from container center; positive = right. */
  xOffset: number;
  /** Percentage y-offset from container center; positive = down. */
  yOffset: number;
  /** Clockwise reveal order — pill at staggerIndex 0 animates first. */
  staggerIndex: number;
}

const orbitConfig: OrbitConfig[] = [
  { slug: "healthcare-clinics", displayLabel: "Healthcare & Clinics", xOffset: -34, yOffset: -34, staggerIndex: 8 },
  { slug: "consumer-services", displayLabel: "Consumer Services", xOffset: -38, yOffset: 4, staggerIndex: 7 },
  { slug: "recruitment-staffing", displayLabel: "Recruitment & Staffing", xOffset: -30, yOffset: 34, staggerIndex: 6 },
  { slug: "real-estate-property", displayLabel: "Real Estate", xOffset: -6, yOffset: -38, staggerIndex: 0 },
  { slug: "restaurants-hospitality", displayLabel: "Restaurants & Hospitality", xOffset: 12, yOffset: -32, staggerIndex: 1 },
  { slug: "utilities-services", displayLabel: "Utilities & Service Providers", xOffset: 34, yOffset: -16, staggerIndex: 2 },
  { slug: "schools-education", displayLabel: "Schools & Education", xOffset: 34, yOffset: 22, staggerIndex: 3 },
  { slug: "logistics-operations", displayLabel: "Logistics & Operations", xOffset: 8, yOffset: 36, staggerIndex: 4 },
  { slug: "financial-services", displayLabel: "Financial Services", xOffset: -14, yOffset: 38, staggerIndex: 5 },
];

const SPRING_EASE = [0.34, 1.56, 0.64, 1] as const;
const POSITION_TRANSITION = (delay: number) =>
  `left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s, top 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s`;

export default function IndustriesOrbit() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile/touch viewport. On those, auto-trigger the reveal so users
  // who can't hover still see the animation play on page entry.
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const t = window.setTimeout(() => setIsHovered(true), 400);
    return () => window.clearTimeout(t);
  }, [isMobile]);

  const pillFontSize = isMobile ? "0.65rem" : "0.72rem";
  const pillPadding = isMobile ? "6px 12px" : "8px 18px";
  const hubSize = isMobile ? 90 : 120;

  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/50 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
          {/* Left column — text content */}
          <div className="flex flex-col lg:w-2/5">
            <span
              className="font-mono uppercase"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                color: "var(--color-accent)",
              }}
            >
              Industries
            </span>
            <h2
              className="font-display font-bold text-[var(--color-text-primary)]"
              style={{ fontSize: "2rem", lineHeight: 1.2, marginTop: 10 }}
            >
              Supporting Businesses Across Multiple Industries
            </h2>
            <p
              className="text-[var(--color-text-muted)]"
              style={{ fontSize: "0.9rem", lineHeight: 1.7, marginTop: 12 }}
            >
              Cross Flows Synergy develops AI-powered solutions tailored for industries where
              communication, efficiency, and customer experience are critical.
            </p>
            <Link
              to="/industries"
              className="inline-flex items-center gap-1.5 transition-opacity duration-150 hover:opacity-80"
              style={{
                fontSize: "0.85rem",
                color: "var(--color-accent)",
                marginTop: 24,
              }}
            >
              View all industries
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right column — orbit container */}
          <div className="lg:w-3/5">
            <div
              role="region"
              aria-label="Industries we serve"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={() => setIsHovered((p) => !p)}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 520,
                margin: "0 auto",
                aspectRatio: "1 / 1",
              }}
            >
              {/* Decorative orbit rings */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "55%",
                  height: "55%",
                  borderRadius: "50%",
                  border: "1px solid var(--color-border)",
                  opacity: isHovered ? 0.4 : 0.1,
                  transition: "opacity 0.4s ease",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "88%",
                  height: "88%",
                  borderRadius: "50%",
                  border: "1px solid var(--color-border)",
                  opacity: isHovered ? 0.25 : 0.06,
                  transition: "opacity 0.4s ease",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              {/* Center circle — Cross Flows Synergy brand mark */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: hubSize,
                  height: hubSize,
                  borderRadius: "50%",
                  background: "var(--color-surface-2)",
                  border: "1.5px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                  boxShadow: "0 12px 36px rgba(0, 0, 0, 0.45)",
                }}
              >
                <img
                  src="/logo-icon.png"
                  alt="Cross Flows Synergy"
                  draggable={false}
                  style={{ width: "62%", height: "62%", objectFit: "contain" }}
                />
              </div>

              {/* Animated pills */}
              {orbitConfig.map((item) => {
                const industry = getIndustry(item.slug);
                const fullName = industry?.name ?? item.displayLabel;
                const delay = item.staggerIndex * 0.04;
                return (
                  <motion.div
                    key={item.slug}
                    initial={{ x: "-50%", y: "-50%", opacity: 0.07, scale: 0.6 }}
                    animate={{
                      x: "-50%",
                      y: "-50%",
                      opacity: isHovered ? 1 : 0.07,
                      scale: isHovered ? 1 : 0.6,
                    }}
                    transition={{
                      opacity: { duration: 0.4, delay, ease: "easeOut" },
                      scale: { duration: 0.5, delay, ease: SPRING_EASE },
                    }}
                    style={{
                      position: "absolute",
                      left: isHovered ? `calc(50% + ${item.xOffset}%)` : "50%",
                      top: isHovered ? `calc(50% + ${item.yOffset}%)` : "50%",
                      transition: POSITION_TRANSITION(delay),
                      zIndex: 3,
                    }}
                  >
                    <Link
                      to={`/industries/${item.slug}`}
                      aria-label={fullName}
                      className="industries-orbit-pill"
                      style={{
                        fontSize: pillFontSize,
                        padding: pillPadding,
                      }}
                    >
                      {item.displayLabel}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Visually hidden status for screen readers */}
              <span
                aria-live="polite"
                style={{
                  position: "absolute",
                  width: 1,
                  height: 1,
                  padding: 0,
                  margin: -1,
                  overflow: "hidden",
                  clip: "rect(0, 0, 0, 0)",
                  whiteSpace: "nowrap",
                  borderWidth: 0,
                }}
              >
                {isHovered ? "Industries revealed" : ""}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
