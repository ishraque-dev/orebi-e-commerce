import React from 'react';
import Input from './Input';

function Search() {
  return (
    <Input
      input={{ name: 'search', type: 'text', placeholder: 'Search here' }}
      className="w-full rounded-md border-none py-2 px-3 outline-none"
    />
  );
}

export default Search;
