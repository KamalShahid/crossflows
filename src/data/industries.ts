import type { LucideIcon } from "lucide-react";
import {
  Stethoscope,
  Sparkles,
  Users,
  Building2,
  Utensils,
  Zap,
  BookOpen,
  Truck,
  Landmark,
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
  | "financial-services";

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
    icon: Stethoscope,
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
    icon: Sparkles,
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
    icon: Users,
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
    icon: Utensils,
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
    icon: BookOpen,
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
];

export const getIndustry = (slug: IndustrySlug): Industry | undefined =>
  industries.find((i) => i.slug === slug);
