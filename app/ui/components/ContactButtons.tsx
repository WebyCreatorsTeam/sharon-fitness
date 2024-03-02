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
        ${HeroSection && 'hidden w-fit flex-col items-center gap-7  md:flex md:flex-row md:max-lg:p-0  lg:pr-20'}
        ${!timeoutModalOpen && !HeroSection && 'flex-col gap-9 md:hidden'}
        
        `}
      >
        <Button
          onClick={() => handleOpenCalendlyModal(timeoutModalOpen)}
          timeoutModalOpen={timeoutModalOpen}
          backgroundColor='bg-appointment-gradient'
        >
          <AppointmentsSVG /> לקביעת אימון נסיון
        </Button>
        <Button
          timeoutModalOpen={timeoutModalOpen}
          link='https://wa.me/972523100000'
          backgroundColor='bg-whatsapp-gradient md:rounded-3xl md:w-fit md:px-3 md:py-1'
        >
          <WhatsappSVG
            className={
              timeoutModalOpen ? 'h-9 w-9 md:h-[59px] md:w-[59px]' : ''
            }
          />{' '}
          <span {...(timeoutModalOpen ? { className: 'md:hidden block' } : {})}>
            וואטסאפ
          </span>
        </Button>
      </div>
    </>
  );
};

export default ContactButtons;
