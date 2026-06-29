import type { LucideIcon } from "lucide-react";
import {
  PhoneCall,
  Headphones,
  Globe,
  GitBranch,
  CalendarCheck,
  UserCheck,
  ClipboardList,
  FileText,
  Workflow as WorkflowIcon,
  Zap,
  ClipboardCheck,
  Plug,
  Truck,
  AlertTriangle,
  Database,
  ListChecks,
  GraduationCap,
  Trophy,
  BookOpen,
  Users,
  Network,
} from "lucide-react";

export type SolutionCategorySlug =
  | "communication-customer-engagement"
  | "scheduling-intake"
  | "workflow-automation-category"
  | "operations-coordination"
  | "learning-knowledge";

export interface SolutionChallenge {
  title: string;
  description: string;
}

export interface SolutionCategoryUseCase {
  /** URL-anchor slug used as the `id` on the rendered card and the hash deep-link target. Stable across UI label changes. */
  id: string;
  /** Title used as the use-case card header and as the item label shown in the navbar mega-menu. */
  title: string;
  /** Lead paragraph rendered below the title. */
  description: string;
  /** Capabilities rendered as pill tags. */
  capabilities: string[];
  /** Illustrative example shown in the dark "EXAMPLE" panel under each card. */
  example: string;
  icon: LucideIcon;
}

export interface SolutionCategory {
  slug: SolutionCategorySlug;
  name: string;
  heading: string;
  description: string;
  challenges: SolutionChallenge[];
  useCases: SolutionCategoryUseCase[];
  /** Compact one-line description shown on the /solutions listing card. */
  listingDescription: string;
  /** Icon shown in the listing-card header (separate from per-useCase icons). */
  listingIcon: LucideIcon;
  /** Short item labels rendered as pills on the listing card. */
  listingItems: string[];
}

export const solutionCategories: SolutionCategory[] = [
  {
    slug: "communication-customer-engagement",
    name: "Communication & Customer Engagement",
    heading: "Never Miss Another Customer Conversation",
    description:
      "Deliver intelligent, always-available customer communication across voice, SMS, chat, and digital channels. Cross Flows Synergy helps organizations answer inquiries instantly, route conversations intelligently, and provide exceptional customer experiences around the clock.",
    listingDescription:
      "AI receptionists, customer support automation, multilingual communication, and intelligent call routing.",
    listingIcon: PhoneCall,
    listingItems: [
      "AI Receptionists",
      "Customer Support",
      "Multilingual Communication",
      "Call Routing",
    ],
    challenges: [
      {
        title: "High Call Volumes",
        description:
          "Customers wait too long, calls go unanswered, and staff struggle to manage peak demand periods.",
      },
      {
        title: "Missed Opportunities",
        description:
          "Missed calls often result in lost revenue, lost leads, and dissatisfied customers.",
      },
      {
        title: "Inconsistent Customer Service",
        description:
          "Service quality varies depending on staffing levels, experience, and availability.",
      },
      {
        title: "Language Barriers",
        description:
          "Organizations serving diverse communities need communication solutions that support multiple languages and improve accessibility.",
      },
      {
        title: "Limited After-Hours Coverage",
        description:
          "Many businesses cannot afford to staff customer service teams around the clock.",
      },
    ],
    useCases: [
      {
        id: "ai-receptionists",
        title: "AI Receptionists",
        description:
          "Handle incoming calls automatically while providing a professional and personalized experience.",
        capabilities: [
          "Call Answering",
          "Call Routing",
          "FAQ Handling",
          "Message Taking",
          "Contact Information Collection",
          "Appointment Requests",
          "After-Hours Coverage",
        ],
        example:
          "A property management company receives maintenance calls overnight. The AI receptionist collects the tenant's information and automatically routes urgent requests to the appropriate staff member.",
        icon: PhoneCall,
      },
      {
        id: "customer-support-automation",
        title: "Customer Support Automation",
        description:
          "Provide immediate responses to common customer inquiries without requiring staff intervention.",
        capabilities: [
          "Frequently Asked Questions",
          "Service Information",
          "Account Assistance",
          "Request Management",
          "Customer Follow-Ups",
          "Escalation Handling",
        ],
        example:
          "An insurance provider automatically answers policy-related questions while forwarding complex requests to licensed agents.",
        icon: Headphones,
      },
      {
        id: "multilingual-communication",
        title: "Multilingual Communication",
        description:
          "Engage customers in their preferred language to improve accessibility and customer satisfaction.",
        capabilities: [
          "Real-Time Language Support",
          "Multilingual Voice Conversations",
          "SMS Communication",
          "Customer Notifications",
          "Inclusive Service Delivery",
        ],
        example:
          "Municipalities can provide citizen support in multiple languages without requiring multilingual staffing for every interaction.",
        icon: Globe,
      },
      {
        id: "intelligent-call-routing",
        title: "Intelligent Call Routing",
        description:
          "Ensure every inquiry reaches the correct department, location, or team member.",
        capabilities: [
          "Department Routing",
          "Location-Based Routing",
          "Priority Escalation",
          "Skill-Based Routing",
          "Emergency Call Handling",
        ],
        example:
          "In a property management company, a tenant reporting an urgent water leak can be immediately routed to the emergency maintenance team, while a prospective tenant inquiring about available units is directed to the leasing department.",
        icon: GitBranch,
      },
    ],
  },
  {
    slug: "scheduling-intake",
    name: "Scheduling & Intake",
    heading: "Simplify Scheduling and Information Collection",
    description:
      "Automate appointments, registrations, onboarding, and intake processes while improving customer experiences and reducing administrative workload.",
    listingDescription:
      "Appointment scheduling, lead qualification, customer intake, and registration management.",
    listingIcon: CalendarCheck,
    listingItems: [
      "Appointment Scheduling",
      "Lead Qualification",
      "Customer Intake",
      "Registration Management",
    ],
    challenges: [
      {
        title: "Manual Scheduling Processes",
        description:
          "Staff spend valuable time booking, rescheduling, and confirming appointments instead of focusing on higher-value tasks.",
      },
      {
        title: "Missed Appointments & No-Shows",
        description:
          "Missed appointments lead to lost revenue, operational inefficiencies, and scheduling disruptions.",
      },
      {
        title: "Incomplete Customer Information",
        description:
          "Missing or inaccurate information creates delays, errors, and poor customer experiences.",
      },
      {
        title: "Slow Response to Inquiries",
        description:
          "Potential customers may abandon inquiries when scheduling or registration processes are slow.",
      },
      {
        title: "Inconsistent Intake Processes",
        description:
          "Different staff members collect information differently, leading to incomplete records and inconsistent service delivery.",
      },
    ],
    useCases: [
      {
        id: "appointment-scheduling",
        title: "Appointment Scheduling",
        description:
          "Automate appointment bookings, confirmations, reminders, cancellations, and rescheduling to reduce administrative workload and improve customer convenience.",
        capabilities: [
          "Self-Service Booking",
          "Calendar Integration",
          "Automated Reminders",
          "Appointment Confirmations",
          "Rescheduling & Cancellations",
          "Waitlist Management",
        ],
        example:
          "A healthcare clinic allows patients to book appointments 24/7 through an AI assistant, which automatically checks availability, schedules the appointment, and sends confirmation and reminder notifications.",
        icon: CalendarCheck,
      },
      {
        id: "lead-qualification",
        title: "Lead Qualification",
        description:
          "Capture, assess, and qualify inquiries automatically before routing them to the appropriate sales or service team.",
        capabilities: [
          "Lead Capture",
          "Qualification Questionnaires",
          "Lead Scoring",
          "Information Collection",
          "Automated Routing",
          "CRM Integration",
        ],
        example:
          "A real estate company uses AI to collect a buyer's budget, preferred location, and property requirements before connecting them with the most suitable agent.",
        icon: UserCheck,
      },
      {
        id: "customer-intake",
        title: "Customer Intake",
        description:
          "Collect and organize customer information before appointments, consultations, or service delivery to streamline operations and improve service quality.",
        capabilities: [
          "Information Collection",
          "Digital Intake Forms",
          "Identity Verification",
          "Request Categorization",
          "Document Collection",
          "Customer Profiling",
        ],
        example:
          "A law firm uses AI intake to gather client details, case information, and required documents before the initial consultation, reducing administrative work for staff.",
        icon: ClipboardList,
      },
      {
        id: "registration-management",
        title: "Registration Management",
        description:
          "Automate registrations, enrollments, and sign-ups for programs, services, events, and activities while ensuring accurate information collection.",
        capabilities: [
          "Online Registration",
          "Eligibility Screening",
          "Enrollment Management",
          "Confirmation Notifications",
          "Attendance Tracking",
          "Automated Follow-Ups",
        ],
        example:
          "A municipality uses AI to manage registrations for recreation programs, automatically collecting participant information, confirming enrollment, and sending reminders before the program begins.",
        icon: FileText,
      },
    ],
  },
  {
    slug: "workflow-automation-category",
    name: "Workflow & Automation",
    heading: "Workflow Automation",
    description:
      "Automate repetitive business processes by connecting systems, teams, and tasks to improve efficiency, consistency, and operational visibility.",
    listingDescription:
      "Workflow automation, process automation, task management, and system integrations.",
    listingIcon: Zap,
    listingItems: [
      "Workflow Automation",
      "Process Automation",
      "Task Management",
      "System Integrations",
    ],
    challenges: [
      {
        title: "Repetitive Manual Tasks",
        description:
          "Employees spend significant time on routine administrative work that could be automated.",
      },
      {
        title: "Process Bottlenecks",
        description:
          "Critical tasks and approvals become delayed due to manual handoffs and inefficient workflows.",
      },
      {
        title: "Disconnected Systems",
        description:
          "Information is spread across multiple platforms, creating silos and reducing productivity.",
      },
      {
        title: "Human Errors & Inconsistencies",
        description:
          "Manual processes increase the risk of errors, duplicate work, and inconsistent outcomes.",
      },
      {
        title: "Limited Scalability",
        description:
          "As organizations grow, manual processes become difficult to manage and increasingly costly.",
      },
    ],
    useCases: [
      {
        id: "workflow-automation",
        title: "Workflow Automation",
        description:
          "Automate repetitive business processes by connecting systems, teams, and tasks to improve efficiency, consistency, and operational visibility.",
        capabilities: [
          "Process Automation",
          "Task Assignment",
          "Approval Workflows",
          "Cross-System Integrations",
          "Automated Notifications",
          "Workflow Tracking & Reporting",
        ],
        example:
          "A property management company automatically creates maintenance tickets, assigns them to the appropriate vendor, notifies tenants of progress, and updates staff throughout the process without manual intervention.",
        icon: WorkflowIcon,
      },
      {
        id: "process-automation",
        title: "Process Automation",
        description:
          "Eliminate manual and repetitive activities by automating routine business processes and data flows.",
        capabilities: [
          "Data Entry Automation",
          "Form Processing",
          "Information Routing",
          "Status Updates",
          "Document Handling",
          "Trigger-Based Actions",
        ],
        example:
          "An insurance provider automatically processes claim submissions, routes them to the correct adjuster, updates customer records, and sends confirmation notifications to policyholders.",
        icon: Zap,
      },
      {
        id: "task-management",
        title: "Task Management",
        description:
          "Automatically create, assign, prioritize, and track tasks to ensure work is completed efficiently and on time.",
        capabilities: [
          "Task Creation",
          "Task Assignment",
          "Priority Management",
          "Deadline Tracking",
          "Escalation Rules",
          "Progress Monitoring",
        ],
        example:
          "A recruitment agency automatically creates follow-up tasks for recruiters after candidate interviews and escalates overdue actions to managers when necessary.",
        icon: ClipboardCheck,
      },
      {
        id: "system-integrations",
        title: "System Integrations",
        description:
          "Connect business applications, communication platforms, CRMs, and operational systems to create seamless workflows.",
        capabilities: [
          "CRM Integration",
          "ERP Integration",
          "Scheduling System Integration",
          "Communication Platform Integration",
          "Data Synchronization",
          "API Connectivity",
        ],
        example:
          "A healthcare organization integrates its scheduling platform, patient management system, and communication tools to automatically update records and notify patients of appointment changes.",
        icon: Plug,
      },
    ],
  },
  {
    slug: "operations-coordination",
    name: "Operations & Coordination",
    heading: "Streamline Operations and Keep Teams Connected",
    description:
      "Improve operational efficiency through intelligent coordination, automated dispatching, resource management, and real-time communication.",
    listingDescription:
      "Dispatching, incident response coordination, information management, and service request management.",
    listingIcon: Network,
    listingItems: [
      "Dispatching",
      "Incident Response",
      "Information Management",
      "Service Requests",
    ],
    challenges: [
      {
        title: "Inefficient Resource Allocation",
        description:
          "Staff, equipment, and operational resources are often underutilized or improperly assigned.",
      },
      {
        title: "Poor Team Coordination",
        description:
          "Communication gaps between departments, field teams, and management lead to delays and inefficiencies.",
      },
      {
        title: "Limited Operational Visibility",
        description:
          "Organizations lack real-time insight into activities, requests, and resource availability.",
      },
      {
        title: "High Volume of Service Requests",
        description:
          "Managing large numbers of requests manually can overwhelm teams and reduce service quality.",
      },
      {
        title: "Communication Breakdowns",
        description:
          "Critical information may not reach the right people at the right time, affecting operations and customer satisfaction.",
      },
    ],
    useCases: [
      {
        id: "dispatch-management",
        title: "Dispatch Management",
        description:
          "Coordinate service requests, field teams, drivers, technicians, and operational resources efficiently to improve response times and service delivery.",
        capabilities: [
          "Service Dispatching",
          "Driver & Technician Assignment",
          "Real-Time Status Updates",
          "Job Prioritization",
          "Route Coordination",
          "Emergency Dispatch Management",
        ],
        example:
          "A logistics company automatically assigns delivery requests to the nearest available driver and provides real-time updates throughout the delivery process.",
        icon: Truck,
      },
      {
        id: "incident-emergency-response",
        title: "Incident & Emergency Response Coordination",
        description:
          "Support rapid response and communication during urgent situations, emergencies, and service disruptions.",
        capabilities: [
          "Emergency Dispatch",
          "Incident Tracking",
          "Priority Escalation",
          "Stakeholder Notifications",
          "Resource Mobilization",
          "Response Monitoring",
        ],
        example:
          "A municipality receives reports of a water main break and automatically dispatches crews, alerts affected residents, and tracks resolution progress in real time.",
        icon: AlertTriangle,
      },
      {
        id: "information-management",
        title: "Information Management",
        description:
          "Provide employees and customers with fast access to accurate information while ensuring data is organized and easily accessible.",
        capabilities: [
          "Information Retrieval",
          "Knowledge Distribution",
          "Centralized Data Access",
          "Document Sharing",
          "Operational Records Management",
          "Internal Support Assistance",
        ],
        example:
          "A municipality uses AI to instantly provide staff with information about permits, regulations, and service requests without searching through multiple systems.",
        icon: Database,
      },
      {
        id: "service-request-management",
        title: "Service Request Management",
        description:
          "Capture, prioritize, assign, and track service requests from initiation through completion.",
        capabilities: [
          "Request Intake",
          "Ticket Creation",
          "Priority Management",
          "Task Assignment",
          "Progress Tracking",
          "Resolution Monitoring",
        ],
        example:
          "A city receives a road maintenance request, automatically creates a work order, assigns it to the appropriate department, and updates the resident on the request status.",
        icon: ListChecks,
      },
    ],
  },
  {
    slug: "learning-knowledge",
    name: "Learning & Knowledge",
    heading: "AI Learning Assistant",
    description:
      "Provide personalized, on-demand learning support that helps users access information, answer questions, and improve knowledge retention anytime.",
    listingDescription:
      "AI learning assistant, exam simulator, knowledge management, and employee training.",
    listingIcon: GraduationCap,
    listingItems: [
      "AI Learning Assistant",
      "Exam Simulator",
      "Knowledge Management",
      "Employee Training",
    ],
    challenges: [
      {
        title: "Knowledge Silos",
        description:
          "Important information is often stored in different systems or retained by a small number of employees.",
      },
      {
        title: "Slow Employee Onboarding",
        description:
          "New employees require significant time and support before becoming fully productive.",
      },
      {
        title: "Inconsistent Training Delivery",
        description:
          "Training quality can vary across departments, locations, and instructors.",
      },
      {
        title: "Difficulty Accessing Information",
        description:
          "Employees and learners often struggle to find accurate information when they need it.",
      },
      {
        title: "Low Learning Engagement",
        description:
          "Traditional learning methods may not provide the personalized support and engagement needed for effective knowledge retention.",
      },
    ],
    useCases: [
      {
        id: "ai-learning-assistant",
        title: "AI Learning Assistant",
        description:
          "Provide personalized, on-demand learning support that helps users access information, answer questions, and improve knowledge retention anytime.",
        capabilities: [
          "Interactive Learning Support",
          "Personalized Guidance",
          "Question & Answer Assistance",
          "Knowledge Retrieval",
          "Self-Paced Learning",
          "Continuous Learning Support",
        ],
        example:
          "A college uses an AI Learning Assistant to help students understand course concepts, answer academic questions, and provide guidance outside classroom hours.",
        icon: GraduationCap,
      },
      {
        id: "exam-simulator",
        title: "Exam Simulator",
        description:
          "Create realistic assessment environments that help learners prepare for exams, certifications, compliance testing, and professional evaluations.",
        capabilities: [
          "Practice Exams",
          "Mock Assessments",
          "Performance Analytics",
          "Instant Feedback",
          "Adaptive Questioning",
          "Exam Readiness Tracking",
        ],
        example:
          "A professional certification provider offers AI-powered mock exams that simulate actual testing conditions and provide personalized feedback to help candidates improve their performance.",
        icon: Trophy,
      },
      {
        id: "knowledge-management",
        title: "Knowledge Management",
        description:
          "Centralize organizational knowledge and make information easily accessible to employees, customers, and stakeholders.",
        capabilities: [
          "Knowledge Base Creation",
          "Information Retrieval",
          "Document Search",
          "Content Organization",
          "Policy & Procedure Management",
          "Intelligent Search Assistance",
        ],
        example:
          "A municipality maintains a centralized knowledge repository where staff can instantly access policies, procedures, regulations, and operational guidelines through AI-powered search.",
        icon: BookOpen,
      },
      {
        id: "employee-training-onboarding",
        title: "Employee Training & Onboarding",
        description:
          "Streamline onboarding and workforce development through structured learning programs and automated training support.",
        capabilities: [
          "New Hire Onboarding",
          "Training Pathways",
          "Learning Progress Tracking",
          "Compliance Training",
          "Skills Development",
          "Certification Management",
        ],
        example:
          "A manufacturing company uses AI-driven onboarding to guide new employees through safety procedures, operational training, and company policies before they begin work.",
        icon: Users,
      },
    ],
  },
];

export const isSolutionCategorySlug = (
  slug: string,
): slug is SolutionCategorySlug =>
  solutionCategories.some((c) => c.slug === slug);

export const getSolutionCategory = (
  slug: string,
): SolutionCategory | undefined =>
  solutionCategories.find((c) => c.slug === slug);

/**
 * Map from a navbar item title (e.g. "AI Receptionists") to the parent
 * category slug, so the SolutionsPanel mega-menu can link each item to its
 * category detail page. The lookup is case-insensitive and falls back to
 * the listing page if the title isn't recognised.
 */
export function getCategorySlugForItem(
  title: string,
): SolutionCategorySlug | null {
  const normalized = title.trim().toLowerCase();
  for (const cat of solutionCategories) {
    if (cat.useCases.some((u) => u.title.toLowerCase() === normalized)) {
      return cat.slug;
    }
  }
  return null;
}
