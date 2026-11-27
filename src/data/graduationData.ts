export type MilestoneId = 'maba' | 'magang' | 'sempro' | 'semhas' | 'lulus';

export interface MilestoneItem {
  id: MilestoneId;
  chapter: string;
  stageLabel: string;
  period: string;
  title: string;
  subtitle: string;
  story: string;
  struggleHighlight: string;
  imageSrc: string;
  imageAlt: string;
  imagePositionClass?: string;
  caption: string;
}

export interface LetterContent {
  eyebrow: string;
  headline: string;
  openingQuote: string;
  paragraphs: string[];
  closingWish: string;
  signature: string;
}

export interface PaletteTokens {
  pageGradient: string;
  headerGradient: string;
  cardBg: string;
  subtleSurface: string;
  border: string;
  borderStrong: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accentBg: string;
  accentBgHover: string;
  accentText: string;
  accentSoftBg: string;
  ringFocus: string;
  confettiColors: string[];
}

export const BLUE_WHITE_PALETTE: PaletteTokens = {
  pageGradient:
    'bg-[linear-gradient(90deg,#071630_0%,#0E264E_38%,#1D417A_58%,#8CB0E3_82%,#FFFFFF_100%)]',
  headerGradient:
    'bg-[linear-gradient(90deg,rgba(7,22,48,0.94)_0%,rgba(14,38,78,0.94)_42%,rgba(29,65,122,0.92)_62%,rgba(219,232,251,0.95)_86%,rgba(255,255,255,0.97)_100%)]',
  cardBg: 'bg-white/95 backdrop-blur-sm',
  subtleSurface: 'bg-[#F0F5FC]',
  border: 'border-[#D5E1F3]',
  borderStrong: 'border-[#B0C5E8]',
  textPrimary: 'text-[#0A1931]',
  textSecondary: 'text-[#2B4063]',
  textMuted: 'text-[#52688C]',
  accentBg: 'bg-[#0E264E]',
  accentBgHover: 'hover:bg-[#071630]',
  accentText: 'text-[#14376E]',
  accentSoftBg: 'bg-[#E8F0FC]',
  ringFocus: 'focus-visible:ring-2 focus-visible:ring-[#163870] focus-visible:ring-offset-2',
  confettiColors: ['#071630', '#14376E', '#2563EB', '#93C5FD', '#FFFFFF'],
};

export const MILESTONES: MilestoneItem[] = [
  {
    id: 'maba',
    chapter: '01',
    stageLabel: 'Maba',
    period: 'Awal Perjalanan',
    title: 'Langkah Pertama di Gerbang Kampus',
    subtitle: 'Dari bingung mencari ruang kelas sampai mulai menemukan ritme.',
    story:
      'Semua berawal dari hari-hari pertama sebagai mahasiswa baru. Masih beradaptasi dengan jadwal kuliah yang padat, tugas awal yang terasa asing, dan lingkungan baru yang serba cepat. Dari sinilah ketekunan Aic pelan-pelan ditempa.',
    struggleHighlight: 'Adaptasi lingkungan baru, kompen segunung.',
    imageSrc: '/assets/aistudio/image_fcd946f0.png',
    imageAlt: 'Momen hari pertama mahasiswa baru di aula kampus bersama teman seangkatan',
    imagePositionClass: 'object-[50%_72%]',
    caption: 'Babak 01 · Awal melangkah sebagai Maba',
  },
  {
    id: 'magang',
    chapter: '02',
    stageLabel: 'Magang',
    period: 'Pengalaman Lapangan',
    title: 'Belajar Keras di Dunia Kerja Nyata',
    subtitle: 'Menyeimbangkan tanggung jawab absensi, laporan, dan istirahat.',
    story:
      'Fase magang bukan hal yang ringan. Ada hari-hari ketika tenaga sudah habis di kantor, tapi malamnya masih harus merapikan catatan dan laporan. Meski capek, Aic tetap menjalaninya dengan tanggung jawab penuh.',
    struggleHighlight: 'Pulang sore, hujan sampai maghrib, lanjut main.',
    imageSrc: '/assets/aistudio/image_20281a1d.png',
    imageAlt: 'Momen kebersamaan Aic bersama tim dan pembimbing selama masa magang',
    caption: 'Babak 02 · Menempa diri lewat masa Magang',
  },
  {
    id: 'sempro',
    chapter: '03',
    stageLabel: 'Sempro',
    period: 'Seminar Proposal',
    title: 'Hasil Malam-Malam Panjang Bersama BAB I-III',
    subtitle: 'Mencari judul, membaca puluhan jurnal, dan menaklukkan rasa gugup.',
    story:
      'Menjelang seminar proposal, meja belajar jadi saksi paling jujur. Revisi berulang, coretan dosen, hingga keraguan kecil di tengah malam. Tapi saat waktunya tiba, Aic berdiri tenang dan berhasil melewatinya.',
    struggleHighlight: 'Ngerjakan ngebut h-2 minggu anjay gacor.',
    imageSrc: '/assets/aistudio/image_57ffdf68.png',
    imageAlt: 'Momen bahagia berdua setelah Aic menyelesaikan seminar proposal dengan berkas dan hadiah',
    imagePositionClass: 'object-[50%_72%]',
    caption: 'Babak 03 · Perjuangan menembus Sempro',
  },
  {
    id: 'semhas',
    chapter: '04',
    stageLabel: 'Semhas',
    period: 'Seminar Hasil',
    title: 'Menjahit Data Menjadi Pembuktian',
    subtitle: 'Tinggal selangkah lagi, meski bagian paling melelahkan justru di sini.',
    story:
      'Di tahap semhas, rasa lelah sering menumpuk jadi satu. Mengolah data, memeriksa setiap detail pembahasan, dan terus memperbaiki naskah tanpa henti. Terima kasih sudah tidak menyerah di saat-saat paling berat.',
    struggleHighlight: 'Dihajar revisi sampe mampus, nangis dan gelut dikit ga ngaruh.',
    imageSrc: '/assets/aistudio/image_a2754801.png',
    imageAlt: 'Aic tersenyum bahagia memegang buket bunga biru di halaman kampus setelah seminar hasil',
    imagePositionClass: 'object-[50%_70%]',
    caption: 'Babak 04 · Selangkah lagi menuju garis finis di Semhas',
  },
  {
    id: 'lulus',
    chapter: '05',
    stageLabel: 'Lulus',
    period: 'Menjelang Hari Wisuda',
    title: 'Yudisium, Senyum Lega, dan Babak Baru',
    subtitle: 'Semua doa, sabar, dan kerja kerasmu akhirnya berbuah manis.',
    story:
      'Hari ini bukan sekadar menanti seremoni wisuda, melainkan bukti bahwa Faiz sudah menuntaskan setiap prosesnya dengan terhormat. Tinggal melangkah dengan kepala tegak menuju hari toga yang sudah di depan mata.',
    struggleHighlight: 'Bocil lulus, senyum bahagia, slb menyambutnya.',
    imageSrc: '/assets/aistudio/image_e557d7fd.png',
    imageAlt: 'Momen yudisium Aic bersama teman-teman seperjuangan mengenakan jas almamater biru',
    imagePositionClass: 'object-[50%_72%]',
    caption: 'Babak 05 · Resmi lulus dan bersiap menyambut hari wisuda',
  },
];

export const GRADUATION_LETTER: LetterContent = {
  eyebrow: 'Surat Kecil di Hari Wisuda',
  headline: 'Untuk Aic,',
  openingQuote:
    '“Barangkali hari ini bukan tentang sebuah akhir, melainkan tentang segala keberanian yang telah membawamu sampai di sini.”',
  paragraphs: [
    'Selamat wisuda, Aic, sayang.',
    'Akhirnya, satu per satu perjalanan panjang itu berhasil kau lewati. Segala lelah, malam-malam panjang, keraguan, dan hal-hal yang mungkin tidak pernah kau ceritakan, kini menjadi bagian dari cerita yang patut kau banggakan.',
    'Aku tahu, setelah ini akan ada banyak hal baru yang menantimu. Dunia yang lebih luas, tanggung jawab yang lebih besar, dan mimpi-mimpi lain yang masih harus kau perjuangkan. Aku harap hidup selalu punya cara baik untuk memperlakukanmu. Semoga langkahmu dimudahkan, rezekimu dilapangkan, dan segala yang kau usahakan menemukan hasil terbaiknya.',
    'Jangan lupa bahagia dalam setiap prosesnya, ya. Tidak perlu terburu-buru untuk menjadi hebat. Aku sudah bangga melihatmu sampai sejauh ini, dan akan selalu punya alasan untuk bangga pada setiap langkahmu berikutnya.',
  ],
  closingWish:
    'Selamat melangkah menuju babak kehidupan yang baru, diploma kesayanganku. Semoga ini menjadi awal dari begitu banyak hal baik yang menantimu. Aku akan selalu bangga kepadamu.',
  signature: 'Dengan penuh cinta.',
};
