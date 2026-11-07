'use client';

import { Check, X, Lock } from 'lucide-react';

export default function EdukaArchitectureSection() {
  return (
    <section id="arsitektur" className="py-24 relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider mb-3">
              [04 / SOVEREIGN ARCHITECTURE COMPARISON]
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-zinc-100">
              Self-Hosted vs. SaaS Cloud Pihak Ketiga
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md">
            Mengapa arsitektur on-premise dan edge mandiri jauh lebih aman dan hemat untuk sekolah
            menengah di Indonesia.
          </p>
        </div>

        <div className="border-x border-b border-white/[0.08] bg-[#0b0b0e]">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            {/* Left: Conventional SaaS */}
            <div className="p-7 sm:p-10 space-y-6">
              <div className="pb-4 border-b border-white/[0.06]">
                <div className="font-mono text-[10px] text-zinc-500 uppercase">
                  MODEL KONVENSIONAL
                </div>
                <h3 className="text-xl font-semibold text-zinc-300 mt-1">
                  SaaS Cloud Pihak Ketiga
                </h3>
              </div>

              <ul className="space-y-4 text-sm text-zinc-400">
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-zinc-200 font-medium">Rawan Gangguan Internet:</strong>{' '}
                    Ujian berhenti total apabila koneksi ISP eksternal sekolah putus.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-zinc-200 font-medium">Biaya Langganan Berulang:</strong>{' '}
                    Tagihan bulanan per-siswa yang terus membebani anggaran tahunan sekolah.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-zinc-200 font-medium">Data Siswa di Server Luar:</strong>{' '}
                    Risiko kebocoran data nilai, NISN, dan dokumen akreditasi di cloud pihak ketiga.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-zinc-200 font-medium">Vendor Lock-In:</strong>{' '}
                    Akses histori nilai dan dokumen terkunci apabila sekolah berhenti berlangganan.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: EdukaByte Sovereign Architecture */}
            <div className="p-7 sm:p-10 space-y-6 bg-white/[0.01]">
              <div className="pb-4 border-b border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] text-emerald-400 uppercase">
                    STANDAR EDUKABYTE
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-100 mt-1">
                    Arsitektur Mandiri &amp; Berdaulat
                  </h3>
                </div>
                <span className="font-mono text-[10px] px-2.5 py-1 bg-zinc-900 border border-white/[0.1] text-zinc-200">
                  RECOMMENDED
                </span>
              </div>

              <ul className="space-y-4 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-zinc-100 font-medium">100% Berjalan di LAN Lokal:</strong>{' '}
                    Ujian tetap lancar tanpa koneksi internet luar berkat deployment Docker lokal.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-zinc-100 font-medium">Bebas Tagihan Cloud Bulanan:</strong>{' '}
                    Sekolah cukup menggunakan server lab yang ada atau tier gratis teroptimasi.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-zinc-100 font-medium">Kepatuhan Penuh UU PDP:</strong>{' '}
                    Seluruh database PostgreSQL dan bucket dokumen MinIO berada di tangan sekolah.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-zinc-100 font-medium">Kepemilikan Data Permanen:</strong>{' '}
                    Ekspor penuh ke format standar (Excel, PDF/A, SQL) kapan pun dibutuhkan.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="px-6 py-4 bg-zinc-950 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-zinc-500">
            <span className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-zinc-400" />
              COMPLIANCE: UU NO. 27 TAHUN 2022 (PELINDUNGAN DATA PRIBADI)
            </span>
            <span>CONTAINERIZED DEPLOYMENT // DOCKER &amp; OVA IMAGE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
