"use client";

import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { track } from "@vercel/analytics/react";

export default function HeroSection() {
  return (
    <section className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[#030712] z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-teal-900/40 blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/30 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-purple-900/20 blur-[100px] mix-blend-screen animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-5xl mx-auto transition-transform">
        
        {/* Profile or Icon element (optional glow ring) */}
        <div className="mb-8 relative opacity-0 animate-fade-up">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 blur-md opacity-50"></div>
          <div className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
            <Image
              src="/images/profile_picture.png"
              alt="Rahul Tiwari"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-teal-100 to-slate-300 drop-shadow-sm mb-4 opacity-0 animate-fade-up animate-delay-100 tracking-tight text-center">
          Rahul Tiwari
        </h1>
        
        <h2 className="text-xl sm:text-3xl font-medium text-slate-400 mb-10 opacity-0 animate-fade-up animate-delay-200 text-center max-w-2xl leading-relaxed">
          Full-Stack Software Engineer building scalable, cloud-native solutions and engaging user experiences.
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-up animate-delay-300">
          <a
            href="#contact"
            onClick={() => track("Contact Clicked")}
            className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(45,212,191,0.2)]"
          >
            <FaPhoneAlt className="text-teal-400 group-hover:animate-bounce" />
            <span>Contact Me</span>
          </a>
          
          <a
            href="/resume/Rahul-Tiwari-Resume.pdf"
            download
            onClick={() => track("Resume Downloaded")}
            className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-[#030712] transition-all bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-300 hover:to-blue-400 hover:scale-105 shadow-[0_0_20px_rgba(45,212,191,0.4)]"
          >
            <IoMdDownload className="text-lg group-hover:-translate-y-1 transition-transform" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
