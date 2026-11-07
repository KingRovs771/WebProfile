'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Trees, Clock, Coins, Sparkles, School } from 'lucide-react';
import { SCHOOL_SAVINGS_CALCULATOR } from '../../library/edukabyteData';

export default function SchoolImpactCalculator() {
  const [studentCount, setStudentCount] = useState<number>(650);

  // Formulas
  const totalSheetsSavedPerYear =
    studentCount *
    SCHOOL_SAVINGS_CALCULATOR.examPerYear *
    SCHOOL_SAVINGS_CALCULATOR.sheetsPerStudentPerExam;

  const totalPaperCostSaved =
    totalSheetsSavedPerYear * SCHOOL_SAVINGS_CALCULATOR.paperCostPerSheet;

  const teacherHoursSavedPerYear = Math.round((studentCount / 40) * 12 * 2); // estimasi jam koreksi

  const treesSaved = (totalSheetsSavedPerYear / 8333).toFixed(1); // 1 pohon ~ 8.333 lembar A4

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="kalkulator-hemat" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            ROI & Dampak Penghematan Sekolah
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kalkulator Efisiensi Dana BOS & Waktu Guru
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Geser jumlah siswa untuk melihat proyeksi efisiensi nyata penerapan ekosistem EdukaByte di sekolah Anda.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-900/85 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          {/* Slider Controls */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <School className="w-4 h-4 text-sky-400" />
                Jumlah Siswa Aktif Sekolah:
              </span>
              <span className="text-2xl font-black text-sky-400 bg-sky-500/10 px-4 py-1 rounded-xl border border-sky-500/30">
                {studentCount.toLocaleString('id-ID')} Siswa
              </span>
            </div>

            <input
              type="range"
              min={150}
              max={2500}
              step={50}
              value={studentCount}
              onChange={(e) => setStudentCount(Number(e.target.value))}
              className="w-full h-3 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />

            <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
              <span>150 Siswa (Sekolah Kecil)</span>
              <span>1.000 Siswa (Sekolah Sedang)</span>
              <span>2.500 Siswa (Sekolah Besar/SMK)</span>
            </div>
          </div>

          {/* Impact Results Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* 1. Penghematan Dana BOS */}
            <motion.div
              key={`money-${studentCount}`}
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-slate-950 border border-emerald-500/30 text-center flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center mb-3">
                  <Coins className="w-6 h-6" />
                </div>
                <div className="text-[11px] font-mono text-emerald-300 uppercase tracking-wider">
                  Penghematan Dana BOS
                </div>
                <div className="text-xl sm:text-2xl font-black text-white mt-2">
                  {formatRupiah(totalPaperCostSaved)}
                </div>
              </div>
              <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-800">
                Dari eliminasi fotokopi soal & lembar LJK fisik per tahun
              </p>
            </motion.div>

            {/* 2. Jam Kerja Guru */}
            <motion.div
              key={`time-${studentCount}`}
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 to-slate-950 border border-blue-500/30 text-center flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-sky-400 mx-auto flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="text-[11px] font-mono text-sky-300 uppercase tracking-wider">
                  Waktu Guru Dihemat
                </div>
                <div className="text-xl sm:text-2xl font-black text-white mt-2">
                  ~{teacherHoursSavedPerYear} Jam / Tahun
                </div>
              </div>
              <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-800">
                Otomatisasi koreksi instan nilai ujian & analitik AKM
              </p>
            </motion.div>

            {/* 3. Pohon Diselamatkan */}
            <motion.div
              key={`trees-${studentCount}`}
              initial={{ scale: 0.95, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-teal-950/40 to-slate-950 border border-teal-500/30 text-center flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 mx-auto flex items-center justify-center mb-3">
                  <Trees className="w-6 h-6" />
                </div>
                <div className="text-[11px] font-mono text-teal-300 uppercase tracking-wider">
                  Dampak Lingkungan Hijau
                </div>
                <div className="text-xl sm:text-2xl font-black text-white mt-2">
                  ~{treesSaved} Pohon / Tahun
                </div>
              </div>
              <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-800">
                Setara {totalSheetsSavedPerYear.toLocaleString('id-ID')} lembar kertas dihemat
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
