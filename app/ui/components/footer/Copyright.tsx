import Link from 'next/link';
import React from 'react';

const Copyright = () => {
  return (
    <h1 className='flex-1 text-3xl font-normal text-[#680995] lg:text-xl'>
      © 2024 Weby. Designed by{' '}
      <Link
        className='cursor-pointer hover:underline'
        target='_blank'
        aria-description='UX/UI Designer Julia Voronina`s linkedin profile'
        href='https://www.linkedin.com/in/julia-voronina-660a6a28b/'
      >
        Julia Voronina
      </Link>
      . Developed by{' '}
      <Link
        className='cursor-pointer hover:underline'
        target='_blank'
        aria-description='Full stack developer Etan Heyman`s linkedin profile'
        href='https://www.linkedin.com/in/etanjheyman/'
      >
        Etan Heyman
      </Link>
      ,{' '}
      <Link
        className='cursor-pointer hover:underline'
        target='_blank'
        aria-description='Full stack developer Itsik Bamani`s linkedin profile'
        href='https://www.linkedin.com/in/itsik-bamani-9b5a8b1b6/'
      >
        Itsik Bamani
      </Link>{' '}
      and Natalie Gariba. All rights reserved.
    </h1>
  );
};

export default Copyright;
