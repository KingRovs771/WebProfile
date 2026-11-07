'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  Mail,
  Terminal,
  FileCode2,
} from 'lucide-react';
import { EDUKABYTE_PRODUCTS, EdukaProduct } from '../../library/edukabyteData';

interface ProductCardsSectionProps {
  onSelectProduct: (product: EdukaProduct) => void;
  onSimulationClick?: (productId: string) => void;
  onOrderProduct?: (productId: string) => void;
}

export default function ProductCardsSection({
  onSelectProduct,
  onSimulationClick,
  onOrderProduct,
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
    <section id="produk" className="py-24 relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider mb-3">
              [01 / PRODUCT CATALOG &amp; SPECIFICATIONS]
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-zinc-100">
              Tiga Produk Inti EdukaByte
            </h2>
            <p className="mt-3 text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              Setiap modul dapat diimplementasikan secara mandiri maupun sebagai paket ekosistem
              terpadu sesuai prioritas anggaran sekolah.
            </p>
          </div>

          {/* Architectural Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'all', label: 'ALL SYSTEMS [03]' },
              { id: 'cbt', label: 'SYS.01 / CBT ENGINE' },
              { id: 'literasi', label: 'SYS.02 / PUSTAKAKITA' },
              { id: 'arsip', label: 'SYS.03 / DS EDUCATION' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-2 font-mono text-[11px] border transition-colors cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-zinc-100 text-zinc-950 border-zinc-100 font-semibold'
                    : 'bg-zinc-900/50 text-zinc-400 border-white/[0.08] hover:text-zinc-200 hover:border-white/[0.18]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Architectural Stack */}
        <div className="divide-y divide-white/[0.08] border-x border-b border-white/[0.08] bg-[#0b0b0e]">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const sysIndex =
                product.id === 'cbt-edukabyte'
                  ? 'SYS.01'
                  : product.id === 'pustaka-kita'
                  ? 'SYS.02'
                  : 'SYS.03';

              return (
                <motion.article
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08] hover:bg-white/[0.01] transition-colors"
                >
                  {/* Left 5 Columns: Identity, Summary & Direct Order */}
                  <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between">
                    <div>
                      {/* System Header */}
                      <div className="flex items-center justify-between font-mono text-[11px] text-zinc-500 mb-6">
                        <span>[{sysIndex} // {product.category.toUpperCase()}]</span>
                        <span className="px-2 py-0.5 bg-zinc-900 border border-white/[0.08] text-zinc-300">
                          {product.badge.split('|')[0].trim()}
                        </span>
                      </div>

                      {/* Brand Mark & Title */}
                      <div className="flex items-start gap-4 mb-5">
                        <div className="w-14 h-14 bg-zinc-950 border border-white/[0.12] p-2.5 flex items-center justify-center shrink-0">
                          <Image
                            src={product.logo}
                            alt={product.name}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-100 tracking-tight">
                            {product.name}
                          </h3>
                          <p className="text-xs font-mono text-zinc-400 mt-1">
                            {product.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* 3-Column Telemetry Box */}
                      <div className="grid grid-cols-3 border border-white/[0.08] divide-x divide-white/[0.08] bg-zinc-950 mb-6">
                        {product.heroStats.map((stat, sIdx) => (
                          <div key={sIdx} className="p-3">
                            <div className="font-mono text-xs sm:text-sm font-semibold text-zinc-100">
                              {stat.value}
                            </div>
                            <div className="font-mono text-[10px] text-zinc-500 mt-0.5 truncate">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Primary Order & Spec Buttons */}
                    <div className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <button
                          onClick={() => onOrderProduct?.(product.id)}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs transition-colors cursor-pointer"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Pesan {product.name}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => onSelectProduct(product)}
                          className="px-4 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/[0.1] font-mono text-xs transition-colors cursor-pointer"
                        >
                          Spesifikasi
                        </button>

                        <button
                          onClick={() => onSimulationClick?.(product.id)}
                          title="Uji Simulasi Sistem"
                          className="px-3.5 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/[0.1] font-mono text-xs transition-colors cursor-pointer inline-flex items-center gap-1.5"
                        >
                          <Terminal className="w-3.5 h-3.5" />
                          <span>Demo</span>
                        </button>
                      </div>

                      <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500 pt-1">
                        <span>DEPLOYMENT: {product.deploymentMode.split('(')[0].trim()}</span>
                        <span>LISENSI: TAHUNAN / PERPETUAL</span>
                      </div>
                    </div>
                  </div>

                  {/* Right 7 Columns: Capabilities, Problem-Solution & Stack */}
                  <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between bg-[#09090b]/60">
                    <div>
                      <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider mb-4">
                        KAPABILITAS TEKNIS &amp; FITUR INTI
                      </div>

                      {/* 5 Capabilities Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {product.keyFeatures.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="p-4 bg-zinc-950/80 border border-white/[0.06] flex flex-col justify-between"
                          >
                            <div className="flex items-start gap-2.5">
                              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <div>
                                <h4 className="text-xs font-semibold text-zinc-100">
                                  {feat.title}
                                </h4>
                                <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                                  {feat.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Problem vs Solution Mini Table */}
                      <div className="mb-6">
                        <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider mb-3">
                          STUDI KASUS SOLUSI SEKOLAH
                        </div>
                        <div className="border border-white/[0.08] divide-y divide-white/[0.06] bg-zinc-950/60 text-xs">
                          {product.valueProposition.slice(0, 2).map((vp, vIdx) => (
                            <div
                              key={vIdx}
                              className="p-3.5 grid grid-cols-1 md:grid-cols-2 gap-3"
                            >
                              <div className="text-zinc-400">
                                <span className="font-mono text-[10px] text-zinc-500 block mb-0.5">
                                  KENDALA UMUM:
                                </span>
                                {vp.problem}
                              </div>
                              <div className="text-zinc-200 md:border-l md:border-white/[0.06] md:pl-3">
                                <span className="font-mono text-[10px] text-emerald-400 block mb-0.5">
                                  ARSITEKTUR {product.name.toUpperCase()}:
                                </span>
                                {vp.solution}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack Footer */}
                    <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {product.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 bg-zinc-900 border border-white/[0.08] font-mono text-[10px] text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="font-mono text-[10px] text-zinc-500">
                        TARGET: {product.targetAudience.split(',')[0]}
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
