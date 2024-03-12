import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WebysLogo = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='text-base font-medium text-[#680995]'>Created by</h1>
      <Link
        className='relative h-12 w-40'
        href='https://weby.team/'
        target='_blank'
      >
        <Image
          src='/assets/WebysLogo.png'
          alt='logo'
          fill
          sizes='(max-width: 768px) 200px, (max-width: 1200px) 200px, 200px'
          className='object-contain'
        />
      </Link>
    </div>
  );
};

export default WebysLogo;
