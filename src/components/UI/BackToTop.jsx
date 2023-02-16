import React from 'react';
import { icons } from '../../assets/constants';
function BackToTop() {
  const goToTop = function () {
    console.log('clicked');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div
      className="fixed bottom-10 right-5 z-50 animate-slowfade cursor-pointer"
      onClick={goToTop}
    >
      <icons.arrowUp className="text-xl lg:text-2xl" />
    </div>
  );
}

export default BackToTop;
