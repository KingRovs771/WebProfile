'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

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

  // Pastikan refs ada sebelum di-destructure untuk menghindari error
  const { photographyRef, projectsRef, contactRef } = refs || {};

  const handleScroll = (ref: React.RefObject<HTMLElement | null> | null) => {
    if (!ref) {
      // Khusus untuk 'Home' (ref null), scroll ke paling atas window
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Untuk section lain, gunakan fungsi dari parent
      scrollToSection(ref);
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', ref: null }, // Ref null menandakan scroll ke top
    { label: 'Photography', ref: photographyRef },
    { label: 'Projects', ref: projectsRef },
    { label: 'Contact', ref: contactRef },
  ];

  return (
    <>
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="bg-slate-900/80 backdrop-blur-xl rounded-full px-8 py-3 border border-slate-800/50 shadow-2xl w-full md:w-fit max-w-2xl">
          <div className="flex items-center justify-between gap-8 md:gap-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 shrink-0 cursor-pointer"
              onClick={() => handleScroll(null)} // Klik logo juga kembali ke home
            >
              PORTFOLIO
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  whileHover={{ y: -2 }}
                  onClick={() => handleScroll(item.ref)}
                  className={`relative font-medium px-4 py-2 rounded-full transition-colors text-sm ${
                    activeSection === item.label.toLowerCase() ? 'text-blue-400 bg-slate-800/50' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                  }`}
                >
                  {item.label}
                  {activeSection === item.label.toLowerCase() && <motion.div layoutId="activeIndicator" className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full" />}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-400 p-1">
              {isMenuOpen ? <X size={20} /> : <div className="w-6 h-0.5 bg-slate-400 rounded-full box-content border-y-[6px] border-transparent bg-clip-content"></div>}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed top-24 left-1/2 transform -translate-x-1/2 z-40 w-11/12 max-w-sm md:hidden">
            <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl px-6 py-6 border border-slate-800/50 shadow-2xl">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.label}
                    whileHover={{ x: 5, backgroundColor: 'rgba(30, 41, 59, 0.5)' }}
                    onClick={() => handleScroll(item.ref)}
                    className={`text-left px-4 py-3 rounded-xl transition-colors font-medium text-lg ${activeSection === item.label.toLowerCase() ? 'text-blue-400 bg-slate-800/50' : 'text-slate-300'}`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
