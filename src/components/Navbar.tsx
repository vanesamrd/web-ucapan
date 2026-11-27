import { PaletteTokens } from '../data/graduationData';

interface NavbarProps {
  palette: PaletteTokens;
  onOpenLetter: () => void;
}

export function Navbar({ palette, onOpenLetter }: NavbarProps) {
  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md ${palette.headerGradient} border-b border-white/15`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        <a
          href="#ucapan"
          className="font-display text-xl font-semibold tracking-tight text-white whitespace-nowrap shrink-0"
        >
          Untuk Faiz
        </a>

        <nav
          aria-label="Navigasi utama"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-blue-100/90"
        >
          <a
            href="#ucapan"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-white/80 rounded-sm"
          >
            Ucapan
          </a>
          <a
            href="#perjalanan"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-white/80 rounded-sm"
          >
            Perjalanan
          </a>
          <a
            href="#galeri"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-white/80 rounded-sm"
          >
            Galeri
          </a>
          <a
            href="#surat"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-white/80 rounded-sm"
          >
            Pesan
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenLetter}
            className={`px-4 py-2 text-xs sm:text-sm font-medium text-white rounded-lg transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer shadow-sm ${palette.accentBg} ${palette.accentBgHover} focus-visible:ring-2 focus-visible:ring-[#14376E] focus-visible:ring-offset-2`}
          >
            Buka Surat
          </button>
        </div>
      </div>
    </header>
  );
}
