'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  ArrowRight,
  ShieldCheck,
  Globe,
  Settings,
  RefreshCw,
  ArrowLeftRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  Share2,
  FileText,
  Lock,
  Zap,
  ShoppingCart,
  Trash2,
  Copy,
  Check,
  Server,
  AlertCircle,
  ChevronRight,
  SlidersHorizontal,
  Bot
} from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

interface TldPrice {
  tld: string;
  category: 'popular' | 'tr' | 'tech' | 'ecommerce' | 'other';
  regOldUsd?: number;
  regUsd: number;
  renewUsd: number;
  transferUsd: number;
  discount?: boolean;
  docRequired?: boolean;
  popularBadge?: string;
}

const TLD_PRICING_DATA: TldPrice[] = [
  { tld: '.com', category: 'popular', regOldUsd: 16.11, regUsd: 15.83, renewUsd: 16.11, transferUsd: 14.85, discount: true, popularBadge: 'En Çok Tercih Edilen' },
  { tld: '.shop', category: 'ecommerce', regOldUsd: 56.01, regUsd: 2.79, renewUsd: 56.01, transferUsd: 56.01, discount: true },
  { tld: '.gen.tr', category: 'tr', regOldUsd: 2.90, regUsd: 2.60, renewUsd: 2.90, transferUsd: 0, discount: true },
  { tld: '.blog', category: 'other', regOldUsd: 36.43, regUsd: 6.99, renewUsd: 36.43, transferUsd: 36.43, discount: true },
  { tld: '.biz.tr', category: 'tr', regOldUsd: 2.90, regUsd: 2.60, renewUsd: 2.90, transferUsd: 0, discount: true },
  { tld: '.com.tr', category: 'tr', regOldUsd: 5.50, regUsd: 3.99, renewUsd: 4.50, transferUsd: 0, discount: true, popularBadge: 'Belgesiz & Anında' },
  { tld: '.net.tr', category: 'tr', regOldUsd: 2.90, regUsd: 2.60, renewUsd: 2.90, transferUsd: 0, discount: true },
  { tld: '.org.tr', category: 'tr', regOldUsd: 2.90, regUsd: 2.60, renewUsd: 2.90, transferUsd: 0, discount: true },
  { tld: '.moda', category: 'ecommerce', regOldUsd: 55.99, regUsd: 17.50, renewUsd: 55.99, transferUsd: 55.99, discount: true },
  { tld: '.store', category: 'ecommerce', regOldUsd: 73.49, regUsd: 2.79, renewUsd: 73.49, transferUsd: 73.49, discount: true },
  { tld: '.web.tr', category: 'tr', regOldUsd: 2.90, regUsd: 2.60, renewUsd: 2.90, transferUsd: 0, discount: true },
  { tld: '.av.tr', category: 'tr', regOldUsd: 2.90, regUsd: 2.60, renewUsd: 2.90, transferUsd: 0, docRequired: true },
  { tld: '.net', category: 'popular', regOldUsd: 19.61, regUsd: 19.59, renewUsd: 19.61, transferUsd: 19.61, discount: true },
  { tld: '.org', category: 'popular', regOldUsd: 19.59, regUsd: 11.89, renewUsd: 19.59, transferUsd: 19.59, discount: true },
  { tld: '.info', category: 'popular', regOldUsd: 39.19, regUsd: 6.29, renewUsd: 39.19, transferUsd: 39.19, discount: true },
  { tld: '.biz', category: 'other', regUsd: 32.75, renewUsd: 32.75, transferUsd: 32.75 },
  { tld: '.co', category: 'tech', regOldUsd: 54.59, regUsd: 27.29, renewUsd: 54.59, transferUsd: 54.59, discount: true },
  { tld: '.ai', category: 'tech', regOldUsd: 149.00, regUsd: 99.00, renewUsd: 149.00, transferUsd: 149.00, discount: true, popularBadge: 'Yapay Zeka' },
  { tld: '.io', category: 'tech', regOldUsd: 69.90, regUsd: 39.90, renewUsd: 69.90, transferUsd: 69.90, discount: true, popularBadge: 'Geliştirici' },
  { tld: '.tech', category: 'tech', regOldUsd: 49.99, regUsd: 4.99, renewUsd: 49.99, transferUsd: 49.99, discount: true },
  { tld: '.in', category: 'other', regUsd: 9.79, renewUsd: 9.79, transferUsd: 9.79 },
  { tld: '.site', category: 'tech', regOldUsd: 48.12, regUsd: 1.39, renewUsd: 48.12, transferUsd: 48.12, discount: true },
  { tld: '.mobi', category: 'other', regOldUsd: 69.86, regUsd: 7.71, renewUsd: 69.86, transferUsd: 69.86, discount: true },
  { tld: '.top', category: 'other', regOldUsd: 9.81, regUsd: 2.79, renewUsd: 9.81, transferUsd: 9.81, discount: true },
  { tld: '.name', category: 'other', regUsd: 15.34, renewUsd: 15.34, transferUsd: 15.34 },
  { tld: '.host', category: 'tech', regUsd: 139.99, renewUsd: 139.99, transferUsd: 139.99 },
  { tld: '.pro', category: 'other', regOldUsd: 39.06, regUsd: 5.59, renewUsd: 39.06, transferUsd: 39.06, discount: true, docRequired: true },
  { tld: '.tv', category: 'other', regUsd: 43.75, renewUsd: 43.75, transferUsd: 43.75 },
  { tld: '.club', category: 'other', regUsd: 27.29, renewUsd: 27.29, transferUsd: 27.29 },
  { tld: '.de', category: 'other', regUsd: 12.59, renewUsd: 12.59, transferUsd: 12.59, docRequired: true },
  { tld: '.us', category: 'other', regUsd: 16.79, renewUsd: 16.79, transferUsd: 16.79, docRequired: true },
  { tld: '.ru', category: 'other', regOldUsd: 69.86, regUsd: 55.86, renewUsd: 69.86, transferUsd: 55.86, discount: true, docRequired: true },
  { tld: '.es', category: 'other', regUsd: 16.73, renewUsd: 16.73, transferUsd: 16.73, docRequired: true },
  { tld: '.me', category: 'other', regOldUsd: 32.19, regUsd: 7.76, renewUsd: 32.19, transferUsd: 32.19, discount: true },
  { tld: '.bz', category: 'other', regUsd: 34.30, renewUsd: 34.30, transferUsd: 34.30 },
  { tld: '.ca', category: 'other', regUsd: 20.86, renewUsd: 20.86, transferUsd: 20.86, docRequired: true },
  { tld: '.cc', category: 'other', regUsd: 18.34, renewUsd: 18.34, transferUsd: 18.34 },
  { tld: '.cn', category: 'other', regUsd: 32.19, renewUsd: 32.19, transferUsd: 32.19, docRequired: true },
  { tld: '.la', category: 'other', regUsd: 54.25, renewUsd: 54.25, transferUsd: 54.25 },
];

const SPOTLIGHT_CARDS = [
  { tld: '.com', price: '$15.83', oldPrice: '$16.11', promo: 'En Popüler', color: 'border-red-500/30' },
  { tld: '.com.tr', price: '₺125,19', oldPrice: '₺139,33', promo: 'Belgesiz & Anında', color: 'border-red-500/30' },
  { tld: '.ai', price: '$99.00', oldPrice: '$149.00', promo: 'Yapay Zeka Trendi', color: 'border-red-500/30' },
  { tld: '.io', price: '$39.90', oldPrice: '$69.90', promo: 'Yazılım & SaaS', color: 'border-red-500/30' },
  { tld: '.shop', price: '$2.79', oldPrice: '$56.01', promo: '%95 İndirim', color: 'border-red-500/30' },
  { tld: '.site', price: '$1.39', oldPrice: '$48.12', promo: 'Süper Fırsat', color: 'border-red-500/30' },
];

interface CartItem {
  domain: string;
  tld: string;
  type: 'register' | 'transfer';
  priceUsd: number;
  periodYears: number;
}

export default function AlanAdiPage() {
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<'search' | 'ai' | 'transfer' | 'whois' | 'pricing'>('search');
  
  // Search & Cart states
  const [domainQuery, setDomainQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Array<{
    domain: string;
    tld: string;
    available: boolean;
    priceUsd: number;
    badge?: string;
  }> | null>(null);
  const [resultFilter, setResultFilter] = useState<'all' | 'available'>('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCartDrawer, setShowCartDrawer] = useState(false);
  const [copiedDomain, setCopiedDomain] = useState<string | null>(null);

  // Currency selection (USD / TRY / EUR)
  const [currency, setCurrency] = useState<'USD' | 'TRY' | 'EUR'>('TRY');
  const usdToTry = 36.5;
  const usdToEur = 0.94;

  const formatPrice = (usd: number) => {
    if (currency === 'TRY') {
      return `${(usd * usdToTry).toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺`;
    }
    if (currency === 'EUR') {
      return `€${(usd * usdToEur).toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return `$${usd.toFixed(2)}`;
  };

  // AI Generator state
  const [aiKeyword, setAiKeyword] = useState('');
  const [aiIndustry, setAiIndustry] = useState('tech');
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<Array<{ domain: string; desc: string; priceUsd: number; available: boolean }>>([]);

  // WHOIS Tool state
  const [whoisQuery, setWhoisQuery] = useState('');
  const [isWhoisLoading, setIsWhoisLoading] = useState(false);
  const [whoisData, setWhoisData] = useState<{
    domain: string;
    registrar: string;
    createdDate: string;
    expiryDate: string;
    status: string;
    nameServers: string[];
    dnssec: string;
    privacy: boolean;
  } | null>(null);

  // Transfer Wizard state
  const [transferStep, setTransferStep] = useState<1 | 2 | 3>(1);
  const [transferDomain, setTransferDomain] = useState('');
  const [transferAuthCode, setTransferAuthCode] = useState('');
  const [transferStatus, setTransferStatus] = useState<'idle' | 'checking' | 'valid' | 'invalid'>('idle');

  // Pricing filter
  const [pricingSearch, setPricingSearch] = useState('');
  const [pricingCategory, setPricingCategory] = useState<'all' | 'popular' | 'tr' | 'tech' | 'ecommerce'>('all');

  // Handle Domain Search
  const handleDomainSearch = (queryToUse?: string) => {
    const raw = queryToUse || domainQuery;
    if (!raw.trim()) return;

    setIsSearching(true);
    const clean = raw.trim().toLowerCase().replace(/https?:\/\//, '').replace(/\.[a-z.]+$/, '').replace(/[^a-z0-9-]/g, '');

    setTimeout(() => {
      setIsSearching(false);
      const results = [
        { domain: `${clean}.com`, tld: '.com', available: clean.length > 5, priceUsd: 15.83, badge: 'En Popüler' },
        { domain: `${clean}.com.tr`, tld: '.com.tr', available: true, priceUsd: 3.99, badge: 'Belgesiz & Anında' },
        { domain: `${clean}.net`, tld: '.net', available: clean.length % 2 === 0, priceUsd: 19.59 },
        { domain: `${clean}.org`, tld: '.org', available: true, priceUsd: 11.89 },
        { domain: `${clean}.ai`, tld: '.ai', available: true, priceUsd: 99.00, badge: 'Yapay Zeka' },
        { domain: `${clean}.io`, tld: '.io', available: true, priceUsd: 39.90, badge: 'SaaS / Dev' },
        { domain: `${clean}.co`, tld: '.co', available: true, priceUsd: 27.29 },
        { domain: `${clean}.shop`, tld: '.shop', available: true, priceUsd: 2.79, badge: '%95 İndirim' },
        { domain: `${clean}.site`, tld: '.site', available: true, priceUsd: 1.39 },
      ];
      setSearchResults(results);
    }, 600);
  };

  // AI Domain Suggestion Generator
  const handleGenerateAiSuggestions = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiKeyword.trim()) return;

    setIsGeneratingAi(true);
    setTimeout(() => {
      setIsGeneratingAi(false);
      const kw = aiKeyword.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
      const industryPrefixes: Record<string, string[]> = {
        tech: ['get', 'use', 'cloud', 'next', 'meta', 'hyper', 'smart', 'code', 'flow'],
        ecommerce: ['buy', 'shop', 'order', 'store', 'market', 'direct', 'craft'],
        creative: ['studio', 'pixel', 'vibe', 'pulse', 'spark', 'craft', 'bold'],
        finance: ['pay', 'capital', 'ledger', 'vault', 'fund', 'wallet'],
      };
      const prefixes = industryPrefixes[aiIndustry] || ['get', 'the', 'super', 'pro'];

      const generated = [
        { domain: `${kw}hq.com`, desc: 'Kurumsal ve güçlü ana merkez hissi veren alan adı.', priceUsd: 15.83, available: true },
        { domain: `${prefixes[0]}${kw}.ai`, desc: 'Yapay zeka ve teknoloji odaklı modern SaaS kimliği.', priceUsd: 99.00, available: true },
        { domain: `${kw}app.io`, desc: 'Geliştiriciler ve dijital ürünler için prestijli uzantı.', priceUsd: 39.90, available: true },
        { domain: `${prefixes[1] || 'pro'}${kw}.com.tr`, desc: 'Türkiye pazarı için güven veren kurumsal uzantı.', priceUsd: 3.99, available: true },
        { domain: `${kw}lab.tech`, desc: 'Ar-Ge ve yenilikçi projeler için ideal.', priceUsd: 4.99, available: true },
        { domain: `${kw}hub.site`, desc: 'Topluluk veya ekosistem platformları için uygun maliyetli.', priceUsd: 1.39, available: true },
      ];
      setAiSuggestions(generated);
    }, 750);
  };

  // Handle WHOIS lookup
  const handleWhoisLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whoisQuery.trim()) return;

    setIsWhoisLoading(true);
    setTimeout(() => {
      setIsWhoisLoading(false);
      const clean = whoisQuery.trim().toLowerCase().replace(/https?:\/\//, '');
      setWhoisData({
        domain: clean,
        registrar: 'Uçar Yazılım Bilişim Ltd. Şti. (ICANN Accredited)',
        createdDate: '14 Mart 2021',
        expiryDate: '14 Mart 2027',
        status: 'clientTransferProhibited, clientUpdateProhibited (Aktif & Korumalı)',
        nameServers: ['ns1.ucaryazilim.net', 'ns2.ucaryazilim.net'],
        dnssec: 'İmzalanmış (Aktif)',
        privacy: true,
      });
    }, 600);
  };

  // Handle Transfer Verification
  const handleVerifyTransfer = () => {
    if (!transferDomain.trim() || !transferAuthCode.trim()) return;
    setTransferStatus('checking');
    setTimeout(() => {
      if (transferAuthCode.length >= 6) {
        setTransferStatus('valid');
        setTransferStep(2);
      } else {
        setTransferStatus('invalid');
      }
    }, 800);
  };

  // Cart operations
  const addToCart = (item: CartItem) => {
    if (!cart.some((c) => c.domain === item.domain)) {
      setCart([...cart, item]);
      setShowCartDrawer(true);
    }
  };

  const removeFromCart = (domain: string) => {
    setCart(cart.filter((c) => c.domain !== domain));
  };

  const cartTotalUsd = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.priceUsd * item.periodYears, 0);
  }, [cart]);

  // Copy helper
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedDomain(text);
    setTimeout(() => setCopiedDomain(null), 2000);
  };

  // Filtered pricing table
  const filteredPricing = useMemo(() => {
    return TLD_PRICING_DATA.filter((item) => {
      const matchSearch = item.tld.toLowerCase().includes(pricingSearch.toLowerCase());
      const matchCategory = pricingCategory === 'all' || item.category === pricingCategory;
      return matchSearch && matchCategory;
    });
  }, [pricingSearch, pricingCategory]);

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#111111]">
      
      {/* 1. HERO HEADER SECTION WITH BACKGROUND IMAGE */}
      <section className="relative min-h-[460px] lg:min-h-[520px] flex flex-col justify-between text-white py-10 px-6 sm:px-10 lg:px-12 border-b border-slate-800 overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/domain-hero.jpg"
            alt="Alan Adı Tescil & Yönetim"
            className="w-full h-full object-cover object-center"
          />
          {/* Multi-layer Dark Gradient for perfect readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D]/95 via-[#0F172A]/85 to-[#0A0F1D]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-[#0A0F1D]/60" />
        </div>

        {/* TOP ROW: Left-aligned Title Info & Far Top-Right Currency / Cart */}
        <div className="relative z-10 mx-auto max-w-7xl w-full flex flex-col md:flex-row md:items-start md:justify-between gap-4 sm:gap-6 pt-2">
          {/* Left Text */}
          <div className="max-w-2xl text-left">
            <h1
              style={{ color: '#F9F9F9' }}
              className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight drop-shadow-md"
            >
              Alan Adı Tescil & Yönetim
            </h1>
            <p
              style={{ color: '#F4F4F0' }}
              className="text-xs sm:text-base mt-2 sm:mt-3 leading-relaxed max-w-xl font-medium drop-shadow-sm opacity-95"
            >
              Hayalinizdeki markayı saniyeler içinde tescil edin. Ücretsiz DNS yönetimi, Whois gizliliği ve 7/24 uzman desteğiyle.
            </p>
          </div>

          {/* Right Top: Currency Switcher & Cart positioned all the way to the right */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 self-start md:self-auto bg-slate-950/70 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
            <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-700/60">
              {(['TRY', 'USD', 'EUR'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    currency === curr
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {curr === 'TRY' ? '₺ TL' : curr === 'USD' ? '$ USD' : '€ EUR'}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowCartDrawer(true)}
              className="relative flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold text-white transition-all cursor-pointer shadow-sm"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Sepet</span>
              {cart.length > 0 && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-black text-white">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* BOTTOM ROW: Tab Buttons cleanly positioned on the bottom left */}
        <div className="relative z-10 mx-auto max-w-7xl w-full mt-6 sm:mt-10 flex justify-start">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 p-1.5 bg-slate-950/80 rounded-2xl border border-white/15 backdrop-blur-xl shadow-2xl w-full sm:w-fit">
            <button
              onClick={() => setActiveTab('search')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'search'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Sorgula</span>
            </button>

            <button
              onClick={() => setActiveTab('ai')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'ai'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Bot className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-purple-300" />
              <span>AI İsim</span>
            </button>

            <button
              onClick={() => setActiveTab('transfer')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'transfer'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <ArrowLeftRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Transfer</span>
            </button>

            <button
              onClick={() => setActiveTab('whois')}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'whois'
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>WHOIS</span>
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('fiyat-tablosu');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <SlidersHorizontal className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Fiyatlar</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE MAIN CONTENT AREA BY TAB */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          
          {/* TAB 1: DOMAIN SEARCH */}
          {activeTab === 'search' && (
            <div className="space-y-6 sm:space-y-10 animate-in fade-in duration-300">
              
              {/* Search Box */}
              <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-xl shadow-slate-200/60">
                <div className="max-w-3xl mx-auto text-center mb-5 sm:mb-6">
                  <h2 className="text-xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                    Mükemmel Alan Adını Şimdi Bulun
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Tüm uzantılarda eş zamanlı anlık müsaitlik ve fiyat kontrolü
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleDomainSearch();
                  }}
                  className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 max-w-4xl mx-auto"
                >
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                      type="text"
                      value={domainQuery}
                      onChange={(e) => setDomainQuery(e.target.value)}
                      placeholder="Aradığınız alan adını yazın..."
                      className="w-full h-12 sm:h-14 pl-12 pr-4 rounded-2xl border border-slate-200 bg-slate-50 text-sm sm:text-base font-semibold text-[#111111] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition-all font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSearching}
                    className="h-12 sm:h-14 px-6 sm:px-8 rounded-2xl bg-red-600 text-white font-bold text-xs sm:text-base shadow-lg shadow-red-600/30 hover:bg-red-700 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSearching ? (
                      <>
                        <RefreshCw className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                        <span>Sorgulanıyor...</span>
                      </>
                    ) : (
                      <>
                        <span>Sorgula</span>
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                      </>
                    )}
                  </button>
                </form>

                {/* Popular Spotlight Cards */}
                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
                  {SPOTLIGHT_CARDS.map((card) => (
                    <div
                      key={card.tld}
                      onClick={() => {
                        const clean = domainQuery ? domainQuery.replace(/\.[a-z.]+$/, '') : 'projem';
                        setDomainQuery(`${clean}${card.tld}`);
                        handleDomainSearch(`${clean}${card.tld}`);
                      }}
                      className={`group relative cursor-pointer rounded-2xl border bg-slate-50/70 p-2.5 sm:p-3.5 text-center hover:bg-white hover:shadow-md hover:border-red-500 transition-all ${card.color}`}
                    >
                      <span className="inline-block rounded-full bg-red-500/10 text-red-600 px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wide mb-0.5 sm:mb-1 truncate max-w-full">
                        {card.promo}
                      </span>
                      <div className="text-base sm:text-lg font-black text-slate-900 group-hover:text-red-600 transition-colors font-mono">
                        {card.tld}
                      </div>
                      <div className="text-[11px] sm:text-xs font-bold text-red-600 font-mono mt-0.5">
                        {card.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEARCH RESULTS SECTION */}
              {searchResults && (
                <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl animate-in fade-in slide-in-from-top-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200 mb-6">
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900">
                        Sorgulama Sonuçları
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {searchResults.filter((r) => r.available).length} uzantı kaydedilebilir durumda
                      </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl text-xs font-bold">
                      <button
                        onClick={() => setResultFilter('all')}
                        className={`px-3 py-1.5 rounded-lg transition-all ${
                          resultFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Tümü ({searchResults.length})
                      </button>
                      <button
                        onClick={() => setResultFilter('available')}
                        className={`px-3 py-1.5 rounded-lg transition-all ${
                          resultFilter === 'available' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Sadece Müsait ({searchResults.filter((r) => r.available).length})
                      </button>
                    </div>
                  </div>

                  {/* Results List */}
                  <div className="divide-y divide-slate-100">
                    {searchResults
                      .filter((item) => (resultFilter === 'available' ? item.available : true))
                      .map((item) => {
                        const inCart = cart.some((c) => c.domain === item.domain);
                        return (
                          <div
                            key={item.domain}
                            className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-4 hover:bg-slate-50/80 px-4 rounded-2xl transition-colors"
                          >
                            <div className="flex items-center gap-3.5">
                              {item.available ? (
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex-shrink-0">
                                  <CheckCircle2 className="h-5 w-5" />
                                </div>
                              ) : (
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-rose-500 border border-rose-200 flex-shrink-0">
                                  <XCircle className="h-5 w-5" />
                                </div>
                              )}

                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-extrabold text-base sm:text-lg text-slate-900 font-mono">
                                    {item.domain}
                                  </span>
                                  {item.badge && (
                                    <span className="rounded-md bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <span className={`text-xs font-semibold ${item.available ? 'text-emerald-600' : 'text-rose-500'}`}>
                                  {item.available ? '● Müsait - Hemen Kaydedin' : '● Dolu (Başkası Tarafından Alınmış)'}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-4 self-end sm:self-center">
                              <div className="text-right">
                                <div className="font-mono text-lg font-black text-red-600">
                                  {formatPrice(item.priceUsd)}
                                </div>
                                <div className="text-[11px] text-slate-400">/ 1 Yıl</div>
                              </div>

                              {item.available ? (
                                <button
                                  onClick={() => {
                                    if (inCart) {
                                      removeFromCart(item.domain);
                                    } else {
                                      addToCart({
                                        domain: item.domain,
                                        tld: item.tld,
                                        type: 'register',
                                        priceUsd: item.priceUsd,
                                        periodYears: 1,
                                      });
                                    }
                                  }}
                                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer ${
                                    inCart
                                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                                      : 'bg-red-600 text-white hover:bg-red-700 hover:scale-105'
                                  }`}
                                >
                                  {inCart ? (
                                    <>
                                      <Check className="h-4 w-4" />
                                      Sepette
                                    </>
                                  ) : (
                                    <>
                                      <ShoppingCart className="h-4 w-4" />
                                      Sepete Ekle
                                    </>
                                  )}
                                </button>
                              ) : (
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => {
                                      setTransferDomain(item.domain);
                                      setActiveTab('transfer');
                                    }}
                                    className="px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs font-bold text-slate-700 hover:border-red-600 hover:text-red-600 transition-all cursor-pointer"
                                  >
                                    Transfer Et
                                  </button>
                                  <button
                                    onClick={() => {
                                      setWhoisQuery(item.domain);
                                      setActiveTab('whois');
                                    }}
                                    className="px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-100 text-xs font-bold text-slate-600 hover:bg-slate-200 transition-all cursor-pointer"
                                  >
                                    WHOIS
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 2: AI DOMAIN GENERATOR */}
          {activeTab === 'ai' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 p-6 sm:p-10 shadow-xl">
                <div className="max-w-2xl mx-auto text-center mb-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 text-purple-700 px-3 py-1 text-xs font-bold mb-3">
                    <Sparkles className="h-3.5 w-3.5" />
                    Yapay Zeka Destekli Marka & İsim Üretici
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Projeniz İçin Akıllı Alan Adı Önerileri Alın
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2">
                    Aklınızdaki fikri veya anahtar kelimeyi yazın, yapay zeka sektörünüze en uygun premium alan adlarını türetsin.
                  </p>
                </div>

                <form onSubmit={handleGenerateAiSuggestions} className="max-w-3xl mx-auto space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Anahtar Kelime / Fikir:
                      </label>
                      <input
                        type="text"
                        value={aiKeyword}
                        onChange={(e) => setAiKeyword(e.target.value)}
                        placeholder="Örn: bulut, yazilim, moda, cafe, pay..."
                        className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-white text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Sektör / Kategori:
                      </label>
                      <select
                        value={aiIndustry}
                        onChange={(e) => setAiIndustry(e.target.value)}
                        className="w-full h-12 px-3 rounded-xl border border-slate-300 bg-white text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-600"
                      >
                        <option value="tech">Yazılım & Teknoloji</option>
                        <option value="ecommerce">E-Ticaret & Alışveriş</option>
                        <option value="creative">Tasarım & Yaratıcı Ajans</option>
                        <option value="finance">Finans & Ödeme Sistemleri</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isGeneratingAi}
                    className="w-full h-12 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-purple-600/30 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isGeneratingAi ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        <span>Yapay Zeka Alan Adlarını Türetiyor...</span>
                      </>
                    ) : (
                      <>
                        <Bot className="h-4 w-4" />
                        <span>AI İsim Önerilerini Üret</span>
                      </>
                    )}
                  </button>
                </form>

                {/* AI Suggestions Results Grid */}
                {aiSuggestions.length > 0 && (
                  <div className="mt-10 pt-8 border-t border-purple-100">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-purple-600" />
                      Önerilen Yapay Zeka Domain Alternatifleri
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {aiSuggestions.map((item) => {
                        const inCart = cart.some((c) => c.domain === item.domain);
                        return (
                          <div
                            key={item.domain}
                            className="rounded-2xl border border-purple-200/80 bg-white p-5 shadow-sm hover:shadow-md hover:border-purple-400 transition-all flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-1.5">
                                <span className="font-mono font-black text-lg text-purple-950">
                                  {item.domain}
                                </span>
                                <span className="font-mono font-bold text-sm text-red-600">
                                  {formatPrice(item.priceUsd)}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                                {item.desc}
                              </p>
                            </div>

                            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                              <button
                                onClick={() => copyToClipboard(item.domain)}
                                className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-slate-900 transition-colors"
                              >
                                {copiedDomain === item.domain ? (
                                  <>
                                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                                    Kopyalandı
                                  </>
                                ) : (
                                  <>
                                    <Copy className="h-3.5 w-3.5" />
                                    Kopyala
                                  </>
                                )}
                              </button>

                              <button
                                onClick={() => {
                                  if (inCart) {
                                    removeFromCart(item.domain);
                                  } else {
                                    addToCart({
                                      domain: item.domain,
                                      tld: item.domain.slice(item.domain.lastIndexOf('.')),
                                      type: 'register',
                                      priceUsd: item.priceUsd,
                                      periodYears: 1,
                                    });
                                  }
                                }}
                                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                  inCart
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-purple-600 text-white hover:bg-purple-700'
                                }`}
                              >
                                {inCart ? 'Sepette ✓' : 'Hemen Kaydet'}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}

          {/* TAB 3: STEP-BY-STEP TRANSFER WIZARD */}
          {activeTab === 'transfer' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
                
                {/* Transfer Steps Indicator */}
                <div className="max-w-3xl mx-auto mb-10">
                  <div className="flex items-center justify-between relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-slate-100 w-full z-0" />
                    
                    <div className={`relative z-10 flex flex-col items-center gap-1.5 ${transferStep >= 1 ? 'text-red-600' : 'text-slate-400'}`}>
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-sm border-2 transition-all ${transferStep >= 1 ? 'bg-red-600 text-white border-red-600' : 'bg-white text-slate-400 border-slate-300'}`}>
                        1
                      </div>
                      <span className="text-xs font-bold">Alan Adı & Auth Kodu</span>
                    </div>

                    <div className={`relative z-10 flex flex-col items-center gap-1.5 ${transferStep >= 2 ? 'text-red-600' : 'text-slate-400'}`}>
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-sm border-2 transition-all ${transferStep >= 2 ? 'bg-red-600 text-white border-red-600' : 'bg-white text-slate-400 border-slate-300'}`}>
                        2
                      </div>
                      <span className="text-xs font-bold">Kilit & Yetki Doğrulama</span>
                    </div>

                    <div className={`relative z-10 flex flex-col items-center gap-1.5 ${transferStep >= 3 ? 'text-red-600' : 'text-slate-400'}`}>
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-sm border-2 transition-all ${transferStep >= 3 ? 'bg-red-600 text-white border-red-600' : 'bg-white text-slate-400 border-slate-300'}`}>
                        3
                      </div>
                      <span className="text-xs font-bold">+1 Yıl Uzatma & Sipariş</span>
                    </div>
                  </div>
                </div>

                {/* STEP 1: Input Domain & Auth Code */}
                {transferStep === 1 && (
                  <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-slate-900">
                        Alan Adınızı Uçar Yazılım'a Taşıyın
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Transfer ettiğinizde süreniz kaybolmaz ve otomatik olarak <strong>+1 yıl uzatılır</strong>.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Transfer Edilecek Alan Adı:
                        </label>
                        <input
                          type="text"
                          value={transferDomain}
                          onChange={(e) => setTransferDomain(e.target.value)}
                          placeholder="Örn: alanadiniz.com"
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-slate-50 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          EPP / Auth Transfer Güvenlik Kodu:
                        </label>
                        <input
                          type="text"
                          value={transferAuthCode}
                          onChange={(e) => setTransferAuthCode(e.target.value)}
                          placeholder="Mevcut firmanızdan aldığınız EPP kodu (Örn: Ab12#kL9)"
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-slate-50 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white font-mono"
                        />
                        <p className="text-[11px] text-slate-400 mt-1">
                          * Transfer kilidinin (Transfer Lock) mevcut firmanızda açık (Unlocked) olduğundan emin olun.
                        </p>
                      </div>

                      {transferStatus === 'invalid' && (
                        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2">
                          <AlertCircle className="h-4 w-4" />
                          Lütfen geçerli bir alan adı ve en az 6 karakterli EPP transfer kodu girin.
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={handleVerifyTransfer}
                        disabled={transferStatus === 'checking'}
                        className="w-full h-12 rounded-xl bg-red-600 text-white font-bold text-sm shadow-md hover:bg-red-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {transferStatus === 'checking' ? (
                          <>
                            <RefreshCw className="h-4 w-4 animate-spin" />
                            <span>Transfer Durumu Kontrol Ediliyor...</span>
                          </>
                        ) : (
                          <>
                            <span>Doğrula ve İlerle</span>
                            <ChevronRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Lock Verification Passed */}
                {transferStep === 2 && (
                  <div className="max-w-2xl mx-auto space-y-6 text-center animate-in fade-in">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mx-auto">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Transfer Uyumluluğu Başarıyla Doğrulandı!
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        <strong className="text-slate-900 font-mono">{transferDomain}</strong> için transfer kilidi açık ve EPP kodu onaylandı.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 text-left space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">Mevcut Kalan Süre:</span>
                        <span className="font-bold text-slate-800">Korunur</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">Transfer Sonrası Uzatma:</span>
                        <span className="font-bold text-emerald-600">+1 Yıl Otomatik İlave</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">DNS Kesintisi:</span>
                        <span className="font-bold text-slate-800">Sıfır Kesinti (0 sn)</span>
                      </div>
                      <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200">
                        <span className="font-bold text-slate-800">Transfer & Yenileme Bedeli:</span>
                        <span className="font-bold text-red-600 font-mono text-base">{formatPrice(14.85)}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setTransferStep(1)}
                        className="flex-1 h-12 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-all"
                      >
                        ← Geri Dön
                      </button>
                      <button
                        onClick={() => {
                          addToCart({
                            domain: transferDomain,
                            tld: transferDomain.slice(transferDomain.lastIndexOf('.')),
                            type: 'transfer',
                            priceUsd: 14.85,
                            periodYears: 1,
                          });
                          setTransferStep(3);
                        }}
                        className="flex-1 h-12 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md hover:bg-emerald-700 transition-all"
                      >
                        Sepete Ekle & Tamamla
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Complete */}
                {transferStep === 3 && (
                  <div className="max-w-2xl mx-auto text-center space-y-6 animate-in fade-in">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 mx-auto">
                      <Sparkles className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Transfer Talebiniz Sepete Eklendi!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Siparişi tamamladığınızda transfer süreci arka planda otomatik olarak başlatılacak ve mevcut sağlayıcınızdan onay e-postası talep edilecektir.
                    </p>
                    <button
                      onClick={() => setShowCartDrawer(true)}
                      className="px-8 py-3 rounded-xl bg-red-600 text-white font-bold text-xs shadow-lg hover:bg-red-700 transition-all"
                    >
                      Sepeti İncele ve Ödemeye Geç →
                    </button>
                  </div>
                )}

              </div>
            </div>
          )}

          {/* TAB 4: WHOIS & DNS LOOKUP TOOL */}
          {activeTab === 'whois' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
                <div className="max-w-2xl mx-auto text-center mb-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-bold mb-3">
                    <Globe className="h-3.5 w-3.5" />
                    Canlı WHOIS & DNS Sorgulama Motoru
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Alan Adı Sahiplik ve Sunucu Bilgilerini İnceleyin
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2">
                    Herhangi bir alan adının tescil firmasını, süresini ve Name Server kayıtlarını ücretsiz sorgulayın.
                  </p>
                </div>

                <form onSubmit={handleWhoisLookup} className="flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto mb-8">
                  <input
                    type="text"
                    value={whoisQuery}
                    onChange={(e) => setWhoisQuery(e.target.value)}
                    placeholder="Sorgulamak istediğiniz domaini yazın (örn: google.com)..."
                    className="flex-1 h-12 px-4 rounded-xl border border-slate-300 bg-slate-50 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white font-mono"
                  />
                  <button
                    type="submit"
                    disabled={isWhoisLoading}
                    className="h-12 px-7 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-600/20"
                  >
                    {isWhoisLoading ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        <span>Sorgulanıyor...</span>
                      </>
                    ) : (
                      <>
                        <Search className="h-4 w-4" />
                        <span>WHOIS Sorgula</span>
                      </>
                    )}
                  </button>
                </form>

                {/* WHOIS RESULT CARD */}
                {whoisData && (
                  <div className="max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-slate-900 text-white p-6 shadow-xl animate-in fade-in font-mono text-xs space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                        <Server className="h-4 w-4" />
                        <span>WHOIS: {whoisData.domain}</span>
                      </div>
                      <span className="text-[10px] text-slate-400">Canlı Yanıt (Port 43)</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="text-slate-400 block text-[11px]">Kayıt Şirketi (Registrar):</span>
                        <span className="text-white font-bold">{whoisData.registrar}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Kayıt / Bitiş Tarihi:</span>
                        <span className="text-white font-bold">{whoisData.createdDate} → {whoisData.expiryDate}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Durum (Domain Status):</span>
                        <span className="text-amber-400 font-semibold">{whoisData.status}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px]">Gizlilik Koruması (Privacy):</span>
                        <span className="text-emerald-400 font-bold">Aktif (Kişisel Bilgiler Gizli)</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800">
                      <span className="text-slate-400 block text-[11px] mb-1">Name Server Kayıtları (DNS):</span>
                      <div className="flex flex-wrap gap-2">
                        {whoisData.nameServers.map((ns) => (
                          <span key={ns} className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 text-[11px] border border-slate-700">
                            {ns}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          )}

        </div>
      </section>

      {/* 3. TÜM ALAN ADLARI VE FİYAT LİSTESİ TABLOSU (HER ZAMAN GÖRÜNÜR) */}
      <section className="py-16 px-6 bg-[#F1F3F5] border-t border-slate-200" id="fiyat-tablosu">
        <div className="mx-auto max-w-6xl">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-600 mb-2">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                Güncel Fiyat Listesi
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Alan Adı Kayıt, Yenileme ve Transfer Ücretleri
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Tüm gTLD ve ccTLD uzantıları için 1 yıllık kayıt, yenileme ve transfer fiyatları ({filteredPricing.length} uzantı)
              </p>
            </div>

            {/* Quick Currency Toggle in Table Header */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Para Birimi:</span>
              <div className="flex bg-white p-1 rounded-xl border border-slate-300 shadow-xs">
                {(['TRY', 'USD', 'EUR'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                      currency === curr
                        ? 'bg-red-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {curr === 'TRY' ? '₺ TL' : curr === 'USD' ? '$ USD' : '€ EUR'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Filter & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm mb-6">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'Tüm Uzantılar' },
                { id: 'popular', label: 'Popüler (.com, .net...)' },
                { id: 'tr', label: 'Türkiye (.tr)' },
                { id: 'tech', label: 'Teknoloji & SaaS' },
                { id: 'ecommerce', label: 'E-Ticaret' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setPricingCategory(cat.id as any)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    pricingCategory === cat.id
                      ? 'bg-red-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* TLD Search Filter */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={pricingSearch}
                onChange={(e) => setPricingSearch(e.target.value)}
                placeholder="Uzantı ara (.com, .tr, .ai)..."
                className="w-full h-10 pl-9 pr-3 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-900 focus:ring-2 focus:ring-red-600 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Pricing Table */}
          <div className="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100/80 border-b border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
                    <th className="py-4 px-6">Uzantı (TLD)</th>
                    <th className="py-4 px-6 text-center">Kayıt (1 Yıl)</th>
                    <th className="py-4 px-6 text-center">Yenileme</th>
                    <th className="py-4 px-6 text-center">Transfer</th>
                    <th className="py-4 px-6 text-right">İşlem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredPricing.map((item, idx) => (
                    <tr
                      key={item.tld}
                      className={`hover:bg-red-50/40 transition-colors ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                      }`}
                    >
                      <td className="py-4 px-6 font-bold text-base text-slate-900">
                        <div className="flex items-center gap-2">
                          <span className="text-red-600 font-mono font-black">{item.tld}</span>
                          {item.popularBadge && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700">
                              {item.popularBadge}
                            </span>
                          )}
                          {item.docRequired && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                              <FileText className="h-3 w-3" /> Belge
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="py-4 px-6 text-center font-mono">
                        {item.regOldUsd && (
                          <div className="text-xs text-slate-400 line-through">
                            {formatPrice(item.regOldUsd)}
                          </div>
                        )}
                        <div className="font-black text-red-600 text-base">
                          {formatPrice(item.regUsd)}
                        </div>
                      </td>

                      <td className="py-4 px-6 text-center font-mono font-semibold text-slate-700">
                        {formatPrice(item.renewUsd)}
                      </td>

                      <td className="py-4 px-6 text-center font-mono font-semibold text-slate-700">
                        {item.transferUsd === 0 ? (
                          <span className="text-emerald-600 font-bold">Ücretsiz</span>
                        ) : (
                          formatPrice(item.transferUsd)
                        )}
                      </td>

                      <td className="py-4 px-6 text-right">
                        <button
                          onClick={() => {
                            setDomainQuery(`projem${item.tld}`);
                            setActiveTab('search');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            handleDomainSearch(`projem${item.tld}`);
                          }}
                          className="px-4 py-1.5 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700 transition-all shadow-xs cursor-pointer"
                        >
                          Sorgula
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

      {/* 4. SIZE SUNDUĞUMUZ AYRICALIKLAR (6-Grid Feature Section) */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-600 mb-3 shadow-xs">
              <Sparkles className="h-3.5 w-3.5" />
              Ücretsiz Yönetim Özellikleri
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tüm Domainlerde Ücretsiz Dahil Olan Ayrıcalıklar
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Ek ücret ödemeden gelişmiş kontrol panelimiz üzerinden tüm alan adı araçlarını anında kullanın.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Whois Yönetimi */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-7 shadow-xs hover:border-red-500 hover:shadow-md transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 mb-5 border border-red-100">
                <Settings className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Whois Yönetimi</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Alan adınızın irtibat ve yetkili iletişim bilgilerini kontrol paneliniz üzerinden dilediğiniz an güncelleyin.
              </p>
            </div>

            {/* 2. DNS Yönetimi */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-7 shadow-xs hover:border-red-500 hover:shadow-md transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-5 border border-blue-100">
                <Globe className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Gelişmiş DNS Yönetimi</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                A, AAAA, CNAME, MX, TXT, SRV ve SPF kayıtlarınızı Cloudflare entegrasyonuyla anında ve kesintisiz yönetin.
              </p>
            </div>

            {/* 3. Name Server Yönetimi */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-7 shadow-xs hover:border-red-500 hover:shadow-md transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 mb-5 border border-purple-100">
                <Server className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Özel Name Server (NS)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kendi markanıza özel (ns1.markaniz.com) isim sunucusu oluşturabilir ve IP eşleştirmelerini yapabilirsiniz.
              </p>
            </div>

            {/* 4. Whois Koruması */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-7 shadow-xs hover:border-red-500 hover:shadow-md transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-5 border border-emerald-100">
                <Lock className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Whois Gizlilik Koruması</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Spam maillerden ve istenmeyen aramalardan korunmak için iletişim bilgilerinizi tek tıkla gizleyin.
              </p>
            </div>

            {/* 5. Transfer Kilidi & Güvenlik */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-7 shadow-xs hover:border-red-500 hover:shadow-md transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 mb-5 border border-amber-100">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Transfer Kilidi (Theft Lock)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Alan adınızın izniniz dışında başka bir firmaya taşınmasını önleyen hırsızlık koruma kilidi.
              </p>
            </div>

            {/* 6. Kolay Yenileme & Hatırlatma */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50/50 p-7 shadow-xs hover:border-red-500 hover:shadow-md transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 mb-5 border border-rose-100">
                <RefreshCw className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Otomatik Yenileme & SMS</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Alan adınızın süresi dolmadan önce SMS ve e-posta bildirimleri ile alan adınızı kaybetme riskini sıfırlayın.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. DOMAIN FAQ ACCORDION */}
      <section className="py-16 px-6 bg-[#F8F9FA]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-600 mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              Sıkça Sorulan Sorular
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Alan Adı Hizmetleri Hakkında Merak Edilenler
            </h3>
          </div>

          <Accordion type="single" collapsible defaultValue="faq-1" className="space-y-3">
            <AccordionItem value="faq-1" className="border border-slate-200 rounded-2xl bg-white px-6 py-2 shadow-xs">
              <AccordionTrigger className="text-base font-bold text-slate-900 hover:no-underline">
                Alan adı (Domain) tescili ne kadar sürede aktif olur?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-slate-600 leading-relaxed">
                Kredi kartı veya bakiye ile yapılan tüm gTLD (.com, .net, .org, .ai, .io) ve belgesiz .tr (.com.tr, .net.tr) tescil işlemleri anında ICANN ve TRABİS sistemlerine iletilerek saniyeler içinde aktif hale gelir.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border border-slate-200 rounded-2xl bg-white px-6 py-2 shadow-xs">
              <AccordionTrigger className="text-base font-bold text-slate-900 hover:no-underline">
                .com.tr alan adı almak için artık evrak gerekiyor mu?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-slate-600 leading-relaxed">
                Hayır! TRABİS mevzuatıyla birlikte .com.tr, .net.tr ve .org.tr uzantıları tamamen belgesiz hale getirilmiştir. Kimlik veya şirket evrakı yüklemeden herkes dilediği boş alan adını anında tescil edebilir.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border border-slate-200 rounded-2xl bg-white px-6 py-2 shadow-xs">
              <AccordionTrigger className="text-base font-bold text-slate-900 hover:no-underline">
                Alan adımı transfer edersem kalan sürem yanar mı?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-slate-600 leading-relaxed">
                Kesinlikle hayır. Alan adınızı firmamıza transfer ettiğinizde mevcut kalan tüm süreniz korunur ve transfer tamamlandığında süreniz otomatik olarak 1 yıl daha uzatılır.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border border-slate-200 rounded-2xl bg-white px-6 py-2 shadow-xs">
              <AccordionTrigger className="text-base font-bold text-slate-900 hover:no-underline">
                Whois Gizlilik Koruması ve DNS yönetimi için ekstra ücret öder miyim?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-slate-600 leading-relaxed">
                Hayır, Uçar Yazılım üzerinden tescil edilen veya transfer edilen tüm alan adlarında Whois Gizlilik Koruması ve Gelişmiş DNS Yönetimi ömür boyu tamamen ücretsizdir.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 6. FOOTER CTA */}
      <section className="py-14 bg-slate-900 text-white border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-white">Alan Adınızı Hemen Güvence Altına Alın</h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">7/24 Teknik Destek, Anında Aktivasyon ve Ücretsiz Whois Gizliliği</p>
          </div>
          <button
            onClick={() => {
              setActiveTab('search');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-2xl bg-red-600 text-white font-bold text-sm shadow-lg shadow-red-600/30 hover:bg-red-700 hover:scale-105 transition-all cursor-pointer"
          >
            Alan Adı Sorgula →
          </button>
        </div>
      </section>

      {/* 7. SLIDE-OVER CART / CHECKOUT DRAWER */}
      {showCartDrawer && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
            
            {/* Drawer Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-red-600" />
                <h3 className="font-extrabold text-lg text-slate-900">Alan Adı Sepeti</h3>
                <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full">
                  {cart.length} Ürün
                </span>
              </div>
              <button
                onClick={() => setShowCartDrawer(false)}
                className="text-slate-400 hover:text-slate-800 p-1 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {/* Drawer Items */}
            <div className="p-6 flex-1 overflow-y-auto divide-y divide-slate-100">
              {cart.length === 0 ? (
                <div className="text-center py-16 text-slate-400">
                  <ShoppingCart className="h-12 w-12 mx-auto mb-3 text-slate-300 stroke-[1.5]" />
                  <p className="text-sm font-bold text-slate-600">Sepetiniz Boş</p>
                  <p className="text-xs text-slate-400 mt-1">Sorgulama yaparak alan adınızı sepete ekleyin.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.domain} className="py-4 flex items-center justify-between gap-3">
                    <div>
                      <div className="font-mono font-bold text-sm text-slate-900">{item.domain}</div>
                      <div className="text-[11px] text-slate-500">
                        {item.type === 'register' ? 'Yeni Tescil' : 'Transfer'} • {item.periodYears} Yıl (Ücretsiz DNS & Whois)
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="font-mono font-bold text-red-600 text-sm">
                        {formatPrice(item.priceUsd * item.periodYears)}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.domain)}
                        className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                        title="Kaldır"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer & Checkout */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 font-medium">Toplam Tutar:</span>
                  <span className="font-mono font-black text-xl text-red-600">
                    {formatPrice(cartTotalUsd)}
                  </span>
                </div>

                <Link
                  href="/kurumsal/iletisim"
                  className="w-full h-12 rounded-xl bg-red-600 text-white font-bold text-sm shadow-lg shadow-red-600/30 hover:bg-red-700 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Siparişi Tamamla & Satın Al</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="text-[11px] text-center text-slate-400">
                  Kredi kartı, Havale/EFT ve anında online aktivasyon
                </p>
              </div>
            )}

          </div>
        </div>
      )}

    </main>
  );
}
