import React from 'react';
import WebysLogo from './WebysLogo';
import SocialMediaIcons from './SocialMediaIcons';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <footer className='z-[90] flex w-full flex-shrink-0 flex-col items-center gap-y-7 bg-white/80 px-8 pb-12 pt-4 md:px-32 md:py-8 lg:flex-row lg:gap-x-11 lg:py-9'>
      <div className='flex w-full items-center justify-between gap-16 md:w-fit'>
        <WebysLogo />
        <SocialMediaIcons />
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
