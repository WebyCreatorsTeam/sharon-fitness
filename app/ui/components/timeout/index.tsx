import ContactButtons from '../ContactButtons';
import LadyWorkingOut from './LadyWorkingOut';
import CloseButton from './CloseButton';

export default function TimeoutModal({
  handleOpenCalendlyModal,
  handleCloseTimeoutModal,
  timeoutModalState,
}: {
  handleOpenCalendlyModal: (timeoutModal?: boolean) => void;
  handleCloseTimeoutModal: () => void;
  timeoutModalState: 'Active' | 'Idle';
}) {
  return (
    // layover
    <div
      onMouseDown={handleCloseTimeoutModal}
      className={`${timeoutModalState === 'Active' && 'hidden'} fixed left-0 top-0 z-[100] h-full w-full bg-black/25`}
    >
      {/* modal */}
      <dialog
        onMouseDown={(e) => e.stopPropagation()}
        className={`fixed left-1/2 top-1/2 z-[70] flex h-fit max-h-[90vh] w-fit max-w-[90vw] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[60px] bg-timeoutModal-gradient  px-6 py-14 shadow-2xl md:px-10 md:py-10 lg:px-20 lg:py-20`}
      >
        <CloseButton handleCloseModal={handleCloseTimeoutModal} />
        <div
          className={`flex min-h-[75vh] min-w-[75vw] flex-col items-center gap-24 text-2xl md:gap-12 lg:justify-around`}
        >
          <LadyWorkingOut />
          <h1
            dir='rtl'
            className='whitespace-nowrap font-semibold text-[#DF678D] md:text-6xl'
          >
            התעייפתם כבר? 🙃
          </h1>
          <ContactButtons
            handleOpenCalendlyModal={() => handleOpenCalendlyModal(true)}
            handleCloseCurrentModal={handleCloseTimeoutModal}
            timeoutModalOpen
          />
        </div>
      </dialog>
    </div>
  );
}
