'use client';

import { motion } from 'framer-motion';
import {
  Server,
  ShieldAlert,
  ShieldCheck,
  Lock,
  CloudOff,
  Zap,
  Check,
  X,
  Database,
  Terminal,
} from 'lucide-react';

export default function EdukaArchitectureSection() {
  return (
    <section id="arsitektur" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Server className="w-3.5 h-3.5" />
            Data Sovereignty & Security
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mengapa Pendekatan Self-Hosted Lebih Unggul untuk Sekolah?
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Perbandingan mendalam antara platform SaaS Cloud Pihak Ketiga dengan arsitektur berdaulat mandiri EdukaByte.
          </p>
        </div>

        {/* Comparison Table Grid */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {/* Left: SaaS Cloud Biasa */}
            <div className="p-6 sm:p-8 space-y-6 bg-slate-950/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center border border-rose-500/20">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">SaaS Cloud Pihak Ketiga</h3>
                  <span className="text-xs text-rose-400">Tinggi Risiko & Biaya Langganan</span>
                </div>
              </div>

              <ul className="space-y-4 text-xs text-slate-300">
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Ketergantungan Internet:</strong> Ujian seketika macet dan gagal submit saat jaringan internet sekolah terputus.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Biaya Berulang (Recurring):</strong> Biaya langganan jutaan rupiah per bulan membebani anggaran dana BOS sekolah.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Privasi Data Rentan:</strong> Identitas dan nilai siswa tersimpan di server luar yang berpotensi dimonetisasi atau bocor.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Vendor Lock-in:</strong> Sekolah terikat pada satu penyedia dan sulit mengekspor arsip data secara mandiri.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: EdukaByte Self-Hosted */}
            <div className="p-6 sm:p-8 space-y-6 bg-gradient-to-b from-blue-950/20 to-slate-950/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">EdukaByte Suite</h3>
                  <span className="text-xs text-emerald-400">Mandiri, Bebas Biaya Cloud, & Terenkripsi</span>
                </div>
              </div>

              <ul className="space-y-4 text-xs text-slate-200">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Tahan Gangguan (Offline-First):</strong> Tetap berjalan 100% lancar di jaringan lokal (LAN) meskipun kabel internet putus.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>0 Rupiah Biaya Bulanan:</strong> Model self-hosted dan optimasi free-tier memastikan tidak ada tagihan server bulanan.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Kepatuhan UU PDP 100%:</strong> Data tidak pernah meninggalkan server sekolah, mematuhi standar privasi tertinggi.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Kedaulatan Kepemilikan:</strong> Sekolah memiliki kendali mutlak atas kode, database PostgreSQL, dan penyimpanan MinIO.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Security Note */}
          <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono">
            <span className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-sky-400" />
              Sertifikasi Arsitektur: ISO/IEC 27001 Principle & UU No. 27/2022
            </span>
            <span className="text-sky-400">Docker Containerized • Zero Vendor Lock-in</span>
          </div>
        </div>
      </div>
    </section>
  );
}
