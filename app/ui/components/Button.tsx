import Link from 'next/link';
import React from 'react';

const Button = ({
  children,
  backgroundColor,
  link,
  modal,
}: {
  children: React.ReactNode;
  backgroundColor: string;
  link?: string;
  modal?: boolean;
}) => {
  if (link) {
    return (
      <button
        className={` ${backgroundColor} ${modal ? 'w-full rounded-full px-4 py-4' : 'rounded-full px-5 py-2 text-3xl'}
    z-40  flex justify-center whitespace-nowrap font-semibold text-white drop-shadow-md `}
      >
        <Link target='_blank' className='flex items-center gap-3' href={link}>
          {children}
        </Link>
      </button>
    );
  }

  return (
    <button
      className={` ${backgroundColor} ${modal ? 'w-full rounded-full px-4 py-4' : 'rounded-full px-5 py-2 text-3xl'}
    z-40 flex items-center justify-center gap-3 whitespace-nowrap font-semibold text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
