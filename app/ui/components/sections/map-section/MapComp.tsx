import React from 'react';

const MapComp = () => {
  return (
    <div className='h-[409px] w-[313px] rounded-3xl border-[5px] border-[#704C8C] md:h-[454px] md:w-[518px] lg:h-[564px] lg:w-[768px] '>
      <iframe
        title='map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.7522531827376!2d34.755503!3d31.255281000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150265ebbaa3e177%3A0x33910143ebd0b885!2z15PXpNeg15QgNSwgQmVlcnNoZWJhLCBJc3JhZWw!5e0!3m2!1sen!2sus!4v1709399389741!5m2!1sen!2sus'
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        className='h-full w-full rounded-3xl'
      ></iframe>
    </div>
  );
};

export default MapComp;
