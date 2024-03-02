'use client';
import React, { useState } from 'react';
import AppointmentsSVG from '../svgs/AppointmentsSVG';
import WhatsappSVG from '../svgs/WhatsappSVG';
import Button from './Button';
import CalendlyModal from './calendly/CalendlyModal';

const ContactButtons = ({
  modal,
  HeroSection,
  handleCloseCurrentModal,
}: {
  modal?: boolean;
  HeroSection?: boolean;
  handleCloseCurrentModal?: () => void;
}) => {
  const [calendlyModalState, setCalendlyModalState] = useState(false);
  const handleOpenCalendlyModal = (modal?: boolean) => () => {
    if (modal && handleCloseCurrentModal) {
      handleCloseCurrentModal();
      setCalendlyModalState(true);
    }
    setCalendlyModalState(true);
  };
  const handleCloseCalendlyModal = () => {
    setCalendlyModalState(false);
  };
  return (
    <>
      <CalendlyModal
        modalState={calendlyModalState}
        handleCloseModal={handleCloseCalendlyModal}
      />
      <div
        dir='rtl'
        className={`
        flex
        ${modal && 'flex-col items-center gap-7 md:flex-row'}
        ${HeroSection && 'hidden w-fit flex-col items-center gap-7  md:flex md:flex-row md:max-lg:p-0  lg:pr-20'}
        ${!modal && !HeroSection && 'flex-col gap-9 md:hidden'}
        
        `}
      >
        <Button
          onClick={handleOpenCalendlyModal(modal)}
          modal={modal}
          backgroundColor='bg-appointment-gradient'
        >
          <AppointmentsSVG /> לקביעת אימון נסיון
        </Button>
        <Button
          modal={modal}
          link='https://wa.me/972523100000'
          backgroundColor='bg-whatsapp-gradient md:rounded-3xl md:w-fit md:px-3 md:py-1'
        >
          <WhatsappSVG
            className={modal ? 'h-9 w-9 md:h-[59px] md:w-[59px]' : ''}
          />{' '}
          <span {...(modal ? { className: 'md:hidden block' } : {})}>
            וואטסאפ
          </span>
        </Button>
      </div>
    </>
  );
};

export default ContactButtons;
