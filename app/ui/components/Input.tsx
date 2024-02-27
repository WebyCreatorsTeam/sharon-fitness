import React from 'react';

const Input = ({
  title,
  name,
  placeholder,
  type,
  optionEnum,
}: {
  title: string;
  name: string;
  placeholder: string;
  type?: 'text' | 'tel' | 'select';
  optionEnum?: {
    [key: string]: string;
  };
}) => {
  return (
    <fieldset
      aria-description={`${title},${name} input`}
      className='font-light text-[#704C8C]'
    >
      <label className='font-normal' htmlFor={name}>
        {title}:
      </label>
      {type === 'select' ? (
        <select
          className='input w-full rounded-full px-2'
          name={name}
          id={name}
          defaultValue={optionEnum ? optionEnum[0] : ''}
          required
        >
          {optionEnum &&
            Object.entries(optionEnum).map(([key, value]: [string, string]) => (
              <option className='' key={key} value={key}>
                {value}
              </option>
            ))}
        </select>
      ) : (
        <input
          className='input w-full rounded-full px-2'
          type={type}
          name={name}
          id={name}
          required
        />
      )}
    </fieldset>
  );
};

export default Input;
