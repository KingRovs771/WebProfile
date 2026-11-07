'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { PHOTOGRAPHY_DATA } from '../library/data';

const PhotographySection = ({ sectionRef, onSelectProject }: any) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', ...Array.from(new Set(PHOTOGRAPHY_DATA.map((p) => p.category.toUpperCase())))];

  const filteredPhotos =
    selectedCategory === 'ALL'
      ? PHOTOGRAPHY_DATA
      : PHOTOGRAPHY_DATA.filter((p) => p.category.toUpperCase() === selectedCategory);

  return (
    <section id="photography" ref={sectionRef} className="py-24 relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider mb-3">
              [03 / VISUAL DOCUMENTATION &amp; 35MM CONTACT SHEET]
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-zinc-100">
              Photographic Archive
            </h2>
          </div>

          {/* Category Filter Strip */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 font-mono text-[11px] transition-colors cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-zinc-100 text-zinc-950 border-zinc-100 font-semibold'
                    : 'bg-zinc-900/50 text-zinc-400 border-white/[0.08] hover:text-zinc-200 hover:border-white/[0.16]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Contact Sheet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-x border-b border-white/[0.08] bg-[#09090b]">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, index) => {
              const frameNo = String(photo.id).padStart(3, '0');
              return (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => onSelectProject(photo)}
                  className="group cursor-pointer p-5 sm:p-6 border-b border-r border-white/[0.08] flex flex-col justify-between hover:bg-white/[0.015] transition-colors"
                >
                  {/* Top Film Strip Marker */}
                  <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500 mb-3">
                    <span>FRM // {frameNo}</span>
                    <span>{photo.year} — {photo.category.toUpperCase()}</span>
                  </div>

                  {/* Image Container */}
                  <div className="aspect-[4/3] overflow-hidden relative bg-zinc-900 border border-white/[0.06]">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] no-select"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-950/90 border border-white/[0.15] font-mono text-[11px] text-zinc-100">
                        <Maximize2 className="w-3 h-3" />
                        INSPECT FRAME
                      </span>
                    </div>
                  </div>

                  {/* Bottom EXIF & Title Readout */}
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-baseline justify-between gap-2">
                    <h3 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors truncate">
                      {photo.title}
                    </h3>
                    <span className="font-mono text-[10px] text-zinc-500 shrink-0">
                      {photo.camera} · {photo.iso}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;
