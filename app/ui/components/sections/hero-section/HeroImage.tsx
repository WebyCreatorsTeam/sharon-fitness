import React from 'react';
import heroImageSrc from '../../../../../public/assets/SharonsHero.png';
import Image from 'next/image';

const HeroImage = () => {
  return (
    <div className='relative h-[80vh] max-h-[83.3%] sm:h-[906px] tablet:h-[849px] '>
      <Image
        src={heroImageSrc}
        alt='hero image'
        priority
        fill
        sizes='(max-width: 768px) 1009px, (max-width: 1200px) 1122px, 1009px'
        className='object-cover'
      />
    </div>
  );
};

export default HeroImage;
