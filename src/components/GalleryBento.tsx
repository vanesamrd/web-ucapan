import { MilestoneItem, PaletteTokens } from '../data/graduationData';
import { ResilientImage } from './ResilientImage';

interface GalleryBentoProps {
  palette: PaletteTokens;
  milestones: MilestoneItem[];
  onOpenLightbox: (milestone: MilestoneItem) => void;
}

export function GalleryBento({ palette, milestones, onOpenLightbox }: GalleryBentoProps) {
  const lead = milestones.find((m) => m.id === 'lulus') ?? milestones[0];
  const others = milestones.filter((m) => m.id !== lead.id);

  return (
    <section id="galeri" className="py-16 lg:py-24 border-b border-white/15">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="p-5 sm:p-6 lg:p-0 rounded-2xl bg-[#071630]/75 lg:bg-transparent max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-blue-200">
              Galeri Kenangan
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mt-2 text-white text-balance">
              Satu Bingkai Lengkap Perjalanan Aic
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-medium text-[#0A1931] bg-white/90 px-3.5 py-2 rounded-lg border border-white/80 self-start sm:self-auto">
            Klik foto mana saja untuk melihat kisah lengkapnya
          </p>
        </div>

        {/* Media-First Bento Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[240px]">
          {/* Lead Highlight: Lulus / Wisuda */}
          <button
            type="button"
            onClick={() => onOpenLightbox(lead)}
            className="group relative md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden border border-white/60 bg-white shadow-lg shadow-[#071630]/15 text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-white"
          >
            <ResilientImage
              src={lead.imageSrc}
              alt={lead.imageAlt}
              fallbackTitle={lead.title}
              palette={palette}
              className={`w-full h-full object-cover ${lead.imagePositionClass ?? 'object-center'} transition-transform duration-500 ease-out group-hover:scale-[1.03]`}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-6 pt-16">
              <p className="text-xs text-white/80">
                Babak {lead.chapter} · {lead.stageLabel} · {lead.period}
              </p>
              <p className="font-display text-xl sm:text-2xl font-medium text-white mt-1">
                {lead.title}
              </p>
            </div>
          </button>

          {/* Supporting 4 Stages */}
          {others.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onOpenLightbox(item)}
              className="group relative col-span-1 row-span-1 rounded-2xl overflow-hidden border border-white/60 bg-white shadow-lg shadow-[#071630]/15 text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-white"
            >
              <ResilientImage
                src={item.imageSrc}
                alt={item.imageAlt}
                fallbackTitle={item.title}
                palette={palette}
                className={`w-full h-full object-cover ${item.imagePositionClass ?? 'object-center'} transition-transform duration-500 ease-out group-hover:scale-[1.04]`}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-12">
                <p className="text-[11px] text-white/80">
                  Babak {item.chapter} · {item.stageLabel}
                </p>
                <p className="font-display text-base font-medium text-white mt-0.5 line-clamp-1">
                  {item.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
