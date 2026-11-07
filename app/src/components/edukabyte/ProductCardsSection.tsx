'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Zap,
  BookOpen,
  FileCheck,
  Cpu,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Layers,
  CheckCircle2,
  AlertCircle,
  HardDrive,
  Users,
  ChevronRight,
} from 'lucide-react';
import { EDUKABYTE_PRODUCTS, EdukaProduct } from '../../library/edukabyteData';

interface ProductCardsSectionProps {
  onSelectProduct: (product: EdukaProduct) => void;
  onSimulationClick?: (productId: string) => void;
}

export default function ProductCardsSection({
  onSelectProduct,
  onSimulationClick,
}: ProductCardsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cbt' | 'literasi' | 'arsip'>('all');

  const filteredProducts = EDUKABYTE_PRODUCTS.filter((product) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'cbt') return product.id === 'cbt-edukabyte';
    if (activeFilter === 'literasi') return product.id === 'pustaka-kita';
    if (activeFilter === 'arsip') return product.id === 'ds-education';
    return true;
  });

  return (
    <section id="produk" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              Tiga Pilar Solusi Sekolah
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Produk Terintegrasi EdukaByte
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
              Dirancang untuk mengatasi hambatan infrastruktur internet, biaya langganan cloud yang mahal,
              dan risiko keamanan data di sekolah Indonesia.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl w-fit">
            {[
              { id: 'all', label: 'Semua Produk (3)' },
              { id: 'cbt', label: 'CBT & Evaluasi' },
              { id: 'literasi', label: 'Literasi Siswa' },
              { id: 'arsip', label: 'Arsip Dokumen' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`text-xs font-semibold px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => {
              const isBlue = product.accentColor === 'blue';
              const isEmerald = product.accentColor === 'emerald';
              const isIndigo = product.accentColor === 'indigo';

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group relative flex flex-col bg-slate-900/80 hover:bg-slate-900 border border-slate-800/90 rounded-3xl p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 shadow-xl ${product.borderGlow} hover:-translate-y-1.5`}
                >
                  {/* Card Header & Badge */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 p-2 flex items-center justify-center shadow-inner overflow-hidden">
                        <Image
                          src={product.logo}
                          alt={product.name}
                          width={36}
                          height={36}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                          {product.category}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                          {product.name}
                        </h3>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                        isBlue
                          ? 'bg-blue-500/10 text-sky-300 border-blue-500/30'
                          : isEmerald
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                          : 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30'
                      }`}
                    >
                      {product.badge.split('|')[0]}
                    </span>
                  </div>

                  {/* Subtitle / Role */}
                  <p className="text-xs font-medium text-slate-300 mb-4 line-clamp-2">
                    {product.subtitle}
                  </p>

                  {/* Key Stats Bar */}
                  <div className="grid grid-cols-3 gap-2 p-3 bg-slate-950/70 border border-slate-800/60 rounded-2xl mb-5 text-center">
                    {product.heroStats.map((stat, sIdx) => (
                      <div key={sIdx} className="flex flex-col">
                        <span className="text-xs sm:text-sm font-extrabold text-white">
                          {stat.value}
                        </span>
                        <span className="text-[10px] text-slate-400 leading-tight mt-0.5">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-5 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Highlight Features Checklist */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                      Fitur Unggulan Utama:
                    </span>
                    {product.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                            isBlue
                              ? 'text-sky-400'
                              : isEmerald
                              ? 'text-emerald-400'
                              : 'text-indigo-400'
                          }`}
                        />
                        <span className="line-clamp-1">
                          <strong className="text-slate-100">{feat.title}:</strong> {feat.description}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="mt-auto pt-4 border-t border-slate-800/80 mb-6">
                    <div className="flex flex-wrap gap-1.5">
                      {product.techStack.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {product.techStack.length > 4 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-slate-800/40 text-slate-400">
                          +{product.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-white shadow-lg transition-all cursor-pointer ${
                        isBlue
                          ? 'bg-blue-600 hover:bg-blue-500 shadow-blue-600/20'
                          : isEmerald
                          ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20'
                          : 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/20'
                      }`}
                    >
                      Lihat Spesifikasi
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onSimulationClick?.(product.id)}
                      title="Uji Coba Fitur di Simulator"
                      className="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/70 transition-all cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-sky-400" />
                    </button>

                    <a
                      href={product.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Lihat Repositori & Kode"
                      className="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/70 transition-all cursor-pointer"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

