'use client';
import { useEffect, useState } from 'react';
import Modals from './ui/components/modalStates';
import HeroSection from './ui/components/sections/hero-section';
import MapSection from './ui/components/sections/map-section';
import { useIdleTimer } from 'react-idle-timer';
export default function Home() {
  const [calendlyModalState, setCalendlyModalState] = useState(false);
  const [timeoutModalState, setTimeoutModalState] = useState<'Active' | 'Idle'>(
    'Active'
  );
  const [remaining, setRemaining] = useState<number>(0);

  // Calendly Modal
  const handleOpenCalendlyModal = () => {
    setTimeoutModalState('Active');
    setCalendlyModalState(true);
  };

  const handleCloseCalendlyModal = () => {
    setCalendlyModalState(false);
  };

  // Timeout Modal
  const handleCloseTimeoutModal = () => {
    setTimeoutModalState('Active');
  };
  const onIdle = () => {
    handleCloseCalendlyModal();
    setTimeoutModalState('Idle');
  };

  const onActive = () => {
    if (timeoutModalState === 'Idle') return;
    setTimeoutModalState('Active');
  };

  const { getRemainingTime } = useIdleTimer({
    onIdle,
    onActive,
    timeout: 300000,
    throttle: 500,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className='scrollbar-none relative flex h-full w-full flex-col -space-y-36 overflow-y-hidden'>
        <HeroSection handleOpenCalendlyModal={handleOpenCalendlyModal} />
        <MapSection handleOpenCalendlyModal={handleOpenCalendlyModal} />
      </div>
      <Modals
        handleCloseTimeoutModal={handleCloseTimeoutModal}
        handleOpenCalendlyModal={handleOpenCalendlyModal}
        handleCloseCalendlyModal={handleCloseCalendlyModal}
        timeoutModalState={timeoutModalState}
        calendlyModalState={calendlyModalState}
      />
    </>
  );
}
