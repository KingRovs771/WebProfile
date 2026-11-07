'use client';

import { useState } from 'react';
import { SCHOOL_SAVINGS_CALCULATOR } from '../../library/edukabyteData';

export default function SchoolImpactCalculator() {
  const [studentCount, setStudentCount] = useState<number>(650);

  const totalSheetsSavedPerYear =
    studentCount *
    SCHOOL_SAVINGS_CALCULATOR.examPerYear *
    SCHOOL_SAVINGS_CALCULATOR.sheetsPerStudentPerExam;

  const totalPaperCostSaved =
    totalSheetsSavedPerYear * SCHOOL_SAVINGS_CALCULATOR.paperCostPerSheet;

  const teacherHoursSavedPerYear = Math.round((studentCount / 40) * 12 * 2);
  const treesSaved = (totalSheetsSavedPerYear / 8333).toFixed(1);

  const formatRupiah = (val: number) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <section id="kalkulator-hemat" className="py-24 relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider mb-3">
              [03 / BUDGET &amp; TIME EFFICIENCY SIMULATOR]
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-zinc-100">
              Simulasi Efisiensi Anggaran Dana BOS
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md">
            Sesuaikan kapasitas siswa untuk menghitung penghematan cetak soal, LJK, dan jam koreksi
            manual guru per tahun ajaran.
          </p>
        </div>

        <div className="border-x border-b border-white/[0.08] bg-[#0b0b0e]">
          {/* Slider Control Row */}
          <div className="p-6 sm:p-10 border-b border-white/[0.08]">
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
              <span className="font-mono text-xs text-zinc-400 uppercase">
                KAPASITAS SISWA AKTIF SEKOLAH:
              </span>
              <span className="font-mono text-2xl sm:text-3xl font-semibold text-zinc-100">
                {studentCount.toLocaleString('id-ID')} SISWA
              </span>
            </div>

            <input
              type="range"
              min={150}
              max={2500}
              step={50}
              value={studentCount}
              onChange={(e) => setStudentCount(Number(e.target.value))}
              className="w-full h-2 bg-zinc-900 appearance-none cursor-pointer accent-zinc-100"
            />

            <div className="flex justify-between font-mono text-[10px] text-zinc-500 mt-2.5">
              <span>150 SISWA</span>
              <span>1.000 SISWA</span>
              <span>2.500 SISWA</span>
            </div>
          </div>

          {/* 3-Column Output Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            <div className="p-7 sm:p-9">
              <div className="font-mono text-[10px] text-zinc-500 uppercase mb-2">
                [ESTIMASI PENGHEMATAN ANGGARAN CETAK]
              </div>
              <div className="font-mono text-2xl sm:text-3xl font-semibold text-zinc-100">
                {formatRupiah(totalPaperCostSaved)}
              </div>
              <p className="text-xs text-zinc-400 mt-2">
                Penghematan tahunan dari eliminasi cetak naskah ujian dan lembar LJK fisik (4x ujian
                utama/tahun).
              </p>
            </div>

            <div className="p-7 sm:p-9">
              <div className="font-mono text-[10px] text-zinc-500 uppercase mb-2">
                [EFISIENSI WAKTU KOREKSI GURU]
              </div>
              <div className="font-mono text-2xl sm:text-3xl font-semibold text-zinc-100">
                ~{teacherHoursSavedPerYear} Jam / Thn
              </div>
              <p className="text-xs text-zinc-400 mt-2">
                Waktu kerja produktif guru yang dihemat melalui koreksi otomatis CBT &amp; pemindaian
                AI OMR.
              </p>
            </div>

            <div className="p-7 sm:p-9">
              <div className="font-mono text-[10px] text-zinc-500 uppercase mb-2">
                [REDUKSI KERTAS &amp; EKOLOGI]
              </div>
              <div className="font-mono text-2xl sm:text-3xl font-semibold text-zinc-100">
                {totalSheetsSavedPerYear.toLocaleString('id-ID')} Lembar
              </div>
              <p className="text-xs text-zinc-400 mt-2">
                Setara penyelamatan ~{treesSaved} pohon per tahun melalui digitalisasi ujian dan
                arsip tata usaha.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
