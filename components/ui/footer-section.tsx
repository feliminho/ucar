'use client';

import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ShieldCheck,
  Server,
  Code2,
  Mail,
  PhoneCall,
  MapPin,
  CheckCircle2,
  Globe,
  Share2,
} from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Hizmetlerimiz',
    links: [
      { title: 'Alan Adı Tescil & Sorgulama', href: '/alan-adi' },
      { title: 'VDS Sunucu Kiralama', href: '/sunucu-barindirma/vds-sunucu' },
      { title: 'Fiziksel Dedicated Sunucu', href: '/sunucu-barindirma/fiziksel-sunucu' },
      { title: 'Web Hosting Paketleri', href: '/web-hosting' },
      { title: 'Reseller (Bayi) Hosting', href: '/web-hosting?kategori=reseller' },
      { title: 'Kurumsal Bulut E-Posta', href: '/e-posta' },
    ],
  },
  {
    label: 'Yazılım Çözümleri',
    links: [
      { title: 'Özel Web & Kurumsal Yazılım', href: '/yazilim?hizmet=ozel-yazilim' },
      { title: 'iOS & Android Mobil Uygulama', href: '/yazilim?hizmet=mobil-uygulama' },
      { title: 'ERP & CRM Yönetim Sistemleri', href: '/yazilim?hizmet=erp-crm' },
      { title: 'B2B / B2C E-Ticaret Altyapısı', href: '/yazilim?hizmet=e-ticaret' },
      { title: 'Pazaryeri & GİB Entegrasyonu', href: '/yazilim?hizmet=api-entegrasyon' },
      { title: 'Yapay Zekâ (LLM) & RAG Çözümleri', href: '/yazilim?hizmet=yapay-zeka' },
    ],
  },
  {
    label: 'Kurumsal',
    links: [
      { title: 'Hakkımızda & Vizyon', href: '/kurumsal?sayfa=hakkimizda' },
      { title: 'Tier III Veri Merkezi', href: '/kurumsal?sayfa=veri-merkezi' },
      { title: 'Referanslar & Projeler', href: '/kurumsal?sayfa=referanslar' },
      { title: 'Bize Ulaşın & Teklif Al', href: '/kurumsal/iletisim' },
    ],
  },
  {
    label: 'İletişim & Destek',
    links: [
      { title: '0538 592 6467', href: 'tel:05385926467', icon: PhoneCall },
      { title: 'WhatsApp Destek', href: 'https://wa.me/905385926467', icon: FaWhatsapp },
      { title: 'Instagram @ucaryazilim', href: 'https://instagram.com/ucaryazilim', icon: FaInstagram },
      { title: 'İstanbul Veri Merkezi', href: '/kurumsal?sayfa=veri-merkezi', icon: MapPin },
      { title: '7/24 Teknik SLA', href: '/kurumsal/iletisim', icon: Globe },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full border-t border-[#E5E5E5] bg-[#111111] text-white pt-16 pb-12 overflow-hidden">
      {/* Subtle radial light highlight at top */}
      <div className="absolute top-0 right-1/2 left-1/2 h-px w-2/3 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#E50914] to-transparent blur-xs opacity-70" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid w-full gap-10 xl:grid-cols-12 xl:gap-12">
          
          {/* Brand Info */}
          <AnimatedContainer className="space-y-5 xl:col-span-4">
            <Link
              href="/"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                }
              }}
              className="inline-flex items-center gap-3"
            >
              <img
                src="/logo.png"
                alt="Uçar Yazılım Logo"
                className="h-11 w-auto max-w-[200px] object-contain brightness-0 invert"
              />
            </Link>

            <p style={{ color: '#F4F4F0' }} className="text-xs leading-relaxed max-w-sm">
              Tier III İstanbul veri merkezi altyapısı, yüksek performanslı bulut sunucular, modern kurumsal yazılımlar ve 7/24 kesintisiz teknik destek.
            </p>
          </AnimatedContainer>

          {/* Links 4-Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 xl:col-span-8">
            {footerLinks.map((section, index) => (
              <AnimatedContainer key={section.label} delay={0.1 + index * 0.08}>
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#E50914] mb-4">
                    {section.label}
                  </h3>
                  <ul className="space-y-2.5 text-xs">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          onClick={() => {
                            if (typeof window !== 'undefined') {
                              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                            }
                          }}
                          style={{ color: '#F4F4F0' }}
                          className="inline-flex items-center gap-1.5 hover:text-white hover:underline transition-colors duration-200"
                        >
                          {link.icon && <link.icon className="h-3.5 w-3.5 text-[#E50914] shrink-0" />}
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p style={{ color: '#F4F4F0' }}>
            © 2026 Uçar Yazılım Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/kurumsal?sayfa=hakkimizda"
              onClick={() => {
                if (typeof window !== 'undefined') window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              }}
              style={{ color: '#F4F4F0' }}
              className="hover:text-white hover:underline transition-colors"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/kurumsal?sayfa=hakkimizda"
              onClick={() => {
                if (typeof window !== 'undefined') window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              }}
              style={{ color: '#F4F4F0' }}
              className="hover:text-white hover:underline transition-colors"
            >
              Hizmet Şartları
            </Link>
            <Link
              href="/kurumsal/iletisim"
              onClick={() => {
                if (typeof window !== 'undefined') window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              }}
              style={{ color: '#F4F4F0' }}
              className="hover:text-white hover:underline transition-colors"
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Footer;
