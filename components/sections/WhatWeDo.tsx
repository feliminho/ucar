'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageComparison } from '@/components/ui/image-comparison-slider';
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
import { cn } from '@/lib/utils';

export interface FeatureCardItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  tag: string;
}

const softwareFeatures: FeatureCardItem[] = [
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

const serverFeatures: FeatureCardItem[] = [
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
    <section className="py-24 bg-[#F9F9F9] text-[#111111] border-y border-[#E5E5E5]" id="what-we-do">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E50914]/25 bg-[#E50914]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E50914] mb-4 shadow-xs">
            <Sparkles className="h-3.5 w-3.5" />
            Bölüm 1: Faaliyet Alanlarımız
          </div>
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-[#111111] tracking-tight mb-4">
            Ne Yapıyoruz?
          </h2>
          <p className="text-base sm:text-lg text-[#1A1A1A] leading-relaxed">
            İşletmenizin ihtiyacına göre <strong className="text-[#E50914]">Özel Yazılım Çözümleri</strong> ve <strong className="text-[#111111]">Tier III Sunucu Altyapısını</strong> tek çatı altında sunuyoruz.
          </p>
        </div>

        {/* 1. VISUAL SLIDER SELECTOR (FULL WIDTH) */}
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

        {/* 2. DYNAMIC CONTENT (#F9F9F9 KIRIK BEYAZ ARKA PLAN, #111111 SİYAH YAZI, #E50914 KIRMIZI VURGU) */}
        <AnimatePresence mode="wait">
          
          {/* YAZILIM KISMI */}
          {activeSide === 'software' && (
            <motion.div
              key="software-section"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl border border-[#E5E5E5] bg-white p-8 lg:p-12 shadow-xl shadow-slate-200/60 w-full"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-[#E5E5E5] mb-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E50914] text-white shadow-lg shadow-[#E50914]/25">
                    <Code2 className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">Özel Yazılım ve Uygulama Çözümleri</h3>
                    <p className="text-xs sm:text-sm text-[#1A1A1A] mt-1">İşletmenizin süreçlerine %100 özel, ölçeklenebilir ve modern yazılımlar</p>
                  </div>
                </div>

                <Link
                  href="/yazilim"
                  className="flex items-center gap-2 rounded-xl bg-[#E50914] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#B91C1C] hover:scale-105 transition-all"
                >
                  <span>Tüm Yazılım Sayfasını Aç</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* 8-Grid Hover Effects (#111111 Text, #E50914 Red Highlights) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
                {softwareFeatures.map((feature, index) => (
                  <Link
                    key={feature.title}
                    href={feature.link}
                    className={cn(
                      "flex flex-col lg:border-r py-8 relative group/feature border-[#E5E5E5] transition-colors hover:bg-red-50/40",
                      (index === 0 || index === 4) && "lg:border-l border-[#E5E5E5]",
                      index < 4 && "lg:border-b border-[#E5E5E5]"
                    )}
                  >
                    <div className="mb-4 relative z-10 px-8 flex items-center justify-between">
                      <div className="text-[#E50914] transition-colors duration-200 group-hover/feature:text-[#111111]">
                        {feature.icon}
                      </div>
                      <span className="rounded-md bg-[#F4F4F0] border border-[#E5E5E5] px-2 py-0.5 text-[10px] font-mono font-bold text-[#111111]">
                        {feature.tag}
                      </span>
                    </div>

                    <div className="text-base font-bold mb-2 relative z-10 px-8">
                      <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-[#E5E5E5] group-hover/feature:bg-[#E50914] transition-all duration-200 origin-center" />
                      <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#111111]">
                        {feature.title}
                      </span>
                    </div>

                    <p className="text-xs text-[#1A1A1A] leading-relaxed max-w-xs relative z-10 px-8">
                      {feature.description}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}


          {/* SERVER KISMI */}
          {activeSide === 'server' && (
            <motion.div
              key="server-section"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl border border-[#E5E5E5] bg-white p-8 lg:p-12 shadow-xl shadow-slate-200/60 w-full"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-[#E5E5E5] mb-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#111111] text-white shadow-lg">
                    <Server className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">Tier III Sunucu ve Barındırma Altyapısı</h3>
                    <p className="text-xs sm:text-sm text-[#1A1A1A] mt-1">İstanbul Tier III Veri Merkezi, %99.98 Uptime ve 1 Gbps port gücü</p>
                  </div>
                </div>

                <Link
                  href="/web-hosting"
                  className="flex items-center gap-2 rounded-xl bg-[#111111] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#1A1A1A] hover:scale-105 transition-all"
                >
                  <span>Tüm Sunucu Sayfasını Aç</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* 8-Grid Hover Effects (#111111 Text, Red/Black Highlights) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
                {serverFeatures.map((feature, index) => (
                  <Link
                    key={feature.title}
                    href={feature.link}
                    className={cn(
                      "flex flex-col lg:border-r py-8 relative group/feature border-[#E5E5E5] transition-colors hover:bg-slate-50",
                      (index === 0 || index === 4) && "lg:border-l border-[#E5E5E5]",
                      index < 4 && "lg:border-b border-[#E5E5E5]"
                    )}
                  >
                    <div className="mb-4 relative z-10 px-8 flex items-center justify-between">
                      <div className="text-[#111111] transition-colors duration-200 group-hover/feature:text-[#E50914]">
                        {feature.icon}
                      </div>
                      <span className="rounded-md bg-[#F4F4F0] border border-[#E5E5E5] px-2 py-0.5 text-[10px] font-mono font-bold text-[#111111]">
                        {feature.tag}
                      </span>
                    </div>

                    <div className="text-base font-bold mb-2 relative z-10 px-8">
                      <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-[#E5E5E5] group-hover/feature:bg-[#111111] transition-all duration-200 origin-center" />
                      <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#111111]">
                        {feature.title}
                      </span>
                    </div>

                    <p className="text-xs text-[#1A1A1A] leading-relaxed max-w-xs relative z-10 px-8">
                      {feature.description}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}
