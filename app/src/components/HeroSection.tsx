'use client';
import { motion } from 'framer-motion';
import { Code, Camera, ChevronDown } from 'lucide-react';
interface HeroSectionProps {
  scrollToRef: (ref: React.RefObject<HTMLElement | null>) => void;
  refs: {
    projectsRef: React.RefObject<HTMLElement | null>;
    contactRef: React.RefObject<HTMLElement | null>;
  };
}
const HeroSection = ({ scrollToRef, refs }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-20 lg:pt-0 min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Text Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex-1 text-center lg:text-left w-full lg:w-1/2">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-900/20 backdrop-blur-md">
              <span className="text-blue-400 text-sm font-semibold tracking-wide">AVAILABLE FOR WORK</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 tracking-tight leading-[1.1]">
              <span className="block text-slate-100">Where Code</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">Meets Soul.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I am a creative developer building digital experiences that resonate emotionally and function flawlessly — fusing pixels, logic, and visual poetry.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToRef(refs.projectsRef)}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all text-lg"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToRef(refs.contactRef)}
                className="px-8 py-4 bg-slate-800 text-slate-200 font-medium rounded-xl border border-slate-700 hover:bg-slate-700/50 transition-all text-lg"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div initial={{ opacity: 0, scale: 0.8, x: 50 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex-1 flex justify-center lg:justify-end w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>

              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[550px] lg:h-[550px] rounded-full overflow-hidden border-2 border-slate-700/50 shadow-2xl">
                <img src="/img/profile.jpg" alt="Profile" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 to-transparent"></div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute bottom-4 left-4 lg:bottom-10 lg:left-0 bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl border border-slate-700 shadow-xl"
              >
                <Code className="text-blue-400 w-6 h-6 lg:w-8 lg:h-8" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                className="absolute top-4 right-4 lg:top-10 lg:right-10 bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl border border-slate-700 shadow-xl"
              >
                <Camera className="text-cyan-400 w-6 h-6 lg:w-8 lg:h-8" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center">
          <span className="text-slate-500 text-sm mb-2">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown className="text-slate-400" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
