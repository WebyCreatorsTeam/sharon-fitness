import Link from 'next/link';
import React from 'react';

const Button = ({
  children,
  backgroundColor,
  link,
  timeoutModalOpen,
  onClick,
}: {
  children: React.ReactNode;
  backgroundColor: string;
  link?: string;
  timeoutModalOpen?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={` ${backgroundColor} ${timeoutModalOpen ? 'z-[60] w-full rounded-full px-4 py-2' : ' z-40 rounded-full px-5 py-2 text-3xl'}
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
