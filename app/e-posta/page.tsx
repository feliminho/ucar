'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Zap,
  Lock,
  Cloud,
  ArrowRight,
} from 'lucide-react';
import { MailPricingSection } from '@/components/ui/mail-pricing';

function EpostaContent() {
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

      {/* 2. PLANS & INTERACTIVE PRICING SECTION */}
      <MailPricingSection />

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
