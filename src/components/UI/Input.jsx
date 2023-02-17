import React from 'react';

const Input = ({ input, onFocus, className,onBlur }) => {
  return (
    <input {...input} className={className} onFocus={onFocus} onBlur={onBlur} />
  );
};

export default Input;
