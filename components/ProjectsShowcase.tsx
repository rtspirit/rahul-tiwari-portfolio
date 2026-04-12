import { ProjectDetail } from "@/lib/projects";
import { FaArrowRight } from "react-icons/fa";

type ProjectsShowcaseProps = {
  projects: ProjectDetail[];
};

export default function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  return (
    <section className="py-24 relative" id="projects">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        <div className="flex flex-col items-center mb-16 opacity-0 animate-fade-up">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-slate-200">
            Selected Work
          </h2>
          <div className="h-1 w-20 bg-slate-500 mt-4 rounded-full opacity-50" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={project.slug} 
              className="glass-card flex flex-col rounded-3xl overflow-hidden group opacity-0 animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Optional: Project image placeholder via elegant gradient */}
              <div className="h-48 w-full bg-gradient-to-br from-slate-800 to-[#0f172a] relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-500/20 blur-[40px] rounded-full group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
                  <h3 className="text-xl font-bold text-white drop-shadow-md leading-tight">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-sm text-slate-400 mb-6 flex-1 line-clamp-3">
                  {project.problem}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map(tech => (
                    <span key={tech} className="text-[10px] font-semibold tracking-wider uppercase px-2 py-1 bg-white/5 rounded text-teal-200 border border-teal-500/20">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-1 bg-white/5 rounded text-slate-400 border border-white/10">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Using a relative div for the link area since these internal pages /projects/[slug] might not actually exist yet in the starter code, but keeping the visual */}
                <a 
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors mt-auto w-max"
                >
                  View details <FaArrowRight className="text-teal-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
