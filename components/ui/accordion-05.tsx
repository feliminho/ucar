'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const items = [
  {
    id: "01",
    title: "Hangi yazılım dillerini ve mimarileri kullanıyorsunuz?",
    content:
      "Tüm projelerimizi modern ve ölçeklenebilir teknolojilerle sıfırdan geliştiriyoruz. Frontend'de Next.js 15, React ve TypeScript; backend'de Go, Node.js, Python, PostgreSQL ve Redis; mobil tarafta ise native Swift ve Kotlin/Flutter mimarilerini tercih ediyoruz.",
  },
  {
    id: "02",
    title: "Sunucularınız nerede barındırılıyor ve uptime oranınız nedir?",
    content:
      "Sunucularımız İstanbul Tier III sertifikalı veri merkezinde, 1 Gbps yedekli fiber hatlar ve %99.98 SLA kesintisiz erişim garantisiyle 7/24 donanımsal DDoS koruması altında barındırılmaktadır.",
  },
  {
    id: "03",
    title: "Geliştirilen yazılımlarda kaynak kodlar teslim ediliyor mu?",
    content:
      "Evet. Özel yazılım projelerimizde lisanslama veya vendor lock-in olmadan, tüm kaynak kodlar, CI/CD dağıtım pipeline'ları ve teknik mimari dokümantasyonu şirketinizin mülkiyetine eksiksiz teslim edilir.",
  },
  {
    id: "04",
    title: "Pazaryeri ve ERP entegrasyonları ne kadar sürer?",
    content:
      "Trendyol, Amazon, Hepsiburada, Logo, Mikro ve GİB E-Fatura API entegrasyonları genellikle 3 ila 7 iş günü içinde test ortamından canlıya çift yönlü senkronizasyonla başarıyla aktarılır.",
  },
  {
    id: "05",
    title: "Otomatik yedekleme ve DDoS filtreleme standart mı?",
    content:
      "Evet. Tüm VDS ve Web Hosting paketlerimizde 1 Tbps+ donanımsal DDoS filtreleme ve günlük/haftalık otomatik felaket kurtarma yedekleme hizmeti standart olarak sunulmaktadır.",
  },
  {
    id: "06",
    title: "Yapay zekâ asistanlarını şirket verilerimizle nasıl eğitiyorsunuz?",
    content:
      "OpenAI, Claude ve Gemini modellerini RAG (Retrieval-Augmented Generation) mimarisiyle izole ederek şirketinizin PDF, Excel, ERP ve CRM veri tabanına entegre ediyoruz; verileriniz asla dışarı sızdırılmaz.",
  },
  {
    id: "07",
    title: "Satış sonrası destek ve SLA şartlarınız nasıldır?",
    content:
      "7/24 acil telefon hattı (`0538 592 6467`) ve anlık destek bilet sistemiyle kritik arızalara 15 dakika içinde müdahale garantisi veriyoruz.",
  },
  {
    id: "08",
    title: "Nasıl teklif alabilir veya demo randevusu oluşturabilirim?",
    content:
      "Sitemizdeki 'Teklif Al' butonunu kullanabilir, info@furkantech.com adresine yazabilir veya doğrudan çağrı merkezimizle iletişime geçerek aynı gün içinde detaylı teknik teklif alabilirsiniz.",
  },
];

export function Accordion05() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Accordion type="single" defaultValue="01" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="border-b border-slate-800/80 last:border-b-0">
            <AccordionTrigger className="text-left py-6 px-4 sm:px-8 text-slate-400 duration-200 hover:no-underline cursor-pointer hover:text-white data-[state=open]:text-white [&>svg]:text-cyan-400">
              <div className="flex flex-1 items-center gap-4 sm:gap-6">
                <span className="font-mono text-sm sm:text-base font-bold text-cyan-400">{item.id}</span>
                <h3 className="text-base sm:text-xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-slate-300 pb-6 px-4 sm:px-8 pl-12 sm:pl-16 text-sm leading-relaxed">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
