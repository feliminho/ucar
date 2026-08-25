'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import PricingSection5 from '@/components/ui/pricing';
import {
  Check,
  Zap,
  HardDrive,
  ShieldCheck,
  Lock,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Terminal,
} from 'lucide-react';

interface HostingPackage {
  id: string;
  name: string;
  category: 'ekonomik' | 'profesyonel' | 'reseller';
  period: 'Yıllık' | 'Aylık';
  price: string;
  popular?: boolean;
  badge?: string;
  features: string[];
}

const ALL_PACKAGES: HostingPackage[] = [
  // 1. EKONOMİK SSD HOSTING
  {
    id: 'eko-1',
    name: 'EKO SSD 1',
    category: 'ekonomik',
    period: 'Yıllık',
    price: '$11.25',
    features: [
      '1GB M2 SSD Disk',
      '2 GB RAM',
      'Sınırsız Aylık Trafik',
      '1 Adet Site Barındırma',
      '100 E-Mail Adresi',
      'Sınırsız FTP Hesabı',
      '2 Adet MySQL',
      'Anında Kurulum',
      '%100 CPU İzni',
      'PHP 5.6 - 8.3 Desteği',
      'Ortak PHP Ayarları',
      'Git Yönetimi',
      'WP Araç Yönetimi (WordPress Toolkit)',
      'Laravel Toolkit',
      'Node.js Desteği',
      'Ücretsiz SSL Sertifikası!',
    ],
  },
  {
    id: 'eko-2',
    name: 'EKO SSD 2',
    category: 'ekonomik',
    period: 'Yıllık',
    price: '$21.80',
    features: [
      '2GB M2 SSD Disk',
      '2 GB RAM',
      'Sınırsız Aylık Trafik',
      '1 Adet Site Barındırma',
      '4 Adet SubDomain',
      '100 E-Mail Adresi',
      'Sınırsız FTP Hesabı',
      '4 Adet MySQL',
      'Anında Kurulum',
      '%100 CPU İzni',
      'PHP 5.6 - 8.3 Desteği',
      'Ortak PHP Ayarları',
      'Git Yönetimi',
      'WP Araç Yönetimi',
      'Laravel Toolkit',
      'Node.js Desteği',
      'Ücretsiz SSL Sertifikası!',
    ],
  },
  {
    id: 'eko-3',
    name: 'EKO SSD 3',
    category: 'ekonomik',
    period: 'Yıllık',
    price: '$23.99',
    features: [
      '3GB M2 SSD Disk',
      '2 GB RAM',
      'Sınırsız Aylık Trafik',
      '1 Adet Site Barındırma',
      '4 Adet SubDomain',
      '100 E-Mail Adresi',
      'Sınırsız FTP Hesabı',
      '5 Adet MySQL',
      'Anında Kurulum',
      '%100 CPU İzni',
      'PHP 5.6 - 8.3 Desteği',
      'Ortak PHP Ayarları',
      'Git Yönetimi',
      'WP Araç Yönetimi',
      'Laravel Toolkit',
      'Node.js Desteği',
      'Ücretsiz SSL Sertifikası!',
    ],
  },

  // 2. PROFESYONEL SSD HOSTING
  {
    id: 'pro-1',
    name: 'PRO SSD 1',
    category: 'profesyonel',
    period: 'Yıllık',
    price: '$28.75',
    features: [
      '2GB M2 SSD Disk',
      '4 GB RAM',
      'Sınırsız Aylık Trafik',
      '3 Adet Site Barındırma',
      '6 Adet SubDomain',
      '100 E-Mail Adresi',
      'Sınırsız FTP Hesabı',
      '5 Adet MySQL',
      'Anında Kurulum',
      '%100 CPU İzni',
      'PHP 5.6 - 8.3 Desteği',
      'Ortak PHP Ayarları',
      'Git Yönetimi',
      'WP Araç Yönetimi',
      'Laravel Toolkit',
      'Node.js Desteği',
      'Ücretsiz SSL Sertifikası!',
    ],
  },
  {
    id: 'pro-2',
    name: 'PRO SSD 2',
    category: 'profesyonel',
    period: 'Yıllık',
    price: '$48',
    popular: true,
    badge: 'POPÜLER',
    features: [
      '5GB M2 SSD Disk',
      '2 GB RAM',
      'Sınırsız Aylık Trafik',
      '5 Adet Site Barındırma',
      '10 Adet SubDomain',
      '100 E-Mail Adresi',
      '20 Adet MySQL',
      'Sınırsız FTP Hesabı',
      'Anında Kurulum',
      '%100 CPU İzni',
      'PHP 5.6 - 8.3 Desteği',
      'Ortak PHP Ayarları',
      'Git Yönetimi',
      'WP Araç Yönetimi',
      'Laravel Toolkit',
      'Node.js Desteği',
      'Ücretsiz SSL Sertifikası!',
    ],
  },
  {
    id: 'pro-3',
    name: 'PRO SSD 3',
    category: 'profesyonel',
    period: 'Yıllık',
    price: '$68.36',
    features: [
      '10GB M2 SSD Disk',
      '4 GB RAM',
      'Sınırsız Aylık Trafik',
      '10 Adet Site Barındırma',
      '10 Adet SubDomain',
      '100 E-Mail Adresi',
      '3 Adet MySQL',
      'Sınırsız FTP Hesabı',
      'Anında Kurulum',
      '%100 CPU İzni',
      'PHP 5.6 - 8.3 Desteği',
      'Ortak PHP Ayarları',
      'Git Yönetimi',
      'WP Araç Yönetimi',
      'Laravel Toolkit',
      'Node.js Desteği',
      'Ücretsiz SSL Sertifikası!',
    ],
  },

  // 3. BAYİ (RESELLER) HOSTING
  {
    id: 'bayi-l',
    name: 'L BAYİİ',
    category: 'reseller',
    period: 'Aylık',
    price: '$12',
    popular: true,
    badge: 'YÜKSEK KAPASİTE',
    features: [
      '15GB M2 SSD Disk',
      '6 GB RAM',
      'Sınırsız Aylık Trafik',
      '15 Adet Site Barındırma',
      'Sınırsız SubDomain',
      'Sınırsız E-Mail',
      'Sınırsız MySQL',
      'Sınırsız FTP Hesabı',
      'Anında Kurulum',
      '%100 CPU İzni',
      'PHP 5.6 - 8.3 Desteği',
      'Ortak PHP Ayarları',
      'Git Yönetimi',
      'WP Araç Yönetimi',
      'Laravel Toolkit',
      'Node.js Desteği',
      'Ücretsiz SSL Sertifikası!',
    ],
  },
];

function WebHostingContent() {
  const searchParams = useSearchParams();
  const kategoriParam = searchParams.get('kategori');

  const [activeTab, setActiveTab] = useState<'ekonomik' | 'profesyonel' | 'reseller' | 'all'>('all');

  useEffect(() => {
    if (kategoriParam === 'ekonomik') {
      setActiveTab('ekonomik');
    } else if (kategoriParam === 'profesyonel') {
      setActiveTab('profesyonel');
    } else if (kategoriParam === 'reseller') {
      setActiveTab('reseller');
    } else {
      setActiveTab('all');
    }
  }, [kategoriParam]);

  const displayedPackages =
    activeTab === 'all'
      ? ALL_PACKAGES
      : ALL_PACKAGES.filter((pkg) => pkg.category === activeTab);

  return (
    <>
      {/* 1. HERO PRICING COMPONENT (Monthly/Yearly Switch & NumberFlow) */}
      <PricingSection5 />

      {/* 2. DETAILED ALL PACKAGES SECTION WITH CATEGORY FILTER */}
      <section className="py-16 px-6 bg-[#F9F9F9] border-t border-[#E5E5E5]" id="all-packages">
        <div className="mx-auto max-w-7xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#E50914]/15 px-3 py-1 text-xs font-bold text-[#E50914] mb-2">
                <Sparkles className="h-3 w-3" />
                Detaylı Paket Listesi
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
                {activeTab === 'ekonomik'
                  ? 'Ekonomik SSD Hosting Paketleri'
                  : activeTab === 'profesyonel'
                  ? 'Profesyonel SSD Hosting Paketleri'
                  : activeTab === 'reseller'
                  ? 'Bayi (Reseller) Hosting Paketleri'
                  : 'Tüm Web Hosting Paketlerimiz'}
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'all'
                    ? 'bg-[#E50914] text-white shadow-md'
                    : 'bg-white border border-[#E5E5E5] text-[#111111] hover:border-[#111111]'
                }`}
              >
                Tümü
              </button>
              <button
                onClick={() => setActiveTab('ekonomik')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'ekonomik'
                    ? 'bg-[#E50914] text-white shadow-md'
                    : 'bg-white border border-[#E5E5E5] text-[#111111] hover:border-[#111111]'
                }`}
              >
                Ekonomik SSD
              </button>
              <button
                onClick={() => setActiveTab('profesyonel')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'profesyonel'
                    ? 'bg-[#E50914] text-white shadow-md'
                    : 'bg-white border border-[#E5E5E5] text-[#111111] hover:border-[#111111]'
                }`}
              >
                Profesyonel SSD
              </button>
              <button
                onClick={() => setActiveTab('reseller')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'reseller'
                    ? 'bg-[#E50914] text-white shadow-md'
                    : 'bg-white border border-[#E5E5E5] text-[#111111] hover:border-[#111111]'
                }`}
              >
                Bayi Reseller
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-3xl border bg-white p-8 transition-all hover:shadow-2xl hover:-translate-y-1.5 ${
                  pkg.popular
                    ? 'border-[#E50914] shadow-xl shadow-red-500/10 ring-2 ring-[#E50914]/20'
                    : 'border-[#E5E5E5] shadow-lg shadow-slate-200/40 hover:border-[#111111]'
                }`}
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#E50914] px-3.5 py-1 text-[10px] font-extrabold text-white tracking-wider uppercase shadow-md">
                    {pkg.badge}
                  </span>
                )}

                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-[#E5E5E5]">
                    <div>
                      <span className="text-[11px] font-bold text-[#E50914] uppercase tracking-wider font-mono">
                        {pkg.category === 'ekonomik'
                          ? 'Ekonomik SSD'
                          : pkg.category === 'profesyonel'
                          ? 'Profesyonel SSD'
                          : 'Bayi Reseller'}
                      </span>
                      <h3 className="text-2xl font-black text-[#111111]">{pkg.name}</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[#777777] block font-semibold">{pkg.period}</span>
                      <span className="text-2xl sm:text-3xl font-black text-[#E50914] font-mono">
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 text-xs text-[#4A4A4A] my-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <Check className="h-4 w-4 text-[#E50914] flex-shrink-0" />
                        <span className={feature.includes('SSL') || feature.includes('Disk') || feature.includes('RAM') ? 'font-bold text-[#111111]' : ''}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/kurumsal/iletisim?paket=${encodeURIComponent(pkg.name)}`}
                  className={`mt-4 w-full py-3.5 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md ${
                    pkg.popular
                      ? 'bg-[#E50914] text-white hover:bg-[#B91C1C] shadow-[#E50914]/25 hover:scale-[1.02]'
                      : 'bg-[#111111] text-white hover:bg-slate-800'
                  }`}
                >
                  <span>Hemen Sipariş Ver</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. TECHNICAL ADVANTAGES 4-GRID */}
      <section className="py-16 bg-white border-y border-[#E5E5E5]">
        <div className="mx-auto max-w-7xl px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E50914]/25 bg-[#E50914]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E50914] mb-3 shadow-xs">
              <Zap className="h-3.5 w-3.5" />
              Gelişmiş Altyapı
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
              Hosting Standartlarımız
            </h2>
            <p className="text-sm text-[#4A4A4A] mt-2">
              Tüm web hosting paketlerimizde kurumsal düzeyde hız ve güvenlik özellikleri dahildir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="rounded-3xl border border-[#E5E5E5] bg-[#F9F9F9] p-6 text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#E50914] mb-4 border border-red-100">
                <HardDrive className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-[#111111] mb-1.5">NVMe M2 SSD Depolama</h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Geleneksel SATA disklere göre 15 kat daha hızlı okuma ve yazma performansı.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E5E5E5] bg-[#F9F9F9] p-6 text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#111111] mb-4 border border-slate-200">
                <Terminal className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-[#111111] mb-1.5">Laravel & Node.js</h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Modern framework'ler, Git entegrasyonu ve PHP 5.6'dan 8.3'e anında sürüm değişimi.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E5E5E5] bg-[#F9F9F9] p-6 text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#E50914] mb-4 border border-red-100">
                <Lock className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-[#111111] mb-1.5">Ücretsiz Let's Encrypt SSL</h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Tüm siteleriniz için otomatik tanımlanan ve süresi doldukça yenilenen SSL sertifikası.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E5E5E5] bg-[#F9F9F9] p-6 text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#111111] mb-4 border border-slate-200">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-[#111111] mb-1.5">1 Tbps+ DDoS Filtreleme</h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Layer 3, 4 ve Layer 7 web uygulama güvenlik kalkanıyla 7/24 kesintisiz koruma.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WEB HOSTING FAQ */}
      <section className="py-20 bg-[#F9F9F9]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E50914]/25 bg-[#E50914]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E50914] mb-3 shadow-xs">
              <HelpCircle className="h-3.5 w-3.5" />
              Merak Edilenler
            </div>
            <h3 className="text-3xl font-extrabold text-[#111111]">
              Web Hosting Hakkında Sıkça Sorulanlar
            </h3>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-xs">
              <h4 className="font-bold text-base text-[#111111] mb-2">Hosting siparişim ne zaman aktif olur?</h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Kredi kartı ile yapılan tüm web hosting ve reseller siparişleri anında otomatik olarak kurulur ve cPanel giriş bilgileriniz e-posta adresinize gönderilir.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-xs">
              <h4 className="font-bold text-base text-[#111111] mb-2">Eski sitemi ücretsiz taşıyor musunuz?</h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Evet! Farklı bir firmada bulunan cPanel veya Plesk yedeklerinizi uzman ekibimiz hiçbir kesinti yaşatmadan ücretsiz olarak yeni sunucunuza aktarır.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-xs">
              <h4 className="font-bold text-base text-[#111111] mb-2">Reseller (Bayi) hosting ile kendi müşterilerime hosting satabilir miyim?</h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Evet. Size verilen WHM yönetim paneli üzerinden dilediğiniz disk ve trafik kotalarında bağımsız cPanel hesapları açabilir ve kendi müşterilerinize satabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <section className="py-14 bg-[#111111] text-white border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-white">Özel Bir Hosting Yapılandırmasına mı İhtiyacınız Var?</h4>
            <p className="text-xs text-slate-400 mt-1">Mühendislerimizle görüşerek şirketinize özel kaynak tahsisi planlayın.</p>
          </div>
          <Link
            href="/kurumsal/iletisim"
            className="px-8 py-3.5 rounded-2xl bg-[#E50914] text-white font-bold text-sm shadow-lg shadow-[#E50914]/25 hover:bg-[#B91C1C] hover:scale-105 transition-all"
          >
            Teklif & Danışmanlık Al
          </Link>
        </div>
      </section>
    </>
  );
}

export default function WebHostingPage() {
  return (
    <main className="min-h-screen bg-[#F9F9F9] text-[#111111]">
      <Suspense fallback={<div className="p-20 text-center text-[#111111]">Yükleniyor...</div>}>
        <WebHostingContent />
      </Suspense>
    </main>
  );
}
