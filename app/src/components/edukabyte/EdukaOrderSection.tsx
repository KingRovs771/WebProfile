'use client';

import { useState, useEffect } from 'react';
import { Mail, ArrowUpRight, Copy, Check, Building2 } from 'lucide-react';

interface EdukaOrderSectionProps {
  selectedProductId?: string | null;
}

const PRODUCT_OPTIONS = [
  {
    id: 'bundle-all',
    name: 'Paket Bundling Ekosistem EdukaByte (3 Produk Lengkap)',
    tag: 'BEST VALUE',
    desc: 'CBT EdukaByte + PustakaKita + DS Education terintegrasi penuh.',
  },
  {
    id: 'cbt-edukabyte',
    name: 'CBT EdukaByte',
    tag: 'SYS.01',
    desc: 'Platform ujian sekolah offline-first (Zero Data Loss) & koreksi LJK AI OMR.',
  },
  {
    id: 'pustaka-kita',
    name: 'PustakaKita',
    tag: 'SYS.02',
    desc: 'Perpustakaan digital siswa login NISN 10-digit + Reader PWA & koleksi BSE.',
  },
  {
    id: 'ds-education',
    name: 'DS Education',
    tag: 'SYS.03',
    desc: 'Sistem pengarsipan dokumen sekolah 8 Standar Akreditasi & segel PyTorch NeuralKey.',
  },
];

const LICENSE_OPTIONS = [
  'Lisensi Tahunan Sekolah (Sesuai Anggaran Dana BOS)',
  'Lisensi Perpetual / Seumur Hidup (Sekali Bayar)',
  'Jadwalkan Demo & Presentasi Online / Kunjungan Sekolah',
];

export default function EdukaOrderSection({ selectedProductId }: EdukaOrderSectionProps) {
  const [chosenProduct, setChosenProduct] = useState<string>('bundle-all');
  const [licenseType, setLicenseType] = useState<string>(LICENSE_OPTIONS[0]);
  const [schoolName, setSchoolName] = useState<string>('');
  const [contactName, setContactName] = useState<string>('');
  const [studentCount, setStudentCount] = useState<string>('600 Siswa');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const recipientEmail = 'rovsgame771@gmail.com';

  useEffect(() => {
    if (selectedProductId) {
      setChosenProduct(selectedProductId);
    }
  }, [selectedProductId]);

  const currentProductObj =
    PRODUCT_OPTIONS.find((p) => p.id === chosenProduct) || PRODUCT_OPTIONS[0];

  const emailSubject = `Pemesanan Produk EdukaByte — ${currentProductObj.name}${
    schoolName ? ` (${schoolName})` : ''
  }`;

  const emailBody = `Halo Tim EdukaByte (${recipientEmail}),

Kami bermaksud mengajukan pemesanan / konsultasi pengadaan produk EdukaByte dengan rincian berikut:

1. PRODUK YANG DIPESAN:
   - Nama Produk: ${currentProductObj.name}
   - Skema Lisensi: ${licenseType}

2. DATA SEKOLAH / INSTANSI:
   - Nama Sekolah: ${schoolName || '[Isi Nama Sekolah]'}
   - Penanggung Jawab / Jabatan: ${contactName || '[Isi Nama & Jabatan]'}
   - Estimasi Jumlah Siswa: ${studentCount || '-'}
   - Nomor WhatsApp / Kontak: ${phone || '[Isi Nomor WhatsApp]'}

3. CATATAN TAMBAHAN:
   ${notes || 'Mohon informasi penawaran resmi (RAB/Quotation) dan jadwal demo sistem.'}

Terima kasih.`;

  const mailtoHref = `mailto:${recipientEmail}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const gmailWebHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    recipientEmail
  )}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const handleCopyOrder = () => {
    navigator.clipboard.writeText(`Kepada: ${recipientEmail}\nSubjek: ${emailSubject}\n\n${emailBody}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="pesan" className="py-24 relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/[0.08]">
          <div>
            <div className="font-mono text-[11px] text-emerald-400 uppercase tracking-wider mb-3">
              [05 / PROCUREMENT &amp; DIRECT LICENSING]
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-zinc-100">
              Pemesanan Produk EdukaByte
            </h2>
            <p className="mt-3 text-zinc-400 max-w-2xl text-sm sm:text-base">
              Pilih modul produk dan lengkapi profil sekolah Anda. Pengajuan pemesanan dan
              permintaan quotation resmi dikirimkan langsung ke{' '}
              <a
                href={`mailto:${recipientEmail}`}
                className="text-zinc-100 font-mono underline decoration-zinc-600 underline-offset-4"
              >
                {recipientEmail}
              </a>
              .
            </p>
          </div>

          <div className="font-mono text-xs text-zinc-400 border border-white/[0.08] bg-zinc-900/50 px-4 py-3">
            EMAIL PENGADAAN RESMI:{' '}
            <strong className="text-zinc-100 select-all">{recipientEmail}</strong>
          </div>
        </div>

        {/* 12-Column Configurator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-x border-b border-white/[0.08] divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08] bg-[#0b0b0e]">
          {/* Left 7 Columns: Interactive Selection & School Info */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-8">
            {/* Step 1: Select Product */}
            <div>
              <label className="block font-mono text-xs text-zinc-400 uppercase mb-3">
                1. PILIH PRODUK EDUKABYTE YANG DIPESAN
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PRODUCT_OPTIONS.map((prod) => {
                  const isSelected = chosenProduct === prod.id;
                  return (
                    <button
                      key={prod.id}
                      type="button"
                      onClick={() => setChosenProduct(prod.id)}
                      className={`p-4 text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-zinc-100 text-zinc-950 border-zinc-100'
                          : 'bg-zinc-950 text-zinc-200 border-white/[0.08] hover:border-white/[0.2]'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1.5">
                        <span
                          className={`font-mono text-[10px] px-1.5 py-0.5 border ${
                            isSelected
                              ? 'border-zinc-400 text-zinc-800'
                              : 'border-white/[0.1] text-zinc-400'
                          }`}
                        >
                          {prod.tag}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-zinc-950" />}
                      </div>
                      <div className="font-semibold text-xs sm:text-sm leading-snug">
                        {prod.name}
                      </div>
                      <p
                        className={`text-[11px] mt-1 leading-relaxed ${
                          isSelected ? 'text-zinc-700' : 'text-zinc-500'
                        }`}
                      >
                        {prod.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select License Scheme */}
            <div>
              <label className="block font-mono text-xs text-zinc-400 uppercase mb-3">
                2. SKEMA LISENSI / PENGADAAN
              </label>
              <div className="space-y-2">
                {LICENSE_OPTIONS.map((scheme) => (
                  <button
                    key={scheme}
                    type="button"
                    onClick={() => setLicenseType(scheme)}
                    className={`w-full px-4 py-3 text-left text-xs font-mono border flex items-center justify-between transition-colors cursor-pointer ${
                      licenseType === scheme
                        ? 'bg-zinc-900 text-zinc-100 border-white/[0.3]'
                        : 'bg-zinc-950 text-zinc-400 border-white/[0.08] hover:text-zinc-200'
                    }`}
                  >
                    <span>{scheme}</span>
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        licenseType === scheme ? 'bg-emerald-400' : 'bg-zinc-800'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: School Details */}
            <div className="space-y-4">
              <label className="block font-mono text-xs text-zinc-400 uppercase">
                3. IDENTITAS SEKOLAH / PEMESAN
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="block font-mono text-[10px] text-zinc-500 mb-1.5">
                    NAMA SEKOLAH / INSTANSI
                  </span>
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    placeholder="Contoh: SMA Negeri 1 Sragen"
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/[0.1] text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400"
                  />
                </div>

                <div>
                  <span className="block font-mono text-[10px] text-zinc-500 mb-1.5">
                    NAMA &amp; JABATAN PENANGGUNG JAWAB
                  </span>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Contoh: Bpk. Hendra (Wakasek Kurikulum)"
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/[0.1] text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400"
                  />
                </div>

                <div>
                  <span className="block font-mono text-[10px] text-zinc-500 mb-1.5">
                    ESTIMASI JUMLAH SISWA
                  </span>
                  <input
                    type="text"
                    value={studentCount}
                    onChange={(e) => setStudentCount(e.target.value)}
                    placeholder="Contoh: 850 Siswa"
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/[0.1] text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400"
                  />
                </div>

                <div>
                  <span className="block font-mono text-[10px] text-zinc-500 mb-1.5">
                    NOMOR WHATSAPP / TELEPON AKTIF
                  </span>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Contoh: 0812-xxxx-xxxx"
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/[0.1] text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400"
                  />
                </div>
              </div>

              <div>
                <span className="block font-mono text-[10px] text-zinc-500 mb-1.5">
                  CATATAN KEBUTUHAN KHUSUS (OPSIONAL)
                </span>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Contoh: Mohon sertakan penawaran instalasi server lokal dan pelatihan operator guru."
                  className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/[0.1] text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400"
                />
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Live Order Summary & Direct Email Dispatch */}
          <div className="lg:col-span-5 p-6 sm:p-10 bg-zinc-950/70 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08] font-mono text-xs">
                <span className="text-zinc-300 flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-zinc-400" />
                  PREVIEW DRAF PEMESANAN
                </span>
                <span className="text-emerald-400">READY TO DISPATCH</span>
              </div>

              <div className="p-4 bg-zinc-950 border border-white/[0.08] font-mono text-[11px] text-zinc-300 space-y-2 mb-6">
                <div className="pb-2 border-b border-white/[0.06]">
                  <span className="text-zinc-500">TUJUAN EMAIL: </span>
                  <strong className="text-zinc-100">{recipientEmail}</strong>
                </div>
                <div className="pb-2 border-b border-white/[0.06]">
                  <span className="text-zinc-500">SUBJEK: </span>
                  <span className="text-zinc-200">{emailSubject}</span>
                </div>
                <pre className="whitespace-pre-wrap text-[11px] text-zinc-400 leading-relaxed font-mono pt-1 max-h-60 overflow-y-auto">
                  {emailBody}
                </pre>
              </div>
            </div>

            <div className="space-y-2.5">
              {/* Primary Action: Mailto */}
              <a
                href={mailtoHref}
                className="w-full py-3.5 px-5 bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Kirim Pemesanan ke {recipientEmail}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Secondary Action: Open in Gmail Web */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={gmailWebHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-zinc-900 hover:bg-zinc-800 border border-white/[0.1] text-zinc-200 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Buka di Gmail Web</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyOrder}
                  className="py-3 px-4 bg-zinc-900 hover:bg-zinc-800 border border-white/[0.1] text-zinc-200 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Salin Format Pesanan</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] font-mono text-zinc-500 text-center pt-2">
                Tim EdukaByte akan merespons pengajuan Anda beserta dokumen RAB &amp; jadwal demo
                ke email/WhatsApp sekolah.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
