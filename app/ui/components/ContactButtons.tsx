'use client';
import React from 'react';
import AppointmentsSVG from '../svgs/AppointmentsSVG';
import WhatsappSVG from '../svgs/WhatsappSVG';
import Button from './Button';

const ContactButtons = ({
  timeoutModalOpen,
  HeroSection,
  handleCloseCurrentModal,
  handleOpenCalendlyModal,
}: {
  timeoutModalOpen?: boolean;
  HeroSection?: boolean;
  handleCloseCurrentModal?: () => void;
  handleOpenCalendlyModal: (modal?: boolean) => void;
}) => {
  return (
    <>
      <div
        dir='rtl'
        className={`
        flex
        ${timeoutModalOpen && 'flex-col items-center gap-7 md:flex-row'}
        ${HeroSection && 'hidden w-fit flex-col items-center gap-7 md:flex md:flex-row md:gap-3 md:max-lg:p-0 lg:self-start xl:px-10  2xl:px-32'}
        ${!timeoutModalOpen && !HeroSection && 'flex-col gap-9 md:hidden'}
        
        `}
      >
        <Button
          onClick={() => handleOpenCalendlyModal(timeoutModalOpen)}
          timeoutModalOpen={timeoutModalOpen}
          backgroundColor='bg-appointment-gradient'
        >
          <AppointmentsSVG
            className={
              timeoutModalOpen
                ? 'h-9 w-9 md:h-[59px] md:w-[59px]'
                : 'md:h-7 md:w-7 '
            }
          />{' '}
          לקביעת אימון נסיון
        </Button>
        <Button
          timeoutModalOpen={timeoutModalOpen}
          link='https://wa.me/+972542165203'
          backgroundColor='bg-whatsapp-gradient md:rounded-full md:w-fit'
        >
          <WhatsappSVG
            className={
              timeoutModalOpen
                ? 'h-9 w-9 md:h-[59px] md:w-[59px]'
                : 'md:h-7 md:w-7 '
            }
          />{' '}
          <span
            // {...(timeoutModalOpen ? { className: 'md:hidden block' } : {})}
            className='block md:hidden'
          >
            וואטסאפ
          </span>
        </Button>
      </div>
    </>
  );
};

export default ContactButtons;
