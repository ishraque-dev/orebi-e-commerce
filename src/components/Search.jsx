import React from 'react';
import Input from './Input';
const Search = () => {
  return (
    <Input
      input={{ name: 'search', type: 'text', placeholder: 'Search hear' }}
      className="w-full border-none py-2 px-3 outline-none"
    />
  );
};

export default Search;
