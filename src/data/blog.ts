export type BlogCategory =
  | "Product Updates"
  | "Industry Insights"
  | "Case Studies"
  | "Company News";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  authorRole: string;
  date: string;
  readMinutes: number;
  cover: string;
  body: {
    intro: string;
    sections: { heading: string; paragraphs: string[] }[];
    closingQuote?: { text: string; attribution: string };
  };
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "voice-ai-enterprise-2026",
    title: "The quiet rewrite: how voice AI moved from novelty to enterprise backbone in 2026",
    excerpt:
      "Eighteen months ago, conversational AI was a demo. Today, it’s carrying real call volume for half the Fortune 500. Here’s what changed.",
    category: "Industry Insights",
    author: "Amelia Hart",
    authorRole: "VP, Product",
    date: "2026-04-28",
    readMinutes: 7,
    cover: "https://placehold.co/1200x720/0f1420/00d4ff?text=Voice+AI+2026",
    body: {
      intro:
        "When we launched SmartTalk™ in early 2024, the question we heard most often was, “Can it actually replace a phone tree?” In 2026, that question is gone — replaced by something much harder.",
      sections: [
        {
          heading: "From containment metrics to outcome metrics",
          paragraphs: [
            "Two years ago, the bar for an AI agent was “did you avoid sending the call to a human?” Today, the customers who win are the ones measuring resolution — did the caller’s problem actually get solved, end to end?",
            "That shift matters more than it sounds. Containment incentivizes deflection. Resolution incentivizes empathy, escalation when needed, and learning from every call.",
          ],
        },
        {
          heading: "The latency moat is real",
          paragraphs: [
            "Sub-200ms turn-taking is the difference between a conversation and a walkie-talkie exchange. We see double-digit jumps in customer satisfaction scores when we close that gap.",
            "Latency is also where smaller, focused players outrun the platform giants. Stack depth doesn’t help if your speech engine is still buffering.",
          ],
        },
      ],
      closingQuote: {
        text: "Customers don’t care that there’s an AI on the line. They care that someone — anyone — listened the first time.",
        attribution: "Amelia Hart, VP Product, Cross Flows Synergy",
      },
    },
    tags: ["voice", "enterprise", "trends"],
  },
  {
    slug: "driveflow-launch",
    title: "DriveFlow™ is live: rebuilding the drive-thru without changing the kitchen",
    excerpt:
      "DriveFlow™ is now generally available across North America. Here’s why we built it, what it actually does, and how to pilot it.",
    category: "Product Updates",
    author: "Jordan Mensah",
    authorRole: "Lead PM, DriveFlow™",
    date: "2026-04-10",
    readMinutes: 5,
    cover: "https://placehold.co/1200x720/0f1420/f5a623?text=DriveFlow™+Launch",
    body: {
      intro:
        "Most drive-thru AI projects fail in the same place: they try to replace the line cook too. DriveFlow™ doesn’t. It replaces the part of the system everyone — staff and customers — already knows is broken.",
      sections: [
        {
          heading: "What DriveFlow™ actually changes",
          paragraphs: [
            "DriveFlow™ listens, clarifies, suggests, and writes a clean ticket to your POS. That’s it. The kitchen workflow you spent years tuning stays untouched.",
            "Pilot operators see throughput lifts of 8–14% during peak windows and average-ticket gains of 6–11% from context-aware upsells.",
          ],
        },
        {
          heading: "Where it fits",
          paragraphs: [
            "QSR brands with 50+ locations, especially those running Toast, Oracle Symphony, NCR, or PAR. We typically pilot a single market for 6–8 weeks before regional rollout.",
          ],
        },
      ],
    },
    tags: ["driveflow", "launch", "qsr"],
  },
  {
    slug: "regional-bank-payment-automation",
    title: "Case study: a regional bank cut payment-recovery cost 41% in a quarter",
    excerpt:
      "How a 200-branch regional bank deployed SmartTalk™ and WorkSync™ to fully automate failed-payment recovery — without touching their core ledger.",
    category: "Case Studies",
    author: "Priya Raghunathan",
    authorRole: "Director, Financial Services",
    date: "2026-03-22",
    readMinutes: 8,
    cover: "https://placehold.co/1200x720/0f1420/3a8dff?text=Banking+Case+Study",
    body: {
      intro:
        "Failed-payment recovery is one of the least loved jobs in retail banking. It’s repetitive, it’s emotionally taxing for agents, and it’s expensive. A regional bank we worked with last quarter is now running 70% of that workflow without a human ever picking up.",
      sections: [
        {
          heading: "The brief",
          paragraphs: [
            "200 branches. Roughly 14,000 outbound recovery calls per week. Agent attrition above 35% annualized. Every minute saved was real money — and real morale.",
          ],
        },
        {
          heading: "What we shipped",
          paragraphs: [
            "SmartTalk™ handles the outbound call, identity check, and payment flow. WorkSync™ orchestrates the case across the bank’s ledger, CRM, and compliance log. Humans take the hard cases, the AI handles the rest.",
          ],
        },
        {
          heading: "The numbers",
          paragraphs: [
            "Payment-recovery cost per case fell 41% in the first quarter. CSAT on automated calls landed 6 points above the human-handled baseline.",
          ],
        },
      ],
    },
    tags: ["banking", "case-study", "smarttalk"],
  },
  {
    slug: "language-coverage-update",
    title: "Eight new languages and a smarter way to handle accents",
    excerpt:
      "We just rolled out native voice coverage in eight new languages, including Swahili, Tagalog, and Pashto. Here’s how we did it.",
    category: "Product Updates",
    author: "Rafael Okonkwo",
    authorRole: "Staff Engineer, Speech",
    date: "2026-03-08",
    readMinutes: 4,
    cover: "https://placehold.co/1200x720/0f1420/9b6bff?text=Languages+Update",
    body: {
      intro:
        "Forty languages is just a number on a marketing slide if half of them sound robotic. The work behind this release was less about adding languages and more about making the ones we already shipped feel native.",
      sections: [
        {
          heading: "What’s new",
          paragraphs: [
            "Eight new languages, all with native-quality voice synthesis and improved accent-aware ASR. Existing customers don’t need to do anything to access them.",
          ],
        },
        {
          heading: "Why accents are still the hardest part",
          paragraphs: [
            "Accent variation inside a single language is harder than supporting a new one. We rebuilt our accent-adaptation pipeline to learn from each customer’s live traffic, with privacy guarantees on by default.",
          ],
        },
      ],
    },
    tags: ["languages", "speech", "release"],
  },
  {
    slug: "series-c-funding",
    title: "Announcing our Series C: doubling down on agentic workflows",
    excerpt:
      "We’ve raised $84M to accelerate WorkSync™, expand our security and compliance footprint, and open offices in Singapore and São Paulo.",
    category: "Company News",
    author: "Daniel Park",
    authorRole: "CEO",
    date: "2026-02-14",
    readMinutes: 3,
    cover: "https://placehold.co/1200x720/0f1420/00d4ff?text=Series+C",
    body: {
      intro:
        "Today we’re announcing our Series C — $84M led by Northbridge Capital, with participation from Lattice Ventures, Helios Partners, and our existing investors.",
      sections: [
        {
          heading: "What we’re investing in",
          paragraphs: [
            "Most of the capital is going into WorkSync™ — our agentic workflow layer — and into the compliance footprint our largest customers need to keep buying more.",
            "We’re also opening go-to-market offices in Singapore and São Paulo to better serve customers in APAC and LATAM.",
          ],
        },
      ],
    },
    tags: ["funding", "company"],
  },
  {
    slug: "healthcare-triage-pilot",
    title: "Field notes: triage scripting in a regional hospital network",
    excerpt:
      "Lessons from a 90-day pilot deploying SmartTalk™ for after-hours triage scripting across 12 clinics.",
    category: "Industry Insights",
    author: "Dr. Lena Sørensen",
    authorRole: "Clinical Strategy Lead",
    date: "2026-01-29",
    readMinutes: 6,
    cover: "https://placehold.co/1200x720/0f1420/7af9ff?text=Healthcare+Triage",
    body: {
      intro:
        "After-hours triage is one of those workflows where the cost of getting it wrong is unbounded. That’s exactly why we approached this pilot with more guardrails than usual — and learned more from it than we expected.",
      sections: [
        {
          heading: "What the pilot looked like",
          paragraphs: [
            "Twelve clinics, 90 days, after-hours only. SmartTalk™ handled intake, triage scripting, and scheduling. Every call had a clinician on standby and a hard escalation threshold.",
          ],
        },
        {
          heading: "What surprised us",
          paragraphs: [
            "The biggest unlock wasn’t deflecting calls — it was the structured intake notes that arrived in the morning. Clinicians started their day with a triaged list instead of an inbox.",
          ],
        },
      ],
    },
    tags: ["healthcare", "smarttalk", "pilot"],
  },
];

export const blogCategories: ("All" | BlogCategory)[] = [
  "All",
  "Product Updates",
  "Industry Insights",
  "Case Studies",
  "Company News",
];

export const getBlogPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((b) => b.slug === slug);
