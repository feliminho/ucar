'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <Card className="border-[#E5E5E5] bg-white text-[#111111] p-8 text-center rounded-3xl shadow-xl">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-[#E50914] mx-auto mb-5 border border-red-200">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <CardTitle className="text-2xl font-bold text-[#111111] mb-2">Talebiniz Alındı!</CardTitle>
        <CardDescription className="text-[#555555] text-sm mb-6">
          Mesajınız başarıyla iletildi. Uzman ekibimiz en geç 15 dakika içinde sizinle iletişime geçecektir.
        </CardDescription>
        <Button
          onClick={() => setSubmitted(false)}
          className="bg-[#E50914] text-white hover:bg-[#B91C1C] font-bold rounded-xl px-6"
        >
          Yeni Mesaj Gönder
        </Button>
      </Card>
    );
  }

  return (
    <Card className="border border-[#E5E5E5] bg-white text-[#111111] shadow-xl shadow-slate-200/50 rounded-3xl overflow-hidden">
      <CardHeader className="p-7 pb-4">
        <CardTitle className="text-xl sm:text-2xl font-bold text-[#111111]">
          Proje & Teklif Talep Formu
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm text-[#555555]">
          İhtiyacınızı belirtin, aynı gün içinde teknik teklif hazırlayalım.
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="p-7 pt-2 space-y-4">
          
          {/* Ad Soyad */}
          <div className="space-y-1.5">
            <Label htmlFor="fullname" className="text-xs font-semibold text-[#111111]">
              Ad Soyad *
            </Label>
            <Input
              id="fullname"
              required
              placeholder="Örn: Ahmet Yılmaz"
              className="bg-[#F9F9F9] border-[#E5E5E5] text-[#111111] placeholder:text-slate-400 focus-visible:ring-[#E50914] rounded-xl"
            />
          </div>

          {/* E-posta & Telefon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs font-semibold text-[#111111]">
                Kurumsal E-Posta *
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="ahmet@sirketiniz.com"
                className="bg-[#F9F9F9] border-[#E5E5E5] text-[#111111] placeholder:text-slate-400 focus-visible:ring-[#E50914] rounded-xl"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-xs font-semibold text-[#111111]">
                Telefon Numarası *
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                placeholder="05XX XXX XX XX"
                className="bg-[#F9F9F9] border-[#E5E5E5] text-[#111111] placeholder:text-slate-400 focus-visible:ring-[#E50914] rounded-xl"
              />
            </div>
          </div>

          {/* İlgilenilen Hizmet Alanı */}
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-[#111111]">
              İlgilendiğiniz Hizmet Alanı *
            </Label>
            <Select required defaultValue="ozel-yazilim">
              <SelectTrigger className="bg-[#F9F9F9] border-[#E5E5E5] text-[#111111] rounded-xl">
                <SelectValue placeholder="Hizmet Seçiniz" />
              </SelectTrigger>
              <SelectContent className="bg-white border-[#E5E5E5] text-[#111111]">
                <SelectItem value="ozel-yazilim">💻 Özel Yazılım & Web Portalı</SelectItem>
                <SelectItem value="mobil-uygulama">📱 Mobil Uygulama (iOS / Android)</SelectItem>
                <SelectItem value="erp-crm">🏢 ERP / CRM / Muhasebe Entegrasyonu</SelectItem>
                <SelectItem value="vds-sunucu">🖥️ NVMe VDS & Sanal Sunucu</SelectItem>
                <SelectItem value="co-location">🏢 Co-Location & Fiziksel Barındırma</SelectItem>
                <SelectItem value="web-hosting">🌐 Kurumsal Web Hosting & SSL</SelectItem>
                <SelectItem value="yapay-zeka">🤖 Yapay Zekâ (AI) & Veri Çözümleri</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Mesaj / Proje Özeti */}
          <div className="space-y-1.5">
            <Label htmlFor="message" className="text-xs font-semibold text-[#111111]">
              Proje Detayı veya Sorularınız
            </Label>
            <Textarea
              id="message"
              rows={3}
              placeholder="Projenizin kapsamı, beklentileriniz ve teslim süresi hakkında kısaca bilgi verin..."
              className="bg-[#F9F9F9] border-[#E5E5E5] text-[#111111] placeholder:text-slate-400 focus-visible:ring-[#E50914] rounded-xl resize-none"
            />
          </div>

          {/* KVKK Checkbox */}
          <div className="flex items-center space-x-2 pt-1">
            <Checkbox id="kvkk" required className="border-[#E5E5E5] data-[state=checked]:bg-[#E50914] data-[state=checked]:text-white" />
            <Label htmlFor="kvkk" className="text-[11px] text-[#555555] leading-tight">
              KVKK Aydınlatma Metni'ni ve Gizlilik Sözleşmesi'ni okudum, kabul ediyorum.
            </Label>
          </div>

        </CardContent>

        <CardFooter className="p-7 pt-0">
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E50914] text-white hover:bg-[#B91C1C] font-bold rounded-xl py-3.5 flex items-center justify-center gap-2 shadow-lg shadow-[#E50914]/25 transition-all hover:scale-[1.02]"
          >
            <span>{loading ? 'Gönderiliyor...' : 'Teklif Talebini Gönder'}</span>
            <Send className="h-4 w-4" />
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
