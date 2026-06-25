import { useRef } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  // Workflow step icons (indexed by ordinal-1)
  Phone,
  MessageSquare,
  CheckCircle,
  Workflow as WorkflowIcon,
  // Stat icons (indexed by stat index)
  TrendingUp,
  Activity,
  Clock,
  Globe,
  // Product icons
  PhoneCall,
  Truck,
  // CTA arrows / inline glyphs
  ArrowRight,
  Check,
  ChevronRight,
  // Use-case icon set (matches strings in industries.ts useCases[].icon)
  AlertCircle,
  BarChart3,
  Bell,
  BookOpen,
  Briefcase,
  CalendarCheck,
  ClipboardList,
  CreditCard,
  FileText,
  GraduationCap,
  Headphones,
  KeyRound,
  MessageCircle,
  Network,
  Package,
  Radio,
  Receipt,
  Route,
  Send,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Star,
  UserCheck,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useCountUp } from "../hooks/useCountUp";
import {
  industries,
  getIndustryDetail,
  type Industry,
  type IndustryDetailExtension,
  type IndustryStat,
  type IndustryProduct,
  type WorkflowStep,
  type IndustryUseCase,
  type IndustrySlug,
} from "../data/industries";
import type { ProductSlug } from "../data/products";
import PageShell from "../components/PageShell";
import HeroBackground from "../components/HeroBackground";
import WaveformBars from "../components/shared/WaveformBars";

// Industry detail pages render every industry in the site's standard
// cyan + purple brand palette. The data file still carries
// `heroAccentColor` / `heroSecondaryColor` for forward compatibility, but
// this template no longer reads them — every dynamic color reference
// resolves to the same brand tokens so all 9 pages look consistent.
const HERO_ACCENT = "#00D4FF"; // var(--color-accent)
const HERO_SECONDARY = "#7B6FF0";
const HERO_ACCENT_RGB = "0, 212, 255";

const USE_CASE_ICONS: Record<string, LucideIcon> = {
  Activity,
  AlertCircle,
  BarChart3,
  Bell,
  BookOpen,
  Briefcase,
  CalendarCheck,
  ClipboardList,
  CreditCard,
  FileText,
  GraduationCap,
  Headphones,
  // The spec sometimes writes `HeadphonesIcon` instead of `Headphones`;
  // alias it so the data file's icon strings still resolve.
  HeadphonesIcon: Headphones,
  KeyRound,
  MessageCircle,
  Network,
  Package,
  PhoneCall,
  Radio,
  Receipt,
  Route,
  Send,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
  UserCheck,
  Users,
  Wrench,
};

const WORKFLOW_STEP_ICONS: LucideIcon[] = [
  Phone,
  MessageSquare,
  CheckCircle,
  WorkflowIcon,
  GraduationCap,
];

const STAT_ICONS: LucideIcon[] = [
  TrendingUp,
  Activity,
  Clock,
  Globe,
  ShieldCheck,
];

const PRODUCT_ICONS: Record<ProductSlug, LucideIcon> = {
  smarttalk: PhoneCall,
  worksync: WorkflowIcon,
  learnmate: GraduationCap,
  driveflow: Truck,
};

interface ParsedStat {
  prefix: string;
  numeric: number;
  suffix: string;
  decimals: number;
}

function parseStatValue(raw: string): ParsedStat | null {
  const m = /^([+-]?)(\d+(?:\.\d+)?)([\D]*)$/.exec(raw.trim());
  if (!m) return null;
  const [, prefix, num, suffix] = m;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return { prefix, numeric: parseFloat(num), suffix, decimals };
}

function StatCounter({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const parsed = parseStatValue(value);
  const current = useCountUp(parsed?.numeric ?? 0, isInView && !!parsed, {
    decimals: parsed?.decimals ?? 0,
  });

  const renderedNumber = parsed
    ? parsed.decimals === 0
      ? Math.round(current).toString()
      : current.toFixed(parsed.decimals)
    : null;

  return (
    <div
      ref={ref}
      className="font-display"
      style={{
        fontSize: "clamp(1.6rem, 3vw, 2rem)",
        fontWeight: 800,
        color: "var(--color-text-primary)",
        lineHeight: 1.1,
      }}
    >
      {parsed
        ? `${parsed.prefix}${renderedNumber}${parsed.suffix}`
        : value}
    </div>
  );
}

interface SectionProps {
  industry: Industry;
  detail: IndustryDetailExtension;
}

function HeroSection({ industry, detail }: SectionProps) {
  const nameParts = industry.name.split("&").map((s) => s.trim());
  const headPart1 = nameParts[0];
  const headPart2 = nameParts[1] ?? "Operations";
  const accent = HERO_ACCENT;
  const secondary = HERO_SECONDARY;
  const accentRgb = HERO_ACCENT_RGB;

  return (
    <section className="relative isolate overflow-hidden">
      <HeroBackground variant="subtle" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-7">
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 999,
              background: `rgba(${accentRgb}, 0.1)`,
              border: `1px solid rgba(${accentRgb}, 0.3)`,
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              fontSize: "0.65rem",
              letterSpacing: "0.14em",
              color: accent,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: accent,
              }}
            />
            {detail.heroTagline}
          </div>

          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2.4rem, 5.4vw, 4.4rem)",
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            <span style={{ color: "var(--color-text-primary)" }}>
              AI-Powered
            </span>
            <br />
            <span
              style={{
                background: `linear-gradient(135deg, ${accent}, ${secondary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {headPart1}
            </span>
            <br />
            <span
              style={{
                background: `linear-gradient(135deg, ${secondary}, ${accent})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {headPart2}
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
            {industry.intro}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 22px",
                borderRadius: 999,
                background: "var(--color-accent)",
                color: "var(--color-bg)",
                fontFamily: '"Syne", system-ui, sans-serif',
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "-0.01em",
                textDecoration: "none",
                boxShadow: `0 12px 40px rgba(${accentRgb}, 0.35)`,
              }}
            >
              Book a Free Demo
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/use-cases"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 22px",
                borderRadius: 999,
                background: "transparent",
                color: "var(--color-text-primary)",
                border: "1px solid var(--color-border)",
                fontFamily: '"Syne", system-ui, sans-serif',
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              Explore Use Cases
            </Link>
          </div>

          <div className="mt-2 flex items-center gap-3">
            <div style={{ display: "flex" }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${accent}, ${secondary})`,
                    border: "2px solid var(--color-bg)",
                    marginLeft: i > 0 ? -8 : 0,
                  }}
                />
              ))}
            </div>
            <span className="text-xs text-[var(--color-text-muted)] sm:text-sm">
              Trusted by leading {industry.name.toLowerCase()} businesses
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          style={{
            background: "var(--color-surface-2)",
            border: "1px solid var(--color-border)",
            borderRadius: 20,
            padding: 16,
            boxShadow: `0 40px 100px rgba(0,0,0,0.5), 0 0 60px rgba(${accentRgb},0.05)`,
          }}
        >
          <div
            style={{
              background: "var(--color-surface)",
              borderRadius: 14,
              padding: 16,
              marginBottom: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
              }}
            >
              <motion.div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: accent,
                }}
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span
                style={{
                  fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                  fontSize: "0.65rem",
                  color: "var(--color-text-muted)",
                  letterSpacing: "0.08em",
                }}
              >
                AI VOICE AGENT
              </span>
            </div>

            <WaveformBars isActive={true} color={accent} />

            <div
              style={{
                background: "var(--color-surface-2)",
                borderRadius: 10,
                padding: "10px 14px",
                marginTop: 12,
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.78rem",
                color: "var(--color-text-muted)",
                fontStyle: "italic",
              }}
            >
              “{detail.workflow[0].trigger}”
            </div>

            <div
              style={{
                background: `rgba(${accentRgb}, 0.1)`,
                border: `1px solid rgba(${accentRgb}, 0.2)`,
                borderRadius: 10,
                padding: "10px 14px",
                marginTop: 8,
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "0.78rem",
                color: "var(--color-text-primary)",
              }}
            >
              {detail.workflow[1].description}
            </div>
          </div>

          <div
            style={{
              background: "var(--color-surface)",
              borderRadius: 14,
              padding: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <span
                style={{
                  fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                  fontSize: "0.65rem",
                  color: "var(--color-text-muted)",
                  letterSpacing: "0.08em",
                }}
              >
                OPERATIONS DASHBOARD
              </span>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#00CF78",
                }}
              />
            </div>

            <div style={{ display: "flex", gap: 16, marginBottom: 12 }}>
              {detail.stats.slice(0, 3).map((stat: IndustryStat, i: number) => (
                <div key={i}>
                  <div
                    className="font-display"
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 800,
                      color: "var(--color-text-primary)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: "0.66rem",
                      color: "var(--color-text-muted)",
                      marginTop: 4,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {detail.useCases.slice(0, 3).map((uc: IndustryUseCase, i: number) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 0",
                  borderTop: "1px solid var(--color-border)",
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: accent,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "0.72rem",
                    color: "var(--color-text-muted)",
                    flex: 1,
                  }}
                >
                  {uc.title}
                </span>
                <span
                  style={{
                    fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                    fontSize: "0.6rem",
                    color: "#00CF78",
                    letterSpacing: "0.08em",
                  }}
                >
                  ACTIVE
                </span>
              </div>
            ))}

            <div
              style={{
                marginTop: 12,
                background: "var(--color-surface-2)",
                borderRadius: 8,
                padding: "8px 12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                  fontSize: "0.6rem",
                  color: "var(--color-text-muted)",
                  letterSpacing: "0.08em",
                }}
              >
                SATISFACTION SCORE
              </span>
              <span
                className="font-display"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: secondary,
                }}
              >
                4.8/5
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsBar({ detail }: { detail: IndustryDetailExtension }) {
  const accentRgb = HERO_ACCENT_RGB;
  return (
    <section
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        padding: "48px 0",
      }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 sm:px-8 md:grid-cols-3 lg:grid-cols-5">
        {detail.stats.map((stat: IndustryStat, i: number) => {
          const StatIcon = STAT_ICONS[i % STAT_ICONS.length];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
              style={{ textAlign: "center" }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: `rgba(${accentRgb}, 0.1)`,
                  border: `1px solid rgba(${accentRgb}, 0.2)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px",
                }}
              >
                <StatIcon size={18} color={HERO_ACCENT} strokeWidth={2} />
              </div>

              <StatCounter value={stat.value} />

              <div
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "0.82rem",
                  color: "var(--color-text-primary)",
                  fontWeight: 600,
                  marginTop: 4,
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: "0.72rem",
                  color: "var(--color-text-muted)",
                  marginTop: 4,
                  padding: "0 8px",
                }}
              >
                {stat.sublabel}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

const COUNT_WORDS: Record<number, string> = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
};

function ProductsSection({ detail }: { detail: IndustryDetailExtension }) {
  const count = detail.products.length;
  const SPARKLINE_HEIGHTS = [40, 60, 45, 80, 65, 90, 70];
  const gridCols = count >= 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div
          style={{
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
          }}
        >
          Our AI Solutions
        </div>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)",
            fontWeight: 800,
            color: "var(--color-text-primary)",
            lineHeight: 1.2,
            marginTop: 12,
            letterSpacing: "-0.02em",
          }}
        >
          {COUNT_WORDS[count] ?? count} AI Solutions. One Seamless Experience.
        </h2>
      </div>

      <div className={`mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 ${gridCols}`}>
        {detail.products.map((product: IndustryProduct, idx: number) => {
          const Icon = PRODUCT_ICONS[product.productId];
          return (
            <motion.div
              key={product.productId}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ delay: idx * 0.08, duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              style={{
                background: "var(--color-surface)",
                border: `1px solid ${product.accentColor}40`,
                borderRadius: 16,
                padding: 24,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 60,
                  background: `linear-gradient(to bottom, ${product.accentColor}15, transparent)`,
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: `${product.accentColor}20`,
                    border: `1px solid ${product.accentColor}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={18} color={product.accentColor} strokeWidth={2} />
                </div>
                <div>
                  <div
                    className="font-display"
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {product.productName}
                  </div>
                  <div
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: "0.72rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {product.roleInIndustry}
                  </div>
                </div>
              </div>

              <div
                style={{
                  position: "relative",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-end",
                }}
              >
                <div style={{ flex: 1 }}>
                  {product.features.map((f: string, i: number) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                        marginBottom: 8,
                      }}
                    >
                      <Check
                        size={14}
                        color={product.accentColor}
                        strokeWidth={2.5}
                        style={{ marginTop: 2, flexShrink: 0 }}
                      />
                      <span
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: "0.78rem",
                          color: "var(--color-text-muted)",
                          lineHeight: 1.4,
                        }}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 3,
                    width: 60,
                    height: 56,
                    flexShrink: 0,
                  }}
                >
                  {SPARKLINE_HEIGHTS.map((h: number, i: number) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${h}%`,
                        background: product.accentColor,
                        opacity: 0.4 + (i / SPARKLINE_HEIGHTS.length) * 0.6,
                        borderRadius: "2px 2px 0 0",
                      }}
                    />
                  ))}
                </div>
              </div>

              <div
                style={{
                  position: "relative",
                  marginTop: 16,
                  padding: "8px 12px",
                  background: `${product.accentColor}15`,
                  border: `1px solid ${product.accentColor}30`,
                  borderRadius: 8,
                  fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                  fontSize: "0.72rem",
                  color: product.accentColor,
                  letterSpacing: "0.06em",
                }}
              >
                {product.metric}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function WorkflowSection({ industry, detail }: SectionProps) {
  const accent = HERO_ACCENT;
  const secondary = HERO_SECONDARY;
  const headPart1 = industry.name.split("&")[0].trim();
  return (
    <section
      className="px-5 py-20 sm:px-8"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div
            style={{
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: accent,
            }}
          >
            How It Works
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)",
              fontWeight: 800,
              color: "var(--color-text-primary)",
              lineHeight: 1.2,
              marginTop: 12,
              letterSpacing: "-0.02em",
            }}
          >
            A Smarter Workflow for Better {headPart1}
          </h2>
        </div>

        {/* Desktop horizontal pipeline */}
        <div className="mt-14 hidden lg:flex lg:items-stretch">
          {detail.workflow.map((step: WorkflowStep, i: number) => {
            const StepIcon = WORKFLOW_STEP_ICONS[(step.ordinal - 1) % WORKFLOW_STEP_ICONS.length];
            const isLast = i === detail.workflow.length - 1;
            return (
              <div
                key={step.ordinal}
                style={{ display: "flex", alignItems: "flex-start", flex: 1 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    delay: i * 0.12,
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    textAlign: "center",
                    padding: "0 8px",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${accent}30, ${secondary}30)`,
                      border: `1.5px solid ${accent}80`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 14px",
                    }}
                  >
                    <StepIcon size={22} color={accent} strokeWidth={2} />
                  </div>
                  <div
                    style={{
                      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                      fontSize: "0.6rem",
                      letterSpacing: "0.12em",
                      color: secondary,
                      marginBottom: 6,
                    }}
                  >
                    STEP {String(step.ordinal).padStart(2, "0")}
                  </div>
                  <div
                    className="font-display"
                    style={{
                      fontSize: "0.92rem",
                      fontWeight: 700,
                      color: "var(--color-text-primary)",
                      marginBottom: 8,
                      lineHeight: 1.3,
                    }}
                  >
                    {step.trigger}
                  </div>
                  <div
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: "0.75rem",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.55,
                    }}
                  >
                    {step.description}
                  </div>
                </motion.div>
                {!isLast && (
                  <div
                    aria-hidden="true"
                    style={{
                      alignSelf: "flex-start",
                      paddingTop: 18,
                      color: `${accent}99`,
                      fontSize: "1.4rem",
                      flexShrink: 0,
                    }}
                  >
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile/tablet vertical stack */}
        <div className="mt-12 flex flex-col gap-6 lg:hidden">
          {detail.workflow.map((step: WorkflowStep, i: number) => {
            const StepIcon = WORKFLOW_STEP_ICONS[(step.ordinal - 1) % WORKFLOW_STEP_ICONS.length];
            return (
              <motion.div
                key={step.ordinal}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${accent}30, ${secondary}30)`,
                    border: `1.5px solid ${accent}80`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <StepIcon size={20} color={accent} strokeWidth={2} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                      fontSize: "0.6rem",
                      letterSpacing: "0.12em",
                      color: secondary,
                      marginBottom: 4,
                    }}
                  >
                    STEP {String(step.ordinal).padStart(2, "0")}
                  </div>
                  <div
                    className="font-display"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--color-text-primary)",
                      marginBottom: 6,
                    }}
                  >
                    {step.trigger}
                  </div>
                  <div
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: "0.82rem",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.55,
                    }}
                  >
                    {step.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection({ industry, detail }: SectionProps) {
  const accent = HERO_ACCENT;
  return (
    <section
      className="px-5 py-20 sm:px-8"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div
            style={{
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: accent,
            }}
          >
            Designed for Every Need
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)",
              fontWeight: 800,
              color: "var(--color-text-primary)",
              lineHeight: 1.2,
              marginTop: 12,
              letterSpacing: "-0.02em",
            }}
          >
            Built for {industry.name} of All Sizes
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {detail.useCases.map((uc: IndustryUseCase, i: number) => {
            const Icon = USE_CASE_ICONS[uc.icon] ?? MessageCircle;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4 }}
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 14,
                  padding: "20px 16px",
                  textAlign: "center",
                  transition: "border-color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: `${accent}15`,
                    border: `1px solid ${accent}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px",
                  }}
                >
                  <Icon size={20} color={accent} strokeWidth={2} />
                </div>
                <div
                  className="font-display"
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                    marginBottom: 6,
                    lineHeight: 1.3,
                  }}
                >
                  {uc.title}
                </div>
                <div
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: "0.72rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {uc.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BottomCTA({ industry }: { industry: Industry }) {
  const accent = HERO_ACCENT;
  const accentRgb = HERO_ACCENT_RGB;
  const headPart1 = industry.name.split("&")[0].trim();
  return (
    <section
      className="relative overflow-hidden px-5 py-24 sm:px-8"
      style={{ background: "var(--color-bg)" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(60% 50% at 50% 50%, rgba(${accentRgb}, 0.16), transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <div
          style={{
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: accent,
          }}
        >
          Get Started
        </div>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(1.8rem, 3.8vw, 2.6rem)",
            fontWeight: 800,
            color: "var(--color-text-primary)",
            lineHeight: 1.15,
            marginTop: 12,
            letterSpacing: "-0.02em",
          }}
        >
          Ready to Transform Your {headPart1} Operations?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
          See how Cross Flows Synergy can help your team communicate better,
          work smarter, and deliver exceptional experiences.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              borderRadius: 999,
              background: "var(--color-accent)",
              color: "var(--color-bg)",
              fontFamily: '"Syne", system-ui, sans-serif',
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              boxShadow: `0 12px 40px rgba(${accentRgb}, 0.35)`,
            }}
          >
            Book a Free Demo
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/solutions"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              borderRadius: 999,
              background: "transparent",
              color: "var(--color-text-primary)",
              border: "1px solid var(--color-border)",
              fontFamily: '"Syne", system-ui, sans-serif',
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            Explore All Solutions
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Breadcrumb({ industry }: { industry: Industry }) {
  return (
    <div
      className="mx-auto max-w-7xl px-5 pb-2 pt-6 sm:px-8"
      style={{
        fontFamily: '"JetBrains Mono", ui-monospace, monospace',
        fontSize: "0.68rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--color-text-muted)",
      }}
    >
      <Link
        to="/industries"
        style={{
          color: "var(--color-text-muted)",
          textDecoration: "none",
        }}
      >
        Industries
      </Link>
      <ChevronRight
        size={11}
        style={{
          display: "inline",
          margin: "0 6px",
          verticalAlign: "middle",
          opacity: 0.6,
        }}
      />
      <span style={{ color: "var(--color-text-primary)" }}>{industry.name}</span>
    </div>
  );
}

export default function IndustryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const industry = industries.find((i) => i.slug === (slug as IndustrySlug));
  const detail = slug ? getIndustryDetail(slug as IndustrySlug) : undefined;

  if (!industry || !detail) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <PageShell
      title={`${industry.name} · Cross Flows Synergy`}
      description={industry.intro}
    >
      <Breadcrumb industry={industry} />
      <HeroSection industry={industry} detail={detail} />
      <StatsBar detail={detail} />
      <ProductsSection detail={detail} />
      <WorkflowSection industry={industry} detail={detail} />
      <UseCasesSection industry={industry} detail={detail} />
      <BottomCTA industry={industry} />
    </PageShell>
  );
}
