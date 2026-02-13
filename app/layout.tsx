import type { Metadata } from 'next';
import { Playfair_Display, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/layout/CookieBanner';
import { siteMetadata, restaurantJsonLd } from '@/lib/metadata';

const playfairDisplay = Playfair_Display({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-accent',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd),
          }}
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
