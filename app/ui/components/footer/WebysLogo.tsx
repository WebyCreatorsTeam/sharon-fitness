import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WebysLogo = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='text-base font-medium text-[#680995]'>Created by</h1>
      <div className='relative h-12 w-40'>
        <Link href='https://weby.team/' target='_blank'>
          <Image
            src='/WebysLogo.png'
            alt='logo'
            fill
            className='object-contain'
          />
        </Link>
      </div>
    </div>
  );
};

export default WebysLogo;
