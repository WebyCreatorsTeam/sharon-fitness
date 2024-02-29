import React from 'react';

const Radio = ({ value }: { value: string }) => {
  return (
    <span className='relative flex grow text-center text-white '>
      <input
        className='peer sr-only'
        type='radio'
        name='amount'
        value={value}
        id={value}
      />
      <label
        className='peer-checked:bg-radio-focus grow rounded-full bg-stone-400 px-4 py-1'
        htmlFor={value}
      >
        {value}
      </label>
    </span>
  );
};

export default Radio;
