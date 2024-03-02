import React from 'react';
import HeroImage from './HeroImage';
import HeroIntroduction from './HeroIntroduction';
import Logo from './Logo';
import ContactButtons from '../../ContactButtons';
const HeroSection = ({
  handleOpenCalendlyModal,
}: {
  handleOpenCalendlyModal: (modal?: boolean) => void;
}) => {
  return (
    <div
      className={`relative flex h-fit flex-col items-center gap-10  overflow-x-clip max-lg:w-full md:px-6 md:py-20 lg:items-start lg:pl-14 2xl:max-w-screen-desktop 2xl:items-center 2xl:place-self-center`}
    >
      <div className='absolute left-8 top-[52px] md:hidden'>
        <Logo />
      </div>
      <HeroImage />
      <HeroIntroduction />
      <ContactButtons
        HeroSection
        handleOpenCalendlyModal={handleOpenCalendlyModal}
      />
    </div>
  );
};

export default HeroSection;
