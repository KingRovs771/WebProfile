'use client';
import { motion } from 'framer-motion';
import { Github, ExternalLink, User, Layers } from 'lucide-react';
import { APPS_DATA } from '../library/data';

interface ProjectSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const ProjectsSection = ({ sectionRef }: ProjectSectionProps) => {
  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-slate-950/50 border-y border-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-cyan-400 font-medium mb-4 inline-block">
            DIGITAL CRAFTSMANSHIP
          </motion.span>
          <motion.h2 className="text-3xl md:text-5xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Digital Projects
          </motion.h2>
          <motion.p className="text-lg text-slate-400 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            From concept to deployment — engineered experiences that solve real problems with elegant solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {APPS_DATA.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/30 backdrop-blur-sm group shadow-xl hover:shadow-cyan-900/10 transition-all"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10"></div>
                <img src={app.image} alt={app.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7 relative">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{app.title}</h3>
                  <div className="flex space-x-2">
                    <a
                      href={app.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={app.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Role Display */}
                <div className="flex items-center mb-4 text-blue-300/90 text-sm font-medium">
                  <User size={14} className="mr-2" />
                  <span>{app.role}</span>
                </div>

                <p className="text-slate-400 mb-5 leading-relaxed border-l-2 border-slate-700 pl-4">{app.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {app.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-slate-800/80 text-blue-200 text-xs font-medium rounded-md border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
                  <div className="flex items-center">
                    <Layers size={18} className="text-cyan-500 mr-2" />
                    <span className="text-slate-500 text-xs uppercase tracking-wider">KingRovs771</span>
                  </div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
