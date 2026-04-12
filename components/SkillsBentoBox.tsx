import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiGraphql,
  SiAmazonwebservices,
  SiDocker,
  SiKubernetes,
  SiOpenai,
  SiNodedotjs,
  SiApachekafka,
  SiAnthropic,
  SiMeta
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";

export default function SkillsBentoBox() {
  return (
    <section className="py-24 relative bg-black/20" id="skills">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        <div className="flex flex-col items-center mb-16 opacity-0 animate-fade-up">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Technical Expertise
          </h2>
          <div className="h-1 w-20 bg-blue-500 mt-4 rounded-full opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Frontend - Takes up 2 columns on large screens */}
          <div className="glass-card p-8 rounded-3xl lg:col-span-2 group">
            <h3 className="text-xl font-bold text-slate-100 mb-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-400 glow-text-teal" /> Frontend Development
            </h3>
            <p className="text-sm text-slate-400 mb-6">Building responsive, accessible UIs with modern React ecosystem tooling.</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-center gap-2 transition-transform group-hover:scale-105"><SiReact size={28} className="text-[#61DAFB]" /><span className="text-[10px] text-slate-500">React</span></div>
              <div className="flex flex-col items-center gap-2 transition-transform group-hover:scale-105"><SiNextdotjs size={28} className="text-white" /><span className="text-[10px] text-slate-500">Next.js</span></div>
              <div className="flex flex-col items-center gap-2 transition-transform group-hover:scale-105"><SiTypescript size={28} className="text-[#3178C6]" /><span className="text-[10px] text-slate-500">TypeScript</span></div>
              <div className="flex flex-col items-center gap-2 transition-transform group-hover:scale-105"><SiTailwindcss size={28} className="text-[#06B6D4]" /><span className="text-[10px] text-slate-500">Tailwind</span></div>
            </div>
          </div>

          {/* Backend - Takes up 2 columns */}
          <div className="glass-card p-8 rounded-3xl lg:col-span-2 group">
            <h3 className="text-xl font-bold text-slate-100 mb-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400 glow-text-blue" /> Backend Engineering
            </h3>
            <p className="text-sm text-slate-400 mb-6">Designing and implementing reliable, scalable microservices and APIs.</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col items-center gap-2 transition-transform group-hover:scale-105"><FaJava size={28} className="text-[#007396]" /><span className="text-[10px] text-slate-500">Java</span></div>
              <div className="flex flex-col items-center gap-2 transition-transform group-hover:scale-105"><SiSpringboot size={28} className="text-[#6DB33F]" /><span className="text-[10px] text-slate-500">Spring Boot</span></div>
              <div className="flex flex-col items-center gap-2 transition-transform group-hover:scale-105"><SiNodedotjs size={28} className="text-[#339933]" /><span className="text-[10px] text-slate-500">Node.js</span></div>
              <div className="flex flex-col items-center gap-2 transition-transform group-hover:scale-105"><SiGraphql size={28} className="text-[#E10098]" /><span className="text-[10px] text-slate-500">GraphQL</span></div>
              <div className="flex flex-col items-center gap-2 transition-transform group-hover:scale-105"><SiApachekafka size={28} className="text-white" /><span className="text-[10px] text-slate-500">Kafka</span></div>
            </div>
          </div>

          {/* Cloud & DevOps - Takes up 3 columns on tablet, 2 on lg */}
          <div className="glass-card p-8 rounded-3xl lg:col-span-3 md:col-span-3 group">
            <h3 className="text-xl font-bold text-slate-100 mb-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-400" /> Cloud & DevOps
            </h3>
            <p className="text-sm text-slate-400 mb-6">Architecting automated, cost-effective infrastructure on AWS.</p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/5 transition-colors group-hover:bg-white/10">
                <SiAmazonwebservices size={24} className="text-[#FF9900]" />
                <span className="text-xs font-semibold text-slate-300 leading-relaxed">AWS (EC2, ECS, EKS, Lambda, Step Functions, S3, RDS, DynamoDB, CloudFront, Route 53, VPC, IAM, SNS, SQS, SES, CloudWatch, CodeDeploy)</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/5 transition-colors group-hover:bg-white/10">
                <SiDocker size={24} className="text-[#2496ED]" />
                <span className="text-xs font-semibold text-slate-300">Docker</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/5 transition-colors group-hover:bg-white/10">
                <SiKubernetes size={24} className="text-[#326CE5]" />
                <span className="text-xs font-semibold text-slate-300">Kubernetes</span>
              </div>
            </div>
          </div>

          {/* AI / Data - Takes up remaining 1 col */}
          <div className="glass-card p-8 rounded-3xl lg:col-span-1 md:col-span-3 relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-500/20 blur-[50px] rounded-full group-hover:bg-purple-500/40 transition-colors" />
            <h3 className="text-xl font-bold text-slate-100 mb-2 flex items-center gap-2 relative z-10">
              <div className="w-2 h-2 rounded-full bg-purple-400 glow-text-purple" /> AI Integrations
            </h3>
            <p className="text-sm text-slate-400 mb-6 relative z-10">Working with LLMs and data architectures.</p>
            <div className="flex flex-wrap gap-4 relative z-10">
              <SiOpenai size={32} className="text-white drop-shadow-lg transition-transform group-hover:scale-110" />
              <SiAnthropic size={32} className="text-[#e2c5aa] drop-shadow-lg transition-transform group-hover:scale-110" />
              <SiMeta size={32} className="text-[#0668E1] drop-shadow-lg transition-transform group-hover:scale-110" />
              <FaDatabase size={32} className="text-[#4DB33D] drop-shadow-lg transition-transform group-hover:scale-110" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
