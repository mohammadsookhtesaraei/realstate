import type { Metadata } from 'next';

import Layout from '@/layout/Layout';
import { yekan } from '@/utils/font';

import './globals.css';
import NextAuthProvider  from '@/providers/NextAuthProvider';

export const metadata: Metadata = {
  title: 'real state',
  description: 'rent house',
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
