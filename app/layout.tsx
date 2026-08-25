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
      <body className="min-h-screen bg-[#070E1B] text-[#F8FAFC] antialiased selection:bg-cyan-500 selection:text-[#070E1B]">
        <Header />
        {children}
      </body>
    </html>
  );
}
