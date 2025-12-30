'use client';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Github } from 'lucide-react';
import React from 'react';

interface ContactSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const ContactSection = ({ sectionRef }: ContactSectionProps) => {
  // 1. Definisikan senarai media sosial beserta pautannya di sini
  const socialLinks = [
    {
      Icon: Instagram,
      url: 'https://www.instagram.com/rzbudi_?igsh=MWRoNmNjc3hkcDA5bA==', // Ganti dengan link anda
      label: 'Instagram',
    },
    {
      Icon: Linkedin,
      url: 'https://www.linkedin.com/in/rzbudi', // Ganti dengan link anda
      label: 'LinkedIn',
    },
    {
      Icon: Github,
      url: 'https://github.com/KingRovs771/', // Ganti dengan link anda
      label: 'GitHub',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-indigo-400 font-medium mb-4 inline-block">
          LET'S CONNECT
        </motion.span>
        <motion.h2 className="text-3xl md:text-5xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Ready to Create Together?
        </motion.h2>
        <motion.p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          Whether you're looking for a creative collaborator or want to discuss a project, I'd love to hear from you.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row justify-center gap-4 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:rizkybudiarto890@gmail.com" // Ganti dengan email anda
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all inline-flex items-center justify-center"
          >
            <Mail className="mr-2" size={20} />
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div className="flex justify-center space-x-6 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          {/* 2. Map senarai socialLinks yang telah didefinisikan tadi */}
          {socialLinks.map(({ Icon, url, label }, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              href={url}
              target="_blank" // Membuka di tab baru
              rel="noopener noreferrer" // Keselamatan untuk tab baru
              aria-label={label}
              className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all hover:bg-slate-800"
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div className="text-slate-500" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <p className="text-lg">Sragen, Indonesia • Open to remote collaborations worldwide</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
