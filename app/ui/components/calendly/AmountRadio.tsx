'use client';
import React from 'react';
import Radio from '../Radio';

const AmountRadio = () => {
  return (
    <fieldset className='flex w-full gap-2'>
      <Radio value='זוגיים' />
      <Radio value='אישיים' />
    </fieldset>
  );
};

export default AmountRadio;
