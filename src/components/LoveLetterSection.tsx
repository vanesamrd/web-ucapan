import { PartyPopper } from 'lucide-react';
import { LetterContent, PaletteTokens } from '../data/graduationData';

interface LoveLetterSectionProps {
  palette: PaletteTokens;
  letter: LetterContent;
  onCelebrate: () => void;
}

export function LoveLetterSection({
  palette,
  letter,
  onCelebrate,
}: LoveLetterSectionProps) {
  return (
    <section id="surat" className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div
          className={`p-7 sm:p-12 lg:p-14 rounded-2xl border shadow-xl shadow-[#071630]/15 ${palette.border} ${palette.cardBg}`}
        >
          <div className="pb-6 border-b border-slate-100">
            <p className={`text-xs sm:text-sm font-medium ${palette.accentText}`}>
              {letter.eyebrow}
            </p>
          </div>

          <div className="mt-8">
            <h2
              className={`font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-tight ${palette.textPrimary} text-balance`}
            >
              {letter.headline}
            </h2>

            <blockquote
              className={`mt-7 p-5 sm:p-6 rounded-xl border ${palette.border} ${palette.subtleSurface} font-sans italic font-medium text-base sm:text-lg leading-relaxed ${palette.textPrimary}`}
            >
              {letter.openingQuote}
            </blockquote>

            <div
              className={`mt-8 space-y-5 max-w-[65ch] text-base leading-[1.75] ${palette.textSecondary}`}
            >
              {letter.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div
              className={`mt-10 pt-8 border-t ${palette.border} flex flex-col sm:flex-row sm:items-end justify-between gap-6`}
            >
              <div className="max-w-xl">
                <p className={`text-base sm:text-lg font-semibold leading-relaxed ${palette.textPrimary}`}>
                  {letter.closingWish}
                </p>
                <p className={`text-sm font-medium mt-4 ${palette.accentText}`}>
                  — {letter.signature}
                </p>
              </div>

              <button
                type="button"
                onClick={onCelebrate}
                className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white rounded-xl transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer ${palette.accentBg} ${palette.accentBgHover} ${palette.ringFocus}`}
              >
                <PartyPopper className="w-4 h-4" aria-hidden="true" />
                <span>Kirim Peluk & Selamat</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
