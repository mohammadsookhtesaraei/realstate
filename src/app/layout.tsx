import type { Metadata } from "next";


import "./globals.css";
import Layout from "@/layout/Layout";
import { yekan } from "@/utils/font";




export const metadata: Metadata = {
  title: "real state",
  description: "rent house",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${yekan.variable}`}
      >
        <Layout>
        {children}
        </Layout>
      </body>
    </html>
  );
}
