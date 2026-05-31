export interface EcosystemTile {
  id: string;
  name: string;
  category: string;
  logoSrc: string;
  /** Background color of the icon container when its tile is hovered. */
  logoBg: string;
  /** Color of the category label when its tile is hovered. */
  accentColor: string;
}

export interface CloudPlatform {
  id: string;
  name: string;
  logoSrc: string;
  tooltip: string;
}

export interface ComplianceBadge {
  id: string;
  title: string;
  subtitle: string;
}

/**
 * Brand glyphs are served from the SimpleIcons CDN
 * (https://cdn.simpleicons.org/<slug>/<hex>). The hex is each brand's
 * primary color — no leading "#". Any slug that's missing from the
 * library will 404 and the tile's onError handler falls back to a
 * 2-letter initials swatch.
 */
const simpleIcon = (slug: string, hex: string): string =>
  `https://cdn.simpleicons.org/${slug}/${hex}`;

export const ecosystemTiles: EcosystemTile[] = [
  // Row 1 — AI & Voice
  { id: "openai", name: "OpenAI", category: "Reasoning", logoSrc: simpleIcon("openai", "10a37f"), logoBg: "rgba(16,163,127,0.08)", accentColor: "#10a37f" },
  { id: "anthropic", name: "Claude", category: "Intelligence", logoSrc: simpleIcon("anthropic", "d97757"), logoBg: "rgba(217,119,87,0.08)", accentColor: "#d97757" },
  { id: "elevenlabs", name: "ElevenLabs", category: "Voice AI", logoSrc: simpleIcon("elevenlabs", "ffffff"), logoBg: "rgba(255,255,255,0.06)", accentColor: "#e5e7eb" },
  { id: "twilio", name: "Twilio", category: "Transport", logoSrc: simpleIcon("twilio", "f22f46"), logoBg: "rgba(242,47,70,0.08)", accentColor: "#f22f46" },
  { id: "salesforce", name: "Salesforce", category: "CRM", logoSrc: simpleIcon("salesforce", "00a1e0"), logoBg: "rgba(0,161,224,0.08)", accentColor: "#00a1e0" },

  // Row 2 — Comms & Ops
  { id: "hubspot", name: "HubSpot", category: "Marketing", logoSrc: simpleIcon("hubspot", "ff7a59"), logoBg: "rgba(255,122,89,0.08)", accentColor: "#ff7a59" },
  { id: "slack", name: "Slack", category: "Messaging", logoSrc: simpleIcon("slack", "ecb22e"), logoBg: "rgba(236,178,46,0.08)", accentColor: "#ecb22e" },
  { id: "zoho", name: "Zoho", category: "Operations", logoSrc: simpleIcon("zoho", "e42527"), logoBg: "rgba(228,37,39,0.08)", accentColor: "#e42527" },
  { id: "teams", name: "MS Teams", category: "Workspace", logoSrc: simpleIcon("microsoftteams", "6499ff"), logoBg: "rgba(100,153,255,0.08)", accentColor: "#6499ff" },
  { id: "gcalendar", name: "G. Calendar", category: "Scheduling", logoSrc: simpleIcon("googlecalendar", "4285f4"), logoBg: "rgba(66,133,244,0.08)", accentColor: "#4285f4" },

  // Row 3 — Infrastructure
  { id: "stripe", name: "Stripe", category: "Payments", logoSrc: simpleIcon("stripe", "8a7cff"), logoBg: "rgba(138,124,255,0.08)", accentColor: "#8a7cff" },
  { id: "zapier", name: "Zapier", category: "Automation", logoSrc: simpleIcon("zapier", "ff4f00"), logoBg: "rgba(255,79,0,0.08)", accentColor: "#ff4f00" },
  { id: "intercom", name: "Intercom", category: "Support", logoSrc: simpleIcon("intercom", "3571fc"), logoBg: "rgba(53,113,252,0.08)", accentColor: "#3571fc" },
  { id: "deepgram", name: "Deepgram", category: "Transcription", logoSrc: simpleIcon("deepgram", "13ef93"), logoBg: "rgba(19,239,147,0.08)", accentColor: "#13ef93" },
  { id: "pipedrive", name: "Pipedrive", category: "Pipeline", logoSrc: simpleIcon("pipedrive", "22965a"), logoBg: "rgba(34,150,90,0.08)", accentColor: "#22965a" },
];

export const cloudPlatforms: CloudPlatform[] = [
  { id: "aws", name: "AWS", logoSrc: simpleIcon("amazonaws", "ff9900"), tooltip: "AWS" },
  { id: "gcp", name: "Google Cloud", logoSrc: simpleIcon("googlecloud", "4285f4"), tooltip: "Google Cloud" },
  { id: "azure", name: "Azure", logoSrc: simpleIcon("microsoftazure", "0089d6"), tooltip: "Azure AI" },
];

export const complianceBadges: ComplianceBadge[] = [
  { id: "soc2", title: "SOC 2 TYPE II", subtitle: "Enterprise Data Guard" },
  { id: "hipaa", title: "HIPAA READY", subtitle: "Clinical Flow Secure" },
  { id: "pci", title: "PCI COMPLIANCE", subtitle: "Payments Orchestration" },
  { id: "iso", title: "ISO 27001", subtitle: "Global Standards" },
];
