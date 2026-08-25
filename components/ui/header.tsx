'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavBarDemo } from './demo';
import { Menu as MenuIcon, X, ArrowRight, Headphones } from 'lucide-react';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0A0B10]/95 backdrop-blur-2xl transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* LOGO: UÇAR YAZILIM */}
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="UÇAR YAZILIM"
            className="h-11 w-auto max-w-[210px] object-contain brightness-0 invert drop-shadow-[0_0_10px_rgba(255,255,255,0.35)] transition-transform group-hover:scale-105"
          />
        </Link>

        {/* DESKTOP NAVBAR */}
        <div className="hidden lg:block">
          <NavBarDemo />
        </div>

        {/* RIGHT CTA & PHONE */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+908500000000"
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <Headphones className="h-4 w-4 text-white" />
            <span className="font-mono text-sm tracking-wide">0850 000 00 00</span>
          </a>

          <Link
            href="/kurumsal/iletisim"
            className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-black shadow-lg shadow-white/10 transition-all hover:bg-slate-200 hover:scale-105"
          >
            <span>Teklif Al</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#12141F] text-white lg:hidden"
          aria-label="Menü"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>

      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="border-b border-white/10 bg-[#0A0B10] px-6 py-6 lg:hidden shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4 text-sm font-semibold text-slate-300">
            <Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-white py-1 border-b border-white/5">Anasayfa</Link>
            <Link href="/alan-adi" onClick={() => setMobileOpen(false)} className="hover:text-white py-1 border-b border-white/5">Alan Adı</Link>
            <Link href="/web-hosting" onClick={() => setMobileOpen(false)} className="hover:text-white py-1 border-b border-white/5">Web Hosting</Link>
            <Link href="/yazilim" onClick={() => setMobileOpen(false)} className="hover:text-white py-1 border-b border-white/5">Yazılım</Link>
            <Link href="/e-posta" onClick={() => setMobileOpen(false)} className="hover:text-white py-1 border-b border-white/5">E-Posta</Link>
            <Link href="/kurumsal" onClick={() => setMobileOpen(false)} className="hover:text-white py-1 border-b border-white/5">Kurumsal</Link>

            <Link
              href="/kurumsal/iletisim"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-center text-sm font-bold text-black shadow-md hover:bg-slate-200"
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
