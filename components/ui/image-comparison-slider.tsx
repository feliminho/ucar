'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Code2, Server } from 'lucide-react';

export interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
  beforeLabel?: string;
  afterLabel?: string;
  activeSide?: 'software' | 'server';
  onSideChange?: (side: 'software' | 'server') => void;
  className?: string;
}

export const ImageComparison: React.FC<ImageComparisonProps> = ({
  beforeImage,
  afterImage,
  altBefore = 'Yazılım Çözümleri',
  altAfter = 'Sunucu Altyapısı',
  beforeLabel = '💻 Yazılım Hizmetleri',
  afterLabel = '🖥️ Sunucu & Altyapı',
  activeSide = 'software',
  onSideChange,
  className,
}) => {
  const [sliderPosition, setSliderPosition] = useState(activeSide === 'software' ? 70 : 30);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Sync external activeSide state to slider position
  useEffect(() => {
    if (activeSide === 'software') {
      setSliderPosition(70);
    } else {
      setSliderPosition(30);
    }
  }, [activeSide]);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      let newPosition = ((clientX - rect.left) / rect.width) * 100;
      newPosition = Math.max(8, Math.min(92, newPosition));

      setSliderPosition(newPosition);

      // Trigger side change based on threshold
      if (newPosition >= 50 && onSideChange) {
        onSideChange('software');
      } else if (newPosition < 50 && onSideChange) {
        onSideChange('server');
      }
    },
    [isDragging, onSideChange]
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = useCallback(() => setIsDragging(false), []);
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);

  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleMouseUp]);

  return (
    <div className="flex flex-col gap-5 w-full">
      
      {/* Top Interactive Mode Selectors */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => {
            setSliderPosition(75);
            if (onSideChange) onSideChange('software');
          }}
          className={cn(
            'flex items-center gap-2.5 rounded-2xl px-6 py-3.5 text-xs sm:text-sm font-bold transition-all shadow-md',
            sliderPosition >= 50
              ? 'bg-gradient-to-r from-[#00C2FF] via-[#06B6D4] to-[#00F5D4] text-[#070E1B] shadow-cyan-500/25 scale-105'
              : 'bg-[#0B1528] text-slate-400 border border-slate-800 hover:text-white'
          )}
        >
          <Code2 className="h-4 w-4" />
          <span>SOL TARAF: Yazılım Çözümleri (Aktif)</span>
        </button>

        <button
          type="button"
          onClick={() => {
            setSliderPosition(25);
            if (onSideChange) onSideChange('server');
          }}
          className={cn(
            'flex items-center gap-2.5 rounded-2xl px-6 py-3.5 text-xs sm:text-sm font-bold transition-all shadow-md',
            sliderPosition < 50
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/25 scale-105'
              : 'bg-[#0B1528] text-slate-400 border border-slate-800 hover:text-white'
          )}
        >
          <Server className="h-4 w-4" />
          <span>SAĞ TARAF: Sunucu Altyapısı (Aktif)</span>
        </button>
      </div>

      {/* Main Full-Width Horizontal Comparison Viewport */}
      <div
        ref={containerRef}
        className={cn(
          'relative w-full select-none rounded-3xl overflow-hidden border border-slate-800 bg-[#0B1528] shadow-2xl transition-all cursor-ew-resize h-[360px] sm:h-[440px] md:h-[480px] lg:h-[500px]',
          className
        )}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Left Side (Software Image & Clickable Area) */}
        <div
          className="absolute top-0 left-0 h-full w-full overflow-hidden z-10"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          onClick={() => {
            setSliderPosition(75);
            if (onSideChange) onSideChange('software');
          }}
        >
          <img
            src={afterImage}
            alt={altAfter}
            className="h-full w-full object-cover object-center filter brightness-95"
            draggable="false"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#070E1B]/80 via-transparent to-cyan-950/40" />
          
          {/* Left Layer Floating Badge */}
          <div className="absolute top-6 left-6 z-20 flex flex-col gap-1.5 rounded-2xl bg-[#070E1B]/90 border border-cyan-500/50 p-4 backdrop-blur-md shadow-2xl">
            <div className="flex items-center gap-2 text-cyan-400">
              <Code2 className="h-5 w-5" />
              <span className="text-sm font-bold text-white">{beforeLabel}</span>
            </div>
            <span className="text-xs text-slate-300">Tıklayın veya sola çekin → Yazılım kısmı açılır</span>
          </div>
        </div>

        {/* Right Side (Server Image & Clickable Area) */}
        <div
          className="relative h-full w-full"
          onClick={() => {
            setSliderPosition(25);
            if (onSideChange) onSideChange('server');
          }}
        >
          <img
            src={beforeImage}
            alt={altBefore}
            className="block h-full w-full object-cover object-center filter brightness-95"
            draggable="false"
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-[#070E1B]/80 via-transparent to-blue-950/40" />

          {/* Right Layer Floating Badge */}
          <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-1.5 rounded-2xl bg-[#070E1B]/90 border border-blue-500/50 p-4 backdrop-blur-md shadow-2xl text-right">
            <div className="flex items-center gap-2 text-blue-400">
              <span className="text-sm font-bold text-white">{afterLabel}</span>
              <Server className="h-5 w-5" />
            </div>
            <span className="text-xs text-slate-300">Tıklayın veya sağa çekin → Sunucu sayfası açılır</span>
          </div>
        </div>

        {/* Center Drag Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-1.5 bg-cyan-400 z-30 flex items-center justify-center shadow-[0_0_20px_rgba(0,245,212,0.9)]"
          style={{ left: `calc(${sliderPosition}% - 3px)` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div
            className={cn(
              'bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full h-12 w-12 flex items-center justify-center shadow-2xl border-2 border-white transition-transform duration-150',
              isDragging ? 'scale-120 shadow-cyan-400/90' : 'hover:scale-110'
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#070E1B]"
            >
              <line x1="15" y1="18" x2="9" y2="12" />
              <line x1="9" y1="6" x2="15" y2="12" />
            </svg>
          </div>
        </div>

      </div>

    </div>
  );
};
