'use client';
import React, { useEffect, useState } from 'react';
import AppointmentsSVG from '../svgs/AppointmentsSVG';
import WhatsappSVG from '../svgs/WhatsappSVG';
import Button from './Button';
import CalendlyModal from './calendly/CalendlyModal';

const ContactButtons = ({
  modal,
  handleCloseCurrentModal,
  handleCreateCalendlyEvent,
}: {
  modal?: boolean;
  handleCloseCurrentModal?: () => void;
  handleCreateCalendlyEvent(formData: FormData): Promise<void>;
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
        handleCreateCalendlyEvent={handleCreateCalendlyEvent}
        modalState={calendlyModalState}
        handleCloseModal={handleCloseCalendlyModal}
      />
      <div
        dir='rtl'
        className={
          modal
            ? 'flex flex-col items-center gap-7 md:flex-row'
            : `flex flex-col gap-9 md:hidden`
        }
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
