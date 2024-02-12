import MainDecorLine from '@/app/ui/svgs/decor-lines/MainDecorLine';
import * as styles from './map-section.module.css';
import React from 'react';
import SlantedDecorLine from '@/app/ui/svgs/decor-lines/SlantedDecorLine';

const MapSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`background h-svh w-full ${styles.default.background}`}>
      <div className='relative flex h-full w-full flex-col pt-60'>
        <MainDecorLine />
        <div className='scrollbar-none w-full justify-center overflow-y-scroll'>
          {children}
        </div>
        <SlantedDecorLine />
      </div>
    </div>
  );
};

export default MapSection;
