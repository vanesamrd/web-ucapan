import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { MilestoneItem, PaletteTokens } from '../data/graduationData';
import { ResilientImage } from './ResilientImage';

interface LightboxModalProps {
  milestone: MilestoneItem | null;
  milestones: MilestoneItem[];
  palette: PaletteTokens;
  onClose: () => void;
  onSelect: (milestone: MilestoneItem) => void;
}

export function LightboxModal({
  milestone,
  milestones,
  palette,
  onClose,
  onSelect,
}: LightboxModalProps) {
  useEffect(() => {
    if (!milestone) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        const idx = milestones.findIndex((m) => m.id === milestone.id);
        onSelect(milestones[(idx + 1) % milestones.length]);
      } else if (event.key === 'ArrowLeft') {
        const idx = milestones.findIndex((m) => m.id === milestone.id);
        onSelect(milestones[(idx - 1 + milestones.length) % milestones.length]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [milestone, milestones, onClose, onSelect]);

  if (!milestone) return null;

  const currentIndex = milestones.findIndex((m) => m.id === milestone.id);
  const handlePrev = () =>
    onSelect(milestones[(currentIndex - 1 + milestones.length) % milestones.length]);
  const handleNext = () =>
    onSelect(milestones[(currentIndex + 1) % milestones.length]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Detail kenangan ${milestone.stageLabel}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-5xl rounded-2xl overflow-hidden bg-white border ${palette.border} grid grid-cols-1 lg:grid-cols-12 max-h-[90vh]`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup galeri"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/65 text-white hover:bg-black/85 flex items-center justify-center transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media View */}
        <div className="lg:col-span-7 bg-neutral-950 flex items-center justify-center min-h-[280px] sm:min-h-[420px] max-h-[55vh] lg:max-h-[88vh]">
          <ResilientImage
            src={milestone.imageSrc}
            alt={milestone.imageAlt}
            fallbackTitle={milestone.title}
            palette={palette}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Story & Stage Navigation */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <p className={`text-xs font-medium ${palette.textMuted}`}>
              <span className={`font-sans font-semibold tabular-nums ${palette.accentText}`}>
                Babak {milestone.chapter}
              </span>
              <span aria-hidden="true"> · </span>
              <span>{milestone.stageLabel}</span>
              <span aria-hidden="true"> · </span>
              <span>{milestone.period}</span>
            </p>

            <h3
              className={`font-display text-2xl sm:text-3xl font-semibold mt-3 ${palette.textPrimary}`}
            >
              {milestone.title}
            </h3>

            <p className={`mt-2 text-sm font-medium ${palette.accentText}`}>
              {milestone.subtitle}
            </p>

            <p className={`mt-4 text-sm sm:text-base leading-relaxed ${palette.textSecondary}`}>
              {milestone.story}
            </p>

            <div className={`mt-5 p-4 rounded-xl border ${palette.border} ${palette.subtleSurface}`}>
              <p className={`text-xs font-semibold ${palette.textPrimary}`}>
                Hal yang Paling Membanggakan
              </p>
              <p className={`text-sm mt-1 ${palette.textSecondary}`}>
                {milestone.struggleHighlight}
              </p>
            </div>
          </div>

          <div className={`mt-8 pt-4 border-t ${palette.border} flex items-center justify-between`}>
            <button
              type="button"
              onClick={handlePrev}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg border ${palette.borderStrong} ${palette.textPrimary} hover:bg-black/[0.03] cursor-pointer ${palette.ringFocus}`}
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              <span>Sebelumnya</span>
            </button>

            <span className={`font-sans text-xs font-medium tabular-nums ${palette.textMuted}`}>
              {currentIndex + 1} / {milestones.length}
            </span>

            <button
              type="button"
              onClick={handleNext}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg border ${palette.borderStrong} ${palette.textPrimary} hover:bg-black/[0.03] cursor-pointer ${palette.ringFocus}`}
            >
              <span>Berikutnya</span>
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
