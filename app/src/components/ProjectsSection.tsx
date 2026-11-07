'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { APPS_DATA } from '../library/data';

interface ProjectSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const ProjectsSection = ({ sectionRef }: ProjectSectionProps) => {
  return (
    <section id="projects" ref={sectionRef} className="py-24 relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider mb-3">
              [02 / ENGINEERING ARCHIVE]
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-zinc-100">
              Selected Software Systems
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
            Production systems, backend APIs, and applied machine learning architectures built from
            the ground up.
          </p>
        </div>

        {/* Architectural Case Studies List / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-x border-b border-white/[0.08] divide-y lg:divide-y-0 bg-[#09090b]">
          {APPS_DATA.map((app, index) => {
            const formattedIdx = String(index + 1).padStart(2, '0');
            const isLastOdd = APPS_DATA.length % 2 !== 0 && index === APPS_DATA.length - 1;

            return (
              <motion.article
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className={`group flex flex-col justify-between p-6 sm:p-9 border-b border-white/[0.08] ${
                  index % 2 === 0 && !isLastOdd ? 'lg:border-r border-white/[0.08]' : ''
                } ${isLastOdd ? 'lg:col-span-2 lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center' : ''} hover:bg-white/[0.015] transition-colors`}
              >
                {/* Project Visual Preview */}
                <div className={isLastOdd ? 'lg:col-span-6' : ''}>
                  <div className="flex items-center justify-between font-mono text-[11px] text-zinc-500 mb-4">
                    <span>CASE // {formattedIdx}</span>
                    <span className="text-zinc-400">{app.role}</span>
                  </div>

                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 border border-white/[0.08] mb-6">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Project Details & Links */}
                <div className={`flex flex-col justify-between ${isLastOdd ? 'lg:col-span-6 h-full py-2' : 'flex-1'}`}>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-zinc-100 tracking-tight mb-3 group-hover:text-white transition-colors">
                      {app.title}
                    </h3>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                      {app.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Monospace Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {app.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-zinc-900 text-zinc-300 font-mono text-[11px] border border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Repository & Live Action Bar */}
                    <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        {app.github && (
                          <a
                            href={app.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-white/[0.1] text-zinc-300 hover:text-white font-mono text-[11px] transition-colors"
                          >
                            <Github size={13} />
                            <span>{app.github2 ? app.githubLabel || 'Backend' : 'Source Code'}</span>
                            <ArrowUpRight size={12} className="text-zinc-500" />
                          </a>
                        )}

                        {app.github2 && (
                          <a
                            href={app.github2}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-white/[0.1] text-zinc-300 hover:text-white font-mono text-[11px] transition-colors"
                          >
                            <Github size={13} />
                            <span>{app.github2Label || 'Frontend'}</span>
                            <ArrowUpRight size={12} className="text-zinc-500" />
                          </a>
                        )}

                        {app.github3 && (
                          <a
                            href={app.github3}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-white/[0.1] text-zinc-300 hover:text-white font-mono text-[11px] transition-colors"
                          >
                            <Github size={13} />
                            <span>{app.github3Label || 'Mobile / ML'}</span>
                            <ArrowUpRight size={12} className="text-zinc-500" />
                          </a>
                        )}

                        {app.live && app.live !== '#' && (
                          <a
                            href={app.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-[11px] font-medium transition-colors"
                          >
                            <span>Live Deployment</span>
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>

                      <span className="font-mono text-[10px] text-zinc-600">
                        KINGROVS // SYS.{formattedIdx}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
