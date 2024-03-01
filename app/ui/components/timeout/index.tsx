'use client';
import { useEffect, useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import ContactButtons from '../ContactButtons';
import LadyWorkingOut from './LadyWorkingOut';
import Modal from '../modal';

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
      <>
        <Modal handleCloseModal={handleCloseModal}>
          <LadyWorkingOut />
          <h1
            dir='rtl'
            className='whitespace-nowrap font-semibold text-[#DF678D] md:text-6xl'
          >
            התעייפתם כבר? 🙃
          </h1>
          <ContactButtons handleCloseCurrentModal={handleCloseModal} modal />
        </Modal>
      </>
    );
  return null;
}
