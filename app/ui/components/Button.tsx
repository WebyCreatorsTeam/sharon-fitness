import Link from 'next/link';
import React from 'react';

const Button = ({
  children,
  backgroundColor,
  link,
}: {
  children: React.ReactNode;
  backgroundColor: string;
  link?: string;
}) => {
  if (link) {
    return (
      <button
        className={` ${backgroundColor}
       z-50 rounded-full px-5 py-2 text-3xl  font-semibold  text-white`}
      >
        <Link
          target='_blank'
          className='flex items-center justify-center gap-3'
          href={link}
        >
          {children}
        </Link>
      </button>
    );
  }

  return (
    <button
      className={` ${backgroundColor}
       z-50 flex items-center justify-center gap-3 rounded-full px-5 py-2 text-3xl  font-semibold  text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
