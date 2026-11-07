'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Mail, Menu, X } from 'lucide-react';

interface EdukaNavbarProps {
  onOrderClick?: (productId?: string) => void;
}

export default function EdukaNavbar({ onOrderClick }: EdukaNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { index: '01', label: 'Produk', href: '#produk' },
    { index: '02', label: 'Simulasi Sistem', href: '#simulasi' },
    { index: '03', label: 'Efisiensi BOS', href: '#kalkulator-hemat' },
    { index: '04', label: 'Arsitektur', href: '#arsitektur' },
    { index: '05', label: 'Pemesanan', href: '#pesan' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand Identity & Portfolio Backlink */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 pr-4 border-r border-white/[0.08] font-mono text-[11px] text-zinc-400 hover:text-zinc-100 transition-colors"
            title="Kembali ke Portfolio Utama"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">KINGROVS</span>
          </Link>

          <Link href="/edukabyte" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 bg-zinc-900 border border-white/[0.12] p-1 flex items-center justify-center">
              <Image
                src="/img/edukabyte/Logo.png"
                alt="EdukaByte"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-sm tracking-tight text-zinc-100">
                EdukaByte
              </span>
              <span className="font-mono text-[10px] text-zinc-500 hidden md:inline">
                // SCHOOL INFRASTRUCTURE SUITE
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Numbered Architectural Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-1.5"
            >
              <span className="font-mono text-[10px] text-zinc-600">{link.index}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Right: Direct Order CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="mailto:rovsgame771@gmail.com?subject=Pemesanan%20Produk%20EdukaByte"
            className="hidden xl:inline-flex items-center gap-1.5 font-mono text-[11px] text-zinc-400 hover:text-zinc-200 px-2.5 py-1.5 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>rovsgame771@gmail.com</span>
          </a>

          <button
            onClick={() => onOrderClick?.()}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs transition-colors cursor-pointer"
          >
            <span>Pesan Produk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 text-zinc-400 hover:text-white border border-white/[0.08]"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="sm:hidden bg-[#09090b] border-b border-white/[0.08] overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-2.5 px-2 text-sm text-zinc-300 hover:text-white border-b border-white/[0.04]"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-zinc-600">{link.index}</span>
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOrderClick?.();
                  }}
                  className="w-full py-3 bg-zinc-100 text-zinc-950 font-medium text-xs text-center"
                >
                  Pesan Produk (rovsgame771@gmail.com)
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
