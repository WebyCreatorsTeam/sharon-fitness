'use client';
import { useEffect, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import ContactButtons from '../ContactButtons';
import CloseButton from './CloseButton';
import LadyWorkingOut from './LadyWorkingOut';

export default function TimeoutModal() {
  const [state, setState] = useState<string>('Active');
  const [remaining, setRemaining] = useState<number>(0);

  const onIdle = () => {
    setState('Idle');
  };

  const onActive = () => {
    if (state === 'Idle') return;
    setState('Active');
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
  const handleCloseModal = () => {
    setState('Active');
  };
  if (state === 'Idle')
    return (
      <div className='absolute z-40 h-full w-full bg-black/25'>
        <dialog className='bg-timeoutModal-gradient md:min-w-2/5 fixed left-1/2 top-1/2 z-50 flex h-fit  w-fit -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[60px] px-2 py-8 shadow-2xl md:px-10 md:py-10 lg:px-20 lg:py-20'>
          <CloseButton handleCloseModal={handleCloseModal} />
          <div className='flex flex-col items-center gap-24 text-2xl md:gap-12'>
            <LadyWorkingOut />
            <h1
              dir='rtl'
              className='whitespace-nowrap font-semibold text-[#DF678D] md:text-6xl'
            >
              התעייפתם כבר? 🙃
            </h1>
            <ContactButtons modal />
          </div>
        </dialog>
      </div>
    );
  return null;
}
