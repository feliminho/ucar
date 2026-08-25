'use client';

import Link from 'next/link';
import { ArrowRight, Server, Shield, Cloud, Gauge } from 'lucide-react';
import { ServerRack3D } from '@/components/ui/ServerRack3D';

export function TargetHero() {
  return (
    <section className="relative overflow-hidden bg-[#070E1B] pt-8 pb-16">
      
      {/* Background Cyber Grid Lines & Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#1A365D_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      <div className="absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl filter" />
      <div className="absolute top-1/3 -left-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl filter" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Main 2-Column Hero */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 mb-16">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-[#0B1A30]/80 px-4 py-1.5 text-xs font-bold text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-500/10 mb-6">
              <Server className="h-3.5 w-3.5 text-cyan-400" />
              <span className="tracking-wide">TIER III İSTANBUL VERİ MERKEZİ</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse ml-1" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Yüksek Performanslı <br />
              <span className="bg-gradient-to-r from-[#00F5D4] via-[#06B6D4] to-[#38BDF8] bg-clip-text text-transparent">
                NVMe VDS ve Sunucu
              </span> <br />
              Çözümleri
            </h1>

            {/* Subtext */}
            <p className="max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8">
              %100 Paylaşımsız CPU/RAM kaynakları, Tier III İstanbul Veri Merkezi altyapısı, 1 Gbps port ve kesintisiz kurumsal barındırma gücü.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/web-hosting/vds-sunucu"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00C2FF] via-[#06B6D4] to-[#00F5D4] px-7 py-3.5 text-sm sm:text-base font-bold text-[#070E1B] shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 hover:shadow-cyan-500/40"
              >
                <span>Sunucu Paketlerini İncele</span>
                <ArrowRight className="h-4 w-4 text-[#070E1B]" />
              </Link>

              <Link
                href="/web-hosting/vds-sunucu"
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-[#0B1528]/80 px-7 py-3.5 text-sm sm:text-base font-bold text-white backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-[#102038]"
              >
                VDS Yapılandır
              </Link>
            </div>

          </div>

          {/* Right Column: 3D Server Platform Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <ServerRack3D />
          </div>

        </div>

        {/* Bottom Feature Glass Strip (4 Pillars) */}
        <div className="rounded-2xl border border-slate-800/80 bg-[#0B1528]/80 p-5 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80">
            
            {/* 1. Uptime */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4 first:pl-0">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex-shrink-0">
                <Server className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">%99.98 SLA</span>
                <span className="text-xs text-slate-400">Uptime Garantisi</span>
              </div>
            </div>

            {/* 2. DDoS */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex-shrink-0">
                <Shield className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">DDoS Koruması</span>
                <span className="text-xs text-slate-400">Üst Düzey Güvenlik</span>
              </div>
            </div>

            {/* 3. Backup */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex-shrink-0">
                <Cloud className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">Günlük Yedekleme</span>
                <span className="text-xs text-slate-400">Ücretsiz Backup</span>
              </div>
            </div>

            {/* 4. Port */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex-shrink-0">
                <Gauge className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white">1 Gbps Port</span>
                <span className="text-xs text-slate-400">Yüksek Hızlı Bağlantı</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
