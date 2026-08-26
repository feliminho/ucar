'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { NavBarDemo } from './demo';
import { Menu as MenuIcon, X, ArrowRight, Headphones, Phone } from 'lucide-react';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E5E5] bg-[#F9F9F9]/95 backdrop-blur-xl transition-all shadow-xs">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* LOGO: UÇAR YAZILIM */}
        <Link href="/" onClick={handleHomeClick} className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="UÇAR YAZILIM"
            className="h-11 w-auto max-w-[210px] object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* DESKTOP NAVBAR */}
        <div className="hidden lg:block flex-shrink-0">
          <NavBarDemo />
        </div>

        {/* RIGHT CTA & PHONE */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+905385926467"
            className="flex items-center gap-2 text-xs font-semibold text-[#111111] hover:text-[#E50914] transition-colors"
          >
            <Headphones className="h-4 w-4 text-[#E50914]" />
            <span className="font-mono text-sm tracking-wide font-bold">0538 592 6467</span>
          </a>

          <Link
            href="/kurumsal/iletisim"
            className="flex items-center gap-2 rounded-xl bg-[#E50914] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#E50914]/20 transition-all hover:bg-[#B91C1C] hover:scale-105"
          >
            <span>Teklif Al</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E5E5] bg-white text-[#111111] lg:hidden"
          aria-label="Menü"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>

      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="border-b border-[#E5E5E5] bg-[#F9F9F9] px-6 py-6 lg:hidden shadow-2xl animate-in slide-in-from-top-2 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-3 text-sm font-semibold text-[#111111]">
            <Link
              href="/"
              onClick={() => {
                setMobileOpen(false);
                if (typeof window !== 'undefined') window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              }}
              className="hover:text-[#E50914] py-2 border-b border-[#E5E5E5] flex items-center justify-between"
            >
              <span>Anasayfa</span>
              <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
            </Link>

            <Link
              href="/alan-adi"
              onClick={() => {
                setMobileOpen(false);
                if (typeof window !== 'undefined') window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              }}
              className="hover:text-[#E50914] py-2 border-b border-[#E5E5E5] flex items-center justify-between"
            >
              <span>Alan Adı Tescili</span>
              <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
            </Link>

            <Link
              href="/sunucu-barindirma"
              onClick={() => {
                setMobileOpen(false);
                if (typeof window !== 'undefined') window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              }}
              className="hover:text-[#E50914] py-2 border-b border-[#E5E5E5] flex items-center justify-between"
            >
              <span>Sunucu Barındırma (VDS & Dedicated)</span>
              <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
            </Link>

            <Link
              href="/web-hosting"
              onClick={() => {
                setMobileOpen(false);
                if (typeof window !== 'undefined') window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              }}
              className="hover:text-[#E50914] py-2 border-b border-[#E5E5E5] flex items-center justify-between"
            >
              <span>Web Hosting & Bayi (Reseller)</span>
              <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
            </Link>

            <Link
              href="/yazilim"
              onClick={() => {
                setMobileOpen(false);
                if (typeof window !== 'undefined') window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              }}
              className="hover:text-[#E50914] py-2 border-b border-[#E5E5E5] flex items-center justify-between"
            >
              <span>Özel Yazılım & Mobil Uygulama</span>
              <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
            </Link>

            <Link
              href="/e-posta"
              onClick={() => {
                setMobileOpen(false);
                if (typeof window !== 'undefined') window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              }}
              className="hover:text-[#E50914] py-2 border-b border-[#E5E5E5] flex items-center justify-between"
            >
              <span>Kurumsal Bulut E-Posta</span>
              <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
            </Link>

            <Link
              href="/kurumsal"
              onClick={() => {
                setMobileOpen(false);
                if (typeof window !== 'undefined') window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              }}
              className="hover:text-[#E50914] py-2 border-b border-[#E5E5E5] flex items-center justify-between"
            >
              <span>Kurumsal & Veri Merkezi</span>
              <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
            </Link>

            <div className="pt-2 pb-1 flex items-center justify-between">
              <a
                href="tel:+905385926467"
                className="flex items-center gap-2 text-xs font-semibold text-[#111111] hover:text-[#E50914]"
              >
                <Phone className="h-4 w-4 text-[#E50914]" />
                <span className="font-mono text-sm font-bold">0538 592 6467</span>
              </a>
            </div>

            <Link
              href="/kurumsal/iletisim"
              onClick={() => {
                setMobileOpen(false);
                if (typeof window !== 'undefined') window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              }}
              className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-[#E50914] py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-[#E50914]/25 hover:bg-[#B91C1C]"
            >
              <span>Hemen Teklif Al</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
