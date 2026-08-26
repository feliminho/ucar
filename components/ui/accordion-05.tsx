'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils"; 

const defaultItems = [
  {
    id: "1",
    title: "Sunucularınız nerede barındırılıyor?",
    content:
      "Tüm fiziksel ve sanal sunucu altyapımız, Türkiye'nin en gelişmiş Tier III sertifikalı İstanbul Veri Merkezi'nde, yedekli jeneratör, iklimlendirme ve çoklu fiber optik hat güvencesiyle barındırılmaktadır.",
  },
  {
    id: "2",
    title: "Özel yazılım projelerinde süreç nasıl işler?",
    content:
      "İhtiyaç analizi ve mimari planlama ile başlarız. UX/UI prototip onayının ardından sprintler halinde geliştirme yapılır; test, güvenlik taramaları ve deployment tamamlanarak tüm kaynak kodlar şirketinize teslim edilir.",
  },
  {
    id: "3",
    title: "DDoS koruması ve güvenlik standartlarınız neler?",
    content:
      "Altyapımız 1 Tbps+ donanımsal DDoS kalkanı, Layer 3/4/7 filtreleme ve WAF kuralları ile 7/24 korunur. Tüm veritabanları şifreli ve periyodik yedeklemeli mimaride tutulur.",
  },
  {
    id: "4",
    title: "Teknik destek SLA süreniz ne kadar?",
    content:
      "7/24 NOC operasyon merkezimiz aktiftir. Kritik durumlarda doğrudan mühendis seviyesinde 15 dakika içinde ilk müdahale garantisi (SLA) sağlıyoruz.",
  },
  {
    id: "5",
    title: "Mevcut sitemi veya sunucumu ücretsiz taşıyor musunuz?",
    content:
      "Evet, web hosting, cPanel/Plesk hesapları, kurumsal e-postalar ve VDS sanal sunucularınız uzman ekibimiz tarafından sıfır veri kaybı ve sıfır kesintiyle ücretsiz taşınır.",
  },
];

export function Accordion05({ items = defaultItems }: { items?: { id: string; title: string; content: string }[] }) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Accordion type="single" defaultValue="1" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="border-b border-[#E5E5E5] last:border-b-0">
            <AccordionTrigger className="text-left py-6 px-4 sm:px-8 text-foreground/40 duration-200 hover:no-underline cursor-pointer data-[state=open]:text-[#E50914] transition-all [&>svg]:hidden">
              <div className="flex flex-1 items-center gap-4 sm:gap-6">
                <span className="font-mono text-sm sm:text-base font-bold text-slate-400">
                  {String(item.id).padStart(2, '0')}
                </span>
                <h3 className="font-sora font-bold text-lg sm:text-2xl text-[#111111] group-hover:text-[#E50914]">
                  {item.title}
                </h3>
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-slate-600 leading-relaxed text-xs sm:text-sm pb-6 px-4 sm:px-8 pl-12 sm:pl-16">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Accordion05;
