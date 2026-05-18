import type { LucideIcon } from "lucide-react";
import { Cpu, Languages, Plug, BarChart3, Shield } from "lucide-react";

export type FeatureSlug =
  | "technology"
  | "languages"
  | "integration"
  | "data-insights"
  | "security";

export interface Feature {
  slug: FeatureSlug;
  number: string;
  label: string;
  heading: string;
  copy: string[];
  bullets: string[];
  icon: LucideIcon;
  image: string;
}

export const features: Feature[] = [
  {
    slug: "technology",
    number: "01",
    label: "Technology",
    heading: "An AI engine engineered for real, human-grade conversations.",
    copy: [
      "Cross Flows Synergy ships its own conversational stack — streaming speech, intent reasoning, retrieval, and synthesis all aligned around a single end-to-end latency budget.",
      "AI engine powering human-like conversations, sub-200ms response latency, and intelligent decision-making across all communication channels.",
    ],
    bullets: [
      "Streaming ASR with sub-200ms response latency",
      "Self-hosted LLM orchestration with safety guardrails",
      "Neural voice synthesis with cloned brand voices",
      "Real-time barge-in and interruption handling",
    ],
    icon: Cpu,
    image: "https://placehold.co/1200x780/0f1420/00d4ff?text=Engine+%E2%9A%A1+Architecture",
  },
  {
    slug: "languages",
    number: "02",
    label: "Languages",
    heading: "Forty-plus languages. One brand voice. Zero compromise.",
    copy: [
      "Customers shouldn’t have to switch to your default language to be heard. Cross Flows Synergy detects, translates, and responds in the language each caller actually uses — including regional accents and code-switching.",
      "Multilingual AI-powered communication across 40+ languages with real-time comprehension and response capabilities for diverse communities.",
    ],
    bullets: [
      "40+ languages with native-quality voices",
      "Real-time translation and language detection",
      "Accent and dialect adaptation",
      "Domain glossaries to keep terminology consistent",
    ],
    icon: Languages,
    image: "https://placehold.co/1200x780/0f1420/7af9ff?text=Multilingual+Mesh",
  },
  {
    slug: "integration",
    number: "03",
    label: "Integration",
    heading: "Plugs into the systems your team already lives in.",
    copy: [
      "Seamlessly connect with Salesforce, HubSpot, Zoho, Twilio, Microsoft Teams, Google Calendar, Slack, and custom APIs without disrupting your existing infrastructure.",
      "When something custom is needed, REST APIs, webhooks, and a typed SDK get you live in days — not quarters.",
    ],
    bullets: [
      "Pre-built connectors for Salesforce, HubSpot, Zoho, NetSuite",
      "Telephony adapters for Twilio, Genesys, Five9, Amazon Connect",
      "Microsoft Teams, Slack, Google Calendar, and operational tools",
      "REST and webhook escape hatches with typed SDKs",
    ],
    icon: Plug,
    image: "https://placehold.co/1200x780/0f1420/3a8dff?text=Universal+Connectors",
  },
  {
    slug: "data-insights",
    number: "04",
    label: "Data & Insights",
    heading: "Every conversation becomes signal you can act on.",
    copy: [
      "Real-time dashboards, interaction analytics, workflow performance tracking, and AI-powered reporting to support smarter operational decisions.",
      "Export clean, structured data to your warehouse and let your BI team go to town.",
    ],
    bullets: [
      "Live ops dashboards with drill-down call replay",
      "Sentiment, intent, and resolution scoring",
      "Per-cohort skill and knowledge gap heatmaps",
      "One-click exports to Snowflake, BigQuery, Redshift",
    ],
    icon: BarChart3,
    image: "https://placehold.co/1200x780/0f1420/00d4ff?text=Live+Insights+Dashboard",
  },
  {
    slug: "security",
    number: "05",
    label: "Security",
    heading: "Built so your security team can sleep at night.",
    copy: [
      "Responsible AI implementation with enterprise-grade security practices, workflow transparency, and reliable business integrations designed for modern organizations.",
      "GDPR, HIPAA, and PCI workflows are first-class — not afterthoughts wired in for the deal.",
    ],
    bullets: [
      "SOC 2 Type II, ISO 27001, HIPAA, PCI-DSS aligned",
      "AES-256 at rest, TLS 1.3 in transit",
      "Regional data residency (US, EU, UK, APAC)",
      "Role-based access, SSO, and full audit logs",
    ],
    icon: Shield,
    image: "https://placehold.co/1200x780/0f1420/f5a623?text=Security+%26+Compliance",
  },
];
