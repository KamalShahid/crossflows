import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  PhoneCall,
  CalendarCheck,
  UserCheck,
  Zap,
  Headphones,
  Radio,
  Clock,
  Settings,
} from "lucide-react";
import PhoneMockup, { type CallStatus } from "./shared/PhoneMockup";
import ProgressDots from "./shared/ProgressDots";

interface SolutionShowcaseItem {
  id: string;
  slug: string;
  ordinal: string;
  displayTitle: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  metric: string;
  metricLabel: string;
  customerName: string;
  customerRole: string;
  agentPersona: string;
  customerQuote: string;
  callStatus: CallStatus;
  callTime: string;
}

// Slugs match the existing `src/data/solutions.ts` "ai-" prefixed slugs so the
// "Talk to us" CTA's `?solution=<slug>` query param stays consistent across the
// site and deep-link routing keeps working.
const showcaseSolutions: SolutionShowcaseItem[] = [
  {
    id: "reception-call-handling",
    slug: "ai-reception-call-handling",
    ordinal: "01",
    displayTitle: "Reception & Call Handling",
    description:
      "AI-powered voice systems that answer, route, and resolve customer inquiries automatically — ensuring every call is handled efficiently, 24/7.",
    icon: PhoneCall,
    accentColor: "var(--color-accent)",
    metric: "94%",
    metricLabel: "FIRST CALL RES.",
    customerName: "Laura",
    customerRole: "CALLER",
    agentPersona: "ARIA",
    customerQuote:
      "“Hi, I’d like to speak with someone about my account — I’ve been on hold for 20 minutes.”",
    callStatus: "CONNECTED",
    callTime: "0:09",
  },
  {
    id: "appointment-management",
    slug: "ai-appointment-management",
    ordinal: "02",
    displayTitle: "Appointment Management",
    description:
      "Automate scheduling, confirmations, reminders, cancellations, and rescheduling across teams, locations, and customer workflows.",
    icon: CalendarCheck,
    accentColor: "#00CF78",
    metric: "61%",
    metricLabel: "NO-SHOW REDUCTION",
    customerName: "David",
    customerRole: "PATIENT",
    agentPersona: "SAGE",
    customerQuote:
      "“Can I move my Thursday appointment to Friday afternoon? Anytime after 2 PM works.”",
    callStatus: "CONNECTED",
    callTime: "0:06",
  },
  {
    id: "lead-qualification",
    slug: "ai-lead-qualification",
    ordinal: "03",
    displayTitle: "Lead Qualification",
    description:
      "Capture, qualify, and prioritize inbound leads instantly through intelligent AI conversations and automated engagement workflows.",
    icon: UserCheck,
    accentColor: "#7B6FF0",
    metric: "3.2×",
    metricLabel: "PIPELINE VELOCITY",
    customerName: "Nina",
    customerRole: "PROSPECT",
    agentPersona: "KORE",
    customerQuote:
      "“I saw your ad online — we’re a 200-person company looking to automate our customer calls.”",
    callStatus: "CONNECTED",
    callTime: "0:11",
  },
  {
    id: "workflow-automation",
    slug: "ai-workflow-automation",
    ordinal: "04",
    displayTitle: "Workflow Automation",
    description:
      "Eliminate repetitive manual tasks through intelligent automation that connects systems, teams, and operational processes.",
    icon: Zap,
    accentColor: "#F5A623",
    metric: "78%",
    metricLabel: "TASK REDUCTION",
    customerName: "Omar",
    customerRole: "OPS MANAGER",
    agentPersona: "FLUX",
    customerQuote:
      "“Every morning we manually process 300 intake forms — there has to be a smarter way to do this.”",
    callStatus: "CONNECTED",
    callTime: "0:14",
  },
  {
    id: "support-systems",
    slug: "ai-support-systems",
    ordinal: "05",
    displayTitle: "Support Systems",
    description:
      "Deliver fast, scalable customer and internal support through AI-powered assistance across voice, chat, and digital channels.",
    icon: Headphones,
    accentColor: "#00B8D9",
    metric: "4.8/5",
    metricLabel: "CSAT SCORE",
    customerName: "Fatima",
    customerRole: "SUBSCRIBER",
    agentPersona: "NOVA",
    customerQuote:
      "“My internet has been down since this morning and I have a work call in an hour — I need this fixed.”",
    callStatus: "CONNECTED",
    callTime: "0:05",
  },
  {
    id: "communication-management",
    slug: "ai-communication-management",
    ordinal: "06",
    displayTitle: "Communication Management",
    description:
      "Unify voice, SMS, chat, and digital communication into one intelligent platform for seamless engagement and coordination.",
    icon: Radio,
    accentColor: "#FF6B6B",
    metric: "100%",
    metricLabel: "CHANNEL COVERAGE",
    customerName: "Ryan",
    customerRole: "TEAM LEAD",
    agentPersona: "LINK",
    customerQuote:
      "“We’re missing messages across email, SMS, and calls — customers keep falling through the cracks.”",
    callStatus: "CONNECTED",
    callTime: "0:08",
  },
  {
    id: "scheduling-systems",
    slug: "ai-scheduling-systems",
    ordinal: "07",
    displayTitle: "Scheduling Systems",
    description:
      "Coordinate appointments, dispatching, resources, and operational schedules efficiently across teams and locations.",
    icon: Clock,
    accentColor: "#4ECDC4",
    metric: "40%",
    metricLabel: "DISPATCH EFFICIENCY",
    customerName: "Carlos",
    customerRole: "COORDINATOR",
    agentPersona: "FLOW",
    customerQuote:
      "“We have 12 field technicians and zero visibility into who’s available — scheduling is a nightmare.”",
    callStatus: "CONNECTED",
    callTime: "0:07",
  },
  {
    id: "operational-assistance",
    slug: "ai-operational-assistance",
    ordinal: "08",
    displayTitle: "Operational Assistance",
    description:
      "Support internal operations with AI-powered coordination, reminders, workflow guidance, and real-time operational intelligence.",
    icon: Settings,
    accentColor: "#A78BFA",
    metric: "55%",
    metricLabel: "ADMIN TIME SAVED",
    customerName: "Aisha",
    customerRole: "ADMIN",
    agentPersona: "VALE",
    customerQuote:
      "“I spend 3 hours a day just sending follow-up reminders and chasing approvals — it’s unsustainable.”",
    callStatus: "CONNECTED",
    callTime: "0:10",
  },
];

const INTERVAL_MS = 4000;
const RESUME_AFTER_MS = 8000;

interface CardProps {
  solution: SolutionShowcaseItem;
  onClick: () => void;
}

function ActiveCard({ solution, onClick }: CardProps) {
  const accent = solution.accentColor;
  return (
    <motion.div
      key={`active-${solution.id}`}
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
      aria-label={`${solution.displayTitle} (active)`}
      style={{
        background: "var(--color-surface)",
        border: `1.5px solid ${accent}`,
        borderRadius: 16,
        padding: "18px 20px",
        cursor: "pointer",
        position: "relative",
        boxShadow: `0 0 0 1px ${accent}, 0 8px 32px ${accent}1a`,
        minHeight: 160,
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
            background: accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: "0.72rem",
            fontWeight: 700,
            color: "var(--color-bg)",
          }}
        >
          {solution.ordinal}
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
          ACTIVE SOLUTION
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
        {solution.displayTitle}
      </div>

      <div
        style={{
          fontFamily: '"JetBrains Mono", ui-monospace, monospace',
          fontSize: "0.62rem",
          letterSpacing: "0.08em",
          color: accent,
          textTransform: "uppercase",
        }}
      >
        {solution.metric} {solution.metricLabel}
      </div>

      <Link
        to={`/contact?solution=${solution.slug}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          fontFamily: '"JetBrains Mono", ui-monospace, monospace',
          fontSize: "0.62rem",
          letterSpacing: "0.08em",
          color: accent,
          textDecoration: "none",
          marginTop: 10,
          display: "inline-block",
          opacity: 0.8,
        }}
      >
        Talk to us →
      </Link>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 16,
          right: 16,
          color: accent,
          fontSize: "1rem",
          lineHeight: 1,
        }}
      >
        →
      </div>
    </motion.div>
  );
}

function InactiveItem({ solution, onClick }: CardProps) {
  const Icon = solution.icon;
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
      aria-label={`Activate ${solution.displayTitle}`}
      style={{
        padding: "18px 20px",
        cursor: "pointer",
        borderRadius: 16,
        transition: "background 0.2s ease",
        minHeight: 160,
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
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 6,
        }}
      >
        <span
          style={{
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: "0.62rem",
            color: "var(--color-text-muted)",
            opacity: 0.5,
          }}
        >
          {solution.ordinal}
        </span>
        <Icon
          size={14}
          strokeWidth={2}
          color={solution.accentColor}
          style={{ opacity: 0.4, flexShrink: 0 }}
        />
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
        {solution.displayTitle}
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
        {solution.metric} {solution.metricLabel}
      </div>
    </div>
  );
}

export default function SolutionsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimer = useRef<number | undefined>(undefined);
  const location = useLocation();

  // Hash → activate matching solution (supports both "ai-foo" and "foo" hashes).
  useEffect(() => {
    const hash = location.hash.replace(/^#/, "");
    if (!hash) return;
    const idx = showcaseSolutions.findIndex(
      (s) => s.slug === hash || s.id === hash,
    );
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
      setActiveIndex((prev) => (prev + 1) % showcaseSolutions.length);
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

  const activeSolution = showcaseSolutions[activeIndex];
  const agentGradient = `linear-gradient(135deg, ${activeSolution.accentColor}, #0A0D14)`;

  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 pb-24 sm:px-8 lg:flex-row lg:items-start lg:gap-16">
      {/* Left: selector grid + progress dots */}
      <div className="w-full lg:flex-1">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {showcaseSolutions.map((solution, index) =>
            index === activeIndex ? (
              <ActiveCard
                key={solution.id}
                solution={solution}
                onClick={() => handleSelect(index)}
              />
            ) : (
              <InactiveItem
                key={solution.id}
                solution={solution}
                onClick={() => handleSelect(index)}
              />
            ),
          )}
        </div>

        <ProgressDots
          count={showcaseSolutions.length}
          activeIndex={activeIndex}
          onSelect={handleSelect}
          activeColor={activeSolution.accentColor}
          getAriaLabel={(i) => `Activate ${showcaseSolutions[i].displayTitle}`}
        />
      </div>

      {/* Right: phone mockup */}
      <div className="flex w-full justify-center lg:w-auto lg:justify-end">
        <PhoneMockup
          keyId={activeSolution.id}
          customerName={activeSolution.customerName}
          customerRole={activeSolution.customerRole}
          agentPersona={activeSolution.agentPersona}
          agentGradient={agentGradient}
          callStatus={activeSolution.callStatus}
          callTime={activeSolution.callTime}
          customerQuote={activeSolution.customerQuote}
          metric={activeSolution.metric}
          metricLabel={activeSolution.metricLabel}
          metricColor={activeSolution.accentColor}
        />
      </div>
    </section>
  );
}
