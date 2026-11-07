'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, Mail, Terminal } from 'lucide-react';

interface HeroSectionProps {
  scrollToRef: (ref: React.RefObject<HTMLElement | null>) => void;
  refs: {
    projectsRef: React.RefObject<HTMLElement | null>;
    contactRef: React.RefObject<HTMLElement | null>;
  };
}

const HeroSection = ({ scrollToRef, refs }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Architectural Top Index Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.08] font-mono text-[11px] text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="text-zinc-300">[01 / INDEX]</span>
            <span>SOFTWARE ENGINEERING &amp; VISUAL ARCHIVE</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">LOC: 07°25&apos;39&quot;S 111°01&apos;19&quot;E</span>
            <span className="inline-flex items-center gap-1.5 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              AVAILABLE FOR PROJECTS
            </span>
          </div>
        </div>

        {/* Main 12-Column Swiss Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/[0.08]">
          {/* Left Column: Editorial Statement & Specs */}
          <div className="lg:col-span-7 py-10 sm:py-14 lg:pr-12 lg:border-r border-white/[0.08] flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 mb-6"
              >
                <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                <span>RIZKY BUDIARTO — FULL-STACK &amp; SYSTEMS ENGINEER</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-4xl sm:text-5xl lg:text-[62px] font-semibold tracking-[-0.035em] leading-[1.05] text-zinc-100"
              >
                Building sovereign software systems &amp; quiet visual stories.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal"
              >
                Full-stack software engineer specializing in high-reliability Go backends, modern
                Next.js interfaces, and applied machine learning. Creator of{' '}
                <Link
                  href="/edukabyte"
                  className="text-zinc-100 underline decoration-zinc-600 underline-offset-4 hover:decoration-zinc-200 transition-colors"
                >
                  EdukaByte
                </Link>
                —an on-premise digital infrastructure suite built for Indonesian schools.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <Link
                  href="/edukabyte"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs sm:text-sm tracking-tight transition-all group"
                >
                  <span>Explore EdukaByte Suite</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <button
                  onClick={() => scrollToRef(refs.projectsRef)}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 font-medium text-xs sm:text-sm border border-white/[0.1] transition-all cursor-pointer"
                >
                  <span>Selected Works</span>
                  <ArrowDownRight className="w-4 h-4 text-zinc-400" />
                </button>

                <a
                  href="mailto:rovsgame771@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-3 text-zinc-400 hover:text-zinc-100 font-mono text-xs transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>rovsgame771@gmail.com</span>
                </a>
              </motion.div>
            </div>

            {/* Technical Specification Matrix */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-6"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mb-1.5">
                  SYSTEMS &amp; BACKEND
                </div>
                <div className="text-xs text-zinc-300 font-medium leading-relaxed">
                  Go (Gin, GORM), FastAPI, Node.js, PostgreSQL, Redis, Docker
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mb-1.5">
                  FRONTEND &amp; MOBILE
                </div>
                <div className="text-xs text-zinc-300 font-medium leading-relaxed">
                  Next.js App Router, TypeScript, Tailwind CSS, Flutter
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mb-1.5">
                  APPLIED AI &amp; DATA
                </div>
                <div className="text-xs text-zinc-300 font-medium leading-relaxed">
                  PyTorch, TensorFlow, Computer Vision OMR, Expert Systems
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Precision Editorial Portrait Frame */}
          <div className="lg:col-span-5 py-10 lg:py-14 lg:pl-12 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative group"
            >
              {/* Corner Crosshairs */}
              <span className="absolute -top-2 -left-2 font-mono text-xs text-zinc-600 select-none">+</span>
              <span className="absolute -top-2 -right-2 font-mono text-xs text-zinc-600 select-none">+</span>
              <span className="absolute -bottom-2 -left-2 font-mono text-xs text-zinc-600 select-none">+</span>
              <span className="absolute -bottom-2 -right-2 font-mono text-xs text-zinc-600 select-none">+</span>

              <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-900 border border-white/[0.1]">
                <img
                  src="/img/profile.jpg"
                  alt="Rizky Budiarto"
                  className="w-full h-full object-cover grayscale-[25%] contrast-[1.04] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Bottom Viewfinder Caption inside Frame */}
                <div className="absolute bottom-0 inset-x-0 p-4 flex items-center justify-between font-mono text-[11px] text-zinc-300 border-t border-white/[0.08] bg-zinc-950/70 backdrop-blur-sm">
                  <span>FIG. 01 — RIZKY BUDIARTO</span>
                  <span className="text-zinc-500">SONY A7 IV / 35MM GM</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Telemetry Readout */}
            <div className="mt-6 flex items-center justify-between font-mono text-[11px] text-zinc-500 pt-4 border-t border-white/[0.06]">
              <span>DISCIPLINES: ENG + PHOTO</span>
              <span>PORTFOLIO EDITION // 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
