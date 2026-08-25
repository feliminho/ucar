'use client';

import React from 'react';
import { ContainerScroll, CardSticky } from '@/components/ui/cards-stack';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Code2, Server, Headphones } from 'lucide-react';
import Link from 'next/link';

const WHY_US_CARDS = [
  {
    id: 'why-1',
    num: '01',
    title: 'Özel Mimari & %100 Kaynak Kod Teslimi',
    description:
      'Hazır şablonlar veya kısıtlayıcı kütüphaneler yerine, şirketinizin iş süreçlerine özel sıfırdan yazılım geliştiriyoruz. Tüm kaynak kodlar ve telif hakları eksiksiz şirketinize devredilir.',
    icon: <Code2 className="h-5 w-5 text-cyan-400" />,
    badge: 'Yazılım Güvencesi',
    accent: '#00F5D4',
  },
  {
    id: 'why-2',
    num: '02',
    title: 'Tier III İstanbul Veri Merkezi & %99.98 SLA',
    description:
      'Yüksek hızlı 1 Gbps yedekli fiber hatlar, paylaşımsız donanım ve kurumsal Tier III veri merkezi güvencesiyle sunucularınız 365 gün kesintisiz yayında kalır.',
    icon: <Server className="h-5 w-5 text-blue-400" />,
    badge: 'Sunucu Altyapısı',
    accent: '#38BDF8',
  },
  {
    id: 'why-3',
    num: '03',
    title: '1 Tbps+ Donanımsal DDoS & Siber Güvenlik',
    description:
      'Gelişmiş donanımsal güvenlik duvarları (WAF) ve Layer 7 filtreleme altyapısıyla siteleriniz ve veri tabanlarınız olası tüm siber saldırılara karşı 7/24 korunur.',
    icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
    badge: 'Siber Kalkan',
    accent: '#10B981',
  },
  {
    id: 'why-4',
    num: '04',
    title: 'Uçtan Uca Pazaryeri & Muhasebe Entegrasyonu',
    description:
      'Trendyol, Hepsiburada, Amazon, Logo ERP, Mikro ve GİB E-Fatura sistemlerini birbirine bağlayarak stok, sipariş ve faturalandırmanızı sıfır hatayla otomatikleştiriyoruz.',
    icon: <Zap className="h-5 w-5 text-amber-400" />,
    badge: 'Otomasyon',
    accent: '#F59E0B',
  },
  {
    id: 'why-5',
    num: '05',
    title: '7/24 Doğrudan Mühendis Seviyesinde Destek',
    description:
      'Otomatik yanıtlara değil, doğrudan sistem ve yazılım mühendislerimize ulaşırsınız. Kritik durumlarda 15 dakika içinde çözüm garantisi sunuyoruz.',
    icon: <Headphones className="h-5 w-5 text-indigo-400" />,
    badge: '7/24 SLA',
    accent: '#818CF8',
  },
];

export function WhyChooseUs() {
  return (
    <section className="pt-20 pb-16 bg-[#070E1B] border-t border-slate-800/80" id="why-choose-us">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Sticky 2-Column Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Sticky Title & Overview */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 pt-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-[#0B1528] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-5 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Bölüm 2: Tercih Sebepleri
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Neden Bizi <br />
              <span className="bg-gradient-to-r from-[#00C2FF] via-[#06B6D4] to-[#00F5D4] bg-clip-text text-transparent">
                Tercih Etmelisiniz?
              </span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed mb-8">
              Yalnızca kod yazmıyor veya sunucu kiralamıyoruz; işletmenizin gelirini artıran, maliyetlerini düşüren ve kesintisiz çalışan güvenilir bir teknoloji ortaklığı sunuyoruz.
            </p>

            <div className="flex flex-col gap-3">
              <Link
                href="/kurumsal/iletisim"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00C2FF] to-[#00F5D4] px-6 py-3.5 text-sm font-bold text-[#070E1B] shadow-xl shadow-cyan-500/20 hover:scale-105 transition-all w-fit"
              >
                <span>Hemen Projenizi Başlatın</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Stacked Deck (Kapanan kartların sadece tab numaraları üstte görünür) */}
          <div className="lg:col-span-7 pt-0">
            <ContainerScroll className="space-y-12 pb-8">
              {WHY_US_CARDS.map((card, index) => {
                // Her kart kapandığında üstte 48px'lik sekme başlığı ve numarası açık kalacak şekilde kademelendirildi
                const stickyTopOffset = 80 + index * 52;

                return (
                  <CardSticky
                    key={card.id}
                    index={index}
                    style={{
                      top: `${stickyTopOffset}px`,
                      zIndex: index + 10,
                    }}
                    className="rounded-3xl border border-slate-700/80 bg-[#0B1528] p-7 shadow-2xl backdrop-blur-2xl transition-all"
                  >
                    {/* Top Tab Bar (Always visible when stacked) */}
                    <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800/80">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-slate-700"
                          style={{ color: card.accent }}
                        >
                          {card.icon}
                        </div>
                        <span className="rounded-full bg-slate-800/90 px-3 py-1 text-xs font-mono font-bold text-slate-300">
                          {card.badge}
                        </span>
                      </div>

                      {/* Number Tab (Always sticks out visibly when cards overlap) */}
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-slate-400">FAZ</span>
                        <span
                          className="font-mono text-2xl font-black rounded-lg px-2.5 py-0.5 bg-slate-900 border border-slate-700/60 shadow-inner"
                          style={{ color: card.accent }}
                        >
                          {card.num}
                        </span>
                      </div>
                    </div>

                    {/* Card Body Content */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      {card.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {card.description}
                    </p>
                  </CardSticky>
                );
              })}
            </ContainerScroll>
          </div>

        </div>

      </div>
    </section>
  );
}
