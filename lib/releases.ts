export type EntryKind = "added" | "improved" | "fixed";

export type Metric = {
  /** Display value, e.g. "$5M", "23%", "4.4K", "20+", "~$3.9k". Digits animate; prefix/suffix stay. */
  value: string;
  label: string;
};

export type Entry = {
  kind: EntryKind;
  text: string;
  metrics?: Metric[];
  /** Internal case-study route, when one exists. */
  href?: string;
};

export type Release = {
  /** CalVer tag: the month the role started. Doubles as the anchor id. */
  version: string;
  company: string;
  role: string;
  location: string;
  start: string;
  end: string | null;
  summary: string;
  entries: Entry[];
  stack: string[];
  link?: { href: string; label: string };
  image?: { src: string; alt: string; width: number; height: number; caption?: string };
};

export const releases: Release[] = [
  {
    version: "2026.06",
    company: "TradeEngage",
    role: "Senior Software Engineer",
    location: "Remote",
    start: "Jun 2026",
    end: null,
    summary:
      "Integrations, dispatch automation and analytics for a home-services referral platform.",
    entries: [
      {
        kind: "added",
        text: "Four CRM and field-service integrations (Housecall Pro, Jobber, ServiceMinder, Broccoli) on a config-driven registry with five shared capability contracts, including OAuth2/PKCE + GraphQL and customer self-serve activation.",
        metrics: [
          { value: "4", label: "integrations shipped" },
          { value: "5", label: "shared capability contracts" },
        ],
        href: "/projects/tradeengage-integrations-registry",
      },
      {
        kind: "added",
        text: "An AI voice agent (Broccoli, Avoca) wired into referral dispatch: an accepted job triggers an immediate call and text to the homeowner instead of a manual callback. Delivery adapter, multi-provider outbound fan-out, self-serve activation, and two-layer idempotency so a retry never double-dials.",
        href: "/projects/tradeengage-voice-agent-dispatch",
      },
      {
        kind: "added",
        text: "Referral link analytics from scratch: one backend module serving both a customer dashboard and an internal admin surface, with per-click conversion attribution, channel CTR, revenue-leak aging and email/SMS delivery health.",
        href: "/projects/tradeengage-referral-analytics",
      },
      {
        kind: "fixed",
        text: "Production revenue-integrity gaps, including a bonus rule that double-paid 132 users and duplicate active integrations and referrals per company.",
        metrics: [
          { value: "~$3.9k", label: "double-pay closed" },
          { value: "132", label: "affected users found" },
        ],
      },
    ],
    stack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Celery",
      "PostgreSQL",
      "React",
      "TypeScript",
      "TanStack Query",
      "MUI",
    ],
  },
  {
    version: "2026.04",
    company: "BostonHome",
    role: "Founder & Lead Engineer",
    location: "Boston, MA",
    start: "Apr 2026",
    end: null,
    summary:
      "Rent transparency for Boston renters, designed, built and operated solo at bostonhome.app.",
    entries: [
      {
        kind: "added",
        text: "A full-stack rent transparency platform covering 70+ Boston neighborhoods: neighborhood-level pricing, active units, renter reviews and community ratings.",
        metrics: [
          { value: "114", label: "rent reports" },
          { value: "4.4K", label: "page views" },
          { value: "1.1K", label: "visitors" },
          { value: "70+", label: "neighborhoods" },
        ],
      },
      {
        kind: "improved",
        text: "Data ingestion moved from a GeoJSON CDN dependency to a database-driven architecture, with stable hydration patterns that removed Cumulative Layout Shift.",
        metrics: [{ value: "~40%", label: "faster API responses" }],
      },
      {
        kind: "added",
        text: "Geospatial dashboards on Mapbox GL JS and PostGIS spatial queries, with MBTA transit layers and viewport-aware rent analytics.",
      },
      {
        kind: "added",
        text: "AI market insights with Google Gemini: rent trends and neighborhood comparison analysis for renters.",
      },
      {
        kind: "added",
        text: "Community governance: backend scoring, real-time flagging, moderation workflows and trust signals to protect data integrity.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "Prisma",
      "Supabase Postgres",
      "PostGIS",
      "Mapbox GL JS",
      "Google Gemini",
      "Vercel",
      "Railway",
    ],
    link: { href: "https://bostonhome.app", label: "Open bostonhome.app" },
    image: {
      src: "/images/bostonhome-dark-mockup.png",
      alt: "BostonHome map view with rent pins across Boston neighborhoods",
      width: 1024,
      height: 1024,
      caption: "Concept render of the BostonHome map view. Panel figures are illustrative; the live product is at bostonhome.app.",
    },
  },
  {
    version: "2023.02",
    company: "Chewy",
    role: "Software Engineer II",
    location: "Boston, MA",
    start: "Feb 2023",
    end: "Sep 2025",
    summary:
      "Pharmacy engineering: prescription workflows for technicians and pharmacists, and the AI tooling around them.",
    entries: [
      {
        kind: "added",
        text: "A new prescription approval workflow in React, TypeScript, Next.js and GraphQL for data entry and drug utilization review.",
        metrics: [{ value: "$5M", label: "saved per year" }],
        href: "/projects/chewy-prescription-management-platform",
      },
      {
        kind: "improved",
        text: "Autoship order workflow in Java 21 and Spring Boot now supports a clinic change per order item instead of cancelling the order.",
        metrics: [
          { value: "23%", label: "fewer cancellations" },
          { value: "$3.6M", label: "revenue growth" },
        ],
        href: "/projects/chewy-prescription-management-platform",
      },
      {
        kind: "improved",
        text: "Fax prescription approvals: redesigned templates, refactored workflows and AWS Textract OCR.",
        metrics: [
          { value: "99%", label: "form readability, up from 20%" },
          { value: "$1.5M", label: "saved across the org" },
        ],
        href: "/projects/fax-ocr-and-textract-workflow",
      },
      {
        kind: "added",
        text: "An organization-wide chatbot platform on MCP server architecture, integrating Anthropic Claude and OpenAI models for cross-team knowledge sharing.",
        href: "/projects/internal-ai-knowledge-assistant",
      },
      {
        kind: "added",
        text: "A developer-facing tool on Meta LLaMA that turns Figma designs into working React code through contextual learning.",
      },
      {
        kind: "added",
        text: "The Controlled Substances initiative and PDMP integration with each state's regulatory system through Bamboo Health APIs.",
        href: "/projects/chewy-controlled-substances-compliance",
      },
      {
        kind: "added",
        text: "CI/CD for the Pharmacist Admin UI, Vet Diet Admin UI and Workflow Service with Terraform, Jenkins and EKS: one-click production deploys, error tracking in Splunk and Datadog.",
        href: "/projects/ci-cd-pipelines-chewy",
      },
      {
        kind: "added",
        text: "Drug and diet prescription workflows on AWS Step Functions, Lambda and Kafka for real-time state transitions across distributed systems.",
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "GraphQL",
      "Java 21",
      "Spring Boot",
      "AWS Step Functions",
      "AWS Lambda",
      "Kafka",
      "Terraform",
      "Jenkins",
      "EKS",
      "Anthropic Claude",
      "OpenAI",
      "Meta LLaMA",
      "MCP",
    ],
  },
  {
    version: "2022.01",
    company: "Dispatch Technologies",
    role: "Software Engineer Co-op",
    location: "Boston, MA",
    start: "Jan 2022",
    end: "Sep 2022",
    summary: "Field-service software for enterprises, technicians and their customers.",
    entries: [
      {
        kind: "added",
        text: "A standalone weather tracking feature for on-field agents on desktop and mobile, built on AccuWeather APIs in React and TypeScript.",
        metrics: [{ value: "+7%", label: "product revenue per client" }],
        href: "/projects/accuweather-app-dispatch",
      },
      {
        kind: "improved",
        text: "APIs across company applications in Go, Python and Node.js, following TDD and BDD.",
        metrics: [{ value: "20+", label: "APIs created or improved" }],
      },
      {
        kind: "added",
        text: "AWS deployments automated with Travis CI, Rancher, Kubernetes and Docker.",
      },
      {
        kind: "improved",
        text: "Dashboards, metrics and alarms for API performance in Datadog and Loggly.",
        metrics: [{ value: "35", label: "dashboards maintained" }],
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "Go",
      "Python",
      "Node.js",
      "AWS",
      "Kubernetes",
      "Rancher",
      "Docker",
      "Travis CI",
      "Datadog",
    ],
  },
  {
    version: "2016.12",
    company: "Infosys",
    role: "Senior Systems Engineer",
    location: "Pune, India",
    start: "Dec 2016",
    end: "Nov 2020",
    summary: "Back-end microservices for a fast-moving consumer goods client.",
    entries: [
      {
        kind: "added",
        text: "Microservices in Java 11 and Spring MVC for company-wide back-end applications.",
      },
      {
        kind: "improved",
        text: "Code quality and delivery velocity through structured code reviews and project-based learning in Node.js, REST APIs and SQL/NoSQL.",
        metrics: [{ value: "12", label: "engineers mentored" }],
      },
      {
        kind: "added",
        text: "Customer-centric features delivered across Agile sprints from requirements gathered directly with customers.",
        metrics: [{ value: "300+", label: "customers consulted" }],
      },
      {
        kind: "fixed",
        text: "Database maintenance for MySQL, PostgreSQL and DynamoDB, standardized into operating procedures.",
        metrics: [{ value: "100%", label: "compliance across audits" }],
      },
      {
        kind: "added",
        text: "A continuous delivery framework with GitHub Actions, Terraform and AWS CodeDeploy for every application environment.",
      },
    ],
    stack: [
      "Java 11",
      "Spring MVC",
      "Node.js",
      "MySQL",
      "PostgreSQL",
      "DynamoDB",
      "GitHub Actions",
      "Terraform",
      "AWS CodeDeploy",
    ],
  },
];

export const latestRelease = releases[0];

export function releaseForCompany(company: string) {
  return releases.find((r) => r.company === company);
}

/** Anchor id for a release: "2026.06" → "2026-06". */
export function anchorFor(version: string) {
  return version.replace(".", "-");
}
