'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ProjectModal = ({ project, onClose }: any) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/92 flex items-center justify-center p-4 sm:p-6 z-50 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.97, opacity: 0, y: 12 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.97, opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          className="bg-[#0b0b0e] max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/[0.12] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Technical Header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] font-mono text-xs text-zinc-400">
            <span>
              FRM // {String(project.id).padStart(3, '0')} — {project.category?.toUpperCase()}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white border border-white/[0.08] hover:border-white/[0.2] transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          {/* Image Viewport */}
          <div className="relative bg-black border-b border-white/[0.08] flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-[62vh] object-contain no-select"
            />
          </div>

          {/* Metadata & EXIF Sheet */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-7">
              <div className="flex items-baseline gap-3 mb-2">
                <h3 className="text-xl font-semibold text-zinc-100">{project.title}</h3>
                <span className="font-mono text-xs text-zinc-500">[{project.year}]</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {(project.camera || project.lens || project.iso) && (
              <div className="md:col-span-5 p-4 bg-zinc-950 border border-white/[0.08] font-mono text-xs space-y-2">
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider pb-1.5 border-b border-white/[0.06]">
                  EXIF TELEMETRY
                </div>
                {project.camera && (
                  <div className="flex justify-between text-zinc-300">
                    <span className="text-zinc-500">BODY</span>
                    <span>{project.camera}</span>
                  </div>
                )}
                {project.lens && (
                  <div className="flex justify-between text-zinc-300">
                    <span className="text-zinc-500">OPTICS</span>
                    <span>{project.lens}</span>
                  </div>
                )}
                {project.iso && (
                  <div className="flex justify-between text-zinc-300">
                    <span className="text-zinc-500">SENSITIVITY</span>
                    <span>{project.iso}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
