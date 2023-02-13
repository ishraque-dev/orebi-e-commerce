import React from 'react';

export default function Badge({ slag }) {
  return (
    <span className="absolute top-3 left-3 inline-block bg-primary-black  py-1 px-1 text-white md:top-4 md:left-4 md:py-1 md:px-3">
      <p>{slag}</p>
    </span>
  );
}
