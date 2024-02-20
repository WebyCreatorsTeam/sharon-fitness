import React from 'react';

const MapComp = () => {
  return (
    <div className='h-[409px] w-[313px] rounded-3xl border-[5px] border-[#704C8C] md:h-[454px] md:w-[518px] lg:h-[564px] lg:w-[768px] '>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4184.620696673248!2d34.7530372678862!3d31.254842695216663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150265ebdb2fd9a9%3A0x9f16775c42fbeffa!2sIlan%20Ramon%20Square%2C%20Beersheba!5e0!3m2!1sen!2sus!4v1707704200008!5m2!1sen!2sus'
        loading='lazy'
        // referrerpolicy='no-referrer-when-downgrade'
        className='h-full w-full rounded-3xl'
      ></iframe>
    </div>
  );
};

export default MapComp;
