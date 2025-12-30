'use client';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { PHOTOGRAPHY_DATA } from '../library/data';

const PhotographySection = ({ sectionRef, onSelectProject }) => {
  return (
    <section id="photography" ref={sectionRef} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-blue-400 font-medium mb-4 inline-block">
            VISUAL NARRATIVES
          </motion.span>
          <motion.h2 className="text-3xl md:text-5xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Photography Portfolio
          </motion.h2>
          <motion.p className="text-lg text-slate-400 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            Every frame tells a story. These are mine — captured moments of light, shadow, and human experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHOTOGRAPHY_DATA.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-slate-900 border border-slate-800/50 backdrop-blur-sm shadow-xl"
              onClick={() => onSelectProject(photo)}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img src={photo.image} alt={photo.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5 relative z-20">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">{photo.title}</h3>
                  <span className="text-xs px-2 py-1 bg-slate-800 text-slate-400 rounded-full">{photo.year}</span>
                </div>
                <p className="text-slate-400 text-sm flex items-center">
                  <Camera size={14} className="mr-1 text-blue-400" />
                  {photo.category}
                </p>
                <div className="mt-3 h-1 w-12 bg-blue-500/30 rounded-full group-hover:w-full group-hover:bg-blue-500 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;
