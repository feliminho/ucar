'use client';

import React from 'react';
import Link from 'next/link';
import {
  ScrollXCarousel,
  ScrollXCarouselContainer,
  ScrollXCarouselProgress,
  ScrollXCarouselWrap,
} from '@/components/ui/scroll-x-carousel';
import {
  CardHoverReveal,
  CardHoverRevealContent,
  CardHoverRevealMain,
} from '@/components/ui/reveal-on-hover';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export interface SoftwareSlide {
  id: string;
  serviceId: string;
  title: string;
  subtitle?: string;
  description: string;
  services: string[];
  type: string;
  imageUrl: string;
  link?: string;
}

export const SOFTWARE_ENGINEERING_SLIDES: SoftwareSlide[] = [
  {
    id: 'slide-1',
    serviceId: 'ozel-yazilim',
    title: 'Özel Web & SaaS Platformları',
    subtitle: 'Sıfırdan Ölçeklenebilir Web Mimarileri',
    description:
      'İşletmenizin benzersiz ihtiyaçlarına özel sıfır teknik borç, modern Next.js/TypeScript altyapısı ve yüksek güvenlikli kurumsal SaaS sistemleri geliştiriyoruz.',
    services: ['Next.js', 'TypeScript', 'Tailwind', 'Microservices', 'Docker CI/CD'],
    type: 'Web & SaaS',
    imageUrl:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    link: '/yazilim?hizmet=ozel-yazilim#secilen-hizmet',
  },
  {
    id: 'slide-2',
    serviceId: 'mobil-uygulama',
    title: 'iOS & Android Mobil Uygulamalar',
    subtitle: 'Native ve Cross-Platform Yüksek Performans',
    description:
      'App Store ve Google Play standartlarında, akıcı kullanıcı deneyimi (UX), biyometrik güvenlik ve anlık bildirim motorlu mobil çözümler.',
    services: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Push Engine'],
    type: 'Mobil Mühendislik',
    imageUrl:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600&auto=format&fit=crop',
    link: '/yazilim?hizmet=mobil-uygulama#secilen-hizmet',
  },
  {
    id: 'slide-3',
    serviceId: 'erp-crm',
    title: 'ERP, CRM & Kurumsal İş Sistemleri',
    subtitle: 'Merkezi Süreç ve Veri Yönetimi',
    description:
      'Stok takibi, dinamik analitik göstergeler, muhasebe köprüleri ve departmanlar arası operasyonel verimliliği maksimize eden uçtan uca kurumsal paneller.',
    services: ['ERP Modülleri', 'CRM Pipeline', 'RBAC Yetkilendirme', 'Muhasebe Köprüsü'],
    type: 'Kurumsal Sistemler',
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
    link: '/yazilim?hizmet=erp-crm#secilen-hizmet',
  },
  {
    id: 'slide-4',
    serviceId: 'e-ticaret',
    title: 'E-Ticaret & Özel Ödeme Altyapıları',
    subtitle: 'Yüksek Hacimli Satış & Sanal POS',
    description:
      'Milisaniyeler içinde tamamlanan sipariş akışları, banka sanal POS entegrasyonları, sepet optimizasyonu ve yüksek trafiğe dayanıklı altyapı.',
    services: ['Banka Sanal POS', 'Iyzico / PayTR', 'Sepet Kurtarma', 'Kampanya Motoru'],
    type: 'E-Ticaret',
    imageUrl:
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1600&auto=format&fit=crop',
    link: '/yazilim?hizmet=e-ticaret#secilen-hizmet',
  },
  {
    id: 'slide-5',
    serviceId: 'api-entegrasyon',
    title: 'Pazaryeri & GİB API Entegrasyonları',
    subtitle: 'Trendyol, Hepsiburada, Amazon & e-Fatura',
    description:
      'Trendyol, Amazon, Hepsiburada, Logo, Mikro ve Gelir İdaresi Başkanlığı e-Fatura/e-Arşiv sistemleriyle çift yönlü otomatik veri senkronizasyonu.',
    services: ['Trendyol API', 'Amazon TR', 'Hepsiburada', 'GİB e-Fatura', 'Webhook Engine'],
    type: 'API Entegrasyon',
    imageUrl:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop',
    link: '/yazilim?hizmet=api-entegrasyon#secilen-hizmet',
  },
  {
    id: 'slide-6',
    serviceId: 'yapay-zeka',
    title: 'Yapay Zekâ (AI) & Akıllı Asistanlar',
    subtitle: 'LLM, RAG & Kurumsal Şirket Botu',
    description:
      'OpenAI, Gemini ve Claude tabanlı, şirket içi dökümanlarınızla eğitilmiş kurumsal asistanlar ve gerçek zamanlı iş zekası analitiği.',
    services: ['RAG Mimarisi', 'Vektör Veritabanı', 'WhatsApp Asistanı', 'LLM Entegrasyonu'],
    type: 'Yapay Zekâ (AI)',
    imageUrl: '/ai-assistant.jpg',
    link: '/yazilim?hizmet=yapay-zeka#secilen-hizmet',
  },
];

export function YazilimScrollCarousel({
  slides = SOFTWARE_ENGINEERING_SLIDES,
  onSelectService,
  className = '',
}: {
  slides?: SoftwareSlide[];
  onSelectService?: (serviceId: string) => void;
  className?: string;
}) {
  return (
    <div className={`w-full bg-[#F9F9F9] text-[#111111] border-y border-[#E5E5E5] relative ${className}`}>
      {/* ScrollXCarousel tall outer track for sticky scroll locking */}
      <ScrollXCarousel className="h-[380vh] relative">
        <ScrollXCarouselContainer className="h-screen sticky top-0 flex flex-col justify-between py-4 sm:py-6 overflow-hidden">
          {/* Background Ambient Glows */}
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#E50914]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl pointer-events-none" />

          {/* Side Gradients */}
          <div className="pointer-events-none w-[6vw] sm:w-[10vw] h-full absolute inset-[0_auto_0_0] z-20 bg-gradient-to-r from-[#F9F9F9] to-transparent" />
          <div className="pointer-events-none w-[6vw] sm:w-[10vw] h-full absolute inset-[0_0_0_auto] z-20 bg-gradient-to-l from-[#F9F9F9] to-transparent" />

          {/* Sticky Pinned Header */}
          <div className="max-w-7xl w-full mx-auto px-6 z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#E50914] text-xs font-bold uppercase tracking-wider mb-1.5 shadow-xs">
                <Code2 className="w-3.5 h-3.5" />
                <span>MÜHENDİSLİK PORTFÖYÜMÜZ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
                Tüm Yazılım Mühendisliği Hizmetlerimiz
              </h2>
              <p className="text-xs sm:text-sm text-[#555555] mt-0.5 max-w-2xl font-medium">
                Kaydırdıkça yatay eksende tüm hizmetlerimiz sırasıyla listelenir.
              </p>
            </div>

            <a
              href={`https://wa.me/905385926467?text=${encodeURIComponent('Merhaba, yazılım mühendisliği projeleriniz hakkında görüşmek ve teklif almak istiyorum.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#25D366]/20 hover:scale-105 transition-all flex-shrink-0 cursor-pointer"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp'tan Teklif Al</span>
            </a>
          </div>

          {/* Horizontal Translating Cards Row - Dynamic Scroll to Last Card */}
          <div className="w-full z-10 overflow-visible my-auto py-2">
            <ScrollXCarouselWrap 
              className="flex space-x-6 sm:space-x-8 pl-6 sm:pl-16 pr-24 items-center"
            >
              {slides.map((slide, idx) => (
                <CardHoverReveal
                  key={slide.id}
                  className="min-w-[86vw] sm:min-w-[42vw] lg:min-w-[28vw] xl:min-w-[24vw] h-[460px] sm:h-[540px] lg:h-[590px] xl:h-[630px] shadow-xl shadow-slate-200/60 border border-[#E5E5E5] rounded-3xl overflow-hidden bg-slate-900 group relative cursor-pointer flex-shrink-0"
                >
                  <CardHoverRevealMain className="size-full">
                    <img
                      alt={slide.title}
                      src={slide.imageUrl}
                      className="size-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Default gradient overlay for text clarity */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                  </CardHoverRevealMain>

                  {/* Top Badge */}
                  <div className="absolute top-5 left-5 right-5 z-10 flex items-center justify-between pointer-events-none">
                    <Badge className="capitalize rounded-full bg-[#E50914] text-white border-0 px-3.5 py-1.5 font-bold text-xs shadow-md">
                      {slide.type}
                    </Badge>
                    <span className="text-xs font-mono font-bold text-white/90 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 shadow-sm">
                      0{idx + 1} / 0{slides.length}
                    </span>
                  </div>

                  {/* Base Info (Hidden on Hover) */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                    <h3 className="text-xl sm:text-2xl font-black text-white drop-shadow-lg leading-tight">
                      {slide.title}
                    </h3>
                    {slide.subtitle && (
                      <p className="text-xs sm:text-sm text-[#ff4d58] font-bold mt-1.5 drop-shadow-md">
                        {slide.subtitle}
                      </p>
                    )}
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-[#25D366] font-bold">
                      <FaWhatsapp className="w-3.5 h-3.5" />
                      <span>Detayları görmek için üzerine gelin</span>
                    </div>
                  </div>

                  {/* Hover Reveal Details Box */}
                  <CardHoverRevealContent className="space-y-3 rounded-2xl bg-black/92 backdrop-blur-2xl p-6 border border-white/15 shadow-2xl">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        Hizmet Alanı
                      </span>
                      <div>
                        <Badge className="capitalize rounded-full bg-[#E50914] text-white border-0 text-xs font-bold px-3 py-1">
                          {slide.type}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                        Kullanılan Teknolojiler
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {slide.services.map((service) => (
                          <Badge
                            key={service}
                            className="capitalize rounded-md bg-white/10 hover:bg-white/20 text-gray-200 border-white/10 text-[11px] px-2.5 py-1"
                            variant="secondary"
                          >
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <h3 className="text-white font-black text-base sm:text-lg">
                        {slide.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-4">
                        {slide.description}
                      </p>
                    </div>

                    {/* Action Buttons: WhatsApp Teklif Al & Detaylar */}
                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <a
                        href={`https://wa.me/905385926467?text=${encodeURIComponent(`Merhaba, ${slide.title} (${slide.type}) hizmetiniz için teklif ve detaylı bilgi almak istiyorum.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#25D366]/25 hover:scale-105 transition-all cursor-pointer"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                        <span>WhatsApp Teklif Al</span>
                      </a>

                      {slide.link && (
                        <Link
                          href={slide.link}
                          scroll={false}
                          onClick={() => {
                            if (onSelectService && slide.serviceId) {
                              onSelectService(slide.serviceId);
                            }
                            if (typeof window !== 'undefined') {
                              const el = document.getElementById('secilen-hizmet');
                              if (el) {
                                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }
                            }
                          }}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition-all hover:scale-105 cursor-pointer"
                        >
                          <span>Detaylar</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </CardHoverRevealContent>
                </CardHoverReveal>
              ))}
            </ScrollXCarouselWrap>
          </div>

          {/* Progress Bar with Indicator */}
          <div className="max-w-7xl w-full mx-auto px-6 z-10">
            <div className="flex items-center justify-between text-xs text-[#555555] font-mono mb-2">
              <span>01 / 0{slides.length}</span>
              <span className="text-[#E50914] font-bold">Yatay Kaydırma İlerlemesi</span>
              <span>0{slides.length} / 0{slides.length}</span>
            </div>
            <ScrollXCarouselProgress
              className="bg-[#E5E5E5] h-1.5 rounded-full overflow-hidden"
              progressStyle="size-full bg-[#E50914] rounded-full shadow-[0_0_10px_#E50914]"
            />
          </div>
        </ScrollXCarouselContainer>
      </ScrollXCarousel>
    </div>
  );
}

export default function DemoOne() {
  return <YazilimScrollCarousel />;
}

export { DemoOne };
