import React from 'react';
import heroImageSrc from '../../../../../public/assets/SharonsHero.png';
import tabletHeroImageSrc from '../../../../../public/assets/SharonsTabletHero.png';
import Image from 'next/image';
const HeroImage = () => {
  return (
    <>
      <Image
        src={tabletHeroImageSrc}
        alt='hero image'
        priority
        fill
        sizes='(max-width: 768px) 1009px, (max-width: 1200px) 1122px, 1009px'
        className='hidden object-contain object-right-top md:max-lg:block'
      />
      <Image
        src={heroImageSrc}
        alt='hero image'
        priority
        fill
        sizes='(max-width: 768px) 1009px, (max-width: 1200px) 1122px, 1009px'
        className='object-contain object-right-top max-lg:hidden'
      />
      <div className='relative h-[80vh] max-h-[83.3%] w-full sm:h-[906px]  md:hidden'>
        <Image
          src={heroImageSrc}
          alt='hero image'
          priority
          fill
          sizes='(max-width: 768px) 1009px, (max-width: 1200px) 1122px, 1009px'
          className='object-cover'
        />
      </div>
    </>
  );
};

export default HeroImage;
