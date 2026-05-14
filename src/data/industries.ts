import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Landmark,
  Building2,
  Truck,
  BookOpen,
  Plane,
  Zap,
  Utensils,
  Stethoscope,
  Users,
} from "lucide-react";
import type { ProductSlug } from "./products";
import type { UseCaseSlug } from "./useCases";

export type IndustrySlug =
  | "consumer-services"
  | "financial-services"
  | "real-estate"
  | "logistics-supply-chain"
  | "education"
  | "travel"
  | "utilities"
  | "retail-restaurants"
  | "clinics-hospitals"
  | "hr-recruiting";

export interface Industry {
  slug: IndustrySlug;
  name: string;
  description: string;
  icon: LucideIcon;
  productSlugs: ProductSlug[];
  useCaseSlugs: UseCaseSlug[];
  accent: string;
}

export const industries: Industry[] = [
  {
    slug: "consumer-services",
    name: "Consumer Services",
    description:
      "Always-on voice and chat support that resolves the long tail of customer questions without queues.",
    icon: Sparkles,
    productSlugs: ["smarttalk", "worksync"],
    useCaseSlugs: ["customer-care", "intelligent-routing", "quick-answers"],
    accent: "from-[#00d4ff] to-[#3a8dff]",
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    description:
      "Authenticate, advise, and automate — with the compliance, security, and audit trail finance demands.",
    icon: Landmark,
    productSlugs: ["smarttalk", "worksync", "learnmate"],
    useCaseSlugs: ["identity-verification", "payment-automation", "lead-qualification"],
    accent: "from-[#9b6bff] to-[#00d4ff]",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    description:
      "Qualify leads, book viewings, and answer property questions instantly — across every inbound channel.",
    icon: Building2,
    productSlugs: ["smarttalk", "worksync"],
    useCaseSlugs: ["lead-qualification", "reservations-management", "quick-answers"],
    accent: "from-[#00d4ff] to-[#7af9ff]",
  },
  {
    slug: "logistics-supply-chain",
    name: "Logistics & Supply Chain",
    description:
      "Coordinate dispatch, status updates, and exceptions across the network — without a human in every hop.",
    icon: Truck,
    productSlugs: ["worksync"],
    useCaseSlugs: ["order-operations", "troubleshooting", "intelligent-routing"],
    accent: "from-[#3a8dff] to-[#00d4ff]",
  },
  {
    slug: "education",
    name: "Education",
    description:
      "Adaptive tutoring, exam simulation, and admissions support tuned to every learner’s pace.",
    icon: BookOpen,
    productSlugs: ["learnmate", "smarttalk"],
    useCaseSlugs: ["exam-simulator", "quick-answers", "customer-care"],
    accent: "from-[#9b6bff] to-[#3a8dff]",
  },
  {
    slug: "travel",
    name: "Travel",
    description:
      "Multilingual booking, disruption recovery, and itinerary help — in the language each traveler speaks.",
    icon: Plane,
    productSlugs: ["smarttalk", "worksync"],
    useCaseSlugs: ["reservations-management", "customer-care", "troubleshooting"],
    accent: "from-[#00d4ff] to-[#f5a623]",
  },
  {
    slug: "utilities",
    name: "Utilities",
    description:
      "Outage triage, billing questions, and field dispatch handled with empathy at peak-event scale.",
    icon: Zap,
    productSlugs: ["smarttalk", "worksync"],
    useCaseSlugs: ["troubleshooting", "payment-automation", "intelligent-routing"],
    accent: "from-[#f5a623] to-[#00d4ff]",
  },
  {
    slug: "retail-restaurants",
    name: "Retail & Restaurants",
    description:
      "Drive-thru, in-store, and digital ordering automated end-to-end with the brand voice intact.",
    icon: Utensils,
    productSlugs: ["driveflow", "smarttalk", "worksync"],
    useCaseSlugs: ["drive-thru-ordering", "order-operations", "payment-automation"],
    accent: "from-[#f5a623] to-[#ffce6e]",
  },
  {
    slug: "clinics-hospitals",
    name: "Clinics & Hospitals",
    description:
      "Appointment intake, triage scripting, and patient education — HIPAA-aware from the first token.",
    icon: Stethoscope,
    productSlugs: ["smarttalk", "learnmate", "worksync"],
    useCaseSlugs: ["reservations-management", "identity-verification", "quick-answers"],
    accent: "from-[#00d4ff] to-[#3a8dff]",
  },
  {
    slug: "hr-recruiting",
    name: "HR & Recruiting",
    description:
      "Screen at scale, coach hiring managers, and keep candidates warm — without losing the human touch.",
    icon: Users,
    productSlugs: ["smarttalk", "learnmate", "worksync"],
    useCaseSlugs: ["candidate-screening", "lead-qualification", "exam-simulator"],
    accent: "from-[#9b6bff] to-[#00d4ff]",
  },
];

export const getIndustry = (slug: IndustrySlug): Industry | undefined =>
  industries.find((i) => i.slug === slug);
