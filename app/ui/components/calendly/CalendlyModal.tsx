import React from 'react';
import Script from 'next/script';
import CloseButton from '../timeout/CloseButton';

const CalendlyModal = ({
  modalState,
  handleCloseCalendlyModal,
}: {
  modalState: boolean;
  handleCloseCalendlyModal: () => void;
}) => {
  return (
    // <Modal modalState={modalState} calendly handleCloseCalendlyModal={handleCloseCalendlyModal}>
    <div
      className={`${!modalState && 'hidden'} fixed left-0 top-0 z-[60] h-full w-full bg-black/25`}
    >
      <dialog
        className={`md:min-w-2/5 fixed left-1/2 top-1/2 z-[70] flex h-fit w-fit  -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[60px] bg-timeoutModal-gradient  shadow-2xl`}
      >
        <CloseButton handleCloseModal={handleCloseCalendlyModal} />
        <div
          className={`flex h-[90vh] w-[90vw] flex-col items-center gap-24 text-2xl md:gap-12`}
        >
          <Script
            type='text/javascript'
            src='https://assets.calendly.com/assets/external/widget.js'
            async
          />
          <div
            data-url='https://calendly.com/sharonfitness/meet-with-me'
            className='calendly-inline-widget scroll-none min-h-full min-w-full'
          ></div>
        </div>
      </dialog>
    </div>
    // </Modal>
  );
};

export default CalendlyModal;
