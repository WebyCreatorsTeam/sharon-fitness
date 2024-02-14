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
import Link from 'next/link';
import ContactButtons from '../../ContactButtons';

const MapSection = () => {
  const location = {
    lat: 31.254632,
    lng: 34.75648,
  };
  return (
    <div className={`background h-svh w-full ${styles.default.background}`}>
      <div className='relative flex h-full w-full flex-col items-center pt-60'>
        <MainDecorLine />
        <div className='scrollbar-none flex w-fit flex-col items-center justify-center gap-12 overflow-y-scroll lg:flex-col-reverse lg:items-start lg:pb-9'>
          <ContactButtons />
          <MapComp />
          <div
            dir='rtl'
            className='flex w-full flex-col gap-9 md:flex-row md:justify-between lg:flex-row-reverse lg:justify-start'
          >
            <Button
              link={`https://www.google.com/maps/place/${location.lat},${location.lng}/@${location.lat},${location.lng},15z`}
              backgroundColor='bg-google-maps-gradient'
            >
              <GoogleMapsSVG /> פתח בגוגל מפות
            </Button>
            <Button
              link={`https://waze.com/ul?ll=${location.lat},${location.lng}&navigate=yes&zoom=17`}
              backgroundColor='bg-waze-gradient'
            >
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
