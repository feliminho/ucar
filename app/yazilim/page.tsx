'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Code2,
  Smartphone,
  Database,
  ShoppingCart,
  Workflow,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Zap,
  Bot,
  Check,
  Layers,
} from 'lucide-react';
import { YazilimScrollCarousel } from '@/components/ui/scroll-x-carousel-demo';
import { YazilimHeroSlider } from '@/components/sections/YazilimHeroSlider';

interface SoftwareService {
  id: string;
  title: string;
  badge: string;
  desc: string;
  icon: any;
  overview: string;
  highlights: string[];
  capabilities: { title: string; desc: string }[];
}

const SOFTWARE_SERVICES: SoftwareService[] = [
  {
    id: 'ozel-yazilim',
    title: 'Özel Web & Kurumsal Yazılım',
    badge: 'Kurumsal Web Mimarisi',
    desc: 'İşletmenizin benzersiz iş süreçlerine özel olarak tasarlanmış, yüksek performanslı, ölçeklenebilir SaaS platformları ve kurumsal web portalları.',
    icon: Code2,
    overview: 'Hazır şablonlar ve hantal sistemler yerine, şirketinizin iş akışına %100 uyum sağlayan özel yazılımlar kodluyoruz. Sıfır teknik borç, yüksek güvenlik ve tam kaynak kod mülkiyeti ile dijital varlıklarınızı geleceğe taşıyoruz.',
    highlights: [
      'Microservice & Modüler Mimari',
      'Yüksek Hızlı REST & GraphQL API Altyapısı',
      'Tam Kaynak Kod & Fikri Mülkiyet Teslimi',
      'Otomatik CI/CD Dağıtım Pipeline’ları',
      '%100 Responsive & Mobil Uyumlu Arayüzler',
      'Tier III Veri Merkezi Uyumlu Yüksek Uptime',
    ],
    capabilities: [
      {
        title: 'Özel SaaS Platformları',
        desc: 'Abonelik sistemleri, çoklu kiracı (multi-tenant) desteği ve gelişmiş yetkilendirme modülleri.',
      },
      {
        title: 'Kurumsal Yönetim Portalları',
        desc: 'Bayi portalları, intranet sistemleri ve departmanlar arası veri entegrasyonu.',
      },
      {
        title: 'Yüksek Performans & SEO',
        desc: 'Milisaniyeler içinde açılan sayfalar ve Google Core Web Vitals standartlarına tam uyum.',
      },
    ],
  },
  {
    id: 'mobil-uygulama',
    title: 'iOS & Android Mobil Uygulama',
    badge: 'Mobil Mühendislik',
    desc: 'App Store ve Google Play standartlarında, yüksek kullanıcı deneyimi sunan, akıcı ve çevrimdışı çalışma kabiliyetine sahip mobil çözümler.',
    icon: Smartphone,
    overview: 'Kullanıcılarınızın cebindeki en güçlü temas noktasını oluşturuyoruz. Biyometrik güvenlik, anlık bildirim motorları ve donanımsal optimizasyonlarla mobil dönüşüm oranlarınızı artırıyoruz.',
    highlights: [
      'iOS (Swift) & Android (Kotlin) Native Geliştirme',
      'Flutter & React Native ile Çapraz Platform Desteği',
      'Biyometrik Kimlik Doğrulama (FaceID / TouchID)',
      'Akıllı Push Bildirim & Kampanya Motoru',
      'Çevrimdışı (Offline-First) Veri Senkronizasyonu',
      'App Store & Google Play Yayınlama Desteği',
    ],
    capabilities: [
      {
        title: 'B2B Saha Uygulamaları',
        desc: 'Plasiyer, depo ve saha satış ekipleriniz için anlık sipariş ve fatura girişi.',
      },
      {
        title: 'B2C Tüketici Deneyimi',
        desc: 'Kullanıcı dostu mobil alışveriş, rezervasyon ve sadakat programı arayüzleri.',
      },
      {
        title: 'Apple Pay & Mobil Ödeme',
        desc: 'Güvenli, tek dokunuşla ödeme ve cüzdan entegrasyonları.',
      },
    ],
  },
  {
    id: 'erp-crm',
    title: 'ERP, CRM & İş Yönetim Sistemleri',
    badge: 'İşletme Yönetimi',
    desc: 'Stok yönetimi, muhasebe, insan kaynakları, B2B sipariş akışları ve dinamik raporlama panelleriyle operasyonel verimliliğinizi katlayın.',
    icon: Database,
    overview: 'Şirketinizdeki departmanlar arası kopuklukları ortadan kaldıran merkezi bir işletim sistemi inşa ediyoruz. Gerçek zamanlı verilerle doğru kararlar alın, operasyonel maliyetleri minimize edin.',
    highlights: [
      'Rol Bazlı Gelişmiş Yetkilendirme (RBAC)',
      'Gerçek Zamanlı Gelir, Gider & Nakit Akış Takibi',
      'Logo, Mikro ve Zirve Muhasebe Köprüleri',
      'Dinamik Dashboard & Görsel Analitik Grafikleri',
      'Otomatik PDF Teklif & Sözleşme Oluşturucu',
      'KVKK Uyumlu Şifrelenmiş Veritabanı Mimarisi',
    ],
    capabilities: [
      {
        title: 'Akıllı Stok & Depo Yönetimi',
        desc: 'Barkod/QR okuma, kritik stok uyarıları ve çoklu depo transfer takibi.',
      },
      {
        title: 'Müşteri İlişkileri (CRM)',
        desc: 'Müşteri görüşme geçmişi, satış hunisi (pipeline) ve otomatik e-posta hatırlatmaları.',
      },
      {
        title: 'Görev & Süreç Takibi',
        desc: 'Proje aşamaları, personel iş yükü dağılımı ve performans puanlama sistemi.',
      },
    ],
  },
  {
    id: 'e-ticaret',
    title: 'B2B & B2C E-Ticaret Platformları',
    badge: 'Dijital Ticaret',
    desc: 'Iyzico, PayTR, Stripe gibi ödeme sistemleri ve sanal POS entegrasyonlarıyla güçlendirilmiş, milisaniyeler içinde yüklenen e-ticaret altyapıları.',
    icon: ShoppingCart,
    overview: 'Trafiği satışa dönüştüren yüksek performanslı e-ticaret siteleri geliştiriyoruz. Karmaşık B2B toptan fiyatlandırmalardan, milyonlarca son kullanıcıya hitap eden B2C mağazalara kadar tam ölçeklenebilir yapılar.',
    highlights: [
      'Tüm Bankalar İçin Sanal POS & Taksit Altyapısı',
      'Tek Sayfada Hızlı & Güvenli Ödeme Akışı (One-Step Checkout)',
      'Yurtiçi, Aras, MNG, Sürat Kargo API Otomasyonu',
      'Dinamik İndirim, Kupon & Çapraz Satış Motoru',
      'Yüksek Trafikli Kampanya Dönemlerinde Sıfır Kesinti',
      '3D Secure 2.0 & SSL Uçtan Uca Şifreleme',
    ],
    capabilities: [
      {
        title: 'B2B Bayi Portalları',
        desc: 'Bayiye özel iskonto tanımlama, cari bakiye ile sipariş ve açık hesap takibi.',
      },
      {
        title: 'Uluslararası Satış (E-İhracat)',
        desc: 'Çoklu para birimi, çok dilli altyapı ve küresel kargo entegrasyonları.',
      },
      {
        title: 'Pazarlama & Analitik Entegrasyonu',
        desc: 'Google Analytics 4, Meta Pixel ve gelişmiş e-ticaret dönüşüm hunileri.',
      },
    ],
  },
  {
    id: 'api-entegrasyon',
    title: 'Pazaryeri & GİB API Entegrasyonları',
    badge: 'Otomasyon & Köprü',
    desc: 'Trendyol, Hepsiburada, Amazon, N11 pazaryerleri ile GİB E-Fatura/E-Arşiv sistemlerini çift yönlü senkronize eden API köprüleri.',
    icon: Workflow,
    overview: 'Farklı sistemler arasındaki manuel veri girişini ve insan kaynaklı hataları sıfırlıyoruz. Siparişlerinizi tek ekrandan yönetin, faturalarınızı tek tıkla otomatik kesin ve stoklarınızı anında eşitleyin.',
    highlights: [
      'Trendyol, Hepsiburada, Amazon, N11, Çiçeksepeti Entegrasyonu',
      'GİB E-Fatura, E-Arşiv & E-İrsaliye Otomasyonu',
      'Anlık Çift Yönlü Stok & Fiyat Eşitleme',
      'Hata Toleranslı Asenkron Mesaj Kuyrukları',
      'Toplu Fatura Kesme & Yazdırma Kolaylığı',
      'Kapsamlı API Loglama & Alarm Mekanizmaları',
    ],
    capabilities: [
      {
        title: 'Merkezi Sipariş Yönetimi',
        desc: 'Tüm pazaryerlerinden gelen siparişleri tek bir ekranda toplayın ve işleyin.',
      },
      {
        title: 'Otomatik Kargo Barkodu',
        desc: 'Sipariş düştüğü anda ilgili kargo firmasından otomatik takip barkodu üretimi.',
      },
      {
        title: 'Özel API Geliştirme',
        desc: 'Kendi üçüncü parti iş ortaklarınız için güvenli RESTful API uç noktaları.',
      },
    ],
  },
  {
    id: 'yapay-zeka',
    title: 'Yapay Zekâ (LLM) & RAG Çözümleri',
    badge: 'Yapay Zekâ Teknolojileri',
    desc: 'Şirket içi bilgi tabanınızla beslenen kurumsal yapay zekâ asistanları, müşteri destek botları ve akıllı veri analitiği sistemleri.',
    icon: Bot,
    overview: 'Yapay zekânın gücünü şirketinizin verileriyle birleştiriyoruz. PDF dökümanları, ERP kayıtları ve CRM verilerinizi RAG mimarisiyle işleyerek şirketinizin 7/24 çalışan en bilgili uzmanını oluşturuyoruz.',
    highlights: [
      'Kurumsal İçi Veriyle Güçlendirilmiş RAG Mimarisi',
      'Gizlilik Odaklı & Dışarı Sızmayan Şirket Veri Havuzu',
      '7/24 Müşteri Destek & Satış Asistanı Botları',
      'Otomatik PDF, Sözleşme & Doküman Özetleme',
      'Doğal Dilde Veritabanı Sorgulama & Raporlama',
      'Gelişmiş Semantik Arama & Vektör Veritabanı',
    ],
    capabilities: [
      {
        title: 'Akıllı Müşteri Asistanı',
        desc: 'Web sitenizde veya WhatsApp üzerinde müşterilerinize anında doğru ürün ve destek sunumu.',
      },
      {
        title: 'Şirket İçi Bilgi Bankası',
        desc: 'Çalışanlarınızın binlerce sayfalık şirket içi dökümanlardan saniyeler içinde yanıt bulması.',
      },
      {
        title: 'Veri Madenciliği & Tahminleme',
        desc: 'Geçmiş satış verilerinizi analiz ederek geleceğe dönük trend tahminleri.',
      },
    ],
  },
];

function YazilimContent() {
  const searchParams = useSearchParams();
  const hizmetParam = searchParams.get('hizmet');

  // Selected service state - updates when query param changes
  const [selectedId, setSelectedId] = useState<string>('ozel-yazilim');

  useEffect(() => {
    if (hizmetParam && SOFTWARE_SERVICES.some((s) => s.id === hizmetParam)) {
      setSelectedId(hizmetParam);
    }
  }, [hizmetParam]);

  const currentService =
    SOFTWARE_SERVICES.find((s) => s.id === selectedId) || SOFTWARE_SERVICES[0];
  const Icon = currentService.icon;

  return (
    <>
      {/* 1. DİNAMİK YAZILIM HERO SLIDER (3 SANİYEDE BİR DÖNEN HİZMET DALLARI) */}
      <YazilimHeroSlider onSelectService={setSelectedId} />

      {/* 2. MÜHENDİSLİK PORTFÖYÜMÜZ (YATAY SCROLL-X CAROUSEL) */}
      <div id="muhendislik-portfoyumuz">
        <YazilimScrollCarousel onSelectService={setSelectedId} />
      </div>

      {/* 3. SERVICES CENTER SHOWCASE (DETAYLI SEÇİLEN HİZMET KARTI) */}
      <section className="py-20 px-6 bg-white border-b border-[#E5E5E5]" id="secilen-hizmet">
        <div className="mx-auto max-w-7xl">
          
          {/* CENTER FEATURED SERVICE DETAIL CARD */}
          <div className="rounded-3xl border border-[#E5E5E5] bg-[#F9F9F9] p-8 sm:p-12 shadow-xl shadow-slate-200/50 max-w-5xl mx-auto transition-all animate-in fade-in duration-300">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 pb-8 border-b border-[#E5E5E5]">
              <div className="flex items-start gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E50914] text-white shadow-lg shadow-[#E50914]/30 flex-shrink-0">
                  <Icon className="h-8 w-8" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#E50914] uppercase tracking-wider bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                    {currentService.badge}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-[#111111] tracking-tight mt-2.5">
                    {currentService.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#555555] mt-2 max-w-2xl leading-relaxed">
                    {currentService.desc}
                  </p>
                </div>
              </div>

              <Link
                href={`/kurumsal/iletisim?hizmet=${encodeURIComponent(currentService.title)}`}
                className="flex items-center gap-2 rounded-2xl bg-[#111111] px-6 py-3.5 text-xs font-bold text-white hover:bg-[#E50914] transition-all shadow-md flex-shrink-0 self-start lg:self-center"
              >
                <span>Bu Hizmet İçin Teklif Al</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Overview & Highlights Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
              {/* Left Column: Detailed Overview */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-base font-bold uppercase tracking-wider text-[#111111]">
                  Hizmet Kapsamı & Yaklaşımımız
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {currentService.overview}
                </p>

                <div className="pt-4">
                  <a
                    href={`https://wa.me/905385926467?text=${encodeURIComponent(`Merhaba, ${currentService.title} hakkında bilgi ve teklif almak istiyorum.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#E50914] hover:underline"
                  >
                    <span>Mühendislerimizle WhatsApp'tan Görüşün →</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Highlights Checklist */}
              <div className="lg:col-span-7 space-y-3">
                <h3 className="text-base font-bold uppercase tracking-wider text-[#111111] mb-4">
                  Öne Çıkan Özellikler & Standartlar
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentService.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-white p-3.5 rounded-2xl border border-[#E5E5E5]">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-50 text-[#E50914] border border-red-100 flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800 leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3 Capabilities Sub-cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-[#E5E5E5]">
              {currentService.capabilities.map((cap, i) => (
                <div key={i} className="rounded-2xl bg-white p-5 border border-[#E5E5E5] shadow-xs">
                  <h4 className="text-xs font-bold text-[#111111] mb-1.5">{cap.title}</h4>
                  <p className="text-[11px] text-[#555555] leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 4. WORKFLOW PROCESS */}
      <section className="py-20 bg-white border-y border-[#E5E5E5]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
              Yazılım Geliştirme Sürecimiz
            </h2>
            <p className="text-sm sm:text-base text-[#555555] mt-2">
              Şeffaf, çevik (Agile) ve kalite odaklı mühendislik adımlarıyla başarıya ulaşıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Analiz & Mimarinin Çıkarılması',
                desc: 'İş gereksinimlerinizi dinliyor, veritabanı şemalarını ve teknik mimariyi dokümante ediyoruz.',
              },
              {
                step: '02',
                title: 'UI/UX & Prototipleme',
                desc: 'Kullanıcı dostu, modern arayüz tasarımlarını hazırlayıp onayınıza sunuyoruz.',
              },
              {
                step: '03',
                title: 'Kodlama & Test Otomasyonu',
                desc: 'Clean code standartlarında geliştirme yaparak birim ve entegrasyon testlerini uyguluyoruz.',
              },
              {
                step: '04',
                title: 'Canlıya Geçiş & 7/24 Destek',
                desc: 'Tier III sunucularımıza güvenle dağıtıyor, kaynak kodları teslim edip proaktif destek sağlıyoruz.',
              },
            ].map((st) => (
              <div key={st.step} className="rounded-3xl border border-[#E5E5E5] bg-[#F9F9F9] p-8 text-left relative">
                <span className="font-mono text-3xl font-black text-[#E50914] block mb-3">
                  {st.step}
                </span>
                <h4 className="text-base font-bold text-[#111111] mb-2">{st.title}</h4>
                <p className="text-xs text-[#555555] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA CONTACT BANNER */}
      <section className="py-16 bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-black tracking-tight text-white">
              Yeni Projenizi Hayata Geçirelim
            </h3>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Uzman yazılım mühendislerimizle hemen görüşerek teknik fizibilite ve bütçe planlamanızı yapın.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/kurumsal/iletisim"
              className="px-8 py-4 rounded-2xl bg-[#E50914] text-white font-bold text-sm shadow-xl shadow-[#E50914]/30 hover:bg-[#B91C1C] hover:scale-105 transition-all"
            >
              Ücretsiz Proje Teklifi Al
            </Link>
            <a
              href="https://wa.me/905385926467?text=Merhaba,%20yazilim%20projem%20icin%20gorusmek%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl border border-white/20 bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-all"
            >
              WhatsApp'tan Danışın
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default function YazilimPage() {
  return (
    <main className="min-h-screen bg-[#F9F9F9] text-[#111111]">
      <Suspense fallback={<div className="p-20 text-center text-[#111111]">Yükleniyor...</div>}>
        <YazilimContent />
      </Suspense>
    </main>
  );
}
