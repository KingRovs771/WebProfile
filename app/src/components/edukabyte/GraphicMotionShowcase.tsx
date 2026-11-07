'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Scan,
  BookOpen,
  Lock,
  Play,
  CheckCircle2,
  Wifi,
  WifiOff,
  QrCode,
  FileCheck2,
  RefreshCw,
} from 'lucide-react';

interface GraphicMotionShowcaseProps {
  initialTab?: string;
}

export default function GraphicMotionShowcase({ initialTab = 'cbt' }: GraphicMotionShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'cbt' | 'pustaka' | 'dms'>('cbt');

  useEffect(() => {
    if (initialTab === 'pustaka-kita' || initialTab === 'pustaka') {
      setActiveTab('pustaka');
    } else if (initialTab === 'ds-education' || initialTab === 'dms') {
      setActiveTab('dms');
    } else if (initialTab === 'cbt-edukabyte' || initialTab === 'cbt') {
      setActiveTab('cbt');
    }
  }, [initialTab]);

  // CBT AI OMR Simulator States
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(true);

  // PustakaKita Offline Simulator States
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const [readingPage, setReadingPage] = useState(42);

  // DS Education NeuralKey Simulator States
  const [isSealing, setIsSealing] = useState(false);
  const [documentSealed, setDocumentSealed] = useState(true);
  const [hashToken, setHashToken] = useState('e3b0c44298fc1c149afbf4c8996fb924');

  const runScanSimulation = () => {
    setIsScanning(true);
    setScanComplete(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 1800);
  };

  const runSealSimulation = () => {
    setIsSealing(true);
    setDocumentSealed(false);
    setTimeout(() => {
      setIsSealing(false);
      setDocumentSealed(true);
      const randomHex = Array.from({ length: 32 }, () =>
        Math.floor(Math.random() * 16).toString(16)
      ).join('');
      setHashToken(randomHex);
    }, 1500);
  };

  return (
    <section id="simulasi" className="py-24 relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider mb-3">
              [02 / INTERACTIVE SYSTEM TELEMETRY]
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-zinc-100">
              Simulasi Kerja Mesin Secara Langsung
            </h2>
            <p className="mt-3 text-zinc-400 max-w-2xl text-sm sm:text-base">
              Uji langsung mekanisme pemindaian AI OMR, ketahanan cache offline PustakaKita, dan
              penyegelan kriptografi dokumen DS Education.
            </p>
          </div>

          {/* Simulator Selector Strip */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'cbt', code: 'SIM.01', label: 'AI OMR Scanner (CBT)', Icon: Scan },
              { id: 'pustaka', code: 'SIM.02', label: 'Offline PWA (PustakaKita)', Icon: BookOpen },
              { id: 'dms', code: 'SIM.03', label: 'NeuralKey Seal (DS Education)', Icon: Lock },
            ].map((item) => {
              const isSelected = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`px-4 py-2.5 font-mono text-xs border transition-colors cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-zinc-100 text-zinc-950 border-zinc-100 font-semibold'
                      : 'bg-zinc-900/60 text-zinc-400 border-white/[0.08] hover:text-zinc-200'
                  }`}
                >
                  <item.Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Console Container */}
        <div className="border-x border-b border-white/[0.08] bg-[#0b0b0e] p-6 sm:p-10">
          <AnimatePresence mode="wait">
            {/* 1. CBT AI OMR Scanner */}
            {activeTab === 'cbt' && (
              <motion.div
                key="cbt"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                  <div>
                    <div className="font-mono text-[10px] text-zinc-500 uppercase mb-1">
                      OPTICAL MARK RECOGNITION PIPELINE // OPENCV + PYTORCH
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-100">
                      Pemindaian Lembar Jawaban Kertas (LJK) Otomatis
                    </h3>
                  </div>

                  <button
                    onClick={runScanSimulation}
                    disabled={isScanning}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-100 hover:bg-white disabled:opacity-50 text-zinc-950 font-mono text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {isScanning ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>MEMINDAI CITRA LJK...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>JALANKAN PEMINDAIAN ULANG</span>
                      </>
                    )}
                  </button>
                </div>

                {/* LJK Matrix Viewport */}
                <div className="relative bg-zinc-950 border border-white/[0.08] p-6 overflow-hidden">
                  {isScanning && (
                    <motion.div
                      className="absolute left-0 right-0 h-[2px] bg-emerald-400 shadow-[0_0_20px_#10b981] z-20"
                      initial={{ top: '0%' }}
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 1.8, ease: 'linear' }}
                    />
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-white/[0.06] font-mono text-xs">
                    <span className="text-zinc-200">
                      PESERTA: AHMAD FAUZAN // NISN: 0071239821 // MAPEL: MATEMATIKA WAJIB
                    </span>
                    <span className="text-zinc-500">TEMPLATE: LJK-50-STANDAR</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                    {[
                      { no: '01', ans: 'A', key: 'A', ok: true },
                      { no: '02', ans: 'C', key: 'C', ok: true },
                      { no: '03', ans: 'B', key: 'B', ok: true },
                      { no: '04', ans: 'D', key: 'D', ok: true },
                      { no: '05', ans: 'A', key: 'A', ok: true },
                      { no: '06', ans: 'E', key: 'E', ok: true },
                      { no: '07', ans: 'C', key: 'A', ok: false },
                      { no: '08', ans: 'B', key: 'B', ok: true },
                    ].map((row) => (
                      <div
                        key={row.no}
                        className={`p-3 border flex items-center justify-between transition-colors ${
                          scanComplete
                            ? row.ok
                              ? 'bg-zinc-900/70 border-white/[0.12] text-zinc-200'
                              : 'bg-rose-950/20 border-rose-500/30 text-rose-300'
                            : 'bg-zinc-900/30 border-white/[0.05] text-zinc-500'
                        }`}
                      >
                        <span>SOAL {row.no}</span>
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 bg-zinc-950 border border-white/[0.12] flex items-center justify-center text-zinc-100 font-semibold">
                            {row.ans}
                          </span>
                          {scanComplete && (
                            <span className={row.ok ? 'text-emerald-400' : 'text-rose-400'}>
                              {row.ok ? 'OK' : `KEY:${row.key}`}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                    <div className="flex items-center gap-4">
                      <span className="text-zinc-400">HASIL AKHIR:</span>
                      <span className="text-xl font-semibold text-zinc-100">
                        {scanComplete ? '96.0 / 100' : '-- / 100'}
                      </span>
                    </div>
                    <div className="text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>
                        {scanComplete
                          ? '48 BENAR · 2 SALAH · LATENSI 0.64 DETIK'
                          : 'MENUNGGU PEMINDAIAN...'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. PustakaKita Offline Reader */}
            {activeTab === 'pustaka' && (
              <motion.div
                key="pustaka"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                  <div>
                    <div className="font-mono text-[10px] text-zinc-500 uppercase mb-1">
                      SERVICE WORKER PWA // NISN 10-DIGIT SINGLE SIGN-ON
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-100">
                      Ketahanan Baca Buku Tanpa Koneksi Internet
                    </h3>
                  </div>

                  <button
                    onClick={() => setIsOfflineMode(!isOfflineMode)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 font-mono text-xs font-semibold border transition-colors cursor-pointer ${
                      isOfflineMode
                        ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                        : 'bg-zinc-100 text-zinc-950 border-zinc-100'
                    }`}
                  >
                    {isOfflineMode ? (
                      <>
                        <WifiOff className="w-3.5 h-3.5" />
                        <span>JARINGAN DIPUTUS (OFFLINE CACHE AKTIF)</span>
                      </>
                    ) : (
                      <>
                        <Wifi className="w-3.5 h-3.5" />
                        <span>TERHUBUNG (KLIK UNTUK SIMULASI PUTUS INTERNET)</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="bg-zinc-950 border border-white/[0.08] p-6 space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/[0.06] font-mono text-xs text-zinc-400">
                    <span>READER SESSION // SITI RAHMAWATI (NISN: 0087654321)</span>
                    <span className={isOfflineMode ? 'text-amber-400' : 'text-emerald-400'}>
                      {isOfflineMode
                        ? 'SOURCE: LOCAL INDEXEDDB CACHE (0 KBPS)'
                        : 'SOURCE: CLOUDFLARE R2 EDGE CDN'}
                    </span>
                  </div>

                  <div className="p-6 bg-zinc-900/50 border border-white/[0.06] max-w-3xl mx-auto">
                    <div className="font-mono text-[11px] text-zinc-500 mb-2">
                      BUKU SEKOLAH ELEKTRONIK (BSE) — ILMU PENGETAHUAN SOSIAL KELAS VIII · HALAMAN{' '}
                      {readingPage}
                    </div>
                    <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-serif">
                      &ldquo;Pemerataan akses literasi di seluruh kepulauan Indonesia memerlukan
                      infrastruktur perangkat lunak yang tidak bergantung pada stabilitas sinyal
                      seluler semata. Dengan menyimpan buku terkompresi di memori peramban siswa,
                      proses belajar tetap berlangsung di sekolah maupun di rumah.&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setReadingPage(Math.max(1, readingPage - 1))}
                        className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-white/[0.1] text-zinc-200 cursor-pointer"
                      >
                        ← PREV
                      </button>
                      <span className="px-3 text-zinc-300">HAL {readingPage} / 180</span>
                      <button
                        onClick={() => setReadingPage(Math.min(180, readingPage + 1))}
                        className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-white/[0.1] text-zinc-200 cursor-pointer"
                      >
                        NEXT →
                      </button>
                    </div>
                    <span className="text-zinc-400">
                      LOG LITERASI TERSIMPAN: <strong className="text-zinc-100">48 MENIT HARI INI</strong>
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. DS Education NeuralKey Stamping */}
            {activeTab === 'dms' && (
              <motion.div
                key="dms"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                  <div>
                    <div className="font-mono text-[10px] text-zinc-500 uppercase mb-1">
                      DOCUMENT INTEGRITY VAULT // PYTORCH NEURALKEYGEN + SHA-256
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-100">
                      Penyegelan Kriptografi Arsip &amp; Surat Keputusan Sekolah
                    </h3>
                  </div>

                  <button
                    onClick={runSealSimulation}
                    disabled={isSealing}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-100 hover:bg-white disabled:opacity-50 text-zinc-950 font-mono text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {isSealing ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>MENGENKRIPSI SEGEL...</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-3.5 h-3.5" />
                        <span>GENERATE SEGEL BARU</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="bg-zinc-950 border border-white/[0.08] p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-8 space-y-3 font-mono text-xs">
                    <div className="flex items-center gap-2 text-zinc-200 font-semibold">
                      <FileCheck2 className="w-4 h-4 text-emerald-400" />
                      <span>DOKUMEN: SK_KELULUSAN_DAN_TRANSKRIP_2026.PDF</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-[11px]">
                      <div className="p-3 bg-zinc-900/60 border border-white/[0.06]">
                        <span className="text-zinc-500 block">KLASIFIKASI OTOMATIS (AI)</span>
                        <span className="text-zinc-200">STANDAR 08 — PENILAIAN PENDIDIKAN</span>
                      </div>
                      <div className="p-3 bg-zinc-900/60 border border-white/[0.06]">
                        <span className="text-zinc-500 block">OBJECT STORAGE</span>
                        <span className="text-zinc-200">MINIO S3 BUCKET (AES-256-GCM)</span>
                      </div>
                    </div>
                    <div className="p-3 bg-zinc-900/60 border border-white/[0.06] text-[11px] break-all">
                      <span className="text-zinc-500 block mb-0.5">SHA-256 SIGNATURE DIGEST:</span>
                      <span className="text-emerald-400">{hashToken}</span>
                    </div>
                  </div>

                  <div className="md:col-span-4 flex justify-center">
                    {documentSealed ? (
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="p-5 bg-zinc-900 border border-white/[0.15] text-center font-mono w-44"
                      >
                        <QrCode className="w-16 h-16 text-zinc-100 mx-auto mb-2" />
                        <div className="text-[10px] font-semibold text-emerald-400">
                          NEURALKEY VERIFIED
                        </div>
                        <div className="text-[9px] text-zinc-500 mt-0.5 truncate">
                          ID: {hashToken.slice(0, 12)}
                        </div>
                      </motion.div>
                    ) : (
                      <div className="p-5 border border-dashed border-white/[0.1] text-center font-mono text-xs text-zinc-500 w-44 h-36 flex items-center justify-center">
                        COMPUTING HASH...
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
