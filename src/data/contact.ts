/**
 * Single source of truth for Cross Flows Synergy contact details.
 * Import from this file everywhere contact information is rendered
 * (Contact page, footer, legal pages, mailto/tel links, etc.) so any
 * future change lives in exactly one place.
 */
export const CONTACT = {
  address: {
    line1: "5063 North Service Rd, Suite 100-511",
    line2: "Burlington, ON L7L 5H6, Canada",
    full: "5063 North Service Rd, Suite 100-511, Burlington, ON L7L 5H6, Canada",
  },
  email: "contact@crossflows.ca",
  emailHref: "mailto:contact@crossflows.ca",
  phone: "437-972-2716",
  // No dashes in the tel: href — some mobile dialers misinterpret them.
  phoneHref: "tel:4379722716",
  website: "crossflows.ca",
} as const;
