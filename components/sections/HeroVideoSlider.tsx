'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play, Sparkles, Cpu, Layers, Bot, Server } from 'lucide-react';

interface Slide {
  id: number;
  tag: string;
  tagIcon: any;
  title: string;
  highlight: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  videoUrl: string;
  fallbackBg: string;
  stats: { label: string; value: string }[];
}

const slides: Slide[] = [
  {
    id: 1,
    tag: 'Özel Yazılım & Mobil Geliştirme',
    tagIcon: Cpu,
    title: 'İşletmenize Özel',
    highlight: 'Yazılım ve Mobil Uygulamalar',
    description: 'Şirketinizin ihtiyaçlarına göre sıfırdan tasarlanan web sistemleri, iOS/Android mobil uygulamalar ve yüksek performanslı kurumsal yazılım mimarileri.',
    ctaText: 'Yazılım Çözümlerini Keşfet',
    ctaLink: '/yazilim/ozel-yazilim',
    secondaryCtaText: 'Ücretsiz Teklif Al',
    secondaryCtaLink: '/kurumsal/iletisim',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-41584-large.mp4',
    fallbackBg: 'radial-gradient(circle at 70% 30%, #1A4F7C 0%, #0F2236 70%)',
    stats: [
      { label: 'Özel Mimari', value: '%100 Sıfırdan' },
      { label: 'Platform', value: 'iOS & Android' },
      { label: 'Teslim', value: 'Sprint Tabanlı' }
    ]
  },
  {
    id: 2,
    tag: 'Tier III Sunucu & VDS Altyapısı',
    tagIcon: Server,
    title: 'Yüksek Performanslı',
    highlight: 'NVMe VDS ve Sunucu Çözümleri',
    description: '%100 Paylaşımsız CPU/RAM kaynakları, Tier III İstanbul Veri Merkezi altyapısı, 1 Gbps port ve kesintisiz kurumsal barındırma gücü.',
    ctaText: 'Sunucu Paketlerini İncele',
    ctaLink: '/web-hosting/vds-sunucu',
    secondaryCtaText: 'VDS Yapılandır',
    secondaryCtaLink: '/web-hosting/vds-sunucu',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-server-room-with-rows-of-racks-and-lights-42993-large.mp4',
    fallbackBg: 'radial-gradient(circle at 70% 30%, #0c4a6e 0%, #0F2236 70%)',
    stats: [
      { label: 'Uptime', value: '%99.98 SLA' },
      { label: 'Depolama', value: 'Enterprise NVMe' },
      { label: 'DDoS Filtreleme', value: '1 Tbps+' }
    ]
  },
  {
    id: 3,
    tag: 'Yapay Zekâ (AI) & İş Zekası',
    tagIcon: Bot,
    title: 'Geleceğin Akıllı',
    highlight: 'Yapay Zekâ & LLM Entegrasyonları',
    description: 'Şirket verilerinizi analiz eden AI modelleri, otomatik müşteri destek asistanları, OCR doküman işleme ve yönetici iş zekası raporlama panelleri.',
    ctaText: 'Yapay Zekâ Çözümleri',
    ctaLink: '/yazilim/yapay-zeka',
    secondaryCtaText: 'Demo İste',
    secondaryCtaLink: '/kurumsal/iletisim',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-network-connections-loop-42861-large.mp4',
    fallbackBg: 'radial-gradient(circle at 70% 30%, #134e4a 0%, #0F2236 70%)',
    stats: [
      { label: 'Model Desteği', value: 'GPT-4 & Claude & Gemini' },
      { label: 'Veri Analizi', value: 'Gerçek Zamanlı' },
      { label: 'Verimlilik Artışı', value: '%400' }
    ]
  },
  {
    id: 4,
    tag: 'Kurumsal Sistemler & API Entegrasyonu',
    tagIcon: Layers,
    title: 'Uçtan Uca Entegre',
    highlight: 'ERP, CRM ve E-Ticaret Ağları',
    description: 'Trendyol, Amazon, GİB E-Fatura, banka sanal POS ve kargo sistemlerini tek merkezden yöneten kusursuz kurumsal entegrasyon altyapısı.',
    ctaText: 'Kurumsal Sistemleri Gör',
    ctaLink: '/yazilim/erp-crm',
    secondaryCtaText: 'Entegrasyon Danışmanlığı',
    secondaryCtaLink: '/kurumsal/iletisim',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-working-on-a-computer-keyboard-41585-large.mp4',
    fallbackBg: 'radial-gradient(circle at 70% 30%, #312e81 0%, #0F2236 70%)',
    stats: [
      { label: 'Entegrasyonlar', value: 'Trendyol, GİB, POS' },
      { label: 'Senkronizasyon', value: 'Çift Yönlü Anlık' },
      { label: 'Otomasyon', value: 'Tam Otonom' }
    ]
  }
];

export function HeroVideoSlider() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const slide = slides[current];
  const TagIcon = slide.tagIcon;

  return (
    <div className="relative h-[88vh] min-h-[660px] max-h-[880px] w-full overflow-hidden bg-[#0F2236]">
      
      {/* Background Video Elements */}
      {slides.map((s, index) => {
        const isActive = index === current;
        return (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
            }`}
            style={{ background: s.fallbackBg }}
          >
            <video
              ref={(el) => { videoRefs.current[index] = el; }}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover opacity-40 filter brightness-95"
              src={s.videoUrl}
            />
            {/* Multi-Stop Visual Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F2236] via-[#0F2236]/85 to-[#0F2236]/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2236] via-transparent to-[#0F2236]/60" />
          </div>
        );
      })}

      {/* Foreground Content Container */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-between px-6 py-12 lg:py-16">
        
        {/* Top Info Bar */}
        <div className="flex items-center justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-[#2D9F9D]/50 bg-[#1A4F7C]/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#6EDCD7] backdrop-blur-md shadow-md"
            >
              <TagIcon className="h-4 w-4 text-[#6EDCD7]" />
              <span>{slide.tag}</span>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#1A4F7C]/80 text-white backdrop-blur-md transition-all hover:border-[#6EDCD7] hover:text-[#6EDCD7] hover:scale-105"
              aria-label={isPlaying ? 'Durdur' : 'Oynat'}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
            </button>
            <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-white/20 bg-[#1A4F7C]/80 px-3.5 py-2 backdrop-blur-md">
              <span className="font-mono text-xs font-bold text-white">0{current + 1}</span>
              <span className="text-xs text-slate-400">/</span>
              <span className="font-mono text-xs text-[#6EDCD7]">0{slides.length}</span>
            </div>
          </div>
        </div>

        {/* Middle Hero Main Headline */}
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col gap-5"
            >
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-[1.12]">
                {slide.title} <br />
                <span className="bg-gradient-to-r from-[#6EDCD7] via-[#2D9F9D] to-white bg-clip-text text-transparent">
                  {slide.highlight}
                </span>
              </h1>

              <p className="max-w-2xl text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                {slide.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href={slide.ctaLink}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2D9F9D] to-[#6EDCD7] px-7 py-3.5 text-sm sm:text-base font-bold text-[#0F2236] shadow-xl shadow-[#2D9F9D]/30 transition-all hover:scale-[1.03] hover:shadow-[#2D9F9D]/50"
                >
                  <span>{slide.ctaText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={slide.secondaryCtaLink}
                  className="flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 text-sm sm:text-base font-bold text-white backdrop-blur-md transition-all hover:border-[#6EDCD7] hover:bg-white/20 hover:scale-[1.02]"
                >
                  {slide.secondaryCtaText}
                </Link>
              </div>

              {/* Live Spec Badges */}
              <div className="mt-4 flex flex-wrap items-center gap-8 border-t border-white/15 pt-5">
                {slide.stats.map((st, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-xs text-slate-300 font-medium">{st.label}</span>
                    <span className="font-mono text-sm font-bold text-[#6EDCD7]">{st.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Interactive Navigation */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/15 pt-5">
          
          {/* Slide Tab Buttons */}
          <div className="flex flex-wrap gap-2.5">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrent(idx)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                  idx === current
                    ? 'bg-[#2D9F9D] text-[#0F2236] font-bold shadow-lg shadow-[#2D9F9D]/30 scale-105'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span className="font-mono">0{idx + 1}</span>
                <span className="hidden md:inline">{s.tag.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-2.5 self-end sm:self-auto">
            <button
              onClick={() => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-all hover:border-[#6EDCD7] hover:bg-white/25 hover:scale-105"
              aria-label="Önceki Hizmet"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-all hover:border-[#6EDCD7] hover:bg-white/25 hover:scale-105"
              aria-label="Sonraki Hizmet"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
