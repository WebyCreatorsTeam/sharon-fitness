import React from 'react';
import HeroImage from './HeroImage';
import HeroIntroduction from './HeroIntroduction';
import tabletHeroImageSrc from '../../../../../public/assets/SharonsTabletHero.png';
import Logo from './Logo';
import ContactButtons from '../../ContactButtons';
import Image from 'next/image';
const HeroSection = () => {
  return (
    <div
      className={`relative mx-6 flex h-fit w-full flex-col items-center  gap-10 overflow-x-clip sm:max-lg:pb-24 lg:items-start`}
    >
      <div className='absolute left-8 top-[52px] md:hidden'>
        <Logo />
      </div>
      <Image
        src={tabletHeroImageSrc}
        alt='hero image'
        priority
        fill
        sizes='(max-width: 768px) 1009px, (max-width: 1200px) 1122px, 1009px'
        className='hidden object-contain object-right-top md:max-lg:block'
      />
      <HeroImage />
      <HeroIntroduction />
      <ContactButtons HeroSection />
    </div>
  );
};

export default HeroSection;
