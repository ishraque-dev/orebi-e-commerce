import React from 'react';

function Image({ src, alt, className }) {
  return <img src={src} alt={alt || 'img'} className={className} />;
}

export default Image;
