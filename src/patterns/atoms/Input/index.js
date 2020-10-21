import React from 'react';

const Input = ({ className='', describedby='', id='', placeholder='', type='' }) => {
  return (
    <input
      id={describedby ? undefined : id}
      type={type}
      className={className}
      placeholder={placeholder}
      aria-label={placeholder}
      aria-describedby={id ? undefined : describedby}
    />
  )
}

export default Input;
