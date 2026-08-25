'use client';

import Link from 'next/link';
import ElegantCarousel from '@/components/ui/elegant-carousel';
import { CoreServiceCards } from '@/components/sections/CoreServiceCards';
import { WhatWeDo } from '@/components/sections/WhatWeDo';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import Contact from '@/components/ui/contact-01';
import { Accordion04 } from '@/components/ui/accordion-04';
import { DomainSearchInput } from '@/components/ui/domain-search-input';
import { Sparkles, Server, Shield, Cloud, Gauge, HelpCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F9F9F9] text-[#111111]">
      
      {/* 1. GİRİŞ HERO: ELEGANT CAROUSEL */}
      <section className="relative border-b border-[#E5E5E5] bg-[#F9F9F9]">
        <ElegantCarousel />

        {/* Feature 4-Pillar Glass Strip Under Carousel */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 -mt-6 mb-12">
          <div className="rounded-2xl border border-[#E5E5E5] bg-white p-5 shadow-xl shadow-slate-200/50 backdrop-blur-xl">
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
              <span className="rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-mono font-bold text-[#E50914]">.com</span>
              <span className="rounded-full bg-[#F4F4F0] border border-[#E5E5E5] px-3 py-1 text-xs font-mono font-semibold text-[#111111]">.net</span>
              <span className="rounded-full bg-[#F4F4F0] border border-[#E5E5E5] px-3 py-1 text-xs font-mono font-semibold text-[#111111]">.org</span>
              <span className="rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-mono font-semibold text-[#E50914]">.com.tr</span>
              <span className="rounded-full bg-[#F4F4F0] border border-[#E5E5E5] px-3 py-1 text-xs font-mono font-semibold text-[#111111]">.net.tr</span>
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

      {/* FOOTER (UÇAR YAZILIM) */}
      <footer className="border-t border-[#1E2230] bg-[#111111] pt-16 pb-12 text-sm text-slate-300">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            
            {/* Logo */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <img
                  src="/logo.png"
                  alt="UÇAR YAZILIM"
                  className="h-10 w-auto max-w-[180px] object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-xs text-slate-400 leading-relaxed">
                Yüksek performanslı Tier III sunucu altyapıları ve işletmenize özel kurumsal yazılım çözümleri.
              </p>
            </div>

            {/* Kurumsal */}
            <div>
              <h4 className="font-bold text-white mb-4">Kurumsal</h4>
              <ul className="flex flex-col gap-2.5 text-xs">
                <li><Link href="/kurumsal/hakkimizda" className="hover:text-[#E50914] transition-colors">Hakkımızda</Link></li>
                <li><Link href="/kurumsal/blog" className="hover:text-[#E50914] transition-colors">Blog</Link></li>
                <li><Link href="/kurumsal/referanslar" className="hover:text-[#E50914] transition-colors">Referanslar</Link></li>
                <li><Link href="/kurumsal/iletisim" className="hover:text-[#E50914] transition-colors">İletişim</Link></li>
              </ul>
            </div>

            {/* Yazılım */}
            <div>
              <h4 className="font-bold text-white mb-4">Yazılım</h4>
              <ul className="flex flex-col gap-2.5 text-xs">
                <li><Link href="/yazilim/erp-crm" className="hover:text-[#E50914] transition-colors">ERP Sistemleri</Link></li>
                <li><Link href="/yazilim/erp-crm" className="hover:text-[#E50914] transition-colors">CRM Yönetimi</Link></li>
                <li><Link href="/yazilim/mobil-uygulama" className="hover:text-[#E50914] transition-colors">Mobil Uygulama</Link></li>
                <li><Link href="/yazilim/ozel-yazilim" className="hover:text-[#E50914] transition-colors">Özel Yazılım</Link></li>
                <li><Link href="/yazilim/yapay-zeka" className="hover:text-[#E50914] transition-colors">Yapay Zekâ</Link></li>
              </ul>
            </div>

            {/* Server */}
            <div>
              <h4 className="font-bold text-white mb-4">Server</h4>
              <ul className="flex flex-col gap-2.5 text-xs">
                <li><Link href="/web-hosting/ssd-hosting" className="hover:text-[#E50914] transition-colors">Hosting</Link></li>
                <li><Link href="/web-hosting/vds-sunucu" className="hover:text-[#E50914] transition-colors">NVMe VDS</Link></li>
                <li><Link href="/web-hosting/reseller-hosting" className="hover:text-[#E50914] transition-colors">Reseller</Link></li>
                <li><Link href="/e-posta/kurumsal-mail" className="hover:text-[#E50914] transition-colors">Cloud Mail</Link></li>
                <li><Link href="/web-hosting/co-location" className="hover:text-[#E50914] transition-colors">Co-Location</Link></li>
              </ul>
            </div>

            {/* İletişim */}
            <div>
              <h4 className="font-bold text-white mb-4">İletişim</h4>
              <div className="flex flex-col gap-2.5 text-xs mb-4 text-slate-300">
                <div>Telefon: +90 (850) 000 00 00</div>
                <div>Mail: info@ucaryazilim.com</div>
                <div>Adres: Maslak / İstanbul</div>
              </div>
              <div className="flex gap-3">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#E50914] hover:text-white transition-colors">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#E50914] hover:text-white transition-colors">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#E50914] hover:text-white transition-colors">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
              </div>
            </div>

          </div>

          <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
            © 2026 Uçar Yazılım. Tüm Hakları Saklıdır.
          </div>
        </div>
      </footer>

    </main>
  );
}
