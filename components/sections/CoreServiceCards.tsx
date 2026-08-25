'use client';

import Link from 'next/link';
import { ArrowRight, Server, Database, Globe, Lock } from 'lucide-react';

export function CoreServiceCards() {
  return (
    <section className="bg-[#070E1B] pt-6 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* THE 4 CORE SERVICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: VDS Sunucular (Blue Hexagon) */}
          <div className="flex flex-col justify-between rounded-2xl border border-blue-500/30 bg-[#0B1528] p-6 shadow-xl transition-all hover:-translate-y-1 hover:border-blue-400 hover:shadow-blue-500/10">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 mb-5">
                <Server className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">VDS Sunucular</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Yüksek performanslı, izole kaynaklara sahip NVMe VDS çözümleri.
              </p>
            </div>
            <Link
              href="/web-hosting/vds-sunucu"
              className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/60 py-2.5 text-xs font-bold text-slate-200 transition-colors hover:border-blue-400 hover:text-white"
            >
              <span>Paketleri İncele</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Card 2: Fiziksel Sunucular (Purple Hexagon) */}
          <div className="flex flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#0B1528] p-6 shadow-xl transition-all hover:-translate-y-1 hover:border-purple-400 hover:shadow-purple-500/10">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400 mb-5">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fiziksel Sunucular</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Kurumsal projeleriniz için güçlü ve güvenilir fiziksel sunucu altyapıları.
              </p>
            </div>
            <Link
              href="/web-hosting/co-location"
              className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/60 py-2.5 text-xs font-bold text-slate-200 transition-colors hover:border-purple-400 hover:text-white"
            >
              <span>Paketleri İncele</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Card 3: Web Hosting (Green Hexagon) */}
          <div className="flex flex-col justify-between rounded-2xl border border-emerald-500/30 bg-[#0B1528] p-6 shadow-xl transition-all hover:-translate-y-1 hover:border-emerald-400 hover:shadow-emerald-500/10">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600/20 text-emerald-400 mb-5">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Web Hosting</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Hızlı, güvenli ve sınırsız web hosting paketleri ile sitenizi yayınlayın.
              </p>
            </div>
            <Link
              href="/web-hosting/ssd-hosting"
              className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/60 py-2.5 text-xs font-bold text-slate-200 transition-colors hover:border-emerald-400 hover:text-white"
            >
              <span>Paketleri İncele</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Card 4: Alan Adı & SSL (Amber Hexagon) */}
          <div className="flex flex-col justify-between rounded-2xl border border-amber-500/30 bg-[#0B1528] p-6 shadow-xl transition-all hover:-translate-y-1 hover:border-amber-400 hover:shadow-amber-500/10">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600/20 text-amber-400 mb-5">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Alan Adı & SSL</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Alan adınızı kaydedin, SSL sertifikanızla sitenizi güvence altına alın.
              </p>
            </div>
            <Link
              href="/alan-adi"
              className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/60 py-2.5 text-xs font-bold text-slate-200 transition-colors hover:border-amber-400 hover:text-white"
            >
              <span>Hemen Kaydet</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
