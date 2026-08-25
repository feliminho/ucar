import type { Metadata } from 'next';
import { Sora, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/ui/header';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Uçar Yazılım | Kurumsal Yazılım ve Sunucu Çözümleri',
  description:
    'Özel yazılım geliştirme, ERP, CRM, mobil uygulama, Tier III NVMe VDS ve kurumsal sunucu altyapısı.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F9F9F9] text-[#111111] antialiased selection:bg-[#E50914] selection:text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
