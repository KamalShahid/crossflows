import type { LucideIcon } from "lucide-react";
import { Cpu, Globe, Plug, BarChart3, ShieldCheck } from "lucide-react";

export type FeatureSlug =
  | "technology"
  | "languages"
  | "integration"
  | "data-insights"
  | "security";

export type ImagePosition = "left" | "right";

export interface Feature {
  slug: FeatureSlug;
  number: string;
  label: string;
  heading: string;
  /** Two body paragraphs rendered in order. */
  copy: [string, string];
  bullets: string[];
  icon: LucideIcon;
  /** Bold label rendered inside the dark image panel. */
  panelLabel: string;
  /** Which side the dark panel sits on at desktop widths. */
  imagePosition: ImagePosition;
  /** Hotlinked Unsplash photo used as the pillar's image panel background. */
  imageUrl: string;
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
    panelLabel: "Engine ✦ Architecture",
    imagePosition: "left",
    imageUrl:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&auto=format",
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
    icon: Globe,
    panelLabel: "Multilingual Mesh",
    imagePosition: "right",
    imageUrl:
      "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&q=80&auto=format",
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
    panelLabel: "Universal Connectors",
    imagePosition: "left",
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format",
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
    panelLabel: "Live Insights Dashboard",
    imagePosition: "right",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format",
  },
  {
    slug: "security",
    number: "05",
    label: "Security",
    heading: "Built so your security team can sleep at night.",
    copy: [
      "Every data path in Cross Flows Synergy is encrypted, access-controlled, and auditable. SOC 2 Type II, HIPAA-ready, and PCI-DSS aligned from day one — not bolted on after.",
      "We don’t just pass audits. We make compliance a competitive advantage by building controls directly into the product layer.",
    ],
    bullets: [
      "SOC 2 Type II certified with annual third-party audit",
      "HIPAA-ready with BAA support for healthcare customers",
      "AES-256 encryption at rest and in transit",
      "Zero-retention memory architecture for sensitive flows",
    ],
    icon: ShieldCheck,
    panelLabel: "Zero-Trust Compliance Layer",
    imagePosition: "left",
    imageUrl:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80&auto=format",
  },
];
