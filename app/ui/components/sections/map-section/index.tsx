import MainDecorLine from '@/app/ui/svgs/decor-lines/MainDecorLine';
import * as styles from './map-section.module.css';
import React from 'react';
import SlantedDecorLine from '@/app/ui/svgs/decor-lines/SlantedDecorLine';
import MapComp from './MapComp';
import ContactButtons from '../../ContactButtons';
import NavigationButtons from './NavigationButtons';

const MapSection = () => {
  const location = {
    lat: 31.254632,
    lng: 34.75648,
  };
  return (
    <div
      className={`background h-svh w-full overflow-x-clip ${styles.default.background}`}
    >
      <div className='relative flex h-full w-full flex-col items-center pt-60'>
        <MainDecorLine />
        <div className='scrollbar-none flex w-fit flex-col items-center justify-center gap-12 overflow-y-scroll lg:flex-col-reverse lg:items-start lg:pb-9'>
          <ContactButtons />
          <MapComp />
          <NavigationButtons location={location} />
        </div>
        <SlantedDecorLine />
      </div>
    </div>
  );
};

export default MapSection;
