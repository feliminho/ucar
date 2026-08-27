'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  FaCode, 
  FaServer, 
  FaBrain, 
  FaLayerGroup 
} from 'react-icons/fa';
import { ArrowRight, Sparkles } from 'lucide-react';

export interface SelectorPillar {
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  accent: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export const heroPillars: SelectorPillar[] = [
  {
    number: "01 / 04",
    badge: "ÖZEL YAZILIM & MOBİL",
    title: "Özel Yazılım & Mobil",
    subtitle: "İş Süreçlerinize %100 Uyumlu Mimariler",
    description: "Şirketinizin ihtiyaçlarına özel sıfırdan tasarlanan web sistemleri, iOS/Android mobil uygulamalar ve yüksek performanslı kurumsal yazılım çözümleri.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=85",
    icon: <FaCode size={24} className="text-white" />,
    accent: "#E50914",
    ctaText: "Yazılım Çözümlerini İncele",
    ctaLink: "/yazilim",
    secondaryCtaText: "Teklif Al",
    secondaryCtaLink: "/kurumsal/iletisim"
  },
  {
    number: "02 / 04",
    badge: "TIER III SUNUCU & VDS",
    title: "Tier III NVMe Sunucu & VDS",
    subtitle: "Kesintisiz %99.98 Uptime & 1 Gbps Port",
    description: "%100 Paylaşımsız CPU/RAM kaynakları, Tier III İstanbul Veri Merkezi altyapısı, donanımsal DDoS koruması ve ultra hızlı NVMe SSD depolama.",
    image: "/server-rack.png",
    icon: <FaServer size={24} className="text-white" />,
    accent: "#111111",
    ctaText: "Sunucu Paketlerini İncele",
    ctaLink: "/sunucu-barindirma",
    secondaryCtaText: "VDS Yapılandır",
    secondaryCtaLink: "/sunucu-barindirma/vds-sunucu"
  },
  {
    number: "03 / 04",
    badge: "YAPAY ZEKÂ & OTOMASYON",
    title: "Yapay Zekâ (AI) & İş Zekası",
    subtitle: "LLM, ChatBot & Kurumsal Otomasyon",
    description: "OpenAI, Gemini ve Claude entegrasyonlu akıllı şirket içi asistanlar, otomatik doküman işleme ve gerçek zamanlı iş zekası analitik panelleri.",
    image: "/ai-assistant.jpg",
    icon: <FaBrain size={24} className="text-white" />,
    accent: "#E50914",
    ctaText: "Yapay Zekâ Çözümleri",
    ctaLink: "/yazilim",
    secondaryCtaText: "Demo Randevusu",
    secondaryCtaLink: "/kurumsal/iletisim"
  },
  {
    number: "04 / 04",
    badge: "ERP, CRM & ENTEGRASYON",
    title: "ERP, CRM & E-Ticaret",
    subtitle: "Pazaryeri & GİB E-Fatura Entegrasyonu",
    description: "Trendyol, Amazon, Hepsiburada, Logo ve banka sanal POS sistemlerini tek merkezden yöneten uçtan uca kurumsal entegrasyon altyapısı.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85",
    icon: <FaLayerGroup size={24} className="text-white" />,
    accent: "#111111",
    ctaText: "Kurumsal Sistemleri Gör",
    ctaLink: "/yazilim",
    secondaryCtaText: "Entegrasyon Danışmanlığı",
    secondaryCtaLink: "/kurumsal/iletisim"
  }
];

export interface InteractiveSelectorProps {
  pillars?: SelectorPillar[];
  className?: string;
  autoPlay?: boolean;
}

export const InteractiveSelector: React.FC<InteractiveSelectorProps> = ({
  pillars = heroPillars,
  className = '',
  autoPlay = true,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-cycle through pillars every 5.5s unless hovered
  useEffect(() => {
    if (!autoPlay || isHovered) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % pillars.length);
    }, 5500);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [autoPlay, isHovered, pillars.length]);

  return (
    <section 
      className={`relative w-full h-[82vh] md:h-[76vh] min-h-[580px] md:min-h-[620px] max-h-[880px] bg-[#0A0A0A] overflow-hidden select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background radial ambient light */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E50914]/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Main Full-Height Columns Container */}
      <div className="relative z-10 flex flex-col md:flex-row w-full h-full items-stretch">
        {pillars.map((pillar, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className={`
                group relative flex flex-col justify-between overflow-hidden cursor-pointer
                transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                border-b md:border-b-0 md:border-r border-white/10
                ${isActive ? 'md:flex-[4.5] flex-[4] z-20' : 'md:flex-[1] flex-[1] z-10 hover:md:flex-[1.4]'}
              `}
              style={{
                backgroundImage: `url('${pillar.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dynamic Gradient Overlay */}
              <div 
                className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                  isActive 
                    ? 'bg-gradient-to-t from-black via-black/75 to-black/35 opacity-95' 
                    : 'bg-black/80 hover:bg-black/65 group-hover:opacity-90'
                }`}
              />

              {/* Active Red Border Line on Top/Left */}
              <div 
                className={`absolute top-0 left-0 transition-all duration-500 z-30 ${
                  isActive 
                    ? 'h-1.5 w-full md:h-full md:w-1.5 bg-[#E50914] shadow-[0_0_15px_#E50914]' 
                    : 'opacity-0'
                }`}
              />

              {/* TOP BAR / PILLAR HEADER (Visible on all) */}
              <div className="relative z-20 p-4 sm:p-7 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Number Badge */}
                  <span className={`text-xs sm:text-sm font-mono font-extrabold tracking-wider transition-colors duration-300 ${
                    isActive ? 'text-[#E50914]' : 'text-gray-400 group-hover:text-white'
                  }`}>
                    {pillar.number}
                  </span>

                  {/* Red Dot indicator */}
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#E50914] animate-ping" />
                  )}
                </div>

                {/* Pillar Icon Box */}
                <div className={`flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl backdrop-blur-md border transition-all duration-500 ${
                  isActive 
                    ? 'bg-[#E50914] border-red-500 shadow-lg shadow-[#E50914]/40 scale-105 sm:scale-110' 
                    : 'bg-white/10 border-white/15 text-gray-300 group-hover:border-white/30 group-hover:scale-105'
                }`}>
                  {pillar.icon}
                </div>
              </div>

              {/* VERTICAL PREVIEW TITLE (For inactive collapsed desktop columns) */}
              {!isActive && (
                <div className="hidden md:flex relative z-20 flex-1 items-center justify-center pointer-events-none px-4">
                  <span className="text-white/80 font-bold text-base tracking-wider uppercase whitespace-nowrap rotate-90 origin-center transition-all duration-300 group-hover:text-white group-hover:scale-105">
                    {pillar.badge}
                  </span>
                </div>
              )}

              {/* BOTTOM CONTENT AREA (Expands when active) */}
              <div className="relative z-20 p-4 sm:p-8 md:p-10 flex flex-col justify-end">
                {/* Active Expanded Content */}
                <div className={`transition-all duration-700 ${
                  isActive 
                    ? 'opacity-100 translate-y-0 max-h-[500px]' 
                    : 'opacity-0 translate-y-6 max-h-0 md:hidden pointer-events-none'
                }`}>
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#E50914]/20 border border-[#E50914]/40 text-[#E50914] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3 backdrop-blur-md">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>{pillar.badge}</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight leading-tight mb-1 sm:mb-2 drop-shadow-md">
                    {pillar.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-base font-semibold text-[#E50914] mb-2 sm:mb-3">
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-gray-300 font-normal max-w-2xl leading-relaxed mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
                    {pillar.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                    <Link
                      href={pillar.ctaLink}
                      className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl bg-[#E50914] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#E50914]/30 hover:bg-[#B91C1C] hover:scale-105 transition-all duration-200"
                    >
                      <span>{pillar.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </Link>

                    {pillar.secondaryCtaText && (
                      <Link
                        href={pillar.secondaryCtaLink || '/kurumsal/iletisim'}
                        className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold backdrop-blur-md hover:scale-105 transition-all duration-200"
                      >
                        {pillar.secondaryCtaText}
                      </Link>
                    )}
                  </div>
                </div>

                {/* Inactive Bottom Simple Label */}
                {!isActive && (
                  <div className="md:hidden flex items-center justify-between text-white py-1">
                    <span className="font-bold text-sm">{pillar.title}</span>
                    <span className="text-xs text-[#E50914]">İncele →</span>
                  </div>
                )}
              </div>

              {/* Progress Indicator for Active Tab */}
              {isActive && autoPlay && !isHovered && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30">
                  <div className="h-full bg-[#E50914] animate-pulse w-full" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InteractiveSelector;
