'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Zap,
  Server,
  BookOpen,
  FileCheck2,
  Cpu,
  ArrowRight,
  PlayCircle,
  Sparkles,
  Wifi,
  Database,
  Lock,
} from 'lucide-react';

interface EdukaHeroProps {
  onExploreClick?: () => void;
  onSimulationClick?: () => void;
}

export default function EdukaHero({ onExploreClick, onSimulationClick }: EdukaHeroProps) {
  const [activeNode, setActiveNode] = useState<'cbt' | 'pustaka' | 'dms'>('cbt');

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/20 via-sky-500/15 to-emerald-500/10 blur-[130px] rounded-full" />
        <div className="absolute top-2/3 right-10 w-[450px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 left-10 w-[400px] h-[300px] bg-teal-500/10 blur-[110px] rounded-full" />

        {/* Subtle Isometric Grid Mesh */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-xl shadow-blue-950/40"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500" />
            </span>
            <span className="text-xs font-semibold text-slate-200">
              Transformasi Digital Mandiri Sekolah Indonesia
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              100% Data Sovereignty
            </span>
          </motion.div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.h1
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
          >
            Ekosistem Pendidikan Digital{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
              Cerdas, Mandiri, & Bebas Ketergantungan
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Tiga pilar solusi terintegrasi untuk SMP, SMA, dan SMK di Indonesia:
            ujian digital berarsitektur <strong className="text-sky-300 font-semibold">Zero Data Loss</strong>,
            literasi siswa gratis via <strong className="text-emerald-300 font-semibold">NISN Single-Sign-On</strong>,
            serta pengarsipan akreditasi terenkripsi <strong className="text-indigo-300 font-semibold">PyTorch NeuralKey</strong>.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
            >
              Jelajahi 3 Produk EdukaByte
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onSimulationClick}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm border border-slate-700/80 shadow-xl hover:border-slate-600 transition-all cursor-pointer"
            >
              <PlayCircle className="w-4 h-4 text-sky-400" />
              Uji Coba Simulasi Interaktif
            </button>
          </motion.div>
        </div>

        {/* Graphic Motion Interactive Ecosystem Showcase */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative max-w-5xl mx-auto mt-12 bg-slate-900/70 border border-slate-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-blue-950/40 overflow-hidden"
        >
          {/* Subtle Cybernetic Grid Motion Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                Live Ecosystem Architecture • Synchronized LAN & Edge
              </span>
            </div>

            {/* Product Switch Tabs in Graphic Motion */}
            <div className="inline-flex items-center p-1 bg-slate-950/80 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveNode('cbt')}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                  activeNode === 'cbt'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                CBT EdukaByte
              </button>
              <button
                onClick={() => setActiveNode('pustaka')}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                  activeNode === 'pustaka'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                PustakaKita
              </button>
              <button
                onClick={() => setActiveNode('dms')}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                  activeNode === 'dms'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                DS Education
              </button>
            </div>
          </div>

          {/* Graphic Motion Interactive Canvas Visualization */}
          <div className="relative py-8 min-h-[360px] flex flex-col justify-center">
            {/* Pulsing Data Flow Lines (SVG Animation) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
              viewBox="0 0 800 360"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="streamGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="streamGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#6366f1" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Connecting Wave lines */}
              <motion.path
                d="M 120 180 C 250 80, 550 80, 680 180"
                stroke="url(#streamGrad1)"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                animate={{ strokeDashoffset: [0, -48] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
              />
              <motion.path
                d="M 120 180 C 250 280, 550 280, 680 180"
                stroke="url(#streamGrad2)"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                animate={{ strokeDashoffset: [-48, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
              />
              <line
                x1="120"
                y1="180"
                x2="680"
                y2="180"
                stroke="#1e293b"
                strokeWidth="1.5"
              />
            </svg>

            {/* Interactive Nodes in Graphic Motion */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Node 1: PustakaKita */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                onClick={() => setActiveNode('pustaka')}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeNode === 'pustaka'
                    ? 'bg-emerald-950/40 border-emerald-500/60 shadow-xl shadow-emerald-500/20'
                    : 'bg-slate-950/60 border-slate-800 hover:border-emerald-500/30'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                    PWA Offline
                  </span>
                </div>
                <h4 className="font-bold text-white text-base">PustakaKita</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Literasi siswa gratis tanpa email, single-sign-on NISN + PIN, analitik membaca per-anak.
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-emerald-400 font-mono">
                  <Wifi className="w-3 h-3" />
                  <span>Sync Cloudflare R2 • Netlify</span>
                </div>
              </motion.div>

              {/* Center Node 2: CBT EdukaByte (Flagship Hub) */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveNode('cbt')}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  activeNode === 'cbt'
                    ? 'bg-blue-950/50 border-sky-500/70 shadow-2xl shadow-sky-500/30 ring-2 ring-sky-500/30'
                    : 'bg-slate-950/80 border-slate-800 hover:border-sky-500/40'
                }`}
              >
                <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-l from-blue-600 to-sky-500 text-[10px] font-extrabold uppercase tracking-wider text-white rounded-bl-xl">
                  Flagship Core
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 rounded-xl bg-blue-500/15 text-sky-400 border border-blue-500/30">
                    <Cpu className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-sky-300">
                    LAN Docker Self-Hosted
                  </span>
                </div>
                <h4 className="font-extrabold text-white text-lg">CBT EdukaByte</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Ujian offline tanpa takut data hilang, AI OMR koreksi lembar kertas instan, zero third-party leak.
                </p>
                <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-800 text-[11px] font-mono text-sky-400">
                  <span className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" />
                    Server Lokal Sekolah
                  </span>
                  <span className="font-bold bg-sky-500/10 px-2 py-0.5 rounded text-sky-300">
                    99.98% Uptime
                  </span>
                </div>
              </motion.div>

              {/* Node 3: DS Education */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                onClick={() => setActiveNode('dms')}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeNode === 'dms'
                    ? 'bg-indigo-950/40 border-indigo-500/60 shadow-xl shadow-indigo-500/20'
                    : 'bg-slate-950/60 border-slate-800 hover:border-indigo-500/30'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                    <FileCheck2 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">
                    PyTorch ML Sealed
                  </span>
                </div>
                <h4 className="font-bold text-white text-base">DS Education</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Pengarsipan 8 Standar Akreditasi, segel kriptografi NeuralKeyGen, MinIO AES-256 storage.
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-indigo-400 font-mono">
                  <Lock className="w-3 h-3" />
                  <span>SHA-256 Verified • MinIO</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Quick Stats Bar in Bottom */}
          <div className="mt-4 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/50">
              <div className="text-xl sm:text-2xl font-black text-white">99.98%</div>
              <div className="text-[11px] text-slate-400 font-medium">Nilai Zero Data Loss</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/50">
              <div className="text-xl sm:text-2xl font-black text-sky-400">&lt; 0.8s</div>
              <div className="text-[11px] text-slate-400 font-medium">Kecepatan AI OMR Scan</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/50">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">Rp 0</div>
              <div className="text-[11px] text-slate-400 font-medium">Infrastruktur PustakaKita</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/50">
              <div className="text-xl sm:text-2xl font-black text-indigo-400">8 Standar</div>
              <div className="text-[11px] text-slate-400 font-medium">Akreditasi SNP Otomatis</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
