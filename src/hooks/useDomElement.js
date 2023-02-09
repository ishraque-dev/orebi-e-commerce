import { useEffect, useState } from 'react';

export default function useDomElement(target) {
  const [onTarget, setOnTarget] = useState(false);
  const [onTarget2, setOnTarget2] = useState(false);
  const [onTarget3, setOnTarget3] = useState(false);
  const controller = function (stateChange, value = false) {
    // eslint-disable-next-line no-undef
    document.body.addEventListener('click', (e) => {
      if (e.target.closest('.toggle') === null) {
        stateChange(value);
      }
    });
  };
  useEffect(() => {
    const handleClick = () => {
      if (target === 'category') {
        controller(setOnTarget, false);
      }

      if (target === 'user') {
        controller(setOnTarget2, false);
      }
      if (target === 'cart') {
        controller(setOnTarget3, false);
      }
    };
    handleClick();
    return () =>
      // eslint-disable-next-line no-undef
      document.removeEventListener('click', () => {
        setOnTarget(false);
        setOnTarget2(false);
        setOnTarget3(false);
      });
  }, []);

  if (target === 'category') {
    return [onTarget, setOnTarget];
  }
  if (target === 'user') {
    return [onTarget2, setOnTarget2];
  }
  if (target === 'cart') {
    return [onTarget3, setOnTarget3];
  }
}
