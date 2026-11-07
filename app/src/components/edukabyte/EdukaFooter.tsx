'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Mail, ArrowUpRight } from 'lucide-react';

export default function EdukaFooter() {
  return (
    <footer className="bg-[#09090b] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zinc-900 border border-white/[0.12] p-1.5 flex items-center justify-center">
                <Image
                  src="/img/edukabyte/Logo.png"
                  alt="EdukaByte"
                  width={22}
                  height={22}
                  className="object-contain"
                />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-base text-zinc-100">EdukaByte</span>
                <span className="font-mono text-[10px] text-zinc-500">// SCHOOL SUITE</span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Infrastruktur digital mandiri untuk sekolah Indonesia (SMP, SMA, SMK): CBT
              offline-first, perpustakaan digital NISN, dan pengarsipan dokumen akreditasi sekolah
              terenkripsi.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="mailto:rovsgame771@gmail.com?subject=Pemesanan%20Produk%20EdukaByte"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>rovsgame771@gmail.com</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-white/[0.1] font-mono text-xs transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Web Profile</span>
              </Link>
            </div>
          </div>

          {/* Systems Column */}
          <div className="md:col-span-4">
            <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider mb-4">
              MODUL EKOSISTEM
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-mono">
              <li>
                <a href="#produk" className="hover:text-zinc-100 transition-colors">
                  SYS.01 // CBT EdukaByte (Ujian &amp; AI OMR)
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-zinc-100 transition-colors">
                  SYS.02 // PustakaKita (Perpustakaan NISN)
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-zinc-100 transition-colors">
                  SYS.03 // DS Education (Arsip Dokumen Sekolah)
                </a>
              </li>
              <li>
                <a href="#pesan" className="hover:text-zinc-100 transition-colors">
                  PROCUREMENT // Form Pemesanan Sekolah
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance Column */}
          <div className="md:col-span-3">
            <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider mb-4">
              STANDAR &amp; LISENSI
            </div>
            <ul className="space-y-2 text-xs text-zinc-400 font-mono">
              <li>UU No. 27/2022 (UU PDP)</li>
              <li>8 Standar Nasional Pendidikan</li>
              <li>On-Premise Docker &amp; Edge</li>
              <li>Lisensi Tahunan &amp; Perpetual</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} EDUKABYTE — ENGINEERED BY KINGROVS (RIZKY BUDIARTO)
          </div>
          <div>ORDER &amp; SUPPORT: ROVSGAME771@GMAIL.COM</div>
        </div>
      </div>
    </footer>
  );
}
