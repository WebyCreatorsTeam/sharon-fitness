import Link from 'next/link';
import React from 'react';

const Button = ({
  children,
  backgroundColor,
  link,
  modal,
  onClick,
}: {
  children: React.ReactNode;
  backgroundColor: string;
  link?: string;
  modal?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={` ${backgroundColor} ${modal ? 'z-[60] w-full rounded-full px-4 py-4' : ' z-40 rounded-full px-5 py-2 text-3xl'}
      flex justify-center whitespace-nowrap font-semibold text-white drop-shadow-md `}
    >
      {link ? (
        <Link target='_blank' className='flex items-center gap-3' href={link}>
          {children}
        </Link>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default Button;
