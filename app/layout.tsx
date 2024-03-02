import './globals.css';
import type { Metadata } from 'next';
import { fredoka } from './ui/fonts';
import TimeoutModal from './ui/components/timeout';
import type { Viewport } from 'next';
import Footer from './ui/components/footer';
import SlantedDecorLine from './ui/svgs/decor-lines/SlantedDecorLine';

export const metadata: Metadata = {
  title: 'Sharon Fitness',
  description:
    'The official website of the personal trainer, Sharon, who specializes in teaching and helping people achieve their fitness goals.',
  icons: {
    icon: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={fredoka.className}>
        <main className='sm:min-w-screen-mobile lg:min-w-screen-desktop md:min-w-screen-tablet relative flex h-full min-h-screen flex-col items-center justify-between'>
          {children}
          <Footer />
          <SlantedDecorLine />
        </main>
      </body>
    </html>
  );
}
