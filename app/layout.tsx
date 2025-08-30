import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileActionBar } from '@/components/layout/MobileActionBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NanoWearTech Türkiye - Aşınmaya Dayanıklı Kaynak Çözümleri',
  description: 'Türkiye\'nin aşınmaya dayanıklı kaynak çözümleri uzmanı. Toz dolgulu tel (FCAW) ve hardfacing plakalarıyla ekipman ömrünü artırın.',
  keywords: 'toz dolgulu tel, FCAW tel, hardfacing, aşınma plakası, kaynak parametreleri, tungsten karbür kaynak',
  openGraph: {
    title: 'NanoWearTech Türkiye - Aşınmaya Dayanıklı Kaynak Çözümleri',
    description: 'Türkiye\'nin aşınmaya dayanıklı kaynak çözümleri uzmanı.',
    locale: 'tr_TR',
    alternateLocale: 'en_US',
    type: 'website',
  }
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale || 'tr'}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <MobileActionBar />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}