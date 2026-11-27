import { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { PaletteTokens } from '../data/graduationData';

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  palette: PaletteTokens;
  className?: string;
}

export function ResilientImage({
  src,
  alt,
  fallbackTitle,
  palette,
  className = '',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center p-6 text-center ${palette.subtleSurface} ${palette.textMuted} ${className}`}
        role="img"
        aria-label={alt}
      >
        <GraduationCap className={`w-10 h-10 mb-3 opacity-70 ${palette.accentText}`} />
        <p className={`font-display text-base font-medium ${palette.textPrimary}`}>
          {fallbackTitle}
        </p>
        <p className="text-xs mt-1">Foto kenangan Faiz (Aic)</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
