import React from 'react';
import Input from './Input';

function CommonInput({ title, type }) {
  return (
    <>
      <h3 className="my-5 font-dm text-xl font-medium">{title}</h3>
      <Input
        className="w-full border-b-2 outline-none"
        input={{ placeholder: 'Your name here', name: 'name', type: type }}
      />
    </>
  );
}

export default CommonInput;
