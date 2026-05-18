"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaMapMarkedAlt,
  FaTrain,
  FaChartBar,
} from "react-icons/fa";
import Image from "next/image";

export default function FeaturedProject() {
  return (
    <section
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-20 relative z-10"
      id="featured-project"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-4">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          Featured Full-Scale App
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-100 to-teal-400">
          BostonHome
        </h2>
        <p className="mt-4 text-slate-400 max-w-2xl text-lg">
          Know the Market. Find Your Home.
        </p>
      </motion.div>

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative group rounded-[2rem] overflow-hidden glass-card border border-white/10 hover:border-teal-500/30 transition-all duration-500"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-950/90 z-0" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
          {/* Left Content */}
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 drop-shadow-md">
              Community-Driven Rent Transparency
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed text-sm sm:text-base">
              A comprehensive platform for the Greater Boston area. View
              real-time rent reports, explore MBTA transit proximity, and
              navigate neighborhood data on a highly interactive PostGIS-powered
              map.
            </p>

            {/* Feature Highlights */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <FaMapMarkedAlt size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    Interactive Spatial Queries
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Real-time rent pins via PostGIS and Mapbox GL, dynamically
                    loaded by viewport bounds.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <FaTrain size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    MBTA Transit Layer
                  </h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Color-coded T-station overlays highlighting commute
                    proximities across the city.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <FaChartBar size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Market Insights</h4>
                  <p className="text-slate-400 text-sm mt-1">
                    Data-driven neighborhood analytics covering average rents
                    and community vibes.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-10">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 16",
                  "NestJS 11",
                  "PostgreSQL",
                  "PostGIS",
                  "TypeScript 5",
                  "Turborepo",
                  "Mapbox GL",
                  "Prisma",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-auto">
              <a
                href="https://bostonhome.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-950 font-bold text-sm hover:bg-teal-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]"
              >
                Visit BostonHome{" "}
                <FaArrowRight className="group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Visual (Mockup) */}
          <div className="relative h-[400px] lg:h-auto min-h-[500px] w-full bg-[#0a0f1c] overflow-hidden border-l border-white/5">
            {/* Abstract Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0a0f1c] z-10 lg:block hidden" />

            {/* The Generated Mockup Image */}
            <div className="absolute inset-0 z-0 flex items-center justify-center p-8">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(45,212,191,0.15)] transform lg:translate-x-10 lg:scale-110 group-hover:scale-[1.12] transition-transform duration-700">
                <Image
                  src="/images/bostonhome-dark-mockup.png"
                  alt="BostonHome App Interface"
                  fill
                  className="object-cover object-left-top"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/20 to-transparent pointer-events-none mix-blend-overlay" />
              </div>
            </div>

            {/* Glowing Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-teal-400/20 transition-colors duration-700" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
