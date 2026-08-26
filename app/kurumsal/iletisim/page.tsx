'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Headphones,
  ArrowRight,
  Globe,
  Sparkles,
} from 'lucide-react';

function IletisimContent() {
  const searchParams = useSearchParams();
  const paketParam = searchParams.get('paket') || searchParams.get('hizmet') || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: paketParam || 'Özel Yazılım Geliştirme',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[440px] lg:min-h-[480px] flex flex-col justify-between text-white py-14 px-6 sm:px-10 lg:px-12 border-b border-slate-800 overflow-hidden">
        {/* Background Image & Multi-layer Dark Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/server-hero.jpg"
            alt="İletişim & Teklif Formu"
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
              Bizimle <br />
              <span className="text-[#E50914]">
                İletişime Geçin
              </span>
            </h1>

            <p
              style={{ color: '#F4F4F0' }}
              className="text-base sm:text-lg mt-4 leading-relaxed max-w-2xl font-medium drop-shadow-sm opacity-95"
            >
              Yazılım projeleriniz, sunucu ve web hosting altyapınız için teknik ekibimiz ve satış uzmanlarımız 7/24 yanınızda.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="#teklif-formu"
                className="flex items-center gap-2 rounded-2xl bg-[#E50914] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#E50914]/30 hover:bg-[#B91C1C] hover:scale-105 transition-all cursor-pointer"
              >
                <span>Hemen Teklif Formunu Doldurun</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="https://wa.me/905385926467?text=Merhaba,%20hizmetleriniz%20hakkinda%20gorusmek%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-2xl border border-white/20 bg-slate-900/80 px-7 py-3.5 text-sm font-bold text-slate-200 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md cursor-pointer"
              >
                <span>WhatsApp'tan Yazın</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM */}
      <section className="py-20 px-6 bg-[#F9F9F9]" id="teklif-formu">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Info & Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E50914] bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                  7/24 Kesintisiz Erişim
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mt-3">
                  Doğrudan İletişim Kanalları
                </h2>
                <p className="text-xs sm:text-sm text-[#555555] mt-1.5 leading-relaxed">
                  İhtiyaç duyduğunuz her an mühendislik ve operasyon merkezimizle iletişime geçebilirsiniz.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Phone & WhatsApp */}
                <div className="flex items-center gap-4 p-5 rounded-3xl border border-[#E5E5E5] bg-white shadow-xs">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#E50914] border border-red-100 flex-shrink-0">
                    <PhoneCall className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#777777] block uppercase font-mono">
                      Telefon / WhatsApp
                    </span>
                    <a href="tel:05385926467" className="font-extrabold text-base text-[#111111] hover:text-[#E50914] transition-colors">
                      0538 592 6467
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 p-5 rounded-3xl border border-[#E5E5E5] bg-white shadow-xs">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#111111] border border-slate-200 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#777777] block uppercase font-mono">
                      E-Posta Adresi
                    </span>
                    <a href="mailto:info@ucaryazilim.com" className="font-extrabold text-base text-[#111111] hover:text-[#E50914] transition-colors">
                      info@ucaryazilim.com
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-4 p-5 rounded-3xl border border-[#E5E5E5] bg-white shadow-xs">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#E50914] border border-red-100 flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#777777] block uppercase font-mono">
                      Destek & Çalışma Saatleri
                    </span>
                    <span className="font-extrabold text-base text-[#111111]">
                      7/24 Kesintisiz NOC Desteği
                    </span>
                  </div>
                </div>

                {/* Datacenter Location */}
                <div className="flex items-center gap-4 p-5 rounded-3xl border border-[#E5E5E5] bg-white shadow-xs">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#111111] border border-slate-200 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#777777] block uppercase font-mono">
                      Veri Merkezi & Operasyon
                    </span>
                    <span className="font-bold text-sm text-[#111111]">
                      Tier III İstanbul Veri Merkezi / Türkiye
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact & Proposal Form */}
            <div className="lg:col-span-7 rounded-3xl border border-[#E5E5E5] bg-white p-8 sm:p-10 shadow-sm">
              <div className="mb-6 pb-6 border-b border-[#E5E5E5]">
                <h3 className="text-2xl font-bold text-[#111111]">
                  Proje & Hizmet Teklif Formu
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] mt-1">
                  Bilgilerinizi doldurun, mühendislerimiz projenizin detaylarını değerlendirip 30 dakika içinde sizinle iletişime geçsin.
                </p>
              </div>

              {submitted ? (
                <div className="p-10 text-center bg-red-50/50 rounded-2xl border border-red-200 animate-in fade-in duration-300">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E50914] text-white mx-auto mb-4 shadow-lg shadow-[#E50914]/25">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="font-extrabold text-xl text-[#111111]">
                    Talebiniz Başarıyla Alındı!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555] mt-2 max-w-md mx-auto leading-relaxed">
                    Sayın <strong>{formData.name || 'Müşterimiz'}</strong>, teklif talebiniz uzman mühendislerimize iletildi. En kısa sürede telefon veya e-posta yoluyla size dönüş yapılacaktır.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-[#111111] text-white text-xs font-bold hover:bg-[#E50914] transition-all"
                  >
                    Yeni Talep Gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#111111] block mb-1.5">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Örn: Ahmet Yılmaz"
                        className="w-full px-4 py-3.5 rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9] text-xs text-[#111111] focus:border-[#E50914] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#111111] block mb-1.5">
                        Telefon Numaranız *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="05XX XXX XX XX"
                        className="w-full px-4 py-3.5 rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9] text-xs text-[#111111] focus:border-[#E50914] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#111111] block mb-1.5">
                        E-Posta Adresiniz *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ahmet@sirket.com"
                        className="w-full px-4 py-3.5 rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9] text-xs text-[#111111] focus:border-[#E50914] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#111111] block mb-1.5">
                        İlgilendiğiniz Hizmet / Paket *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9] text-xs text-[#111111] focus:border-[#E50914] focus:bg-white focus:outline-none transition-all"
                      >
                        <option>Özel Web & Kurumsal Yazılım</option>
                        <option>iOS & Android Mobil Uygulama</option>
                        <option>ERP & CRM Yönetim Sistemleri</option>
                        <option>B2B & B2C E-Ticaret Platformları</option>
                        <option>Pazaryeri & GİB API Entegrasyonları</option>
                        <option>Yapay Zekâ (LLM) & RAG Çözümleri</option>
                        <option>VDS Sunucu Kiralama</option>
                        <option>Fiziksel Dedicated Sunucu</option>
                        <option>Web Hosting & Reseller Bayi</option>
                        <option>Kurumsal Bulut E-Posta</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#111111] block mb-1.5">
                      Proje Notu & Detaylar
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="İhtiyaç duyduğunuz yazılım özellikleri, kullanıcı sayısı veya sunucu donanım beklentileriniz hakkında kısa bilgi verin..."
                      className="w-full px-4 py-3.5 rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9] text-xs text-[#111111] focus:border-[#E50914] focus:bg-white focus:outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#E50914] text-white font-bold text-sm shadow-xl shadow-[#E50914]/25 hover:bg-[#B91C1C] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>Teklif & Danışmanlık Talebini Gönder</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-[#F9F9F9] text-[#111111]">
      <Suspense fallback={<div className="p-20 text-center text-[#111111]">Yükleniyor...</div>}>
        <IletisimContent />
      </Suspense>
    </main>
  );
}
