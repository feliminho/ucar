'use client';

import React from 'react';
import Link from 'next/link';
import ServerPricingSection from '@/components/ui/server-pricing';
import {
  Server,
  Cpu,
  HardDrive,
  ShieldCheck,
  Zap,
  Check,
  ArrowRight,
  Sparkles,
  Layers,
  Database,
  Activity,
  Star,
} from 'lucide-react';

interface ComparisonFeature {
  name: string;
  vds: string;
  reseller: string;
  dedicated: string;
  vdsCheck?: boolean;
  resellerCheck?: boolean;
  dedicatedCheck?: boolean;
  vdsCross?: boolean;
  resellerCross?: boolean;
  dedicatedCross?: boolean;
  stars?: number;
}

const COMPARISON_ROWS: ComparisonFeature[] = [
  {
    name: 'İşlemci',
    vds: 'Paylaşımlı vCPU',
    reseller: 'CloudLinux Optimize',
    dedicated: 'Özel Intel/AMD',
  },
  {
    name: 'RAM',
    vds: '2-32 GB',
    reseller: '4-16 GB',
    dedicated: '16-256 GB',
  },
  {
    name: 'Depolama',
    vds: 'SSD 40-500 GB',
    reseller: 'SSD 100-500 GB',
    dedicated: 'SSD/NVMe 500-2TB',
  },
  {
    name: 'Trafik/Bandwidth',
    vds: 'Sınırsız*',
    reseller: 'Sınırsız*',
    dedicated: 'Sınırsız',
  },
  {
    name: 'Root Erişimi',
    vds: '',
    reseller: '',
    dedicated: '',
    vdsCheck: true,
    resellerCross: true,
    dedicatedCheck: true,
  },
  {
    name: 'cPanel/WHM',
    vds: 'Opsiyonel',
    reseller: '',
    dedicated: 'Opsiyonel',
    resellerCheck: true,
  },
  {
    name: 'CloudLinux',
    vds: 'Opsiyonel',
    reseller: '',
    dedicated: 'Opsiyonel',
    resellerCheck: true,
  },
  {
    name: 'LiteSpeed WebServer',
    vds: 'Opsiyonel',
    reseller: '',
    dedicated: 'Opsiyonel',
    resellerCheck: true,
  },
  {
    name: 'Ana Sunucu Yönetimi',
    vds: '',
    reseller: '',
    dedicated: '',
    vdsCheck: true,
    resellerCheck: true,
    dedicatedCheck: true,
  },
  {
    name: 'Donanım Değişikliği',
    vds: 'Kolay',
    reseller: 'Kolay',
    dedicated: 'Karmaşık',
  },
  {
    name: 'Maliyet',
    vds: '★★',
    reseller: '★★★',
    dedicated: '★★★★★',
    stars: 2,
  },
  {
    name: 'En İyi Kullanım',
    vds: 'Çeşitli web projeleri, uygulamalar',
    reseller: 'Hosting satışı, web ajanslar',
    dedicated: 'Yüksek trafik, veritabanı, kurumsal',
  },
];

export default function SunucuBarindirmaPage() {
  return (
    <main className="min-h-screen bg-[#F9F9F9] text-[#111111]">
      
      {/* 1. HERO SECTION WITH SERVER BACKGROUND IMAGE */}
      <section className="relative min-h-[460px] lg:min-h-[520px] flex flex-col justify-between text-white py-12 px-6 sm:px-10 lg:px-12 border-b border-slate-800 overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/server-hero.jpg"
            alt="Sunucu Barındırma & Altyapı"
            className="w-full h-full object-cover object-center"
          />
          {/* Multi-layer Dark Gradient for optimal text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D]/95 via-[#0F172A]/85 to-[#0A0F1D]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-[#0A0F1D]/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <div className="max-w-3xl text-left">
            <h1
              style={{ color: '#F9F9F9' }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight drop-shadow-md"
            >
              Sunucu Barındırma & <br />
              <span className="text-[#E50914]">
                Yüksek Performanslı Altyapı
              </span>
            </h1>

            <p
              style={{ color: '#F4F4F0' }}
              className="text-base sm:text-lg mt-4 leading-relaxed max-w-2xl font-medium drop-shadow-sm opacity-95"
            >
              VDS / VPS sanal sunuculardan adanmış fiziksel sunuculara kadar tam root erişimi, %100 NVMe SSD hız ve 1 Gbps kesintisiz bağlantı.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="#sunucu-paketleri"
                className="flex items-center gap-2 rounded-2xl bg-[#E50914] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#E50914]/30 hover:bg-[#B91C1C] hover:scale-105 transition-all cursor-pointer"
              >
                <span>Paketleri İncele</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#karsilastirma-tablosu"
                className="flex items-center gap-2 rounded-2xl border border-white/20 bg-slate-900/80 px-7 py-3.5 text-sm font-bold text-slate-200 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md cursor-pointer"
              >
                <span>Özellikler & Karşılaştırma</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC SHADCN PRICING COMPONENT FOR VDS & DEDICATED */}
      <ServerPricingSection />

      {/* 3. DETAILED COMPARISON TABLE SECTION (MATCHING USER PNG EXACTLY) */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#E5E5E5]" id="karsilastirma-tablosu">
        <div className="mx-auto max-w-7xl">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
              Sunucu & Hosting Karşılaştırma Tablosu
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-2">
              VDS/VPS, Reseller Hosting ve Fiziksel Sunucuların teknik donanım ve yazılım farklılıklarını inceleyin.
            </p>
          </div>

          {/* TABLE CONTAINER */}
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl bg-white -mx-2 sm:mx-0">
            <table className="w-full text-left border-collapse min-w-[620px] sm:min-w-[760px]">
              
              {/* TABLE HEADER WITH #E50914 BACKGROUND AND #F9F9F9 BROKEN WHITE TEXT */}
              <thead>
                <tr className="text-xs sm:text-sm font-black text-center bg-[#E50914] text-[#F9F9F9] shadow-md">
                  <th className="py-3.5 sm:py-4 px-3 sm:px-6 text-left w-1/4 uppercase tracking-wider rounded-tl-2xl text-[#F9F9F9]">
                    Özellikler
                  </th>
                  <th className="py-3.5 sm:py-4 px-3 sm:px-6 w-1/4 uppercase tracking-wider text-[#F9F9F9]">
                    VDS/VPS
                  </th>
                  <th className="py-3.5 sm:py-4 px-3 sm:px-6 w-1/4 uppercase tracking-wider text-[#F9F9F9]">
                    Reseller Hosting
                  </th>
                  <th className="py-3.5 sm:py-4 px-3 sm:px-6 w-1/4 uppercase tracking-wider rounded-tr-2xl text-[#F9F9F9]">
                    Fiziksel Sunucu
                  </th>
                </tr>
              </thead>

              {/* TABLE BODY */}
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                {/* 1. İşlemci */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-bold text-slate-900">İşlemci</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium">Paylaşımlı vCPU</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium">CloudLinux Optimize</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium">Özel Intel/AMD</td>
                </tr>

                {/* 2. RAM */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-bold text-slate-900">RAM</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium">2-32 GB</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium">4-16 GB</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium">16-256 GB</td>
                </tr>

                {/* 3. Depolama */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-bold text-slate-900">Depolama</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium">SSD 40-500 GB</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium">SSD 100-500 GB</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium">SSD/NVMe 500-2TB</td>
                </tr>

                {/* 4. Trafik/Bandwidth */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-bold text-slate-900">Trafik/Bandwidth</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium">Sınırsız*</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium">Sınırsız*</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium">Sınırsız</td>
                </tr>

                {/* 5. Root Erişimi */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-bold text-slate-900">Root Erişimi</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 mx-auto stroke-[2.5]" />
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                    <span className="text-red-500 font-bold text-base sm:text-lg">✕</span>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 mx-auto stroke-[2.5]" />
                  </td>
                </tr>

                {/* 6. cPanel/WHM */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-bold text-slate-900">cPanel/WHM</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium text-slate-600">Opsiyonel</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 mx-auto stroke-[2.5]" />
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium text-slate-600">Opsiyonel</td>
                </tr>

                {/* 7. CloudLinux */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-bold text-slate-900">CloudLinux</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium text-slate-600">Opsiyonel</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 mx-auto stroke-[2.5]" />
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium text-slate-600">Opsiyonel</td>
                </tr>

                {/* 8. LiteSpeed WebServer */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-bold text-slate-900">LiteSpeed WebServer</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium text-slate-600">Opsiyonel</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 mx-auto stroke-[2.5]" />
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium text-slate-600">Opsiyonel</td>
                </tr>

                {/* 9. Ana Sunucu Yönetimi */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-bold text-slate-900">Ana Sunucu Yönetimi</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 mx-auto stroke-[2.5]" />
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 mx-auto stroke-[2.5]" />
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 mx-auto stroke-[2.5]" />
                  </td>
                </tr>

                {/* 10. Donanım Değişikliği */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-bold text-slate-900">Donanım Değişikliği</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium">Kolay</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium">Kolay</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-medium">Karmaşık</td>
                </tr>

                {/* 11. Maliyet (Stars) */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-bold text-slate-900">Maliyet</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center text-amber-500 font-bold text-xs sm:text-sm tracking-wider">
                    ★★
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center text-amber-500 font-bold text-xs sm:text-sm tracking-wider">
                    ★★★
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center text-amber-500 font-bold text-xs sm:text-sm tracking-wider">
                    ★★★★★
                  </td>
                </tr>

                {/* 12. En İyi Kullanım */}
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3 sm:py-4 px-3 sm:px-6 font-bold text-slate-900">En İyi Kullanım</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center text-xs leading-relaxed text-slate-600">
                    Çeşitli web projeleri, uygulamalar
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center text-xs leading-relaxed text-slate-600">
                    Hosting satışı, web ajanslar
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-6 text-center text-xs leading-relaxed text-slate-600">
                    Yüksek trafik, veritabanı, kurumsal
                  </td>
                </tr>

                {/* 13. Teklif Al Butonları */}
                <tr className="bg-slate-50/50">
                  <td className="py-4 sm:py-5 px-3 sm:px-6"></td>
                  <td className="py-4 sm:py-5 px-3 sm:px-6 text-center">
                    <Link
                      href="/kurumsal/iletisim?paket=VDS/VPS"
                      className="inline-block px-4 sm:px-6 py-2 rounded-xl border border-[#E50914] bg-white text-xs font-bold text-[#E50914] hover:bg-[#E50914] hover:text-white transition-all shadow-xs"
                    >
                      Teklif Alın
                    </Link>
                  </td>
                  <td className="py-4 sm:py-5 px-3 sm:px-6 text-center">
                    <Link
                      href="/kurumsal/iletisim?paket=Reseller%20Hosting"
                      className="inline-block px-4 sm:px-6 py-2 rounded-xl border border-[#E50914] bg-white text-xs font-bold text-[#E50914] hover:bg-[#E50914] hover:text-white transition-all shadow-xs"
                    >
                      Teklif Alın
                    </Link>
                  </td>
                  <td className="py-4 sm:py-5 px-3 sm:px-6 text-center">
                    <Link
                      href="/kurumsal/iletisim?paket=Fiziksel%20Sunucu"
                      className="inline-block px-4 sm:px-6 py-2 rounded-xl border border-[#E50914] bg-white text-xs font-bold text-[#E50914] hover:bg-[#E50914] hover:text-white transition-all shadow-xs"
                    >
                      Teklif Alın
                    </Link>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <div className="mt-3 text-left text-[11px] text-slate-500 italic">
            * Adil kullanım politikası uygulanır
          </div>

        </div>
      </section>

      {/* 4. TECHNICAL HARDWARE SPECS */}
      <section className="py-16 px-6 bg-[#F9F9F9]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="rounded-3xl border border-[#E5E5E5] bg-white p-7 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#E50914] mb-4 border border-red-100">
                <Cpu className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-[#111111] mb-1.5">Intel Xeon & AMD EPYC</h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Yüksek frekanslı çok çekirdekli kurumsal işlemciler ile minimum gecikme süresi ve maksimum işlem gücü.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E5E5E5] bg-white p-7 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#111111] mb-4 border border-slate-200">
                <HardDrive className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-[#111111] mb-1.5">Enterprise NVMe SSD RAID</h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Verilerinizin güvenliği için donanımsal RAID denetleyicili, 7.000 MB/s okuma hızına sahip kurumsal diskler.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E5E5E5] bg-white p-7 shadow-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#E50914] mb-4 border border-red-100">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-[#111111] mb-1.5">1 Tbps+ Donanımsal DDoS Koruma</h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Yurt içi ve yurt dışı hatlarda Layer 3, Layer 4 ve Layer 7 volumetrik saldırılara karşı anında otomatik filtreleme.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <section className="py-14 bg-[#111111] text-white border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-white">Özel Projeniz İçin Donanım Konfigürasyonu mu Gerekiyor?</h4>
            <p className="text-xs text-slate-400 mt-1">Sistem mühendislerimizle doğrudan görüşerek size özel sunucu mimarisi hazırlayalım.</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/905385926467?text=Merhaba,%20özel%20sunucu%20yapılandırması%20hakkında%20görüşmek%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl border border-slate-700 bg-white/10 text-white font-bold text-xs hover:bg-white/20 transition-all"
            >
              WhatsApp Destek
            </a>
            <Link
              href="/kurumsal/iletisim"
              className="px-7 py-3.5 rounded-2xl bg-[#E50914] text-white font-bold text-xs shadow-lg shadow-[#E50914]/25 hover:bg-[#B91C1C] hover:scale-105 transition-all"
            >
              Teklif Talebi Oluştur
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
