'use client';

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  IconTerminal2,
  IconDeviceMobile,
  IconWorld,
  IconBuildingStore,
  IconUsers,
  IconShoppingCart,
  IconApiApp,
  IconRobot,
  IconBuildingFactory2,
  IconServer,
  IconDatabase,
  IconCloud,
  IconShare,
  IconSettings,
  IconMail,
  IconShieldLock,
  IconDeviceFloppy,
} from "@tabler/icons-react";

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  tag?: string;
}

export function FeaturesSectionWithHoverEffects({
  features,
  accentColor = "blue",
}: {
  features?: FeatureItem[];
  accentColor?: "cyan" | "blue" | "emerald";
}) {
  const defaultFeatures: FeatureItem[] = [
    {
      title: "Özel Yazılım Çözümleri",
      description: "İş süreçlerine ve şirket ihtiyaçlarına özel sıfırdan geliştirilen mimariler.",
      icon: <IconTerminal2 className="h-6 w-6" />,
      link: "/yazilim/ozel-yazilim",
      tag: "Web & Masaüstü",
    },
    {
      title: "Mobil Uygulama (iOS & Android)",
      description: "App Store ve Google Play standartlarında modern native/hybrid mobil uygulamalar.",
      icon: <IconDeviceMobile className="h-6 w-6" />,
      link: "/yazilim/mobil-uygulama",
      tag: "Swift / Flutter",
    },
    {
      title: "Kurumsal Web & Portallar",
      description: "SEO uyumlu, mobil duyarlı ve yönetim panelli kurumsal web çözümleri.",
      icon: <IconWorld className="h-6 w-6" />,
      link: "/yazilim/ozel-yazilim",
      tag: "Next.js 15",
    },
    {
      title: "ERP Kaynak Planlama",
      description: "Stok, finans, muhasebe, satın alma ve üretim süreçlerini tek merkezde toplayan sistemler.",
      icon: <IconBuildingStore className="h-6 w-6" />,
      link: "/yazilim/erp-crm",
      tag: "Stok & Ön Muhasebe",
    },
    {
      title: "CRM Müşteri İlişkileri",
      description: "Müşteri takibi, satış döngüsü, teklif yönetimi ve görev organizasyon sistemleri.",
      icon: <IconUsers className="h-6 w-6" />,
      link: "/yazilim/erp-crm",
      tag: "Satış & Teklif",
    },
    {
      title: "E-Ticaret & Sanal POS",
      description: "B2B/B2C e-ticaret platformları, sanal POS ve otomatik kargo entegrasyonu.",
      icon: <IconShoppingCart className="h-6 w-6" />,
      link: "/yazilim/e-ticaret",
      tag: "Pazaryeri & POS",
    },
    {
      title: "API & Pazaryeri Entegrasyonu",
      description: "Trendyol, Hepsiburada, Amazon, Logo ve GİB E-Fatura çift yönlü senkronizasyon.",
      icon: <IconApiApp className="h-6 w-6" />,
      link: "/yazilim/api-entegrasyon",
      tag: "Tam Otomasyon",
    },
    {
      title: "Yapay Zekâ (AI) & LLM",
      description: "OpenAI, Claude ve Gemini modelleriyle şirket içi akıllı asistanlar ve veri analitiği.",
      icon: <IconRobot className="h-6 w-6" />,
      link: "/yazilim/yapay-zeka",
      tag: "GPT-4 & Gemini",
    },
  ];

  const items = features || defaultFeatures;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-6 max-w-7xl mx-auto">
      {items.map((feature, index) => (
        <Feature
          key={feature.title}
          {...feature}
          index={index}
          accentColor={accentColor}
        />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  link = "#",
  tag,
  index,
  accentColor = "blue",
}: FeatureItem & {
  index: number;
  accentColor?: "cyan" | "blue" | "emerald";
}) => {
  const accentBarColor =
    accentColor === "cyan"
      ? "group-hover/feature:bg-[#00F5D4]"
      : accentColor === "emerald"
      ? "group-hover/feature:bg-emerald-400"
      : "group-hover/feature:bg-blue-500";

  const accentIconColor =
    accentColor === "cyan"
      ? "group-hover/feature:text-[#00F5D4]"
      : accentColor === "emerald"
      ? "group-hover/feature:text-emerald-400"
      : "group-hover/feature:text-blue-400";

  return (
    <Link
      href={link}
      className={cn(
        "flex flex-col lg:border-r py-8 relative group/feature border-slate-800 transition-colors",
        (index === 0 || index === 4) && "lg:border-l border-slate-800",
        index < 4 && "lg:border-b border-slate-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-slate-900/80 to-transparent pointer-events-none" />
      )}
      
      {/* Icon & Tag */}
      <div className="mb-4 relative z-10 px-8 flex items-center justify-between">
        <div className={cn("text-slate-400 transition-colors duration-200", accentIconColor)}>
          {icon}
        </div>
        {tag && (
          <span className="rounded-md bg-slate-800/80 border border-slate-700/60 px-2 py-0.5 text-[10px] font-mono font-bold text-slate-300">
            {tag}
          </span>
        )}
      </div>

      {/* Title with Left Accent Bar */}
      <div className="text-base font-bold mb-2 relative z-10 px-8">
        <div
          className={cn(
            "absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-slate-700 transition-all duration-200 origin-center",
            accentBarColor
          )}
        />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs text-slate-400 leading-relaxed max-w-xs relative z-10 px-8">
        {description}
      </p>
    </Link>
  );
};
