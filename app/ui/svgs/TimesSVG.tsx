import React from 'react';

const TimesSVG = ({ width, height }: { width: string; height: string }) => {
  return (
    <svg
      className={`${width} ${height}`}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M22.3303 20L40 37.6953L37.6953 40L20 22.3303L2.30474 40L0 37.6953L17.6697 20L0 2.30474L2.30474 0L20 17.6697L37.6953 0L40 2.30474L22.3303 20Z'
        fill='white'
      />
    </svg>
  );
};

export default TimesSVG;
