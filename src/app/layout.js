import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import GSAPProvider from '@/components/providers/GSAPProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });

export const metadata = {
  title: 'GRIB Jaya - Gabung GRIB, Jaminan Jadi Pengusaha',
  description:
    'GRIB Jaya hadir untuk membangun ekonomi rakyat, membuka lapangan kerja, dan menyediakan bantuan hukum untuk masyarakat Indonesia.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${oswald.variable} font-sans bg-[#0a0a0a] text-[#ededed]`}
      >
        <GSAPProvider>{children}</GSAPProvider>
      </body>
    </html>
  );
}
