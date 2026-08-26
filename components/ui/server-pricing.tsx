"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { CheckCheck, Cpu, HardDrive, ShieldCheck, Server, ArrowRight, Zap, Check } from "lucide-react";
import { motion } from "framer-motion";

export interface ServerPricingPlan {
  id: string;
  name: string;
  category: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  buttonText: string;
  buttonVariant: "default" | "outline";
  popular?: boolean;
  badge?: string;
  specs: {
    cpu: string;
    ram: string;
    disk: string;
    port: string;
  };
  features: string[];
}

export const serverPricingPlans: ServerPricingPlan[] = [
  {
    id: "vds-baslangic",
    name: "VDS Başlangıç",
    category: "VDS Sunucu",
    description: "Web projeleri, API servisleri ve başlangıç seviyesi kurumsal uygulamalar için.",
    monthlyPrice: 199,
    yearlyPrice: 1990,
    buttonText: "Hemen Sipariş Ver",
    buttonVariant: "outline",
    specs: {
      cpu: "2 vCPU Intel Xeon",
      ram: "4 GB DDR4 RAM",
      disk: "50 GB NVMe SSD",
      port: "1 Gbps Port Hızı",
    },
    features: [
      "2 vCPU Intel Xeon İşlemci",
      "4 GB Yüksek Hızlı RAM",
      "50 GB NVMe SSD Disk",
      "Sınırsız Aylık Trafik",
      "1 Adet Sabit Statik IP",
      "Tam Root / SSH Erişimi",
      "Linux / Windows OS Seçeneği",
      "1 Gbps Port & 100 Mbps Garanti",
      "Ücretsiz Yeniden Kurulum",
      "Donanımsal DDoS Koruması",
    ],
  },
  {
    id: "reseller-bayi",
    name: "Reseller (Bayi)",
    category: "Bayi Sunucu",
    description: "Kendi müşterilerine hosting satmak ve çoklu site yönetmek isteyen ajans ve geliştiriciler için.",
    monthlyPrice: 349,
    yearlyPrice: 3490,
    buttonText: "Hemen Sipariş Ver",
    buttonVariant: "default",
    popular: true,
    badge: "EN POPÜLER",
    specs: {
      cpu: "4 Core CloudLinux",
      ram: "8 GB DDR4 RAM",
      disk: "100 GB NVMe SSD",
      port: "1 Gbps Port Hızı",
    },
    features: [
      "CloudLinux İzolasyon & Güvenlik",
      "8 GB Yüksek Hızlı RAM",
      "100 GB Ultra NVMe SSD Disk",
      "Sınırsız Web Sitesi Barındırma",
      "cPanel / WHM Bayi Yönetim Paneli",
      "Sınırsız E-Posta & Veritabanı",
      "Ücretsiz SSL & Otomatik Kurulum",
      "1 Gbps Port & Donanımsal DDoS Koruma",
      "Haftalık Otomatik Yedekleme",
      "Özel Nameserver (ns1/ns2) Desteği",
    ],
  },
  {
    id: "dedicated-kurumsal",
    name: "Fiziksel Dedicated",
    category: "Fiziksel Sunucu",
    description: "Maksimum performans, izolasyon ve tam donanım kontrolü gerektiren büyük kurumsal yapılar için.",
    monthlyPrice: 1499,
    yearlyPrice: 14990,
    buttonText: "Hemen Sipariş Ver",
    buttonVariant: "outline",
    badge: "MAKSİMUM GÜÇ",
    specs: {
      cpu: "8 Core Intel Xeon E-2276G",
      ram: "32 GB ECC RAM",
      disk: "2x 500GB NVMe RAID",
      port: "1 Gbps Port Hızı",
    },
    features: [
      "Intel Xeon E-2276G (8 Core)",
      "32 GB ECC DDR4 RAM",
      "2x 500 GB NVMe SSD (Hardware RAID)",
      "Sınırsız Aylık Trafik",
      "5 Adet Sabit Statik IP",
      "KVM / IPMI Uzaktan Yönetim",
      "%100 Donanım İzolasyonu",
      "1 Gbps Dedicated Port",
      "7/24 Donanım Değişim Garantisi",
      "Özel Donanımsal Firewall",
    ],
  },
];

const ServerPricingSwitch = ({
  onSwitch,
  className,
}: {
  onSwitch: (value: string) => void;
  className?: string;
}) => {
  const [selected, setSelected] = useState("0"); // Default monthly

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className={cn("flex justify-center md:justify-start", className)}>
      <div className="relative z-10 flex w-fit rounded-2xl bg-slate-950/80 border border-slate-700/80 p-1.5 shadow-xl backdrop-blur-md">
        <button
          type="button"
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit cursor-pointer h-11 rounded-xl sm:px-6 px-4 font-bold transition-colors text-xs sm:text-sm",
            selected === "0" ? "text-white" : "text-slate-400 hover:text-white"
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId="server-switch-bg"
              className="absolute inset-0 rounded-xl bg-[#E50914] shadow-md shadow-[#E50914]/30"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Aylık Ödeme</span>
        </button>

        <button
          type="button"
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit cursor-pointer h-11 flex-shrink-0 rounded-xl sm:px-6 px-4 font-bold transition-colors text-xs sm:text-sm",
            selected === "1" ? "text-white" : "text-slate-400 hover:text-white"
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId="server-switch-bg"
              className="absolute inset-0 rounded-xl bg-[#E50914] shadow-md shadow-[#E50914]/30"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yıllık Ödeme
            <span className={cn(
              "rounded-full px-2 py-0.5 text-[10px] font-mono font-bold transition-colors",
              selected === "1" ? "bg-white text-[#E50914]" : "bg-[#E50914]/20 text-[#E50914]"
            )}>
              2 Ay Ücretsiz
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function ServerPricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.4,
      },
    }),
    hidden: {
      filter: "blur(6px)",
      y: 20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      className="px-4 py-12 max-w-7xl mx-auto relative text-[#111111]"
      ref={pricingRef}
      id="sunucu-paketleri"
    >
      <article className="text-center md:text-left mb-10 space-y-4 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.08}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-start"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            İhtiyacınıza Özel Sunucu Yapılandırmaları
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-2xl"
        >
          Tam root erişimi, %100 NVMe SSD depolama, 1 Gbps yedekli hat ve Tier III veri merkezi güvencesiyle yüksek performanslı sunucular.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="pt-2"
        >
          <ServerPricingSwitch onSwitch={togglePricingPeriod} className="w-fit md:mx-0" />
        </TimelineContent>
      </article>

      {/* Pricing Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8 py-6">
        {serverPricingPlans.map((plan, index) => (
          <TimelineContent
            key={plan.id}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={cn(
                "relative rounded-3xl border bg-white transition-all hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between h-full",
                plan.popular
                  ? "border-[#E50914] shadow-xl shadow-red-500/10 ring-2 ring-[#E50914]/20"
                  : "border-[#E5E5E5] shadow-lg shadow-slate-200/40 hover:border-[#111111]"
              )}
            >
              <CardHeader className="text-left p-7 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono font-bold text-[#E50914] uppercase tracking-wider">
                    {plan.category}
                  </span>
                  {plan.badge && (
                    <span className="bg-[#E50914] text-white px-3 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase shadow-xs">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-black text-[#111111] mb-2">
                  {plan.name}
                </h3>

                <p className="text-xs text-[#555555] mb-5 leading-relaxed min-h-[36px]">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 pt-2 border-t border-[#E5E5E5]">
                  <span className="text-3xl sm:text-4xl font-black text-[#111111] font-mono">
                    ₺
                    <NumberFlow
                      value={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      format={{
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }}
                      className="font-mono text-3xl sm:text-4xl font-black"
                    />
                  </span>
                  <span className="text-xs font-semibold text-[#777777]">
                    /{isYearly ? "yıl" : "ay"}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="p-7 pt-2 flex flex-col justify-between flex-1">
                <div>
                  <Link
                    href={`/kurumsal/iletisim?paket=${encodeURIComponent(plan.name)}`}
                    className={cn(
                      "w-full mb-6 py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md",
                      plan.popular
                        ? "bg-[#E50914] text-white hover:bg-[#B91C1C] shadow-[#E50914]/25 hover:scale-[1.02]"
                        : "bg-[#111111] text-white hover:bg-slate-800"
                    )}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  {/* Hardware Quick Specs Grid */}
                  <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 border border-slate-100 rounded-2xl mb-5 text-[11px] font-semibold text-slate-700 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Cpu className="h-3.5 w-3.5 text-[#E50914] flex-shrink-0" />
                      <span className="truncate">{plan.specs.cpu}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Zap className="h-3.5 w-3.5 text-[#E50914] flex-shrink-0" />
                      <span className="truncate">{plan.specs.ram}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <HardDrive className="h-3.5 w-3.5 text-[#E50914] flex-shrink-0" />
                      <span className="truncate">{plan.specs.disk}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Server className="h-3.5 w-3.5 text-[#E50914] flex-shrink-0" />
                      <span className="truncate">{plan.specs.port}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-[#E5E5E5]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-3">
                      Dahil Olan Özellikler
                    </h4>
                    <ul className="space-y-2.5 text-xs text-[#4A4A4A]">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2.5">
                          <span className="h-5 w-5 bg-red-50 border border-red-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCheck className="h-3 w-3 text-[#E50914]" />
                          </span>
                          <span className={feature.includes("NVMe") || feature.includes("RAM") || feature.includes("Root") || feature.includes("DDoS") ? "font-bold text-[#111111]" : ""}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct WhatsApp consultation */}
                <div className="pt-5 mt-5 border-t border-[#E5E5E5] flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Özel Yapılandırma?</span>
                  <a
                    href={`https://wa.me/905385926467?text=${encodeURIComponent(`Merhaba, ${plan.name} hakkında bilgi almak istiyorum.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#E50914] hover:underline inline-flex items-center gap-1"
                  >
                    WhatsApp Destek →
                  </a>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}
