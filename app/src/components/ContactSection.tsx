'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';

interface ContactSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const ContactSection = ({ sectionRef }: ContactSectionProps) => {
  const [copied, setCopied] = useState(false);
  const email = 'rovsgame771@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const socialLinks = [
    {
      label: 'GitHub',
      handle: '@KingRovs771',
      url: 'https://github.com/KingRovs771/',
    },
    {
      label: 'LinkedIn',
      handle: 'in/rzbudi',
      url: 'https://www.linkedin.com/in/rzbudi',
    },
    {
      label: 'Instagram',
      handle: '@rzbudi_',
      url: 'https://www.instagram.com/rzbudi_?igsh=MWRoNmNjc3hkcDA5bA==',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-white/[0.08] bg-[#0b0b0e]">
          {/* Top Bar */}
          <div className="px-6 py-4 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-zinc-500">
            <span>[04 / INQUIRIES &amp; LICENSING]</span>
            <span>SRAGEN, CENTRAL JAVA, ID — UTC+7</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
            {/* Left Column: Direct Call to Action */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-zinc-100 leading-[1.08]">
                  Initiate a conversation or license EdukaByte.
                </h2>
                <p className="mt-5 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
                  Tersedia untuk kolaborasi rekayasa perangkat lunak, arsitektur sistem, maupun
                  pengadaan ekosistem <strong className="text-zinc-200 font-medium">EdukaByte</strong>{' '}
                  (CBT EdukaByte, PustakaKita, DS Education) untuk sekolah di seluruh Indonesia.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${email}?subject=Pemesanan%20Produk%20EdukaByte%20%2F%20Project%20Inquiry`}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs sm:text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>{email}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-3.5 bg-zinc-900 hover:bg-zinc-800 border border-white/[0.1] text-zinc-300 font-mono text-xs transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">COPIED TO CLIPBOARD</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>COPY ADDRESS</span>
                    </>
                  )}
                </button>

                <Link
                  href="/edukabyte#pesan"
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 text-zinc-400 hover:text-zinc-100 font-mono text-xs underline decoration-zinc-700 underline-offset-4"
                >
                  <span>Form Pemesanan EdukaByte ↗</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Channels & Directory */}
            <div className="lg:col-span-5 divide-y divide-white/[0.08] flex flex-col justify-between">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 sm:px-8 flex items-center justify-between hover:bg-white/[0.02] transition-colors group"
                >
                  <div>
                    <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-base font-medium text-zinc-200 group-hover:text-white mt-0.5">
                      {item.handle}
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
