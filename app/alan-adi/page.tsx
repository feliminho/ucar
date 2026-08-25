'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  ArrowRight,
  ShieldCheck,
  Globe,
  Settings,
  RefreshCw,
  ArrowLeftRight,
  UserCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  Share2,
  FileText,
  Lock,
} from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

interface TldPrice {
  tld: string;
  regOld?: string;
  reg: string;
  renew: string;
  transferOld?: string;
  transfer: string;
  discount?: boolean;
  docRequired?: boolean;
}

const TLD_PRICING: TldPrice[] = [
  { tld: '.com', regOld: '$16.11', reg: '$15.83', renew: '$16.11', transferOld: '$16.11', transfer: '$14.85', discount: true },
  { tld: '.shop', regOld: '$56.01', reg: '$2.79', renew: '$56.01', transfer: '$56.01', discount: true },
  { tld: '.gen.tr', regOld: '$2.90', reg: '$2.60', renew: '$2.90', transfer: '$0', discount: true },
  { tld: '.blog', regOld: '$36.43', reg: '$6.99', renew: '$36.43', transfer: '$36.43', discount: true },
  { tld: '.biz.tr', regOld: '$2.90', reg: '$2.60', renew: '$2.90', transfer: '$0', discount: true },
  { tld: '.com.tr', regOld: '139,33 ₺', reg: '125,19 ₺', renew: '139,33 ₺', transfer: '500 ₺', discount: true },
  { tld: '.net.tr', regOld: '$2.90', reg: '$2.60', renew: '$2.90', transfer: '$0', discount: true },
  { tld: '.org.tr', regOld: '$2.90', reg: '$2.60', renew: '$2.90', transfer: '$0', discount: true },
  { tld: '.moda', regOld: '$55.99', reg: '$17.50', renew: '$55.99', transfer: '$55.99', discount: true },
  { tld: '.store', regOld: '$73.49', reg: '$2.79', renew: '$73.49', transfer: '$73.49', discount: true },
  { tld: '.web.tr', regOld: '$2.90', reg: '$2.60', renew: '$2.90', transfer: '$0', discount: true },
  { tld: '.av.tr', regOld: '$2.90', reg: '$2.60', renew: '$2.90', transfer: '$0', discount: true },
  { tld: '.net', regOld: '$19.61', reg: '$19.59', renew: '$19.61', transfer: '$19.61', discount: true },
  { tld: '.org', regOld: '$19.59', reg: '$11.89', renew: '$19.59', transfer: '$19.59', discount: true },
  { tld: '.info', regOld: '$39.19', reg: '$6.29', renew: '$39.19', transfer: '$39.19', discount: true },
  { tld: '.biz', reg: '$32.75', renew: '$32.75', transfer: '$32.75' },
  { tld: '.co', regOld: '$54.59', reg: '$27.29', renew: '$54.59', transfer: '$54.59', discount: true },
  { tld: '.in', reg: '$9.79', renew: '$9.79', transfer: '$9.79' },
  { tld: '.site', regOld: '$48.12', reg: '$1.39', renew: '$48.12', transfer: '$48.12', discount: true },
  { tld: '.mobi', regOld: '$69.86', reg: '$7.71', renew: '$69.86', transfer: '$69.86', discount: true },
  { tld: '.top', regOld: '$9.81', reg: '$2.79', renew: '$9.81', transfer: '$9.81', discount: true },
  { tld: '.name', reg: '$15.34', renew: '$15.34', transfer: '$15.34' },
  { tld: '.host', reg: '$139.99', renew: '$139.99', transfer: '$139.99' },
  { tld: '.pro', regOld: '$39.06', reg: '$5.59', renew: '$39.06', transfer: '$39.06', discount: true, docRequired: true },
  { tld: '.tv', reg: '$43.75', renew: '$43.75', transfer: '$43.75' },
  { tld: '.club', reg: '$27.29', renew: '$27.29', transfer: '$27.29' },
  { tld: '.de', reg: '$12.59', renew: '$12.59', transfer: '$12.59', docRequired: true },
  { tld: '.us', reg: '$16.79', renew: '$16.79', transfer: '$16.79', docRequired: true },
  { tld: '.ru', regOld: '$69.86', reg: '$55.86', renew: '$69.86', transferOld: '$69.86', transfer: '$55.86', discount: true, docRequired: true },
  { tld: '.es', reg: '$16.73', renew: '$16.73', transfer: '$16.73', docRequired: true },
  { tld: '.me', regOld: '$32.19', reg: '$7.76', renew: '$32.19', transfer: '$32.19', discount: true },
  { tld: '.bz', reg: '$34.30', renew: '$34.30', transfer: '$34.30' },
  { tld: '.ca', reg: '$20.86', renew: '$20.86', transfer: '$20.86', docRequired: true },
  { tld: '.cc', reg: '$18.34', renew: '$18.34', transfer: '$18.34' },
  { tld: '.cn', reg: '$32.19', renew: '$32.19', transfer: '$32.19', docRequired: true },
  { tld: '.la', reg: '$54.25', renew: '$54.25', transfer: '$54.25' },
];

const SPOTLIGHT_CARDS = [
  { tld: '.com', price: '$15.83', oldPrice: '$16.11', promo: 'Kampanya' },
  { tld: '.net', price: '$19.59', oldPrice: '$19.61', promo: 'Kampanya' },
  { tld: '.org', price: '$11.89', oldPrice: '$19.59', promo: 'Kampanya' },
  { tld: '.co', price: '$27.29', oldPrice: '$54.59', promo: 'Kampanya' },
  { tld: '.site', price: '$1.39', oldPrice: '$48.12', promo: 'Kampanya' },
  { tld: '.com.tr', price: '125,19 ₺', oldPrice: '139,33 ₺', promo: 'Kampanya' },
];

export default function AlanAdiPage() {
  const [domainQuery, setDomainQuery] = useState('');
  const [showTransfer, setShowTransfer] = useState(false);
  const [transferCode, setTransferCode] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<any[] | null>(null);
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!domainQuery.trim()) return;

    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      const clean = domainQuery.trim().toLowerCase().replace(/\.[a-z.]+$/, '');
      const results = [
        { domain: `${clean}.com`, tld: '.com', available: true, price: '$15.83', period: '1 Yıl' },
        { domain: `${clean}.com.tr`, tld: '.com.tr', available: true, price: '125,19 ₺', period: '1 Yıl' },
        { domain: `${clean}.net`, tld: '.net', available: false, price: '$19.59', period: '1 Yıl' },
        { domain: `${clean}.org`, tld: '.org', available: true, price: '$11.89', period: '1 Yıl' },
        { domain: `${clean}.co`, tld: '.co', available: true, price: '$27.29', period: '1 Yıl' },
        { domain: `${clean}.site`, tld: '.site', available: true, price: '$1.39', period: '1 Yıl' },
      ];
      setSearchResults(results);
      setSelectedDomains([`${clean}.com`]);
    }, 500);
  };

  const filteredPricing = TLD_PRICING.filter((item) =>
    item.tld.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#F9F9F9] text-[#111111]">
      
      {/* 1. PAGE TOP HEADER BANNER */}
      <section className="relative bg-[#111111] text-white py-16 px-6 border-b border-[#E5E5E5]">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E50914]/20 border border-[#E50914]/40 px-3.5 py-1 text-xs font-bold text-[#E50914] mb-3">
              <Sparkles className="h-3 w-3" />
              Alan Adı Tescil & Transfer Hizmeti
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Alan Adı Tescili
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Uygun fiyatlarla alan adınıza hemen sahip olun.
            </p>
          </div>

          {/* Social Share Icons */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold mr-2 flex items-center gap-1">
              <Share2 className="h-3.5 w-3.5" /> Paylaş:
            </span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-[#E50914] transition-colors"
            >
              f
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-[#E50914] transition-colors font-bold"
            >
              𝕏
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-[#E50914] transition-colors font-bold text-xs"
            >
              in
            </a>
          </div>
        </div>
      </section>

      {/* 2. DOMAIN SEARCH & QUERY SECTION */}
      <section className="py-14 px-6">
        <div className="mx-auto max-w-5xl">
          
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111111] tracking-tight">
              Sadece <strong className="text-[#E50914]">$15.83</strong> ile Alan Adınıza Hemen Sahip Olun!
            </h2>
            <p className="text-sm text-[#4A4A4A] mt-2">
              Tüm alan adı işlemlerinizi gelişmiş yönetim paneliniz üzerinden anında gerçekleştirin.
            </p>
          </div>

          {/* Search Box Form */}
          <div className="rounded-3xl border border-[#E5E5E5] bg-white p-4 sm:p-6 shadow-xl shadow-slate-200/50 mb-6">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  value={domainQuery}
                  onChange={(e) => setDomainQuery(e.target.value)}
                  placeholder="Alan Adı Yazınız. (Örn: example.com)"
                  className="w-full h-14 pl-12 pr-4 rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9] text-base font-semibold text-[#111111] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E50914]"
                />
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={isSearching}
                  className="h-14 px-7 rounded-2xl bg-[#E50914] text-white font-bold text-sm shadow-md hover:bg-[#B91C1C] transition-all flex items-center justify-center gap-2 flex-1 sm:flex-initial"
                >
                  {isSearching ? 'Kontrol Ediliyor...' : 'Kontrol Et'}
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setShowTransfer(!showTransfer)}
                  className="h-14 px-6 rounded-2xl border border-[#E5E5E5] bg-[#F4F4F0] text-[#111111] font-bold text-sm hover:border-[#111111] hover:bg-slate-200 transition-all"
                >
                  Transfer Et
                </button>
              </div>
            </form>

            {/* Transfer Code Box Drawer */}
            {showTransfer && (
              <div className="mt-5 pt-5 border-t border-[#E5E5E5] animate-in slide-in-from-top-2">
                <h5 className="text-xs font-bold text-[#111111] mb-2 uppercase tracking-wide">
                  Lütfen alan adı transfer kodunuzu (EPP / Auth Code) giriniz:
                </h5>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={transferCode}
                    onChange={(e) => setTransferCode(e.target.value)}
                    placeholder="Transfer Kodunuz? (EPP Kodu)"
                    className="flex-1 h-12 px-4 rounded-xl border border-[#E5E5E5] bg-[#F9F9F9] text-sm text-[#111111] focus:ring-2 focus:ring-[#E50914] focus:outline-none font-mono"
                  />
                  <button
                    type="button"
                    onClick={() => alert(`Transfer talebi başlatıldı: ${domainQuery || 'domain'}`)}
                    className="h-12 px-6 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors"
                  >
                    DEVAM ET
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 3. SPOTLIGHT PROMO CARDS (6-Grid) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {SPOTLIGHT_CARDS.map((card) => (
              <div
                key={card.tld}
                onClick={() => {
                  setDomainQuery(domainQuery ? `${domainQuery.replace(/\.[a-z.]+$/, '')}${card.tld}` : `proje${card.tld}`);
                }}
                className="relative cursor-pointer rounded-2xl border border-[#E5E5E5] bg-white p-4 text-center shadow-sm hover:border-[#E50914] hover:shadow-md transition-all group"
              >
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-[#E50914] px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider">
                  {card.promo}
                </span>
                <h4 className="text-xl font-black text-[#111111] mt-2 mb-1 group-hover:text-[#E50914] transition-colors">
                  {card.tld}
                </h4>
                <div className="text-[11px] text-slate-400 line-through font-mono">
                  {card.oldPrice}
                </div>
                <div className="text-sm font-extrabold text-[#E50914] font-mono mt-0.5">
                  {card.price}
                </div>
              </div>
            ))}
          </div>

          {/* 4. LIVE SEARCH RESULTS TABLE */}
          {searchResults && (
            <div className="rounded-3xl border border-[#E5E5E5] bg-white p-6 shadow-xl mb-12 animate-in fade-in">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-4">
                <h3 className="text-lg font-bold text-[#111111]">
                  Sorgulama Sonuçları
                </h3>
                <span className="text-xs text-[#555555]">
                  {searchResults.filter((r) => r.available).length} adet uzantı müsait
                </span>
              </div>

              <div className="divide-y divide-[#E5E5E5]">
                {searchResults.map((item) => (
                  <div
                    key={item.domain}
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-3.5 gap-3"
                  >
                    <div className="flex items-center gap-3">
                      {item.available ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-5 w-5 text-rose-500 flex-shrink-0" />
                      )}
                      <div>
                        <span className="font-bold text-base text-[#111111]">{item.domain}</span>
                        <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-md bg-[#F4F4F0] text-[#555555]">
                          {item.available ? 'Müsait' : 'Dolu'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 self-end sm:self-center">
                      <span className="font-mono text-base font-bold text-[#E50914]">
                        {item.price} <span className="text-xs text-slate-500 font-normal">/ {item.period}</span>
                      </span>

                      {item.available ? (
                        <button
                          onClick={() => {
                            if (selectedDomains.includes(item.domain)) {
                              setSelectedDomains(selectedDomains.filter((d) => d !== item.domain));
                            } else {
                              setSelectedDomains([...selectedDomains, item.domain]);
                            }
                          }}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                            selectedDomains.includes(item.domain)
                              ? 'bg-emerald-600 text-white'
                              : 'bg-[#E50914] text-white hover:bg-[#B91C1C]'
                          }`}
                        >
                          {selectedDomains.includes(item.domain) ? 'Seçildi ✓' : 'Sepete Ekle'}
                        </button>
                      ) : (
                        <div className="flex gap-2">
                          <button
                            onClick={() => alert(`${item.domain} transferi için yönlendiriliyorsunuz...`)}
                            className="px-3 py-1.5 rounded-lg border border-[#E5E5E5] bg-[#F4F4F0] text-xs font-bold text-[#111111] hover:bg-slate-200"
                          >
                            TRANSFER
                          </button>
                          <button
                            onClick={() => alert(`${item.domain} WHOIS bilgisi sorgulanıyor...`)}
                            className="px-3 py-1.5 rounded-lg border border-[#E5E5E5] bg-[#F4F4F0] text-xs font-bold text-[#555555] hover:bg-slate-200"
                          >
                            WHOIS
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {selectedDomains.length > 0 && (
                <div className="mt-6 pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#111111]">
                    {selectedDomains.length} alan adı seçildi
                  </span>
                  <Link
                    href="/kurumsal/iletisim"
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md hover:bg-emerald-700 transition-all"
                  >
                    Seç ve Devam Et →
                  </Link>
                </div>
              )}
            </div>
          )}

        </div>
      </section>

      {/* 5. SIZE SUNDUĞUMUZ AYRICALIKLAR (6-Grid Feature Section) */}
      <section className="py-16 bg-white border-y border-[#E5E5E5]">
        <div className="mx-auto max-w-7xl px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E50914]/25 bg-[#E50914]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E50914] mb-3 shadow-xs">
              <Sparkles className="h-3.5 w-3.5" />
              Ücretsiz Özellikler
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
              Size Sunduğumuz Ayrıcalıklar
            </h2>
            <p className="text-sm text-[#4A4A4A] mt-2">
              Tüm alan adı kayıtlarımızda aşağıdaki gelişmiş yönetim araçları tamamen ücretsizdir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Whois Yönetimi */}
            <div className="rounded-3xl border border-[#E5E5E5] bg-[#F9F9F9] p-7 shadow-xs hover:border-[#E50914] hover:shadow-md transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#E50914] mb-5 border border-red-100">
                <Settings className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-[#111111] mb-2">Whois Yönetimi</h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Alan adınızın whois bilgilerini kolay ve hızlı bir şekilde domain paneliniz üzerinden anında değiştirebilirsiniz.
              </p>
            </div>

            {/* 2. DNS Yönetimi */}
            <div className="rounded-3xl border border-[#E5E5E5] bg-[#F9F9F9] p-7 shadow-xs hover:border-[#111111] hover:shadow-md transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#111111] mb-5 border border-slate-200">
                <Globe className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-[#111111] mb-2">DNS Yönetimi</h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Domain paneliniz üzerinden domain isim sunucusu (DNS, A, CNAME, MX, TXT) kayıtlarınızı online tanımlayabilirsiniz.
              </p>
            </div>

            {/* 3. Name Server Yönetimi */}
            <div className="rounded-3xl border border-[#E5E5E5] bg-[#F9F9F9] p-7 shadow-xs hover:border-[#E50914] hover:shadow-md transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#E50914] mb-5 border border-red-100">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-[#111111] mb-2">Name Server Yönetimi</h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Özel Name Server (ns1.domaininiz.com) oluşturma ve düzenleme işlemlerini kontrol paneli üzerinden anlık yapabilirsiniz.
              </p>
            </div>

            {/* 4. Whois Koruması */}
            <div className="rounded-3xl border border-[#E5E5E5] bg-[#F9F9F9] p-7 shadow-xs hover:border-[#111111] hover:shadow-md transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#111111] mb-5 border border-slate-200">
                <Lock className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-[#111111] mb-2">Whois Koruması (Gizlilik)</h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Alan adınızın kişisel iletişim bilgilerini spam ve istenmeyen postalara karşı paneliniz üzerinden tek tıkla gizleyebilirsiniz.
              </p>
            </div>

            {/* 5. Alan Adı Yenileme / Uzatma */}
            <div className="rounded-3xl border border-[#E5E5E5] bg-[#F9F9F9] p-7 shadow-xs hover:border-[#E50914] hover:shadow-md transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#E50914] mb-5 border border-red-100">
                <RefreshCw className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-[#111111] mb-2">Alan Adı Yenileme / Uzatma</h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Alan adı tescil süresini, kontrol paneliniz üzerinden 1 ila 10 yıl arasında kolaylıkla uzatabilir ve yenileyebilirsiniz.
              </p>
            </div>

            {/* 6. Alan Adı Transfer */}
            <div className="rounded-3xl border border-[#E5E5E5] bg-[#F9F9F9] p-7 shadow-xs hover:border-[#111111] hover:shadow-md transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#111111] mb-5 border border-slate-200">
                <ArrowLeftRight className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-[#111111] mb-2">Alan Adı Transfer</h4>
              <p className="text-xs text-[#555555] leading-relaxed">
                Farklı bir firmada bulunan alan adlarınızı firmamıza taşıyabilir, transfer kilidini panelden dilediğiniz gibi yönetebilirsiniz.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. ALAN ADI KAYIT VE YENİLEME ÜCRETLERİ TABLOSU */}
      <section className="py-20 px-6 bg-[#F9F9F9]" id="fiyat-tablosu">
        <div className="mx-auto max-w-6xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
                Alan Adı Kayıt, Yenileme ve Transfer Ücretleri
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] mt-1">
                Tüm popüler gTLD ve ccTLD uzantıları için güncel fiyat listesi
              </p>
            </div>

            {/* Table Search Filter */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Uzantı ara (.com, .tr...)"
                className="w-full h-11 pl-10 pr-4 rounded-xl border border-[#E5E5E5] bg-white text-xs text-[#111111] focus:ring-2 focus:ring-[#E50914] focus:outline-none"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-[#E5E5E5] bg-white shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F4F4F0] border-b border-[#E5E5E5] text-xs font-bold text-[#111111] uppercase tracking-wider">
                    <th className="py-4 px-6">Uzantı</th>
                    <th className="py-4 px-6 text-center">Kayıt</th>
                    <th className="py-4 px-6 text-center">Yenileme</th>
                    <th className="py-4 px-6 text-center">Transfer</th>
                    <th className="py-4 px-6 text-right">İşlem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E5E5]">
                  {filteredPricing.map((item, idx) => (
                    <tr
                      key={item.tld}
                      className={`hover:bg-red-50/30 transition-colors ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'
                      }`}
                    >
                      <td className="py-4 px-6 font-bold text-base text-[#111111] flex items-center gap-2">
                        <span className="text-[#E50914]">{item.tld}</span>
                        {item.docRequired && (
                          <span
                            title="Belge Gerektirir"
                            className="inline-flex items-center gap-1 rounded bg-amber-100 text-amber-800 text-[10px] font-semibold px-1.5 py-0.5 cursor-help"
                          >
                            <FileText className="h-3 w-3" /> Belge
                          </span>
                        )}
                      </td>

                      <td className="py-4 px-6 text-center font-mono">
                        {item.regOld && (
                          <div className="text-xs text-slate-400 line-through">{item.regOld}</div>
                        )}
                        <div className="font-bold text-[#E50914] text-base">{item.reg}</div>
                      </td>

                      <td className="py-4 px-6 text-center font-mono font-semibold text-[#111111]">
                        {item.renew}
                      </td>

                      <td className="py-4 px-6 text-center font-mono">
                        {item.transferOld && (
                          <div className="text-xs text-slate-400 line-through">{item.transferOld}</div>
                        )}
                        <div className="font-semibold text-[#111111]">{item.transfer}</div>
                      </td>

                      <td className="py-4 px-6 text-right">
                        <button
                          onClick={() => {
                            setDomainQuery(`proje${item.tld}`);
                            window.scrollTo({ top: 300, behavior: 'smooth' });
                          }}
                          className="px-4 py-1.5 rounded-xl bg-[#E50914] text-white font-bold text-xs hover:bg-[#B91C1C] transition-all shadow-xs"
                        >
                          Kaydet
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 7. DOMAIN FAQ (Sıkça Sorulan Sorular) */}
      <section className="py-20 bg-white border-t border-[#E5E5E5]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E50914]/25 bg-[#E50914]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E50914] mb-3 shadow-xs">
              <HelpCircle className="h-3.5 w-3.5" />
              S.S.S.
            </div>
            <h3 className="text-3xl font-extrabold text-[#111111]">
              Alan Adı Hakkında Sıkça Sorulan Sorular
            </h3>
          </div>

          <Accordion type="single" collapsible defaultValue="faq-1" className="space-y-3">
            <AccordionItem value="faq-1" className="border border-[#E5E5E5] rounded-2xl bg-[#F9F9F9] px-6 py-2">
              <AccordionTrigger className="text-base font-bold text-[#111111] hover:no-underline">
                Alan adı (Domain) tescili ne kadar sürer?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#555555] leading-relaxed">
                Kredi kartı veya online bakiye ile yapılan tüm gTLD (.com, .net, .org vb.) ve belgesiz .tr uzantılı (.com.tr, .net.tr) kayıt işlemleri anında otomatik olarak tescil edilir ve panelinizde aktifleşir.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border border-[#E5E5E5] rounded-2xl bg-[#F9F9F9] px-6 py-2">
              <AccordionTrigger className="text-base font-bold text-[#111111] hover:no-underline">
                .com.tr alan adı almak için belge gerekiyor mu?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#555555] leading-relaxed">
                Hayır. BTK ve TRABİS mevzuat güncellemesiyle birlikte artık .com.tr, .net.tr ve .org.tr uzantıları belgesiz olarak herkes tarafından 'ilk gelen alır' kuralıyla anında tescil edilebilmektedir.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border border-[#E5E5E5] rounded-2xl bg-[#F9F9F9] px-6 py-2">
              <AccordionTrigger className="text-base font-bold text-[#111111] hover:no-underline">
                Alan adı transferi nasıl yapılır ve ne kadar sürer?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#555555] leading-relaxed">
                Mevcut firmanızdan alan adı transfer kilidini açıp EPP (Auth Code) transfer kodunuzu almanız gerekir. Sitemizdeki 'Transfer Et' alanına kodunuzu girerek işlemi başlattığınızda 5-7 gün içerisinde transfer tamamlanır ve süreniz otomatik olarak 1 yıl uzatılır.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border border-[#E5E5E5] rounded-2xl bg-[#F9F9F9] px-6 py-2">
              <AccordionTrigger className="text-base font-bold text-[#111111] hover:no-underline">
                Whois gizleme (Gizlilik Koruması) ücretli midir?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#555555] leading-relaxed">
                Uçar Yazılım üzerinden tescil edilen tüm uygun alan adlarında Whois Gizlilik Koruması tamamen ÜCRETSİZ olarak sunulmaktadır.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 8. FOOTER CTA STRIP */}
      <section className="py-14 bg-[#111111] text-white border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-white">Hayalinizdeki Alan Adını Hemen Kaydedin</h4>
            <p className="text-xs text-slate-400 mt-1">7/24 Kesintisiz DNS ve Ücretsiz Whois Korumasıyla Birlikte</p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 300, behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-2xl bg-[#E50914] text-white font-bold text-sm shadow-lg shadow-[#E50914]/25 hover:bg-[#B91C1C] hover:scale-105 transition-all"
          >
            Alan Adı Sorgula
          </button>
        </div>
      </section>

    </main>
  );
}
