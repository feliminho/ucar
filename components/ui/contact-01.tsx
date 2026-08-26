'use client';

import React, { useState } from 'react';
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Özel Web & Kurumsal Yazılım',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F9F9F9] border-t border-[#E5E5E5]" id="contact">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E50914] bg-red-50 border border-red-200 px-3 py-1 rounded-full inline-block">
                7/24 Kesintisiz Erişim
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] mt-3 tracking-tight">
                Doğrudan İletişim Kanalları
              </h2>
              <p className="text-xs sm:text-sm text-[#555555] mt-2 leading-relaxed">
                İhtiyaç duyduğunuz her an mühendislik ve operasyon merkezimizle iletişime geçebilirsiniz.
              </p>
            </div>

            <div className="space-y-3.5 pt-2">
              {/* Phone & WhatsApp */}
              <div className="flex items-center gap-4 p-4 sm:p-5 rounded-3xl border border-[#E5E5E5] bg-white shadow-xs">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-red-50 text-[#E50914] border border-red-100 flex-shrink-0">
                  <PhoneCall className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-[#777777] block uppercase font-mono">
                    Telefon / WhatsApp
                  </span>
                  <a href="tel:05385926467" className="font-extrabold text-sm sm:text-base text-[#111111] hover:text-[#E50914] transition-colors truncate block">
                    0538 592 6467
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 sm:p-5 rounded-3xl border border-[#E5E5E5] bg-white shadow-xs">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#111111] border border-slate-200 flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-[#777777] block uppercase font-mono">
                    E-Posta Adresi
                  </span>
                  <a href="mailto:info@ucaryazilim.com" className="font-extrabold text-sm sm:text-base text-[#111111] hover:text-[#E50914] transition-colors truncate block">
                    info@ucaryazilim.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-4 p-4 sm:p-5 rounded-3xl border border-[#E5E5E5] bg-white shadow-xs">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-red-50 text-[#E50914] border border-red-100 flex-shrink-0">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-[#777777] block uppercase font-mono">
                    Destek & Çalışma Saatleri
                  </span>
                  <span className="font-extrabold text-sm sm:text-base text-[#111111] block">
                    7/24 Kesintisiz NOC Desteği
                  </span>
                </div>
              </div>

              {/* Datacenter Location */}
              <div className="flex items-center gap-4 p-4 sm:p-5 rounded-3xl border border-[#E5E5E5] bg-white shadow-xs">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#111111] border border-slate-200 flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-[#777777] block uppercase font-mono">
                    Veri Merkezi & Operasyon
                  </span>
                  <span className="font-bold text-xs sm:text-sm text-[#111111] block">
                    Tier III İstanbul Veri Merkezi / Türkiye
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Proposal Form */}
          <div className="lg:col-span-7 rounded-3xl border border-[#E5E5E5] bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
            <div className="mb-6 pb-6 border-b border-[#E5E5E5]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                Proje & Hizmet Teklif Formu
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] mt-1">
                Bilgilerinizi doldurun, mühendislerimiz projenizin detaylarını değerlendirip 30 dakika içinde sizinle iletişime geçsin.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 sm:p-10 text-center bg-red-50/50 rounded-2xl border border-red-200 animate-in fade-in duration-300">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#E50914] text-white mx-auto mb-4 shadow-lg shadow-[#E50914]/25">
                  <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <h4 className="font-extrabold text-lg sm:text-xl text-[#111111]">
                  Talebiniz Başarıyla Alındı!
                </h4>
                <p className="text-xs sm:text-sm text-[#555555] mt-2 max-w-md mx-auto leading-relaxed">
                  Sayın <strong>{formData.name || 'Müşterimiz'}</strong>, teklif talebiniz uzman mühendislerimize iletildi. En kısa sürede telefon veya e-posta yoluyla size dönüş yapılacaktır.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-[#111111] text-white text-xs font-bold hover:bg-[#E50914] transition-all cursor-pointer"
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
                      className="w-full px-4 py-3 sm:py-3.5 rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9] text-xs sm:text-sm text-[#111111] focus:border-[#E50914] focus:bg-white focus:outline-none transition-all"
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
                      className="w-full px-4 py-3 sm:py-3.5 rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9] text-xs sm:text-sm text-[#111111] focus:border-[#E50914] focus:bg-white focus:outline-none transition-all"
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
                      className="w-full px-4 py-3 sm:py-3.5 rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9] text-xs sm:text-sm text-[#111111] focus:border-[#E50914] focus:bg-white focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#111111] block mb-1.5">
                      İlgilendiğiniz Hizmet / Paket *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9] text-xs sm:text-sm text-[#111111] focus:border-[#E50914] focus:bg-white focus:outline-none transition-all"
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
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="İhtiyaç duyduğunuz yazılım özellikleri, kullanıcı sayısı veya sunucu donanım beklentileriniz hakkında kısa bilgi verin..."
                    className="w-full px-4 py-3 sm:py-3.5 rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9] text-xs sm:text-sm text-[#111111] focus:border-[#E50914] focus:bg-white focus:outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 rounded-2xl bg-[#E50914] text-white font-bold text-sm shadow-xl shadow-[#E50914]/25 hover:bg-[#B91C1C] transition-all cursor-pointer flex items-center justify-center gap-2"
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
  );
}
