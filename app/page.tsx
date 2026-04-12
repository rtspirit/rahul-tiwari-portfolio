import HeroSection from "@/components/HeroSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsBentoBox from "@/components/SkillsBentoBox";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import { projects, experiences } from "@/lib/projects";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-teal-500/30">
      
      {/* Top Navigation - Glassmorphic */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-end px-4 sm:px-10 py-4 pointer-events-none transition-all duration-300">
        <div className="flex items-center gap-3 pointer-events-auto opacity-0 animate-fade-up">
          <a 
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#1e293b]/80 backdrop-blur-md border border-white/10 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all hover:bg-teal-500/20 hover:border-teal-500/50 hover:text-teal-300 shadow-lg"
          >
            <FaPhoneAlt size={12} />
            Contact
          </a>
          <a
            href="/resume/Rahul-Tiwari-Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_15px_rgba(45,212,191,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(45,212,191,0.5)]"
          >
            <IoMdDownload size={16} />
            Resume
          </a>
        </div>
      </nav>

      <main className="flex-1 w-full flex flex-col items-center">
        {/* Dynamic Hero Section */}
        <HeroSection />

        {/* Diagonal Separator */}
        <div className="w-full h-24 bg-gradient-to-b from-[#030712] to-transparent -mt-24 z-20 relative pointer-events-none" />

        {/* Experience Section */}
        <ExperienceTimeline experiences={experiences} />

        {/* Divider Glow */}
        <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-teal-900 to-transparent my-10" />

        {/* Skills Section */}
        <SkillsBentoBox />

        {/* Divider Glow */}
        <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-blue-900 to-transparent my-10" />

        {/* Projects Section */}
        <ProjectsShowcase projects={projects} />
      </main>

      {/* Footer & Contact CTA */}
      <footer className="relative mt-20 pt-24 pb-12 bg-black/40 border-t border-white/5 overflow-hidden" id="contact">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-screen-xl mx-auto h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
        
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-teal-900/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-3xl px-6 relative z-10 text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white drop-shadow-md">
            Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 glow-text-teal">incredible</span>.
          </h2>
          <p className="text-slate-400 mb-10 max-w-xl text-lg leading-relaxed">
            Always open to discussing new opportunities, fascinating technical challenges, or just chatting about engineering at scale.
          </p>
          
          <a
            href="mailto:tiwari.ra2022@gmail.com"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold text-[#030712] transition-all bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-300 hover:to-blue-400 hover:scale-105 shadow-[0_0_30px_rgba(45,212,191,0.3)] mb-16"
          >
            Say Hello 👋
          </a>
          
          <div className="flex flex-col items-center gap-6 mt-12 w-full pt-8 border-t border-white/10">
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/rtiwari27/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-teal-400 hover:scale-110 transition-all p-2 rounded-full bg-white/5 border border-white/5"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/rtspirit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white hover:scale-110 transition-all p-2 rounded-full bg-white/5 border border-white/5"
              >
                <FaGithub size={20} />
              </a>
            </div>
            <p className="text-xs text-slate-500/80 font-medium tracking-wider">
              {new Date().getFullYear()} © RAHUL TIWARI. BUILT WITH NEXT.JS & TAILWIND CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}