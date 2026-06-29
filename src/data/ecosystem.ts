export interface EcosystemTile {
  id: string;
  name: string;
  category: string;
  /** jsDelivr Simple Icons URL, inline SVG data URI, or `null` for brands with no logo source (e.g. Pipedrive) so the tile renders a 2-letter text fallback. */
  logoSrc: string | null;
  /** Real brand hex color — used for the hover border, the fallback text color, and as the source for the per-tile CSS color filter in EcosystemGrid. */
  accentColor: string;
  /** Soft brand-tinted background used by the tile container at rest. */
  tileBg: string;
  /** Bright surface used when the tile is hovered (typically `#FFFFFF`). */
  tileBgHover: string;
  /** Border color shown only on hover. */
  borderColorHover: string;
}

export interface CloudPlatform {
  id: string;
  name: string;
  logoSrc: string | null;
  /** Real brand hex color — used for the 8% hover background tint and to recolor the white logo on hover. */
  accentColor: string;
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
 * use jsDelivr instead. Logos render in their full brand colors via
 * `<LogoTile>` — no CSS filters or hover toggles applied.
 */
const simpleIcon = (slug: string): string =>
  `https://cdn.jsdelivr.net/npm/simple-icons@12/icons/${slug}.svg`;

// ElevenLabs has no simple-icons entry — inline a 3-vertical-bars mark as
// a data URI. `fill='%23000000'` is the URL-encoded `#000000` so the bars
// are black; the per-tile CSS color filter in EcosystemGrid recolors them
// to the brand color at render time, and the white hover surface keeps
// them visible.
const elevenlabsDataUri =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='12' y='15' width='20' height='70' rx='5' fill='%23000000'/%3E%3Crect x='40' y='15' width='20' height='70' rx='5' fill='%23000000'/%3E%3Crect x='68' y='15' width='20' height='70' rx='5' fill='%23000000'/%3E%3C/svg%3E";

export const ecosystemTiles: EcosystemTile[] = [
  // Row 1 — AI & Voice
  { id: "openai", name: "OpenAI", category: "Reasoning", logoSrc: simpleIcon("openai"), accentColor: "#10A37F", tileBg: "rgba(16,163,127,0.08)", tileBgHover: "#FFFFFF", borderColorHover: "rgba(16,163,127,0.4)" },
  { id: "anthropic", name: "Claude", category: "Intelligence", logoSrc: simpleIcon("anthropic"), accentColor: "#CC785C", tileBg: "rgba(204,120,92,0.08)", tileBgHover: "#FFFFFF", borderColorHover: "rgba(204,120,92,0.4)" },
  { id: "elevenlabs", name: "ElevenLabs", category: "Voice AI", logoSrc: elevenlabsDataUri, accentColor: "#111111", tileBg: "rgba(17,17,17,0.06)", tileBgHover: "#FFFFFF", borderColorHover: "rgba(0,0,0,0.25)" },
  { id: "twilio", name: "Twilio", category: "Transport", logoSrc: simpleIcon("twilio"), accentColor: "#F22F46", tileBg: "rgba(242,47,70,0.07)", tileBgHover: "#FFFFFF", borderColorHover: "rgba(242,47,70,0.4)" },
  { id: "salesforce", name: "Salesforce", category: "CRM", logoSrc: simpleIcon("salesforce"), accentColor: "#00A1E0", tileBg: "rgba(0,161,224,0.08)", tileBgHover: "#FFFFFF", borderColorHover: "rgba(0,161,224,0.4)" },

  // Row 2 — Comms & Ops
  { id: "hubspot", name: "HubSpot", category: "Marketing", logoSrc: simpleIcon("hubspot"), accentColor: "#FF7A59", tileBg: "rgba(255,122,89,0.08)", tileBgHover: "#FFFFFF", borderColorHover: "rgba(255,122,89,0.4)" },
  { id: "slack", name: "Slack", category: "Messaging", logoSrc: simpleIcon("slack"), accentColor: "#4A154B", tileBg: "rgba(74,21,75,0.08)", tileBgHover: "#FFFFFF", borderColorHover: "rgba(74,21,75,0.4)" },
  { id: "zoho", name: "Zoho", category: "Operations", logoSrc: simpleIcon("zoho"), accentColor: "#E42527", tileBg: "rgba(228,37,39,0.07)", tileBgHover: "#FFFFFF", borderColorHover: "rgba(228,37,39,0.4)" },
  { id: "microsoftteams", name: "MS Teams", category: "Workspace", logoSrc: simpleIcon("microsoftteams"), accentColor: "#6264A7", tileBg: "rgba(98,100,167,0.08)", tileBgHover: "#FFFFFF", borderColorHover: "rgba(98,100,167,0.4)" },
  { id: "googlecalendar", name: "G. Calendar", category: "Scheduling", logoSrc: simpleIcon("googlecalendar"), accentColor: "#4285F4", tileBg: "rgba(66,133,244,0.08)", tileBgHover: "#FFFFFF", borderColorHover: "rgba(66,133,244,0.4)" },

  // Row 3 — Infrastructure
  { id: "stripe", name: "Stripe", category: "Payments", logoSrc: simpleIcon("stripe"), accentColor: "#635BFF", tileBg: "rgba(99,91,255,0.08)", tileBgHover: "#FFFFFF", borderColorHover: "rgba(99,91,255,0.4)" },
  { id: "zapier", name: "Zapier", category: "Automation", logoSrc: simpleIcon("zapier"), accentColor: "#FF4A00", tileBg: "rgba(255,74,0,0.08)", tileBgHover: "#FFFFFF", borderColorHover: "rgba(255,74,0,0.4)" },
  { id: "intercom", name: "Intercom", category: "Support", logoSrc: simpleIcon("intercom"), accentColor: "#1F8DED", tileBg: "rgba(31,141,237,0.08)", tileBgHover: "#FFFFFF", borderColorHover: "rgba(31,141,237,0.4)" },
  { id: "deepgram", name: "Deepgram", category: "Transcription", logoSrc: simpleIcon("deepgram"), accentColor: "#13EF93", tileBg: "rgba(19,239,147,0.08)", tileBgHover: "#FFFFFF", borderColorHover: "rgba(19,239,147,0.45)" },
  // Pipedrive has no Simple Icons entry — `null` triggers the styled "PI" text fallback.
  { id: "pipedrive", name: "Pipedrive", category: "Pipeline", logoSrc: null, accentColor: "#00C850", tileBg: "rgba(0,200,80,0.08)", tileBgHover: "#FFFFFF", borderColorHover: "rgba(0,200,80,0.4)" },
];

export const cloudPlatforms: CloudPlatform[] = [
  // NOTE: the canonical Simple Icons slug for AWS is `amazonwebservices`,
  // NOT `amazonaws` (which 404s).
  { id: "aws", name: "AWS", logoSrc: simpleIcon("amazonwebservices"), accentColor: "#FF9900", tooltip: "Amazon Web Services" },
  { id: "gcp", name: "Google Cloud", logoSrc: simpleIcon("googlecloud"), accentColor: "#4285F4", tooltip: "Google Cloud" },
  { id: "azure", name: "Azure", logoSrc: simpleIcon("microsoftazure"), accentColor: "#0078D4", tooltip: "Microsoft Azure" },
];

export const complianceBadges: ComplianceBadge[] = [
  { id: "soc2", title: "SOC 2 TYPE II", subtitle: "Enterprise Data Guard" },
  { id: "hipaa", title: "HIPAA READY", subtitle: "Clinical Flow Secure" },
  { id: "pci", title: "PCI COMPLIANCE", subtitle: "Payments Orchestration" },
  { id: "iso", title: "ISO 27001", subtitle: "Global Standards" },
];
