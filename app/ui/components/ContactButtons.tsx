import React from 'react';
import AppointmentsSVG from '../svgs/AppointmentsSVG';
import WhatsappSVG from '../svgs/WhatsappSVG';
import Button from './Button';

const ContactButtons = ({ modal }: { modal?: boolean }) => {
  return (
    <div
      dir='rtl'
      className={
        modal
          ? 'flex flex-col items-center gap-7'
          : `flex flex-col gap-9 md:hidden`
      }
    >
      <Button modal={modal} backgroundColor='bg-appointment-gradient'>
        <AppointmentsSVG /> לקביעת אימון נסיון
      </Button>
      <Button
        modal={modal}
        link='https://wa.me/972523100000'
        backgroundColor='bg-whatsapp-gradient'
      >
        <WhatsappSVG />{' '}
        <span {...(modal ? { className: 'sm:hidden block' } : {})}>
          וואטסאפ
        </span>
      </Button>
    </div>
  );
};

export default ContactButtons;
