export type ProjectDetail = {
  slug: string;
  title: string;
  role: string;
  company: string;
  timeframe: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  /** Traced deltas shown beside the impact sentence, same treatment as the home page. */
  metrics?: { value: string; label: string }[];
  tech: string[];
  responsibilities: string[];
};

export const projects: ProjectDetail[] = [
  {
    slug: "tradeengage-integrations-registry",
    title: "CRM & Field-Service Integrations Registry",
    role: "Senior Software Engineer",
    company: "TradeEngage",
    timeframe: "Jun 2026 – Present",
    summary:
      "Four CRM and field-service integrations (Housecall Pro, Jobber, ServiceMinder, Broccoli) shipped on one config-driven registry with five shared capability contracts.",
    problem:
      "Each new CRM integration was a bespoke build with its own auth, sync and activation path, so every partner added cost and every fix had to be made several times.",
    solution:
      "A config-driven integration registry where each provider declares which of five shared capability contracts it fulfils. OAuth2 with PKCE and GraphQL sit behind the same contracts as REST providers, and customers activate an integration themselves without an engineer in the loop.",
    impact:
      "Every provider lives on one code path, customers activate integrations themselves, and a fix or extension lands for all of them at once.",
    metrics: [
      { value: "4", label: "integrations shipped" },
      { value: "5", label: "shared capability contracts" },
    ],
    tech: ["Python", "FastAPI", "SQLAlchemy", "Celery", "PostgreSQL", "OAuth2 / PKCE", "GraphQL"],
    responsibilities: [
      "Designed the registry and the five capability contracts shared by every provider.",
      "Implemented OAuth2/PKCE and GraphQL providers alongside REST providers behind the same contracts.",
      "Built customer self-serve activation so a company connects its CRM without support.",
      "Fixed duplicate active integrations per company found in production.",
    ],
  },
  {
    slug: "tradeengage-voice-agent-dispatch",
    title: "AI Voice Agent in Referral Dispatch",
    role: "Senior Software Engineer",
    company: "TradeEngage",
    timeframe: "Jun 2026 – Present",
    summary:
      "An AI voice agent (Broccoli, Avoca) integrated into referral dispatch so an accepted job triggers an immediate call and text to the homeowner.",
    problem:
      "When a contractor accepted a referred job, the homeowner waited for a manual callback, and the delay cost conversions.",
    solution:
      "A delivery adapter for the voice providers, a multi-provider outbound fan-out that places the call and sends the text the moment a job is accepted, and self-serve activation for the companies that opt in. Two layers of idempotency guarantee a retry never double-dials a homeowner.",
    impact:
      "Homeowners hear from the contractor immediately instead of waiting for a callback, and retries are safe by construction.",
    tech: ["Python", "FastAPI", "Celery", "PostgreSQL", "Broccoli", "Avoca"],
    responsibilities: [
      "Built the voice-provider delivery adapter and the multi-provider outbound fan-out.",
      "Designed two-layer idempotency across the dispatch and delivery boundaries.",
      "Shipped self-serve activation so a company enables the agent from its own settings.",
    ],
  },
  {
    slug: "tradeengage-referral-analytics",
    title: "Referral Link Analytics",
    role: "Senior Software Engineer",
    company: "TradeEngage",
    timeframe: "Jun 2026 – Present",
    summary:
      "Referral link analytics built from scratch: one backend module feeding both a customer dashboard and an internal admin surface.",
    problem:
      "Companies sharing referral links had no view of which clicks converted, which channels worked, or where revenue leaked, and internal teams had no admin view either.",
    solution:
      "A single analytics module with per-click conversion attribution, channel click-through rates, revenue-leak aging and email/SMS delivery health, rendered in a customer-facing dashboard and an internal admin surface from the same data.",
    impact:
      "Customers see where their referrals come from and convert; the internal team sees delivery health and leaks across every company from one place.",
    metrics: [
      { value: "~$3.9k", label: "double-pay closed" },
      { value: "132", label: "affected users found" },
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "TanStack Query", "MUI"],
    responsibilities: [
      "Modelled per-click attribution and revenue-leak aging in the backend module.",
      "Built the customer dashboard and the admin surface in React with TanStack Query and MUI.",
      "Closed a bonus rule that double-paid 132 users (~$3.9k), surfaced while auditing the data.",
    ],
  },
  {
    slug: "chewy-prescription-management-platform",
    title: "Prescription Approval & Autoship Workflows",
    role: "Software Engineer II",
    company: "Chewy",
    timeframe: "Feb 2023 – Sep 2025",
    summary:
      "End-to-end prescription workflows for Chewy Pharmacy: approvals, drug utilization review, and clinic changes for autoship orders.",
    problem:
      "Technicians and pharmacists needed a faster, more accurate way to enter data and perform drug utilization review, while autoship orders were being cancelled whenever a clinic changed.",
    solution:
      "A new prescription approval UI in React, TypeScript, Next.js and GraphQL, plus Java 21 / Spring Boot services that support a clinic change per order item and drive real-time state transitions through asynchronous workflows.",
    impact:
      "Technicians and pharmacists approve prescriptions faster with fewer entry errors, and autoship orders survive a clinic change instead of being cancelled.",
    metrics: [
      { value: "$5M", label: "saved per year" },
      { value: "23%", label: "fewer cancellations" },
      { value: "$3.6M", label: "revenue growth" },
    ],
    tech: ["React", "TypeScript", "Next.js", "GraphQL", "Java 21", "Spring Boot", "AWS Step Functions", "AWS Lambda", "Kafka"],
    responsibilities: [
      "Designed data entry and drug utilization review flows for technicians and pharmacists.",
      "Refined workflow requirements and edge cases with product and pharmacy stakeholders.",
      "Extended autoship workflows to support per-item clinic changes without disrupting existing orders.",
      "Implemented event-driven prescription workflows on Step Functions, Lambda and Kafka.",
      "Improved error visibility with logging, metrics and monitoring.",
    ],
  },
  {
    slug: "chewy-controlled-substances-compliance",
    title: "Controlled Substances Compliance & PDMP Integration",
    role: "Software Engineer II",
    company: "Chewy",
    timeframe: "Feb 2023 – Sep 2025",
    summary:
      "The controlled substances initiative for Chewy Pharmacy, including PDMP integration and regulatory workflows across states.",
    problem:
      "Controlled substances required state-level PDMP checks and regulatory workflows the existing systems were never designed for.",
    solution:
      "Led the design of a controlled substances architecture and integrated with each state's PDMP through Bamboo Health APIs, orchestrating checks in backend services and workflows.",
    impact:
      "Chewy Pharmacy processes controlled substance prescriptions compliantly at scale with less manual pharmacist work and lower compliance risk.",
    tech: ["Java", "Spring Boot", "REST APIs", "AWS", "Bamboo Health APIs", "Kafka"],
    responsibilities: [
      "Mapped state-by-state PDMP requirements with legal, compliance and pharmacy teams.",
      "Designed service interactions and data models for PDMP results and audit trails.",
      "Integrated Bamboo Health APIs with retries, timeouts and error handling.",
      "Coordinated rollout, feature flags and observability for the new workflows.",
    ],
  },
  {
    slug: "internal-ai-knowledge-assistant",
    title: "Org-wide AI Knowledge Assistant",
    role: "Software Engineer II",
    company: "Chewy",
    timeframe: "Feb 2023 – Sep 2025",
    summary:
      "An organization-wide chatbot platform on MCP server architecture, integrating Anthropic Claude and OpenAI models with internal systems.",
    problem:
      "Engineers and teams needed faster access to internal documentation, workflows and systems without digging through multiple tools and repositories.",
    solution:
      "A chatbot platform built on MCP server architecture that connects Anthropic Claude and OpenAI models to internal APIs and knowledge sources for contextual answers and actions.",
    impact:
      "Documentation and workflows reachable through one conversational interface, improving cross-team productivity and knowledge sharing.",
    tech: ["TypeScript", "Node.js", "MCP", "Anthropic Claude", "OpenAI"],
    responsibilities: [
      "Designed the platform architecture and MCP-based integrations.",
      "Integrated multiple LLM providers and internal APIs with auth and rate limiting.",
      "Onboarded domain teams' tools and knowledge sources.",
      "Defined prompts, safety constraints and evaluation strategies.",
    ],
  },
  {
    slug: "fax-ocr-and-textract-workflow",
    title: "Fax OCR & Textract Prescription Workflow",
    role: "Software Engineer II",
    company: "Chewy",
    timeframe: "Feb 2023 – Sep 2025",
    summary:
      "The fax-based prescription approval process modernized with redesigned templates and AWS Textract OCR.",
    problem:
      "Fax prescription forms were hard to read and process, leaving pharmacy staff with manual effort and rework.",
    solution:
      "Redesigned fax templates, refactored the approval workflow and integrated AWS Textract OCR to extract structured data.",
    impact:
      "Fax forms became machine-readable, so pharmacy staff stopped re-keying and reworking prescriptions.",
    metrics: [
      { value: "99%", label: "form readability, up from 20%" },
      { value: "$1.5M", label: "saved across the org" },
    ],
    tech: ["AWS Textract", "Java", "Spring Boot", "AWS", "React"],
    responsibilities: [
      "Refactored the fax approval workflow and redesigned templates for readability.",
      "Integrated Textract OCR and mapped extracted data into prescription models.",
      "Validated the end-to-end flow and error handling with downstream teams.",
    ],
  },
  {
    slug: "ci-cd-pipelines-chewy",
    title: "CI/CD Pipelines & Infrastructure Automation",
    role: "Software Engineer II",
    company: "Chewy",
    timeframe: "Feb 2023 – Sep 2025",
    summary:
      "CI/CD for the Pharmacist Admin UI, Vet Diet Admin UI and Workflow Service with Terraform, Jenkins and EKS.",
    problem:
      "Fragmented pipelines and manual release steps slowed cycle times and left room for human error.",
    solution:
      "Unified release pipelines on Jenkins with Terraform-provisioned infrastructure and EKS deployments, wired to Splunk and Datadog for error tracking.",
    impact:
      "One-click production deployments and better error tracking across three services.",
    tech: ["Terraform", "Jenkins", "EKS", "Docker", "AWS", "Splunk", "Datadog"],
    responsibilities: [
      "Automated infrastructure provisioning with Terraform.",
      "Standardized pipeline templates across Java services and frontends.",
      "Integrated error tracking through Splunk and Datadog.",
    ],
  },
  {
    slug: "accuweather-app-dispatch",
    title: "AccuWeather Field Weather Tracking",
    role: "Software Engineer Co-op",
    company: "Dispatch Technologies",
    timeframe: "Jan 2022 – Sep 2022",
    summary:
      "A standalone weather tracking feature for on-field agents in the desktop and mobile applications.",
    problem:
      "Field agents had no weather awareness inside the tools they already used, so severe weather caused unplanned delays.",
    solution:
      "A weather tracking feature built on AccuWeather APIs in React, JavaScript and TypeScript, shipped to both desktop and mobile apps.",
    impact:
      "Field agents plan around the weather inside the tools they already use, and the feature lifted what each client paid for the product.",
    metrics: [{ value: "+7%", label: "product revenue per client" }],
    tech: ["React", "TypeScript", "JavaScript", "AccuWeather APIs", "Node.js"],
    responsibilities: [
      "Integrated AccuWeather APIs and built the agent-facing UI.",
      "Shipped the feature across desktop and mobile applications.",
    ],
  },
];

export function projectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
