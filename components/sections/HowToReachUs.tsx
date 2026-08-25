'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Clock } from 'lucide-react';

export function HowToReachUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Özel Yazılım Geliştirme',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#F8FAFC] border-t border-slate-200" id="how-to-reach-us">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2D9F9D]/30 bg-[#F0FDFA] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2D9F9D] mb-4">
            Bölüm 3: İletişim & Teklif
          </div>
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-[#1A4F7C] tracking-tight mb-5">
            Bize Nasıl Ulaşabilirsiniz?
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
            Yeni bir yazılım projesi, sunucu kiralama veya teknik danışmanlık için bize dilediğiniz kanaldan anında ulaşabilirsiniz. Uzman ekibimiz <strong className="text-[#1A4F7C]">en geç 1 saat içinde</strong> dönüş sağlar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Direct Contact Channels & Address */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Phone & 7/24 Call */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-[#2D9F9D] transition-all">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0FDFA] border border-[#2D9F9D]/30 text-[#2D9F9D] flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1A4F7C] mb-1">Doğrudan Çağrı & Destek</h4>
                  <p className="text-xs text-[#4A5568] mb-3">7/24 Kesintisiz acil ve kurumsal iletişim hattı.</p>
                  <a href="tel:+908500000000" className="font-mono text-lg font-bold text-[#1A4F7C] hover:text-[#2D9F9D]">
                    +90 (850) 000 00 00
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Fast Track */}
            <div className="rounded-2xl border border-[#2D9F9D]/40 bg-[#F0FDFA] p-6 shadow-xs hover:border-[#2D9F9D] transition-all">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2D9F9D] text-white flex-shrink-0">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1A4F7C] mb-1">WhatsApp Canlı Destek</h4>
                  <p className="text-xs text-[#4A5568] mb-3">Hemen mesaj atın, teknik uzmanımızla anında görüşün.</p>
                  <a
                    href="https://wa.me/905000000000?text=Merhaba,%20yazilim%20ve%20sunucu%20hizmetleriniz%20hakkinda%20bilgi%20almak%20istiyorum."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-[#2D9F9D] px-4 py-2 text-xs font-bold text-white hover:bg-[#1A4F7C] transition-all shadow-sm"
                  >
                    WhatsApp'tan Yazın →
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs hover:border-[#2D9F9D] transition-all">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0FDFA] border border-[#2D9F9D]/30 text-[#2D9F9D] flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1A4F7C] mb-1">Kurumsal E-Posta</h4>
                  <p className="text-xs text-[#4A5568] mb-2">Teklif, şartname ve kurumsal talepleriniz için.</p>
                  <a href="mailto:info@furkantech.com" className="font-mono text-sm font-bold text-[#2D9F9D] hover:underline">
                    info@furkantech.com
                  </a>
                </div>
              </div>
            </div>

            {/* Office Address & Working Hours */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0FDFA] border border-[#2D9F9D]/30 text-[#2D9F9D] flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1A4F7C] mb-1">Merkez Ofis & Veri Merkezi</h4>
                  <p className="text-xs text-[#4A5568]">
                    Maslak Mah. Büyükdere Cad. No: 120 <br />
                    Sarıyer / İstanbul - Türkiye
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 border-t border-slate-100 pt-4 text-xs text-[#4A5568]">
                <Clock className="h-4 w-4 text-[#2D9F9D]" />
                <span>Teknik Destek: 7/24 Kesintisiz | Ofis: Hafta İçi 09:00 - 18:00</span>
              </div>
            </div>

          </div>

          {/* Right: Instant Online Quotation & Request Form */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-8 lg:p-12 shadow-xl">
            <h3 className="text-2xl font-bold text-[#1A4F7C] mb-2">Hızlı Teklif & İletişim Formu</h3>
            <p className="text-sm text-[#4A5568] mb-8">
              Projeniz veya sunucu gereksinimleriniz için formu doldurun; en geç 1 saat içinde detaylı fizibilite ve ön teklifle dönelim.
            </p>

            {submitted ? (
              <div className="rounded-2xl border border-[#2D9F9D]/40 bg-[#F0FDFA] p-8 text-center">
                <CheckCircle2 className="h-14 w-14 text-[#2D9F9D] mx-auto mb-4" />
                <h4 className="text-xl font-bold text-[#1A4F7C] mb-2">Talebiniz Başarıyla Alındı!</h4>
                <p className="text-sm text-[#4A5568] max-w-md mx-auto mb-6">
                  Sayın <strong className="text-[#1A4F7C]">{formData.name}</strong>, bilgileriniz sistem mühendislerimize ve yazılım ekibimize iletildi. En kısa sürede sizinle iletişime geçeceğiz.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="rounded-xl bg-[#2D9F9D] hover:bg-[#1A4F7C] px-6 py-2.5 text-xs font-bold text-white transition-all shadow-sm"
                >
                  Yeni Bir Form Gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1A4F7C]">
                      Adınız Soyadınız / Firma Adı *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Örn: Furkan Uçar / Şirket A.Ş."
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#1A4F7C] placeholder-slate-400 focus:border-[#2D9F9D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D9F9D]/20 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1A4F7C]">
                      E-Posta Adresi *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="adiniz@sirketiniz.com"
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#1A4F7C] placeholder-slate-400 focus:border-[#2D9F9D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D9F9D]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1A4F7C]">
                      Telefon Numarası
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="05XX XXX XX XX"
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#1A4F7C] placeholder-slate-400 focus:border-[#2D9F9D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D9F9D]/20 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1A4F7C]">
                      İlgilendiğiniz Hizmet
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#1A4F7C] focus:border-[#2D9F9D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D9F9D]/20 transition-all"
                    >
                      <option>Özel Yazılım Geliştirme</option>
                      <option>iOS / Android Mobil Uygulama</option>
                      <option>Kurumsal ERP / CRM Sistemleri</option>
                      <option>Pazaryeri & API Entegrasyonu</option>
                      <option>Yapay Zekâ (AI) & İş Zekası</option>
                      <option>VDS / VPS Sanal Sunucu</option>
                      <option>Co-Location Sunucu Barındırma</option>
                      <option>SSD Web & Reseller Hosting</option>
                      <option>Kurumsal Bulut E-Posta</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1A4F7C]">
                    Proje / İhtiyaç Notlarınız
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="İhtiyaç duyduğunuz modüller, kullanıcı sayısı veya sunucu özellikleri hakkında bilgi verebilirsiniz..."
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-[#1A4F7C] placeholder-slate-400 focus:border-[#2D9F9D] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D9F9D]/20 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1A4F7C] to-[#2D9F9D] py-4 text-base font-bold text-white shadow-lg shadow-[#1A4F7C]/20 transition-all hover:scale-[1.01] hover:shadow-xl hover:shadow-[#1A4F7C]/30"
                >
                  <Send className="h-4 w-4 text-[#6EDCD7]" />
                  Teklif Talebini Gönder
                </button>

                <div className="flex items-center justify-center gap-2 text-center text-xs text-[#4A5568] mt-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#2D9F9D]" />
                  <span>Verileriniz 256-Bit SSL ile şifrelenir ve KVKK kapsamında korunur.</span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
