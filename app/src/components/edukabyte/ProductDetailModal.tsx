'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Check,
  ExternalLink,
  Terminal,
  Mail,
  ArrowUpRight,
} from 'lucide-react';
import { EdukaProduct } from '../../library/edukabyteData';

interface ProductDetailModalProps {
  product: EdukaProduct | null;
  onClose: () => void;
  onSimulationClick?: (productId: string) => void;
  onOrderProduct?: (productId: string) => void;
}

export default function ProductDetailModal({
  product,
  onClose,
  onSimulationClick,
  onOrderProduct,
}: ProductDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'features' | 'metrics'>('overview');

  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.98, opacity: 0, y: 12 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.98, opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-[#0b0b0e] border border-white/[0.15] shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]"
        >
          {/* Modal Header */}
          <div className="flex items-start justify-between p-6 sm:p-8 border-b border-white/[0.08] bg-zinc-950">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-900 border border-white/[0.12] p-2 flex items-center justify-center">
                <Image
                  src={product.logo}
                  alt={product.name}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl font-semibold text-zinc-100">{product.name}</h3>
                  <span className="font-mono text-[10px] px-2 py-0.5 bg-zinc-900 text-zinc-300 border border-white/[0.1]">
                    {product.badge}
                  </span>
                </div>
                <p className="text-xs font-mono text-zinc-400 mt-1">{product.subtitle}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/[0.1] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 px-6 sm:px-8 border-b border-white/[0.08] bg-zinc-950/60 overflow-x-auto">
            {[
              { id: 'overview', label: '01. Ringkasan' },
              { id: 'architecture', label: '02. Arsitektur Teknis' },
              { id: 'features', label: '03. Kapabilitas Inti' },
              { id: 'metrics', label: '04. Metrik & Uji Beban' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`font-mono text-xs py-3.5 px-3 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-zinc-100 text-zinc-100 font-semibold'
                    : 'border-transparent text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-zinc-300 text-sm">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mb-2">
                    DESKRIPSI SISTEM
                  </div>
                  <p className="leading-relaxed text-zinc-200">{product.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-zinc-950 border border-white/[0.08]">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase">
                      TARGET PENGGUNA:
                    </span>
                    <p className="font-medium text-zinc-100 mt-1 text-xs">
                      {product.targetAudience}
                    </p>
                  </div>
                  <div className="p-4 bg-zinc-950 border border-white/[0.08]">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase">
                      MODEL DEPLOYMENT:
                    </span>
                    <p className="font-medium text-zinc-100 mt-1 text-xs">
                      {product.deploymentMode}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mb-3">
                    MASALAH SEKOLAH VS. SOLUSI EDUKABYTE
                  </div>
                  <div className="border border-white/[0.08] divide-y divide-white/[0.08] bg-zinc-950">
                    {product.valueProposition.map((item, idx) => (
                      <div key={idx} className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        <div className="text-zinc-400">
                          <span className="font-mono text-[10px] text-rose-400 block mb-1">
                            MASALAH:
                          </span>
                          {item.problem}
                        </div>
                        <div className="text-zinc-200 md:border-l md:border-white/[0.06] md:pl-4">
                          <span className="font-mono text-[10px] text-emerald-400 block mb-1">
                            SOLUSI:
                          </span>
                          {item.solution}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div className="p-4 bg-zinc-950 border border-white/[0.08]">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 mb-2">
                    TOPOLOGI &amp; ARSITEKTUR
                  </div>
                  <p className="text-xs leading-relaxed text-zinc-300">
                    {product.architectureOverview}
                  </p>
                </div>

                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mb-3">
                    STACK TEKNOLOGI
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-zinc-900 font-mono text-xs text-zinc-200 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-zinc-950 border border-white/[0.08] font-mono text-xs">
                  <div className="flex items-center justify-between text-zinc-500 pb-2 mb-2 border-b border-white/[0.06]">
                    <span className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-zinc-300" />
                      QUICK DEPLOYMENT COMMAND
                    </span>
                    <span className="text-[10px]">BASH</span>
                  </div>
                  <pre className="text-emerald-400 overflow-x-auto p-2 bg-zinc-900/60">
                    {product.id === 'cbt-edukabyte'
                      ? 'git clone https://github.com/KingRovs771/EdukaByte.git\ncd EdukaByte && docker compose up -d'
                      : product.id === 'pustaka-kita'
                      ? 'pnpm install && pnpm run build\n# Edge Ready on Netlify + Cloudflare R2'
                      : 'git clone https://github.com/KingRovs771/DMSEducation.git\ncd DMSEducation && docker compose -f docker-compose.prod.yml up -d'}
                  </pre>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="p-4 bg-zinc-950 border border-white/[0.08] space-y-1.5">
                    <div className="flex items-center gap-2 text-zinc-100 font-semibold text-xs">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat.title}</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed pl-5">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'metrics' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {product.metrics.map((metric, idx) => (
                    <div key={idx} className="p-5 bg-zinc-950 border border-white/[0.08]">
                      <div className="font-mono text-2xl font-semibold text-zinc-100">
                        {metric.value}
                      </div>
                      <div className="font-mono text-xs text-zinc-300 mt-1">{metric.label}</div>
                      <div className="text-[11px] text-zinc-500 mt-1">{metric.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-zinc-950 border-t border-white/[0.08]">
            <button
              onClick={() => {
                onClose();
                onSimulationClick?.(product.id);
              }}
              className="font-mono text-xs text-zinc-300 hover:text-white underline decoration-zinc-700 underline-offset-4 cursor-pointer"
            >
              Jalankan di Simulator Sistem →
            </button>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={product.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/[0.1] font-mono text-xs transition-colors"
              >
                <span>Repositori</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => {
                  const prodId = product.id;
                  onClose();
                  onOrderProduct?.(prodId);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Pesan {product.name} (rovsgame771@gmail.com)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
