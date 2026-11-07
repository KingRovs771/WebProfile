'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  BookOpen,
  FileCheck2,
  Cpu,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { EDUKABYTE_PRODUCTS } from '../library/edukabyteData';

export default function EdukaByteSpotlight() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950">
      {/* Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Spotlight Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Flagship Innovation Suite
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              EdukaByte — Ekosistem Kedaulatan Digital Sekolah
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
              Rangkaian platform pendidikan mandiri (self-hosted) yang membebaskan sekolah Indonesia dari
              ketergantungan internet luar dan biaya langganan cloud pihak ketiga.
            </p>
          </div>

          <Link
            href="/edukabyte"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white font-bold text-xs shadow-xl shadow-blue-500/20 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer w-fit"
          >
            Buka Halaman Khusus EdukaByte
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Product Cards Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUKABYTE_PRODUCTS.map((prod, idx) => {
            const isBlue = prod.accentColor === 'blue';
            const isEmerald = prod.accentColor === 'emerald';
            const isIndigo = prod.accentColor === 'indigo';

            return (
              <motion.div
                key={prod.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative bg-slate-900/90 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-slate-700 shadow-xl group overflow-hidden"
              >
                {/* Glow bar at top of card */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${prod.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 p-2 flex items-center justify-center overflow-hidden">
                      <Image
                        src={prod.logo}
                        alt={prod.name}
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        isBlue
                          ? 'bg-blue-500/10 text-sky-300 border-blue-500/30'
                          : isEmerald
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                          : 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30'
                      }`}
                    >
                      {prod.badge.split('|')[0]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 font-medium">{prod.subtitle}</p>

                  <p className="text-xs text-slate-400 mt-3 line-clamp-3 leading-relaxed">
                    {prod.description}
                  </p>

                  {/* Highlights Mini Stats */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-800/80">
                    {prod.heroStats.slice(0, 2).map((st, sIdx) => (
                      <div key={sIdx} className="bg-slate-950/60 p-2 rounded-xl text-center">
                        <div className="text-xs font-extrabold text-white">{st.value}</div>
                        <div className="text-[10px] text-slate-400">{st.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">{prod.role}</span>
                  <Link
                    href={`/edukabyte#produk`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-sky-400 hover:text-sky-300"
                  >
                    Detail & Demo
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

