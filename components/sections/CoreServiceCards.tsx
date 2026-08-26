'use client';

import Link from 'next/link';
import { ArrowRight, Server, Database, Globe, Lock } from 'lucide-react';

export function CoreServiceCards() {
  return (
    <section className="bg-[#F9F9F9] pt-6 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* THE 4 CORE SERVICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: VDS Sunucular */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#E5E5E5] bg-white p-7 shadow-lg shadow-slate-200/40 transition-all hover:-translate-y-1 hover:border-[#E50914] hover:shadow-xl">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#E50914] mb-5 border border-red-100">
                <Server className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[#111111] mb-2">VDS Sunucular</h3>
              <p className="text-xs text-[#555555] leading-relaxed mb-6">
                Yüksek performanslı, izole kaynaklara sahip NVMe VDS çözümleri.
              </p>
            </div>
            <Link
              href="/sunucu-barindirma"
              className="flex items-center justify-center gap-1.5 rounded-xl border border-[#E5E5E5] bg-[#F9F9F9] py-2.5 text-xs font-bold text-[#111111] transition-colors hover:bg-[#E50914] hover:border-[#E50914] hover:text-white"
            >
              <span>Paketleri İncele</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Card 2: Fiziksel Sunucular */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#E5E5E5] bg-white p-7 shadow-lg shadow-slate-200/40 transition-all hover:-translate-y-1 hover:border-[#111111] hover:shadow-xl">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#111111] mb-5 border border-slate-200">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[#111111] mb-2">Fiziksel Sunucular</h3>
              <p className="text-xs text-[#555555] leading-relaxed mb-6">
                Kurumsal projeleriniz için güçlü ve güvenilir fiziksel sunucu altyapıları.
              </p>
            </div>
            <Link
              href="/sunucu-barindirma"
              className="flex items-center justify-center gap-1.5 rounded-xl border border-[#E5E5E5] bg-[#F9F9F9] py-2.5 text-xs font-bold text-[#111111] transition-colors hover:bg-[#111111] hover:border-[#111111] hover:text-white"
            >
              <span>Paketleri İncele</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Card 3: Web Hosting */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#E5E5E5] bg-white p-7 shadow-lg shadow-slate-200/40 transition-all hover:-translate-y-1 hover:border-[#E50914] hover:shadow-xl">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#E50914] mb-5 border border-red-100">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[#111111] mb-2">Web Hosting</h3>
              <p className="text-xs text-[#555555] leading-relaxed mb-6">
                Hızlı, güvenli ve sınırsız web hosting paketleri ile sitenizi yayınlayın.
              </p>
            </div>
            <Link
              href="/web-hosting/ssd-hosting"
              className="flex items-center justify-center gap-1.5 rounded-xl border border-[#E5E5E5] bg-[#F9F9F9] py-2.5 text-xs font-bold text-[#111111] transition-colors hover:bg-[#E50914] hover:border-[#E50914] hover:text-white"
            >
              <span>Paketleri İncele</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Card 4: Alan Adı & SSL */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#E5E5E5] bg-white p-7 shadow-lg shadow-slate-200/40 transition-all hover:-translate-y-1 hover:border-[#111111] hover:shadow-xl">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#111111] mb-5 border border-slate-200">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[#111111] mb-2">Alan Adı & SSL</h3>
              <p className="text-xs text-[#555555] leading-relaxed mb-6">
                Alan adınızı kaydedin, SSL sertifikanızla sitenizi güvence altına alın.
              </p>
            </div>
            <Link
              href="/alan-adi"
              className="flex items-center justify-center gap-1.5 rounded-xl border border-[#E5E5E5] bg-[#F9F9F9] py-2.5 text-xs font-bold text-[#111111] transition-colors hover:bg-[#111111] hover:border-[#111111] hover:text-white"
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
