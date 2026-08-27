'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Building2,
  Server,
  Award,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Send,
  Users,
  Target,
  Sparkles,
  ExternalLink,
  Lock,
} from 'lucide-react';
import { HeroParallax } from '@/components/ui/hero-parallax';

const KURUMSAL_SECTIONS = [
  { id: 'all', title: 'Tüm Kurumsal Bilgiler' },
  { id: 'hakkimizda', title: 'Hakkımızda & Vizyon' },
  { id: 'veri-merkezi', title: 'Tier III Veri Merkezi' },
  { id: 'referanslar', title: 'Referanslar & Projeler' },
  { id: 'iletisim', title: 'İletişim & Teklif Formu' },
];

function KurumsalContent() {
  const searchParams = useSearchParams();
  const sayfaParam = searchParams.get('sayfa');

  // If sayfaParam exists, filter down to that specific section; otherwise 'all' shows all sections
  const [activeSection, setActiveSection] = useState<string>('all');

  useEffect(() => {
    if (sayfaParam && KURUMSAL_SECTIONS.some((s) => s.id === sayfaParam)) {
      setActiveSection(sayfaParam);
    } else {
      setActiveSection('all');
    }
  }, [sayfaParam]);

  // Form state for contact form
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      {/* 1. HERO SECTION (ALWAYS AT TOP) */}
      <section className="relative min-h-[460px] lg:min-h-[500px] flex flex-col justify-between text-white py-14 px-6 sm:px-10 lg:px-12 border-b border-slate-800 overflow-hidden">
        {/* Background Image & Multi-layer Dark Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/server-hero.jpg"
            alt="Kurumsal Altyapı & Mühendislik"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D]/95 via-[#0F172A]/85 to-[#0A0F1D]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-[#0A0F1D]/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <div className="max-w-3xl text-left">
            <h1
              style={{ color: '#F9F9F9' }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight drop-shadow-md"
            >
              Kurumsal Profil & <br />
              <span className="text-[#E50914]">
                Teknoloji Mühendisliği
              </span>
            </h1>

            <p
              style={{ color: '#F4F4F0' }}
              className="text-base sm:text-lg mt-4 leading-relaxed max-w-2xl font-medium drop-shadow-sm opacity-95"
            >
              Yüksek erişilebilirlikli Tier III veri merkezi altyapımız, yenilikçi yazılım mühendisliğimiz ve 7/24 kesintisiz kurumsal desteğimizle işinizi büyütüyoruz.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="#kurumsal-detay"
                className="flex items-center gap-2 rounded-2xl bg-[#E50914] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#E50914]/30 hover:bg-[#B91C1C] hover:scale-105 transition-all cursor-pointer"
              >
                <span>Kurumsal Bilgileri Keşfedin</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="https://wa.me/905385926467"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-2xl border border-white/20 bg-slate-900/80 px-7 py-3.5 text-sm font-bold text-slate-200 hover:bg-white/10 hover:text-white transition-all backdrop-blur-md cursor-pointer"
              >
                <span>WhatsApp İletişim</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION FILTER BUTTONS */}
      <section className="py-8 px-6 bg-white border-b border-[#E5E5E5]" id="kurumsal-detay">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {KURUMSAL_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                  activeSection === sec.id
                    ? 'bg-[#E50914] text-white shadow-md shadow-[#E50914]/25'
                    : 'bg-[#F9F9F9] border border-[#E5E5E5] text-[#111111] hover:border-[#111111]'
                }`}
              >
                {sec.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC CONTENT SECTIONS */}
      <div className="space-y-16 py-12">
        {/* SECTION A: HAKKIMIZDA & VİZYON */}
        {(activeSection === 'all' || activeSection === 'hakkimizda') && (
          <section className="mx-auto max-w-7xl px-6" id="hakkimizda">
            <div className="rounded-3xl border border-[#E5E5E5] bg-white p-8 sm:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#E50914]">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
                    Hakkımızda & Vizyonumuz
                  </h2>
                  <p className="text-xs text-[#555555]">Teknoloji ve mühendislikte güvenin adresi.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
                <div className="space-y-4 text-sm text-[#4A4A4A] leading-relaxed">
                  <p>
                    Firmamız, Türkiye genelinde ve küresel pazarda kurumsal şirketlerin web hosting, yüksek performanslı bulut sunucu (VDS/Dedicated), özel yazılım ve güvenli e-posta ihtiyaçlarını karşılamak üzere kurulmuştur.
                  </p>
                  <p>
                    İstanbul Tier III standartlarındaki modern veri merkezi altyapımız, yedekli fiber optik omurgalarımız ve alanında uzman mühendislik kadromuzla, müşterilerimizin iş sürekliliğini %99.99 oranında garanti altına alıyoruz.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9] p-5">
                    <Target className="h-6 w-6 text-[#E50914] mb-2" />
                    <h4 className="font-bold text-sm text-[#111111] mb-1">Misyonumuz</h4>
                    <p className="text-xs text-[#555555] leading-relaxed">
                      En yeni sunucu donanımları ve modern yazılım mimarileriyle müşterilerimize kesintisiz rekabet avantajı sunmak.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9] p-5">
                    <Sparkles className="h-6 w-6 text-[#E50914] mb-2" />
                    <h4 className="font-bold text-sm text-[#111111] mb-1">Vizyonumuz</h4>
                    <p className="text-xs text-[#555555] leading-relaxed">
                      Bölgesel veri merkezi ve kurumsal yazılım çözümlerinde en yüksek müşteri memnuniyetine sahip lider teknoloji markası olmak.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION B: TIER III VERI MERKEZI */}
        {(activeSection === 'all' || activeSection === 'veri-merkezi') && (
          <section className="mx-auto max-w-7xl px-6" id="veri-merkezi">
            <div className="rounded-3xl border border-[#E5E5E5] bg-white p-8 sm:p-12 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#E50914]">
                  <Server className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
                    Tier III İstanbul Veri Merkezi Altyapısı
                  </h2>
                  <p className="text-xs text-[#555555]">Yüksek güvenlik ve sıfır kesinti toleransı.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9] p-6 text-left">
                  <ShieldCheck className="h-6 w-6 text-[#E50914] mb-3" />
                  <h4 className="font-bold text-base text-[#111111] mb-1.5">N+1 Yedekli Enerji & İklimlendirme</h4>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Kesintisiz çift UPS grupları, dizel jeneratörler ve hassas iklimlendirme sistemleriyle 365 gün stabil sıcaklık ve enerji güvencesi.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9] p-6 text-left">
                  <Zap className="h-6 w-6 text-[#E50914] mb-3" />
                  <h4 className="font-bold text-base text-[#111111] mb-1.5">1 Tbps+ DDoS Koruma Kalkanı</h4>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Türk Telekom, Turkcell Superonline ve Vodafone çoklu BGP omurgaları üzerinden Layer 3/4 ve Layer 7 saldırı filtreleme.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9] p-6 text-left">
                  <Lock className="h-6 w-6 text-[#E50914] mb-3" />
                  <h4 className="font-bold text-base text-[#111111] mb-1.5">Biyometrik Güvenlik & 7/24 NOC</h4>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Kartlı ve biyometrik geçiş kontrolleri, CCTV kamera kayıtları ve fiziksel güvenlik ekipleriyle tam koruma.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION C: REFERANSLAR & PROJELER (3D HERO PARALLAX) */}
        {(activeSection === 'all' || activeSection === 'referanslar') && (
          <section className="w-full overflow-hidden rounded-3xl border border-neutral-800 my-8 shadow-2xl" id="referanslar">
            <HeroParallax />
          </section>
        )}

        {/* SECTION D: ILETISIM & TEKLIF FORMU */}
        {(activeSection === 'all' || activeSection === 'iletisim') && (
          <section className="mx-auto max-w-7xl px-6" id="iletisim">
            <div className="rounded-3xl border border-[#E5E5E5] bg-white p-8 sm:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Contact Info */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-[#E50914] mb-3">
                      <PhoneCall className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">
                      Bizimle İletişime Geçin
                    </h2>
                    <p className="text-xs text-[#555555] mt-1">
                      Mühendislerimiz ve satış danışmanlarımız sorularınızı yanıtlamaktan memnuniyet duyar.
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-4 p-4 rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#E50914] shadow-xs">
                        <PhoneCall className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-[#777777] block">Telefon / WhatsApp</span>
                        <a href="tel:05385926467" className="font-bold text-sm text-[#111111] hover:text-[#E50914]">
                          0538 592 6467
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#E50914] shadow-xs">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-[#777777] block">E-Posta</span>
                        <span className="font-bold text-sm text-[#111111]">
                          info@furkantech.com
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-2xl border border-[#E5E5E5] bg-[#F9F9F9]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#E50914] shadow-xs">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-[#777777] block">Çalışma & Destek Saatleri</span>
                        <span className="font-bold text-sm text-[#111111]">
                          7/24 Kesintisiz Teknik Destek
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Proposal Request Form */}
                <div className="lg:col-span-7 bg-[#F9F9F9] rounded-3xl p-8 border border-[#E5E5E5]">
                  <h3 className="text-xl font-bold text-[#111111] mb-2">Hemen Proje Teklifi Alın</h3>
                  <p className="text-xs text-[#555555] mb-6">İhtiyacınızı belirtin, 30 dakika içinde uzman ekibimiz size dönüş yapsın.</p>

                  {formSubmitted ? (
                    <div className="p-8 text-center bg-white rounded-2xl border border-green-200">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 mx-auto mb-3">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold text-base text-[#111111]">Talebiniz Alındı!</h4>
                      <p className="text-xs text-[#555555] mt-1">Mühendislerimiz en kısa sürede sizinle iletişime geçecektir.</p>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setFormSubmitted(true);
                      }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-[#111111] block mb-1.5">Adınız Soyadınız *</label>
                          <input
                            type="text"
                            required
                            placeholder="Örn: Ahmet Yılmaz"
                            className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] bg-white text-xs text-[#111111] focus:border-[#E50914] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-[#111111] block mb-1.5">Telefon Numaranız *</label>
                          <input
                            type="tel"
                            required
                            placeholder="05XX XXX XX XX"
                            className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] bg-white text-xs text-[#111111] focus:border-[#E50914] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-[#111111] block mb-1.5">E-Posta Adresiniz *</label>
                          <input
                            type="email"
                            required
                            placeholder="ahmet@sirket.com"
                            className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] bg-white text-xs text-[#111111] focus:border-[#E50914] focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-[#111111] block mb-1.5">İlgilendiğiniz Hizmet *</label>
                          <select
                            className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] bg-white text-xs text-[#111111] focus:border-[#E50914] focus:outline-none"
                          >
                            <option>Özel Yazılım Geliştirme</option>
                            <option>Mobil Uygulama (iOS / Android)</option>
                            <option>ERP / CRM Kurumsal Sistem</option>
                            <option>E-Ticaret & Ödeme Altyapısı</option>
                            <option>VDS & Fiziksel Sunucu Kiralama</option>
                            <option>Web Hosting & Kurumsal E-Posta</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[#111111] block mb-1.5">Proje Detayları & Notunuz</label>
                        <textarea
                          rows={4}
                          placeholder="Projeniz veya ihtiyaç duyduğunuz altyapı hakkında kısa bilgi verin..."
                          className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] bg-white text-xs text-[#111111] focus:border-[#E50914] focus:outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-[#E50914] text-white font-bold text-xs shadow-lg shadow-[#E50914]/25 hover:bg-[#B91C1C] transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Send className="h-4 w-4" />
                        <span>Teklif Talebini Gönder</span>
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default function KurumsalPage() {
  return (
    <main className="min-h-screen bg-[#F9F9F9] text-[#111111]">
      <Suspense fallback={<div className="p-20 text-center text-[#111111]">Yükleniyor...</div>}>
        <KurumsalContent />
      </Suspense>
    </main>
  );
}
