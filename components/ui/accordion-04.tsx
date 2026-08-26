'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FAQItem {
  id: string;
  title: string;
  content: string;
  tag?: string;
}

export const hostingFAQItems: FAQItem[] = [
  {
    id: '01',
    title: 'Hosting siparişim ne zaman ve nasıl aktif olur?',
    content:
      'Kredi kartı veya havale ile onaylanan tüm Web Hosting ve Reseller siparişleri anında otomatik olarak provizyonlanır. cPanel/WHM giriş bilgileriniz ve DNS adresleriniz saniyeler içinde e-posta adresinize iletilir.',
    tag: 'Aktivasyon',
  },
  {
    id: '02',
    title: 'Farklı bir firmadaki web sitelerimi ücretsiz taşıyor musunuz?',
    content:
      'Evet! Farklı bir hosting firmasındaki cPanel, Plesk veya DirectAdmin hesaplarınızı uzman teknik ekibimiz sıfır kesinti ve veri kaybı olmadan ücretsiz olarak yeni sunucularımıza taşımaktadır.',
    tag: 'Ücretsiz Taşıma',
  },
  {
    id: '03',
    title: 'Reseller (Bayi) hosting ile kendi müşterilerime hosting satabilir miyim?',
    content:
      'Evet. Size tahsis edilen WHM (Web Host Manager) kontrol paneli üzerinden istediğiniz disk, trafik ve e-posta kotalarında bağımsız cPanel hesapları oluşturabilir, kendi markanızla müşterilerinize hosting hizmeti satabilirsiniz.',
    tag: 'Bayi Yönetimi',
  },
  {
    id: '04',
    title: 'Ücretsiz SSL sertifikası tüm alan adları için geçerli mi?',
    content:
      'Evet. Hesabınıza eklediğiniz ana domain, alt domain (subdomain) ve takma adlar (alias) için Let’s Encrypt SSL sertifikası otomatik olarak tanımlanır ve 90 günde bir sistem tarafından yenilenir.',
    tag: 'SSL & Güvenlik',
  },
  {
    id: '05',
    title: 'Web sitelerim için günlük veya haftalık yedekleme yapılıyor mu?',
    content:
      'Tüm sunucularımızda haftalık periyotlarla imaj yedeklemesi ve cPanel üzerinden dilediğiniz an tek tıkla tam hesap yedeği alma imkânı standart olarak sunulmaktadır.',
    tag: 'Yedekleme',
  },
];

export function Accordion02({
  items = hostingFAQItems,
  className,
}: {
  items?: FAQItem[];
  className?: string;
}) {
  return (
    <div className={cn('w-full max-w-4xl mx-auto', className)}>
      <Accordion type="single" defaultValue="01" collapsible className="w-full space-y-3">
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="group border border-[#E5E5E5] bg-white rounded-2xl overflow-hidden transition-all data-[state=open]:border-[#E50914] data-[state=open]:shadow-md"
          >
            <AccordionTrigger className="text-left p-5 hover:no-underline cursor-pointer [&>svg]:hidden">
              <div className="flex flex-1 items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#E50914] rounded-md bg-red-50 border border-red-100 px-2.5 py-1">
                    {item.id}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#111111] tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Animated Plus / X Toggle Icon */}
                <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-[#F9F9F9] border border-[#E5E5E5] text-[#E50914] flex-shrink-0">
                  <Plus
                    id="plus"
                    strokeWidth={2.5}
                    className={cn(
                      'h-4 w-4 shrink-0 transition-all duration-300',
                      'group-data-[state=open]:opacity-0 group-data-[state=open]:rotate-90'
                    )}
                  />
                  <X
                    id="minus"
                    strokeWidth={2.5}
                    className={cn(
                      'absolute inset-0 m-auto h-4 w-4 opacity-0 transition-all duration-300',
                      'group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-90'
                    )}
                  />
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="p-6 pt-3 text-sm sm:text-base text-[#4A4A4A] leading-relaxed border-t border-[#E5E5E5]/60">
              <div className="pl-2 border-l-2 border-[#E50914]">
                {item.content}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export const Accordion04 = Accordion02;
