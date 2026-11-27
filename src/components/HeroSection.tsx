import { ArrowDown, PartyPopper } from 'lucide-react';
import { MilestoneItem, PaletteTokens } from '../data/graduationData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  palette: PaletteTokens;
  heroMilestone: MilestoneItem;
  onCelebrate: () => void;
  onOpenLightbox: (milestone: MilestoneItem) => void;
}

export function HeroSection({
  palette,
  heroMilestone,
  onCelebrate,
  onOpenLightbox,
}: HeroSectionProps) {
  return (
    <section id="ucapan" className="border-b border-white/15">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 pb-12 lg:pt-16 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Positioned over Deep Navy side of horizontal gradient */}
          <div className="lg:col-span-7 flex flex-col justify-center p-6 sm:p-8 lg:p-0 rounded-2xl bg-[#071630]/75 lg:bg-transparent">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-semibold tracking-tight leading-[1.08] text-white text-balance">
              Selamat Wisuda, Aicc!!!
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed max-w-xl text-blue-100/95">
              Dari hari pertama jadi maba, sibuk magang, begadang mengejar sempro dan semhas,
              sampai akhirnya berdiri memakai toga. Semua lelah dan perjuanganmu akhirnya terbayar,
              Faiz.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#perjalanan"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#071630] bg-white hover:bg-blue-50 rounded-xl transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E264E]"
              >
                <span>Lihat Perjalanan Aic</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={onCelebrate}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white rounded-xl border border-white/35 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-white"
              >
                <PartyPopper className="w-4 h-4 text-blue-200" aria-hidden="true" />
                <span>Rayakan Kelulusan</span>
              </button>
            </div>
          </div>

          {/* Right Column: Full-Height Graduation Portrait Frame */}
          <div className="lg:col-span-5 flex">
            <button
              type="button"
              onClick={() => onOpenLightbox(heroMilestone)}
              className="group relative w-full min-h-[380px] lg:min-h-[460px] lg:h-full rounded-2xl overflow-hidden border border-white/60 bg-white text-left cursor-pointer shadow-xl shadow-[#071630]/20 focus-visible:ring-2 focus-visible:ring-[#14376E]"
            >
              <ResilientImage
                src={heroMilestone.imageSrc}
                alt={heroMilestone.imageAlt}
                fallbackTitle="Kelulusan Faiz (Aic)"
                palette={palette}
                className={`w-full h-full object-cover ${heroMilestone.imagePositionClass ?? 'object-center'} transition-transform duration-500 ease-out group-hover:scale-[1.03]`}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-16">
                <p className="text-xs text-blue-100/90">
                  {heroMilestone.stageLabel} · {heroMilestone.period}
                </p>
                <p className="font-display text-lg sm:text-xl font-medium text-white mt-1">
                  Hari Kelulusan Faiz
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Full-Width 4-Column Graduation Biodata Strip */}
        <div
          className={`mt-12 lg:mt-14 grid grid-cols-2 lg:grid-cols-4 border rounded-2xl overflow-hidden shadow-md shadow-[#071630]/10 ${palette.border} ${palette.cardBg}`}
        >
          <div className={`p-5 sm:p-6 border-b lg:border-b-0 border-r ${palette.border}`}>
            <p className={`font-display text-2xl font-semibold tracking-tight ${palette.textPrimary}`}>
              Faiz
            </p>
            <p className={`text-xs sm:text-sm mt-1 ${palette.textMuted}`}>
              Lulusan Membanggakan PJ
            </p>
          </div>
          <div className={`p-5 sm:p-6 border-b lg:border-b-0 lg:border-r ${palette.border}`}>
            <p className={`font-display text-2xl font-semibold tracking-tight ${palette.textPrimary}`}>
              Resmi Lulus
            </p>
            <p className={`text-xs sm:text-sm mt-1 ${palette.textMuted}`}>
              Status
            </p>
          </div>
          <div className={`p-5 sm:p-6 border-r ${palette.border}`}>
            <p className={`font-display text-2xl font-semibold tracking-tight ${palette.textPrimary}`}>
              A.Md.T.
            </p>
            <p className={`text-xs sm:text-sm mt-1 ${palette.textMuted}`}>
              Gelar
            </p>
          </div>
          <div className="p-5 sm:p-6">
            <p className={`font-display text-2xl font-semibold tracking-tight tabular-nums ${palette.textPrimary}`}>
              2023–2026
            </p>
            <p className={`text-xs sm:text-sm mt-1 ${palette.textMuted}`}>
              Tahun
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
