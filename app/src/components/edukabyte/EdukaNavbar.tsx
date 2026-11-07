'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Menu, X, Sparkles, PhoneCall } from 'lucide-react';

interface EdukaNavbarProps {
  onContactClick?: () => void;
}

export default function EdukaNavbar({ onContactClick }: EdukaNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Produk Unggulan', href: '#produk' },
    { label: 'Simulasi Interaktif', href: '#simulasi' },
    { label: 'Kalkulator Hemat', href: '#kalkulator-hemat' },
    { label: 'Arsitektur Kedaulatan', href: '#arsitektur' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-7xl mx-auto bg-slate-900/85 backdrop-blur-xl border border-slate-800/80 rounded-2xl shadow-2xl shadow-blue-950/30 px-4 sm:px-6 py-3"
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo & Tag */}
          <div className="flex items-center gap-3">
            <Link href="/edukabyte" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-lg shadow-blue-500/25 group-hover:shadow-cyan-400/40 transition-all duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/img/edukabyte/Logo.png"
                    alt="EdukaByte Logo"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-sky-200 bg-clip-text text-transparent">
                    EdukaByte
                  </span>
                  <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30">
                    EdTech Suite
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                  Solusi Kedaulatan Digital Sekolah Indonesia
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/60 transition-all duration-200"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Kembali ke Portfolio
            </Link>

            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white shadow-lg shadow-blue-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Konsultasi Sekolah
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white border border-slate-700"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden overflow-hidden pt-4 pb-2 border-t border-slate-800/80 mt-3"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-slate-200 hover:text-sky-400 px-2 py-1.5 rounded-lg hover:bg-slate-800/50"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2 flex flex-col gap-2">
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Kembali ke Portfolio Utama
                  </Link>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onContactClick?.();
                    }}
                    className="flex items-center justify-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 text-white"
                  >
                    <PhoneCall className="w-4 h-4" />
                    Hubungi Konsultan EdukaByte
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

