'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Github, Heart, ShieldCheck, Mail, Globe } from 'lucide-react';

export default function EdukaFooter() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-lg shadow-blue-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/img/edukabyte/Logo.png"
                    alt="EdukaByte"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight">EdukaByte</span>
                <span className="text-xs text-sky-400 font-mono">EdTech Sovereign Ecosystem</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Solusi digitalisasi terintegrasi untuk sekolah Indonesia (SMP, SMA, SMK):
              CBT mandiri berkeandalan tinggi, platform literasi virtual gratis NISN,
              dan pengarsipan tata usaha akreditasi sekolah terenkripsi kecerdasan buatan.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Kembali ke Web Profile
              </Link>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Produk Ekosistem
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <a href="#produk" className="hover:text-sky-400 transition-colors">
                  CBT EdukaByte (Zero Data Loss)
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-emerald-400 transition-colors">
                  PustakaKita (Perpustakaan Digital)
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-indigo-400 transition-colors">
                  DS Education (DMS Sekolah)
                </a>
              </li>
              <li>
                <a href="#simulasi" className="hover:text-white transition-colors">
                  Simulasi Interactive Motion
                </a>
              </li>
              <li>
                <a href="#kalkulator-hemat" className="hover:text-white transition-colors">
                  Kalkulator Hemat Dana BOS
                </a>
              </li>
            </ul>
          </div>

          {/* Standards & Compliance */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Kedaulatan & Keamanan
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>UU Perlindungan Data Pribadi (UU PDP)</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>8 Standar Nasional Pendidikan (SNP)</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Arsitektur Docker Containerized</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} EdukaByte. Dikembangkan oleh{' '}
            <strong className="text-slate-300">KingRovs</strong> untuk kemajuan pendidikan Indonesia.
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span>Next.js 16</span>
            <span>•</span>
            <span>Tailwind CSS v4</span>
            <span>•</span>
            <span>Framer Motion</span>
            <span>•</span>
            <span className="text-sky-400">pnpm Managed</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

