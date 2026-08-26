'use client';

import React from 'react';
import { ContainerScroll, CardSticky } from '@/components/ui/cards-stack';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Code2, Server, Headphones, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const WHY_US_CARDS = [
  {
    id: 'why-1',
    num: '01',
    title: 'Özel Mimari & %100 Kaynak Kod Teslimi',
    description:
      'Hazır şablonlar veya kısıtlayıcı kütüphaneler yerine, şirketinizin iş süreçlerine özel sıfırdan yazılım geliştiriyoruz. Tüm kaynak kodlar ve telif hakları eksiksiz şirketinizin mülkiyetine devredilir.',
    icon: <Code2 className="h-5 w-5 text-[#E50914]" />,
    badge: 'Yazılım Güvencesi',
    accent: '#E50914',
  },
  {
    id: 'why-2',
    num: '02',
    title: 'Tier III İstanbul Veri Merkezi & %99.98 SLA',
    description:
      'Yüksek hızlı 1 Gbps yedekli fiber hatlar, paylaşımsız donanım ve kurumsal Tier III veri merkezi güvencesiyle sunucularınız 365 gün kesintisiz yayında kalır.',
    icon: <Server className="h-5 w-5 text-[#111111]" />,
    badge: 'Sunucu Altyapısı',
    accent: '#111111',
  },
  {
    id: 'why-3',
    num: '03',
    title: '1 Tbps+ Donanımsal DDoS & Siber Güvenlik',
    description:
      'Gelişmiş donanımsal güvenlik duvarları (WAF) ve Layer 7 filtreleme altyapısıyla siteleriniz ve veri tabanlarınız olası tüm siber saldırılara karşı 7/24 korunur.',
    icon: <ShieldCheck className="h-5 w-5 text-[#E50914]" />,
    badge: 'Siber Kalkan',
    accent: '#E50914',
  },
  {
    id: 'why-4',
    num: '04',
    title: 'Uçtan Uca Pazaryeri & Muhasebe Entegrasyonu',
    description:
      'Trendyol, Hepsiburada, Amazon, Logo ERP, Mikro ve GİB E-Fatura sistemlerini birbirine bağlayarak stok, sipariş ve faturalandırmanızı sıfır hatayla otomatikleştiriyoruz.',
    icon: <Zap className="h-5 w-5 text-[#111111]" />,
    badge: 'Otomasyon',
    accent: '#111111',
  },
  {
    id: 'why-5',
    num: '05',
    title: '7/24 Doğrudan Mühendis Seviyesinde Destek',
    description:
      'Otomatik bot yanıtlarına değil, doğrudan sistem ve yazılım mühendislerimize ulaşırsınız. Kritik durumlarda 15 dakika içinde çözüm garantisi sunuyoruz.',
    icon: <Headphones className="h-5 w-5 text-[#E50914]" />,
    badge: '7/24 SLA',
    accent: '#E50914',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-24 bg-[#F9F9F9] text-[#111111] border-t border-[#E5E5E5]" id="why-choose-us">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Sticky Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Sticky Title & Details */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E50914]/25 bg-[#E50914]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E50914] mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Kurumsal Farkımız
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4 sm:mb-6">
              Neden Bizi <br />
              <span className="text-[#E50914]">
                Tercih Etmelisiniz?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed mb-6 sm:mb-8">
              Yalnızca kod yazmıyor veya sunucu kiralamıyoruz; işletmenizin gelirini artıran, maliyetlerini düşüren ve kesintisiz çalışan güvenilir bir teknoloji ortaklığı sunuyoruz.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#111111]">
                <CheckCircle2 className="h-4 w-4 text-[#E50914] shrink-0" />
                <span>%100 Yerli & KVKK Uyumlu Altyapı</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#111111]">
                <CheckCircle2 className="h-4 w-4 text-[#E50914] shrink-0" />
                <span>30 Dakika İçinde Satış & Teknik Dönüş</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#111111]">
                <CheckCircle2 className="h-4 w-4 text-[#E50914] shrink-0" />
                <span>Tier III Veri Merkezi %99.98 SLA Garantisi</span>
              </div>
            </div>

            <Link
              href="/kurumsal/iletisim"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#E50914] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#E50914]/25 hover:bg-[#B91C1C] hover:scale-105 transition-all cursor-pointer"
            >
              <span>Hemen Projenizi Başlatın</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right Column: Stacked Deck of Cards */}
          <div className="lg:col-span-7 pt-0">
            <ContainerScroll className="space-y-8 sm:space-y-10 pb-8">
              {WHY_US_CARDS.map((card, index) => (
                <CardSticky
                  key={card.id}
                  index={index}
                  incrementY={22}
                  className="rounded-3xl border border-[#E5E5E5] bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/50 transition-all hover:border-[#E50914]/40"
                >
                  {/* Top Bar: Icon + Badge + Step Number */}
                  <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-[#E5E5E5]">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5]"
                        style={{ color: card.accent }}
                      >
                        {card.icon}
                      </div>
                      <span className="rounded-full bg-[#F4F4F0] border border-[#E5E5E5] px-3 py-1 text-xs font-mono font-bold text-[#111111]">
                        {card.badge}
                      </span>
                    </div>

                    {/* Step Number Badge */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#777777] hidden sm:inline">ADIM</span>
                      <span
                        className="font-mono text-xl sm:text-2xl font-black rounded-xl px-2.5 py-0.5 bg-[#F9F9F9] border border-[#E5E5E5]"
                        style={{ color: card.accent }}
                      >
                        {card.num}
                      </span>
                    </div>
                  </div>

                  {/* Card Title & Description */}
                  <h3 className="text-lg sm:text-2xl font-bold text-[#111111] mb-2 sm:mb-3">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed">
                    {card.description}
                  </p>
                </CardSticky>
              ))}
            </ContainerScroll>
          </div>

        </div>

      </div>
    </section>
  );
}
