export interface IntegrationLogo {
  name: string;
  url: string;
  initials: string;
}

export const integrationsSection = {
  label: "Integrations",
  headline: "Works With Your Existing Business Systems",
  body: "Seamless integration with the tools your teams already use.",
};

export const integrationLogos: IntegrationLogo[] = [
  {
    name: "Salesforce",
    url: "https://logo.clearbit.com/salesforce.com",
    initials: "SF",
  },
  {
    name: "HubSpot",
    url: "https://logo.clearbit.com/hubspot.com",
    initials: "HS",
  },
  {
    name: "Microsoft Teams",
    url: "https://logo.clearbit.com/microsoft.com",
    initials: "MT",
  },
  {
    name: "Google Calendar",
    url: "https://logo.clearbit.com/google.com",
    initials: "GC",
  },
  {
    name: "Twilio",
    url: "https://logo.clearbit.com/twilio.com",
    initials: "TW",
  },
  {
    name: "Zoho",
    url: "https://logo.clearbit.com/zoho.com",
    initials: "ZO",
  },
  {
    name: "Slack",
    url: "https://logo.clearbit.com/slack.com",
    initials: "SL",
  },
];

export const integrationCategories: string[] = [
  "CRMs",
  "Scheduling Platforms",
  "Communication Tools",
  "Operational Software",
];
