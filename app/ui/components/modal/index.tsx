import React, { ReactNode } from 'react';
import CloseButton from '../timeout/CloseButton';

function Modal({
  handleCloseModal,
  children,
  calendly,
  modalState,
}: {
  handleCloseModal: () => void;
  children: ReactNode;
  calendly?: boolean;
  modalState: boolean;
}) {
  return (
    <div
      className={`${!modalState && 'hidden'} fixed left-0 top-0 z-[60] h-full w-full bg-black/25`}
    >
      <dialog
        className={`md:min-w-2/5 fixed left-1/2 top-1/2 z-[70] flex h-fit w-fit  -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[60px] bg-timeoutModal-gradient  shadow-2xl ${calendly ? '' : 'px-6 py-14 md:px-10 md:py-10 lg:px-20 lg:py-20'}`}
      >
        <CloseButton handleCloseModal={handleCloseModal} />
        <div
          className={`flex ${calendly ? 'h-[90vh] w-[90vw]' : 'min-h-[75vh] min-w-[75vw]'} flex-col items-center gap-24 text-2xl md:gap-12`}
        >
          {children}
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
