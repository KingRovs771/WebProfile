'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  refs: {
    photographyRef: React.RefObject<HTMLElement | null>;
    projectsRef: React.RefObject<HTMLElement | null>;
    contactRef: React.RefObject<HTMLElement | null>;
  };
}

const Navbar = ({ activeSection, scrollToSection, refs }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { photographyRef, projectsRef, contactRef } = refs || {};

  const handleScroll = (ref: React.RefObject<HTMLElement | null> | null) => {
    if (!ref) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToSection(ref);
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { index: '01', id: 'home', label: 'Index', ref: null },
    { index: '02', id: 'projects', label: 'Engineering', ref: projectsRef },
    { index: '03', id: 'photography', label: 'Visual Archive', ref: photographyRef },
    { index: '04', id: 'contact', label: 'Contact', ref: contactRef },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Identity */}
        <button
          onClick={() => handleScroll(null)}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <div className="w-7 h-7 bg-zinc-100 text-zinc-950 flex items-center justify-center font-mono font-bold text-xs tracking-tighter group-hover:bg-white transition-colors">
            KR
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-semibold text-sm tracking-tight text-zinc-100">
              KingRovs
            </span>
            <span className="hidden sm:inline-block font-mono text-[11px] text-zinc-500">
              / RIZKY BUDIARTO
            </span>
          </div>
        </button>

        {/* Center Architectural Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleScroll(item.ref)}
                className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                  isActive ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <span className="font-mono text-[10px] text-zinc-600">{item.index}</span>
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-active-line"
                    className="absolute bottom-[-17px] left-2 right-2 h-[1.5px] bg-zinc-100"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: EdukaByte Flagship & Direct Mail */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/edukabyte"
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-900 hover:bg-zinc-800/90 border border-white/[0.12] hover:border-white/[0.25] text-xs font-medium text-zinc-100 transition-all"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="font-mono text-[11px] tracking-tight">EDUKABYTE SUITE</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <a
            href="mailto:rovsgame771@gmail.com?subject=Inquiry%20%E2%80%94%20Project%20%2F%20EdukaByte%20Consultation"
            className="px-3.5 py-1.5 bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 border border-white/[0.08]"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#09090b] border-b border-white/[0.08] overflow-hidden"
          >
            <div className="px-4 py-5 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.ref)}
                  className={`flex items-center justify-between px-3 py-2.5 text-left text-sm font-medium border-b border-white/[0.04] ${
                    activeSection === item.id ? 'text-white' : 'text-zinc-400'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-zinc-600">{item.index}</span>
                </button>
              ))}

              <div className="pt-3 flex flex-col gap-2.5">
                <Link
                  href="/edukabyte"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 bg-zinc-900 border border-white/[0.12] text-xs font-mono text-zinc-100"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    EDUKABYTE PRODUCT SUITE
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href="mailto:rovsgame771@gmail.com"
                  className="flex items-center justify-center px-4 py-3 bg-zinc-100 text-zinc-950 font-medium text-xs"
                >
                  rovsgame771@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
