export interface IntegrationLogo {
  name: string;
  /** jsDelivr Simple Icons URL, or `null` to force the LogoTile fallback (used for brands without a Simple Icons entry). */
  url: string | null;
  initials: string;
}

export const integrationsSection = {
  label: "Integrations",
  headline: "Works With Your Existing Business Systems",
  body: "Seamless integration with the tools your teams already use.",
};

/**
 * URLs use jsDelivr pinned at `simple-icons@12`. The previous
 * `logo.clearbit.com` endpoints have been deprecated and the
 * `cdn.simpleicons.org` endpoint returns 403 for browser-app requests.
 */
const simpleIcon = (slug: string): string =>
  `https://cdn.jsdelivr.net/npm/simple-icons@12/icons/${slug}.svg`;

export const integrationLogos: IntegrationLogo[] = [
  { name: "Salesforce", url: simpleIcon("salesforce"), initials: "SF" },
  { name: "HubSpot", url: simpleIcon("hubspot"), initials: "HS" },
  { name: "Microsoft Teams", url: simpleIcon("microsoftteams"), initials: "MT" },
  { name: "Google Calendar", url: simpleIcon("googlecalendar"), initials: "GC" },
  { name: "Twilio", url: simpleIcon("twilio"), initials: "TW" },
  { name: "Zoho", url: simpleIcon("zoho"), initials: "ZO" },
  { name: "Slack", url: simpleIcon("slack"), initials: "SL" },
];

export const integrationCategories: string[] = [
  "CRMs",
  "Scheduling Platforms",
  "Communication Tools",
  "Operational Software",
];
