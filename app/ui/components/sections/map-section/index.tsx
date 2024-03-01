import MainDecorLine from '@/app/ui/svgs/decor-lines/MainDecorLine';
import * as styles from './map-section.module.css';
import React from 'react';
import MapComp from './MapComp';
import ContactButtons from '../../ContactButtons';
import NavigationButtons from './NavigationButtons';
import { handleCreateCalendlyEvent } from '@/lib/calendly/helpers';

const MapSection = () => {
  const location = {
    lat: 31.254632,
    lng: 34.75648,
  };

  return (
    <div
      className={`z-10 h-fit w-full overflow-x-clip ${styles.default.background}`}
    >
      <div className='relative flex h-full w-full flex-col items-center'>
        <MainDecorLine />
        <div className='scrollbar-none flex h-fit w-fit flex-col items-center justify-center gap-12 overflow-y-scroll pb-14 pt-48 lg:flex-col-reverse lg:items-start lg:pb-9 2xl:pt-72'>
          <ContactButtons
            handleCreateCalendlyEvent={handleCreateCalendlyEvent}
          />
          <MapComp />
          <NavigationButtons location={location} />
        </div>
      </div>
    </div>
  );
};

export default MapSection;
