import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import PhoneMockup, { type CallStatus } from "./shared/PhoneMockup";
import ProgressDots from "./shared/ProgressDots";

interface IndustryShowcaseItem {
  id: string;
  slug: string;
  name: string;
  metric: string;
  metricLabel: string;
  customerName: string;
  customerRole: string;
  agentPersona: string;
  customerQuote: string;
  callStatus: CallStatus;
  callTime: string;
}

/** 1-based 2-digit ordinal derived from array position so reordering the array doesn't require renumbering. */
const ordinalFor = (index: number): string =>
  String(index + 1).padStart(2, "0");

const showcaseIndustries: IndustryShowcaseItem[] = [
  {
    id: "municipalities-government",
    slug: "municipalities-government",
    name: "Municipalities & Local Gov.",
    metric: "75%",
    metricLabel: "FASTER RESPONSE",
    customerName: "Sandra",
    customerRole: "RESIDENT",
    agentPersona: "NOVA",
    customerQuote:
      "“There is a large pothole at the corner of Elm and Main — it has been there for weeks.”",
    callStatus: "CONNECTED",
    callTime: "0:06",
  },
  {
    id: "healthcare-clinics",
    slug: "healthcare-clinics",
    name: "Healthcare & Clinics",
    metric: "42%",
    metricLabel: "ADMIN SAVINGS",
    customerName: "Sarah",
    customerRole: "PATIENT",
    agentPersona: "ARIA",
    customerQuote:
      "“I need to reschedule my cardiology appointment for next Tuesday morning.”",
    callStatus: "CONNECTED",
    callTime: "0:08",
  },
  {
    id: "consumer-services",
    slug: "consumer-services",
    name: "Consumer Services",
    metric: "3×",
    metricLabel: "FASTER RESPONSE",
    customerName: "James",
    customerRole: "CUSTOMER",
    agentPersona: "NOVA",
    customerQuote:
      "“My order hasn’t arrived yet and it’s been 5 days — can you check the status?”",
    callStatus: "CONNECTED",
    callTime: "0:14",
  },
  {
    id: "recruitment-staffing",
    slug: "recruitment-staffing",
    name: "Recruitment & Staffing",
    metric: "68%",
    metricLabel: "SCREENING LIFT",
    customerName: "Aisha",
    customerRole: "APPLICANT",
    agentPersona: "KORE",
    customerQuote:
      "“I’m calling about the operations manager role — I applied last week online.”",
    callStatus: "CONNECTED",
    callTime: "0:06",
  },
  {
    id: "real-estate-property",
    slug: "real-estate-property",
    name: "Real Estate & Property Management",
    metric: "+60%",
    metricLabel: "LEAD QUALITY",
    customerName: "Daniel",
    customerRole: "PROSPECT",
    agentPersona: "VALE",
    customerQuote:
      "“I’d like to schedule a viewing for the 3-bed apartment on Maple Street.”",
    callStatus: "CONNECTED",
    callTime: "0:05",
  },
  {
    id: "restaurants-hospitality",
    slug: "restaurants-hospitality",
    name: "Restaurants & Hospitality",
    metric: "32%",
    metricLabel: "BOOKING LIFT",
    customerName: "Priya",
    customerRole: "GUEST",
    agentPersona: "LUMI",
    customerQuote:
      "“Can I book a table for four this Saturday evening around 7 PM?”",
    callStatus: "CONNECTED",
    callTime: "0:04",
  },
  {
    id: "utilities-services",
    slug: "utilities-services",
    name: "Utilities & Service Providers",
    metric: "91%",
    metricLabel: "FIRST CALL RES.",
    customerName: "Tom",
    customerRole: "SUBSCRIBER",
    agentPersona: "FLUX",
    customerQuote:
      "“There’s been no power on our street since this morning — what’s the update?”",
    callStatus: "CONNECTED",
    callTime: "0:10",
  },
  {
    id: "schools-education",
    slug: "schools-education",
    name: "Schools & Educational Institutions",
    metric: "55%",
    metricLabel: "ADMIN REDUCTION",
    customerName: "Maria",
    customerRole: "PARENT",
    agentPersona: "SAGE",
    customerQuote:
      "“I need to know what documents are required for my daughter’s enrollment.”",
    callStatus: "CONNECTED",
    callTime: "0:07",
  },
  {
    id: "logistics-operations",
    slug: "logistics-operations",
    name: "Logistics & Operations",
    metric: "18%",
    metricLabel: "P99 TRANSIT GAIN",
    customerName: "Carlos",
    customerRole: "DISPATCHER",
    agentPersona: "FLOW",
    customerQuote:
      "“Driver 7 is running 40 minutes late on Route 12 — need to reassign two stops.”",
    callStatus: "CONNECTED",
    callTime: "0:03",
  },
  {
    id: "financial-services",
    slug: "financial-services",
    name: "Financial Services",
    metric: "98%",
    metricLabel: "FRAUD CATCH",
    customerName: "Mark",
    customerRole: "CARDHOLDER",
    agentPersona: "ZEPHYR",
    customerQuote:
      "“There’s a transaction on my card from a gas station in London that I didn’t make.”",
    callStatus: "CALL ENDED",
    callTime: "0:12",
  },
  {
    id: "insurance",
    slug: "insurance",
    name: "Insurance",
    metric: "65%",
    metricLabel: "FASTER RESPONSE",
    customerName: "Rachel",
    customerRole: "POLICYHOLDER",
    agentPersona: "ARIA",
    customerQuote:
      "“I need to file a claim for the water damage — the basement flooded last night.”",
    callStatus: "CONNECTED",
    callTime: "0:07",
  },
  {
    id: "telecommunications",
    slug: "telecommunications",
    name: "Telecommunications",
    metric: "70%",
    metricLabel: "FASTER RESOLUTION",
    customerName: "Kevin",
    customerRole: "SUBSCRIBER",
    agentPersona: "FLUX",
    customerQuote:
      "“My internet has been down since this morning and I need it fixed before my noon call.”",
    callStatus: "CONNECTED",
    callTime: "0:05",
  },
];

const INTERVAL_MS = 4000;
const RESUME_AFTER_MS = 8000;
const AGENT_GRADIENT = "linear-gradient(135deg, var(--color-accent), #4466FF)";

interface CardProps {
  industry: IndustryShowcaseItem;
  ordinal: string;
  onClick: () => void;
}

function ActiveCard({ industry, ordinal, onClick }: CardProps) {
  return (
    <motion.div
      key={`active-${industry.id}`}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`${industry.name} (active)`}
      style={{
        background: "var(--color-surface)",
        border: "1.5px solid var(--color-accent)",
        borderRadius: 16,
        padding: "18px 20px",
        cursor: "pointer",
        position: "relative",
        boxShadow:
          "0 0 0 1px var(--color-accent), 0 8px 32px rgba(0,212,255,0.1)",
        minHeight: 140,
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
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: "var(--color-accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: "0.72rem",
            fontWeight: 700,
            color: "var(--color-bg)",
          }}
        >
          {ordinal}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: "0.6rem",
            letterSpacing: "0.1em",
            color: "#00CF78",
          }}
        >
          <motion.span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#00CF78",
              display: "inline-block",
            }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
          ACTIVE NODE
        </div>
      </div>

      <div
        className="font-display"
        style={{
          fontSize: "1rem",
          fontWeight: 700,
          color: "var(--color-text-primary)",
          lineHeight: 1.3,
          marginBottom: 8,
          paddingRight: 28,
        }}
      >
        {industry.name}
      </div>

      <div
        style={{
          fontFamily: '"JetBrains Mono", ui-monospace, monospace',
          fontSize: "0.62rem",
          letterSpacing: "0.08em",
          color: "var(--color-accent)",
          textTransform: "uppercase",
        }}
      >
        {industry.metric} {industry.metricLabel}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 12,
        }}
      >
        <Link
          to={`/industries/${industry.slug}`}
          onClick={(e) => e.stopPropagation()}
          style={{
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: "0.65rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            textDecoration: "none",
            border: "1px solid rgba(0,212,255,0.3)",
            borderRadius: 6,
            padding: "5px 12px",
            transition: "background 0.2s ease, border-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(0,212,255,0.08)";
            e.currentTarget.style.borderColor = "var(--color-accent)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)";
          }}
        >
          Explore →
        </Link>

        <span
          aria-hidden="true"
          style={{ color: "var(--color-accent)", fontSize: "1rem", lineHeight: 1 }}
        >
          →
        </span>
      </div>
    </motion.div>
  );
}

function InactiveItem({ industry, ordinal, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`Activate ${industry.name}`}
      style={{
        padding: "18px 20px",
        cursor: "pointer",
        borderRadius: 16,
        transition: "background 0.2s ease",
        minHeight: 140,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--color-surface)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      <div
        style={{
          fontFamily: '"JetBrains Mono", ui-monospace, monospace',
          fontSize: "0.62rem",
          color: "var(--color-text-muted)",
          marginBottom: 6,
          opacity: 0.5,
        }}
      >
        {ordinal}
      </div>
      <div
        className="font-display"
        style={{
          fontSize: "0.95rem",
          fontWeight: 500,
          color: "var(--color-text-muted)",
          marginBottom: 6,
          lineHeight: 1.3,
        }}
      >
        {industry.name}
      </div>
      <div
        style={{
          fontFamily: '"JetBrains Mono", ui-monospace, monospace',
          fontSize: "0.6rem",
          color: "var(--color-text-muted)",
          opacity: 0.5,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        {industry.metric} {industry.metricLabel}
      </div>
    </div>
  );
}

export default function IndustriesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimer = useRef<number | undefined>(undefined);
  const location = useLocation();

  // Hash → activate matching industry, then pause auto-advance briefly.
  useEffect(() => {
    const hash = location.hash.replace(/^#/, "");
    if (!hash) return;
    const idx = showcaseIndustries.findIndex((i) => i.slug === hash);
    if (idx < 0) return;
    setActiveIndex(idx);
    setIsPaused(true);
    if (pauseTimer.current !== undefined) window.clearTimeout(pauseTimer.current);
    pauseTimer.current = window.setTimeout(
      () => setIsPaused(false),
      RESUME_AFTER_MS,
    );
  }, [location.hash]);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseIndustries.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    return () => {
      if (pauseTimer.current !== undefined) {
        window.clearTimeout(pauseTimer.current);
      }
    };
  }, []);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    if (pauseTimer.current !== undefined) window.clearTimeout(pauseTimer.current);
    pauseTimer.current = window.setTimeout(
      () => setIsPaused(false),
      RESUME_AFTER_MS,
    );
  };

  const activeIndustry = showcaseIndustries[activeIndex];

  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 pb-24 sm:px-8 lg:flex-row lg:items-start lg:gap-16">
      {/* Left: selector grid + progress dots */}
      <div className="w-full lg:flex-1">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {showcaseIndustries.map((industry, index) =>
            index === activeIndex ? (
              <ActiveCard
                key={industry.id}
                industry={industry}
                ordinal={ordinalFor(index)}
                onClick={() => handleSelect(index)}
              />
            ) : (
              <InactiveItem
                key={industry.id}
                industry={industry}
                ordinal={ordinalFor(index)}
                onClick={() => handleSelect(index)}
              />
            ),
          )}
        </div>

        <ProgressDots
          count={showcaseIndustries.length}
          activeIndex={activeIndex}
          onSelect={handleSelect}
          getAriaLabel={(i) => `Activate ${showcaseIndustries[i].name}`}
        />
      </div>

      {/* Right: phone mockup */}
      <div className="flex w-full justify-center lg:w-auto lg:justify-end">
        <PhoneMockup
          keyId={activeIndustry.id}
          customerName={activeIndustry.customerName}
          customerRole={activeIndustry.customerRole}
          agentPersona={activeIndustry.agentPersona}
          agentGradient={AGENT_GRADIENT}
          callStatus={activeIndustry.callStatus}
          callTime={activeIndustry.callTime}
          customerQuote={activeIndustry.customerQuote}
          metric={activeIndustry.metric}
          metricLabel={activeIndustry.metricLabel}
        />
      </div>
    </section>
  );
}
