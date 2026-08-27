'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export interface YazilimHeroSlide {
  id: string;
  badge: string;
  titleTop: string;
  titleHighlight: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  targetId: string;
}

export const HERO_SLIDES: YazilimHeroSlide[] = [
  {
    id: 'ozel-yazilim',
    badge: '01 / 06 • KURUMSAL WEB MİMARİSİ',
    titleTop: 'Özel Yazılım &',
    titleHighlight: 'Kurumsal SaaS Çözümleri',
    description:
      'İşletmenizin benzersiz iş akışlarına özel sıfırdan tasarlanan web sistemleri, SaaS platformları ve yüksek güvenlikli kurumsal portallar.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    ctaText: 'Projenizi Başlatın',
    ctaLink: '/kurumsal/iletisim',
    targetId: 'ozel-yazilim',
  },
  {
    id: 'mobil-uygulama',
    badge: '02 / 06 • MOBİL MÜHENDİSLİK',
    titleTop: 'iOS & Android',
    titleHighlight: 'Native & Cross Mobil Çözümler',
    description:
      'App Store ve Google Play standartlarında, biyometrik güvenlik, akıcı UX ve anlık bildirim motorlu yüksek performanslı mobil uygulamalar.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop',
    ctaText: 'Mobil Uygulama Teklifi Al',
    ctaLink: '/kurumsal/iletisim',
    targetId: 'mobil-uygulama',
  },
  {
    id: 'erp-crm',
    badge: '03 / 06 • KURUMSAL SİSTEMLER',
    titleTop: 'ERP, CRM &',
    titleHighlight: 'Merkezi Süreç ve Veri Yönetimi',
    description:
      'Stok yönetimi, muhasebe köprüleri, satış hunileri ve departmanlar arası operasyonel verimliliği maksimize eden uçtan uca paneller.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
    ctaText: 'ERP & CRM Danışmanlığı',
    ctaLink: '/kurumsal/iletisim',
    targetId: 'erp-crm',
  },
  {
    id: 'e-ticaret',
    badge: '04 / 06 • DİJİTAL TİCARET',
    titleTop: 'B2B & B2C E-Ticaret',
    titleHighlight: 'Özel Sanal POS & Ödeme Altyapısı',
    description:
      'Milisaniyeler içinde tamamlanan sipariş akışları, banka sanal POS entegrasyonları, sepet optimizasyonu ve yüksek trafiğe dayanıklı altyapı.',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1600&auto=format&fit=crop',
    ctaText: 'E-Ticaret Altyapısı Kur',
    ctaLink: '/kurumsal/iletisim',
    targetId: 'e-ticaret',
  },
  {
    id: 'api-entegrasyon',
    badge: '05 / 06 • ÇİFT YÖNLÜ ENTEGRASYON',
    titleTop: 'Pazaryeri &',
    titleHighlight: 'GİB E-Fatura API Entegrasyonları',
    description:
      'Trendyol, Amazon, Hepsiburada, Logo, Mikro ve Gelir İdaresi Başkanlığı e-Fatura/e-Arşiv sistemleriyle anlık çift yönlü veri köprüleri.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop',
    ctaText: 'Entegrasyon Talebi Oluştur',
    ctaLink: '/kurumsal/iletisim',
    targetId: 'api-entegrasyon',
  },
  {
    id: 'yapay-zeka',
    badge: '06 / 06 • YAPAY ZEKÂ & RAG',
    titleTop: 'Yapay Zekâ (AI) &',
    titleHighlight: 'Akıllı Asistanlar & LLM Çözümleri',
    description:
      'OpenAI, Gemini ve Claude tabanlı, şirket içi dökümanlarınızla beslenen kurumsal akıllı asistanlar ve gerçek zamanlı analitik modeller.',
    image: '/ai-assistant.jpg',
    ctaText: 'Yapay Zekâ Demosu İste',
    ctaLink: '/kurumsal/iletisim',
    targetId: 'yapay-zeka',
  },
];

export function YazilimHeroSlider({
  onSelectService,
}: {
  onSelectService?: (id: string) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // 3-second automatic rotation
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section 
      className="relative min-h-[500px] lg:min-h-[540px] flex flex-col justify-between text-white py-14 px-6 sm:px-10 lg:px-12 border-b border-slate-800 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with smooth crossfade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.titleHighlight}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-layer Dark Gradient & Overlay for crisp contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D]/95 via-[#0F172A]/85 to-[#0A0F1D]/80 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-[#0A0F1D]/70 z-10 pointer-events-none" />

        {/* Subtle red ambient glow in the background */}
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#E50914]/15 rounded-full blur-3xl pointer-events-none z-10" />
      </div>

      {/* Slide Text Content */}
      <div className="relative z-20 mx-auto max-w-7xl w-full my-auto">
        <div className="max-w-3xl text-left">
          {/* Animated Badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${currentSlide.id}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E50914]/20 border border-[#E50914]/40 text-[#E50914] text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#E50914] animate-ping" />
              <span>{currentSlide.badge}</span>
            </motion.div>
          </AnimatePresence>

          {/* Animated Main Heading */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentSlide.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45 }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight drop-shadow-md text-[#F9F9F9]"
            >
              {currentSlide.titleTop} <br className="hidden sm:inline" />
              <span className="text-[#E50914] drop-shadow-[0_2px_12px_rgba(229,9,20,0.35)] ml-1 sm:ml-0">
                {currentSlide.titleHighlight}
              </span>
            </motion.h1>
          </AnimatePresence>

          {/* Animated Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${currentSlide.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-xs sm:text-base lg:text-lg mt-3 sm:mt-4 leading-relaxed max-w-2xl font-medium drop-shadow-sm text-[#F4F4F0] opacity-95 min-h-[48px] sm:min-h-[60px]"
            >
              {currentSlide.description}
            </motion.p>
          </AnimatePresence>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Link
              href={currentSlide.ctaLink}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#E50914] px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#E50914]/30 hover:bg-[#B91C1C] hover:scale-105 transition-all cursor-pointer text-center"
            >
              <span>{currentSlide.ctaText}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="#muhendislik-portfoyumuz"
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-slate-900/80 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold text-slate-200 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md cursor-pointer text-center"
            >
              <span>Tüm Hizmetleri Keşfedin</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default YazilimHeroSlider;
