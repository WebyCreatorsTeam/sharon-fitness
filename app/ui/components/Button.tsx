import Link from 'next/link';
import React from 'react';

const Button = ({
  description,
  children,
  backgroundColor,
  link,
  timeoutModalOpen,
  onClick,
}: {
  description: string;
  children: React.ReactNode;
  backgroundColor: string;
  link?: string;
  timeoutModalOpen?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
    aria-description={`${description} button`}
      onClick={onClick}
      className={` ${backgroundColor} ${timeoutModalOpen ? 'z-[60] w-full ' : ' z-40  text-2xl'}
      flex items-center justify-center gap-3 whitespace-nowrap rounded-full px-4 py-2
      font-semibold leading-none text-white drop-shadow-md `}
    >
      {link ? (
        <Link
          target='_blank'
          className='flex items-center justify-center gap-3'
          href={link}
        >
          {children}
        </Link>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};

export default Button;
