'use client';

import Link from 'next/link';
import { CoreServiceCards } from '@/components/sections/CoreServiceCards';
import { WhatWeDo } from '@/components/sections/WhatWeDo';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import Contact from '@/components/ui/contact-01';
import { Accordion04 } from '@/components/ui/accordion-04';
import { DomainSearchInput } from '@/components/ui/domain-search-input';
import { InteractiveSelector } from '@/components/ui/interactive-selector';
import { Sparkles, Server, Shield, Cloud, Gauge, HelpCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F9F9F9] text-[#111111]">
      
      {/* 1. GİRİŞ HERO: FULL-SCREEN HOVER INTERACTIVE SELECTOR */}
      <section className="relative border-b border-[#222222] bg-[#0A0A0A]">
        <InteractiveSelector />
      </section>

      {/* Feature 4-Pillar SLA & Infrastructure Strip */}
      <section className="relative py-8 bg-[#F9F9F9]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-[#E5E5E5] bg-white p-5 shadow-lg shadow-slate-200/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E5E5]">
              
              {/* 1. Uptime */}
              <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4 first:pl-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#E50914] border border-red-100 flex-shrink-0">
                  <Server className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#111111]">%99.98 SLA</span>
                  <span className="text-xs text-[#555555]">Uptime Garantisi</span>
                </div>
              </div>

              {/* 2. DDoS */}
              <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-[#111111] border border-slate-200 flex-shrink-0">
                  <Shield className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#111111]">DDoS Koruması</span>
                  <span className="text-xs text-[#555555]">Üst Düzey Güvenlik</span>
                </div>
              </div>

              {/* 3. Backup */}
              <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-[#E50914] border border-red-100 flex-shrink-0">
                  <Cloud className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#111111]">Günlük Yedekleme</span>
                  <span className="text-xs text-[#555555]">Ücretsiz Backup</span>
                </div>
              </div>

              {/* 4. Port */}
              <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-[#111111] border border-slate-200 flex-shrink-0">
                  <Gauge className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#111111]">1 Gbps Port</span>
                  <span className="text-xs text-[#555555]">Yüksek Hızlı Bağlantı</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. 4 CORE SERVICE CARDS */}
      <CoreServiceCards />

      {/* 3. SMOOTH WHITE CONTAINER: DOMAIN SEARCH */}
      <section className="relative z-20 bg-white text-[#111111] rounded-t-[40px] pt-14 pb-16 px-6 shadow-xl border-t border-[#E5E5E5]">
        <div className="mx-auto max-w-5xl">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
              Alan Adınızı Hemen Sorgulayın
            </h2>
            
            {/* Extension Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/alan-adi" className="rounded-full bg-red-50 border border-red-200 px-3.5 py-1.5 text-xs font-mono font-bold text-[#E50914] hover:bg-[#E50914] hover:text-white transition-all shadow-xs">
                .com
              </Link>
              <Link href="/alan-adi" className="rounded-full bg-[#F4F4F0] border border-[#E5E5E5] px-3.5 py-1.5 text-xs font-mono font-semibold text-[#111111] hover:border-[#E50914] hover:text-[#E50914] hover:bg-red-50 transition-all shadow-xs">
                .net
              </Link>
              <Link href="/alan-adi" className="rounded-full bg-[#F4F4F0] border border-[#E5E5E5] px-3.5 py-1.5 text-xs font-mono font-semibold text-[#111111] hover:border-[#E50914] hover:text-[#E50914] hover:bg-red-50 transition-all shadow-xs">
                .org
              </Link>
              <Link href="/alan-adi" className="rounded-full bg-red-50 border border-red-200 px-3.5 py-1.5 text-xs font-mono font-semibold text-[#E50914] hover:bg-[#E50914] hover:text-white transition-all shadow-xs">
                .com.tr
              </Link>
              <Link href="/alan-adi" className="rounded-full bg-[#F4F4F0] border border-[#E5E5E5] px-3.5 py-1.5 text-xs font-mono font-semibold text-[#111111] hover:border-[#E50914] hover:text-[#E50914] hover:bg-red-50 transition-all shadow-xs">
                .net.tr
              </Link>
            </div>
          </div>

          {/* Integrated InputGroup Domain Search Component */}
          <DomainSearchInput />

        </div>
      </section>

      {/* TEKNOLOJİ MARQUEE */}
      <div className="overflow-hidden border-y border-[#E5E5E5] bg-[#F4F4F0] py-5">
        <div className="animate-marquee flex gap-8 whitespace-nowrap">
          {[
            'Trendyol Pazaryeri', 'Hepsiburada API', 'Amazon TR', 'Logo ERP',
            'Paraşüt', 'Mikro Yazılım', 'Nebim V3', 'GİB E-Fatura',
            'Docker', 'Kubernetes', 'Nginx', 'Redis', 'OpenAI', 'Gemini', 'Claude', 'MySQL'
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-5 py-2 text-xs font-mono font-semibold text-[#111111] shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#E50914]" />
              <span>{item}</span>
            </div>
          ))}
          {/* Duplicate for infinite loop */}
          {[
            'Trendyol Pazaryeri', 'Hepsiburada API', 'Amazon TR', 'Logo ERP',
            'Paraşüt', 'Mikro Yazılım', 'Nebim V3', 'GİB E-Fatura',
            'Docker', 'Kubernetes', 'Nginx', 'Redis', 'OpenAI', 'Gemini', 'Claude', 'MySQL'
          ].map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-5 py-2 text-xs font-mono font-semibold text-[#111111] shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#E50914]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. NE YAPIYORSUNUZ? (Faaliyet Alanlarımız) */}
      <WhatWeDo />

      {/* 5. NEDEN BİZİ TERCİH ETMELİSİNİZ? (Sticky Cards Stack) */}
      <WhyChooseUs />

      {/* 6. SIKÇA SORULAN SORULAR (SSS: Accordion04) */}
      <section className="py-24 bg-[#F9F9F9] border-t border-[#E5E5E5]" id="faq">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E50914]/25 bg-[#E50914]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E50914] mb-4 shadow-xs">
              <HelpCircle className="h-3.5 w-3.5" />
              Sıkça Sorulan Sorular
            </div>
            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-[#111111] tracking-tight mb-4">
              Aklınıza Takılan Sorular
            </h2>
            <p className="text-base text-[#4A4A4A]">
              Yazılım süreçlerimiz, Tier III sunucu altyapımız, teslimat ve destek standartlarımız hakkında en çok merak edilenler.
            </p>
          </div>

          <Accordion04 />
        </div>
      </section>

      {/* 7. SİZE NASIL ULAŞABİLİRİM? (contact-01) */}
      <Contact />

    </main>
  );
}
