import { useEffect, useState } from 'react';

export default function useDomElement() {
  const [onTarget, setOnTarget] = useState(false);
  useEffect(() => {
    const handleClick = () => {
      document.body.addEventListener('click', function (e) {
        if (e.target.closest('.toggle') === null) {
          setOnTarget(false);
        }
      });
    };
    handleClick();
    return () =>
      document.removeEventListener('click', () => setOnTarget(false));
  }, []);

  return [onTarget, setOnTarget];
}
