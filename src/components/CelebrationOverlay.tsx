import { useMemo } from 'react';

interface CelebrationOverlayProps {
  burstKey: number;
  colors: string[];
}

interface ConfettiPiece {
  id: number;
  leftPercent: number;
  delaySeconds: number;
  durationSeconds: number;
  driftX: number;
  spinDeg: number;
  width: number;
  height: number;
  color: string;
}

export function CelebrationOverlay({ burstKey, colors }: CelebrationOverlayProps) {
  const pieces = useMemo<ConfettiPiece[]>(() => {
    if (burstKey === 0) return [];
    return Array.from({ length: 42 }, (_, idx) => {
      const seed = (idx * 37 + burstKey * 17) % 100;
      const isRibbon = idx % 3 === 0;
      return {
        id: idx,
        leftPercent: (idx * 2.4 + (seed % 5)) % 98,
        delaySeconds: (idx % 9) * 0.08,
        durationSeconds: 2.4 + (seed % 14) * 0.12,
        driftX: (idx % 2 === 0 ? 1 : -1) * (20 + (seed % 55)),
        spinDeg: (idx % 2 === 0 ? 1 : -1) * (180 + seed * 3),
        width: isRibbon ? 6 : 9,
        height: isRibbon ? 16 : 9,
        color: colors[idx % colors.length],
      };
    });
  }, [burstKey, colors]);

  if (burstKey === 0) return null;

  return (
    <div
      key={burstKey}
      aria-hidden="true"
      className="no-print pointer-events-none fixed inset-0 z-50 overflow-hidden"
    >
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className="confetti-piece absolute top-0 rounded-[2px]"
          style={
            {
              left: `${piece.leftPercent}%`,
              width: `${piece.width}px`,
              height: `${piece.height}px`,
              backgroundColor: piece.color,
              animationDelay: `${piece.delaySeconds}s`,
              '--fall-duration': `${piece.durationSeconds}s`,
              '--drift-x': `${piece.driftX}px`,
              '--spin-deg': `${piece.spinDeg}deg`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
