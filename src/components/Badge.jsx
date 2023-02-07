import React from 'react';

export default function Badge({ slag }) {
  return (
    <span className="absolute top-5 left-5 inline-block bg-primary-black py-2 px-4 text-white">
      <p>{slag}</p>
    </span>
  );
}
