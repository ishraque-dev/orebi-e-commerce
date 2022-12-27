import React from 'react';

const Input = ({ input, onChange, className }) => {
  return <input {...input} className={className} />;
};

export default Input;
