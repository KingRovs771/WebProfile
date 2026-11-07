'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Terminal, Check } from 'lucide-react';
import { EDUKABYTE_PRODUCTS } from '../library/edukabyteData';

export default function EdukaByteSpotlight() {
  return (
    <section className="py-20 relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>[FLAGSHIP PRODUCT SUITE // EDUKABYTE]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-zinc-100 leading-[1.1]">
              On-premise infrastructure for Indonesian schools.
            </h2>
            <p className="mt-4 text-zinc-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              Ekosistem perangkat lunak mandiri untuk SMP, SMA, dan SMK—mencakup ujian CBT lokal
              anti-hilang data, perpustakaan digital berbasis NISN, serta pengarsipan dokumen
              akreditasi sekolah terenkripsi.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="mailto:rovsgame771@gmail.com?subject=Pemesanan%20%26%20Konsultasi%20Ekosistem%20EdukaByte&body=Halo%20Tim%20EdukaByte%2C%0A%0ASaya%20ingin%20berkonsultasi%20mengenai%20pemesanan%20produk%20EdukaByte%20untuk%20sekolah%20kami%3A%0A-%20Nama%20Sekolah%3A%20%0A-%20Produk%20yang%20Diminati%20(CBT%20EdukaByte%20%2F%20PustakaKita%20%2F%20DS%20Education)%3A%20%0A-%20Jumlah%20Siswa%3A%20%0A-%20Kontak%20WhatsApp%2FTelepon%3A%20"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/[0.12] text-xs font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-zinc-400" />
              <span>Pesan via Email</span>
            </a>

            <Link
              href="/edukabyte"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs transition-all group"
            >
              <span>Buka Halaman EdukaByte</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3-Column Architectural Bento Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-x border-b border-white/[0.08] divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08] bg-[#0b0b0e]/80">
          {EDUKABYTE_PRODUCTS.map((prod, idx) => {
            const sysCode = `SYS.0${idx + 1}`;
            const mailSubject = encodeURIComponent(`Pemesanan Produk ${prod.name} — EdukaByte`);
            const mailBody = encodeURIComponent(
              `Halo Tim EdukaByte (rovsgame771@gmail.com),\n\nKami tertarik untuk memesan / menjadwalkan demo produk ${prod.name} (${prod.subtitle}).\n\nDetail Instansi:\n- Nama Sekolah: \n- Penanggung Jawab / Jabatan: \n- Estimasi Jumlah Siswa: \n- Nomor WhatsApp Aktif: \n\nTerima kasih.`
            );

            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-7 sm:p-8 flex flex-col justify-between hover:bg-white/[0.015] transition-colors group relative"
              >
                <div>
                  {/* Top System Bar */}
                  <div className="flex items-center justify-between font-mono text-[11px] text-zinc-500 mb-6">
                    <span>[{sysCode} // {prod.category.toUpperCase()}]</span>
                    <span className="text-zinc-400 border border-white/[0.08] px-2 py-0.5 bg-zinc-900/60">
                      {prod.badge.split('|')[0].trim()}
                    </span>
                  </div>

                  {/* Product Brand Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 bg-zinc-950 border border-white/[0.1] p-2 flex items-center justify-center shrink-0">
                      <Image
                        src={prod.logo}
                        alt={prod.name}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-100 tracking-tight group-hover:text-white">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-zinc-500 font-mono">{prod.role}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {prod.description}
                  </p>

                  {/* Key Engineering Specs */}
                  <div className="space-y-2 mb-6 pt-5 border-t border-white/[0.06]">
                    {prod.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                        <span>
                          <strong className="font-medium text-zinc-200">{feat.title}</strong> —{' '}
                          <span className="text-zinc-400">{feat.description}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Telemetry Numbers */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3.5 bg-zinc-950/90 border border-white/[0.06] mb-6">
                    {prod.heroStats.map((st, sIdx) => (
                      <div key={sIdx}>
                        <div className="font-mono text-xs font-semibold text-zinc-100">
                          {st.value}
                        </div>
                        <div className="font-mono text-[10px] text-zinc-500 truncate mt-0.5">
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                    <a
                      href={`mailto:rovsgame771@gmail.com?subject=${mailSubject}&body=${mailBody}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white underline decoration-zinc-700 underline-offset-4 hover:decoration-zinc-200 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Pesan Produk</span>
                    </a>

                    <Link
                      href={`/edukabyte#produk`}
                      className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
                    >
                      <span>Spesifikasi &amp; Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
