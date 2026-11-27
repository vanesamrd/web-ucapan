import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  BLUE_WHITE_PALETTE,
  GRADUATION_LETTER,
  MILESTONES,
  MilestoneId,
} from './data/graduationData';
import { CelebrationOverlay } from './components/CelebrationOverlay';
import { GalleryBento } from './components/GalleryBento';
import { HeroSection } from './components/HeroSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { LightboxModal } from './components/LightboxModal';
import { LoveLetterSection } from './components/LoveLetterSection';
import { Navbar } from './components/Navbar';

export default function App() {
  const [lightboxId, setLightboxId] = useState<MilestoneId | null>(null);
  const [burstKey, setBurstKey] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const palette = BLUE_WHITE_PALETTE;

  useEffect(() => {
    if (!toastMessage) return;
    const timer = window.setTimeout(() => setToastMessage(null), 3200);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  const heroMilestone = useMemo(
    () => MILESTONES.find((m) => m.id === 'lulus') ?? MILESTONES[MILESTONES.length - 1],
    []
  );

  const activeLightboxMilestone = useMemo(
    () => MILESTONES.find((m) => m.id === lightboxId) ?? null,
    [lightboxId]
  );

  const handleCelebrate = useCallback(() => {
    setBurstKey((prev) => prev + 1);
    setToastMessage('Selamat Wisuda, Aicc!!!');
  }, []);

  const handleOpenLetter = useCallback(() => {
    const el = document.getElementById('surat');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className={`min-h-screen ${palette.pageGradient} ${palette.textPrimary}`}>
      <CelebrationOverlay burstKey={burstKey} colors={palette.confettiColors} />

      <Navbar palette={palette} onOpenLetter={handleOpenLetter} />

      <main>
        <HeroSection
          palette={palette}
          heroMilestone={heroMilestone}
          onCelebrate={handleCelebrate}
          onOpenLightbox={(item) => setLightboxId(item.id)}
        />

        <JourneyTimeline
          palette={palette}
          milestones={MILESTONES}
          onOpenLightbox={(item) => setLightboxId(item.id)}
        />

        <GalleryBento
          palette={palette}
          milestones={MILESTONES}
          onOpenLightbox={(item) => setLightboxId(item.id)}
        />

        <LoveLetterSection
          palette={palette}
          letter={GRADUATION_LETTER}
          onCelebrate={handleCelebrate}
        />
      </main>

      <footer className="py-10 border-t border-white/15">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <p className="text-blue-100/90 px-3 py-1 rounded-lg bg-[#071630]/65 sm:bg-transparent sm:p-0">
            Dibuat khusus untuk merayakan kelulusan{' '}
            <span className="font-medium text-white">Aic</span>, with love ❤️
          </p>
          <a
            href="#ucapan"
            className="font-medium text-[#0A1931] bg-white/90 px-3.5 py-1.5 rounded-lg hover:bg-white transition-colors focus-visible:ring-2 focus-visible:ring-[#14376E]"
          >
            Kembali ke atas
          </a>
        </div>
      </footer>

      <LightboxModal
        milestone={activeLightboxMilestone}
        milestones={MILESTONES}
        palette={palette}
        onClose={() => setLightboxId(null)}
        onSelect={(item) => setLightboxId(item.id)}
      />

      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed bottom-5 right-5 z-50 px-4 py-3 rounded-xl border bg-white shadow-lg text-xs sm:text-sm font-medium ${palette.borderStrong} ${palette.textPrimary}`}
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}
