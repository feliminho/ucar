"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { Check, CheckCheck, HardDrive, Cpu, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export interface PricingPlan {
  name: string;
  category: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  buttonText: string;
  buttonVariant: "default" | "outline";
  popular?: boolean;
  badge?: string;
  disk: string;
  ram: string;
  sites: string;
  features: string[];
}

export const hostingPlans: PricingPlan[] = [
  {
    name: "EKO SSD 1",
    category: "Ekonomik",
    description: "Kişisel bloglar ve başlangıç seviyesindeki web siteleri için ideal.",
    monthlyPrice: 1.25,
    yearlyPrice: 11.25,
    buttonText: "Hemen Sipariş Ver",
    buttonVariant: "outline",
    disk: "1GB M2 SSD Disk",
    ram: "2 GB RAM",
    sites: "1 Adet Site Barındırma",
    features: [
      "1GB M2 SSD Disk",
      "2 GB RAM",
      "Sınırsız Aylık Trafik",
      "1 Adet Site Barındırma",
      "100 E-Mail Adresi",
      "Sınırsız FTP Hesabı",
      "2 Adet MySQL",
      "Anında Kurulum",
      "%100 CPU İzni",
      "PHP 5.6 - 8.3 Desteği",
      "Ortak PHP Ayarları",
      "Git Yönetimi",
      "WP Araç Yönetimi (WordPress Toolkit)",
      "Laravel Toolkit",
      "Node.js Desteği",
      "SSL Sertifikası Ücretsiz!",
    ],
  },
  {
    name: "PRO SSD 2",
    category: "Profesyonel",
    description: "Yüksek ziyaretçi alan kurumsal siteler ve e-ticaret için en popüler paket.",
    monthlyPrice: 4.80,
    yearlyPrice: 48.00,
    buttonText: "Hemen Sipariş Ver",
    buttonVariant: "default",
    popular: true,
    badge: "POPÜLER",
    disk: "5GB M2 SSD Disk",
    ram: "2 GB RAM",
    sites: "5 Adet Site Barındırma",
    features: [
      "5GB M2 SSD Disk",
      "2 GB RAM",
      "Sınırsız Aylık Trafik",
      "5 Adet Site Barındırma",
      "10 Adet SubDomain",
      "100 E-Mail Adresi",
      "20 Adet MySQL",
      "Sınırsız FTP Hesabı",
      "Anında Kurulum",
      "%100 CPU İzni",
      "PHP 5.6 - 8.3 Desteği",
      "Ortak PHP Ayarları",
      "Git Yönetimi",
      "WP Araç Yönetimi",
      "Laravel Toolkit",
      "Node.js Desteği",
      "SSL Sertifikası Ücretsiz!",
    ],
  },
  {
    name: "L BAYİİ",
    category: "Reseller",
    description: "Kendi müşterilerine hosting satmak isteyen ajans ve geliştiriciler için.",
    monthlyPrice: 12.00,
    yearlyPrice: 120.00,
    buttonText: "Hemen Sipariş Ver",
    buttonVariant: "outline",
    badge: "BAYİ RESELLER",
    disk: "15GB M2 SSD Disk",
    ram: "6 GB RAM",
    sites: "15 Adet Site Barındırma",
    features: [
      "15GB M2 SSD Disk",
      "6 GB RAM",
      "Sınırsız Aylık Trafik",
      "15 Adet Site Barındırma",
      "Sınırsız SubDomain",
      "Sınırsız E-Mail",
      "Sınırsız MySQL",
      "Sınırsız FTP Hesabı",
      "Anında Kurulum",
      "%100 CPU İzni",
      "PHP 5.6 - 8.3 Desteği",
      "Ortak PHP Ayarları",
      "Git Yönetimi",
      "WP Araç Yönetimi",
      "Laravel Toolkit",
      "Node.js Desteği",
      "SSL Sertifikası Ücretsiz!",
    ],
  },
];

const PricingSwitch = ({
  onSwitch,
  className,
}: {
  onSwitch: (value: string) => void;
  className?: string;
}) => {
  const [selected, setSelected] = useState("1"); // Default yearly

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className={cn("flex justify-center", className)}>
      <div className="relative z-10 mx-auto flex w-fit rounded-2xl bg-[#F4F4F0] border border-[#E5E5E5] p-1.5 shadow-xs">
        <button
          type="button"
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit cursor-pointer h-11 rounded-xl sm:px-6 px-4 font-bold transition-colors text-xs sm:text-sm",
            selected === "0" ? "text-white" : "text-[#111111] hover:text-[#E50914]"
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId="switch-bg"
              className="absolute inset-0 rounded-xl bg-[#111111] shadow-md"
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
            selected === "1" ? "text-white" : "text-[#111111] hover:text-[#E50914]"
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId="switch-bg"
              className="absolute inset-0 rounded-xl bg-[#E50914] shadow-md shadow-[#E50914]/25"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yıllık Ödeme
            <span className={cn(
              "rounded-full px-2 py-0.5 text-[10px] font-mono font-bold transition-colors",
              selected === "1" ? "bg-white text-[#E50914]" : "bg-[#E50914]/15 text-[#E50914]"
            )}>
              %20 İndirim
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection5() {
  const [isYearly, setIsYearly] = useState(true);
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
      className="px-4 py-16 max-w-7xl mx-auto relative bg-[#F9F9F9] text-[#111111]"
      ref={pricingRef}
      id="hosting-pricing"
    >
      <article className="text-center md:text-left mb-10 space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E50914]/25 bg-[#E50914]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E50914] shadow-xs">
          <Sparkles className="h-3.5 w-3.5" />
          Öne Çıkan Paketler
        </div>

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
            İşletmeniz İçin En Uygun Hosting Planını Seçin
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed max-w-2xl"
        >
          Yüksek performanslı M2 SSD altyapısı, LiteSpeed web sunucusu, ücretsiz SSL ve 7/24 kesintisiz mühendis desteği.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="pt-2"
        >
          <PricingSwitch onSwitch={togglePricingPeriod} className="w-fit md:mx-0" />
        </TimelineContent>
      </article>

      {/* Pricing Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8 py-6">
        {hostingPlans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
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
                    $
                    <NumberFlow
                      value={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      format={{
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
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

                  <div className="space-y-3 pt-4 border-t border-[#E5E5E5]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-3">
                      Paket Özellikleri
                    </h4>
                    <ul className="space-y-2.5 text-xs text-[#4A4A4A]">
                      {plan.features.slice(0, 8).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2.5">
                          <span className="h-5 w-5 bg-red-50 border border-red-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCheck className="h-3 w-3 text-[#E50914]" />
                          </span>
                          <span className={feature.includes("SSL") || feature.includes("Disk") || feature.includes("RAM") ? "font-bold text-[#111111]" : ""}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Additional View All Link */}
                <div className="pt-6 mt-6 border-t border-[#E5E5E5] text-center">
                  <Link
                    href="/web-hosting"
                    className="text-xs font-bold text-[#E50914] hover:underline inline-flex items-center gap-1"
                  >
                    Tüm özellikleri görüntüle →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>

      {/* 4. BOTTOM CLOUDLINUX / LITESPEED / IMUNIFY360 BADGES PNG */}
      <div className="mt-14 pt-10 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-8 bg-white p-8 rounded-3xl shadow-sm">
        <div>
          <h4 className="text-lg font-bold text-[#111111] mb-1">
            Güçlü ve Güvenli Sunucu Altyapısı
          </h4>
          <p className="text-xs text-[#555555] leading-relaxed max-w-xl">
            Tüm hosting sunucularımız <strong>CloudLinux</strong> izole hesap güvenliği, <strong>LiteSpeed</strong> ultra önbellekleme motoru ve <strong>Imunify360</strong> yapay zekâlı proaktif siber güvenlik duvarı ile korunmaktadır.
          </p>
        </div>

        <div className="flex-shrink-0 flex items-center justify-center p-3 rounded-2xl bg-[#F9F9F9] border border-[#E5E5E5]">
          <img
            src="/hosting-badges.png"
            alt="CloudLinux, LiteSpeed, Imunify360 Güvenlik Altyapısı"
            className="h-20 sm:h-24 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
