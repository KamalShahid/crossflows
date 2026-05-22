import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Search,
  ListChecks,
  Gauge,
  TrendingUp,
  Database,
} from "lucide-react";

export const whatWeDo = {
  label: "What We Do",
  headline: "AI Solutions Built Around Your Business",
  body: "Cross Flows Synergy provides AI-powered business solutions designed to improve communication, automate repetitive processes, enhance customer experiences, and support operational efficiency. Our solutions are tailored for organizations looking to modernize how they interact with customers, manage workflows, and scale daily operations using intelligent automation.",
};

export const industriesSection = {
  label: "Industries",
  headline: "Supporting Businesses Across Multiple Industries",
  subheading:
    "Cross Flows Synergy develops AI-powered business solutions tailored for industries where communication, efficiency, and customer experience are critical.",
};

export const bottomCTA = {
  label: "Get Started",
  headline: "Ready to Modernize Your Business Operations With AI?",
  subheading:
    "Discover how Cross Flows Synergy can help automate communication, streamline workflows, improve customer engagement, and support operational growth through intelligent AI-powered solutions.",
  buttons: [
    { label: "Book a Demo", to: "/contact" },
    { label: "Explore Solutions", to: "/solutions" },
  ],
};

export interface InsightBenefit {
  label: string;
  icon: LucideIcon;
}

export const insightsSection = {
  label: "Insights & Analytics",
  headline: "Turn Conversations Into Business Intelligence",
  body: "Gain valuable insights from customer interactions, operational trends, recurring inquiries, workflow performance, and service gaps through AI-powered analytics and reporting.",
  benefits: [
    { label: "Understand customer behavior", icon: Activity },
    { label: "Identify operational inefficiencies", icon: Search },
    { label: "Improve response workflows", icon: ListChecks },
    { label: "Monitor service performance", icon: Gauge },
    { label: "Track trends and recurring issues", icon: TrendingUp },
    { label: "Support data-driven decisions", icon: Database },
  ] satisfies InsightBenefit[],
};

export const securitySection = {
  label: "Security & Trust",
  headline: "Built With Security, Reliability & Business Trust In Mind",
  body: "Cross Flows Synergy focuses on responsible AI implementation, operational reliability, workflow transparency, and secure business integrations to support modern organizations with confidence.",
};

export const productsSection = {
  label: "Our Products",
  headline: "Four products. One platform engineered to ship.",
  subheading:
    "Each product is purpose-built for the highest-leverage moments in enterprise operations — and shares the same engine, security, and analytics layer underneath.",
};

export const useCasesSection = {
  label: "Use Cases",
  headline: "Production-grade workflows, ready to deploy.",
  subheading:
    "Each one is a real workflow we run for real customers — not a slide.",
};

export const featuresOverview = {
  label: "The Platform",
  headline: "Five capability pillars. Engineered to compound.",
};

export const videoSection = {
  label: "See it live",
  headline: "Three minutes inside the Cross Flows Synergy platform.",
  subheading:
    "A walkthrough of how the four products and the WorkSync™ orchestration layer fit together.",
};

export const demoCTA = {
  label: "Ready when you are",
  headline: "See how Cross Flows Synergy handles your hardest workflow.",
  subheading:
    "Tell us where you’d start. We’ll get back to you within one business day with a tailored demo plan.",
};
