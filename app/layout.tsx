import type { Metadata } from 'next';
import { Manrope, Geist } from 'next/font/google';
import '@/lib/localStorageShim';
import { Providers } from '@/components/Providers';
import './globals.css';
import { cn } from '@/lib/utils';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const manrope = Manrope({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shazab Saifi',
  description: 'My Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn('font-sans', geist.variable)}
    >
      <head>
        <link rel="icon" href="/portfolioLogo.svg" type="image/svg" />
      </head>
      <body className={`${manrope.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
