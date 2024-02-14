'use client';
import { useEffect, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import TimesSVG from '../../svgs/TimesSVG';
import ContactButtons from '../ContactButtons';
import Image from 'next/image';

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
    timeout: 3000,
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
        <dialog
          open
          className='fixed left-1/2 top-1/2 z-50 flex h-fit w-fit -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[60px] bg-timeoutModal-gradient px-2 py-8 shadow-2xl'
        >
          <button
            className='bg-timesButton-gradient absolute left-6 top-5 rounded-full p-4'
            onClick={handleCloseModal}
          >
            <TimesSVG width='w-5' height='h-5' />
          </button>
          <div className='flex flex-col items-center gap-24 text-2xl'>
            <Image
              src='/lg-glute-bridge-with-overhead-press.png'
              sizes='(max-width: 768px) 200px, (max-width: 1200px) 200px, 200px'
              alt='logo'
              width={200}
              height={200}
            />
            <h1
              dir='rtl'
              className='whitespace-nowrap font-semibold text-[#DF678D]'
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
