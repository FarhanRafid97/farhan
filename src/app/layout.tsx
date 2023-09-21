import './globals.css';
import { Inter } from 'next/font/google';
import Head from './head';
import Navbar from '@/components/modules/Navbar/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Farhan Rafid Syauqi',
  description: 'Farhan Rafid Syauqi Blog',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head />
      <body className={`${inter.className} w-full bg-[#111010] `}>
        <div className="md:mx-auto w-full  md:max-w-2xl mt-[90px] px-4 lg:px-0">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
