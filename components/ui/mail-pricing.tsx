"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { CheckCheck, Database, Server, Mail, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export interface MailPricingPlan {
  name: string;
  category: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  buttonText: string;
  buttonVariant: "default" | "outline";
  popular?: boolean;
  badge?: string;
  features: { text: string; icon: React.ReactNode }[];
  includes: string[];
}

export const mailPricingPlans: MailPricingPlan[] = [
  {
    name: "Cloud Mail 10",
    category: "Başlangıç & KOBİ",
    description: "Küçük ölçekli işletmeler ve yeni girişimler için profesyonel e-posta altyapısı.",
    monthlyPrice: 2.5,
    yearlyPrice: 24,
    buttonText: "Hemen Sipariş Ver",
    buttonVariant: "outline",
    features: [
      { text: "10 Adet Kurumsal E-Posta", icon: <Mail size={20} /> },
      { text: "Hesap Başı 5 GB NVMe Alanı", icon: <Database size={20} /> },
      { text: "SpamAssassin Koruması", icon: <ShieldCheck size={20} /> },
    ],
    includes: [
      "Paket Kapsamı & Özellikler:",
      "Outlook, Thunderbird, iOS & Android Uyumlu",
      "Modern Webmail (Roundcube) Erişimi",
      "Otomatik Let's Encrypt SSL Şifreleme",
      "SPF, DKIM, DMARC Yapılandırması",
      "%99.9 E-Posta Teslimat Garantisi",
      "Ücretsiz E-Posta Taşıma Desteği",
    ],
  },
  {
    name: "Cloud Mail 50",
    category: "Büyüyen İşletmeler",
    description: "Büyüyen ekipler ve kurumsal iletişim trafiği yoğun olan şirketler için en popüler seçim.",
    monthlyPrice: 7.9,
    yearlyPrice: 79,
    buttonText: "Hemen Sipariş Ver",
    buttonVariant: "default",
    popular: true,
    badge: "EN ÇOK TERCİH EDİLEN",
    features: [
      { text: "50 Adet Kurumsal E-Posta", icon: <Mail size={20} /> },
      { text: "Hesap Başı 10 GB NVMe Alanı", icon: <Database size={20} /> },
      { text: "Anti-Spam & Gelişmiş Filtre", icon: <ShieldCheck size={20} /> },
    ],
    includes: [
      "Cloud Mail 10'a Ek Olarak:",
      "Özel Yönetici Paneli & Kota Dağıtımı",
      "Giden E-Posta IP İtibar Yönetimi",
      "Gelişmiş SPF, DKIM, DMARC & PTR Kayıtları",
      "7/24 Öncelikli Teknik Destek",
      "Akıllı Güvenlik Kalkanı & Karantina",
      "Toplu Kullanıcı İçe/Dışa Aktarma",
    ],
  },
  {
    name: "Kurumsal Mail PRO",
    category: "Gelişmiş Kurumsal",
    description: "Büyük ekipler, holdingler ve sınırsız kurumsal e-posta ihtiyacı duyan kurumlar için.",
    monthlyPrice: 14.9,
    yearlyPrice: 149,
    buttonText: "Hemen Sipariş Ver",
    buttonVariant: "outline",
    features: [
      { text: "Sınırsız E-Posta Hesabı", icon: <Mail size={20} /> },
      { text: "100 GB Paylaşımlı NVMe Havuzu", icon: <Database size={20} /> },
      { text: "Dedicated Kurumsal IP", icon: <Server size={20} /> },
    ],
    includes: [
      "Cloud Mail 50'ye Ek Olarak:",
      "Şirketinize Özel Ayrılmış Dedicated IP",
      "Gelişmiş Anti-SpamGateway Filtreleme",
      "Otomatik Günlük E-Posta Arşivleme",
      "Outlook Takvim & Kişiler Senkronizasyonu (CalDAV)",
      "Öncelikli Kurumsal SLA Desteği",
      "Sıfır Kesinti & Kesintisiz Yedekli MX Altyapısı",
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
  const [selected, setSelected] = useState("1");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className={cn("flex justify-center md:justify-start", className)}>
      <div className="relative z-10 flex w-fit rounded-2xl bg-white border border-[#E5E5E5] p-1.5 shadow-sm">
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
              layoutId="mail-switch-bg"
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
              layoutId="mail-switch-bg"
              className="absolute inset-0 rounded-xl bg-[#E50914] shadow-md shadow-[#E50914]/25"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yıllık Ödeme
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[10px] font-mono font-bold transition-colors",
                selected === "1" ? "bg-white text-[#E50914]" : "bg-[#E50914]/15 text-[#E50914]"
              )}
            >
              %20 Tasarruf
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export function MailPricingSection() {
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
      id="eposta-paketleri"
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
            İşletmeniz İçin Kurumsal E-Posta Paketleri
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed max-w-2xl"
        >
          Spam korumalı, yüksek teslimat oranlı, SSL şifreli ve tüm cihazlarla tam senkronize kurumsal e-posta altyapısı.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} className="w-fit" />
        </TimelineContent>
      </article>

      <div className="grid md:grid-cols-3 gap-6 py-4">
        {mailPricingPlans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={cn(
                "relative flex flex-col justify-between h-full border rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5",
                plan.popular
                  ? "border-[#E50914] bg-white ring-2 ring-[#E50914]/20 shadow-xl shadow-red-500/10"
                  : "border-[#E5E5E5] bg-white shadow-lg shadow-slate-200/40"
              )}
            >
              <CardHeader className="text-left pb-4">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold text-[#E50914] uppercase tracking-wider font-mono">
                    {plan.category}
                  </span>
                  {plan.popular && (
                    <span className="bg-[#E50914] text-white px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                      {plan.badge || "Popüler"}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#111111] mb-2">
                  {plan.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#555555] mb-4 min-h-[38px] leading-relaxed">
                  {plan.description}
                </p>

                <div className="flex items-baseline pt-2 border-t border-[#E5E5E5]">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-mono">
                    $
                    <NumberFlow
                      format={{
                        currency: "USD",
                      }}
                      value={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      className="text-3xl sm:text-4xl font-extrabold font-mono"
                    />
                  </span>
                  <span className="text-xs text-[#777777] ml-2 font-semibold font-mono">
                    /{isYearly ? "yıl" : "ay"}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-0 flex flex-col justify-between flex-1">
                <div>
                  {/* Quick Highlight Feature Pills */}
                  <div className="grid grid-cols-1 gap-2 my-4">
                    {plan.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2.5 bg-[#F9F9F9] p-2.5 rounded-xl border border-[#E5E5E5] text-xs font-semibold text-[#111111]"
                      >
                        <span className="text-[#E50914]">{feature.icon}</span>
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-4 border-t border-[#E5E5E5]">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#111111]">
                      {plan.includes[0]}
                    </h4>
                    <ul className="space-y-2">
                      {plan.includes.slice(1).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-xs text-[#4A4A4A]">
                          <span className="h-5 w-5 bg-white border border-[#E50914] rounded-full grid place-content-center mt-0.5 mr-2.5 flex-shrink-0">
                            <CheckCheck className="h-3.5 w-3.5 text-[#E50914]" />
                          </span>
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E5E5E5] space-y-2">
                  <Link
                    href={`/kurumsal/iletisim?hizmet=${encodeURIComponent(plan.name)}`}
                    className={cn(
                      "w-full py-3.5 px-4 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer",
                      plan.popular
                        ? "bg-[#E50914] text-white hover:bg-[#B91C1C] shadow-lg shadow-[#E50914]/25 hover:scale-[1.02]"
                        : "bg-[#111111] text-white hover:bg-slate-800 hover:scale-[1.02]"
                    )}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <a
                    href={`https://wa.me/905385926467?text=${encodeURIComponent(`Merhaba, ${plan.name} e-posta paketi hakkında bilgi ve teklif almak istiyorum.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 bg-white text-[#111111] border border-[#E5E5E5] hover:bg-[#F9F9F9] transition-all"
                  >
                    <span>WhatsApp'tan Danışın</span>
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

export default MailPricingSection;
