import React from 'react';
import Modal from '../modal';
import Script from 'next/script';

const CalendlyModal = ({
  modalState,
  handleCloseModal,
}: {
  modalState: boolean;
  handleCloseModal: () => void;
}) => {
  return (
    <Modal modalState={modalState} calendly handleCloseModal={handleCloseModal}>
      <Script
        type='text/javascript'
        src='https://assets.calendly.com/assets/external/widget.js'
        async
      />
      <div
        data-url='https://calendly.com/sharonfitness/meet-with-me'
        className='calendly-inline-widget scroll-none min-h-full min-w-full'
      ></div>
    </Modal>
  );
};

export default CalendlyModal;
