import type { LucideIcon } from "lucide-react";
import {
  PhoneIncoming,
  Headphones,
  GitBranch,
  MessageCircleQuestion,
  Moon,
  CalendarCheck,
  UserCheck,
  Zap,
  Radio,
  CreditCard,
  Network,
  Globe,
  Plug,
} from "lucide-react";
import type { ProductSlug } from "./products";
import type { IndustrySlug } from "./industries";

export type UseCaseSlug =
  | "ai-receptionist"
  | "customer-support-automation"
  | "call-routing-prioritization"
  | "faq-automation"
  | "after-hours-support"
  | "appointment-scheduling"
  | "lead-qualification-intake"
  | "workflow-automation"
  | "customer-engagement"
  | "billing-payment-assistance"
  | "operational-coordination"
  | "multilingual-communication"
  | "integrations-connected-systems";

/**
 * Compact card content shown in the homepage Use Cases bento grid.
 * `excerpt` replaces the long `description` on that surface; `detailHref`
 * lets the "Read more →" link route directly (1 click) to the matching
 * category-page anchor.
 */
export interface UseCaseHomeCard {
  excerpt: string;
  detailHref: string;
}

export interface UseCase {
  slug: UseCaseSlug;
  title: string;
  description: string;
  icon: LucideIcon;
  productSlugs: ProductSlug[];
  industrySlugs: IndustrySlug[];
  /** Optional overrides used only by the homepage Use Cases section. */
  homeCard?: UseCaseHomeCard;
}

export const useCases: UseCase[] = [
  {
    slug: "ai-receptionist",
    title: "AI Receptionist",
    description:
      "Modern businesses need to stay responsive at all times, even during peak hours or outside regular business operations. Cross Flows Synergy's AI Receptionist solutions help organizations manage incoming calls, customer inquiries, and communication requests through intelligent AI-powered systems designed to provide fast, professional, and consistent interactions. From answering common questions to routing calls and assisting with scheduling, AI reception systems help businesses improve customer experiences while reducing front-desk workload.",
    icon: PhoneIncoming,
    productSlugs: ["smarttalk"],
    industrySlugs: [
      "healthcare-clinics",
      "consumer-services",
      "real-estate-property",
      "restaurants-hospitality",
      "schools-education",
      "recruitment-staffing",
    ],
    homeCard: {
      excerpt:
        "Handle incoming calls automatically with a professional, always-available AI agent.",
      detailHref:
        "/solutions/communication-customer-engagement#ai-receptionists",
    },
  },
  {
    slug: "customer-support-automation",
    title: "Customer Support Automation",
    description:
      "Customers expect fast and reliable support across every interaction. Cross Flows Synergy helps businesses automate customer support workflows through intelligent AI-powered communication systems capable of handling inquiries, providing information, resolving common requests, and improving response efficiency. By automating repetitive support tasks, businesses can improve service quality, reduce operational pressure, and deliver more seamless customer experiences.",
    icon: Headphones,
    productSlugs: ["smarttalk", "worksync"],
    industrySlugs: [
      "consumer-services",
      "utilities-services",
      "restaurants-hospitality",
      "healthcare-clinics",
      "logistics-operations",
      "financial-services",
    ],
    homeCard: {
      excerpt:
        "Resolve common customer inquiries instantly without staff intervention.",
      detailHref:
        "/solutions/communication-customer-engagement#customer-support-automation",
    },
  },
  {
    slug: "call-routing-prioritization",
    title: "Call Routing & Prioritization",
    description:
      "Efficient communication starts with directing customers to the right place quickly. Cross Flows Synergy's intelligent call routing solutions automatically analyze customer inquiries and route them to the appropriate department, workflow, or support team based on urgency, request type, or operational logic. This helps reduce wait times, improve workflow coordination, and create smoother customer experiences across high-volume communication environments.",
    icon: GitBranch,
    productSlugs: ["smarttalk", "worksync"],
    industrySlugs: [
      "consumer-services",
      "utilities-services",
      "healthcare-clinics",
      "logistics-operations",
      "schools-education",
    ],
    homeCard: {
      excerpt:
        "Ensure every call reaches the right department or team member immediately.",
      detailHref:
        "/solutions/communication-customer-engagement#intelligent-call-routing",
    },
  },
  {
    slug: "faq-automation",
    title: "FAQ Automation",
    description:
      "Businesses spend significant time answering repetitive customer questions every day. Cross Flows Synergy helps automate frequently asked questions through intelligent AI systems capable of instantly providing accurate information regarding services, appointments, pricing, schedules, operational hours, and more. FAQ automation improves response times, reduces manual workload, and ensures customers receive consistent information anytime they need support.",
    icon: MessageCircleQuestion,
    productSlugs: ["smarttalk"],
    industrySlugs: [
      "consumer-services",
      "healthcare-clinics",
      "real-estate-property",
      "restaurants-hospitality",
      "utilities-services",
      "schools-education",
    ],
    homeCard: {
      excerpt:
        "Answer repetitive questions instantly so your team can focus on complex work.",
      detailHref:
        "/solutions/communication-customer-engagement#customer-support-automation",
    },
  },
  {
    slug: "after-hours-support",
    title: "After-Hours Customer Support",
    description:
      "Customer inquiries do not stop after business hours. Cross Flows Synergy provides AI-powered after-hours communication support designed to help businesses remain accessible beyond standard operating schedules. Customers can continue receiving assistance, information, appointment support, and inquiry handling at any time, helping organizations improve responsiveness while reducing missed opportunities.",
    icon: Moon,
    productSlugs: ["smarttalk"],
    industrySlugs: [
      "healthcare-clinics",
      "consumer-services",
      "utilities-services",
      "restaurants-hospitality",
      "schools-education",
      "real-estate-property",
    ],
    homeCard: {
      excerpt:
        "Stay accessible to customers around the clock without additional staffing.",
      detailHref:
        "/solutions/communication-customer-engagement#ai-receptionists",
    },
  },
  {
    slug: "appointment-scheduling",
    title: "Appointment Scheduling & Reservations",
    description:
      "Managing appointments and reservations manually can create operational delays and increase administrative workload. Cross Flows Synergy simplifies scheduling through AI-powered appointment coordination systems that allow customers to book, confirm, reschedule, or cancel appointments efficiently. Automated scheduling workflows improve operational efficiency, reduce missed appointments, and create more convenient customer experiences.",
    icon: CalendarCheck,
    productSlugs: ["smarttalk", "worksync"],
    industrySlugs: [
      "healthcare-clinics",
      "real-estate-property",
      "restaurants-hospitality",
      "schools-education",
      "recruitment-staffing",
      "consumer-services",
    ],
  },
  {
    slug: "lead-qualification-intake",
    title: "Lead Qualification & Customer Intake",
    description:
      "Businesses need faster and more organized ways to manage incoming inquiries and potential customers. Cross Flows Synergy helps automate lead qualification and customer intake processes by collecting essential information, categorizing inquiries, and routing opportunities to the appropriate teams. Intelligent intake workflows help improve response speed, reduce manual coordination, and support stronger customer engagement.",
    icon: UserCheck,
    productSlugs: ["smarttalk", "worksync"],
    industrySlugs: [
      "real-estate-property",
      "recruitment-staffing",
      "consumer-services",
      "financial-services",
    ],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    description:
      "Repetitive operational processes can slow down productivity and create inefficiencies across organizations. Cross Flows Synergy's workflow automation solutions help businesses streamline internal coordination, automate routine tasks, improve communication, and optimize operational workflows through intelligent AI-powered systems. Automated workflows allow teams to focus on higher-value activities while improving operational consistency and efficiency.",
    icon: Zap,
    productSlugs: ["worksync", "driveflow"],
    industrySlugs: [
      "recruitment-staffing",
      "logistics-operations",
      "schools-education",
      "healthcare-clinics",
      "utilities-services",
      "consumer-services",
      "financial-services",
    ],
  },
  {
    slug: "customer-engagement",
    title: "Customer Engagement & Communication",
    description:
      "Strong customer engagement requires fast, responsive, and personalized communication experiences. Cross Flows Synergy helps businesses improve customer interactions through intelligent AI-powered engagement systems designed to support conversations, automate communication workflows, and enhance responsiveness across customer touchpoints. Better engagement leads to improved customer satisfaction, stronger relationships, and more consistent service experiences.",
    icon: Radio,
    productSlugs: ["smarttalk", "learnmate"],
    industrySlugs: [
      "consumer-services",
      "restaurants-hospitality",
      "real-estate-property",
      "schools-education",
      "recruitment-staffing",
    ],
  },
  {
    slug: "billing-payment-assistance",
    title: "Billing & Payment Assistance",
    description:
      "Billing-related inquiries often create high volumes of repetitive customer communication. Cross Flows Synergy helps businesses automate billing assistance workflows by providing customers with quick access to payment information, billing guidance, account support, and payment-related communication through intelligent AI-powered systems. This improves support efficiency while creating smoother customer experiences.",
    icon: CreditCard,
    productSlugs: ["smarttalk"],
    industrySlugs: ["utilities-services", "consumer-services", "financial-services"],
  },
  {
    slug: "operational-coordination",
    title: "Operational Coordination & Internal Communication",
    description:
      "Modern businesses require efficient coordination between teams, departments, and operational workflows. Cross Flows Synergy helps organizations improve operational communication through centralized AI-powered systems designed to streamline updates, automate task coordination, improve workflow visibility, and support internal collaboration. Enhanced coordination helps reduce operational delays and improve overall business efficiency.",
    icon: Network,
    productSlugs: ["worksync", "driveflow"],
    industrySlugs: [
      "logistics-operations",
      "schools-education",
      "healthcare-clinics",
      "real-estate-property",
      "restaurants-hospitality",
    ],
  },
  {
    slug: "multilingual-communication",
    title: "Multilingual Communication Support",
    description:
      "Businesses serving diverse communities need communication systems capable of supporting multiple languages and improving accessibility. Cross Flows Synergy provides multilingual AI-powered communication solutions designed to help organizations engage customers more effectively across different languages and communication preferences. This improves customer experiences, accessibility, and operational reach.",
    icon: Globe,
    productSlugs: ["smarttalk", "learnmate"],
    industrySlugs: [
      "schools-education",
      "healthcare-clinics",
      "consumer-services",
      "real-estate-property",
    ],
  },
  {
    slug: "integrations-connected-systems",
    title: "Integrations & Connected Systems",
    description:
      "Modern organizations rely on multiple systems and operational platforms to manage daily activities. Cross Flows Synergy's AI solutions are designed to integrate seamlessly with CRMs, scheduling systems, communication platforms, operational software, and business tools to support connected workflows and centralized operations. Integration capabilities help businesses modernize operations without disrupting existing infrastructure.",
    icon: Plug,
    productSlugs: ["smarttalk", "worksync", "driveflow", "learnmate"],
    industrySlugs: [
      "consumer-services",
      "healthcare-clinics",
      "logistics-operations",
      "schools-education",
      "utilities-services",
      "real-estate-property",
      "restaurants-hospitality",
      "recruitment-staffing",
      "financial-services",
    ],
  },
];

export const getUseCase = (slug: UseCaseSlug): UseCase | undefined =>
  useCases.find((u) => u.slug === slug);
