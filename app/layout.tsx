import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Batara Project — Partner Digital untuk Pengembangan Usaha',
  description: 'Solusi digital untuk usaha: Distributor Pulsa & PPOB, Digitalisasi UMKM, dan Layanan Berbasis Aplikasi.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
