import type { LucideIcon } from "lucide-react";
import { Headphones, Car, GraduationCap, Workflow } from "lucide-react";
import type { UseCaseSlug } from "./useCases";
import type { IndustrySlug } from "./industries";

export type ProductSlug = "smarttalk" | "driveflow" | "learnmate" | "worksync";

export interface ProductFeature {
  title: string;
  description: string;
}

export interface Product {
  slug: ProductSlug;
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
  accent: string;
  heroEyebrow: string;
  features: ProductFeature[];
  useCaseSlugs: UseCaseSlug[];
  industrySlugs: IndustrySlug[];
  videoCaption: string;
}

export const products: Product[] = [
  {
    slug: "smarttalk",
    name: "SmartTalk",
    tagline: "Human-like AI voice agents for every business conversation.",
    shortDescription:
      "Voice agents that answer, qualify, route, and resolve — at the quality your brand demands.",
    longDescription:
      "SmartTalk replaces brittle IVR menus and overwhelmed contact centers with voice agents that sound human, understand intent in real time, and resolve issues end-to-end. Train them on your data, watch them learn your tone, and give every caller a five-star experience — in 40+ languages, around the clock.",
    icon: Headphones,
    accent: "from-[#00d4ff] to-[#3a8dff]",
    heroEyebrow: "Conversational Voice AI",
    features: [
      {
        title: "Sub-200ms latency",
        description:
          "Responses land before the caller can finish their next breath. Real conversation, not a walkie-talkie exchange.",
      },
      {
        title: "Brand-true voice synthesis",
        description:
          "Choose from premium neural voices or clone your own. Tone, cadence, and personality stay consistent across every call.",
      },
      {
        title: "Native CRM & telephony stack",
        description:
          "Plug into Salesforce, HubSpot, Zendesk, Twilio, Genesys, and 50+ enterprise systems out of the box.",
      },
      {
        title: "Live escalation, smarter handoff",
        description:
          "When a human is needed, SmartTalk warm-transfers with a full summary, sentiment score, and verified caller identity.",
      },
      {
        title: "Continuous learning loop",
        description:
          "Every call becomes training data. Quality scores, intent maps, and resolution trends compound week over week.",
      },
    ],
    useCaseSlugs: [
      "customer-care",
      "intelligent-routing",
      "payment-automation",
      "reservations-management",
      "quick-answers",
      "troubleshooting",
      "identity-verification",
      "lead-qualification",
    ],
    industrySlugs: [
      "consumer-services",
      "financial-services",
      "real-estate",
      "travel",
      "utilities",
      "retail-restaurants",
      "clinics-hospitals",
    ],
    videoCaption: "See SmartTalk handle a live customer call",
  },
  {
    slug: "driveflow",
    name: "DriveFlow",
    tagline: "AI that takes the order, upsells, and never asks customers to repeat themselves.",
    shortDescription:
      "Drive-thru voice automation that boosts throughput, accuracy, and average ticket — without changing your kitchen workflow.",
    longDescription:
      "DriveFlow brings restaurant-grade voice AI to the speaker post. It understands noisy speech, mixed languages, and complex menu modifiers in real time, surfaces personalized upsells, and writes clean tickets directly into your POS. Your team focuses on the food. DriveFlow handles the rest.",
    icon: Car,
    accent: "from-[#f5a623] to-[#ffce6e]",
    heroEyebrow: "Drive-Thru Automation",
    features: [
      {
        title: "Noise-resistant speech engine",
        description:
          "Trained on thousands of hours of real drive-thru audio — engines, wind, kids in the back seat, the whole orchestra.",
      },
      {
        title: "Menu-aware reasoning",
        description:
          "Understands modifiers, combos, allergies, and substitutions natively. No more “sorry, can you repeat that?”",
      },
      {
        title: "Personalized upsell",
        description:
          "Suggests the right add-on based on time of day, weather, and order context. Tested live to lift average ticket 6–11%.",
      },
      {
        title: "POS-native integration",
        description:
          "Drops orders directly into Toast, Oracle Symphony, NCR, Xenial, and PAR — no parallel screens for the line cook.",
      },
    ],
    useCaseSlugs: [
      "drive-thru-ordering",
      "order-operations",
      "payment-automation",
      "quick-answers",
    ],
    industrySlugs: ["retail-restaurants", "consumer-services"],
    videoCaption: "Watch DriveFlow take a peak-hour order, end to end",
  },
  {
    slug: "learnmate",
    name: "LearnMate",
    tagline: "Personalized AI training simulations that build mastery, not just completion.",
    shortDescription:
      "Adaptive learning, exam simulators, and role-play coaching that meet every learner where they are.",
    longDescription:
      "LearnMate turns your training content into living simulations. Learners practice high-stakes conversations with AI agents that push back, adapt to skill level, and surface gaps automatically. Educators and L&D leaders get a real-time picture of where mastery lives — and where it’s missing.",
    icon: GraduationCap,
    accent: "from-[#00d4ff] to-[#9b6bff]",
    heroEyebrow: "Learning & Simulation",
    features: [
      {
        title: "Adaptive difficulty",
        description:
          "Every simulation calibrates to the learner in real time. No more one-size-fits-all e-learning modules.",
      },
      {
        title: "Realistic role-play partners",
        description:
          "Voice and chat-based AI characters that act like real customers, patients, students, or interview panels.",
      },
      {
        title: "Mastery analytics",
        description:
          "Per-learner skill maps, knowledge decay alerts, and cohort heatmaps for L&D and academic leadership.",
      },
      {
        title: "Exam simulator engine",
        description:
          "Build certified, weighted exams with reasoning explanations baked into every answer the AI generates.",
      },
    ],
    useCaseSlugs: [
      "exam-simulator",
      "quick-answers",
      "customer-care",
      "candidate-screening",
    ],
    industrySlugs: ["education", "hr-recruiting", "financial-services", "clinics-hospitals"],
    videoCaption: "Step inside a LearnMate role-play simulation",
  },
  {
    slug: "worksync",
    name: "WorkSync",
    tagline: "The AI workflow layer that connects every tool, decision, and human in your business.",
    shortDescription:
      "Agentic automation that reads, reasons, and executes across your stack — with the audit trail compliance needs.",
    longDescription:
      "WorkSync is the orchestration layer for enterprise AI. Build agentic workflows that triage, decide, and act across your CRM, ERP, ticketing, finance, and data tools — with humans in the loop wherever it matters. Every step is logged, explainable, and reversible.",
    icon: Workflow,
    accent: "from-[#3a8dff] to-[#00d4ff]",
    heroEyebrow: "Workflow & Business Automation",
    features: [
      {
        title: "Visual agent builder",
        description:
          "Drag-and-drop branching, tool calls, and approvals. Non-engineers can ship workflows in an afternoon.",
      },
      {
        title: "Universal connectors",
        description:
          "Salesforce, NetSuite, SAP, Workday, Jira, Slack, Google Workspace — plus REST and webhook escape hatches.",
      },
      {
        title: "Human-in-the-loop guardrails",
        description:
          "Set risk thresholds. WorkSync pauses for human approval on anything above your bar, autopilots the rest.",
      },
      {
        title: "Complete audit trail",
        description:
          "Every input, decision, and output is logged with reasoning. SOC2 and GDPR-grade by default.",
      },
    ],
    useCaseSlugs: [
      "intelligent-routing",
      "payment-automation",
      "order-operations",
      "troubleshooting",
      "identity-verification",
      "lead-qualification",
      "candidate-screening",
    ],
    industrySlugs: [
      "financial-services",
      "logistics-supply-chain",
      "real-estate",
      "hr-recruiting",
      "utilities",
      "retail-restaurants",
    ],
    videoCaption: "WorkSync orchestrates a multi-system claim, live",
  },
];

export const getProduct = (slug: ProductSlug): Product | undefined =>
  products.find((p) => p.slug === slug);
