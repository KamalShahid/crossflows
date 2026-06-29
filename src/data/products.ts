import type { LucideIcon } from "lucide-react";
import {
  Headphones,
  Car,
  GraduationCap,
  Workflow,
  // DriveFlow capability icons
  Timer,
  MessageCircle,
  TrendingUp,
  Plug,
  Star,
  BarChart3,
  Globe,
  Users,
  // DriveFlow industries-served icons
  UtensilsCrossed,
  Coffee,
  Store,
  Landmark,
  // LearnMate capability icons
  BrainCircuit,
  ShieldCheck,
  CheckSquare,
  Bell,
  Lock,
  // LearnMate industries-served icons
  School,
  HeartPulse,
  Monitor,
} from "lucide-react";
import type { UseCaseSlug } from "./useCases";
import type { IndustrySlug } from "./industries";

export type ProductSlug = "smarttalk" | "driveflow" | "learnmate" | "worksync";

export interface ProductFeature {
  title: string;
  description: string;
  /** Optional per-feature icon shown in the Capabilities card. Falls back to `Sparkles` in ProductPage when omitted. */
  icon?: LucideIcon;
}

/**
 * Optional override entry for a product's "Industries Served" section.
 * When `industriesServed` is set on a product, ProductPage renders these
 * cards instead of looking up `industrySlugs` in the industries data.
 */
export interface ProductIndustryEntry {
  name: string;
  description: string;
  icon: LucideIcon;
  /** When set, the card name links to `/industries/${slug}`. */
  slug?: IndustrySlug;
}

/**
 * Optional override entry for a product's "Use Cases" section. When
 * `productUseCases` is set, ProductPage renders a simple title +
 * description grid using these entries instead of the shared
 * `<UseCasesShowcase>` that filters the global use cases by productSlug.
 */
export interface ProductUseCaseEntry {
  id: string;
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
  /** Optional override for the 3 feature bullets shown on /products. Falls back to features.slice(0, 3). */
  listingHighlights?: ProductFeature[];
  useCaseSlugs: UseCaseSlug[];
  industrySlugs: IndustrySlug[];
  /** Optional override for the Industries Served grid on the product subpage. */
  industriesServed?: ProductIndustryEntry[];
  /** Optional curated use-case grid. When set, replaces the shared `<UseCasesShowcase>` on the product subpage. */
  productUseCases?: ProductUseCaseEntry[];
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
        title: "AI Question Generation",
        description:
          "Automatically generate MCQs, descriptive, coding, and image-based questions from PDFs, Word documents, presentations, and textbooks.",
        icon: BrainCircuit,
      },
      {
        title: "Secure Digital Assessments",
        description:
          "Conduct online exams with browser lockdown, tab-switch detection, activity monitoring, and auto-save for a secure testing experience.",
        icon: ShieldCheck,
      },
      {
        title: "Automated Grading",
        description:
          "Instantly evaluate assessments, publish results, and eliminate manual grading to save faculty time.",
        icon: CheckSquare,
      },
      {
        title: "Learning Analytics",
        description:
          "Visualize student performance through dashboards, topic heatmaps, weak-area analysis, and progress reports.",
        icon: BarChart3,
      },
      {
        title: "Faculty Workflow Automation",
        description:
          "Automate exam scheduling, result publishing, report generation, and administrative tasks to improve operational efficiency.",
        icon: Workflow,
      },
      {
        title: "Student Communication",
        description:
          "Send automated reminders for exams, assignments, deadlines, and campus announcements through email, SMS, or voice.",
        icon: Bell,
      },
      {
        title: "Performance Tracking",
        description:
          "Monitor individual and class performance over time with comprehensive analytics to support academic improvement.",
        icon: TrendingUp,
      },
      {
        title: "Data Security & Compliance",
        description:
          "Protect institutional data with secure storage, role-based access, audit trails, and flexible cloud or on-premise deployment.",
        icon: Lock,
      },
    ],
    productUseCases: [
      {
        id: "ai-assessment-creation",
        title: "AI-Powered Assessment Creation",
        description:
          "LearnMate™ enables educators to generate high-quality assessments in minutes by uploading existing course materials such as PDFs, Word documents, presentations, or textbooks. The platform automatically creates MCQs, coding challenges, descriptive questions, and image-based assessments, allowing faculty to review, customize, and publish exams with minimal effort.",
      },
      {
        id: "secure-online-assessments",
        title: "Secure Online Assessments",
        description:
          "LearnMate™ provides a secure digital examination environment with AI-powered proctoring and built-in academic integrity tools. Features such as browser lockdown, tab-switch detection, automatic answer saving, and activity tracking help institutions conduct reliable online assessments while minimizing opportunities for misconduct.",
      },
      {
        id: "automated-grading-analytics",
        title: "Automated Grading & Performance Analytics",
        description:
          "LearnMate™ automatically grades assessments and delivers results instantly, eliminating lengthy manual grading processes. Interactive dashboards provide topic-wise performance analysis, learning gaps, class trends, and progress reports, enabling educators to make data-driven decisions and improve student outcomes.",
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
    industriesServed: [
      {
        name: "Universities & Colleges",
        description:
          "Modernize examinations, automate grading, and provide data-driven insights to improve teaching and student outcomes.",
        icon: GraduationCap,
        slug: "schools-education",
      },
      {
        name: "Schools & Educational Institutions",
        description:
          "Streamline assessments, simplify faculty workflows, and enhance communication between educators, students, and administrators.",
        icon: School,
        slug: "schools-education",
      },
      {
        name: "Healthcare Education & Medical Training",
        description:
          "Conduct secure examinations, compliance assessments, and professional certifications while tracking learner performance.",
        icon: HeartPulse,
        slug: "healthcare-clinics",
      },
      {
        name: "Government & Public Sector Training",
        description:
          "Support workforce training, certification, and policy compliance through AI-powered assessments and centralized reporting.",
        icon: Landmark,
      },
      {
        name: "EdTech & Online Learning Platforms",
        description:
          "Enhance digital learning with AI-generated assessments, automated grading, and real-time learning analytics.",
        icon: Monitor,
      },
    ],
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
    subtitle: "AI-Powered Drive-Thru & Quick-Service Ordering Platform",
    tagline:
      "Transform your drive-thru experience with intelligent AI that helps restaurants serve customers faster, reduce wait times, and improve order accuracy.",
    heroHeading:
      "Transform your drive-thru experience with intelligent AI that helps restaurants serve customers faster, reduce wait times, and improve order accuracy.",
    heroDescription:
      "By handling orders with natural, human-like conversations, DriveFlow™ helps restaurants reduce wait times, increase order accuracy, boost revenue through intelligent upselling, and ensure a consistent customer experience across every location.",
    shortDescription:
      "AI-powered drive-thru solution designed to automate order taking and improve operational efficiency.",
    longDescription:
      "DriveFlow™ integrates with your existing drive-thru operations to handle customer interactions, take orders, answer menu questions, suggest upsells and streamline communication between customers and staff. Whether you're managing a single location or a multi-unit franchise, DriveFlow™ helps create a faster, more consistent customer experience.",
    icon: Car,
    accent: "from-[#f5a623] to-[#ffce6e]",
    heroEyebrow: "AI-Powered Drive-Thru & Quick-Service Ordering Platform",
    features: [
      {
        title: "Faster Drive-Thru Throughput",
        description:
          "Serve more customers during peak hours by reducing ordering bottlenecks and accelerating the ordering process without increasing staff requirements.",
        icon: Timer,
      },
      {
        title: "AI-Powered Customer Conversations",
        description:
          "Engage customers with natural, human-like conversations that can understand menu items, modifications, promotions, and common questions in real time.",
        icon: MessageCircle,
      },
      {
        title: "Intelligent Upselling",
        description:
          "Increase average order value through automated recommendations for combos, add-ons, beverages, desserts, and limited-time offers tailored to customer selections.",
        icon: TrendingUp,
      },
      {
        title: "Seamless POS Integration",
        description:
          "Connect with existing POS and restaurant management systems to ensure orders are captured accurately and routed directly to kitchen operations.",
        icon: Plug,
      },
      {
        title: "Consistent Customer Experience",
        description:
          "Deliver the same level of service across every shift and location, ensuring customers receive fast, friendly, and reliable interactions every time.",
        icon: Star,
      },
      {
        title: "Real-Time Analytics & Reporting",
        description:
          "Gain insights into order trends, customer interactions, peak traffic periods, upsell performance, and operational efficiency through centralized dashboards.",
        icon: BarChart3,
      },
      {
        title: "Multilingual Ordering",
        description:
          "Support customers in multiple languages, helping restaurants serve diverse communities while improving accessibility and customer satisfaction.",
        icon: Globe,
      },
      {
        title: "Reduced Labor Dependency",
        description:
          "Help address staffing shortages by automating repetitive order-taking tasks, allowing employees to focus on food preparation and customer service.",
        icon: Users,
      },
    ],
    listingHighlights: [
      {
        title: "AI Order Taking",
        description:
          "Automatically takes customer orders with natural, human-like conversations.",
      },
      {
        title: "Smart Upselling & Promotions",
        description:
          "Recommends add-ons, combos, and promotional items based on customer selections.",
      },
      {
        title: "Order Accuracy",
        description:
          "Minimizes misunderstandings and incorrect orders, improving customer satisfaction and reduces waste.",
      },
    ],
    productUseCases: [
      {
        id: "ai-drivethrough-ordering",
        title: "AI Drive-Thru Ordering",
        description:
          "DriveFlow™ automates the drive-thru ordering experience by taking customer orders through natural voice conversations, answering menu questions, recommending add-ons, and sending accurate orders directly to the POS, reducing wait times and improving order accuracy.",
      },
      {
        id: "order-management-kitchen",
        title: "Order Management & Kitchen Coordination",
        description:
          "DriveFlow™ instantly routes orders to the kitchen, prioritizes preparation based on queue volume, updates order status in real time, and helps staff maintain a smooth, efficient workflow during peak hours.",
      },
      {
        id: "reservations-pickup-scheduling",
        title: "Restaurant Reservations & Pickup Scheduling",
        description:
          "Allow customers to schedule pickup times, reserve tables, or place future orders through a conversational AI assistant, reducing manual coordination.",
      },
      {
        id: "smart-upselling",
        title: "Smart Upselling During Ordering",
        description:
          "Increase average order value by recommending meal upgrades, combo offers, drinks, desserts, and limited-time promotions based on the customer’s order.",
      },
    ],
    useCaseSlugs: [
      "operational-coordination",
      "workflow-automation",
      "integrations-connected-systems",
    ],
    industrySlugs: [
      "restaurants-hospitality",
      "financial-services",
    ],
    industriesServed: [
      {
        name: "Quick Service Restaurants (QSRs)",
        description:
          "Automates order taking and speeds up service during peak hours.",
        icon: UtensilsCrossed,
        slug: "restaurants-hospitality",
      },
      {
        name: "Coffee Shops & Cafés",
        description:
          "Handles complex drink customizations while reducing wait times.",
        icon: Coffee,
        slug: "restaurants-hospitality",
      },
      {
        name: "Food & Beverage Franchises",
        description:
          "Standardizes the drive-thru experience across multiple locations.",
        icon: Store,
        slug: "restaurants-hospitality",
      },
      {
        name: "Banks & Financial Institutions",
        description:
          "Supports customer interactions and directs transactions efficiently.",
        icon: Landmark,
        slug: "financial-services",
      },
    ],
    idealFor: [
      "Quick Service Restaurants (QSR)",
      "Fast Food Chains",
      "Coffee Shops",
    ],
    videoCaption: "See DriveFlow™ run a live drive-thru order, end to end",
  },
];

export const getProduct = (slug: ProductSlug): Product | undefined =>
  products.find((p) => p.slug === slug);
