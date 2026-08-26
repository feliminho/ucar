'use client';

import NavBar, { IMenu } from "@/components/ui/navbar";

export const siteMenus: IMenu[] = [
  {
    id: 1,
    title: 'Anasayfa',
    url: '/',
    dropdown: false,
  },
  {
    id: 2,
    title: 'Alan Adı',
    url: '/alan-adi',
    dropdown: true,
    items: [
      {
        id: 21,
        title: 'Alan Adı Tescili & Sorgulama',
        url: '/alan-adi',
      },
      {
        id: 22,
        title: 'Alan Adı Transfer',
        url: '/alan-adi',
      },
      {
        id: 23,
        title: 'Whois Gizleme & DNS Yönetimi',
        url: '/alan-adi',
      },
    ],
  },
  {
    id: 3,
    title: 'Sunucu Barındırma',
    url: '/sunucu-barindirma',
    dropdown: true,
    items: [
      {
        id: 31,
        title: 'VDS Sunucular',
        url: '/sunucu-barindirma/vds-sunucu',
      },
      {
        id: 32,
        title: 'Fiziksel Sunucular',
        url: '/sunucu-barindirma/fiziksel-sunucu',
      },
    ],
  },
  {
    id: 4,
    title: 'Web Hosting',
    url: '/web-hosting',
    dropdown: true,
    items: [
      {
        id: 41,
        title: 'Ekonomik SSD Hosting',
        url: '/web-hosting?kategori=ekonomik',
      },
      {
        id: 42,
        title: 'Profesyonel SSD Hosting',
        url: '/web-hosting?kategori=profesyonel',
      },
      {
        id: 43,
        title: 'Bayi (Reseller) Hosting',
        url: '/web-hosting?kategori=reseller',
      },
    ],
  },
  {
    id: 5,
    title: 'Yazılım',
    url: '/yazilim',
    dropdown: true,
    items: [
      {
        id: 51,
        title: 'Özel Yazılım Çözümleri',
        url: '/yazilim?hizmet=ozel-yazilim',
      },
      {
        id: 52,
        title: 'iOS & Android Mobil Uygulama',
        url: '/yazilim?hizmet=mobil-uygulama',
      },
      {
        id: 53,
        title: 'ERP & CRM Kurumsal Sistemler',
        url: '/yazilim?hizmet=erp-crm',
      },
      {
        id: 54,
        title: 'E-Ticaret & Ödeme Altyapıları',
        url: '/yazilim?hizmet=e-ticaret',
      },
      {
        id: 55,
        title: 'Pazaryeri & GİB API Entegrasyonları',
        url: '/yazilim?hizmet=api-entegrasyon',
      },
      {
        id: 56,
        title: 'Yapay Zekâ (LLM) & Veri Çözümleri',
        url: '/yazilim?hizmet=yapay-zeka',
      },
    ],
  },
  {
    id: 6,
    title: 'E-posta',
    url: '/e-posta',
    dropdown: true,
    items: [
      {
        id: 61,
        title: 'Kurumsal Bulut E-Posta (Cloud Mail)',
        url: '/e-posta?paket=kurumsal-mail',
      },
      {
        id: 62,
        title: 'Anti-Spam & Gelişmiş Filtreleme',
        url: '/e-posta?paket=guvenlik-filtreleme',
      },
    ],
  },
  {
    id: 7,
    title: 'Kurumsal',
    url: '/kurumsal',
    dropdown: true,
    items: [
      {
        id: 71,
        title: 'Hakkımızda & Vizyon',
        url: '/kurumsal?sayfa=hakkimizda',
      },
      {
        id: 72,
        title: 'Tier III Veri Merkezi Altyapısı',
        url: '/kurumsal?sayfa=veri-merkezi',
      },
      {
        id: 73,
        title: 'Referanslar & Projeler',
        url: '/kurumsal?sayfa=referanslar',
      },
      {
        id: 74,
        title: 'İletişim & Teklif Formu',
        url: '/kurumsal/iletisim',
      },
    ],
  },
];

export function NavBarDemo() {
  return <NavBar list={siteMenus} />;
}
