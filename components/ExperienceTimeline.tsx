"use client";

import { useState } from "react";
import { ExperienceDetail } from "@/lib/projects";

type ExperienceTimelineProps = {
  experiences: ExperienceDetail[];
};

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  // Keep track of which experience indexes have expanded tech stacks
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpandedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="py-24 relative" id="experience">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
        
        <div className="flex flex-col items-center mb-16 opacity-0 animate-fade-up">
          <div className="w-[2px] h-16 bg-gradient-to-b from-transparent via-teal-500/80 to-teal-300 animate-pulse shadow-[0_0_15px_rgba(45,212,191,0.8)] rounded-full mb-8" />
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500">
            Professional Experience
          </h2>
          <div className="h-1 w-20 bg-teal-500 mt-4 rounded-full opacity-50" />
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          <div className="flex flex-col gap-12 relative">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedCards[index];
              const visibleTech = isExpanded ? exp.tech : exp.tech.slice(0, 4);
              const hiddenTechCount = exp.tech.length - 4;

              return (
                <div key={exp.company} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 opacity-0 animate-fade-up`} style={{ animationDelay: `${(index + 1) * 150}ms` }}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[calc(0px-0.5rem)] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-teal-400 border-[3px] border-[#030712] shadow-[0_0_15px_rgba(45,212,191,0.6)] z-10" />

                  {/* Desktop Layout Matrix */}
                  <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12 md:order-last'}`}>
                    <div className="glass-card p-6 md:p-8 rounded-2xl hover-glow">
                      <div className="flex items-center gap-3 mb-2 justify-start md:justify-normal">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-teal-300">
                          {exp.timeframe}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-1">{exp.role}</h3>
                      <h4 className="text-lg text-blue-400 mb-4">{exp.company}</h4>
                      <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                        {exp.summary}
                      </p>
                      
                      <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'} transition-all`}>
                        {visibleTech.map(tech => (
                          <span key={tech} className="text-[11px] font-medium px-2 py-1 bg-white/5 rounded text-slate-300 border border-white/5 transition-all">
                            {tech}
                          </span>
                        ))}
                        {!isExpanded && hiddenTechCount > 0 && (
                          <button 
                            onClick={() => toggleExpand(index)}
                            className="text-[11px] font-medium px-2 py-1 bg-teal-500/10 hover:bg-teal-500/20 rounded text-teal-300 border border-teal-500/20 cursor-pointer transition-colors"
                          >
                            +{hiddenTechCount} more
                          </button>
                        )}
                        {isExpanded && hiddenTechCount > 0 && (
                          <button 
                            onClick={() => toggleExpand(index)}
                            className="text-[11px] font-medium px-2 py-1 bg-red-500/10 hover:bg-red-500/20 rounded text-red-300 border border-red-500/20 cursor-pointer transition-colors"
                          >
                            Show less
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`hidden md:block w-1/2 ${isEven ? 'order-last' : 'order-first'}`} />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
