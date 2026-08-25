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
    title: 'Web Hosting',
    url: '/web-hosting',
    dropdown: true,
    items: [
      {
        id: 31,
        title: 'Ekonomik SSD Hosting',
        url: '/web-hosting?kategori=ekonomik',
      },
      {
        id: 32,
        title: 'Profesyonel SSD Hosting',
        url: '/web-hosting?kategori=profesyonel',
      },
      {
        id: 33,
        title: 'Bayi (Reseller) Hosting',
        url: '/web-hosting?kategori=reseller',
      },
    ],
  },
  {
    id: 4,
    title: 'Yazılım',
    url: '/yazilim',
    dropdown: true,
    items: [
      {
        id: 41,
        title: 'Özel Yazılım Çözümleri',
        url: '/yazilim/ozel-yazilim',
      },
      {
        id: 42,
        title: 'iOS & Android Mobil Uygulama',
        url: '/yazilim/mobil-uygulama',
      },
      {
        id: 43,
        title: 'ERP & CRM Kurumsal Sistemler',
        url: '/yazilim/erp-crm',
      },
      {
        id: 44,
        title: 'E-Ticaret & Ödeme Altyapıları',
        url: '/yazilim/e-ticaret',
      },
      {
        id: 45,
        title: 'Pazaryeri & GİB API Entegrasyonları',
        url: '/yazilim/api-entegrasyon',
      },
      {
        id: 46,
        title: 'Yapay Zekâ (LLM) & Veri Çözümleri',
        url: '/yazilim/yapay-zeka',
      },
    ],
  },
  {
    id: 5,
    title: 'E-posta',
    url: '/e-posta',
    dropdown: true,
    items: [
      {
        id: 51,
        title: 'Kurumsal Bulut E-Posta (Cloud Mail)',
        url: '/e-posta/kurumsal-mail',
      },
      {
        id: 52,
        title: 'Anti-Spam & Gelişmiş Filtreleme',
        url: '/e-posta/guvenlik-filtreleme',
      },
    ],
  },
  {
    id: 6,
    title: 'Kurumsal',
    url: '/kurumsal',
    dropdown: true,
    items: [
      {
        id: 61,
        title: 'Hakkımızda & Vizyon',
        url: '/kurumsal/hakkimizda',
      },
      {
        id: 62,
        title: 'Tier III Veri Merkezi Altyapısı',
        url: '/kurumsal/veri-merkezi',
      },
      {
        id: 63,
        title: 'Referanslar & Tamamlanan Projeler',
        url: '/kurumsal/referanslar',
      },
      {
        id: 64,
        title: 'İletişim & Teklif Formu',
        url: '/kurumsal/iletisim',
      },
    ],
  },
];

export function NavBarDemo() {
  return <NavBar list={siteMenus} />;
}
