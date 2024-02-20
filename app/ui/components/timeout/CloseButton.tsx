import React from 'react';
import TimesSVG from '../../svgs/TimesSVG';

const CloseButton = ({
  handleCloseModal,
}: {
  handleCloseModal: () => void;
}) => {
  return (
    <button
      className='bg-timesButton-gradient absolute left-6 top-5 rounded-full p-4'
      onClick={handleCloseModal}
    >
      <TimesSVG width='w-5' height='h-5' />
    </button>
  );
};

export default CloseButton;
