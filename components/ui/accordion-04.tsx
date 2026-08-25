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

const defaultItems: FAQItem[] = [
  {
    id: '01',
    title: 'Hangi yazılım dillerini ve mimarileri kullanıyorsunuz?',
    content:
      "Tüm projelerimizi modern ve ölçeklenebilir teknolojilerle sıfırdan geliştiriyoruz. Frontend'de Next.js 15, React ve TypeScript; backend'de Go, Node.js, Python, PostgreSQL ve Redis; mobil tarafta ise native Swift ve Kotlin/Flutter mimarilerini tercih ediyoruz.",
    tag: 'Yazılım',
  },
  {
    id: '02',
    title: 'Sunucularınız nerede barındırılıyor ve uptime oranınız nedir?',
    content:
      'Sunucularımız İstanbul Tier III sertifikalı veri merkezinde, 1 Gbps yedekli fiber hatlar ve %99.98 SLA kesintisiz erişim garantisiyle 7/24 donanımsal DDoS koruması altında barındırılmaktadır.',
    tag: 'Sunucu & Altyapı',
  },
  {
    id: '03',
    title: 'Geliştirilen yazılımlarda kaynak kodlar teslim ediliyor mu?',
    content:
      "Evet. Özel yazılım projelerimizde lisanslama veya vendor lock-in olmadan, tüm kaynak kodlar, CI/CD dağıtım pipeline'ları ve teknik mimari dokümantasyonu şirketinizin mülkiyetine eksiksiz teslim edilir.",
    tag: 'Telif & Mülkiyet',
  },
  {
    id: '04',
    title: 'Pazaryeri ve ERP entegrasyonları ne kadar sürer?',
    content:
      'Trendyol, Amazon, Hepsiburada, Logo, Mikro ve GİB E-Fatura API entegrasyonları genellikle 3 ila 7 iş günü içinde test ortamından canlıya çift yönlü senkronizasyonla başarıyla aktarılır.',
    tag: 'Entegrasyon',
  },
  {
    id: '05',
    title: 'Otomatik yedekleme ve DDoS filtreleme standart mı?',
    content:
      'Evet. Tüm VDS ve Web Hosting paketlerimizde 1 Tbps+ donanımsal DDoS filtreleme ve günlük/haftalık otomatik felaket kurtarma yedekleme hizmeti standart olarak sunulmaktadır.',
    tag: 'Güvenlik & SLA',
  },
  {
    id: '06',
    title: 'Yapay zekâ asistanlarını şirket verilerimizle nasıl eğitiyorsunuz?',
    content:
      'OpenAI, Claude ve Gemini modellerini RAG (Retrieval-Augmented Generation) mimarisiyle izole ederek şirketinizin PDF, Excel, ERP ve CRM veri tabanına entegre ediyoruz; verileriniz asla dışarı sızdırılmaz.',
    tag: 'Yapay Zekâ',
  },
  {
    id: '07',
    title: 'Satış sonrası destek ve SLA şartlarınız nasıldır?',
    content:
      '7/24 acil telefon hattı (0850 000 00 00) ve anlık destek bilet sistemiyle kritik arızalara 15 dakika içinde doğrudan sistem mühendisi seviyesinde müdahale garantisi veriyoruz.',
    tag: '7/24 Destek',
  },
  {
    id: '08',
    title: 'Nasıl teklif alabilir veya demo randevusu oluşturabilirim?',
    content:
      "Sitemizdeki 'Teklif Al' butonunu kullanabilir, info@furkantech.com adresine yazabilir veya doğrudan çağrı merkezimizle iletişime geçerek aynı gün içinde detaylı teknik teklif alabilirsiniz.",
    tag: 'Teklif & İletişim',
  },
];

export function Accordion04({ items = defaultItems }: { items?: FAQItem[] }) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Accordion type="single" defaultValue="01" collapsible className="w-full space-y-3">
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="rounded-2xl border border-slate-800/80 bg-[#0B1528] overflow-hidden transition-all duration-300 data-[state=open]:border-cyan-500/50 data-[state=open]:shadow-xl data-[state=open]:shadow-cyan-500/5"
          >
            <AccordionTrigger className="text-left p-2 data-[state=open]:rounded-b-none data-[state=open]:bg-cyan-500/10 duration-300 hover:no-underline cursor-pointer [&>svg]:hidden">
              <div className="flex flex-1 px-5 py-3 justify-between items-center gap-4">
                <div className="flex items-center gap-3.5">
                  <span className="font-mono text-xs font-bold text-cyan-400 rounded-md bg-slate-900 border border-slate-700/60 px-2 py-1">
                    {item.id}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Animated Plus / X Toggle Icon */}
                <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 border border-slate-700/60 text-cyan-400 flex-shrink-0">
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

            <AccordionContent className="p-6 pt-3 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/50">
              <div className="pl-2 border-l-2 border-cyan-500/40">
                {item.content}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export { Accordion04 as Accordion02 };
