import React, { ReactNode } from 'react';
import CloseButton from '../timeout/CloseButton';

function Modal({
  handleCloseModal,
  children,
}: {
  handleCloseModal: () => void;
  children: ReactNode;
}) {
  return (
    <div className='fixed left-0 top-0 z-[60] h-full w-full bg-black/25'>
      <dialog className='md:min-w-2/5 fixed left-1/2 top-1/2 z-[70] flex h-fit w-fit  -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[60px] bg-timeoutModal-gradient px-6 py-14 shadow-2xl md:px-10 md:py-10 lg:px-20 lg:py-20'>
        <CloseButton handleCloseModal={handleCloseModal} />
        <div className='flex min-h-[75vh] min-w-[75vw] flex-col items-center gap-24 text-2xl md:gap-12'>
          {children}
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
