import React from 'react';

function SelectOption({ optionValues, onChange }) {
  return (
    <select
      onChange={onChange}
      id="countries"
      class="block w-[20%]  border border-gray-300 bg-gray-50 p-1 font-dm text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:text-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
    >
      {optionValues.map((item) => (
        <option>{item}</option>
      ))}
    </select>
  );
}

export default SelectOption;
