import type { Metadata } from 'next';

import Layout from '@/layout/Layout';
import NextAuthProvider from '@/providers/NextAuthProvider';
import { yekan } from '@/utils/font';

import './globals.css';

export const metadata: Metadata = {
  title: 'املاک | پروژه بوتواستارت',
  description: 'سایت خرید و فروش املاک',
  icons: { icon: './favicon.ico' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekan.variable}`}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
