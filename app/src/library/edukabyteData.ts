export interface EdukaProduct {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  badge: string;
  role: string;
  accentColor: 'blue' | 'emerald' | 'indigo';
  gradient: string;
  borderGlow: string;
  iconBg: string;
  logo: string;
  illustration: string;
  heroStats: { label: string; value: string }[];
  description: string;
  targetAudience: string;
  valueProposition: { problem: string; solution: string }[];
  keyFeatures: {
    title: string;
    description: string;
    icon: string;
  }[];
  techStack: string[];
  architectureOverview: string;
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  deploymentMode: string;
  githubUrl: string;
  livePreviewUrl?: string;
}

export const EDUKABYTE_PRODUCTS: EdukaProduct[] = [
  {
    id: 'cbt-edukabyte',
    name: 'CBT EdukaByte',
    subtitle: 'Platform Computer-Based Test (CBT) Self-Hosted Berdaulat Data',
    category: 'Evaluasi & Ujian Sekolah',
    badge: 'Flagship CBT | Zero Data Loss',
    role: 'Ujian Digital & AI Koreksi LJK',
    accentColor: 'blue',
    gradient: 'from-blue-600 via-sky-500 to-cyan-400',
    borderGlow: 'hover:border-sky-500/50 hover:shadow-sky-500/20',
    iconBg: 'bg-blue-500/10 text-sky-400 border-blue-500/20',
    logo: '/img/edukabyte/Logo.png',
    illustration: '/img/edukabyte/Banner.png',
    heroStats: [
      { label: 'Reliabilitas Sesi', value: '99.98%' },
      { label: 'Koreksi LJK AI', value: '< 0.8 Detik' },
      { label: 'Kedaulatan Data', value: '100% Server Lokal' },
    ],
    description:
      'Sistem ujian berbasis komputer revolusioner yang dirancang khusus untuk kondisi jaringan sekolah di Indonesia. Berjalan mandiri di server lokal sekolah (LAN/Docker), menjamin data nilai tidak pernah bocor ke cloud pihak ketiga, serta dilengkapi AI OMR untuk mengoreksi LJK kertas fisik hanya dalam hitungan detik.',
    targetAudience: 'SMP, SMA, SMK (300–2.000 Siswa), Guru Mata Pelajaran, Teknisi IT Sekolah',
    valueProposition: [
      {
        problem: 'Jawaban ujian siswa sering hilang saat koneksi internet sekolah mengalami gangguan.',
        solution: 'Arsitektur Offline-First dengan sinkronisasi multi-tahap dan local storage caching otomatis.',
      },
      {
        problem: 'Koreksi lembar LJK manual untuk ujian harian memakan waktu berhari-hari bagi guru.',
        solution: 'AI OMR scanner yang mengoreksi foto LJK via smartphone/scanner dalam sekejap mata.',
      },
      {
        problem: 'Kekhawatiran kebocoran data nilai dan identitas siswa pada platform SaaS cloud pihak ketiga.',
        solution: 'Deployment self-hosted via Docker: data tersimpan 100% di server sekolah tanpa pihak luar.',
      },
    ],
    keyFeatures: [
      {
        title: 'Arsitektur Zero Data Loss',
        description: 'Setiap jawaban tersimpan seketika di peramban siswa dan disinkronkan bertahap ke server lokal tanpa jeda.',
        icon: 'ShieldCheck',
      },
      {
        title: 'AI OMR (Optical Mark Recognition)',
        description: 'Koreksi instan lembar jawaban kertas konvensional dengan model machine learning berkecepatan tinggi.',
        icon: 'Scan',
      },
      {
        title: 'Pengawasan Proctoring & Anti-Cheating',
        description: 'Mendeteksi otomatis perpindahan tab, split screen, dan anomali perilaku pengerjaan secara real-time.',
        icon: 'Eye',
      },
      {
        title: 'Bank Soal Multi-Format & LaTeX',
        description: 'Mendukung format AKM, listening audio, video stimulus, dan rendering formula matematika/kimia presisi tinggi.',
        icon: 'BookOpenCheck',
      },
      {
        title: 'Docker 1-Perintah Deployment',
        description: 'Kemudahan instalasi plug-and-play di server fisik maupun PC laboratorium tanpa konfigurasi rumit.',
        icon: 'Terminal',
      },
    ],
    techStack: ['Go (Gin/GORM)', 'Next.js 14', 'Flutter Mobile', 'FastAPI AI OMR', 'PostgreSQL', 'Redis Pub/Sub', 'Docker'],
    architectureOverview:
      'Arsitektur micro-services lokal yang mengisolasi traffic ujian dalam jaringan LAN sekolah dengan Redis WebSocket untuk real-time monitoring dan worker AI Python terpisah untuk koreksi LJK.',
    metrics: [
      { label: 'Uji Beban Simultan', value: '600+ Siswa', detail: 'Stabil dengan latensi < 120ms' },
      { label: 'Akurasi AI OMR', value: '99.4%', detail: 'Toleran terhadap pensil 2B & pulpen' },
      { label: 'Efisiensi Guru', value: '85%', detail: 'Pengurangan waktu rekap nilai semester' },
    ],
    deploymentMode: 'Self-Hosted (Docker Compose / Bare Metal Server / Proxmox VM)',
    githubUrl: 'https://github.com/KingRovs771/EdukaByte',
  },
  {
    id: 'pustaka-kita',
    name: 'PustakaKita',
    subtitle: 'Perpustakaan Digital Siswa & Platform Literasi Sekolah Masa Depan',
    category: 'Literasi & Media Siswa',
    badge: 'EdTech Literacy | Free-Tier Optimized',
    role: 'Perpustakaan Virtual & Reader PWA',
    accentColor: 'emerald',
    gradient: 'from-emerald-600 via-teal-500 to-cyan-400',
    borderGlow: 'hover:border-emerald-500/50 hover:shadow-emerald-500/20',
    iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    logo: '/img/edukabyte/logo-mark.png',
    illustration: '/img/edukabyte/Banner.png',
    heroStats: [
      { label: 'Biaya Infrastruktur', value: '0 Rupiah / Bln' },
      { label: 'Autentikasi Siswa', value: 'NISN 10 Digit' },
      { label: 'Koleksi Kemendikbud', value: '1.200+ Judul BSE' },
    ],
    description:
      'Platform perpustakaan virtual sekolah mandiri (single-tenant) yang memungkinkan siswa membaca koleksi buku sekolah elektronik (BSE) dan karya guru, melacak durasi baca per-NISN, serta mendapatkan rekomendasi buku cerdas AI tanpa memerlukan email pribadi siswa.',
    targetAudience: 'Siswa SD Kelas 4 s/d SMA Kelas 12 (10–18 tahun), Guru Pengelola Perpustakaan, Kepala Sekolah',
    valueProposition: [
      {
        problem: 'Siswa sekolah dasar dan menengah belum memiliki email untuk login ke platform baca konvensional.',
        solution: 'Autentikasi zero-friction: cukup masukkan 10 digit NISN resmi dan PIN dari sekolah.',
      },
      {
        problem: 'Sekolah terbebani biaya langganan bulanan platform perpustakaan digital yang mahal.',
        solution: 'Dirancang berjalan 100% di atas tier gratis (Netlify + Neon Serverless + Cloudflare R2).',
      },
      {
        problem: 'Guru kesulitan mendapatkan bukti data membaca riil siswa untuk akreditasi perpustakaan.',
        solution: 'Dasbor analitik per-NISN memantau menit membaca, halaman yang diselesaikan, dan frekuensi akses.',
      },
    ],
    keyFeatures: [
      {
        title: 'Login NISN + PIN Ramah Anak',
        description: 'Akses instan tanpa email atau verifikasi nomor telepon yang menyulitkan siswa usia dini.',
        icon: 'Fingerprint',
      },
      {
        title: 'Offline-First PWA Reader',
        description: 'Buku yang telah diakses otomatis ter-cache di perangkat sehingga tetap bisa dibaca saat di rumah tanpa kuota.',
        icon: 'WifiOff',
      },
      {
        title: 'Integrasi Ribuan Buku BSE Resmi',
        description: 'Koleksi Kurikulum Merdeka resmi dari Kemendikbudristek siap baca tanpa biaya royalti tambahan.',
        icon: 'Library',
      },
      {
        title: 'Rekomendasi Cerdas AI On-Device',
        description: 'Mesin rekomendasi Wasm tertanam yang membaca histori minat baca siswa tanpa mengirim data privasi ke server luar.',
        icon: 'Sparkles',
      },
      {
        title: 'Laporan Literasi Standar Akreditasi',
        description: 'Ekspor satu klik laporan indeks literasi sekolah untuk keperluan akreditasi perpustakaan nasional.',
        icon: 'BarChart3',
      },
    ],
    techStack: ['Next.js 14 App Router', 'Tailwind CSS', 'Neon PostgreSQL (Serverless)', 'Cloudflare R2', 'PWA Service Worker', 'Wasm AI'],
    architectureOverview:
      'Single-tenant serverless web app di-hosting di Netlify Edge dengan Cloudflare R2 storage pre-signed URL untuk efisiensi bandwidth dan Neon database auto-suspend untuk nol biaya operasional.',
    metrics: [
      { label: 'Kapasitas Siswa', value: '1.000 Siswa/Sekolah', detail: 'Optimal pada Neon Free Tier' },
      { label: 'Ukuran Reader PWA', value: '< 2.4 MB', detail: 'Sangat ringan untuk HP spesifikasi rendah' },
      { label: 'Penghematan Buku', value: '100%', detail: 'Akses digital buku teks kurikulum' },
    ],
    deploymentMode: 'Serverless Edge Deployment (Netlify + Neon + Cloudflare R2)',
    githubUrl: 'https://github.com/KingRovs771/PerpustakaanDigitalSiswa',
  },
  {
    id: 'ds-education',
    name: 'DS Education',
    subtitle: 'Document Management System & Pengarsipan Digital Cerdas Sekolah',
    category: 'Tata Usaha & Arsip Digital',
    badge: 'GovTech / School Archive | PyTorch AI',
    role: 'Pengarsipan Dokumen & Tata Usaha Cerdas',
    accentColor: 'indigo',
    gradient: 'from-indigo-600 via-purple-500 to-pink-500',
    borderGlow: 'hover:border-indigo-500/50 hover:shadow-indigo-500/20',
    iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    logo: '/img/edukabyte/logo-ds.png',
    illustration: '/img/edukabyte/dms-illustration.png',
    heroStats: [
      { label: 'Standar Akreditasi', value: '8 Standar SNP' },
      { label: 'Keamanan Dokumen', value: 'Enkripsi AES-256' },
      { label: 'Klasifikasi Surat', value: 'PyTorch NeuralKey' },
    ],
    description:
      'Pusat pengarsipan dan tata kelola dokumen sekolah digital terpadu yang memodernisasi administrasi tata usaha. Dilengkapi NeuralKeyGen berbasis PyTorch untuk klasifikasi arsip cerdas, verifikasi keaslian ijazah/surat digital, dan pemenuhan 8 Standar Nasional Akreditasi Sekolah.',
    targetAudience: 'Staf Tata Usaha (TU), Kepala Sekolah, Tim Pengembang Kurikulum, Tim Akreditasi Sekolah',
    valueProposition: [
      {
        problem: 'Berkas akreditasi sekolah sering hilang, berserakan di lemari fisik, dan sulit dicari saat visitasi asesor.',
        solution: 'Struktur repositori 8 Standar Nasional Pendidikan otomatis dengan pencarian semantik instan.',
      },
      {
        problem: 'Risiko pemalsuan ijazah, surat keputusan (SK), dan surat keterangan sekolah oleh oknum.',
        solution: 'Sistem segel kriptografi unik NeuralKeyGen dengan verifikasi QR-Code tamper-proof berintegritas tinggi.',
      },
      {
        problem: 'Disposisi surat dinas fisik antar ruang kepala sekolah dan guru memakan waktu dan berpeluang terselip.',
        solution: 'Workflow disposisi digital paperless real-time lengkap dengan riwayat log audit tak terbantahkan.',
      },
    ],
    keyFeatures: [
      {
        title: 'Struktur Akreditasi 8 Standar SNP',
        description: 'Folder template terstruktur yang siap diisi dokumen bukti fisik standar isi, proses, sarpras, hingga pembiayaan.',
        icon: 'FolderKanban',
      },
      {
        title: 'Klasifikasi Cerdas NeuralKeyGen',
        description: 'Model machine learning PyTorch menganalisis dokumen masuk dan memberikan klasifikasi kode surat otomatis.',
        icon: 'Cpu',
      },
      {
        title: 'Segel Kriptografi & QR Tamper-Proof',
        description: 'Setiap dokumen resmi yang terbit memiliki kode hash unik yang dapat diverifikasi keasliannya dari mana saja.',
        icon: 'QrCode',
      },
      {
        title: 'Object Storage MinIO Terenkripsi',
        description: 'Penyimpanan mandiri kompatibel S3 dengan enkripsi AES-256 dan perlindungan dari ransomware.',
        icon: 'HardDrive',
      },
      {
        title: 'Disposisi Digital & Audit Trail',
        description: 'Pelacakan perjalanan surat dari Kepala Sekolah ke guru penerima tugas dengan riwayat timestamp menit per menit.',
        icon: 'SendHorizontal',
      },
    ],
    techStack: ['FastAPI (Python 3.11)', 'Next.js 14 App Router', 'PyTorch 2.3 NeuralKeyGen', 'MinIO Object Storage', 'PostgreSQL 16', 'Redis', 'Nginx'],
    architectureOverview:
      'Arsitektur enterprise on-premise dengan FastAPI asynchronous backend, MinIO S3 bucket internal terisolasi, dan inference engine PyTorch lokal untuk proteksi penuh dokumen berharga sekolah.',
    metrics: [
      { label: 'Waktu Temu Dokumen', value: '< 2 Detik', detail: 'Pencarian metadata terindeks cepat' },
      { label: 'Integritas Berkas', value: '100% SHA-256', detail: 'Segel digital anti-manipulasi' },
      { label: 'Efisiensi Kertas TU', value: '90%', detail: 'Transisi penuh ke administrasi paperless' },
    ],
    deploymentMode: 'On-Premise Server / Virtual Machine (Dockerized Architecture)',
    githubUrl: 'https://github.com/KingRovs771/DMSEducation',
  },
];

export const EDUKABYTE_ECOSYSTEM_STATS = [
  { label: 'Sekolah Didukung', value: 'SMP • SMA • SMK', icon: 'GraduationCap' },
  { label: 'Arsitektur Kedaulatan', value: '100% Self-Hosted & Free-Tier', icon: 'Server' },
  { label: 'Uji Beban Terverifikasi', value: '600+ Siswa Bersamaan', icon: 'Zap' },
  { label: 'Kepatuhan Regulasi', value: 'UU PDP & Standar Kemendikbud', icon: 'ShieldCheck' },
];

export const SCHOOL_SAVINGS_CALCULATOR = {
  paperCostPerSheet: 350, // Rp 350 per lembar cetak LJK & soal
  examPerYear: 4, // PTS 1, PAS 1, PTS 2, PAT 2
  sheetsPerStudentPerExam: 15, // 15 mapel ujian
  teacherGradingHoursPerSemester: 80, // jam koreksi manual
  tuPaperPerStudentPerYear: 25, // lembar cetak raport, surat, dsb
};
