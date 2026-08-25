import React from "react";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles, Send } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-between h-full space-y-8">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#12141F] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white mb-5 shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          Bize Ulaşın
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
          Bize Nasıl <br />
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Ulaşabilirsiniz?
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md">
          Yazılım geliştirme, ERP entegrasyonu veya Tier III sunucu altyapısı ihtiyaçlarınız için uzman mühendis ekibimizle hemen iletişime geçin.
        </p>
      </div>

      {/* Info Cards List */}
      <div className="space-y-4">
        
        {/* Phone */}
        <a
          href="tel:+908500000000"
          className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-[#11131C] hover:border-white/30 hover:bg-[#181B26] transition-all group"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white group-hover:scale-105 transition-transform">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-mono text-slate-400 block">Doğrudan Çağrı Hattı</span>
            <span className="text-base font-bold text-white font-mono">0850 000 00 00</span>
          </div>
        </a>

        {/* Mail */}
        <a
          href="mailto:info@ucaryazilim.com"
          className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-[#11131C] hover:border-white/30 hover:bg-[#181B26] transition-all group"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white group-hover:scale-105 transition-transform">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-mono text-slate-400 block">Kurumsal E-Posta</span>
            <span className="text-base font-bold text-white">info@ucaryazilim.com</span>
          </div>
        </a>

        {/* Address */}
        <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-[#11131C]">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-mono text-slate-400 block">Genel Merkez & Veri Merkezi</span>
            <span className="text-sm font-bold text-white">Maslak Teknoloji Vadisi / İstanbul</span>
          </div>
        </div>

        {/* Working Hours / SLA */}
        <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-[#11131C]">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-mono text-slate-400 block">Destek & Müdahale Süresi</span>
            <span className="text-sm font-bold text-white">7/24 Kesintisiz Mühendis Desteği (15 dk SLA)</span>
          </div>
        </div>

      </div>

      {/* Guarantee Pill */}
      <div className="flex items-center gap-3 p-4 rounded-2xl border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 text-xs font-semibold">
        <ShieldCheck className="h-5 w-5 text-cyan-400 flex-shrink-0" />
        <span>Tüm proje talepleriniz gizlilik sözleşmesi (NDA) ve Tier III SLA güvencesiyle korunur.</span>
      </div>
    </div>
  );
}
