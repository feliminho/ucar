'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageComparison } from '@/components/ui/image-comparison-slider';
import { FeaturesSectionWithHoverEffects, FeatureItem } from '@/components/ui/feature-section-with-hover-effects';
import {
  IconTerminal2,
  IconDeviceMobile,
  IconWorld,
  IconBuildingStore,
  IconUsers,
  IconShoppingCart,
  IconApiApp,
  IconRobot,
  IconServer,
  IconDatabase,
  IconCloud,
  IconShare,
  IconSettings,
  IconMail,
  IconShieldLock,
  IconDeviceFloppy,
} from '@tabler/icons-react';
import { ArrowRight, Code2, Server, Sparkles } from 'lucide-react';

const softwareFeatures: FeatureItem[] = [
  {
    title: 'Özel Yazılım Geliştirme',
    description: 'İş süreçlerine ve şirket ihtiyaçlarına özel sıfırdan geliştirilen web ve masaüstü yazılım sistemleri.',
    icon: <IconTerminal2 className="h-6 w-6" />,
    link: '/yazilim/ozel-yazilim',
    tag: 'Web & Masaüstü',
  },
  {
    title: 'Mobil Uygulama (iOS & Android)',
    description: 'iPhone, iPad ve Google Play standartlarında modern native ve hibrit mobil uygulamalar.',
    icon: <IconDeviceMobile className="h-6 w-6" />,
    link: '/yazilim/mobil-uygulama',
    tag: 'Swift / Flutter',
  },
  {
    title: 'Kurumsal Web & Portallar',
    description: 'SEO uyumlu, mobil duyarlı (responsive) ve yönetim panelli kurumsal web çözümleri.',
    icon: <IconWorld className="h-6 w-6" />,
    link: '/yazilim/ozel-yazilim',
    tag: 'Next.js 15',
  },
  {
    title: 'ERP Kaynak Planlama',
    description: 'Stok, finans, muhasebe, satın alma ve üretim süreçlerini tek merkezde toplayan çözümler.',
    icon: <IconBuildingStore className="h-6 w-6" />,
    link: '/yazilim/erp-crm',
    tag: 'Stok & Depo',
  },
  {
    title: 'CRM Müşteri İlişkileri',
    description: 'Müşteri takibi, satış döngüsü, teklif yönetimi ve görev organizasyon sistemleri.',
    icon: <IconUsers className="h-6 w-6" />,
    link: '/yazilim/erp-crm',
    tag: 'Satış Hunisi',
  },
  {
    title: 'E-Ticaret & Sanal POS',
    description: 'B2B ve B2C e-ticaret platformları, sanal POS ve otomatik kargo entegrasyonu.',
    icon: <IconShoppingCart className="h-6 w-6" />,
    link: '/yazilim/e-ticaret',
    tag: 'B2B & B2C',
  },
  {
    title: 'API & Pazaryeri Entegrasyonları',
    description: 'Trendyol, Hepsiburada, Amazon, Logo ve GİB E-Fatura çift yönlü senkronizasyon.',
    icon: <IconApiApp className="h-6 w-6" />,
    link: '/yazilim/api-entegrasyon',
    tag: 'Tam Otomasyon',
  },
  {
    title: 'Yapay Zekâ (AI) & LLM Modelleri',
    description: 'OpenAI, Claude ve Gemini modelleriyle şirket içi akıllı asistanlar ve veri analitiği.',
    icon: <IconRobot className="h-6 w-6" />,
    link: '/yazilim/yapay-zeka',
    tag: 'GPT-4 & Gemini',
  },
];

const serverFeatures: FeatureItem[] = [
  {
    title: 'NVMe VDS / VPS Sunucular',
    description: '%100 Paylaşımsız CPU/RAM kaynakları, Linux ve Windows NVMe sanal sunucu altyapısı.',
    icon: <IconServer className="h-6 w-6" />,
    link: '/web-hosting/vds-sunucu',
    tag: 'Ultra NVMe',
  },
  {
    title: 'Co-Location & Fiziksel Barındırma',
    description: 'Tier III İstanbul Veri Merkezi kabin, enerji ve fiziksel sunucu barındırma hizmeti.',
    icon: <IconDatabase className="h-6 w-6" />,
    link: '/web-hosting/co-location',
    tag: 'Tier III SLA',
  },
  {
    title: 'SSD Web Hosting (cPanel & LiteSpeed)',
    description: 'NVMe SSD, cPanel ve LiteSpeed altyapısı ile ultra hızlı web barındırma.',
    icon: <IconCloud className="h-6 w-6" />,
    link: '/web-hosting/ssd-hosting',
    tag: 'LiteSpeed Hız',
  },
  {
    title: 'Reseller (Bayi) Hosting Altyapısı',
    description: 'WHM bayi paneli, özel NameServer tanımları ve limitsiz cPanel açma imkânı.',
    icon: <IconShare className="h-6 w-6" />,
    link: '/web-hosting/reseller-hosting',
    tag: 'WHM Bayi',
  },
  {
    title: 'Sunucu Kurulumu, Nginx & DevOps',
    description: 'Nginx, Apache, Docker, Kubernetes, MariaDB, MySQL ve Redis optimizasyonu.',
    icon: <IconSettings className="h-6 w-6" />,
    link: '/kurumsal/iletisim',
    tag: 'DevOps',
  },
  {
    title: 'Kurumsal Cloud Mail & Anti-Spam',
    description: 'Yüksek kotalı kurumsal bulut mail ve gelişmiş anti-spam filtreleme sistemi.',
    icon: <IconMail className="h-6 w-6" />,
    link: '/e-posta/kurumsal-mail',
    tag: 'Cloud Mail',
  },
  {
    title: '1 Tbps+ DDoS Koruması & SSL',
    description: 'Donanımsal 1 Tbps+ DDoS filtreleme, SSL sertifikaları ve gelişmiş WAF koruması.',
    icon: <IconShieldLock className="h-6 w-6" />,
    link: '/e-posta/guvenlik-filtreleme',
    tag: '1 Tbps Shield',
  },
  {
    title: 'Otomatik Backup & Felaket Kurtarma',
    description: 'Otomatik periyodik yedekleme ve felaket anında hızlı geri yükleme çözümleri.',
    icon: <IconDeviceFloppy className="h-6 w-6" />,
    link: '/kurumsal/iletisim',
    tag: 'Günlük Yedek',
  },
];

export function WhatWeDo() {
  const [activeSide, setActiveSide] = useState<'software' | 'server'>('software');

  return (
    <section className="py-24 bg-[#070E1B] border-t border-slate-800/80" id="what-we-do">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-[#0B1528] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Bölüm 1: Faaliyet Alanlarımız
          </div>
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Ne Yapıyoruz?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Slider'ı sürükleyin veya sekmelere tıklayın: <br />
            <strong className="text-cyan-300">Sol taraf seçilince Yazılım çözümleri</strong>, <strong className="text-blue-400">Sağ taraf seçilince Sunucu altyapısı</strong> açılır.
          </p>
        </div>

        {/* 1. VISUAL SLIDER SELECTOR (FULL HORIZONTAL WIDTH) */}
        <div className="mb-14 w-full">
          <ImageComparison
            beforeImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&h=800&fit=crop&q=80"
            afterImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&h=800&fit=crop&q=80"
            beforeLabel="💻 Yazılım Hizmetleri"
            afterLabel="🖥️ Sunucu Altyapısı"
            altBefore="Sunucu Altyapısı"
            altAfter="Yazılım Çözümleri"
            activeSide={activeSide}
            onSideChange={(side) => setActiveSide(side)}
          />
        </div>

        {/* 2. DYNAMIC CONTENT OPENING BASED ON SELECTION */}
        <AnimatePresence mode="wait">
          
          {/* =========================================================
             SOL TARAF AÇILINCA: YAZILIM KISMI (HOVER EFFECT GRID)
             ========================================================= */}
          {activeSide === 'software' && (
            <motion.div
              key="software-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-cyan-500/40 bg-[#0B1528] p-8 lg:p-12 shadow-2xl shadow-cyan-500/5 w-full"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-400">
                    <Code2 className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-cyan-500/20 text-cyan-300 px-2.5 py-0.5 text-xs font-bold font-mono uppercase">SOL TARAF SEÇİLDİ</span>
                      <span className="text-xs text-slate-400">• 8 Yazılım Modülü</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Özel Yazılım ve Uygulama Çözümleri</h3>
                  </div>
                </div>

                <Link
                  href="/yazilim"
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00C2FF] to-[#00F5D4] px-6 py-3 text-xs sm:text-sm font-bold text-[#070E1B] shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all"
                >
                  <span>Tüm Yazılım Sayfasını Aç</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* FEATURES WITH HOVER EFFECTS (8-Grid for Software) */}
              <FeaturesSectionWithHoverEffects features={softwareFeatures} accentColor="cyan" />
            </motion.div>
          )}


          {/* =========================================================
             SAĞ TARAF AÇILINCA: SERVER SAYFASI (HOVER EFFECT GRID)
             ========================================================= */}
          {activeSide === 'server' && (
            <motion.div
              key="server-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-blue-500/40 bg-[#0B1528] p-8 lg:p-12 shadow-2xl shadow-blue-500/5 w-full"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 border border-blue-500/40 text-blue-400">
                    <Server className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-blue-500/20 text-blue-300 px-2.5 py-0.5 text-xs font-bold font-mono uppercase">SAĞ TARAF SEÇİLDİ</span>
                      <span className="text-xs text-slate-400">• 8 Sunucu Modülü</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Tier III Sunucu ve Barındırma Altyapısı</h3>
                  </div>
                </div>

                <Link
                  href="/web-hosting"
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-500/25 hover:scale-105 transition-all"
                >
                  <span>Tüm Sunucu Sayfasını Aç</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* FEATURES WITH HOVER EFFECTS (8-Grid for Server) */}
              <FeaturesSectionWithHoverEffects features={serverFeatures} accentColor="blue" />
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}
