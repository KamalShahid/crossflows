export interface EcosystemTile {
  id: string;
  name: string;
  category: string;
  /** jsDelivr Simple Icons URL, or `null` for brands with no Simple Icons entry (e.g. Pipedrive) so the LogoTile renders a 2-letter fallback. */
  logoSrc: string | null;
  /** Background color of the icon container when its tile is hovered. */
  logoBg: string;
  /** Color of the category label when its tile is hovered. */
  accentColor: string;
}

export interface CloudPlatform {
  id: string;
  name: string;
  logoSrc: string | null;
  tooltip: string;
}

export interface ComplianceBadge {
  id: string;
  title: string;
  subtitle: string;
}

/**
 * Brand glyphs are served from the jsDelivr CDN, pinned to
 * `simple-icons@12` which still includes the enterprise brand logos
 * (Salesforce, HubSpot, AWS, Azure, etc.) that were trimmed from later
 * versions of the package. The `cdn.simpleicons.org` endpoint we used
 * previously returns 403 for browser-app requests, so the URLs below
 * use jsDelivr instead. Logos render monochrome white via the
 * `brightness(0) invert(1)` CSS filter in `<LogoTile>` and snap back to
 * their brand color on hover.
 */
const simpleIcon = (slug: string): string =>
  `https://cdn.jsdelivr.net/npm/simple-icons@12/icons/${slug}.svg`;

export const ecosystemTiles: EcosystemTile[] = [
  // Row 1 — AI & Voice
  { id: "openai", name: "OpenAI", category: "Reasoning", logoSrc: simpleIcon("openai"), logoBg: "rgba(16,163,127,0.08)", accentColor: "#10a37f" },
  { id: "anthropic", name: "Claude", category: "Intelligence", logoSrc: simpleIcon("anthropic"), logoBg: "rgba(217,119,87,0.08)", accentColor: "#d97757" },
  { id: "elevenlabs", name: "ElevenLabs", category: "Voice AI", logoSrc: simpleIcon("elevenlabs"), logoBg: "rgba(255,255,255,0.06)", accentColor: "#e5e7eb" },
  { id: "twilio", name: "Twilio", category: "Transport", logoSrc: simpleIcon("twilio"), logoBg: "rgba(242,47,70,0.08)", accentColor: "#f22f46" },
  { id: "salesforce", name: "Salesforce", category: "CRM", logoSrc: simpleIcon("salesforce"), logoBg: "rgba(0,161,224,0.08)", accentColor: "#00a1e0" },

  // Row 2 — Comms & Ops
  { id: "hubspot", name: "HubSpot", category: "Marketing", logoSrc: simpleIcon("hubspot"), logoBg: "rgba(255,122,89,0.08)", accentColor: "#ff7a59" },
  { id: "slack", name: "Slack", category: "Messaging", logoSrc: simpleIcon("slack"), logoBg: "rgba(236,178,46,0.08)", accentColor: "#ecb22e" },
  { id: "zoho", name: "Zoho", category: "Operations", logoSrc: simpleIcon("zoho"), logoBg: "rgba(228,37,39,0.08)", accentColor: "#e42527" },
  { id: "teams", name: "MS Teams", category: "Workspace", logoSrc: simpleIcon("microsoftteams"), logoBg: "rgba(100,153,255,0.08)", accentColor: "#6499ff" },
  { id: "gcalendar", name: "G. Calendar", category: "Scheduling", logoSrc: simpleIcon("googlecalendar"), logoBg: "rgba(66,133,244,0.08)", accentColor: "#4285f4" },

  // Row 3 — Infrastructure
  { id: "stripe", name: "Stripe", category: "Payments", logoSrc: simpleIcon("stripe"), logoBg: "rgba(138,124,255,0.08)", accentColor: "#8a7cff" },
  { id: "zapier", name: "Zapier", category: "Automation", logoSrc: simpleIcon("zapier"), logoBg: "rgba(255,79,0,0.08)", accentColor: "#ff4f00" },
  { id: "intercom", name: "Intercom", category: "Support", logoSrc: simpleIcon("intercom"), logoBg: "rgba(53,113,252,0.08)", accentColor: "#3571fc" },
  { id: "deepgram", name: "Deepgram", category: "Transcription", logoSrc: simpleIcon("deepgram"), logoBg: "rgba(19,239,147,0.08)", accentColor: "#13ef93" },
  // Pipedrive has no Simple Icons entry — `null` forces the LogoTile to always render the "PI" text fallback.
  { id: "pipedrive", name: "Pipedrive", category: "Pipeline", logoSrc: null, logoBg: "rgba(34,150,90,0.08)", accentColor: "#22965a" },
];

export const cloudPlatforms: CloudPlatform[] = [
  // NOTE: the canonical Simple Icons slug for AWS is `amazonwebservices`,
  // NOT `amazonaws` (which 404s).
  { id: "aws", name: "AWS", logoSrc: simpleIcon("amazonwebservices"), tooltip: "AWS" },
  { id: "gcp", name: "Google Cloud", logoSrc: simpleIcon("googlecloud"), tooltip: "Google Cloud" },
  { id: "azure", name: "Azure", logoSrc: simpleIcon("microsoftazure"), tooltip: "Azure AI" },
];

export const complianceBadges: ComplianceBadge[] = [
  { id: "soc2", title: "SOC 2 TYPE II", subtitle: "Enterprise Data Guard" },
  { id: "hipaa", title: "HIPAA READY", subtitle: "Clinical Flow Secure" },
  { id: "pci", title: "PCI COMPLIANCE", subtitle: "Payments Orchestration" },
  { id: "iso", title: "ISO 27001", subtitle: "Global Standards" },
];
