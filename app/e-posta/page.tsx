'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Mail,
  ShieldCheck,
  Zap,
  Lock,
  Server,
  Users,
  HardDrive,
  ArrowRight,
  Check,
  Sparkles,
  Inbox,
  Send,
  Cloud,
} from 'lucide-react';

interface MailPlan {
  id: string;
  name: string;
  category: 'kurumsal-mail' | 'guvenlik-filtreleme';
  period: string;
  price: string;
  popular?: boolean;
  badge?: string;
  features: string[];
}

const ALL_MAIL_PLANS: MailPlan[] = [
  {
    id: 'mail-10',
    name: 'Cloud Mail 10',
    category: 'kurumsal-mail',
    period: 'Yıllık',
    price: '$24/yıl',
    features: [
      '10 Adet Kurumsal E-Posta Hesabı',
      'Hesap Başı 5 GB NVMe Bulut Depolama',
      'Outlook, Thunderbird & iOS/Android Uyumlu',
      'Webmail (Roundcube & Modern UI) Erişimi',
      'Gelişmiş Spam & Virüs Koruması (SpamAssassin)',
      'Otomatik Let’s Encrypt SSL Şifreleme',
      'SPF, DKIM, DMARC Kayıt Yapılandırması',
      '%99.9 E-Posta Teslimat Garantisi',
    ],
  },
  {
    id: 'mail-50',
    name: 'Cloud Mail 50',
    category: 'kurumsal-mail',
    period: 'Yıllık',
    price: '$79/yıl',
    popular: true,
    badge: 'EN ÇOK TERCİH EDİLEN',
    features: [
      '50 Adet Kurumsal E-Posta Hesabı',
      'Hesap Başı 10 GB NVMe Bulut Depolama',
      'Outlook, Thunderbird & iOS/Android Uyumlu',
      'Özel Yönetici Paneli & Kota Dağıtımı',
      'Anti-Spam & Gelişmiş Filtreleme Kalkanı',
      'Giden E-Posta IP İtibar Yönetimi',
      'Gelişmiş SPF, DKIM, DMARC & PTR Kayıtları',
      '7/24 Teknik E-Posta Desteği',
    ],
  },
  {
    id: 'mail-unlimited',
    name: 'Kurumsal Mail PRO (Sınırsız)',
    category: 'kurumsal-mail',
    period: 'Yıllık',
    price: '$149/yıl',
    features: [
      'Sınırsız E-Posta Hesabı Açabilme',
      '100 GB Toplam Paylaşımlı NVMe Havuzu',
      'Şirket Alan Adınıza Özel IP Adresi (Dedicated IP)',
      'Gelişmiş Anti-SpamGateway Filtreleme',
      'Otomatik Günlük E-Posta Arşivleme',
      'Outlook Takvim & Kişiler Senkronizasyonu (CalDAV/CardDAV)',
      'Öncelikli Kurumsal SLA Desteği',
      'Ücretsiz E-Posta Taşıma Hizmeti',
    ],
  },
  {
    id: 'spam-gateway',
    name: 'Premium Anti-Spam Gateway',
    category: 'guvenlik-filtreleme',
    period: 'Yıllık',
    price: '$49/yıl',
    popular: true,
    badge: 'TAM GÜVENLİK',
    features: [
      'Gelen & Giden Tüm E-Postaları Filtreleme',
      '%99.98 İstenmeyen E-Posta (Spam) Engelleme',
      'Gelişmiş Sıfır-Gün (Zero-Day) Virüs & Truva Atı Taraması',
      'Phishing & Oltalama Saldırılarına Karşı Koruma',
      'Karantina Yönetim Paneli & Günlük Raporlama',
      'Mevcut E-Posta Sunucunuzla (cPanel, Exchange, M365) Tam Uyum',
      'Sunucunuz Çökse Bile E-Postaları Havuzda Bekletme',
      'Karaliste (Blacklist) Düşme Riskini Sıfırlama',
    ],
  },
];

function EpostaContent() {
  const searchParams = useSearchParams();
  const paketParam = searchParams.get('paket');

  const [activeTab, setActiveTab] = useState<'all' | 'kurumsal-mail' | 'guvenlik-filtreleme'>('all');

  useEffect(() => {
    if (paketParam === 'kurumsal-mail') {
      setActiveTab('kurumsal-mail');
    } else if (paketParam === 'guvenlik-filtreleme') {
      setActiveTab('guvenlik-filtreleme');
    } else {
      setActiveTab('all');
    }
  }, [paketParam]);

  const displayedPlans =
    activeTab === 'all'
      ? ALL_MAIL_PLANS
      : ALL_MAIL_PLANS.filter((p) => p.category === activeTab);

  return (
    <>
      {/* 1. HERO SECTION (ALWAYS AT TOP) */}
      <section className="relative min-h-[460px] lg:min-h-[500px] flex flex-col justify-between text-white py-14 px-6 sm:px-10 lg:px-12 border-b border-slate-800 overflow-hidden">
        {/* Background Image & Multi-layer Dark Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/server-hero.jpg"
            alt="Kurumsal E-Posta & Anti-Spam Çözümleri"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D]/95 via-[#0F172A]/85 to-[#0A0F1D]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-[#0A0F1D]/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <div className="max-w-3xl text-left">
            <h1
              style={{ color: '#F9F9F9' }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight drop-shadow-md"
            >
              Kurumsal Bulut E-Posta & <br />
              <span className="text-[#E50914]">
                Gelişmiş Güvenlik Filtreleme
              </span>
            </h1>

            <p
              style={{ color: '#F4F4F0' }}
              className="text-base sm:text-lg mt-4 leading-relaxed max-w-2xl font-medium drop-shadow-sm opacity-95"
            >
              Şirketinizin alan adına özel (isim@sirketiniz.com), kesintisiz ve %99.9 gelen kutusuna teslimat garantili profesyonel e-posta altyapısı.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                href="/kurumsal/iletisim"
                className="flex items-center gap-2 rounded-2xl bg-[#E50914] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#E50914]/30 hover:bg-[#B91C1C] hover:scale-105 transition-all cursor-pointer"
              >
                <span>E-Posta Paketi Seçin</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="#eposta-paketleri"
                className="flex items-center gap-2 rounded-2xl border border-white/20 bg-slate-900/80 px-7 py-3.5 text-sm font-bold text-slate-200 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md cursor-pointer"
              >
                <span>Paketleri İnceleyin</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PLANS & TABS SECTION */}
      <section className="py-16 px-6 bg-[#F9F9F9]" id="eposta-paketleri">
        <div className="mx-auto max-w-7xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
                {activeTab === 'kurumsal-mail'
                  ? 'Kurumsal Bulut E-Posta Paketleri'
                  : activeTab === 'guvenlik-filtreleme'
                  ? 'Anti-Spam & Gelişmiş Güvenlik Filtresi'
                  : 'Tüm E-Posta & Güvenlik Çözümlerimiz'}
              </h2>
              <p className="text-xs sm:text-sm text-[#555555] mt-1">
                İşletmenizin ölçeğine uygun e-posta hesapları ve sıfır spam garantisi.
              </p>
            </div>

            {/* Filter Pills */}
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
                onClick={() => setActiveTab('kurumsal-mail')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'kurumsal-mail'
                    ? 'bg-[#E50914] text-white shadow-md'
                    : 'bg-white border border-[#E5E5E5] text-[#111111] hover:border-[#111111]'
                }`}
              >
                Kurumsal Bulut E-Posta
              </button>
              <button
                onClick={() => setActiveTab('guvenlik-filtreleme')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'guvenlik-filtreleme'
                    ? 'bg-[#E50914] text-white shadow-md'
                    : 'bg-white border border-[#E5E5E5] text-[#111111] hover:border-[#111111]'
                }`}
              >
                Anti-Spam & Filtreleme
              </button>
            </div>
          </div>

          {/* Grid Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl border bg-white p-8 transition-all hover:shadow-2xl hover:-translate-y-1.5 ${
                  plan.popular
                    ? 'border-[#E50914] shadow-xl shadow-red-500/10 ring-2 ring-[#E50914]/20'
                    : 'border-[#E5E5E5] shadow-lg shadow-slate-200/40 hover:border-[#111111]'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#E50914] px-3.5 py-1 text-[10px] font-extrabold text-white tracking-wider uppercase shadow-md">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-[#E5E5E5]">
                    <div>
                      <span className="text-[11px] font-bold text-[#E50914] uppercase tracking-wider font-mono">
                        {plan.category === 'kurumsal-mail' ? 'Cloud Mail' : 'Güvenlik Kalkanı'}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-[#111111]">{plan.name}</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[#777777] block font-semibold">{plan.period}</span>
                      <span className="text-xl sm:text-2xl font-black text-[#E50914] font-mono">
                        {plan.price}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-[#4A4A4A] my-6">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <Check className="h-4 w-4 text-[#E50914] flex-shrink-0" />
                        <span className={feat.includes('Garantisi') || feat.includes('Sınırsız') || feat.includes('Engelleme') ? 'font-bold text-[#111111]' : ''}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/kurumsal/iletisim?hizmet=${encodeURIComponent(plan.name)}`}
                  className={`mt-4 w-full py-3.5 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md ${
                    plan.popular
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

      {/* 3. TECHNICAL STANDARDS */}
      <section className="py-16 bg-white border-y border-[#E5E5E5]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
              Kurumsal E-Posta Altyapımızın Standartları
            </h2>
            <p className="text-sm text-[#4A4A4A] mt-2">
              İletişiminizin güvenliği ve gelen kutusu itibarı bizim önceliğimizdir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl border border-[#E5E5E5] bg-[#F9F9F9] p-6 text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#E50914] mb-4 border border-red-100">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-[#111111] mb-1.5">SPF, DKIM & DMARC</h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Tüm e-postalarınız kurumsal güvenlik imzalarıyla şifrelenir, sahtecilik ve spama düşme engellenir.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E5E5E5] bg-[#F9F9F9] p-6 text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#111111] mb-4 border border-slate-200">
                <Zap className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-[#111111] mb-1.5">%99.9 Teslimat Garantisi</h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Temiz IP havuzları ve akıllı teslimat motoru ile e-postalarınız anında gelen kutusuna ulaşır.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E5E5E5] bg-[#F9F9F9] p-6 text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#E50914] mb-4 border border-red-100">
                <Cloud className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-[#111111] mb-1.5">Tüm Cihazlarla Senkron</h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Outlook, Apple Mail, Gmail ve Android üzerinde takvim, rehber ve mailleriniz anlık eşitlenir.
              </p>
            </div>

            <div className="rounded-3xl border border-[#E5E5E5] bg-[#F9F9F9] p-6 text-left">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#111111] mb-4 border border-slate-200">
                <Lock className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-[#111111] mb-1.5">Ücretsiz E-Posta Taşıma</h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Eski sağlayıcınızdaki tüm e-posta geçmişinizi sıfır veri kaybıyla ve ücretsiz olarak taşıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER CTA */}
      <section className="py-14 bg-[#111111] text-white border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-white">Şirketiniz İçin Özel E-Posta Çözümü mü Gerekiyor?</h4>
            <p className="text-xs text-slate-400 mt-1">Yüksek hacimli gönderimler ve hibrit e-posta altyapıları için danışmanlarımızla görüşün.</p>
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

export default function EpostaPage() {
  return (
    <main className="min-h-screen bg-[#F9F9F9] text-[#111111]">
      <Suspense fallback={<div className="p-20 text-center text-[#111111]">Yükleniyor...</div>}>
        <EpostaContent />
      </Suspense>
    </main>
  );
}
