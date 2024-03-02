import Image from 'next/image';
import React from 'react';
import sharonsLogo from '../../../../../public/assets/sharon-fitness-logo.png';

const Logo = () => {
  return (
    <div className='relative aspect-[1.4/1] w-32 md:w-60'>
      <Image src={sharonsLogo} alt='logo' fill className='object-contain' />
    </div>
  );
};

export default Logo;
