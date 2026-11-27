import { useState } from 'react';
import { Expand } from 'lucide-react';
import { MilestoneId, MilestoneItem, PaletteTokens } from '../data/graduationData';
import { ResilientImage } from './ResilientImage';

interface JourneyTimelineProps {
  palette: PaletteTokens;
  milestones: MilestoneItem[];
  onOpenLightbox: (milestone: MilestoneItem) => void;
}

const FILTER_OPTIONS: { id: 'all' | MilestoneId; label: string }[] = [
  { id: 'all', label: 'Semua Babak' },
  { id: 'maba', label: 'Maba' },
  { id: 'magang', label: 'Magang' },
  { id: 'sempro', label: 'Sempro' },
  { id: 'semhas', label: 'Semhas' },
  { id: 'lulus', label: 'Lulus' },
];

export function JourneyTimeline({
  palette,
  milestones,
  onOpenLightbox,
}: JourneyTimelineProps) {
  const [filter, setFilter] = useState<'all' | MilestoneId>('all');

  const visibleMilestones =
    filter === 'all' ? milestones : milestones.filter((item) => item.id === filter);

  return (
    <section id="perjalanan" className="py-16 lg:py-24 border-b border-white/15">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/15">
          <div className="p-5 sm:p-6 lg:p-0 rounded-2xl bg-[#071630]/75 lg:bg-transparent max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-blue-200">
              Kilas Balik Perjuangan
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mt-2 text-white text-balance">
              Lima Babak Menuju Hari Toga
            </h2>
            <p className="mt-3 text-sm sm:text-base text-blue-100/90">
              Setiap tahap punya lelah dan ceritanya sendiri—mulai dari langkah pertama jadi maba
              sampai akhirnya tersenyum lega di hari kelulusan.
            </p>
          </div>

          {/* Interactive Filter Controls on crisp white surface */}
          <div
            role="tablist"
            aria-label="Filter tahap perjuangan"
            className={`flex flex-wrap items-center gap-1 p-1 rounded-xl border shadow-sm ${palette.border} bg-white/95 backdrop-blur-sm self-start`}
          >
            {FILTER_OPTIONS.map((option) => {
              const isActive = filter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(option.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${palette.ringFocus} ${
                    isActive
                      ? `${palette.accentBg} text-white shadow-sm`
                      : `${palette.textSecondary} hover:bg-[#F0F5FC]`
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Timeline Chapters */}
        <div className="mt-10 space-y-10 lg:space-y-14">
          {visibleMilestones.map((item, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <article
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch p-5 sm:p-7 rounded-2xl border shadow-lg shadow-[#071630]/10 ${palette.border} ${palette.cardBg}`}
              >
                {/* Media Frame */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  } flex flex-col`}
                >
                  <button
                    type="button"
                    onClick={() => onOpenLightbox(item)}
                    className={`group relative w-full aspect-[4/3] rounded-xl overflow-hidden border ${palette.border} ${palette.subtleSurface} cursor-pointer ${palette.ringFocus}`}
                  >
                    <ResilientImage
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fallbackTitle={item.title}
                      palette={palette}
                      className={`w-full h-full object-cover ${item.imagePositionClass ?? 'object-center'} transition-transform duration-500 ease-out group-hover:scale-[1.03]`}
                    />
                    <span className="sr-only">Perbesar foto {item.stageLabel}</span>
                  </button>
                </div>

                {/* Narrative & View Action */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  } flex flex-col justify-between py-1`}
                >
                  <div>
                    <div className={`flex items-center gap-2 text-xs font-medium ${palette.textMuted}`}>
                      <span className={`font-sans font-semibold tabular-nums ${palette.accentText}`}>
                        Babak {item.chapter}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{item.stageLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.period}</span>
                    </div>

                    <h3
                      className={`font-display text-2xl sm:text-3xl font-semibold tracking-tight mt-3 ${palette.textPrimary} text-balance`}
                    >
                      {item.title}
                    </h3>

                    <p className={`mt-2 text-sm sm:text-base font-medium ${palette.accentText}`}>
                      {item.subtitle}
                    </p>

                    <p className={`mt-4 text-sm sm:text-base leading-relaxed ${palette.textSecondary}`}>
                      {item.story}
                    </p>

                    <div
                      className={`mt-5 p-4 rounded-xl border ${palette.border} ${palette.subtleSurface}`}
                    >
                      <p className={`text-xs font-semibold ${palette.textPrimary}`}>
                        Catatan Perjuangan
                      </p>
                      <p className={`text-sm mt-1 ${palette.textSecondary}`}>
                        {item.struggleHighlight}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center">
                    <button
                      type="button"
                      onClick={() => onOpenLightbox(item)}
                      className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg border transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${palette.borderStrong} ${palette.textPrimary} hover:bg-[#F0F5FC] ${palette.ringFocus}`}
                    >
                      <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Lihat Penuh</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
