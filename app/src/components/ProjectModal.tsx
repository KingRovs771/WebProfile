'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera } from 'lucide-react';

const ProjectModal = ({ project, onClose }: any) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50 backdrop-blur-sm" onClick={onClose}>
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-800/50 shadow-2xl scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <img src={project.image} alt={project.title} className="w-full max-h-[60vh] object-contain bg-black" />
            <button onClick={onClose} className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-white transition-colors backdrop-blur-md">
              <X size={20} />
            </button>
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <span className="text-sm px-3 py-1 bg-slate-800 text-slate-400 rounded-full border border-slate-700">{project.year}</span>
            </div>
            <p className="text-blue-400 mb-4 flex items-center">
              <Camera size={16} className="mr-2" />
              {project.category}
            </p>
            <p className="text-slate-300 leading-relaxed">A visual narrative captured during golden hour in Jakarta's central business district. This image explores the contrast between modern architecture and human presence.</p>
            <div className="mt-6 pt-6 border-t border-slate-800/50">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-slate-800/50 text-blue-300 rounded-lg text-sm border border-slate-700/50">Canon EOS R6</span>
                <span className="px-4 py-2 bg-slate-800/50 text-blue-300 rounded-lg text-sm border border-slate-700/50">24-70mm f/2.8</span>
                <span className="px-4 py-2 bg-slate-800/50 text-blue-300 rounded-lg text-sm border border-slate-700/50">ISO 100</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
