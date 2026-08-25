'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SlideData {
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

const slides: SlideData[] = [
  {
    title: 'Özel Yazılım & Mobil',
    subtitle: 'İş Süreçlerinize %100 Uyumlu Mimariler',
    description:
      'Şirketinizin ihtiyaçlarına özel sıfırdan tasarlanan web sistemleri, iOS/Android mobil uygulamalar ve yüksek performanslı kurumsal yazılım çözümleri.',
    accent: '#00F5D4',
    imageUrl:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=900&fit=crop&q=80',
    ctaText: 'Yazılım Çözümlerini İncele',
    ctaLink: '/yazilim/ozel-yazilim',
    secondaryCtaText: 'Teklif Al',
    secondaryCtaLink: '/kurumsal/iletisim',
  },
  {
    title: 'Tier III NVMe Sunucu & VDS',
    subtitle: 'Kesintisiz %99.98 Uptime & 1 Gbps Port',
    description:
      '%100 Paylaşımsız CPU/RAM kaynakları, Tier III İstanbul Veri Merkezi altyapısı, donanımsal DDoS koruması ve ultra hızlı NVMe SSD depolama.',
    accent: '#06B6D4',
    imageUrl:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=900&fit=crop&q=80',
    ctaText: 'Sunucu Paketlerini İncele',
    ctaLink: '/web-hosting/vds-sunucu',
    secondaryCtaText: 'VDS Yapılandır',
    secondaryCtaLink: '/web-hosting/vds-sunucu',
  },
  {
    title: 'Yapay Zekâ (AI) & İş Zekası',
    subtitle: 'LLM, ChatBot & Kurumsal Otomasyon',
    description:
      'OpenAI, Gemini ve Claude entegrasyonlu akıllı şirket içi asistanlar, otomatik doküman işleme ve gerçek zamanlı iş zekası analitik panelleri.',
    accent: '#10B981',
    imageUrl:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=900&fit=crop&q=80',
    ctaText: 'Yapay Zekâ Çözümleri',
    ctaLink: '/yazilim/yapay-zeka',
    secondaryCtaText: 'Demo Randevusu Al',
    secondaryCtaLink: '/kurumsal/iletisim',
  },
  {
    title: 'ERP, CRM & E-Ticaret',
    subtitle: 'Pazaryeri & GİB E-Fatura Entegrasyonu',
    description:
      'Trendyol, Amazon, Hepsiburada, Logo ve banka sanal POS sistemlerini tek merkezden yöneten uçtan uca kurumsal entegrasyon altyapısı.',
    accent: '#818CF8',
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=900&fit=crop&q=80',
    ctaText: 'Kurumsal Sistemleri Gör',
    ctaLink: '/yazilim/erp-crm',
    secondaryCtaText: 'Entegrasyon Danışmanlığı',
    secondaryCtaLink: '/kurumsal/iletisim',
  },
];

export default function ElegantCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const SLIDE_DURATION = 6000;
  const TRANSITION_DURATION = 800;

  const goToSlide = useCallback(
    (index: number, dir?: 'next' | 'prev') => {
      if (isTransitioning || index === currentIndex) return;
      setDirection(dir || (index > currentIndex ? 'next' : 'prev'));
      setIsTransitioning(true);
      setProgress(0);

      setTimeout(() => {
        setCurrentIndex(index);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, TRANSITION_DURATION / 2);
    },
    [isTransitioning, currentIndex]
  );

  const goNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    goToSlide(nextIndex, 'next');
  }, [currentIndex, goToSlide]);

  const goPrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(prevIndex, 'prev');
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    if (isPaused) return;

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 100 / (SLIDE_DURATION / 50);
      });
    }, 50);

    intervalRef.current = setInterval(() => {
      goNext();
    }, SLIDE_DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [currentIndex, isPaused, goNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="carousel-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background accent wash */}
      <div
        className="carousel-bg-wash"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${currentSlide.accent}20 0%, transparent 70%)`,
        }}
      />

      <div className="carousel-inner">
        {/* Left: Text Content */}
        <div className="carousel-content">
          <div className="carousel-content-inner">
            {/* Collection number */}
            <div
              className={`carousel-collection-num ${isTransitioning ? 'transitioning' : 'visible'}`}
            >
              <span className="carousel-num-line" style={{ background: currentSlide.accent }} />
              <span className="carousel-num-text" style={{ color: currentSlide.accent }}>
                {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            {/* Title */}
            <h2
              className={`carousel-title ${isTransitioning ? 'transitioning' : 'visible'}`}
            >
              {currentSlide.title}
            </h2>

            {/* Subtitle */}
            <p
              className={`carousel-subtitle ${isTransitioning ? 'transitioning' : 'visible'}`}
              style={{ color: currentSlide.accent }}
            >
              {currentSlide.subtitle}
            </p>

            {/* Description */}
            <p
              className={`carousel-description ${isTransitioning ? 'transitioning' : 'visible'}`}
            >
              {currentSlide.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={currentSlide.ctaLink}
                className="flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-[#070E1B] shadow-xl transition-all hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${currentSlide.accent}, #FFFFFF)`,
                  boxShadow: `0 10px 25px -5px ${currentSlide.accent}40`
                }}
              >
                <span>{currentSlide.ctaText}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href={currentSlide.secondaryCtaLink}
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-[#0B1528]/80 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:border-white hover:bg-[#102038]"
              >
                {currentSlide.secondaryCtaText}
              </Link>
            </div>

            {/* Navigation Arrows */}
            <div className="carousel-nav-arrows">
              <button
                onClick={goPrev}
                className="carousel-arrow-btn"
                aria-label="Previous slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="carousel-arrow-btn"
                aria-label="Next slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="carousel-image-container">
          <div
            className={`carousel-image-frame ${isTransitioning ? 'transitioning' : 'visible'}`}
          >
            <img
              src={currentSlide.imageUrl}
              alt={currentSlide.title}
              className="carousel-image"
            />
            <div
              className="carousel-image-overlay"
              style={{
                background: `linear-gradient(135deg, ${currentSlide.accent}30 0%, transparent 60%)`,
              }}
            />
          </div>

          {/* Decorative frame corner */}
          <div className="carousel-frame-corner carousel-frame-corner--tl" style={{ borderColor: currentSlide.accent }} />
          <div className="carousel-frame-corner carousel-frame-corner--br" style={{ borderColor: currentSlide.accent }} />
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="carousel-progress-bar">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-progress-item ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className="carousel-progress-track">
              <div
                className="carousel-progress-fill"
                style={{
                  width: index === currentIndex ? `${progress}%` : index < currentIndex ? '100%' : '0%',
                  backgroundColor: index === currentIndex ? currentSlide.accent : undefined,
                }}
              />
            </div>
            <span className="carousel-progress-label">{slide.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
