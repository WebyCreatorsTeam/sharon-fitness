import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div className='relative aspect-[1.4/1] w-32 sm:w-44 md:w-60'>
      <Image
        src={'/assets/SFLogo.svg'}
        alt='logo'
        fill
        sizes='240px (max-width: 768px) 128px'
        className='object-contain'
      />
    </div>
  );
};

export default Logo;
