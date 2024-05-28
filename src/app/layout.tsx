import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sepeda Motor Listrik Indonesia - Savart Indonesia',
  description:
    'Temukan sepeda motor listrik terbaik hanya di Savart Indonesia. Dapatkan pengalaman berkendara yang hemat energi dan terkini.',
  openGraph: {
    title: 'Sepeda Motor Listrik Indonesia - Savart Indonesia',
    description:
      'Temukan sepeda motor listrik terbaik hanya di Savart Indonesia. Dapatkan pengalaman berkendara yang hemat energi dan terkini.',
    images: [
      {
        url: 'https://www.savart-ev.com/wp-content/uploads/2023/06/1662708638708.jpeg',
        width: 200,
        height: 200,
        type: 'image/jpeg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
