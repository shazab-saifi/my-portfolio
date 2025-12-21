import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/portfolioLogo.svg" type="image/svg" />
      </head>
      <body className={`${manrope.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
