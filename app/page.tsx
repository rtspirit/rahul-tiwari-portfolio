import Image from "next/image";
import { BiDownArrow } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss
} from "react-icons/si";

type Project = {
  title: string;
  role: string;
  tech: string[];
  description: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Prescription Management Platform",
    role: "Full-Stack Engineer",
    tech: ["React", "TypeScript", "Next.js", "Java", "Spring Boot", "GraphQL"],
    description:
      "Designed and built workflows for drug and diet prescriptions, approvals, and usage tracking for Chewy Pharmacy.",
  },
  {
    title: "Controlled Substances Compliance",
    role: "Backend Engineer",
    tech: ["Java", "Spring", "AWS Step functions", "AWS EKS", "AWS Lambdas"],
    description:
      "Integrated PDMP and regulatory checks to support controlled substance prescriptions across multiple states.",
  },
  {
    title: "Internal AI Knowledge Assistant",
    role: "Platform Engineer",
    tech: ["LLMs", "RAG", "React", "TypeScript", "FastAPI"],
    description:
      "Developed a chatbot platform using modern LLMs to improve knowledge sharing and productivity across teams.",
  },
];


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Nav with Resume and Contact */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-end px-4 sm:px-10 py-4 pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          <a href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs sm:text-sm font-medium text-teal-700 shadow-sm transition hover:bg-teal-400 hover:text-white">
            <span className="text-sm"><FaPhoneAlt /></span>
            Contact
          </a>
          <a
            href="/resume/Rahul-Tiwari-Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-md backdrop-blur transition hover:bg-teal-400 hover:shadow-lg"
          >
            <span className="text-sm"><IoMdDownload /></span>
            <span>Download Resume</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}

      <header className="relative flex h-[60vh] items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/background.jpg"
          alt="Background"
          fill
          priority
          className="object-cover">
        </Image>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-100 mb-3">
            I&apos;m Rahul.
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-teal-100">
            a{" "}
            <span className="text-teal-300 underline decoration-teal-400">
              Soft
            </span>
            ware Engineer.
          </h2>
        </div>
      </header>

      <main className="flex-1">
        {/* About / Profile */}
        <section className="py-16 bg-[#EAF6F6]" id="about">
          <div className="mx-auto max-w-3xl px-4 flex flex-col items-center gap-6">
            <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden">
              <Image
                src="/images/profile_picture.png"
                alt="Profile picture"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2 text-slate-800">Hello.</h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                I&apos;m a Software Engineer at Chewy, working across the stack
                with React, Next.js, TypeScript, Java, Spring and cloud-native services. I
                build systems that power pharmacy workflows, prescriptions, and internal tools.
              </p>
            </div>
          </div>
        </section>


        {/* Divider */}
        <div className="flex justify-center my-10">
          <div className="w-16 border-t-4 border-dotted border-teal-100" />
        </div>

        {/* Skills */}
        <section className="py-12 bg-white" id="skills">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-bold mb-8 text-slate-800 text-center">
              My Skills
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-6 shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  Frontend
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-3">
                  I build responsive, accessible UIs with modern tooling.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• HTML, CSS, JavaScript</li>
                  <li>• React, Next.js, TypeScript</li>
                  <li>• Tailwind CSS, component-driven UIs</li>
                  <li>• State management, API integration</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6 shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  Backend
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-3">
                  I design and implement reliable backend services.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Java, Spring Boot, REST, GraphQL</li>
                  <li>• Node.js, Express.js</li>
                  <li>• Event-driven architectures & integrations</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6 shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  DevOps & Cloud
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-3">
                  I design automated, cloud-native delivery pipelines using modern DevOps tooling and build scalable distributed systems across AWS’s compute, networking, and serverless ecosystem.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Docker, Kubernetes, Travis CI, Jenkins, GitHub Actions, Terraform, Packer, Rancher</li>
                  <li>• AWS (EC2 · ECS · EKS · Lambdas · Step Functions · S3 · RDS · DynamoDB · CloudFront · Route 53 · VPC · IAM · SNS · SQS · SES · CloudWatch · CodeDeploy)</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-slate-50 p-6 shadow-sm border border-slate-100">
                <h3 className="text-xl font-semibold text-teal-700 mb-2">
                  AI
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-3">
                  I enjoy working with data models and modern AI tooling.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• LLM-powered internal tools, chatbots, and RAG patterns</li>
                  <li>• Exposure working with OpenAI, Anthropic Claude, Meta LLama 4</li>
                  <li>• Integration experience with CoPilot, Windsurf, and Cursor bugbot </li>
                  <li>• Working closely with product & domain experts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="flex justify-center my-10">
          <div className="w-16 border-t-4 border-dotted border-teal-100" />
        </div>

        {/* Projects */}
        <section className="py-12 bg-[#FDFEFE]" id="projects">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-3xl font-bold mb-8 text-slate-800 text-center">
              Selected Work
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="flex flex-col rounded-2xl bg-white border border-slate-100 p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-wide text-teal-600 mb-2">
                    {project.role}
                  </p>
                  <p className="text-sm text-slate-600 mb-3 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-teal-50 px-2 py-0.5 text-[0.7rem] font-medium text-teal-700 border border-teal-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="flex justify-center my-10">
          <div className="w-16 border-t-4 border-dotted border-teal-100" />
        </div>

        {/* Contact */}
        <section
          id="contact"
          className="py-16 bg-[#EAF6F6] flex items-center justify-center"
        >
          <div className="mx-auto max-w-xl px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">
              Get In Touch
            </h2>
            <h3 className="text-lg font-semibold mb-3 text-teal-700">
              Liked what you saw?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
              I&apos;m always open to discussing new opportunities, interesting
              problems, or just chatting about engineering and product.
            </p>
            <a
              href="mailto:tiwari.ra2022@gmail.com"
              className="inline-block rounded-full bg-teal-500 px-6 py-2 text-sm sm:text-base font-semibold text-white shadow-md transition hover:bg-teal-400 hover:shadow-lg"
            >
              CONTACT ME
            </a>
          </div>
        </section>
      </main>

      {/* Built With Section */}
      <section className="py-16 bg-white" id="built-with">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-slate-800">
            Built With
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            <div className="flex flex-col items-center p-6 rounded-xl border shadow-sm hover:shadow-lg transition-all">
              <SiNextdotjs
                size={42}
                className="tech-icon tech-icon-float text-black mb-3"
              />
              <p className="font-semibold text-slate-700">Next.js</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl border shadow-sm hover:shadow-lg transition-all">
              <SiReact
                size={42}
                className="tech-icon tech-icon-float-spin text-blue-500 mb-3"
              />
              <p className="font-semibold text-slate-700">React</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl border shadow-sm hover:shadow-lg transition-all">
              <SiTypescript
                size={42}
                className="tech-icon tech-icon-float text-blue-600 mb-3"
              />
              <p className="font-semibold text-slate-700">TypeScript</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-xl border shadow-sm hover:shadow-lg transition-all">
              <SiTailwindcss
                size={42}
                className="tech-icon tech-icon-float text-teal-500 mb-3"
              />
              <p className="font-semibold text-slate-700">Tailwind CSS</p>
            </div>

          </div>

          <p className="mt-10 text-xs text-slate-500">
            Hosted & deployed using Vercel&apos;s global edge network.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-600 py-6 mt-8">
        <div className="flex flex-col items-center gap-2 text-sm text-teal-50">
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/rtiwari27/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-200 transition-transform transform hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rtspirit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-200 transition-transform transform hover:-translate-y-0.5"
            >
              GitHub
            </a>
          </div>
          <p className="text-xs">
            © {new Date().getFullYear()} Rahul Tiwari. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}