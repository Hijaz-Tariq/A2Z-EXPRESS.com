import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './styles/globals.css';

import Header from '@/components/header';
import ClientWrapper from '@/components/client-wrapper';
import Footer from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'A2Z Express LLC',
  description: 'Global shipping solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased flex flex-col">
        <ClientWrapper>
        {/* Header */}
    <Header />
        {/* Main Content with responsive padding */}
        <main className="flex-1 container mx-auto py-4 md:py-8 pb-20 md:pb-16 px-4">
          {children}
        </main>
        {/* Responsive Fixed Bottom Navigation */}
      <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}