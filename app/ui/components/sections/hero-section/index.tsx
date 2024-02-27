import React from 'react';
import HeroImage from './HeroImage';
import HeroIntroduction from './HeroIntroduction';
import Image from 'next/image';
import sharonsLogo from '../../../../../public/assets/sharon-fitness-logo.png';
const HeroSection = () => {
  return (
    <div className={`h-fit w-full overflow-x-clip`}>
      <div className='absolute left-8 top-[52px]'>
        <div className='relative aspect-[1.4/1] w-32'>
          <Image src={sharonsLogo} alt='logo' fill className='object-contain' />
        </div>
      </div>
      <HeroImage />
      <HeroIntroduction />
    </div>
  );
};

export default HeroSection;
