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
      <Card className="border-white/15 bg-[#11131C] text-white p-8 text-center rounded-3xl shadow-2xl">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400 mx-auto mb-5 border border-cyan-500/40">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <CardTitle className="text-2xl font-bold text-white mb-2">Talebiniz Alındı!</CardTitle>
        <CardDescription className="text-slate-300 text-sm mb-6">
          Mesajınız başarıyla iletildi. Uzman ekibimiz en geç 15 dakika içinde sizinle iletişime geçecektir.
        </CardDescription>
        <Button
          onClick={() => setSubmitted(false)}
          className="bg-white text-black hover:bg-slate-200 font-bold rounded-xl px-6"
        >
          Yeni Mesaj Gönder
        </Button>
      </Card>
    );
  }

  return (
    <Card className="border-white/10 bg-[#11131C] text-white shadow-2xl rounded-3xl overflow-hidden">
      <CardHeader className="p-7 pb-4">
        <CardTitle className="text-xl sm:text-2xl font-bold text-white">
          Proje & Teklif Talep Formu
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm text-slate-400">
          İhtiyacınızı belirtin, aynı gün içinde teknik teklif hazırlayalım.
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="p-7 pt-2 space-y-4">
          
          {/* Ad Soyad */}
          <div className="space-y-1.5">
            <Label htmlFor="fullname" className="text-xs font-semibold text-slate-300">
              Ad Soyad *
            </Label>
            <Input
              id="fullname"
              required
              placeholder="Örn: Ahmet Yılmaz"
              className="bg-[#0A0B10] border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-cyan-400 rounded-xl"
            />
          </div>

          {/* E-posta & Telefon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs font-semibold text-slate-300">
                Kurumsal E-Posta *
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="ahmet@sirketiniz.com"
                className="bg-[#0A0B10] border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-cyan-400 rounded-xl"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-xs font-semibold text-slate-300">
                Telefon Numarası *
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                placeholder="05XX XXX XX XX"
                className="bg-[#0A0B10] border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-cyan-400 rounded-xl"
              />
            </div>
          </div>

          {/* İlgilenilen Hizmet Alanı */}
          <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-slate-300">
              İlgilendiğiniz Hizmet Alanı *
            </Label>
            <Select required defaultValue="ozel-yazilim">
              <SelectTrigger className="bg-[#0A0B10] border-white/10 text-white rounded-xl">
                <SelectValue placeholder="Hizmet Seçiniz" />
              </SelectTrigger>
              <SelectContent className="bg-[#11131C] border-white/10 text-white">
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
            <Label htmlFor="message" className="text-xs font-semibold text-slate-300">
              Proje Detayı veya Sorularınız
            </Label>
            <Textarea
              id="message"
              rows={3}
              placeholder="Projenizin kapsamı, beklentileriniz ve teslim süresi hakkında kısaca bilgi verin..."
              className="bg-[#0A0B10] border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-cyan-400 rounded-xl resize-none"
            />
          </div>

          {/* KVKK Checkbox */}
          <div className="flex items-center space-x-2 pt-1">
            <Checkbox id="kvkk" required className="border-white/20 data-[state=checked]:bg-white data-[state=checked]:text-black" />
            <Label htmlFor="kvkk" className="text-[11px] text-slate-400 leading-tight">
              KVKK Aydınlatma Metni'ni ve Gizlilik Sözleşmesi'ni okudum, kabul ediyorum.
            </Label>
          </div>

        </CardContent>

        <CardFooter className="p-7 pt-0">
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black hover:bg-slate-200 font-bold rounded-xl py-3.5 flex items-center justify-center gap-2 shadow-xl shadow-white/10 transition-all hover:scale-[1.02]"
          >
            <span>{loading ? 'Gönderiliyor...' : 'Teklif Talebini Gönder'}</span>
            <Send className="h-4 w-4" />
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
