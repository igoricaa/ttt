import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Lenis from '@/components/Lenis';
import { ViewTransitions } from 'next-view-transitions';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thundertopteam.com'),

  title: {
    default: 'Thunder Top Team',
    template: '%s | Thunder Top Team',
  },
  description:
    'Your Ultimate Training Destination',
  openGraph: {
    title: 'Thunder Top Team',
    description:
      'Your Ultimate Training Destination',
    url: 'https://thundertopteam.com',
    siteName: 'Thunder Top Team',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Thunder Top Team',
    card: 'summary_large_image',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // // Providing all messages to the client
  // // side is the easiest way to get started
  // TODO
  const messages = await getMessages();

  setRequestLocale(locale);

  return (
    <ViewTransitions>
      <html lang={locale} suppressHydrationWarning>
        <body className={`${inter.variable} antialiased`}>
          <ThemeProvider
            defaultTheme='light'
            attribute='data-theme'
            disableTransitionOnChange
          >
            <NextIntlClientProvider messages={messages}>
              <Lenis>
                <Header />
                {children}
                <Footer />
              </Lenis>
            </NextIntlClientProvider>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
