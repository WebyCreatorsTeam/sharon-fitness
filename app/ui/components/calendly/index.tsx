import React from 'react';
import Script from 'next/script';
import CloseButton from '../timeout/CloseButton';
const CLOUDINARY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;
const CalendlyModal = ({
  modalState,
  handleCloseCalendlyModal,
}: {
  modalState: boolean;
  handleCloseCalendlyModal: () => void;
}) => {
  return (
    // layover
    <div
      onClick={handleCloseCalendlyModal}
      className={`${!modalState && 'hidden'} fixed left-0 top-0 z-[100] h-full w-full bg-black/25`}
    >
      {/* modal */}
      <dialog
        className={`fixed left-1/2 top-1/2 z-[70] flex h-fit w-fit -translate-x-1/2 -translate-y-1/2  items-center justify-center overflow-x-hidden rounded-[60px] bg-timeoutModal-gradient shadow-2xl  md:min-w-[2/5]`}
      >
        <CloseButton handleCloseModal={handleCloseCalendlyModal} />
        <div
          className={`flex h-[90vh] w-[90vw] flex-col items-center justify-center gap-24 text-2xl md:gap-12`}
        >
          <Script
            type='text/javascript'
            src='https://assets.calendly.com/assets/external/widget.js'
            async
          />
          <div
            data-url={CLOUDINARY_URL}
            className='calendly-inline-widget scroll-none min-h-full min-w-full'
          ></div>
        </div>
      </dialog>
    </div>
  );
};

export default CalendlyModal;
