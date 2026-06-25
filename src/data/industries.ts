import type { LucideIcon } from "lucide-react";
import {
  HeartPulse,
  Users,
  Briefcase,
  Building2,
  UtensilsCrossed,
  Zap,
  GraduationCap,
  Truck,
  Landmark,
  ShieldCheck,
  Radio,
} from "lucide-react";
import type { ProductSlug } from "./products";
import type { UseCaseSlug } from "./useCases";

export type IndustrySlug =
  | "healthcare-clinics"
  | "consumer-services"
  | "recruitment-staffing"
  | "real-estate-property"
  | "restaurants-hospitality"
  | "utilities-services"
  | "schools-education"
  | "logistics-operations"
  | "financial-services"
  | "insurance"
  | "telecommunications"
  | "municipalities-government";

export interface IndustryProductFeature {
  title: string;
  description: string;
}

export interface IndustryProductFeatureGroup {
  productSlug: ProductSlug;
  features: IndustryProductFeature[];
}

export interface Industry {
  slug: IndustrySlug;
  name: string;
  description: string;
  headline: string;
  intro: string;
  icon: LucideIcon;
  accent: string;
  productSlugs: ProductSlug[];
  useCaseSlugs: UseCaseSlug[];
  productFeatures: IndustryProductFeatureGroup[];
  benefits: string[];
  benefitHeadline?: string;
  benefitSubheading?: string;
  useCaseHighlights?: string[];
  cardOnly?: boolean;
}

export const industries: Industry[] = [
  {
    slug: "healthcare-clinics",
    name: "Healthcare & Clinics",
    description:
      "Improve patient communication, streamline administrative workflows, and stay accessible to patients 24/7.",
    headline: "Intelligent AI Solutions for Modern Healthcare Communication",
    intro:
      "Cross Flows Synergy helps healthcare providers improve patient communication, streamline administrative workflows, and enhance operational efficiency through intelligent AI-powered systems designed for modern clinics and healthcare environments.",
    icon: HeartPulse,
    accent: "from-[#00d4ff] to-[#3a8dff]",
    productSlugs: ["smarttalk", "worksync", "learnmate"],
    useCaseSlugs: [
      "ai-receptionist",
      "appointment-scheduling",
      "after-hours-support",
      "faq-automation",
      "multilingual-communication",
    ],
    productFeatures: [
      {
        productSlug: "smarttalk",
        features: [
          {
            title: "AI-Powered Patient Call Handling",
            description:
              "Handle incoming patient calls intelligently with AI-powered systems capable of answering common questions, routing calls, and reducing front-desk pressure.",
          },
          {
            title: "Appointment Scheduling & Confirmations",
            description:
              "Allow patients to book, reschedule, or confirm appointments seamlessly while reducing manual scheduling workload for staff.",
          },
          {
            title: "AI Receptionist Support",
            description:
              "Provide a professional 24/7 virtual reception experience that helps patients receive immediate assistance even outside regular clinic hours.",
          },
          {
            title: "Patient Inquiry Automation",
            description:
              "Automate responses to common patient questions related to clinic hours, services, appointment availability, and general information.",
          },
          {
            title: "Prescription Refill Request Routing",
            description:
              "Help streamline refill requests by directing inquiries to the appropriate department or workflow efficiently.",
          },
          {
            title: "Call Overflow Management",
            description:
              "Support clinics during peak call volumes by ensuring patients are still assisted promptly without long hold times or missed calls.",
          },
          {
            title: "Multilingual Patient Communication",
            description:
              "Improve accessibility and patient engagement by supporting communication across multiple languages and diverse patient communities.",
          },
          {
            title: "After-Hours Support Systems",
            description:
              "Provide patients with reliable support outside operating hours for inquiries, scheduling, and important healthcare-related communication.",
          },
        ],
      },
      {
        productSlug: "worksync",
        features: [
          {
            title: "Administrative Workflow Automation",
            description:
              "Reduce repetitive administrative tasks by automating workflows such as reminders, notifications, approvals, and coordination processes.",
          },
          {
            title: "Staff Coordination Systems",
            description:
              "Improve communication and operational coordination between healthcare teams, departments, and administrative staff.",
          },
          {
            title: "Internal Communication Workflows",
            description:
              "Streamline internal clinic communication through automated updates, task routing, and operational notifications.",
          },
          {
            title: "Appointment Reminder Automation",
            description:
              "Automatically send reminders and follow-up notifications to help minimize no-shows and improve scheduling efficiency.",
          },
          {
            title: "Operational Task Routing",
            description:
              "Intelligently assign operational tasks and requests to the appropriate staff members or departments based on workflow logic.",
          },
          {
            title: "Workflow Escalation Systems",
            description:
              "Automatically identify urgent operational issues or patient-related requests and escalate them to the appropriate teams quickly.",
          },
        ],
      },
      {
        productSlug: "learnmate",
        features: [
          {
            title: "Healthcare Training Support",
            description:
              "Support healthcare learning environments with AI-powered educational assistance and communication tools for staff development.",
          },
          {
            title: "Staff Onboarding Assistance",
            description:
              "Streamline onboarding processes for new employees through automated training guidance, information delivery, and workflow support.",
          },
          {
            title: "Educational Communication Workflows",
            description:
              "Improve communication between trainers, administrators, and healthcare staff through organized AI-powered systems.",
          },
          {
            title: "Learning Engagement Systems",
            description:
              "Enhance staff participation and engagement through intelligent educational support and interactive learning assistance.",
          },
        ],
      },
    ],
    benefits: [
      "Reduce Front-Desk Workload",
      "Improve Patient Response Times",
      "Support Patients 24/7",
      "Minimize Missed Appointments",
      "Improve Operational Coordination",
      "Enhance Patient Experience",
    ],
  },
  {
    slug: "consumer-services",
    name: "Consumer Services",
    description:
      "Automate customer communication, streamline appointment handling, and support customers 24/7 at scale.",
    headline: "AI Solutions for High-Volume Customer Interactions",
    intro:
      "Cross Flows Synergy helps consumer service businesses automate customer communication, streamline appointment handling, improve response times, and support customers 24/7 through intelligent AI-powered systems.",
    icon: Users,
    accent: "from-[#00d4ff] to-[#7af9ff]",
    productSlugs: ["smarttalk", "worksync", "driveflow"],
    useCaseSlugs: [
      "ai-receptionist",
      "customer-support-automation",
      "appointment-scheduling",
      "call-routing-prioritization",
      "faq-automation",
      "after-hours-support",
      "customer-engagement",
    ],
    useCaseHighlights: [
      "AI appointment scheduling",
      "Customer inquiry automation",
      "Billing & payment assistance",
      "Call routing & prioritization",
      "FAQ automation",
      "Dispatch coordination",
      "Customer feedback collection",
      "Workflow automation",
    ],
    productFeatures: [
      {
        productSlug: "smarttalk",
        features: [
          { title: "AI Appointment Scheduling", description: "Self-serve booking, confirmations, and reminders that reduce no-shows and admin work." },
          { title: "Customer Inquiry Automation", description: "Resolve common customer questions instantly with consistent, on-brand AI responses." },
          { title: "Billing & Payment Assistance", description: "Help customers access billing information, make payments, and resolve account questions." },
          { title: "Call Routing & Prioritization", description: "Direct customers to the right team or workflow based on intent and urgency." },
          { title: "FAQ Automation", description: "Answer frequently asked questions at any hour without queueing customers behind agents." },
          { title: "Customer Engagement Support", description: "Maintain consistent, responsive communication across every customer touchpoint." },
          { title: "Call Overflow Management", description: "Absorb peak call volumes without missed conversations or long hold times." },
          { title: "After-Hours Customer Support", description: "Keep customers supported outside business hours with reliable AI assistance." },
        ],
      },
      {
        productSlug: "worksync",
        features: [
          { title: "Workflow Automation", description: "Streamline operational tasks, follow-ups, and internal coordination across teams." },
          { title: "Dispatch Coordination", description: "Coordinate field and service operations through automated dispatch and communication workflows." },
          { title: "Internal Communication Systems", description: "Connect departments with automated updates and task routing." },
          { title: "Operational Task Routing", description: "Assign requests to the right person, department, or workflow automatically." },
          { title: "Customer Feedback Collection", description: "Capture customer feedback systematically and surface trends operationally." },
          { title: "Workflow Escalation Systems", description: "Escalate urgent or high-priority operational issues to the right teams." },
        ],
      },
      {
        productSlug: "driveflow",
        features: [
          { title: "Service Scheduling Support", description: "Coordinate appointments, dispatch, and service timelines across teams and locations." },
          { title: "Real-Time Operational Coordination", description: "Keep field staff, dispatch, and customers aligned in real time." },
          { title: "Intelligent Dispatch Communication", description: "Automate dispatch updates and route changes across the operation." },
          { title: "Workflow Monitoring Systems", description: "Track operational progress and surface delays before they become escalations." },
        ],
      },
    ],
    benefits: [
      "Never Miss a Customer Opportunity",
      "Handle High Call Volumes Efficiently",
      "Improve Customer Response Times",
      "Support Customers 24/7",
      "Reduce Operational Workload",
      "Improve Service Coordination",
      "Enhance Customer Experience",
    ],
    benefitHeadline: "Never Miss a Customer Opportunity",
    benefitSubheading:
      "Handle high call volumes efficiently, reduce missed inquiries, and improve customer experiences without increasing operational workload.",
  },
  {
    slug: "recruitment-staffing",
    name: "Recruitment & Staffing",
    description:
      "Automate candidate communication, accelerate hiring workflows, and improve operational coordination.",
    headline: "AI Solutions for Recruitment & Staffing Operations",
    intro:
      "Cross Flows Synergy helps staffing firms and recruitment agencies automate communication, improve candidate engagement, streamline hiring workflows, and optimize operational coordination through intelligent AI-powered systems.",
    icon: Briefcase,
    accent: "from-[#9b6bff] to-[#00d4ff]",
    productSlugs: ["smarttalk", "worksync", "learnmate"],
    useCaseSlugs: [
      "ai-receptionist",
      "lead-qualification-intake",
      "appointment-scheduling",
      "customer-engagement",
      "workflow-automation",
    ],
    productFeatures: [
      {
        productSlug: "smarttalk",
        features: [
          { title: "Candidate Inquiry Handling", description: "Respond to candidate questions instantly and qualify interest before recruiters get involved." },
          { title: "AI Interview Scheduling", description: "Coordinate interviews across candidates, recruiters, and hiring managers automatically." },
          { title: "Applicant Engagement Systems", description: "Keep applicants warm and informed throughout long hiring cycles." },
          { title: "Candidate Screening Support", description: "Run consistent, structured screening conversations at scale." },
          { title: "Automated Follow-Ups", description: "Send timely follow-ups and status updates without manual recruiter effort." },
          { title: "AI Recruitment Receptionist", description: "Provide professional 24/7 first-touch communication for inbound applicants and clients." },
          { title: "Client Communication Automation", description: "Keep client stakeholders updated on pipeline progress and scheduling." },
        ],
      },
      {
        productSlug: "worksync",
        features: [
          { title: "Recruitment Workflow Automation", description: "Automate repetitive recruiting workflows from intake through placement." },
          { title: "Candidate Tracking Workflows", description: "Move candidates through pipeline stages with consistent, automated coordination." },
          { title: "Internal Hiring Coordination", description: "Coordinate between recruiters, hiring managers, and operations." },
          { title: "Team Communication Automation", description: "Keep internal teams aligned on status changes, approvals, and next actions." },
          { title: "Operational Reporting", description: "Surface pipeline velocity, bottlenecks, and recruiter productivity in real time." },
          { title: "Scheduling & Assignment Workflows", description: "Assign requisitions, candidates, and tasks based on workload and ownership rules." },
        ],
      },
      {
        productSlug: "learnmate",
        features: [
          { title: "Candidate Onboarding Support", description: "Streamline onboarding communication and information delivery for new hires." },
          { title: "Training Coordination Systems", description: "Coordinate training sessions, certifications, and learning workflows." },
          { title: "Learning Workflow Automation", description: "Automate reminders, follow-ups, and learning checkpoints across cohorts." },
          { title: "Employee Engagement Systems", description: "Maintain engagement with new hires through intelligent, well-paced communication." },
        ],
      },
    ],
    benefits: [
      "Faster Hiring Workflows",
      "Improved Candidate Communication",
      "Reduced Administrative Workload",
      "Better Client Responsiveness",
      "Improved Operational Visibility",
      "Increased Recruiter Productivity",
    ],
  },
  {
    slug: "real-estate-property",
    name: "Real Estate & Property Management",
    description:
      "Automate tenant interactions, streamline leasing workflows, and coordinate property operations end to end.",
    headline: "AI Solutions for Real Estate & Property Operations",
    intro:
      "Cross Flows Synergy helps real estate professionals and property management teams automate communication, streamline tenant interactions, improve leasing workflows, and optimize operational efficiency using AI-powered systems.",
    icon: Building2,
    accent: "from-[#00d4ff] to-[#3a8dff]",
    productSlugs: ["smarttalk", "worksync", "driveflow"],
    useCaseSlugs: [
      "ai-receptionist",
      "appointment-scheduling",
      "lead-qualification-intake",
      "after-hours-support",
      "faq-automation",
      "operational-coordination",
    ],
    productFeatures: [
      {
        productSlug: "smarttalk",
        features: [
          { title: "Property Inquiry Automation", description: "Answer property questions instantly across listings, units, and availability." },
          { title: "Leasing Appointment Scheduling", description: "Book viewings and leasing appointments without back-and-forth." },
          { title: "AI Receptionist Support", description: "Professional 24/7 front-desk experience for prospective and current tenants." },
          { title: "Tenant Communication Systems", description: "Keep tenants informed with consistent, on-brand communication." },
          { title: "Inquiry Qualification Workflows", description: "Capture, qualify, and route inbound leads to the right agent quickly." },
          { title: "After-Hours Inquiry Handling", description: "Capture and respond to inquiries outside business hours so no lead is lost." },
          { title: "FAQ Automation", description: "Resolve common tenant and prospect questions instantly." },
        ],
      },
      {
        productSlug: "worksync",
        features: [
          { title: "Maintenance Workflow Automation", description: "Streamline maintenance requests from intake through resolution." },
          { title: "Internal Coordination Systems", description: "Coordinate property managers, vendors, and on-site staff in one workflow layer." },
          { title: "Operational Scheduling", description: "Schedule inspections, maintenance, and vendor visits across portfolios." },
          { title: "Tenant Request Management", description: "Track, route, and resolve tenant requests with full visibility." },
          { title: "Workflow Monitoring", description: "Surface operational delays and SLAs at the portfolio level." },
          { title: "Escalation Management", description: "Escalate urgent maintenance or tenant issues automatically." },
        ],
      },
      {
        productSlug: "driveflow",
        features: [
          { title: "Property Visit Coordination", description: "Coordinate showings, inspections, and on-site visits across teams." },
          { title: "Maintenance Dispatch Systems", description: "Dispatch the right vendor or technician based on issue type and priority." },
          { title: "Mobile Workforce Communication", description: "Keep field teams in sync with real-time operational updates." },
          { title: "Service Request Tracking", description: "Track service requests end-to-end with full operational visibility." },
        ],
      },
    ],
    benefits: [
      "Faster Tenant Response Times",
      "Improved Leasing Efficiency",
      "Better Inquiry Management",
      "Reduced Operational Delays",
      "Enhanced Customer Experience",
    ],
  },
  {
    slug: "restaurants-hospitality",
    name: "Restaurants & Hospitality",
    description:
      "Improve guest communication, automate reservations, and streamline service across peak hours.",
    headline: "AI Solutions for Restaurants, Hospitality & Guest Experiences",
    intro:
      "Cross Flows Synergy helps restaurants and hospitality businesses improve guest communication, automate reservations, streamline operations, and enhance customer experiences through intelligent AI systems.",
    icon: UtensilsCrossed,
    accent: "from-[#f5a623] to-[#ffce6e]",
    productSlugs: ["smarttalk", "worksync", "driveflow"],
    useCaseSlugs: [
      "appointment-scheduling",
      "ai-receptionist",
      "customer-engagement",
      "faq-automation",
      "operational-coordination",
    ],
    productFeatures: [
      {
        productSlug: "smarttalk",
        features: [
          { title: "Reservation Handling", description: "Take, modify, and confirm reservations without tying up the host stand." },
          { title: "AI Guest Support", description: "Answer guest questions instantly across phone, chat, and digital channels." },
          { title: "Call Overflow Management", description: "Handle peak-hour call surges without missing reservations or inquiries." },
          { title: "Order Inquiry Handling", description: "Respond to order, takeout, and delivery questions in real time." },
          { title: "Booking Confirmations", description: "Send timely confirmations and reminders to reduce no-shows." },
          { title: "FAQ Automation", description: "Resolve common guest questions about hours, menu, and policies instantly." },
          { title: "Guest Communication Workflows", description: "Maintain consistent, on-brand communication across every guest interaction." },
        ],
      },
      {
        productSlug: "worksync",
        features: [
          { title: "Staff Coordination Systems", description: "Coordinate front-of-house and back-of-house teams across shifts." },
          { title: "Workflow Automation", description: "Streamline scheduling, shift swaps, and operational handoffs." },
          { title: "Scheduling Management", description: "Manage staff schedules with intelligent coordination and notifications." },
          { title: "Operational Communication Tools", description: "Keep teams aligned through automated updates and task routing." },
          { title: "Internal Task Coordination", description: "Route operational tasks to the right team without manager bottlenecks." },
        ],
      },
      {
        productSlug: "driveflow",
        features: [
          { title: "Delivery Coordination Support", description: "Coordinate delivery drivers, dispatch, and customer notifications." },
          { title: "Service Workflow Tracking", description: "Track service flow from order to fulfillment in real time." },
          { title: "Dispatch Communication Systems", description: "Keep delivery operations and customers in sync automatically." },
        ],
      },
    ],
    benefits: [
      "Reduce Missed Reservations",
      "Improve Guest Response Times",
      "Enhance Customer Engagement",
      "Support Peak-Hour Operations",
      "Improve Operational Coordination",
    ],
  },
  {
    slug: "utilities-services",
    name: "Utilities & Service Providers",
    description:
      "Manage high-volume customer interactions, automate service workflows, and improve coordination at scale.",
    headline: "AI Solutions for Utilities & Service-Based Operations",
    intro:
      "Cross Flows Synergy helps utilities and service providers manage high-volume customer interactions, automate communication workflows, streamline operational coordination, and improve customer experiences through intelligent AI-powered systems.",
    icon: Zap,
    accent: "from-[#f5a623] to-[#00d4ff]",
    productSlugs: ["smarttalk", "worksync"],
    useCaseSlugs: [
      "customer-support-automation",
      "billing-payment-assistance",
      "call-routing-prioritization",
      "after-hours-support",
      "workflow-automation",
      "operational-coordination",
    ],
    productFeatures: [
      {
        productSlug: "smarttalk",
        features: [
          { title: "Service Inquiry Handling", description: "Resolve service inquiries instantly with consistent, accurate information." },
          { title: "AI Customer Support", description: "Provide always-on customer support across voice and digital channels." },
          { title: "Billing & Payment Assistance", description: "Help customers access billing, make payments, and resolve account questions." },
          { title: "Outage Communication Support", description: "Communicate outages, ETAs, and updates across affected service areas." },
          { title: "Scheduling Assistance", description: "Help customers schedule service visits, installations, and follow-ups." },
          { title: "FAQ Automation", description: "Answer common service questions instantly and consistently." },
          { title: "Call Routing & Prioritization", description: "Triage calls by urgency, service type, and account context." },
          { title: "After-Hours Customer Support", description: "Stay accessible to customers outside business hours." },
          { title: "Dispatch Communication", description: "Coordinate field communication between dispatch, technicians, and customers." },
          { title: "Service Scheduling", description: "Coordinate service appointments at scale with intelligent scheduling." },
        ],
      },
      {
        productSlug: "worksync",
        features: [
          { title: "Workflow Automation", description: "Automate repetitive operational and service workflows." },
          { title: "Operational Coordination", description: "Coordinate teams, dispatch, and back-office operations centrally." },
          { title: "Internal Communication Systems", description: "Connect ops, support, and field teams through automated updates." },
          { title: "Task Routing Workflows", description: "Route operational tasks to the right team automatically." },
          { title: "Escalation Management", description: "Escalate urgent operational and customer issues quickly." },
          { title: "Reporting & Operational Visibility", description: "Surface operational performance, response times, and SLAs in real time." },
          { title: "Scheduling & Dispatch Workflows", description: "Coordinate scheduling and dispatch across high-volume operations." },
          { title: "Process Optimization Systems", description: "Identify operational inefficiencies and streamline workflows." },
        ],
      },
    ],
    benefits: [
      "Improve Customer Responsiveness",
      "Reduce Operational Workload",
      "Streamline Service Coordination",
      "Improve Workflow Visibility",
      "Support Customers 24/7",
      "Enhance Operational Efficiency",
      "Improve Service Reliability",
      "Scale Operations More Efficiently",
    ],
  },
  {
    slug: "schools-education",
    name: "Schools & Educational Institutions",
    description:
      "Improve student and parent communication, streamline admin workflows, and support academic operations.",
    headline: "AI Solutions for Schools, Educational Institutions & Learning Environments",
    intro:
      "Cross Flows Synergy helps schools and educational institutions improve communication, streamline administrative workflows, enhance student engagement, and support academic operations through intelligent AI-powered systems designed for modern learning environments.",
    icon: GraduationCap,
    accent: "from-[#9b6bff] to-[#3a8dff]",
    productSlugs: ["learnmate", "smarttalk", "worksync"],
    useCaseSlugs: [
      "customer-support-automation",
      "appointment-scheduling",
      "multilingual-communication",
      "workflow-automation",
      "customer-engagement",
      "operational-coordination",
    ],
    productFeatures: [
      {
        productSlug: "learnmate",
        features: [
          { title: "Student Inquiry Support", description: "Resolve student questions instantly across academic and administrative topics." },
          { title: "Enrollment & Admissions Assistance", description: "Automate inquiry handling, lead engagement, and applicant communication." },
          { title: "AI Learning Assistance", description: "Support learners with intelligent academic guidance and resource delivery." },
          { title: "Scheduling Coordination", description: "Coordinate orientations, sessions, and academic scheduling workflows." },
          { title: "Educational Workflow Automation", description: "Automate reminders, notifications, follow-ups, and academic communication." },
          { title: "Multilingual Student Support", description: "Communicate with students and parents in the language they prefer." },
          { title: "Academic Engagement Systems", description: "Maintain consistent engagement across the student lifecycle." },
          { title: "Learning Support Workflows", description: "Connect learners with the right resources and support, automatically." },
        ],
      },
      {
        productSlug: "smarttalk",
        features: [
          { title: "AI Receptionist Systems", description: "Professional 24/7 reception experience for prospective and current students." },
          { title: "Parent & Student Communication", description: "Keep parents and students informed with consistent, on-brand communication." },
          { title: "Information Request Handling", description: "Resolve information requests around programs, schedules, and policies." },
          { title: "Appointment Scheduling", description: "Coordinate meetings between students, parents, and academic staff." },
          { title: "FAQ Automation", description: "Answer frequently asked questions instantly and consistently." },
          { title: "After-Hours Communication Support", description: "Stay accessible to families outside business hours." },
          { title: "Event & Notification Communication", description: "Notify communities about events, closures, and important updates." },
          { title: "Call Routing & Prioritization", description: "Route calls by intent, urgency, and department." },
        ],
      },
      {
        productSlug: "worksync",
        features: [
          { title: "Administrative Workflow Automation", description: "Automate admin workflows across registrar, admissions, and academic operations." },
          { title: "Internal Staff Coordination", description: "Coordinate teachers, administrators, and operational teams." },
          { title: "Task Routing & Operational Workflows", description: "Route requests and operational tasks intelligently across departments." },
          { title: "Academic Reporting Systems", description: "Surface academic and operational reporting in real time." },
          { title: "Scheduling & Coordination Workflows", description: "Coordinate schedules across staff, students, and facilities." },
          { title: "Workflow Monitoring Systems", description: "Track operational and academic workflows centrally." },
          { title: "Communication Management Systems", description: "Centralize communication across stakeholders." },
          { title: "Process Optimization Support", description: "Identify inefficiencies and streamline academic operations." },
        ],
      },
    ],
    benefits: [
      "Improve Student & Parent Communication",
      "Reduce Administrative Workload",
      "Improve Accessibility",
      "Streamline Academic Operations",
      "Support Students 24/7",
      "Enhance Student Engagement",
      "Improve Operational Coordination",
      "Support Scalable Educational Operations",
    ],
  },
  {
    slug: "logistics-operations",
    name: "Logistics & Operations",
    description:
      "Streamline dispatch, automate workflows, and coordinate teams across modern operational environments.",
    headline: "AI Solutions for Logistics, Transportation & Operational Coordination",
    intro:
      "Cross Flows Synergy helps logistics providers, transportation companies, warehouses, and operational teams streamline communication, automate workflows, improve coordination, and optimize service efficiency through intelligent AI-powered systems designed for modern operational environments.",
    icon: Truck,
    accent: "from-[#3a8dff] to-[#00d4ff]",
    productSlugs: ["driveflow", "worksync", "smarttalk"],
    useCaseSlugs: [
      "operational-coordination",
      "workflow-automation",
      "call-routing-prioritization",
      "customer-support-automation",
      "integrations-connected-systems",
    ],
    productFeatures: [
      {
        productSlug: "driveflow",
        features: [
          { title: "Dispatch Coordination", description: "Automate scheduling, routing, and dispatch communication across teams." },
          { title: "Route Scheduling Support", description: "Coordinate routes and operational timelines more efficiently." },
          { title: "Operational Communication Systems", description: "Connect dispatch, drivers, and customers through one communication layer." },
          { title: "Workflow Monitoring", description: "Monitor operational progress and surface delays in real time." },
          { title: "Service Request Management", description: "Track service requests from intake through resolution." },
          { title: "Intelligent Escalation Workflows", description: "Automatically escalate operational issues to the right teams." },
          { title: "Real-Time Coordination Systems", description: "Keep field and back-office teams aligned in real time." },
          { title: "Delivery & Dispatch Visibility", description: "Give ops leaders end-to-end visibility into delivery and dispatch flow." },
        ],
      },
      {
        productSlug: "worksync",
        features: [
          { title: "Workflow Automation", description: "Automate repetitive operational and back-office workflows." },
          { title: "Task Coordination Systems", description: "Coordinate operational tasks across teams and locations." },
          { title: "Internal Operational Workflows", description: "Streamline internal handoffs across operations, ops support, and management." },
          { title: "Reporting & Operational Visibility", description: "Surface operational KPIs and bottlenecks in real time." },
          { title: "Scheduling & Workforce Coordination", description: "Coordinate workforce scheduling and assignments intelligently." },
          { title: "Operational Process Optimization", description: "Identify inefficiencies and optimize operational flow." },
          { title: "Internal Communication Systems", description: "Connect ops, dispatch, and field teams through automated updates." },
          { title: "Workflow Escalation Systems", description: "Escalate urgent operational issues automatically." },
        ],
      },
      {
        productSlug: "smarttalk",
        features: [
          { title: "Service Inquiry Handling", description: "Resolve customer inquiries about deliveries, schedules, and services." },
          { title: "AI Customer Support", description: "Provide always-on AI customer support for logistics customers." },
          { title: "Delivery Communication Workflows", description: "Communicate proactively about delivery status, ETAs, and exceptions." },
          { title: "Appointment & Scheduling Assistance", description: "Help customers schedule, modify, and confirm service windows." },
          { title: "FAQ Automation", description: "Answer common delivery and service questions instantly." },
          { title: "Call Routing & Prioritization", description: "Triage inbound calls by service type and urgency." },
          { title: "After-Hours Communication Support", description: "Stay accessible to customers and partners outside business hours." },
          { title: "Customer Engagement Systems", description: "Maintain consistent communication across the delivery lifecycle." },
        ],
      },
    ],
    benefits: [
      "Improve Operational Coordination",
      "Reduce Communication Delays",
      "Improve Workflow Visibility",
      "Enhance Service Efficiency",
      "Reduce Administrative Workload",
      "Support Real-Time Operations",
      "Improve Customer Communication",
      "Scale Operations Efficiently",
    ],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    description:
      "Modernize how financial institutions communicate, qualify, and operate — without disrupting existing systems.",
    headline: "AI Solutions for Financial Services Operations",
    intro:
      "Cross Flows Synergy partners with financial services organizations on tailored AI deployments around customer communication, intake, qualification, and operational coordination. Get in touch to scope a fit.",
    icon: Landmark,
    accent: "from-[#9b6bff] to-[#00d4ff]",
    productSlugs: ["smarttalk", "worksync"],
    useCaseSlugs: [
      "customer-support-automation",
      "lead-qualification-intake",
      "billing-payment-assistance",
      "workflow-automation",
    ],
    productFeatures: [],
    benefits: ["Tailored deployment scoping", "Compliance-aware engagements", "Talk to our team for a fit assessment"],
    cardOnly: true,
  },
  {
    slug: "insurance",
    name: "Insurance",
    description:
      "Streamline claims, policy inquiries, and policyholder communication with 24/7 AI assistance.",
    headline: "AI-Powered Insurance Operations",
    intro:
      "Cross Flows Synergy helps insurance providers enhance customer service, streamline claims and policy inquiries, and improve operational efficiency through intelligent AI-powered communication and workflow automation.",
    icon: ShieldCheck,
    accent: "from-[#00d4ff] to-[#7b6fff]",
    productSlugs: ["smarttalk", "worksync"],
    useCaseSlugs: [
      "customer-support-automation",
      "appointment-scheduling",
      "faq-automation",
      "workflow-automation",
    ],
    productFeatures: [
      {
        productSlug: "smarttalk",
        features: [
          { title: "Policy & Claims Inquiries", description: "Handle policy questions, claim status checks, and coverage inquiries instantly across voice and digital channels." },
          { title: "Customer Support", description: "Provide always-on policyholder assistance with consistent, on-brand responses." },
          { title: "Appointment Scheduling", description: "Coordinate consultations with agents and adjusters without manual back-and-forth." },
          { title: "FAQ Assistance", description: "Answer common policyholder questions instantly with up-to-date information." },
        ],
      },
      {
        productSlug: "worksync",
        features: [
          { title: "Claims Administration", description: "Automate claim intake, routing, status updates, and follow-up workflows end to end." },
          { title: "Agent Coordination", description: "Connect underwriters, adjusters, and customer service teams through one operational layer." },
          { title: "Internal Workflows", description: "Streamline approvals, document handling, and inter-department handoffs." },
          { title: "Process Automation", description: "Eliminate manual administrative tasks across the claims and policy lifecycle." },
        ],
      },
    ],
    benefits: [
      "65% Faster Customer Response",
      "Reduced Administrative Workload",
      "24/7 Policyholder Support",
      "Improved Claims Efficiency",
      "Better Agent Productivity",
    ],
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    description:
      "Resolve customer issues faster, reduce ticket backlog, and provide always-on AI support.",
    headline: "AI-Powered Telecommunications Operations",
    intro:
      "Cross Flows Synergy helps telecom providers improve customer engagement, reduce support workloads, and streamline service management through intelligent AI-powered communication and automation.",
    icon: Radio,
    accent: "from-[#00d4ff] to-[#7b6fff]",
    productSlugs: ["smarttalk", "worksync"],
    useCaseSlugs: [
      "customer-support-automation",
      "billing-payment-assistance",
      "call-routing-prioritization",
      "workflow-automation",
    ],
    productFeatures: [
      {
        productSlug: "smarttalk",
        features: [
          { title: "Customer Support", description: "Resolve service questions and account inquiries across voice and digital channels." },
          { title: "Billing Inquiries", description: "Answer billing questions, payment status, and plan details without staff involvement." },
          { title: "Service Requests", description: "Capture and triage new service, upgrade, and cancellation requests automatically." },
          { title: "Technical Assistance", description: "Walk customers through common troubleshooting steps before escalating." },
        ],
      },
      {
        productSlug: "worksync",
        features: [
          { title: "Ticket Management", description: "Generate, route, and track support tickets with full context end to end." },
          { title: "Escalation Workflows", description: "Auto-escalate outages and high-priority cases to the right teams." },
          { title: "Internal Communications", description: "Keep field, ops, and support teams aligned through automated updates." },
          { title: "Process Automation", description: "Streamline repetitive operational tasks across the service lifecycle." },
        ],
      },
    ],
    benefits: [
      "70% Faster Customer Resolution",
      "Reduced Support Workload",
      "24/7 Customer Assistance",
      "Improved Ticket Efficiency",
      "Better Team Coordination",
    ],
  },
  {
    slug: "municipalities-government",
    name: "Municipalities & Local Government",
    description:
      "Improve citizen engagement, automate service requests, and coordinate departments at scale.",
    headline: "AI-Powered Citizen Services",
    intro:
      "Cross Flows Synergy helps municipalities improve citizen engagement, streamline service requests, and enhance operational efficiency through intelligent AI-powered communication and workflow automation.",
    icon: Building2,
    accent: "from-[#00d4ff] to-[#7b6fff]",
    productSlugs: ["smarttalk", "worksync", "learnmate"],
    useCaseSlugs: [
      "customer-support-automation",
      "workflow-automation",
      "multilingual-communication",
      "faq-automation",
    ],
    productFeatures: [
      {
        productSlug: "smarttalk",
        features: [
          { title: "Resident Inquiries", description: "Handle citizen questions across phone, SMS, and web in plain language." },
          { title: "Service Requests", description: "Capture work orders, complaints, and reports with consistent context." },
          { title: "Permit Information", description: "Provide guidance on permits, licenses, and application requirements." },
          { title: "Community Information", description: "Surface information on events, programs, and local facilities on demand." },
        ],
      },
      {
        productSlug: "worksync",
        features: [
          { title: "Request Routing", description: "Auto-assign citizen requests to the correct department with full context." },
          { title: "Department Coordination", description: "Connect public works, permits, and resident services in one workflow layer." },
          { title: "Case Management", description: "Track resident cases from intake through resolution with full audit trail." },
          { title: "Workflow Automation", description: "Eliminate repetitive admin tasks across municipal operations." },
        ],
      },
      {
        productSlug: "learnmate",
        features: [
          { title: "Staff Training", description: "Onboard and upskill staff with AI-powered training guidance and resources." },
          { title: "Policy Management", description: "Centralize policy documents and surface the right guidance in context." },
          { title: "Knowledge Sharing", description: "Connect employees with current procedures and operational guidelines." },
          { title: "New Employee Onboarding", description: "Streamline orientation, training paths, and certification tracking." },
        ],
      },
    ],
    benefits: [
      "75% Faster Citizen Response",
      "Reduced Administrative Burden",
      "24/7 Resident Support",
      "Improved Departmental Coordination",
      "Better Staff Knowledge Access",
    ],
  },
];

export const getIndustry = (slug: IndustrySlug): Industry | undefined =>
  industries.find((i) => i.slug === slug);


// ─── industry detail extensions ───────────────────────────────────────
// Display-layer content used by the IndustryDetail page. Slugs match the
// industries[] entries above; lookup via getIndustryDetail(slug).

export interface IndustryStat {
  value: string;
  label: string;
  sublabel: string;
}

export interface IndustryProduct {
  productId: ProductSlug;
  productName: string;
  roleInIndustry: string;
  features: string[];
  metric: string;
  accentColor: string;
}

export interface WorkflowStep {
  ordinal: number;
  trigger: string;
  label: string;
  description: string;
}

export interface IndustryUseCase {
  icon: string;
  title: string;
  description: string;
}

export interface IndustryDetailExtension {
  heroTagline: string;
  heroAccentColor: string;
  heroSecondaryColor: string;
  stats: IndustryStat[];
  products: IndustryProduct[];
  workflow: WorkflowStep[];
  useCases: IndustryUseCase[];
}

export const industryDetailExtensions: Record<IndustrySlug, IndustryDetailExtension> = {
  "healthcare-clinics": {
    heroTagline: "AI SOLUTIONS FOR HEALTHCARE & CLINICS",
    heroAccentColor: "#00D4FF",
    heroSecondaryColor: "#7B6FF0",
    stats: [
      {
        value: "70%",
        label: "Faster Patient Response",
        sublabel: "→ Real-time AI communication"
      },
      {
        value: "35%",
        label: "Fewer No-Shows",
        sublabel: "→ Smart reminders & follow-ups"
      },
      {
        value: "50%",
        label: "Less Administrative Work",
        sublabel: "→ Automate repetitive tasks"
      },
      {
        value: "24/7",
        label: "Patient Support",
        sublabel: "→ Always-on AI assistance"
      },
      {
        value: "99.9%",
        label: "Service Availability",
        sublabel: "→ Reliable, always compliant"
      },
    ],
    products: [
      {
        productId: "smarttalk",
        productName: "SmartTalk™",
        roleInIndustry: "AI Voice & Patient Communication",
        features: [
          "Appointment Booking",
          "Automated Reminders",
          "After-Hours Support",
          "Call Overflow Handling"
        ],
        metric: "+ 60% Fewer Missed Calls",
        accentColor: "#00D4FF"
      },
      {
        productId: "worksync",
        productName: "WorkSync™",
        roleInIndustry: "Healthcare Workflow Automation",
        features: [
          "Staff Scheduling",
          "Request Routing",
          "Internal Communication",
          "Process Automation"
        ],
        metric: "+ 50% Less Admin Work",
        accentColor: "#F5A623"
      },
      {
        productId: "learnmate",
        productName: "LearnMate™",
        roleInIndustry: "Training & Knowledge Support",
        features: [
          "Staff Onboarding",
          "Instant Knowledge Access",
          "Training Assistance",
          "Learning Support"
        ],
        metric: "+ 40% Faster Onboarding",
        accentColor: "#7B6FF0"
      },
    ],
    workflow: [
      {
        ordinal: 1,
        trigger: "Patient Contacts Your Clinic",
        label: "Call or message via any channel",
        description: "Calls or messages your clinic via phone, SMS, or web."
      },
      {
        ordinal: 2,
        trigger: "SmartTalk™ Answers Instantly",
        label: "AI handles inquiry immediately",
        description: "A human-like AI agent answers, identifies the need, and routes appropriately."
      },
      {
        ordinal: 3,
        trigger: "Appointment Confirmed",
        label: "Patient gets confirmation with reminders",
        description: "Patient receives confirmation, reminders, and can cancel/reschedule automatically."
      },
      {
        ordinal: 4,
        trigger: "WorkSync™ Updates Staff",
        label: "Schedules, tasks & requests are updated",
        description: "Staff schedules, tasks & requests are updated in real-time."
      },
      {
        ordinal: 5,
        trigger: "LearnMate™ Supports Team",
        label: "Provides knowledge to keep team efficient",
        description: "Provides knowledge, training resources, and guidance to keep staff efficient."
      },
    ],
    useCases: [
      {
        icon: "CalendarCheck",
        title: "Appointment Scheduling",
        description: "Smart scheduling with AI-powered booking, rescheduling, and cancellation workflows."
      },
      {
        icon: "Bell",
        title: "Patient Follow-Ups",
        description: "Automated follow-up reminders and post-appointment patient communication."
      },
      {
        icon: "MessageCircle",
        title: "FAQ & Information Support",
        description: "Instant answers to patient inquiries about services, hours, and policies."
      },
      {
        icon: "Users",
        title: "Staff Coordination",
        description: "Operational team communication, task routing, and scheduling coordination."
      },
      {
        icon: "ClipboardList",
        title: "Internal Request Management",
        description: "Route and resolve internal staff requests, approvals, and operational tasks."
      },
      {
        icon: "GraduationCap",
        title: "New Staff Training",
        description: "Onboarding workflows and knowledge delivery for new healthcare team members."
      },
    ]
  },
  "consumer-services": {
    heroTagline: "AI SOLUTIONS FOR CONSUMER SERVICES",
    heroAccentColor: "#00D4FF",
    heroSecondaryColor: "#7B6FF0",
    stats: [
      {
        value: "70%",
        label: "Self-Service Containment",
        sublabel: "→ Routine requests resolved without a human agent"
      },
      {
        value: "3×",
        label: "Faster First Response",
        sublabel: "→ Sub-200ms voice latency on every inbound call"
      },
      {
        value: "24/7",
        label: "Always-On Coverage",
        sublabel: "→ Multilingual support across 40+ languages"
      },
      {
        value: "+45%",
        label: "CSAT Lift",
        sublabel: "→ Measured across 90 days of deployment"
      },
      {
        value: "99.9%",
        label: "Platform Uptime",
        sublabel: "→ SOC2 Type II infrastructure with regional failover"
      },
    ],
    products: [
      {
        productId: "smarttalk",
        productName: "SmartTalk™",
        roleInIndustry: "Voice-first customer service agent",
        features: [
          "Handles inbound calls in 40+ languages with sub-200ms latency",
          "Verifies identity via account number, DOB, and voiceprint matching",
          "Books, reschedules, and cancels appointments through calendar APIs",
          "Escalates to human agents with full conversation transcript and sentiment tags"
        ],
        metric: "+ 60% Fewer Missed Calls",
        accentColor: "#00D4FF"
      },
      {
        productId: "worksync",
        productName: "WorkSync™",
        roleInIndustry: "Back-office workflow orchestrator",
        features: [
          "Auto-creates tickets in Zendesk, Salesforce, and HubSpot from voice calls",
          "Routes refund and warranty requests based on policy rules and order value",
          "Syncs customer history across CRM, billing, and support tools in real time",
          "Triggers SMS and email follow-ups with branded templates and tracked delivery"
        ],
        metric: "+ 4 Hours Saved Per Agent Daily",
        accentColor: "#F5A623"
      },
      {
        productId: "driveflow",
        productName: "DriveFlow™",
        roleInIndustry: "Field service dispatch engine",
        features: [
          "Assigns service technicians by proximity, skill match, and SLA priority",
          "Sends customers live ETA updates and technician profiles via SMS",
          "Reroutes jobs dynamically when delays, traffic, or cancellations occur",
          "Captures proof-of-service photos, signatures, and parts used on mobile"
        ],
        metric: "+ 35% More Jobs Completed Per Day",
        accentColor: "#3A8DFF"
      },
    ],
    workflow: [
      {
        ordinal: 1,
        trigger: "Customer Calls In",
        label: "Inbound request hits the platform",
        description: "A customer dials the service line at 2 AM about a broken appliance and SmartTalk™ answers on the first ring."
      },
      {
        ordinal: 2,
        trigger: "SmartTalk™ Verifies & Diagnoses",
        label: "Identity confirmed, issue classified instantly",
        description: "The agent authenticates the caller, pulls warranty status from the CRM, and triages the issue against a troubleshooting library."
      },
      {
        ordinal: 3,
        trigger: "WorkSync™ Orchestrates",
        label: "Ticket created across all systems",
        description: "A service ticket is generated in Salesforce, warranty validated in the billing system, and the case is tagged with urgency and parts required."
      },
      {
        ordinal: 4,
        trigger: "DriveFlow™ Dispatches",
        label: "Technician routed with live ETA",
        description: "The best-fit technician is assigned by location and skill, and the customer receives an SMS with arrival time and technician profile."
      },
      {
        ordinal: 5,
        trigger: "Service Completed & Logged",
        label: "Closeout, survey, and analytics sync",
        description: "Proof-of-service is captured on mobile, the customer receives a CSAT survey, and outcome data flows back into the CRM for reporting."
      },
    ],
    useCases: [
      {
        icon: "Headphones",
        title: "24/7 Customer Care",
        description: "Resolve account questions, service inquiries, and complaints around the clock without staffing overnight call centers. Every interaction is logged and transcribed."
      },
      {
        icon: "CalendarCheck",
        title: "Appointment Booking",
        description: "Schedule installations, repairs, and consultations directly through voice — with automatic calendar sync and confirmation SMS sent to the customer."
      },
      {
        icon: "Truck",
        title: "Field Service Dispatch",
        description: "Match incoming jobs to the right technician by proximity, certification, and SLA. Customers receive live tracking links from booking to arrival."
      },
      {
        icon: "Receipt",
        title: "Billing & Payments",
        description: "Take secure PCI-compliant payments over the phone, explain charges line-by-line, and handle disputes with full audit trails for every transaction."
      },
      {
        icon: "AlertCircle",
        title: "Issue Troubleshooting",
        description: "Walk customers through guided diagnostics for common product issues before dispatching a technician, deflecting 40% of avoidable truck rolls."
      },
      {
        icon: "Star",
        title: "Loyalty & Retention",
        description: "Proactively reach out to at-risk customers, deliver renewal offers, and capture survey feedback through natural voice conversations at scale."
      },
    ]
  },
  "recruitment-staffing": {
    heroTagline: "AI SOLUTIONS FOR RECRUITMENT & STAFFING",
    heroAccentColor: "#00D4FF",
    heroSecondaryColor: "#7B6FF0",
    stats: [
      {
        value: "80%",
        label: "Faster Candidate Screening",
        sublabel: "→ AI voice interviews qualify applicants in under 7 minutes"
      },
      {
        value: "3×",
        label: "More Placements Per Recruiter",
        sublabel: "→ Automated outreach and scheduling free 22 hours weekly"
      },
      {
        value: "24/7",
        label: "Applicant Engagement",
        sublabel: "→ SmartTalk answers candidate questions across every timezone"
      },
      {
        value: "+65%",
        label: "Interview Show-Up Rate",
        sublabel: "→ Multi-channel reminders and rescheduling reduce no-shows"
      },
      {
        value: "40+",
        label: "Languages Supported",
        sublabel: "→ Screen global talent pools without translator overhead"
      },
    ],
    products: [
      {
        productId: "smarttalk",
        productName: "SmartTalk™",
        roleInIndustry: "Voice-first candidate screening and outreach",
        features: [
          "Conducts structured pre-screen interviews with 12-question rubrics in 40+ languages",
          "Books, confirms, and reschedules recruiter interviews directly inside ATS calendars",
          "Calls passive candidates from sourced lists at scale with personalized scripts",
          "Captures availability, salary expectations, and work authorization in real time"
        ],
        metric: "+ 80% Faster Time-to-Shortlist",
        accentColor: "#00D4FF"
      },
      {
        productId: "worksync",
        productName: "WorkSync™",
        roleInIndustry: "End-to-end requisition and onboarding orchestration",
        features: [
          "Syncs candidate data bi-directionally with Bullhorn, Greenhouse, Workday, and Salesforce",
          "Triggers offer letters, background checks, and I-9 verifications from a single workflow",
          "Routes hot candidates to the right recruiter based on skills, geography, and load",
          "Auto-generates compliance audit trails for EEOC, GDPR, and SOC2 reporting"
        ],
        metric: "+ 3× Recruiter Productivity",
        accentColor: "#F5A623"
      },
      {
        productId: "learnmate",
        productName: "LearnMate™",
        roleInIndustry: "Pre-placement training and credential prep",
        features: [
          "Delivers role-specific onboarding modules before day-one with proficiency scoring",
          "Simulates client interviews and technical assessments with adaptive difficulty",
          "Tracks certification expirations across temp and contract workforce rosters",
          "Issues verifiable digital badges synced to candidate ATS profiles automatically"
        ],
        metric: "+ 45% Higher First-Week Retention",
        accentColor: "#7B6FF0"
      },
    ],
    workflow: [
      {
        ordinal: 1,
        trigger: "Candidate Applies",
        label: "Application hits ATS or careers page",
        description: "WorkSync ingests the application, parses the resume, and routes it to SmartTalk for outbound screening within 90 seconds."
      },
      {
        ordinal: 2,
        trigger: "SmartTalk™ Screens",
        label: "AI voice agent runs structured interview",
        description: "SmartTalk calls the candidate, runs a role-specific rubric in their preferred language, and scores answers against requisition criteria."
      },
      {
        ordinal: 3,
        trigger: "WorkSync™ Shortlists",
        label: "Qualified profiles routed to recruiter",
        description: "Top-scoring candidates are auto-assigned to the right recruiter and pushed into the ATS pipeline with full transcripts attached."
      },
      {
        ordinal: 4,
        trigger: "LearnMate™ Prepares",
        label: "Pre-interview coaching and assessments",
        description: "Shortlisted candidates receive adaptive prep modules and skills tests, with results visible to the recruiter before the client interview."
      },
      {
        ordinal: 5,
        trigger: "Placement & Onboard",
        label: "Offer, compliance, and day-one ready",
        description: "WorkSync triggers the offer, background check, and onboarding paperwork while LearnMate delivers pre-placement training automatically."
      },
    ],
    useCases: [
      {
        icon: "PhoneCall",
        title: "Candidate Screening",
        description: "SmartTalk runs structured voice interviews 24/7, scoring candidates against requisition rubrics and routing qualified profiles to recruiters in minutes."
      },
      {
        icon: "CalendarCheck",
        title: "Interview Scheduling",
        description: "AI coordinates calendars across candidates, recruiters, and hiring managers, handling reschedules and confirmations without human touch."
      },
      {
        icon: "UserCheck",
        title: "Identity & Right-to-Work",
        description: "Automated verification of work authorization, ID documents, and reference checks before candidates reach the recruiter shortlist."
      },
      {
        icon: "GraduationCap",
        title: "Pre-Placement Training",
        description: "LearnMate delivers role-specific onboarding and skills certification before day one, raising first-week retention and client satisfaction."
      },
      {
        icon: "Send",
        title: "Passive Outreach",
        description: "SmartTalk dials sourced lists with personalized pitches, qualifies interest, and books warm calls directly into recruiter calendars."
      },
      {
        icon: "ClipboardList",
        title: "Compliance Reporting",
        description: "WorkSync auto-generates EEOC, GDPR, and SOC2 audit trails from every candidate interaction, eliminating manual compliance overhead."
      },
    ]
  },
  "real-estate-property": {
    heroTagline: "AI SOLUTIONS FOR REAL ESTATE & PROPERTY MANAGEMENT",
    heroAccentColor: "#00D4FF",
    heroSecondaryColor: "#7B6FF0",
    stats: [
      {
        value: "85%",
        label: "Inquiries Resolved Without Agent",
        sublabel: "→ SmartTalk handles tour bookings, rent questions, and lease renewals end-to-end"
      },
      {
        value: "3×",
        label: "Faster Lead-to-Tour Time",
        sublabel: "→ Qualified prospects scheduled in under 90 seconds from first contact"
      },
      {
        value: "24/7",
        label: "After-Hours Maintenance Triage",
        sublabel: "→ Tenant issues routed to on-call vendors any time of day"
      },
      {
        value: "+62%",
        label: "Tour-to-Lease Conversion Lift",
        sublabel: "→ AI-qualified leads convert at nearly double the industry average"
      },
      {
        value: "99.9%",
        label: "Tenant Hotline Uptime",
        sublabel: "→ Multi-region failover keeps emergency lines live during outages"
      },
    ],
    products: [
      {
        productId: "smarttalk",
        productName: "SmartTalk™",
        roleInIndustry: "Voice front door for prospects and tenants",
        features: [
          "Books property tours into Yardi, AppFolio, and Buildium calendars in real time",
          "Qualifies leads on budget, move-in date, pets, and credit before routing",
          "Answers tenant rent balance, lease end date, and amenity questions 24/7",
          "Captures maintenance requests with photo links sent via SMS follow-up"
        ],
        metric: "+ 85% of Tenant Calls Resolved Without a Human",
        accentColor: "#00D4FF"
      },
      {
        productId: "worksync",
        productName: "WorkSync™",
        roleInIndustry: "Maintenance and leasing workflow engine",
        features: [
          "Auto-creates work orders in your PMS with priority scoring by issue type",
          "Dispatches vendors based on trade, geography, and historical response time",
          "Syncs lease applications, background checks, and e-signatures across systems",
          "Triggers rent reminder sequences across SMS, email, and outbound voice"
        ],
        metric: "+ 70% Reduction in Manual Work Order Handling",
        accentColor: "#F5A623"
      },
      {
        productId: "driveflow",
        productName: "DriveFlow™",
        roleInIndustry: "Field tech and showing agent dispatch",
        features: [
          "Routes maintenance techs across multi-property portfolios with live ETA updates",
          "Coordinates self-guided tour access codes synced to prospect arrival windows",
          "Optimizes turnover crew routing between vacant units on move-out day",
          "Tracks vendor SLA compliance with geofenced check-in and time-on-site logs"
        ],
        metric: "+ 40% More Service Stops Completed Per Day",
        accentColor: "#3A8DFF"
      },
    ],
    workflow: [
      {
        ordinal: 1,
        trigger: "Prospect Calls Listing",
        label: "SmartTalk answers within one ring",
        description: "AI greets the caller, identifies the property of interest, and answers pricing and availability questions instantly."
      },
      {
        ordinal: 2,
        trigger: "Lead Qualified Live",
        label: "Budget, timing, and criteria captured",
        description: "SmartTalk verifies move-in date, household size, pet status, and income range, then scores the lead for fit."
      },
      {
        ordinal: 3,
        trigger: "Tour Booked Automatically",
        label: "Calendar slot reserved in PMS",
        description: "The system writes the tour into the leasing agent's calendar and sends the prospect a confirmation with directions."
      },
      {
        ordinal: 4,
        trigger: "WorkSync Activates Pipeline",
        label: "Application, screening, and lease packet sent",
        description: "After the tour, WorkSync triggers the application link, runs background and credit checks, and prepares the lease."
      },
      {
        ordinal: 5,
        trigger: "DriveFlow Coordinates Move-In",
        label: "Turnover crew and keys dispatched",
        description: "DriveFlow routes cleaning, inspection, and key handoff so the unit is ready the moment the lease is signed."
      },
    ],
    useCases: [
      {
        icon: "CalendarCheck",
        title: "Tour Scheduling",
        description: "Prospects book in-person or self-guided tours through voice or SMS, with availability synced live to leasing calendars across the portfolio."
      },
      {
        icon: "Wrench",
        title: "Maintenance Triage",
        description: "Tenants describe issues by voice; the AI categorizes urgency, captures photos, and opens a work order with the correct trade pre-assigned."
      },
      {
        icon: "CreditCard",
        title: "Rent Collection",
        description: "Outbound voice and SMS reminders confirm balances, accept payments, and negotiate payment plans without involving the property manager."
      },
      {
        icon: "UserCheck",
        title: "Applicant Screening",
        description: "AI walks applicants through income verification, ID upload, and reference checks, flagging exceptions for human review only when needed."
      },
      {
        icon: "KeyRound",
        title: "Lease Renewals",
        description: "SmartTalk reaches out 90 days before expiration, negotiates renewal terms within preset bands, and e-signs the addendum."
      },
      {
        icon: "Route",
        title: "Field Dispatch",
        description: "DriveFlow routes maintenance techs and showing agents across multi-property routes, minimizing windshield time and missed appointments."
      },
    ]
  },
  "restaurants-hospitality": {
    heroTagline: "AI SOLUTIONS FOR RESTAURANTS & HOSPITALITY",
    heroAccentColor: "#00D4FF",
    heroSecondaryColor: "#7B6FF0",
    stats: [
      {
        value: "85%",
        label: "Reservations Handled by AI",
        sublabel: "→ Booking, modification, and cancellation requests fully automated across phone and web channels"
      },
      {
        value: "3×",
        label: "Faster Drive-Thru Throughput",
        sublabel: "→ Voice AI processes orders in under 90 seconds with 98% accuracy across menu items"
      },
      {
        value: "24/7",
        label: "Front-Desk Coverage",
        sublabel: "→ Continuous guest support for inquiries, room service, and concierge requests without staffing gaps"
      },
      {
        value: "+42%",
        label: "Off-Hours Revenue Recovery",
        sublabel: "→ Bookings and orders captured outside business hours that previously went to voicemail"
      },
      {
        value: "60%",
        label: "Lower Order Error Rate",
        sublabel: "→ AI confirmation and POS integration eliminate manual entry mistakes during peak service"
      },
    ],
    products: [
      {
        productId: "smarttalk",
        productName: "SmartTalk™",
        roleInIndustry: "Guest-facing voice and reservation agent",
        features: [
          "Handles reservations, modifications, and waitlist signups across 40+ languages with OpenTable and Resy sync",
          "Answers menu, allergen, and hours questions with live POS and inventory awareness",
          "Routes urgent requests (special events, large parties, complaints) to managers with full context",
          "Confirms bookings via SMS and follows up automatically to reduce no-shows by 35%"
        ],
        metric: "+ 85% Reservations Automated",
        accentColor: "#00D4FF"
      },
      {
        productId: "worksync",
        productName: "WorkSync™",
        roleInIndustry: "Back-of-house operations orchestrator",
        features: [
          "Auto-schedules shifts based on forecasted covers, weather, and historical demand patterns",
          "Tracks inventory depletion in real time and triggers supplier reorders before 86'd items hit the menu",
          "Coordinates housekeeping, maintenance, and F&B tickets across property management systems",
          "Generates compliance-ready logs for food safety, temperature checks, and labor regulations"
        ],
        metric: "+ 28% Labor Cost Reduction",
        accentColor: "#F5A623"
      },
      {
        productId: "driveflow",
        productName: "DriveFlow™",
        roleInIndustry: "Drive-thru and delivery dispatch engine",
        features: [
          "Takes drive-thru orders in natural conversation with 98% accuracy across accents and menu variants",
          "Optimizes delivery routing for in-house drivers and third-party platforms in a single dispatch view",
          "Suggests upsells and combos in real time based on order context and current promotions",
          "Syncs with kitchen display systems to sequence orders by prep time and pickup window"
        ],
        metric: "+ 3× Drive-Thru Throughput",
        accentColor: "#3A8DFF"
      },
    ],
    workflow: [
      {
        ordinal: 1,
        trigger: "Guest Calls or Messages",
        label: "SmartTalk answers across voice and chat",
        description: "A guest dials the restaurant or hotel and SmartTalk picks up instantly in their preferred language, identifying intent within the first sentence."
      },
      {
        ordinal: 2,
        trigger: "Reservation or Order Captured",
        label: "Live POS and PMS integration syncs data",
        description: "SmartTalk checks real-time availability against the booking system or POS, confirms the details, and locks in the reservation, room, or order."
      },
      {
        ordinal: 3,
        trigger: "WorkSync Prepares Operations",
        label: "Staffing, inventory, and prep auto-adjust",
        description: "WorkSync forecasts the impact on covers and inventory, adjusts shift schedules if needed, and pushes prep instructions to the kitchen and housekeeping teams."
      },
      {
        ordinal: 4,
        trigger: "DriveFlow Routes Fulfillment",
        label: "Drive-thru, delivery, and pickup orchestrated",
        description: "For takeout and delivery, DriveFlow sequences orders to the kitchen by prep time and dispatches the optimal driver or curbside slot."
      },
      {
        ordinal: 5,
        trigger: "Post-Visit Follow-Up",
        label: "Automated review requests and loyalty triggers",
        description: "After the visit, SmartTalk sends a personalized thank-you with a review link and loyalty offer, then logs guest preferences for the next interaction."
      },
    ],
    useCases: [
      {
        icon: "CalendarCheck",
        title: "Reservations Management",
        description: "AI handles bookings, waitlists, and modifications across phone, web, and chat with live table-availability sync. Confirms via SMS and reduces no-shows with automated reminders."
      },
      {
        icon: "ShoppingCart",
        title: "Drive-Thru Ordering",
        description: "Voice AI takes orders in natural conversation at the speaker box, confirms items on the customer display, and pushes directly to the kitchen display system. Handles upsells and combo suggestions contextually."
      },
      {
        icon: "Truck",
        title: "Delivery Dispatch",
        description: "Coordinates in-house drivers and third-party platforms from a single console, optimizing routes by traffic and order readiness. Reduces late deliveries by 45% during peak hours."
      },
      {
        icon: "Headphones",
        title: "Concierge & Room Service",
        description: "24/7 guest support for room service, amenity requests, and local recommendations in 40+ languages. Routes urgent items to on-shift staff with full context."
      },
      {
        icon: "ClipboardList",
        title: "Shift Scheduling",
        description: "Auto-generates rosters based on forecasted demand, weather, and individual availability constraints. Notifies staff of changes and tracks compliance with labor laws."
      },
      {
        icon: "Star",
        title: "Review & Loyalty Follow-Up",
        description: "Sends personalized post-visit messages with review links and tailored loyalty offers within 30 minutes of departure. Flags negative sentiment to managers for immediate recovery."
      },
    ]
  },
  "utilities-services": {
    heroTagline: "AI SOLUTIONS FOR UTILITIES & SERVICE PROVIDERS",
    heroAccentColor: "#00D4FF",
    heroSecondaryColor: "#7B6FF0",
    stats: [
      {
        value: "75%",
        label: "Outage Calls Deflected",
        sublabel: "→ Automated triage during peak storm and grid events"
      },
      {
        value: "24/7",
        label: "Always-On Service Line",
        sublabel: "→ No hold queues for billing, outages, or meter issues"
      },
      {
        value: "3×",
        label: "Faster Field Dispatch",
        sublabel: "→ Crews routed and briefed before they leave the depot"
      },
      {
        value: "+55%",
        label: "First-Call Resolution",
        sublabel: "→ Issues resolved without escalation to live agents"
      },
      {
        value: "99.9%",
        label: "Platform Uptime SLA",
        sublabel: "→ Resilient infrastructure for mission-critical operations"
      },
    ],
    products: [
      {
        productId: "smarttalk",
        productName: "SmartTalk™",
        roleInIndustry: "Customer-facing voice and service line",
        features: [
          "Real-time outage status lookups by address, account, or meter ID",
          "Automated billing inquiries, payment plans, and balance disclosures",
          "Multilingual support across 40+ languages for diverse service territories",
          "Storm-mode surge handling with zero hold times during mass events"
        ],
        metric: "+ 75% Fewer Calls Reaching Live Agents",
        accentColor: "#00D4FF"
      },
      {
        productId: "worksync",
        productName: "WorkSync™",
        roleInIndustry: "Field operations and crew dispatch engine",
        features: [
          "Auto-routes service tickets to the nearest qualified crew with GPS context",
          "Syncs with SCADA, GIS, and CIS systems for live grid awareness",
          "Generates compliance-ready work orders and safety briefs on demand",
          "Tracks SLA windows and escalates jobs at risk of breaching deadlines"
        ],
        metric: "+ 3× Faster Crew Dispatch Cycles",
        accentColor: "#F5A623"
      },
    ],
    workflow: [
      {
        ordinal: 1,
        trigger: "Customer Reports Outage",
        label: "Inbound call hits SmartTalk first",
        description: "SmartTalk™ answers instantly, verifies the account, and cross-references the address against live outage maps."
      },
      {
        ordinal: 2,
        trigger: "SmartTalk™ Triages the Issue",
        label: "AI classifies severity and service type",
        description: "The system determines whether it's a known outage, a single-premise fault, a billing dispute, or a meter anomaly."
      },
      {
        ordinal: 3,
        trigger: "WorkSync™ Generates Work Order",
        label: "Ticket created with full grid context",
        description: "WorkSync™ builds a structured work order enriched with GIS data, customer history, and safety prerequisites."
      },
      {
        ordinal: 4,
        trigger: "Crew Dispatched & Briefed",
        label: "Nearest qualified team routed automatically",
        description: "The closest field crew receives the job, route, and pre-job brief on their mobile device within seconds."
      },
      {
        ordinal: 5,
        trigger: "Resolution & Proactive Follow-Up",
        label: "Customer notified, ticket closed, SLA logged",
        description: "SmartTalk™ calls the customer to confirm restoration while WorkSync™ logs compliance data and SLA metrics."
      },
    ],
    useCases: [
      {
        icon: "AlertCircle",
        title: "Outage Reporting",
        description: "Customers report and check outage status through natural voice conversation, with automatic cross-referencing against live grid telemetry."
      },
      {
        icon: "Receipt",
        title: "Billing & Payments",
        description: "Handles balance inquiries, payment processing, and custom payment plan setup without routing to a live agent."
      },
      {
        icon: "Truck",
        title: "Field Crew Dispatch",
        description: "Automatically assigns and routes the nearest qualified technician based on skill, location, and SLA priority."
      },
      {
        icon: "Activity",
        title: "Meter Diagnostics",
        description: "Walks customers through self-service meter checks and flags anomalies for remote diagnostics before sending a truck."
      },
      {
        icon: "Bell",
        title: "Service Notifications",
        description: "Proactively notifies affected customers about planned maintenance, restoration windows, and storm response updates."
      },
      {
        icon: "ShieldCheck",
        title: "Compliance Logging",
        description: "Captures every customer interaction and field action with audit-ready records for regulatory and safety compliance."
      },
    ]
  },
  "schools-education": {
    heroTagline: "AI SOLUTIONS FOR SCHOOLS & EDUCATIONAL INSTITUTIONS",
    heroAccentColor: "#00D4FF",
    heroSecondaryColor: "#7B6FF0",
    stats: [
      {
        value: "85%",
        label: "Admissions Inquiries Auto-Resolved",
        sublabel: "→ AI handles enrollment, fees, and program questions across phone, WhatsApp, and web chat"
      },
      {
        value: "3×",
        label: "Faster Application Processing",
        sublabel: "→ Automated document verification and lead qualification cut admissions cycles from weeks to days"
      },
      {
        value: "24/7",
        label: "Multilingual Student Support",
        sublabel: "→ Parents and students get instant answers in 40+ languages, including after-hours and weekends"
      },
      {
        value: "+62%",
        label: "Exam Readiness Scores",
        sublabel: "→ LearnMate adaptive simulators lift mock-test performance for board, SAT, and competitive exams"
      },
      {
        value: "40hrs",
        label: "Saved Per Week Per Coordinator",
        sublabel: "→ WorkSync automates fee reminders, attendance follow-ups, and parent-teacher scheduling"
      },
    ],
    products: [
      {
        productId: "learnmate",
        productName: "LearnMate™",
        roleInIndustry: "Adaptive tutor and exam simulator",
        features: [
          "Personalized study paths that adapt to each student's pace, weak topics, and learning style across K-12 and competitive exam syllabi",
          "Voice-based mock exam simulator for SAT, IELTS, GRE, NEET, and board exams with real-time pronunciation and reasoning feedback",
          "Auto-generated practice sets aligned to CBSE, IB, Cambridge, and state curricula with step-by-step explanations",
          "Teacher dashboard tracking concept mastery, time-on-task, and predicted exam performance per student"
        ],
        metric: "+ 62% Higher Mock Exam Scores",
        accentColor: "#7B6FF0"
      },
      {
        productId: "smarttalk",
        productName: "SmartTalk™",
        roleInIndustry: "Admissions and parent support agent",
        features: [
          "Handles inbound admissions calls with curriculum, fee structure, and campus tour scheduling in 40+ languages",
          "Qualifies prospective parent leads and books counsellor appointments directly into the institution's CRM",
          "Sends automated voice and WhatsApp reminders for fee deadlines, exam schedules, and PTA meetings",
          "Resolves transcript, certificate, and document requests with identity verification and registrar handoff"
        ],
        metric: "+ 85% Inquiries Resolved Without Staff",
        accentColor: "#00D4FF"
      },
      {
        productId: "worksync",
        productName: "WorkSync™",
        roleInIndustry: "Operations and faculty coordination engine",
        features: [
          "Automates attendance escalation, parent notifications, and re-engagement workflows for absent students",
          "Coordinates timetable changes, substitute teacher assignments, and exam hall scheduling in real time",
          "Streamlines fee collection, scholarship workflows, and finance reconciliation with auto-generated receipts",
          "Routes faculty hiring, onboarding, and credential verification across departments with audit-ready logs"
        ],
        metric: "+ 40 Hours Saved Per Coordinator Weekly",
        accentColor: "#F5A623"
      },
    ],
    workflow: [
      {
        ordinal: 1,
        trigger: "Parent Inquiry Arrives",
        label: "Multichannel admissions outreach captured",
        description: "A parent calls, WhatsApps, or fills the website form asking about Grade 9 admissions and fee structure."
      },
      {
        ordinal: 2,
        trigger: "SmartTalk™ Qualifies Lead",
        label: "AI agent answers and screens prospect",
        description: "SmartTalk responds instantly in the parent's language, shares curriculum details, qualifies the student, and books a campus tour."
      },
      {
        ordinal: 3,
        trigger: "WorkSync™ Orchestrates Enrollment",
        label: "Documents, fees, and onboarding automated",
        description: "WorkSync collects transcripts, verifies records, generates the fee invoice, and assigns the student to a class and homeroom teacher."
      },
      {
        ordinal: 4,
        trigger: "LearnMate™ Onboards Student",
        label: "Personalized diagnostic and study plan",
        description: "LearnMate runs a diagnostic assessment, identifies skill gaps, and builds a personalized study and exam-prep roadmap for the student."
      },
      {
        ordinal: 5,
        trigger: "Ongoing Engagement Loop",
        label: "Progress reports and parent updates flow",
        description: "WorkSync sends weekly progress digests to parents and SmartTalk handles follow-up questions, while LearnMate adapts coursework continuously."
      },
    ],
    useCases: [
      {
        icon: "GraduationCap",
        title: "Admissions Automation",
        description: "AI handles inbound admissions inquiries end-to-end — answering curriculum and fee questions, qualifying prospects, and scheduling counsellor calls or campus tours without human intervention."
      },
      {
        icon: "BookOpen",
        title: "Exam Simulator",
        description: "Voice-driven mock exams for SAT, IELTS, board, and competitive tests deliver instant scoring, reasoning feedback, and targeted revision plans tailored to each student's weak areas."
      },
      {
        icon: "UserCheck",
        title: "Attendance Follow-Up",
        description: "Automatically detects absent students, calls or messages parents within minutes, and logs the reason while escalating chronic cases to class teachers and counsellors."
      },
      {
        icon: "CreditCard",
        title: "Fee Collection",
        description: "Sends multilingual voice and WhatsApp fee reminders, processes payments, generates receipts, and reconciles ledgers automatically with the institution's finance system."
      },
      {
        icon: "CalendarCheck",
        title: "Parent-Teacher Scheduling",
        description: "Coordinates PTA meetings, one-on-one teacher slots, and rescheduling requests across hundreds of parents in parallel, syncing to faculty calendars in real time."
      },
      {
        icon: "FileText",
        title: "Transcript Requests",
        description: "Authenticates alumni and current students, processes transcript, certificate, and verification requests, and hands off to the registrar with full audit trails."
      },
    ]
  },
  "logistics-operations": {
    heroTagline: "AI SOLUTIONS FOR LOGISTICS & OPERATIONS",
    heroAccentColor: "#00D4FF",
    heroSecondaryColor: "#7B6FF0",
    stats: [
      {
        value: "65%",
        label: "Faster Dispatch Cycles",
        sublabel: "→ AI-routed loads from booking to driver assignment in under 90 seconds"
      },
      {
        value: "3.2×",
        label: "Higher Load Throughput",
        sublabel: "→ Autonomous voice intake handles 3.2× more shipment calls per shift"
      },
      {
        value: "24/7",
        label: "Live Tracking Coverage",
        sublabel: "→ Always-on shipment status, ETA, and exception alerts across every lane"
      },
      {
        value: "+42%",
        label: "On-Time Delivery Rate",
        sublabel: "→ Predictive routing and proactive driver coordination lift OTD performance"
      },
      {
        value: "99.8%",
        label: "POD Capture Accuracy",
        sublabel: "→ Automated proof-of-delivery verification across photo, signature, and geo-stamp"
      },
    ],
    products: [
      {
        productId: "driveflow",
        productName: "DriveFlow™",
        roleInIndustry: "Autonomous dispatch and fleet orchestration",
        features: [
          "Auto-assigns loads based on driver HOS, lane familiarity, and equipment match",
          "Real-time ETA recalculation using live traffic, weather, and dock-door wait data",
          "Voice-first driver check-ins with hands-free pickup, delivery, and exception logging",
          "Detention and demurrage tracking with automated accessorial billing triggers"
        ],
        metric: "+ 65% Faster Load Assignment",
        accentColor: "#3A8DFF"
      },
      {
        productId: "worksync",
        productName: "WorkSync™",
        roleInIndustry: "Warehouse and back-office workflow automation",
        features: [
          "Auto-syncs BOL, POD, and rate confirmations across TMS, WMS, and ERP systems",
          "Triggers cross-dock and slot-assignment workflows from inbound ASN data",
          "Reconciles carrier invoices against tariff rules with 4-decimal accuracy",
          "Routes claims, damages, and OS&D exceptions to the right ops owner in under 5 minutes"
        ],
        metric: "+ 78% Reduction in Manual Data Entry",
        accentColor: "#F5A623"
      },
      {
        productId: "smarttalk",
        productName: "SmartTalk™",
        roleInIndustry: "Voice intake for shippers and carriers",
        features: [
          "Handles inbound load tenders, rate quotes, and tracking calls in 40+ languages",
          "Authenticates carriers via MC number, DOT, and SCAC before quoting",
          "Books appointments at warehouses and DCs with live dock-schedule sync",
          "Escalates high-value freight and HAZMAT calls to specialist agents with full context"
        ],
        metric: "+ 3.2× More Calls Handled per Shift",
        accentColor: "#00D4FF"
      },
    ],
    workflow: [
      {
        ordinal: 1,
        trigger: "SmartTalk™ Receives Load Tender",
        label: "Carrier or shipper calls in a load",
        description: "SmartTalk™ authenticates the caller, captures pickup and delivery details, and validates rates against current lane pricing."
      },
      {
        ordinal: 2,
        trigger: "WorkSync™ Builds the Shipment",
        label: "Auto-creates BOL and tender record",
        description: "WorkSync™ generates the BOL, syncs the shipment into the TMS, and pre-loads compliance checks for HAZMAT, customs, and accessorials."
      },
      {
        ordinal: 3,
        trigger: "DriveFlow™ Dispatches the Driver",
        label: "Optimal driver matched and routed",
        description: "DriveFlow™ assigns the load based on HOS, equipment, and lane preference, then pushes the route and dock appointment to the driver's device."
      },
      {
        ordinal: 4,
        trigger: "Live Exception Handling",
        label: "Detention, reroutes, and delays managed",
        description: "DriveFlow™ and SmartTalk™ jointly handle weather reroutes, dock delays, and detention claims with automated shipper notifications."
      },
      {
        ordinal: 5,
        trigger: "WorkSync™ Closes the Load",
        label: "POD captured and invoice settled",
        description: "WorkSync™ verifies proof-of-delivery, reconciles accessorials, and releases the carrier invoice for same-day settlement."
      },
    ],
    useCases: [
      {
        icon: "Truck",
        title: "Load Dispatch",
        description: "Automatically match loads to drivers using HOS rules, equipment type, and historical lane performance — no dispatcher intervention required."
      },
      {
        icon: "Route",
        title: "Dynamic Routing",
        description: "Recalculate routes in real time using traffic, weather, and dock-door availability to protect on-time delivery commitments."
      },
      {
        icon: "PhoneCall",
        title: "Carrier Intake",
        description: "Handle inbound carrier calls for load tenders, rate quotes, and check calls 24/7 with full TMS integration and authentication."
      },
      {
        icon: "Package",
        title: "Warehouse Slotting",
        description: "Trigger cross-dock assignments, slot allocation, and pick-path optimization the moment an ASN hits the warehouse."
      },
      {
        icon: "Receipt",
        title: "Freight Audit",
        description: "Reconcile carrier invoices against contracted tariffs and accessorials, flagging variances before payment release."
      },
      {
        icon: "AlertCircle",
        title: "Exception Management",
        description: "Detect OS&D, damages, and detention events in real time and route them to the right ops owner with full shipment context attached."
      },
    ]
  },
  "financial-services": {
    heroTagline: "AI SOLUTIONS FOR FINANCIAL SERVICES",
    heroAccentColor: "#00D4FF",
    heroSecondaryColor: "#7B6FF0",
    stats: [
      {
        value: "85%",
        label: "Containment Rate",
        sublabel: "→ Routine balance, transfer, and card requests resolved without an agent."
      },
      {
        value: "3×",
        label: "Faster KYC Onboarding",
        sublabel: "→ Identity capture and verification completed in under four minutes."
      },
      {
        value: "24/7",
        label: "Multilingual Coverage",
        sublabel: "→ Voice support in 40+ languages across retail and commercial banking."
      },
      {
        value: "99.9%",
        label: "Platform Uptime",
        sublabel: "→ SOC 2 Type II infrastructure with active-active failover."
      },
      {
        value: "+62%",
        label: "Fraud Catch Rate",
        sublabel: "→ Behavioral and voice biometrics flag suspicious activity in real time."
      },
    ],
    products: [
      {
        productId: "smarttalk",
        productName: "SmartTalk™",
        roleInIndustry: "Front line for member servicing",
        features: [
          "Voice biometric authentication in under 6 seconds before account access",
          "Real-time fraud disposition with card freeze, dispute, and reissue flows",
          "PCI-DSS compliant payment capture with tokenized card-on-file handling",
          "Live agent handoff with full transcript, intent, and risk score context"
        ],
        metric: "+ 85% Self-Service Resolution",
        accentColor: "#00D4FF"
      },
      {
        productId: "worksync",
        productName: "WorkSync™",
        roleInIndustry: "Back-office automation for operations teams",
        features: [
          "Automated KYC and AML document review with audit-ready exception queues",
          "Loan origination workflows that pull from core banking, bureaus, and CRM",
          "SLA-driven case routing with regulator-mapped escalation paths",
          "Reconciliation engine that matches ledger, payments, and treasury entries nightly"
        ],
        metric: "+ 70% Reduction in Manual Casework",
        accentColor: "#F5A623"
      },
    ],
    workflow: [
      {
        ordinal: 1,
        trigger: "Customer Calls the Bank",
        label: "Inbound voice authenticated by biometrics",
        description: "SmartTalk™ greets the caller, captures intent, and verifies identity with voiceprint plus knowledge-based factors in seconds."
      },
      {
        ordinal: 2,
        trigger: "SmartTalk™ Resolves or Routes",
        label: "Intent classified, risk scored, action chosen",
        description: "Routine servicing requests are completed in-call while flagged intents like fraud or large transfers are escalated with full context."
      },
      {
        ordinal: 3,
        trigger: "WorkSync™ Opens the Case",
        label: "Structured case created in core systems",
        description: "WorkSync™ writes a record to the CRM and core banking platform, attaches the transcript, and assigns SLA timers."
      },
      {
        ordinal: 4,
        trigger: "Compliance & KYC Review",
        label: "Automated document and identity verification",
        description: "Submitted documents are extracted, validated against sanctions and PEP lists, and queued for human review only on exceptions."
      },
      {
        ordinal: 5,
        trigger: "Resolution & Audit Trail",
        label: "Outcome confirmed and regulator-ready log saved",
        description: "The customer receives confirmation via SMS or email and every step is captured in an immutable, exportable audit record."
      },
    ],
    useCases: [
      {
        icon: "ShieldCheck",
        title: "Fraud Triage",
        description: "SmartTalk™ outbound calls verify suspicious transactions with the cardholder and can freeze, reissue, or whitelist activity inside a single conversation."
      },
      {
        icon: "UserCheck",
        title: "KYC Onboarding",
        description: "Guided voice and document capture verify new customer identity against bureau, sanctions, and PEP lists in under four minutes."
      },
      {
        icon: "CreditCard",
        title: "Payment Servicing",
        description: "Customers schedule, modify, or dispute payments with PCI-DSS compliant capture and instant posting to the core banking ledger."
      },
      {
        icon: "FileText",
        title: "Loan Origination",
        description: "WorkSync™ orchestrates application intake, bureau pulls, underwriting rules, and conditional approval notifications end to end."
      },
      {
        icon: "BarChart3",
        title: "Collections Outreach",
        description: "Compliant, persona-tuned voice campaigns negotiate payment plans, log promises-to-pay, and route hardship cases to licensed agents."
      },
      {
        icon: "Headphones",
        title: "Wealth Concierge",
        description: "Priority clients reach a 24/7 multilingual voice concierge that handles statements, transfers, and advisor scheduling without hold times."
      },
    ]
  },
  "insurance": {
    heroTagline: "AI SOLUTIONS FOR INSURANCE",
    heroAccentColor: "#00D4FF",
    heroSecondaryColor: "#7B6FF0",
    stats: [
      { value: "65%", label: "Faster Customer Response", sublabel: "→ AI-powered inquiry handling" },
      { value: "40%", label: "Reduced Administrative Work", sublabel: "→ Automated claims workflows" },
      { value: "24/7", label: "Policyholder Support", sublabel: "→ Always-on AI assistance" },
      { value: "99.9%", label: "Service Availability", sublabel: "→ Reliable, always compliant" },
      { value: "4.8/5", label: "Customer Satisfaction", sublabel: "→ Consistent service delivery" },
    ],
    products: [
      {
        productId: "smarttalk",
        productName: "SmartTalk™",
        roleInIndustry: "AI Voice & Policyholder Communication",
        features: ["Policy & Claims Inquiries", "Customer Support", "Appointment Scheduling", "FAQ Assistance"],
        metric: "+ 65% Faster Customer Response",
        accentColor: "#00D4FF",
      },
      {
        productId: "worksync",
        productName: "WorkSync™",
        roleInIndustry: "Insurance Workflow Automation",
        features: ["Claims Administration", "Agent Coordination", "Internal Workflows", "Process Automation"],
        metric: "+ 40% Less Admin Work",
        accentColor: "#F5A623",
      },
    ],
    workflow: [
      { ordinal: 1, trigger: "Customer contacts insurance provider", label: "Call or message via any channel", description: "Policyholders call, message, or submit inquiries via phone, SMS, or web." },
      { ordinal: 2, trigger: "SmartTalk™ answers and identifies the inquiry", label: "AI handles inquiry immediately", description: "A human-like AI agent answers, identifies the need, and gathers relevant policy or claim information." },
      { ordinal: 3, trigger: "Claims, policy, or service request is captured", label: "Request captured and categorized automatically", description: "Information is logged accurately and routed based on inquiry type." },
      { ordinal: 4, trigger: "WorkSync™ routes and updates the appropriate team", label: "Workflows triggered and teams notified", description: "Staff receive tasks, updates, and customer information in real time." },
    ],
    useCases: [
      { icon: "FileText", title: "Claims Processing", description: "Automate claim intake and status inquiries for faster resolution." },
      { icon: "Users", title: "Policyholder Support", description: "Handle policy questions, renewals, and coverage inquiries." },
      { icon: "Bell", title: "Claims Follow-Ups", description: "Provide proactive updates throughout the claims process." },
      { icon: "MessageCircle", title: "FAQ & Information Requests", description: "Answer common questions instantly without staff involvement." },
      { icon: "Briefcase", title: "Agent Support", description: "Provide agents with quick access to information and workflows." },
      { icon: "CalendarCheck", title: "Appointment Scheduling", description: "Allow policyholders to book consultations at any time." },
    ],
  },
  "telecommunications": {
    heroTagline: "AI SOLUTIONS FOR TELECOMMUNICATIONS",
    heroAccentColor: "#00D4FF",
    heroSecondaryColor: "#7B6FF0",
    stats: [
      { value: "70%", label: "Faster Customer Resolution", sublabel: "→ AI-powered support triage" },
      { value: "45%", label: "Reduced Support Workload", sublabel: "→ Automated ticket handling" },
      { value: "24/7", label: "Customer Assistance", sublabel: "→ Always-on AI availability" },
      { value: "99.9%", label: "Service Availability", sublabel: "→ Mission-critical uptime" },
      { value: "4.8/5", label: "Customer Satisfaction", sublabel: "→ Consistent interactions" },
    ],
    products: [
      {
        productId: "smarttalk",
        productName: "SmartTalk™",
        roleInIndustry: "AI Voice & Customer Engagement",
        features: ["Customer Support", "Billing Inquiries", "Service Requests", "Technical Assistance"],
        metric: "+ 70% Faster Resolution",
        accentColor: "#00D4FF",
      },
      {
        productId: "worksync",
        productName: "WorkSync™",
        roleInIndustry: "Telecom Workflow Automation",
        features: ["Ticket Management", "Escalation Workflows", "Internal Communications", "Process Automation"],
        metric: "+ 45% Less Support Workload",
        accentColor: "#F5A623",
      },
    ],
    workflow: [
      { ordinal: 1, trigger: "Customer contacts telecom provider", label: "Call, chat, or SMS inquiry received", description: "Customer reaches out via voice, SMS, or digital channel for support or service." },
      { ordinal: 2, trigger: "SmartTalk™ identifies the issue and gathers information", label: "AI triages and captures details", description: "The AI agent identifies the request type, gathers account information, and categorizes the inquiry." },
      { ordinal: 3, trigger: "Service request or support ticket is created", label: "Ticket automatically generated", description: "A support ticket is created with all relevant customer and issue details populated." },
      { ordinal: 4, trigger: "WorkSync™ routes the request to the correct department", label: "Team receives routed request", description: "The ticket is assigned to the appropriate team with full context for faster resolution." },
      { ordinal: 5, trigger: "Staff resolve inquiry with AI support", label: "Resolution delivered efficiently", description: "Staff have the information needed to resolve inquiries faster and update customers automatically." },
    ],
    useCases: [
      { icon: "Headphones", title: "Customer Support", description: "Handle account and service-related inquiries automatically." },
      { icon: "CreditCard", title: "Billing Assistance", description: "Provide instant responses to billing questions and payment support." },
      { icon: "Wrench", title: "Technical Support", description: "Assist with common troubleshooting requests and service diagnostics." },
      { icon: "Settings", title: "Service Requests", description: "Manage upgrades, changes, and installation coordination." },
      { icon: "Radio", title: "Outage Communications", description: "Provide automated updates during service interruptions." },
      { icon: "GraduationCap", title: "Employee Training", description: "Keep teams informed on products, services, and procedures." },
    ],
  },
  "municipalities-government": {
    heroTagline: "AI SOLUTIONS FOR LOCAL GOVERNMENT",
    heroAccentColor: "#00D4FF",
    heroSecondaryColor: "#7B6FF0",
    stats: [
      { value: "75%", label: "Faster Citizen Response", sublabel: "→ AI-powered inquiry handling" },
      { value: "50%", label: "Reduced Administrative Tasks", sublabel: "→ Automated request routing" },
      { value: "24/7", label: "Resident Support", sublabel: "→ Always-on citizen assistance" },
      { value: "99.9%", label: "Service Availability", sublabel: "→ Reliable public infrastructure" },
      { value: "4.8/5", label: "Resident Satisfaction", sublabel: "→ Consistent service delivery" },
    ],
    products: [
      {
        productId: "smarttalk",
        productName: "SmartTalk™",
        roleInIndustry: "AI Voice & Citizen Communication",
        features: ["Resident Inquiries", "Service Requests", "Permit Information", "Community Information"],
        metric: "+ 75% Faster Citizen Response",
        accentColor: "#00D4FF",
      },
      {
        productId: "worksync",
        productName: "WorkSync™",
        roleInIndustry: "Government Workflow Automation",
        features: ["Request Routing", "Department Coordination", "Case Management", "Workflow Automation"],
        metric: "+ 50% Less Admin Work",
        accentColor: "#F5A623",
      },
      {
        productId: "learnmate",
        productName: "LearnMate™",
        roleInIndustry: "Staff Training & Knowledge Management",
        features: ["Staff Training", "Policy Management", "Knowledge Sharing", "New Employee Onboarding"],
        metric: "+ 40% Faster Onboarding",
        accentColor: "#7B6FF0",
      },
    ],
    workflow: [
      { ordinal: 1, trigger: "Resident contacts the municipality", label: "Call, message, or online request submitted", description: "Citizen reaches out via phone, SMS, web portal, or digital channel." },
      { ordinal: 2, trigger: "SmartTalk™ identifies the request and gathers information", label: "AI triages and captures details", description: "The AI agent identifies the request type and collects relevant information from the resident." },
      { ordinal: 3, trigger: "Service request is created automatically", label: "Work order or ticket generated", description: "A service request is automatically created with all citizen and issue details populated." },
      { ordinal: 4, trigger: "WorkSync™ routes the request to the appropriate department", label: "Department receives assigned request", description: "The request is routed to the correct municipal department with full context." },
      { ordinal: 5, trigger: "LearnMate™ provides staff with policies and procedures", label: "Staff equipped with knowledge to resolve", description: "Employees access policies, procedures, and operational guidelines to handle requests efficiently." },
    ],
    useCases: [
      { icon: "Users", title: "Citizen Service Requests", description: "Handle inquiries related to public services and community programs." },
      { icon: "FileText", title: "Permit & Licensing Information", description: "Provide guidance on permits, applications, and requirements." },
      { icon: "Wrench", title: "Public Works Requests", description: "Manage reports related to roads, parks, waste, and infrastructure." },
      { icon: "MessageCircle", title: "Community Information", description: "Provide information on events, facilities, and local services." },
      { icon: "Network", title: "Internal Staff Support", description: "Improve communication and collaboration across departments." },
      { icon: "GraduationCap", title: "Staff Training & Knowledge", description: "Ensure teams have access to current policies and procedures." },
    ],
  },
};

export const getIndustryDetail = (
  slug: IndustrySlug,
): IndustryDetailExtension | undefined => industryDetailExtensions[slug];
