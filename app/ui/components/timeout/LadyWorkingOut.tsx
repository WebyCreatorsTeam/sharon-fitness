import Image from 'next/image';
import React from 'react';

const LadyWorkingOut = () => {
  return (
    <div className='relative h-48 w-48 md:h-96 md:w-96'>
      <Image
        fill
        className='object-contain'
        src='/lg-glute-bridge-with-overhead-press.png'
        sizes='(max-width: 768px) 200px, (max-width: 1200px) 200px, 200px'
        alt='logo'
      />
    </div>
  );
};

export default LadyWorkingOut;
