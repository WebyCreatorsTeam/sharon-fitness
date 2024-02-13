import React from 'react';

const Button = ({
  children,
  backgroundColor,
}: {
  children: React.ReactNode;
  backgroundColor: string;
}) => {
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
