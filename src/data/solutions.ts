import type { LucideIcon } from "lucide-react";
import {
  PhoneIncoming,
  CalendarCheck,
  Target,
  Workflow,
  LifeBuoy,
  MessagesSquare,
  CalendarClock,
  Sparkles,
} from "lucide-react";

export type SolutionSlug =
  | "ai-reception-call-handling"
  | "ai-appointment-management"
  | "ai-lead-qualification"
  | "ai-workflow-automation"
  | "ai-support-systems"
  | "ai-communication-management"
  | "ai-scheduling-systems"
  | "ai-operational-assistance";

export interface Solution {
  slug: SolutionSlug;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  poster: string;
}

export const solutionsSectionHeadline =
  "AI-Powered Solutions Designed for Real Business Problems";

export const solutionsSectionIntro =
  "See how Cross Flows Synergy addresses the communication gaps, operational inefficiencies, and customer experience challenges businesses face every day.";

export const solutions: Solution[] = [
  {
    slug: "ai-reception-call-handling",
    title: "AI Reception & Call Handling",
    description:
      "Ensure every inbound call is answered, routed, and resolved without burdening your team.",
    icon: PhoneIncoming,
    accent: "from-[#00d4ff] to-[#3a8dff]",
    poster:
      "https://placehold.co/1920x1080/080b12/00d4ff?text=AI+Reception+%26+Call+Handling",
  },
  {
    slug: "ai-appointment-management",
    title: "AI Appointment Management",
    description:
      "Let customers self-schedule, confirm, or reschedule in real time without manual coordination.",
    icon: CalendarCheck,
    accent: "from-[#00d4ff] to-[#7af9ff]",
    poster:
      "https://placehold.co/1920x1080/080b12/7af9ff?text=AI+Appointment+Management",
  },
  {
    slug: "ai-lead-qualification",
    title: "AI Lead Qualification",
    description:
      "Capture and qualify leads instantly before they reach your sales team.",
    icon: Target,
    accent: "from-[#9b6bff] to-[#00d4ff]",
    poster:
      "https://placehold.co/1920x1080/080b12/9b6bff?text=AI+Lead+Qualification",
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    description:
      "Replace repetitive manual tasks with intelligent, connected automation systems.",
    icon: Workflow,
    accent: "from-[#3a8dff] to-[#00d4ff]",
    poster:
      "https://placehold.co/1920x1080/080b12/3a8dff?text=AI+Workflow+Automation",
  },
  {
    slug: "ai-support-systems",
    title: "AI Support Systems",
    description:
      "Deliver fast, consistent customer support at scale — without increasing headcount.",
    icon: LifeBuoy,
    accent: "from-[#00d4ff] to-[#3a8dff]",
    poster:
      "https://placehold.co/1920x1080/080b12/00d4ff?text=AI+Support+Systems",
  },
  {
    slug: "ai-communication-management",
    title: "AI Communication Management",
    description:
      "Unify voice, chat, SMS, and digital communication under one intelligent platform.",
    icon: MessagesSquare,
    accent: "from-[#f5a623] to-[#00d4ff]",
    poster:
      "https://placehold.co/1920x1080/080b12/f5a623?text=AI+Communication+Management",
  },
  {
    slug: "ai-scheduling-systems",
    title: "AI Scheduling Systems",
    description:
      "Coordinate appointments, dispatch, and resource scheduling across teams and locations.",
    icon: CalendarClock,
    accent: "from-[#00d4ff] to-[#9b6bff]",
    poster:
      "https://placehold.co/1920x1080/080b12/00d4ff?text=AI+Scheduling+Systems",
  },
  {
    slug: "ai-operational-assistance",
    title: "AI Operational Assistance",
    description:
      "Support internal teams with intelligent coordination, reminders, and workflow guidance.",
    icon: Sparkles,
    accent: "from-[#7af9ff] to-[#3a8dff]",
    poster:
      "https://placehold.co/1920x1080/080b12/7af9ff?text=AI+Operational+Assistance",
  },
];
