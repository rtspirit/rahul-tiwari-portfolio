export type ProjectDetail = {
  slug: string;
  title: string;
  role: string;
  company?: string;
  timeframe?: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  responsibilities: string[];
};

export type ExperienceDetail = {
  company: string;
  role: string;
  timeframe: string;
  summary: string;
  tech: string[];
};

export const experiences: ExperienceDetail[] = [
  {
    company: "Chewy",
    role: "Software Engineer II",
    timeframe: "Feb 2023 – Present",
    summary: "Engineered robust prescription management workflows, handled controlled substance compliance, and built an internal AI knowledge assistant platform. Led full-stack initiatives with significant cost-saving and efficiency impacts.",
    tech: ["React", "TypeScript", "Next.js", "Java", "Spring Boot", "GraphQL", "AWS Lambda", "AWS Step Functions", "Kafka", "Anthropic Claude", "OpenAI APIs"]
  },
  {
    company: "Dispatch Technologies",
    role: "Software Engineer",
    timeframe: "Jan 2022 – Sept 2022",
    summary: "Developed scalable backend services and responsive frontend architectures, collaborating across teams to deliver high-performance software solutions.",
    tech: ["React", "JavaScript", "TypeScript", "Node.js", "Express", "PostgreSQL", "AWS EC2", "Docker"]
  },
  {
    company: "Infosys",
    role: "Senior Software Engineer",
    timeframe: "Dec 2016 – Nov 2020",
    summary: "Built and maintained enterprise-scale monolithic to microservice migrations, optimizing workflows and improving system reliability.",
    tech: ["Java", "Spring Boot", "Hibernate", "REST APIs", "Oracle DB", "JUnit", "Jenkins"]
  }
];


export const projects: ProjectDetail[] = [
  {
    slug: "chewy-prescription-management-platform",
    title: "Chewy Prescription Management Platform",
    role: "Software Engineer II",
    company: "Chewy",
    timeframe: "Feb 2023 – Present",
    summary:
      "End-to-end prescription management workflows for Chewy Pharmacy, covering prescription approvals, drug utilization review, and clinic changes for autoship orders.",
    problem:
      "Technicians and pharmacists needed a more efficient and accurate way to review prescriptions and perform drug utilization review while minimizing cancellations on autoship orders.",
    solution:
      "Designed and implemented a new prescription approval UI using React, TypeScript, and Next.js, and enhanced Java/Spring Boot services to support clinic changes per order item and real-time state transitions through asynchronous workflows.",
    impact:
      "Reduced technician friction, improved data entry and DUR experience, prevented ~23% cancellations on eligible autoship orders, and contributed to multi-million dollar cost savings and revenue growth.",
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "Java",
      "Spring Boot",
      "GraphQL",
      "AWS Step Functions",
      "AWS Lambda",
      "Kafka",
    ],
    responsibilities: [
      "Designed data entry and drug utilization review UI flows for technicians and pharmacists.",
      "Collaborated with product and pharmacy stakeholders to refine workflow requirements and edge cases.",
      "Enhanced autoship workflows to support per-item clinic changes without disrupting existing orders.",
      "Implemented scalable prescription workflows using event-driven patterns and AWS Step Functions/Lambda.",
      "Improved error visibility and resiliency with better logging, metrics, and monitoring.",
    ],
  },
  {
    slug: "chewy-controlled-substances-compliance",
    title: "Controlled Substances Compliance & PDMP Integration",
    role: "Software Engineer II",
    company: "Chewy",
    timeframe: "Feb 2023 – Present",
    summary:
      "Controlled substances initiative for Chewy’s Pharmacy, including PDMP integration and regulatory workflows across multiple states.",
    problem:
      "Handling controlled substances required strict compliance with state-level PDMP checks and regulatory requirements, but existing systems were not designed for these workflows.",
    solution:
      "Led the design process for a controlled substances architecture and integrated with state PDMP systems via Bamboo Health APIs, orchestrating checks through backend services and workflows.",
    impact:
      "Enabled Chewy Pharmacy to safely and compliantly process controlled substance prescriptions at scale while reducing manual pharmacist workload and compliance risk.",
    tech: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "AWS",
      "Bamboo Health APIs",
      "Kafka",
    ],
    responsibilities: [
      "Collaborated with legal, compliance, and pharmacy teams to map state-by-state PDMP requirements.",
      "Designed service interactions and data models to persist PDMP check results and audit trails.",
      "Integrated with Bamboo Health APIs and handled retries, timeouts, and error handling.",
      "Coordinated rollout strategy, feature flags, and observability for the new workflows.",
    ],
  },
  {
    slug: "internal-ai-knowledge-assistant",
    title: "Internal AI Knowledge Assistant (Org-wide Chatbot Platform)",
    role: "Software Engineer II",
    company: "Chewy",
    timeframe: "2023 – Present",
    summary:
      "Organization-wide chatbot platform leveraging MCP server architecture and multiple LLMs to help engineers and teams access internal knowledge and tooling.",
    problem:
      "Engineers and teams needed faster access to internal documentation, workflows, and systems without manually digging through multiple tools and repos.",
    solution:
      "Engineered an internal chatbot platform using MCP server architecture and integrated Anthropic Claude, OpenAI models, and internal systems to provide contextual answers and actions.",
    impact:
      "Improved cross-team productivity and knowledge sharing by centralizing access to documentation and workflows via conversational interfaces.",
    tech: ["TypeScript", "Node.js", "MCP", "Anthropic Claude", "OpenAI APIs"],
    responsibilities: [
      "Designed the architecture of the chatbot platform and MCP-based integrations.",
      "Integrated multiple LLM providers and internal APIs while handling auth and rate limiting.",
      "Worked with multiple teams to onboard domain-specific tools and knowledge sources.",
      "Defined prompts, safety constraints, and evaluation strategies for internal use cases.",
    ],
  },
  {
    slug: "fax-ocr-and-textract-workflow",
    title: "Fax OCR & Textract Prescription Workflow",
    role: "Software Engineer II",
    company: "Chewy",
    timeframe: "2023",
    summary:
      "Modernized the fax-based prescription approval process using AWS Textract OCR and redesigned workflows.",
    problem:
      "Fax prescription forms were difficult to read and process, resulting in poor readability and manual effort for pharmacy staff.",
    solution:
      "Redesigned fax templates and integrated AWS Textract OCR into the workflow to extract structured data and streamline approval steps.",
    impact:
      "Improved fax form readability from ~20% to ~99% and unlocked significant cost savings by reducing manual effort and rework.",
    tech: ["AWS Textract", "Java", "Spring Boot", "AWS", "React"],
    responsibilities: [
      "Refactored existing fax approval workflows and redesigned templates for readability.",
      "Integrated AWS Textract OCR and mapped extracted data into internal prescription models.",
      "Collaborated with downstream teams to ensure end-to-end validation and error handling.",
    ],
  },
  {
    slug: "accuweather-app-dispatch",
    title: "AccuWeather Delivery Integrations",
    role: "Software Engineer",
    company: "Dispatch Technologies",
    timeframe: "Jan 2022 – Sept 2022",
    summary: "Integrated AccuWeather APIs to provide weather-aware dynamic routing heuristics for fleet operators.",
    problem: "Real-time routing logic lacked severe weather awareness, leading to unexpected service delays and logistical bottlenecks.",
    solution: "Engineered scalable backend pipelines connected to AccuWeather data streams and built responsive front-end dashboard panels to visualize weather impacts.",
    impact: "Significantly improved logistical safety margins and reduced delayed deliveries by preemptively altering routes.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "AWS"],
    responsibilities: [
      "Engineered backend integration pipelines for high-velocity third-party weather APIs.",
      "Designed operator-facing dashboard panels using React.",
      "Optimized PostgreSQL query performance to handle large datasets."
    ],
  },
  {
    slug: "ci-cd-pipelines-chewy",
    title: "CI/CD Pipelines & Infrastructure Automation",
    role: "Software Engineer II",
    company: "Chewy",
    timeframe: "Feb 2023 – Present",
    summary: "Standardized automated CI/CD pipelines across multiple microservice repositories to streamline testing and AWS deployment.",
    problem: "Fragmented deployment pipelines and manual release steps resulted in slower cycle times and occasional human error.",
    solution: "Designed unified release pipelines leveraging GitHub Actions, CI tooling, and Terraform to completely automate the path to production.",
    impact: "Drastically reduced median deployment times and eliminated manual deployment configuration errors.",
    tech: ["GitHub Actions", "Jenkins", "Docker", "AWS", "Terraform"],
    responsibilities: [
      "Automated infrastructure provisioning using Terraform.",
      "Standardized CI/CD templates across backend Java services and frontend systems.",
      "Integrated automated security and artifact scanning directly into the build process."
    ],
  }
];
