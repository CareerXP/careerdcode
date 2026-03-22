import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

import { seoConfig } from "@/config/seo";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: seoConfig.defaultTitle,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  openGraph: {
    ...seoConfig.openGraph,
  },
  twitter: {
    ...seoConfig.twitter,
  },
  metadataBase: new URL(seoConfig.canonical),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased text-slate-900 bg-white">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
