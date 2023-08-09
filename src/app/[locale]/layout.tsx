import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';

import { Ii18nLocales, IRootLayoutProps } from '@services/@types/global';
import { AppProvider } from '@services/providers/AppProvider';
import { getI18nLocales } from '@utils/getI18nLocales';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams(): Ii18nLocales[] {
  return getI18nLocales();
}

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default async function RootLayout({
  children,
  params: { locale }
}: IRootLayoutProps): Promise<JSX.Element> {
  let localesFile;

  try {
    localesFile = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <AppProvider locale={locale} messages={localesFile}>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
