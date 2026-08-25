import React from "react";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-between h-full space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E50914]/25 bg-[#E50914]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E50914] mb-5 shadow-xs">
          <Sparkles className="h-3.5 w-3.5" />
          Bize Ulaşın
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight mb-5">
          Bize Nasıl <br />
          <span className="text-[#E50914]">
            Ulaşabilirsiniz?
          </span>
        </h2>

        <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed max-w-md">
          Yazılım geliştirme, ERP entegrasyonu veya Tier III sunucu altyapısı ihtiyaçlarınız için uzman mühendis ekibimizle hemen iletişime geçin.
        </p>
      </div>

      {/* Info Cards List */}
      <div className="space-y-4">
        
        {/* Phone */}
        <a
          href="tel:+908500000000"
          className="flex items-center gap-4 p-4 rounded-2xl border border-[#E5E5E5] bg-white hover:border-[#E50914] hover:shadow-lg transition-all group"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#E50914] group-hover:scale-105 transition-transform border border-red-100">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-mono text-[#777777] block">Doğrudan Çağrı Hattı</span>
            <span className="text-base font-bold text-[#111111] font-mono">0850 000 00 00</span>
          </div>
        </a>

        {/* Mail */}
        <a
          href="mailto:info@ucaryazilim.com"
          className="flex items-center gap-4 p-4 rounded-2xl border border-[#E5E5E5] bg-white hover:border-[#E50914] hover:shadow-lg transition-all group"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-[#111111] group-hover:scale-105 transition-transform border border-slate-200">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-mono text-[#777777] block">Kurumsal E-Posta</span>
            <span className="text-base font-bold text-[#111111]">info@ucaryazilim.com</span>
          </div>
        </a>

        {/* Address */}
        <div className="flex items-center gap-4 p-4 rounded-2xl border border-[#E5E5E5] bg-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#E50914] border border-red-100">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-mono text-[#777777] block">Genel Merkez & Veri Merkezi</span>
            <span className="text-sm font-bold text-[#111111]">Maslak Teknoloji Vadisi / İstanbul</span>
          </div>
        </div>

        {/* Working Hours / SLA */}
        <div className="flex items-center gap-4 p-4 rounded-2xl border border-[#E5E5E5] bg-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-[#111111] border border-slate-200">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-mono text-[#777777] block">Destek & Müdahale Süresi</span>
            <span className="text-sm font-bold text-[#111111]">7/24 Kesintisiz Mühendis Desteği (15 dk SLA)</span>
          </div>
        </div>

      </div>

      {/* Guarantee Pill */}
      <div className="flex items-center gap-3 p-4 rounded-2xl border border-red-200 bg-red-50 text-[#B91C1C] text-xs font-semibold">
        <ShieldCheck className="h-5 w-5 text-[#E50914] flex-shrink-0" />
        <span>Tüm proje talepleriniz gizlilik sözleşmesi (NDA) ve Tier III SLA güvencesiyle korunur.</span>
      </div>
    </div>
  );
}
