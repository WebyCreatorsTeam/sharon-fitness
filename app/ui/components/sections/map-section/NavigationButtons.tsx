import React from 'react';
import Button from '../../Button';
import GoogleMapsSVG from '@/app/ui/svgs/GoogleMapsSVG';
import WazeSVG from '@/app/ui/svgs/WazeSVG';

const NavigationButtons = ({
  location,
}: {
  location: { lat: number; lng: number };
}) => {
  return (
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
  );
};

export default NavigationButtons;
