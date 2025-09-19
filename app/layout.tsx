import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Eden at Sobha Central Dubai - Luxury Apartments for Sale',
  description: 'Discover luxury living at The Eden at Sobha Central Dubai. Premium 1, 2 & 3 bedroom apartments with world-class amenities. Starting from AED 1.2M. Book site visit today!',
  keywords: 'Dubai real estate, luxury apartments Dubai, Sobha Central, premium properties, Dubai investment',
  openGraph: {
    title: 'The Eden at Sobha Central Dubai - Luxury Apartments',
    description: 'Experience unparalleled luxury living in Dubai\'s most prestigious location. Premium apartments with world-class amenities.',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}