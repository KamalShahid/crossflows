/**
 * Structured content for the /privacy-policy, /terms-of-service, and
 * /cookies pages. The `LegalPage` renderer walks the `blocks` array and
 * renders each block per its `type`.
 *
 * Inline emphasis: paragraphs and list-item text may contain
 * `**bold**` spans, which the renderer converts to `<strong>` at render
 * time. Line breaks inside a paragraph string are preserved via
 * `white-space: pre-line`.
 */

import { CONTACT } from "./contact";

export interface LegalListItem {
  /** Optional bold label rendered before the item text. */
  label?: string;
  text: string;
}

export type LegalBlock =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: LegalListItem[] };

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  blocks: LegalBlock[];
}

const contactBlock: LegalBlock[] = [
  {
    type: "paragraph",
    text: `Cross Flows Synergy\n${CONTACT.address.line1}\n${CONTACT.address.line2}\nEmail: **${CONTACT.email}**\nPhone: **${CONTACT.phone}**\nWebsite: **${CONTACT.website}**`,
  },
];

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  lastUpdated: "July 2, 2026",
  blocks: [
    { type: "heading", text: "Introduction" },
    {
      type: "paragraph",
      text: "Cross Flows Synergy (\"we,\" \"our,\" or \"us\") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at crossflows.ca and use our AI-powered business communication services.",
    },
    {
      type: "paragraph",
      text: "Please read this policy carefully. If you disagree with its terms, please discontinue use of our services.",
    },

    { type: "heading", text: "Information We Collect" },
    { type: "paragraph", text: "We collect information you provide directly to us, including:" },
    {
      type: "list",
      items: [
        { label: "Account information", text: "name, business email address, company name, phone number, and job title when you register for an account or book a demonstration" },
        { label: "Communication data", text: "messages, inquiries, and correspondence you send to us through contact forms, email, or live chat" },
        { label: "Payment information", text: "billing details processed securely through our payment partners — we do not store full payment card numbers" },
        { label: "Usage data", text: "information about how you interact with our platform, including features accessed, actions taken, and session duration" },
      ],
    },
    { type: "paragraph", text: "We also collect certain information automatically when you visit our website:" },
    {
      type: "list",
      items: [
        { text: "Device information (browser type, operating system, IP address)" },
        { text: "Pages visited, time spent, and referral source" },
        { text: "Cookie and tracking data as described in our Cookies Policy" },
      ],
    },

    { type: "heading", text: "How We Use Your Information" },
    { type: "paragraph", text: "We use the information we collect to:" },
    {
      type: "list",
      items: [
        { text: "Provide, operate, and improve our AI communication services" },
        { text: "Process transactions and send related information including confirmations and invoices" },
        { text: "Send administrative communications such as account updates and security alerts" },
        { text: "Respond to your comments, questions, and requests" },
        { text: "Send marketing communications where you have opted in — you may opt out at any time" },
        { text: "Monitor and analyse usage patterns to improve platform performance and user experience" },
        { text: "Comply with legal obligations and enforce our terms" },
      ],
    },

    { type: "heading", text: "How We Share Your Information" },
    {
      type: "paragraph",
      text: "We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:",
    },
    {
      type: "list",
      items: [
        { label: "Service providers", text: "trusted third-party vendors who assist us in operating our platform, processing payments, and delivering services — bound by confidentiality agreements" },
        { label: "Business transfers", text: "if Cross Flows Synergy is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction" },
        { label: "Legal requirements", text: "when required by law, regulation, court order, or to protect the rights and safety of our users and the public" },
        { label: "With your consent", text: "for any other purpose with your explicit consent" },
      ],
    },

    { type: "heading", text: "Data Retention" },
    {
      type: "paragraph",
      text: "We retain your personal information for as long as your account is active or as needed to provide services. We may retain certain information as required by law or for legitimate business purposes. When you request deletion of your data, we will remove your personal information within 30 days, subject to any legal retention requirements.",
    },

    { type: "heading", text: "Your Rights" },
    { type: "paragraph", text: "Depending on your location, you may have the following rights regarding your personal information:" },
    {
      type: "list",
      items: [
        { label: "Access", text: "request a copy of the personal information we hold about you" },
        { label: "Correction", text: "request correction of inaccurate or incomplete information" },
        { label: "Deletion", text: "request deletion of your personal information" },
        { label: "Portability", text: "request a machine-readable copy of your data" },
        { label: "Objection", text: "object to certain processing of your information" },
        { label: "Withdrawal of consent", text: "withdraw consent where processing is based on consent" },
      ],
    },
    {
      type: "paragraph",
      text: `To exercise any of these rights, contact us at **${CONTACT.email}**`,
    },

    { type: "heading", text: "Security" },
    {
      type: "paragraph",
      text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include encryption in transit and at rest, access controls, and regular security assessments.",
    },
    {
      type: "paragraph",
      text: "No method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.",
    },

    { type: "heading", text: "International Transfers" },
    {
      type: "paragraph",
      text: "Cross Flows Synergy operates globally. If you are located outside of Canada, your information may be transferred to and processed in countries where data protection laws may differ from those in your country. We take appropriate safeguards to ensure your information remains protected in accordance with this policy.",
    },

    { type: "heading", text: "Children's Privacy" },
    {
      type: "paragraph",
      text: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it promptly.",
    },

    { type: "heading", text: "Changes to This Policy" },
    {
      type: "paragraph",
      text: "We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page with a revised \"Last Updated\" date. Your continued use of our services after changes are posted constitutes your acceptance of the updated policy.",
    },

    { type: "heading", text: "Contact Us" },
    {
      type: "paragraph",
      text: "If you have questions about this Privacy Policy or our data practices, please contact us at:",
    },
    ...contactBlock,
  ],
};

export const termsOfService: LegalDocument = {
  title: "Terms of Service",
  lastUpdated: "July 2, 2026",
  blocks: [
    { type: "heading", text: "Agreement to Terms" },
    {
      type: "paragraph",
      text: "By accessing or using Cross Flows Synergy's website and services, you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, you may not access or use our services.",
    },
    {
      type: "paragraph",
      text: "These Terms apply to all visitors, users, and others who access or use our services.",
    },

    { type: "heading", text: "Description of Services" },
    {
      type: "paragraph",
      text: "Cross Flows Synergy provides AI-powered business communication solutions, including but not limited to SmartTalk™, WorkSync™, LearnMate™, and DriveFlow™. Our platform enables businesses to automate customer conversations, streamline workflows, and improve operational communication through artificial intelligence.",
    },

    { type: "heading", text: "Accounts and Registration" },
    {
      type: "paragraph",
      text: "To access certain features of our services, you must register for an account. You agree to:",
    },
    {
      type: "list",
      items: [
        { text: "Provide accurate, current, and complete information during registration" },
        { text: "Maintain and promptly update your account information" },
        { text: "Maintain the security and confidentiality of your login credentials" },
        { text: "Accept responsibility for all activities that occur under your account" },
        { text: "Notify us immediately of any unauthorized access or security breach" },
      ],
    },
    {
      type: "paragraph",
      text: "You must be at least 18 years of age and have the legal authority to enter into these Terms on behalf of yourself or your organization.",
    },

    { type: "heading", text: "Acceptable Use" },
    {
      type: "paragraph",
      text: "You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:",
    },
    {
      type: "list",
      items: [
        { text: "Use our services in any way that violates applicable laws or regulations" },
        { text: "Transmit unsolicited communications, spam, or bulk messaging" },
        { text: "Attempt to gain unauthorized access to our systems or other users' accounts" },
        { text: "Interfere with or disrupt the integrity or performance of our services" },
        { text: "Use our services to engage in fraudulent, deceptive, or harmful activities" },
        { text: "Reverse engineer, decompile, or attempt to extract source code from our platform" },
        { text: "Reproduce, duplicate, or resell any part of our services without written authorization" },
      ],
    },

    { type: "heading", text: "Intellectual Property" },
    {
      type: "paragraph",
      text: "Our services and all content, features, and functionality — including but not limited to software, text, graphics, logos, and design — are owned by Cross Flows Synergy and are protected by applicable intellectual property laws.",
    },
    {
      type: "paragraph",
      text: "You are granted a limited, non-exclusive, non-transferable license to access and use our services for your internal business purposes. This license does not include any right to:",
    },
    {
      type: "list",
      items: [
        { text: "Sublicense or transfer our services to third parties" },
        { text: "Use our brand, logos, or trademarks without written permission" },
        { text: "Create derivative works based on our services or content" },
      ],
    },

    { type: "heading", text: "Payment Terms" },
    {
      type: "paragraph",
      text: "Certain features of our services require payment. By subscribing to a paid plan, you agree to:",
    },
    {
      type: "list",
      items: [
        { text: "Pay all fees associated with your chosen plan" },
        { text: "Provide accurate billing information" },
        { text: "Authorize us to charge your payment method on a recurring basis for subscription services" },
      ],
    },
    {
      type: "paragraph",
      text: "Fees are non-refundable except as required by applicable law or as expressly stated in our refund policy. We reserve the right to change pricing with reasonable notice.",
    },

    { type: "heading", text: "Confidentiality" },
    {
      type: "paragraph",
      text: "You may have access to non-public information about Cross Flows Synergy or other users through use of our services. You agree to keep such information confidential and not disclose it to third parties without prior written consent.",
    },

    { type: "heading", text: "Disclaimers" },
    {
      type: "paragraph",
      text: "Our services are provided \"as is\" and \"as available\" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or free of harmful components.",
    },
    {
      type: "paragraph",
      text: "We make no representations regarding the accuracy, reliability, or completeness of any content or results generated by our AI systems. You are responsible for reviewing and validating any AI-generated output before acting on it.",
    },

    { type: "heading", text: "Limitation of Liability" },
    {
      type: "paragraph",
      text: "To the maximum extent permitted by law, Cross Flows Synergy and its directors, employees, partners, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use or inability to use our services.",
    },
    {
      type: "paragraph",
      text: "Our total liability for any claims arising from these Terms or our services shall not exceed the amount you paid to us in the twelve months preceding the claim.",
    },

    { type: "heading", text: "Indemnification" },
    {
      type: "paragraph",
      text: "You agree to indemnify and hold harmless Cross Flows Synergy and its affiliates, officers, agents, and employees from any claims, liabilities, damages, losses, and expenses arising from your use of our services, your violation of these Terms, or your infringement of any third-party rights.",
    },

    { type: "heading", text: "Termination" },
    {
      type: "paragraph",
      text: "We reserve the right to suspend or terminate your access to our services at our discretion, with or without cause, and with or without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.",
    },
    {
      type: "paragraph",
      text: "Upon termination, your right to use our services will immediately cease. Provisions of these Terms that by their nature should survive termination shall survive.",
    },

    { type: "heading", text: "Governing Law" },
    {
      type: "paragraph",
      text: "These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario, Canada, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Ontario, Canada.",
    },

    { type: "heading", text: "Changes to Terms" },
    {
      type: "paragraph",
      text: "We reserve the right to modify these Terms at any time. We will notify users of material changes by posting an updated version with a revised \"Last Updated\" date. Your continued use of our services after changes are posted constitutes acceptance of the updated Terms.",
    },

    { type: "heading", text: "Contact Us" },
    { type: "paragraph", text: "For questions about these Terms, contact us at:" },
    ...contactBlock,
  ],
};

export const cookiesPolicy: LegalDocument = {
  title: "Cookies Policy",
  lastUpdated: "July 2, 2026",
  blocks: [
    { type: "heading", text: "What Are Cookies" },
    {
      type: "paragraph",
      text: "Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Cross Flows Synergy uses cookies and similar tracking technologies to improve your experience on our website.",
    },

    { type: "heading", text: "How We Use Cookies" },
    { type: "paragraph", text: "We use cookies for the following purposes:" },

    { type: "subheading", text: "Essential Cookies" },
    {
      type: "paragraph",
      text: "These cookies are necessary for our website to function properly. They enable core functionality such as user authentication, session management, and security. You cannot opt out of these cookies as they are required for the site to operate.",
    },
    { type: "paragraph", text: "Examples:" },
    {
      type: "list",
      items: [
        { text: "Session authentication tokens" },
        { text: "Security and fraud prevention cookies" },
        { text: "Load balancing cookies" },
      ],
    },

    { type: "subheading", text: "Functional Cookies" },
    {
      type: "paragraph",
      text: "These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.",
    },
    { type: "paragraph", text: "Examples:" },
    {
      type: "list",
      items: [
        { text: "Language and region preferences" },
        { text: "Previously viewed content or settings" },
        { text: "Live chat session persistence" },
      ],
    },

    { type: "subheading", text: "Analytics Cookies" },
    {
      type: "paragraph",
      text: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.",
    },
    { type: "paragraph", text: "Examples:" },
    {
      type: "list",
      items: [
        { text: "Page views and session duration" },
        { text: "Traffic source and referral data" },
        { text: "Feature usage and click patterns" },
      ],
    },

    { type: "subheading", text: "Marketing Cookies" },
    {
      type: "paragraph",
      text: "These cookies may be set by our advertising partners to build a profile of your interests and show you relevant advertisements on other sites. They do not directly store personal information but are based on uniquely identifying your browser and device.",
    },
    { type: "paragraph", text: "Examples:" },
    {
      type: "list",
      items: [
        { text: "Retargeting cookies from advertising platforms" },
        { text: "Social media sharing and engagement tracking" },
      ],
    },

    { type: "heading", text: "Third-Party Cookies" },
    {
      type: "paragraph",
      text: "Some cookies on our website are placed by third-party services we use. These include:",
    },
    {
      type: "list",
      items: [
        { label: "Analytics providers", text: "for website traffic analysis" },
        { label: "Customer support tools", text: "for live chat functionality" },
        { label: "Marketing platforms", text: "for campaign measurement" },
      ],
    },
    {
      type: "paragraph",
      text: "These third parties have their own privacy policies and cookie practices. We recommend reviewing their policies for more information.",
    },

    { type: "heading", text: "Managing Cookies" },
    { type: "paragraph", text: "You can control and manage cookies in several ways:" },
    {
      type: "paragraph",
      text: "**Browser settings:** Most browsers allow you to view, delete, and block cookies through their settings. Note that blocking all cookies may affect the functionality of our website and other sites you visit.",
    },
    {
      type: "paragraph",
      text: "**Opt-out tools:** You can opt out of analytics and marketing cookies through industry opt-out tools such as the Digital Advertising Alliance or the Network Advertising Initiative.",
    },
    {
      type: "paragraph",
      text: "**Cookie consent:** When you first visit our website, you will be presented with a cookie consent notice where you can choose which categories of cookies to accept.",
    },
    { type: "paragraph", text: "To manage cookies in your browser, refer to your browser's help documentation:" },
    {
      type: "list",
      items: [
        { label: "Chrome", text: "Settings → Privacy and Security → Cookies" },
        { label: "Firefox", text: "Settings → Privacy & Security → Cookies and Site Data" },
        { label: "Safari", text: "Preferences → Privacy → Manage Website Data" },
        { label: "Edge", text: "Settings → Cookies and Site Permissions" },
      ],
    },

    { type: "heading", text: "Cookie Retention" },
    {
      type: "paragraph",
      text: "The length of time a cookie remains on your device depends on whether it is a \"session\" or \"persistent\" cookie:",
    },
    {
      type: "list",
      items: [
        { label: "Session cookies", text: "are temporary and are deleted when you close your browser" },
        { label: "Persistent cookies", text: "remain on your device for a set period or until manually deleted" },
      ],
    },
    {
      type: "paragraph",
      text: "Most analytics and marketing cookies we use are persistent and typically expire between 30 days and 2 years.",
    },

    { type: "heading", text: "Changes to This Policy" },
    {
      type: "paragraph",
      text: "We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated policy on this page with a revised \"Last Updated\" date.",
    },

    { type: "heading", text: "Contact Us" },
    { type: "paragraph", text: "If you have questions about our use of cookies, please contact us at:" },
    ...contactBlock,
  ],
};
