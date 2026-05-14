import type { LucideIcon } from "lucide-react";
import {
  LifeBuoy,
  Route,
  CreditCard,
  CalendarCheck,
  MessageSquare,
  PackageCheck,
  Wrench,
  ShieldCheck,
  ClipboardList,
  Target,
  UserCheck,
  Car,
} from "lucide-react";
import type { ProductSlug } from "./products";
import type { IndustrySlug } from "./industries";

export type UseCaseSlug =
  | "customer-care"
  | "intelligent-routing"
  | "payment-automation"
  | "reservations-management"
  | "quick-answers"
  | "order-operations"
  | "troubleshooting"
  | "identity-verification"
  | "exam-simulator"
  | "lead-qualification"
  | "candidate-screening"
  | "drive-thru-ordering";

export interface UseCase {
  slug: UseCaseSlug;
  title: string;
  description: string;
  icon: LucideIcon;
  productSlugs: ProductSlug[];
  industrySlugs: IndustrySlug[];
}

export const useCases: UseCase[] = [
  {
    slug: "customer-care",
    title: "Customer Care",
    description:
      "Resolve the most common 80% of inquiries instantly, with empathy. Escalate the rest with full context.",
    icon: LifeBuoy,
    productSlugs: ["smarttalk", "learnmate"],
    industrySlugs: [
      "consumer-services",
      "financial-services",
      "travel",
      "utilities",
      "retail-restaurants",
      "clinics-hospitals",
    ],
  },
  {
    slug: "intelligent-routing",
    title: "Intelligent Routing",
    description:
      "Understand intent, sentiment, and urgency in seconds — then route to the team or workflow that can actually help.",
    icon: Route,
    productSlugs: ["smarttalk", "worksync"],
    industrySlugs: [
      "consumer-services",
      "financial-services",
      "logistics-supply-chain",
      "utilities",
    ],
  },
  {
    slug: "payment-automation",
    title: "Payment Automation",
    description:
      "Take payments, reconcile receipts, and chase failed transactions through fully PCI-aware voice and chat flows.",
    icon: CreditCard,
    productSlugs: ["smarttalk", "driveflow", "worksync"],
    industrySlugs: ["financial-services", "utilities", "retail-restaurants"],
  },
  {
    slug: "reservations-management",
    title: "Reservations Management",
    description:
      "Book, modify, and confirm appointments across calendars and time zones — without picking up the phone twice.",
    icon: CalendarCheck,
    productSlugs: ["smarttalk", "worksync"],
    industrySlugs: ["real-estate", "travel", "clinics-hospitals", "retail-restaurants"],
  },
  {
    slug: "quick-answers",
    title: "Quick Answers",
    description:
      "Knowledge-base-grounded answers in the channel customers prefer — with the source link always one tap away.",
    icon: MessageSquare,
    productSlugs: ["smarttalk", "learnmate", "driveflow"],
    industrySlugs: [
      "consumer-services",
      "real-estate",
      "education",
      "clinics-hospitals",
      "retail-restaurants",
    ],
  },
  {
    slug: "order-operations",
    title: "Order Operations",
    description:
      "Track, modify, and recover orders end-to-end. Status, ETAs, and exceptions — surfaced before customers have to ask.",
    icon: PackageCheck,
    productSlugs: ["driveflow", "worksync"],
    industrySlugs: ["logistics-supply-chain", "retail-restaurants"],
  },
  {
    slug: "troubleshooting",
    title: "Troubleshooting & Resolution",
    description:
      "Walk customers through diagnostics step by step — and dispatch a tech the moment the AI hits its ceiling.",
    icon: Wrench,
    productSlugs: ["smarttalk", "worksync"],
    industrySlugs: ["utilities", "logistics-supply-chain", "consumer-services", "travel"],
  },
  {
    slug: "identity-verification",
    title: "Identity Verification",
    description:
      "Verify callers with voice biometrics, knowledge-based questions, and multi-factor checks — without the queue.",
    icon: ShieldCheck,
    productSlugs: ["smarttalk", "worksync"],
    industrySlugs: ["financial-services", "clinics-hospitals", "utilities"],
  },
  {
    slug: "exam-simulator",
    title: "Exam Simulator",
    description:
      "High-fidelity practice tests with AI-generated reasoning. Learners see why an answer is right, not just that it is.",
    icon: ClipboardList,
    productSlugs: ["learnmate"],
    industrySlugs: ["education", "hr-recruiting", "financial-services", "clinics-hospitals"],
  },
  {
    slug: "lead-qualification",
    title: "Lead Qualification",
    description:
      "Engage inbound leads in seconds, score them in real time, and book the discovery call before they get distracted.",
    icon: Target,
    productSlugs: ["smarttalk", "worksync"],
    industrySlugs: ["financial-services", "real-estate", "hr-recruiting"],
  },
  {
    slug: "candidate-screening",
    title: "Candidate Screening",
    description:
      "Run consistent, structured screening interviews at scale. Every candidate gets a fair, attentive first conversation.",
    icon: UserCheck,
    productSlugs: ["smarttalk", "learnmate", "worksync"],
    industrySlugs: ["hr-recruiting"],
  },
  {
    slug: "drive-thru-ordering",
    title: "Drive-Thru Ordering",
    description:
      "Take orders at the speaker post, handle modifications and upsells, and write clean tickets straight to the POS.",
    icon: Car,
    productSlugs: ["driveflow"],
    industrySlugs: ["retail-restaurants", "consumer-services"],
  },
];

export const getUseCase = (slug: UseCaseSlug): UseCase | undefined =>
  useCases.find((u) => u.slug === slug);
