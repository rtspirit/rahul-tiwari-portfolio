import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { FaArrowLeft } from "react-icons/fa";

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 z-10 relative">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold mb-10 transition-colors">
          <FaArrowLeft /> Back to Portfolio
        </a>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-slate-200 mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-blue-400 font-semibold mb-2">
          {project.company === "Chewy" ? "Software Engineer II" : project.role}
        </p>
        <p className="text-sm text-slate-400 mb-12">{project.company} | {project.timeframe}</p>

        <section className="glass-card p-8 rounded-3xl mb-10 border border-white/5 shadow-2xl">
          <h2 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-500 glow-text-teal" /> Overview
          </h2>
          <p className="text-slate-300 leading-relaxed">{project.summary}</p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <section className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px] rounded-full group-hover:bg-red-500/20 transition-colors" />
            <h2 className="text-xl font-bold text-slate-100 mb-4 relative z-10">The Problem</h2>
            <p className="text-slate-400 leading-relaxed relative z-10">{project.problem}</p>
          </section>

          <section className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-[50px] rounded-full group-hover:bg-teal-500/20 transition-colors" />
            <h2 className="text-xl font-bold text-slate-100 mb-4 relative z-10">The Solution</h2>
            <p className="text-slate-400 leading-relaxed relative z-10">{project.solution}</p>
          </section>
        </div>

        <section className="glass-card p-8 rounded-3xl mb-10 border border-teal-500/20 bg-teal-900/10 hover-glow">
          <h2 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 glow-text-blue" /> Impact
          </h2>
          <p className="text-teal-50 leading-relaxed font-medium">{project.impact}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-100 mb-6">Key Responsibilities</h2>
          <ul className="space-y-4">
            {project.responsibilities.map((resp, i) => (
              <li key={i} className="flex gap-4 items-start text-slate-400">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0" />
                <span className="leading-relaxed">{resp}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-100 mb-6">Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-white/5 rounded-xl text-teal-200 border border-white/10 shadow-[0_0_10px_rgba(45,212,191,0.05)] text-sm font-semibold tracking-wide">
                {tech}
              </span>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}
