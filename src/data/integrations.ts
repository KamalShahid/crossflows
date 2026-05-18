export interface IntegrationLogo {
  name: string;
  initials: string;
}

export const integrationsSection = {
  label: "Integrations",
  headline: "Works With Your Existing Business Systems",
  body: "Cross Flows Synergy solutions are designed to integrate with your existing communication platforms, scheduling systems, CRMs, operational tools, and business workflows — helping you modernize operations without disrupting your infrastructure.",
};

export const integrationLogos: IntegrationLogo[] = [
  { name: "Salesforce", initials: "SF" },
  { name: "HubSpot", initials: "HS" },
  { name: "Microsoft Teams", initials: "MT" },
  { name: "Google Calendar", initials: "GC" },
  { name: "Twilio", initials: "TW" },
  { name: "Zoho", initials: "ZO" },
  { name: "Slack", initials: "SL" },
];

export const integrationCategories: string[] = [
  "CRMs",
  "Scheduling Platforms",
  "Communication Tools",
  "Operational Software",
];
