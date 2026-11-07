'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Terminal,
  Cpu,
  Layers,
  BarChart2,
  Server,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { EdukaProduct } from '../../library/edukabyteData';

interface ProductDetailModalProps {
  product: EdukaProduct | null;
  onClose: () => void;
  onSimulationClick?: (productId: string) => void;
}

export default function ProductDetailModal({
  product,
  onClose,
  onSimulationClick,
}: ProductDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'features' | 'metrics'>('overview');

  if (!product) return null;

  const isBlue = product.accentColor === 'blue';
  const isEmerald = product.accentColor === 'emerald';
  const isIndigo = product.accentColor === 'indigo';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]"
        >
          {/* Modal Header */}
          <div className="flex items-start justify-between p-6 sm:p-8 border-b border-slate-800 bg-slate-950/40">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 p-2.5 flex items-center justify-center shadow-lg">
                <Image
                  src={product.logo}
                  alt={product.name}
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-black text-white">{product.name}</h3>
                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                      isBlue
                        ? 'bg-blue-500/10 text-sky-300 border-blue-500/30'
                        : isEmerald
                        ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                        : 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30'
                    }`}
                  >
                    {product.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1 font-medium">{product.subtitle}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 px-6 sm:px-8 pt-4 border-b border-slate-800/80 bg-slate-900 overflow-x-auto">
            {[
              { id: 'overview', label: 'Ringkasan & Solusi' },
              { id: 'architecture', label: 'Arsitektur Teknis' },
              { id: 'features', label: 'Daftar Fitur Lengkap' },
              { id: 'metrics', label: 'Uji Metrik & Nilai' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-xs font-bold pb-3 px-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? isBlue
                      ? 'border-sky-400 text-sky-400'
                      : isEmerald
                      ? 'border-emerald-400 text-emerald-400'
                      : 'border-indigo-400 text-indigo-400'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Area (Scrollable) */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-300 text-sm">
            {/* 1. Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Deskripsi Sistem
                  </h4>
                  <p className="leading-relaxed text-slate-200">{product.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                    <span className="text-xs font-mono text-slate-400 uppercase">Target Pengguna:</span>
                    <p className="font-semibold text-white mt-1 text-xs">{product.targetAudience}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                    <span className="text-xs font-mono text-slate-400 uppercase">Model Deployment:</span>
                    <p className="font-semibold text-white mt-1 text-xs">{product.deploymentMode}</p>
                  </div>
                </div>

                {/* Problem vs Solution Table */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Analisis Masalah Sekolah vs. Solusi EdukaByte
                  </h4>
                  <div className="space-y-3">
                    {product.valueProposition.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-3"
                      >
                        <div className="text-xs text-rose-300/90 flex items-start gap-2">
                          <span className="font-bold text-rose-400">Masalah:</span>
                          <span>{item.problem}</span>
                        </div>
                        <div className="text-xs text-emerald-300/90 flex items-start gap-2">
                          <span className="font-bold text-emerald-400">Solusi:</span>
                          <span>{item.solution}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 2. Architecture Tab */}
            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2 flex items-center gap-2">
                    <Server className="w-4 h-4" />
                    Ikhtisar Topologi & Kedaulatan Sistem
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {product.architectureOverview}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Tech Stack & Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-slate-800 text-xs font-mono text-slate-200 border border-slate-700/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400 pb-2 mb-2 border-b border-slate-800">
                    <span className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-sky-400" />
                      Instalasi 1-Perintah (Quick Launch)
                    </span>
                    <span className="text-[10px] text-slate-500">Bash / CLI</span>
                  </div>
                  <pre className="text-emerald-400 overflow-x-auto p-2 bg-slate-900/60 rounded-lg">
                    {product.id === 'cbt-edukabyte'
                      ? 'git clone https://github.com/KingRovs771/EdukaByte.git\ncd EdukaByte && docker-compose up -d'
                      : product.id === 'pustaka-kita'
                      ? 'pnpm install && pnpm run build\n# Serverless Ready on Netlify Edge'
                      : 'git clone https://github.com/KingRovs771/DMSEducation.git\ncd DMSEducation && docker-compose -f docker-compose.prod.yml up -d'}
                  </pre>
                </div>
              </div>
            )}

            {/* 3. Features Tab */}
            {activeTab === 'features' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                      <CheckCircle2
                        className={`w-4 h-4 ${
                          isBlue
                            ? 'text-sky-400'
                            : isEmerald
                            ? 'text-emerald-400'
                            : 'text-indigo-400'
                        }`}
                      />
                      <span>{feat.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-6">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* 4. Metrics Tab */}
            {activeTab === 'metrics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {product.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-center"
                    >
                      <div className="text-2xl font-black text-white">{metric.value}</div>
                      <div className="text-xs font-bold text-sky-400 mt-1">{metric.label}</div>
                      <div className="text-[11px] text-slate-400 mt-1">{metric.detail}</div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white block mb-1">Jaminan Kedaulatan & Kepatuhan Regulasi:</strong>
                  Sistem dirancang sepenuhnya mematuhi UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP),
                  di mana data identitas siswa, nilai rapor, dan dokumen akreditasi sekolah berada penuh di bawah
                  yurisdiksi dan kendali pengelola sekolah.
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-slate-950/60 border-t border-slate-800">
            <button
              onClick={() => {
                onClose();
                onSimulationClick?.(product.id);
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300 cursor-pointer"
            >
              Uji Coba di Simulator
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white"
              >
                Tutup
              </button>
              <a
                href={product.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Kunjungi Repositori
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
