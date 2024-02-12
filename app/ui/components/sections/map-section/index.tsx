import MainDecorLine from '@/app/ui/svgs/decor-lines/MainDecorLine';
import * as styles from './map-section.module.css';
import React from 'react';
import SlantedDecorLine from '@/app/ui/svgs/decor-lines/SlantedDecorLine';
import MapComp from './MapComp';
import WazeSVG from './WazeSVG';
import GoogleMapsSVG from './GoogleMapsSVG';

const MapSection = () => {
  return (
    <div className={`background h-svh w-full ${styles.default.background}`}>
      <div className='relative flex h-full w-full flex-col items-center pt-60'>
        <MainDecorLine />
        <div className='scrollbar-none flex w-fit flex-col items-start justify-center overflow-y-scroll'>
          <div dir='rtl' className='flex'>
            <button className='bg-waze-gradient z-50 flex items-center gap-3 rounded-full p-1.5 pe-4 text-3xl  font-semibold  text-white'>
              <WazeSVG /> פתח בוויז
            </button>
            <button className='bg-google-maps-gradient z-50 flex items-center gap-3 rounded-full px-5 py-1.5 text-3xl  font-semibold  text-white'>
              <GoogleMapsSVG /> פתח בגוגל מפות
            </button>
          </div>
          <MapComp />
        </div>
        <SlantedDecorLine />
      </div>
    </div>
  );
};

export default MapSection;
