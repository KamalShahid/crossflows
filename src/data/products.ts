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
  subtitle: string;
  tagline: string;
  /** Headline rendered as the H1 on the product subpage hero. */
  heroHeading: string;
  /** Lead paragraph rendered below the H1 on the product subpage hero. */
  heroDescription: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
  accent: string;
  heroEyebrow: string;
  features: ProductFeature[];
  useCaseSlugs: UseCaseSlug[];
  industrySlugs: IndustrySlug[];
  idealFor: string[];
  videoCaption: string;
}

export const products: Product[] = [
  {
    slug: "smarttalk",
    name: "SmartTalk™",
    subtitle: "Modern AI communication for modern businesses.",
    tagline:
      "Transform how your business communicates with customers — across every channel, around the clock.",
    heroHeading: "Modern AI communication for modern businesses.",
    heroDescription:
      "SmartTalk™ automates customer conversations across voice and digital channels with enterprise-grade scalability and 24/7 availability.",
    shortDescription:
      "AI-Powered Communication & Customer Engagement Platform",
    longDescription:
      "SmartTalk™ is Cross Flows Synergy's intelligent conversational AI platform designed to transform how businesses communicate with customers across voice and digital channels. Built to support high-volume customer interactions, SmartTalk™ helps organizations automate conversations, improve response efficiency, and deliver seamless customer experiences 24/7.",
    icon: Headphones,
    accent: "from-[#00d4ff] to-[#3a8dff]",
    heroEyebrow: "AI-Powered Communication & Customer Engagement Platform",
    features: [
      {
        title: "AI Voice Agents",
        description:
          "Human-like AI agents capable of handling inbound and outbound conversations naturally and intelligently.",
      },
      {
        title: "Intelligent Call Handling",
        description:
          "Automatically answer, prioritize, and route customer calls based on business rules, urgency, or inquiry type.",
      },
      {
        title: "Appointment Scheduling",
        description:
          "Enable customers to book, reschedule, or confirm appointments without waiting for a live representative.",
      },
      {
        title: "Customer Support Automation",
        description:
          "Automate common customer inquiries, FAQs, service requests, and information retrieval.",
      },
      {
        title: "Omnichannel Communication",
        description:
          "Support communication across voice, SMS, chat, and digital customer engagement channels.",
      },
      {
        title: "Lead Capture & Qualification",
        description:
          "Capture customer information, qualify leads, and route opportunities to the right teams instantly.",
      },
      {
        title: "Real-Time Escalation",
        description:
          "Transfer conversations to human agents when required while maintaining conversational context.",
      },
      {
        title: "Conversation Analytics",
        description:
          "Track interaction trends, customer behavior, and operational performance through AI-driven reporting.",
      },
    ],
    useCaseSlugs: [
      "ai-receptionist",
      "customer-support-automation",
      "call-routing-prioritization",
      "faq-automation",
      "after-hours-support",
      "appointment-scheduling",
      "lead-qualification-intake",
      "customer-engagement",
      "billing-payment-assistance",
      "multilingual-communication",
      "integrations-connected-systems",
    ],
    industrySlugs: [
      "healthcare-clinics",
      "recruitment-staffing",
      "real-estate-property",
      "restaurants-hospitality",
      "consumer-services",
      "utilities-services",
    ],
    idealFor: [
      "Healthcare & Clinics",
      "Recruitment & Staffing",
      "Real Estate & Property Management",
      "Restaurants & Hospitality",
      "Retail & Customer Support",
      "Service-Based Businesses",
    ],
    videoCaption: "See SmartTalk™ in action — live customer conversations, automated end to end",
  },
  {
    slug: "learnmate",
    name: "LearnMate™",
    subtitle: "Intelligent Education & Learning Support Platform",
    tagline:
      "Modernize educational experiences through intelligent automation, communication, and engagement.",
    heroHeading:
      "AI-powered education and academic support for modern learning environments.",
    heroDescription:
      "LearnMate™ helps institutions automate workflows, improve communication, and enhance student experiences at scale.",
    shortDescription: "Intelligent Education & Learning Support Platform",
    longDescription:
      "LearnMate™ is an AI-powered education and academic support platform designed to help institutions, training providers, and learning organizations modernize educational experiences through intelligent automation, communication, and engagement systems. Built to support both administrative and learning-focused workflows, LearnMate™ helps streamline student interactions, automate academic processes, improve accessibility, and enhance educational operations through AI-powered solutions.",
    icon: GraduationCap,
    accent: "from-[#00d4ff] to-[#9b6bff]",
    heroEyebrow: "Intelligent Education & Learning Support Platform",
    features: [
      {
        title: "Student Support Automation",
        description:
          "Provide instant responses to student inquiries regarding schedules, admissions, courses, policies, and academic services.",
      },
      {
        title: "Enrollment & Admissions Assistance",
        description:
          "Automate inquiry handling, lead engagement, and applicant communication workflows.",
      },
      {
        title: "AI Learning Assistance",
        description:
          "Support learners through intelligent educational guidance, study assistance, and academic resource delivery.",
      },
      {
        title: "Scheduling & Coordination",
        description:
          "Manage appointments, orientations, training sessions, and academic scheduling workflows.",
      },
      {
        title: "Educational Workflow Automation",
        description:
          "Automate administrative processes such as reminders, notifications, follow-ups, and communication tasks.",
      },
      {
        title: "AI Engagement Systems",
        description:
          "Improve communication between students, educators, and institutions through intelligent engagement workflows.",
      },
      {
        title: "Academic Insights & Reporting",
        description:
          "Analyze engagement trends, operational workflows, and educational interaction data.",
      },
      {
        title: "Multilingual Support",
        description:
          "Enable broader accessibility through multilingual AI-powered communication systems.",
      },
    ],
    useCaseSlugs: [
      "customer-support-automation",
      "appointment-scheduling",
      "multilingual-communication",
      "customer-engagement",
      "integrations-connected-systems",
    ],
    industrySlugs: ["schools-education", "healthcare-clinics", "recruitment-staffing"],
    idealFor: [
      "Schools & Educational Institutions",
      "Training Providers",
      "Universities & Colleges",
      "Learning Platforms",
      "Corporate Training Programs",
      "Academic Support Services",
    ],
    videoCaption: "See LearnMate™ support real student and learner workflows",
  },
  {
    slug: "worksync",
    name: "WorkSync™",
    subtitle: "Intelligent Workflow & Business Operations Platform",
    tagline:
      "Connect people, workflows, and systems into one intelligent automation ecosystem.",
    heroHeading:
      "Connect people, workflows, and systems through intelligent AI-powered automation.",
    heroDescription:
      "WorkSync™ helps businesses streamline operations, automate repetitive processes, improve coordination, and optimize performance through one connected operational ecosystem.",
    shortDescription: "Intelligent Workflow & Business Operations Platform",
    longDescription:
      "WorkSync™ is Cross Flows Synergy's AI-powered workflow automation and operational intelligence platform designed to help businesses streamline internal processes, automate repetitive tasks, improve coordination, and optimize operational performance. WorkSync™ connects people, workflows, systems, and operational activities into a centralized intelligent automation ecosystem that improves efficiency and supports scalable business growth.",
    icon: Workflow,
    accent: "from-[#3a8dff] to-[#00d4ff]",
    heroEyebrow: "Intelligent Workflow & Business Operations Platform",
    features: [
      {
        title: "Workflow Automation",
        description:
          "Automate repetitive operational tasks, approvals, follow-ups, notifications, and internal coordination.",
      },
      {
        title: "Process Optimization",
        description:
          "Identify inefficiencies and streamline operational workflows using intelligent AI-driven systems.",
      },
      {
        title: "Smart Task Routing",
        description:
          "Automatically assign tasks, requests, and workflows based on priority, business logic, or department.",
      },
      {
        title: "AI Operational Assistance",
        description:
          "Support internal teams with AI-powered coordination, scheduling, reminders, and administrative workflows.",
      },
      {
        title: "CRM & System Integrations",
        description:
          "Connect workflows with CRMs, communication systems, scheduling platforms, and operational software.",
      },
      {
        title: "Operational Insights & Reporting",
        description:
          "Track workflow performance, operational bottlenecks, team productivity, and process efficiency.",
      },
      {
        title: "Intelligent Escalation Systems",
        description:
          "Automatically escalate operational issues or high-priority workflows to the appropriate teams.",
      },
      {
        title: "Centralized Workflow Visibility",
        description:
          "Provide real-time visibility into operational activities, process status, and workflow performance.",
      },
    ],
    useCaseSlugs: [
      "workflow-automation",
      "operational-coordination",
      "lead-qualification-intake",
      "call-routing-prioritization",
      "customer-support-automation",
      "integrations-connected-systems",
    ],
    industrySlugs: [
      "recruitment-staffing",
      "logistics-operations",
      "healthcare-clinics",
      "schools-education",
      "real-estate-property",
      "utilities-services",
      "consumer-services",
    ],
    idealFor: [
      "Recruitment & Staffing Firms",
      "Logistics & Operations Teams",
      "Administrative Departments",
      "Service-Based Businesses",
      "Property Management Operations",
      "Enterprise Workflow Management",
    ],
    videoCaption: "Watch WorkSync™ orchestrate a multi-system workflow, live",
  },
  {
    slug: "driveflow",
    name: "DriveFlow™",
    subtitle: "AI-Powered Logistics, Coordination & Operational Flow Platform",
    tagline:
      "Streamline dispatch, coordination, and field operations with intelligent AI automation.",
    heroHeading:
      "Streamline dispatch, coordination, and field operations through intelligent AI automation.",
    heroDescription:
      "DriveFlow™ helps businesses optimize logistics, service coordination, and operational workflows with real-time communication, automated dispatching, and connected operational intelligence.",
    shortDescription:
      "AI-Powered Logistics, Coordination & Operational Flow Platform",
    longDescription:
      "DriveFlow™ is an intelligent AI-powered coordination and operational management platform designed to support logistics, transportation, dispatch, field operations, and service coordination workflows. Built for businesses managing high-volume operational activities, DriveFlow™ helps improve communication, streamline coordination, automate service workflows, and optimize operational efficiency across teams and locations.",
    icon: Car,
    accent: "from-[#f5a623] to-[#ffce6e]",
    heroEyebrow: "AI-Powered Logistics, Coordination & Operational Flow Platform",
    features: [
      {
        title: "Dispatch Coordination",
        description:
          "Automate scheduling, routing, communication, and coordination between teams, drivers, technicians, or field staff.",
      },
      {
        title: "Service Request Automation",
        description:
          "Manage incoming service requests, operational inquiries, and workflow assignments intelligently.",
      },
      {
        title: "Operational Communication Systems",
        description:
          "Improve communication between operations teams, clients, field staff, and management.",
      },
      {
        title: "Scheduling & Route Optimization",
        description:
          "Coordinate schedules, assignments, and operational timelines more efficiently.",
      },
      {
        title: "AI Workflow Monitoring",
        description:
          "Track workflow progress, operational activities, and service execution in real-time.",
      },
      {
        title: "Intelligent Escalation Management",
        description:
          "Automatically identify delays, operational issues, or priority requests and escalate accordingly.",
      },
      {
        title: "Operational Analytics & Insights",
        description:
          "Generate insights into operational performance, workflow trends, response times, and service efficiency.",
      },
      {
        title: "Integration Infrastructure",
        description:
          "Connect with scheduling systems, CRMs, dispatch tools, communication platforms, and operational software.",
      },
    ],
    useCaseSlugs: [
      "operational-coordination",
      "workflow-automation",
      "integrations-connected-systems",
    ],
    industrySlugs: [
      "logistics-operations",
      "real-estate-property",
      "consumer-services",
      "restaurants-hospitality",
      "utilities-services",
    ],
    idealFor: [
      "Logistics & Transportation",
      "Field Service Operations",
      "Warehouse & Distribution",
      "Delivery Coordination",
      "Utility Service Providers",
      "Mobile Workforce Operations",
    ],
    videoCaption: "See DriveFlow™ coordinate field operations end-to-end",
  },
];

export const getProduct = (slug: ProductSlug): Product | undefined =>
  products.find((p) => p.slug === slug);
