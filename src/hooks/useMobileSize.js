import { useState, useEffect } from 'react';

const useMobileSize = () => {
  const [xsMobile, setXsMobile] = useState(false);
  const [screenSize, setScreenSize] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    if (screenSize < 500) {
      setXsMobile(false);
    } else {
      setXsMobile(true);
    }
  }, [screenSize]);
  return [xsMobile, setXsMobile];
};
export default useMobileSize;
