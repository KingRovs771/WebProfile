'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Server,
  Terminal,
  Activity,
  CheckCircle2,
} from 'lucide-react';

interface EdukaHeroProps {
  onExploreClick?: () => void;
  onSimulationClick?: () => void;
  onOrderClick?: (productId?: string) => void;
}

const NODE_TELEMETRY = {
  cbt: {
    code: 'SYS.01 // CBT-ENGINE',
    name: 'CBT EdukaByte',
    role: 'Offline-First Computer Based Test & AI OMR Grading',
    protocol: 'WebSocket LAN + IndexedDB Auto-Sync',
    latency: '1.2ms Local LAN',
    throughput: '600+ Concurrent Exam Clients',
    storage: 'PostgreSQL 16 + Redis Pub/Sub',
    status: 'ZERO DATA LOSS VERIFIED',
  },
  pustaka: {
    code: 'SYS.02 // PUSTAKA-KITA',
    name: 'PustakaKita',
    role: 'Single-Tenant Digital School Library & PWA Reader',
    protocol: '10-Digit NISN + PIN Auth (Zero Email)',
    latency: 'Edge Cached / Offline PWA',
    throughput: '1,200+ Kemendikbud BSE Titles',
    storage: 'Cloudflare R2 + Neon Serverless PG',
    status: 'RP 0 / MONTH INFRASTRUCTURE',
  },
  dms: {
    code: 'SYS.03 // DS-EDUCATION',
    name: 'DS Education',
    role: 'School Document Archiving & 8-Standard SNP Accreditation',
    protocol: 'PyTorch NeuralKeyGen + SHA-256 Seal',
    latency: '< 1.8s Semantic Index Query',
    throughput: 'AES-256 Encrypted Object Vault',
    storage: 'MinIO S3 On-Premise + FastAPI',
    status: 'TAMPER-PROOF ARCHIVE READY',
  },
};

export default function EdukaHero({
  onExploreClick,
  onSimulationClick,
  onOrderClick,
}: EdukaHeroProps) {
  const [activeNode, setActiveNode] = useState<'cbt' | 'pustaka' | 'dms'>('cbt');
  const currentTelemetry = NODE_TELEMETRY[activeNode];

  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-24 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Architectural Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.08] font-mono text-[11px] text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-zinc-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              EDUKABYTE SOVEREIGN SUITE
            </span>
            <span className="hidden sm:inline">//</span>
            <span className="hidden sm:inline">SMP · SMA · SMK INDONESIA</span>
          </div>
          <div className="flex items-center gap-4">
            <span>ARCHITECTURE: SELF-HOSTED &amp; EDGE</span>
            <span className="text-zinc-300">[UU PDP COMPLIANT]</span>
          </div>
        </div>

        {/* Main 12-Column Swiss Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/[0.08]">
          {/* Left 7 Columns: Editorial Headline & Direct Actions */}
          <div className="lg:col-span-7 py-10 sm:py-14 lg:pr-12 lg:border-r border-white/[0.08] flex flex-col justify-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="font-mono text-xs text-zinc-400 uppercase tracking-wider mb-5"
              >
                INFRASTRUKTUR DIGITAL SEKOLAH MANDIRI
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="text-4xl sm:text-5xl lg:text-[58px] font-semibold tracking-[-0.035em] text-zinc-100 leading-[1.06]"
              >
                Kedaulatan penuh atas ujian, literasi, dan arsip dokumen sekolah.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl"
              >
                Tidak perlu lagi khawatir ujian macet saat internet sekolah putus, tagihan langganan
                cloud bulanan yang menguras dana BOS, atau berkas akreditasi yang tercecer.
                EdukaByte menyatukan{' '}
                <strong className="text-zinc-200 font-medium">CBT EdukaByte</strong>,{' '}
                <strong className="text-zinc-200 font-medium">PustakaKita</strong>, dan{' '}
                <strong className="text-zinc-200 font-medium">DS Education</strong> dalam satu
                arsitektur yang dikendalikan penuh oleh sekolah.
              </motion.p>

              {/* Primary CTA Strip */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <button
                  onClick={() => onOrderClick?.()}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs sm:text-sm transition-all cursor-pointer group"
                >
                  <Mail className="w-4 h-4" />
                  <span>Pesan Produk EdukaByte</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <button
                  onClick={onExploreClick}
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-medium text-xs sm:text-sm border border-white/[0.1] transition-colors cursor-pointer"
                >
                  <span>Katalog 3 Produk</span>
                  <ArrowDownRight className="w-4 h-4 text-zinc-400" />
                </button>

                <button
                  onClick={onSimulationClick}
                  className="inline-flex items-center gap-2 px-4 py-3.5 text-zinc-400 hover:text-zinc-100 font-mono text-xs transition-colors cursor-pointer"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Uji Simulasi Sistem</span>
                </button>
              </motion.div>
            </div>

            {/* Direct Procurement Note */}
            <div className="mt-12 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-zinc-500">
              <span>PENGADAAN &amp; DEMO RESMI:</span>
              <a
                href="mailto:rovsgame771@gmail.com?subject=Pengadaan%20Ekosistem%20EdukaByte%20Sekolah"
                className="text-zinc-200 hover:text-white underline decoration-zinc-700 underline-offset-4"
              >
                rovsgame771@gmail.com ↗
              </a>
            </div>
          </div>

          {/* Right 5 Columns: Interactive Graphic Motion Architecture Schematic */}
          <div className="lg:col-span-5 py-10 lg:py-14 lg:pl-10 flex flex-col justify-between">
            <div className="border border-white/[0.1] bg-[#0c0c0f] p-5 sm:p-6 relative">
              {/* Corner Crosshairs */}
              <span className="absolute -top-2 -left-2 font-mono text-xs text-zinc-600 select-none">+</span>
              <span className="absolute -top-2 -right-2 font-mono text-xs text-zinc-600 select-none">+</span>
              <span className="absolute -bottom-2 -left-2 font-mono text-xs text-zinc-600 select-none">+</span>
              <span className="absolute -bottom-2 -right-2 font-mono text-xs text-zinc-600 select-none">+</span>

              {/* Schematic Header */}
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-white/[0.08] font-mono text-[11px]">
                <span className="text-zinc-300 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  TOPOLOGY SCHEMATIC
                </span>
                <span className="text-zinc-500">INTERACTIVE NODE</span>
              </div>

              {/* Root School Server Node */}
              <div className="p-3.5 bg-zinc-950 border border-white/[0.1] flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Server className="w-4 h-4 text-zinc-300" />
                  <div>
                    <div className="font-mono text-xs font-semibold text-zinc-100">
                      INFRASTRUKTUR INTI SEKOLAH
                    </div>
                    <div className="font-mono text-[10px] text-zinc-500">
                      Docker LAN Host · Edge CDN · MinIO S3 Vault
                    </div>
                  </div>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ONLINE
                </span>
              </div>

              {/* Animated SVG Bus Lines Connecting Root to 3 Modules */}
              <div className="relative h-10 w-full">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 360 40"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M180 0 V18 M60 18 H300 M60 18 V40 M180 18 V40 M300 18 V40"
                    stroke="rgba(255,255,255,0.14)"
                    strokeWidth="1.5"
                  />
                  <motion.path
                    d={
                      activeNode === 'cbt'
                        ? 'M180 0 V40'
                        : activeNode === 'pustaka'
                        ? 'M180 0 V18 H60 V40'
                        : 'M180 0 V18 H300 V40'
                    }
                    stroke="#f4f4f5"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [24, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                  />
                </svg>
              </div>

              {/* 3 Selectable Product Nodes */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {[
                  { id: 'pustaka', code: 'SYS.02', label: 'PustakaKita', sub: 'NISN Library' },
                  { id: 'cbt', code: 'SYS.01', label: 'CBT Engine', sub: 'Zero Data Loss' },
                  { id: 'dms', code: 'SYS.03', label: 'DS Education', sub: 'Archive & SNP' },
                ].map((node) => {
                  const isSelected = activeNode === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveNode(node.id as any)}
                      className={`p-3 text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-zinc-100 text-zinc-950 border-zinc-100'
                          : 'bg-zinc-950/90 text-zinc-300 border-white/[0.08] hover:border-white/[0.2]'
                      }`}
                    >
                      <div
                        className={`font-mono text-[9px] ${
                          isSelected ? 'text-zinc-600' : 'text-zinc-500'
                        }`}
                      >
                        {node.code}
                      </div>
                      <div className="font-semibold text-xs mt-0.5 truncate">{node.label}</div>
                      <div
                        className={`font-mono text-[10px] mt-0.5 truncate ${
                          isSelected ? 'text-zinc-700' : 'text-zinc-500'
                        }`}
                      >
                        {node.sub}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Live Telemetry Readout Console for Selected Node */}
              <motion.div
                key={activeNode}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="p-4 bg-zinc-950 border border-white/[0.08] font-mono text-xs space-y-2.5"
              >
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                  <span className="text-zinc-100 font-semibold">{currentTelemetry.name}</span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {currentTelemetry.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-zinc-500 block text-[10px]">PROTOCOL</span>
                    <span className="text-zinc-300">{currentTelemetry.protocol}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">CAPACITY</span>
                    <span className="text-zinc-300">{currentTelemetry.throughput}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">STORAGE ENGINE</span>
                    <span className="text-zinc-300">{currentTelemetry.storage}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px]">LATENCY / MODE</span>
                    <span className="text-zinc-300">{currentTelemetry.latency}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] text-zinc-500">{currentTelemetry.code}</span>
                  <button
                    onClick={() =>
                      onOrderClick?.(
                        activeNode === 'cbt'
                          ? 'cbt-edukabyte'
                          : activeNode === 'pustaka'
                          ? 'pustaka-kita'
                          : 'ds-education'
                      )
                    }
                    className="text-[11px] text-zinc-100 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Pesan {currentTelemetry.name}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom 4-Column Architectural Telemetry Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-x border-b border-white/[0.08] divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] bg-[#0b0b0e]">
          {[
            {
              index: 'M.01',
              value: '99.98%',
              label: 'Reliabilitas Ujian Lokal',
              sub: 'Zero Data Loss dengan IndexedDB Sync',
            },
            {
              index: 'M.02',
              value: '< 0.8s',
              label: 'Koreksi LJK AI OMR',
              sub: 'Pemindaian lembar jawaban via kamera',
            },
            {
              index: 'M.03',
              value: 'Rp 0 / bln',
              label: 'Biaya Server PustakaKita',
              sub: 'Dioptimalkan di atas Cloudflare R2 & Neon',
            },
            {
              index: 'M.04',
              value: '8 Standar',
              label: 'Repositori Akreditasi SNP',
              sub: 'Pengarsipan dokumen sekolah bersegel SHA-256',
            },
          ].map((stat) => (
            <div key={stat.index} className="p-6 sm:p-7">
              <div className="font-mono text-[10px] text-zinc-600 mb-2">[{stat.index}]</div>
              <div className="font-mono text-2xl sm:text-3xl font-semibold text-zinc-100 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-zinc-300 mt-1.5">{stat.label}</div>
              <div className="text-[11px] text-zinc-500 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
