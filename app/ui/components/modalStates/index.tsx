import React from 'react';
import TimeoutModal from '../timeout';
import CalendlyModal from '../calendly/CalendlyModal';

function Modals({
  handleCloseTimeoutModal,
  handleOpenCalendlyModal,
  handleCloseCalendlyModal,
  timeoutModalState,
  calendlyModalState,
}: {
  handleCloseTimeoutModal: () => void;
  handleOpenCalendlyModal: () => void;
  handleCloseCalendlyModal: () => void;
  timeoutModalState: 'Active' | 'Idle';
  calendlyModalState: boolean;
}) {
  return (
    <>
      <TimeoutModal
        timeoutModalState={timeoutModalState}
        handleOpenCalendlyModal={handleOpenCalendlyModal}
        handleCloseTimeoutModal={handleCloseTimeoutModal}
      />
      <CalendlyModal
        modalState={calendlyModalState}
        handleCloseCalendlyModal={handleCloseCalendlyModal}
      />
    </>
  );
}

export default Modals;
