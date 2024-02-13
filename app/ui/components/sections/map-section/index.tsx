import MainDecorLine from '@/app/ui/svgs/decor-lines/MainDecorLine';
import * as styles from './map-section.module.css';
import React from 'react';
import SlantedDecorLine from '@/app/ui/svgs/decor-lines/SlantedDecorLine';
import MapComp from './MapComp';

import Button from '../../Button';
import GoogleMapsSVG from '@/app/ui/svgs/GoogleMapsSVG';
import WazeSVG from '@/app/ui/svgs/WazeSVG';
import WhatsappSVG from '@/app/ui/svgs/WhatsappSVG';
import AppointmentsSVG from '@/app/ui/svgs/AppointmentsSVG';

const MapSection = () => {
  return (
    <div className={`background h-svh w-full ${styles.default.background}`}>
      <div className='relative flex h-full w-full flex-col items-center pt-60'>
        <MainDecorLine />
        <div className='scrollbar-none flex w-fit flex-col items-start justify-center gap-9 overflow-y-scroll'>
          <div dir='rtl' className='flex flex-col gap-9'>
            <Button backgroundColor='bg-appointment-gradient'>
              <AppointmentsSVG /> לקביעת אימון נסיון
            </Button>
            <Button backgroundColor='bg-whatsapp-gradient'>
              <WhatsappSVG /> וואטסאפ
            </Button>
          </div>
          <MapComp />
          <div dir='rtl' className='flex flex-col gap-9'>
            <Button backgroundColor='bg-google-maps-gradient'>
              <GoogleMapsSVG /> פתח בגוגל מפות
            </Button>
            <Button backgroundColor='bg-waze-gradient'>
              <WazeSVG /> פתח בוויז
            </Button>
          </div>
        </div>
        <SlantedDecorLine />
      </div>
    </div>
  );
};

export default MapSection;
