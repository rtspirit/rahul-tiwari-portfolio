"use client";

import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { sendGAEvent } from "@next/third-parties/google";
import { motion, useMotionValue, useSpring, Variants } from "framer-motion";
import { useRef } from "react";

function MagneticButton({ children, className, href, download, onClick }: any) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const getX = useSpring(x, springConfig);
  const getY = useSpring(y, springConfig);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.3);
    y.set(middleY * 0.3);
  };

  const handleReset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={handleReset}
      style={{ x: getX, y: getY }}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-colors overflow-hidden ${className}`}
    >
      {children}
    </motion.a>
  );
}

export default function HeroSection() {
  const name = "Rahul Tiwari";
  const nameVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };
  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
  };

  return (
    <section className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 selection:bg-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-teal-900/40 blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/30 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-purple-900/20 blur-[100px] mix-blend-screen animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-5xl mx-auto transition-transform">

        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 1, delay: 0.2 }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 blur-md opacity-50"></div>
          <div className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl z-10">
            <Image
              src="/images/profile_picture.png"
              alt="Rahul Tiwari"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Staggered Stiff Text Reveal */}
        <motion.h1
          variants={nameVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-teal-100 to-slate-300 drop-shadow-sm mb-4 tracking-tight text-center"
        >
          {name.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-xl sm:text-3xl font-medium text-slate-400 mb-10 text-center max-w-2xl leading-relaxed"
        >
          Senior Software Engineer building scalable, AI-powered, cloud-native solutions and engaging user experiences.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-4 relative z-50"
        >
          <MagneticButton
            href="#contact"
            onClick={() => sendGAEvent('event', 'contact_click')}
            className="text-white bg-white/5 border border-white/10 hover:bg-white/10 shadow-[0_0_20px_rgba(45,212,191,0.1)] hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]"
          >
            <FaPhoneAlt className="text-teal-400" />
            <span>Contact Me</span>
          </MagneticButton>

          <MagneticButton
            href="/resume/Rahul-Tiwari-Resume.pdf"
            download
            onClick={() => sendGAEvent('event', 'resume_download')}
            className="text-[#030712] bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-300 hover:to-blue-400 shadow-[0_0_20px_rgba(45,212,191,0.4)]"
          >
            <IoMdDownload className="text-lg" />
            <span>Download Resume</span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
