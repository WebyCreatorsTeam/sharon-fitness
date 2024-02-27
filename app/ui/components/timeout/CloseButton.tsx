import React from 'react';
import TimesSVG from '../../svgs/TimesSVG';

const CloseButton = ({
  handleCloseModal,
}: {
  handleCloseModal: () => void;
}) => {
  return (
    <button
      className='absolute left-6 top-5 rounded-full bg-timesButton-gradient p-4'
      onClick={handleCloseModal}
    >
      <TimesSVG width='w-5' height='h-5' />
    </button>
  );
};

export default CloseButton;
