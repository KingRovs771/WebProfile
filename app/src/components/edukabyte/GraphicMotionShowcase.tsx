'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Scan,
  BookOpen,
  Lock,
  Play,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Wifi,
  WifiOff,
  Cpu,
  Fingerprint,
  QrCode,
  FileCheck2,
  Zap,
} from 'lucide-react';

interface GraphicMotionShowcaseProps {
  initialTab?: string;
}

export default function GraphicMotionShowcase({ initialTab = 'cbt' }: GraphicMotionShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'cbt' | 'pustaka' | 'dms'>(
    initialTab === 'pustaka-kita' ? 'pustaka' : initialTab === 'ds-education' ? 'dms' : 'cbt'
  );

  // States for CBT AI OMR Simulator
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  // States for PustakaKita Offline Simulator
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const [readingPage, setReadingPage] = useState(42);

  // States for DS Education NeuralKey Simulator
  const [isSealing, setIsSealing] = useState(false);
  const [documentSealed, setDocumentSealed] = useState(false);
  const [hashToken, setHashToken] = useState('a9f4c3...81e2');

  const runScanSimulation = () => {
    setIsScanning(true);
    setScanComplete(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 2200);
  };

  const runSealSimulation = () => {
    setIsSealing(true);
    setDocumentSealed(false);
    setTimeout(() => {
      setIsSealing(false);
      setDocumentSealed(true);
      setHashToken(
        Math.random().toString(36).substring(2, 8) +
          '...' +
          Math.random().toString(36).substring(2, 6)
      );
    }, 2000);
  };

  return (
    <section id="simulasi" className="py-20 relative bg-slate-950/60 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Graphic Motion Playground
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Uji Coba Langsung Teknologi Inti
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Rasakan keunggulan arsitektur setiap produk melalui simulasi interaktif micro-motion di bawah ini.
          </p>

          {/* Simulator Navigation Tabs */}
          <div className="flex justify-center mt-6">
            <div className="inline-flex p-1.5 bg-slate-900 border border-slate-800 rounded-2xl">
              <button
                onClick={() => setActiveTab('cbt')}
                className={`flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer ${
                  activeTab === 'cbt'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Scan className="w-4 h-4" />
                AI OMR Scanner (CBT)
              </button>
              <button
                onClick={() => setActiveTab('pustaka')}
                className={`flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer ${
                  activeTab === 'pustaka'
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Offline Reader (PustakaKita)
              </button>
              <button
                onClick={() => setActiveTab('dms')}
                className={`flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer ${
                  activeTab === 'dms'
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Lock className="w-4 h-4" />
                NeuralKey Stamping (DS)
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Motion Canvas Area */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {/* 1. CBT AI OMR Scanner Simulation */}
            {activeTab === 'cbt' && (
              <motion.div
                key="cbt"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Scan className="w-5 h-5 text-sky-400" />
                      Simulasi Pemindaian Lembar LJK Fisik via AI
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Model computer vision mendeteksi bulatan pensil 2B secara instan tanpa scanner khusus LJK.
                    </p>
                  </div>
                  <button
                    onClick={runScanSimulation}
                    disabled={isScanning}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold shadow-lg shadow-blue-500/25 hover:shadow-cyan-400/40 disabled:opacity-50 transition-all cursor-pointer"
                  >
                    {isScanning ? (
                      <>
                        <Zap className="w-4 h-4 animate-spin" />
                        Sedang Memindai...
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-current" />
                        Pindai Lembar LJK (Kamera)
                      </>
                    )}
                  </button>
                </div>

                {/* Simulated LJK Sheet with Motion Laser */}
                <div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-6 overflow-hidden min-h-[300px] flex flex-col justify-between">
                  {/* Scanning Laser Beam */}
                  {isScanning && (
                    <motion.div
                      className="absolute left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 shadow-[0_0_15px_#38bdf8] z-20"
                      initial={{ top: '0%' }}
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 2.2, ease: 'easeInOut' }}
                    />
                  )}

                  {/* LJK Header Mockup */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">
                        LJK
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">PENILAIAN AKHIR SEMESTER (PAS)</div>
                        <div className="text-[11px] font-mono text-slate-400">
                          Siswa: Ahmad Fauzan • NISN: 0071239821 • Matematika
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      Form Standard 50-Soal
                    </span>
                  </div>

                  {/* Bubble Answer Matrix Mockup */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 text-xs font-mono">
                    {[
                      { no: '01', ans: 'A', status: 'correct' },
                      { no: '02', ans: 'C', status: 'correct' },
                      { no: '03', ans: 'B', status: 'correct' },
                      { no: '04', ans: 'D', status: 'correct' },
                      { no: '05', ans: 'A', status: 'correct' },
                      { no: '06', ans: 'E', status: 'correct' },
                      { no: '07', ans: 'C', status: 'wrong' },
                      { no: '08', ans: 'B', status: 'correct' },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-2 rounded-xl border flex items-center justify-between transition-all ${
                          scanComplete
                            ? item.status === 'correct'
                              ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
                              : 'bg-rose-950/30 border-rose-500/40 text-rose-300'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400'
                        }`}
                      >
                        <span>Soal {item.no}</span>
                        <div className="flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center font-bold text-[11px] text-white">
                            {item.ans}
                          </span>
                          {scanComplete && (
                            <span>{item.status === 'correct' ? '✓' : '✗'}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Scan Result Feedback Bar */}
                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl font-black text-white">
                        {scanComplete ? (
                          <span className="text-emerald-400">96 / 100</span>
                        ) : (
                          <span className="text-slate-500">-- / 100</span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {scanComplete
                          ? 'Koreksi Selesai (48 Benar, 2 Salah)'
                          : 'Klik tombol Pindai untuk menguji coba'}
                      </div>
                    </div>
                    {scanComplete && (
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          LULUS KKM (0.68 detik)
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. PustakaKita Offline-First Reader Simulation */}
            {activeTab === 'pustaka' && (
              <motion.div
                key="pustaka"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-emerald-400" />
                      Simulasi Reader PWA Offline-First Siswa
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Buku tetap lancar dibaca meskipun koneksi internet diputus seketika.
                    </p>
                  </div>

                  {/* Toggle Offline Mode Button */}
                  <button
                    onClick={() => setIsOfflineMode(!isOfflineMode)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isOfflineMode
                        ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                        : 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                    }`}
                  >
                    {isOfflineMode ? (
                      <>
                        <WifiOff className="w-4 h-4" />
                        Status: Terputus (Offline)
                      </>
                    ) : (
                      <>
                        <Wifi className="w-4 h-4" />
                        Status: Terhubung (Online)
                      </>
                    )}
                  </button>
                </div>

                {/* Reader Canvas Mockup */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 min-h-[300px] flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <Fingerprint className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Siswa: Siti Rahmawati</div>
                        <div className="text-[11px] font-mono text-slate-400">
                          NISN: 0087654321 • SMP Negeri 1 • Kelas VIII-B
                        </div>
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                        isOfflineMode
                          ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                          : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                      }`}
                    >
                      {isOfflineMode ? 'Cache PWA Aktif' : 'Cloudflare R2 Synced'}
                    </span>
                  </div>

                  {/* Book Page Content Mockup */}
                  <div className="py-6 px-4 bg-slate-900/50 rounded-xl border border-slate-800/60 my-4">
                    <div className="text-xs font-mono text-emerald-400 mb-2 uppercase tracking-wider">
                      Buku Sekolah Elektronik (BSE) • Bab IV: Dinamika Kependudukan Indonesia
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed font-serif">
                      “Indonesia memiliki kekayaan demografis yang sangat strategis. Melalui program literasi digital
                      sekolah, setiap pelajar berhak mengakses sumber ilmu pengetahuan bermutu tanpa terhalang biaya
                      maupun keterbatasan koneksi internet...”
                    </p>
                  </div>

                  {/* Reading Progress Controls */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setReadingPage(Math.max(1, readingPage - 1))}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white"
                      >
                        Hal Sebelumnya
                      </button>
                      <span className="text-xs font-mono text-white">
                        Halaman <strong>{readingPage}</strong> dari 180
                      </span>
                      <button
                        onClick={() => setReadingPage(Math.min(180, readingPage + 1))}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white"
                      >
                        Hal Selanjutnya
                      </button>
                    </div>

                    <div className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Durasi Baca Hari Ini: <strong>48 Menit</strong></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. DS Education NeuralKey Tamper-Proof Stamping */}
            {activeTab === 'dms' && (
              <motion.div
                key="dms"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Lock className="w-5 h-5 text-indigo-400" />
                      Simulasi Segel Kriptografi Dokumen PyTorch NeuralKey
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Menghasilkan kode segel dokumen anti-pemalsuan dan verifikasi QR terenkripsi.
                    </p>
                  </div>

                  <button
                    onClick={runSealSimulation}
                    disabled={isSealing}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-xs font-bold shadow-lg shadow-indigo-500/25 hover:shadow-purple-400/40 disabled:opacity-50 transition-all cursor-pointer"
                  >
                    {isSealing ? (
                      <>
                        <Zap className="w-4 h-4 animate-spin" />
                        Mengenkripsi Segel...
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-current" />
                        Segel Dokumen Resmi
                      </>
                    )}
                  </button>
                </div>

                {/* Document Stamping Area */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 min-h-[300px] flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        <FileCheck2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">
                          SURAT KEPUTUSAN KELULUSAN SISWA & IJAZAH
                        </div>
                        <div className="text-[11px] font-mono text-slate-400">
                          Nomor: 421.3/089/SMP-01/VI/2026 • Arsip Standar Penilaian SNP
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      Format PDF/A-3b
                    </span>
                  </div>

                  {/* Stamp Graphic Motion Visualization */}
                  <div className="py-6 flex flex-col sm:flex-row items-center justify-around gap-6">
                    <div className="space-y-1.5 text-xs text-slate-300">
                      <div>Klasifikasi Arsip: <strong className="text-white">Kesiswaan (04)</strong></div>
                      <div>Tingkat Akses: <strong className="text-emerald-400">Terbuka untuk Umum</strong></div>
                      <div>Penyimpanan: <strong className="text-indigo-300">MinIO Bucket (Encrypted)</strong></div>
                      <div>Integritas: <strong className="text-white">SHA-256 Checksum Valid</strong></div>
                    </div>

                    {/* Stamped Seal Badge */}
                    <div className="relative">
                      {documentSealed ? (
                        <motion.div
                          initial={{ scale: 0, rotate: -20 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                          className="w-36 h-36 rounded-2xl bg-gradient-to-tr from-indigo-950 to-purple-900 border-2 border-indigo-400/80 p-3 flex flex-col items-center justify-center text-center shadow-xl shadow-indigo-500/30"
                        >
                          <QrCode className="w-12 h-12 text-indigo-300 mb-1" />
                          <span className="text-[9px] font-mono text-indigo-200 font-bold uppercase">
                            NeuralKey Verified
                          </span>
                          <span className="text-[8px] font-mono text-indigo-400">
                            Token: {hashToken}
                          </span>
                        </motion.div>
                      ) : (
                        <div className="w-36 h-36 rounded-2xl border-2 border-dashed border-slate-800 flex flex-col items-center justify-center text-slate-600 text-xs text-center p-3">
                          <Lock className="w-6 h-6 mb-1 opacity-50" />
                          <span>Klik tombol untuk membubuhkan segel digital</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer Seal Info */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>Algorithm: PyTorch 2.3 NeuralKeyGen</span>
                    <span className="text-indigo-400">Audit Trail: Logged at Server</span>
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

