import './globals.css';
import type { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';
import Image from 'next/image';
import type { Viewport } from 'next';

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
      <body className={inter.className}>
        <main className='mobile:min-w-screen-mobile desktop:min-w-screen-desktop tablet:min-w-screen-tablet flex h-full min-h-screen flex-col items-center justify-between'>
          <div className='relative flex h-[379.04px] w-[200px] flex-col place-content-end items-center tablet:h-[1173px] tablet:w-[1195.54px] desktop:h-[1036.68px] desktop:w-[1122px]'>
            <Image
              fill
              priority
              className='object-contain'
              alt='sharon'
              src={'/SharonVector.png'}
            />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
