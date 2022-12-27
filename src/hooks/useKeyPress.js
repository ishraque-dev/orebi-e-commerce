import { useState, useEffect } from 'react';
const useKeyPress = (targetKey) => {
  const [keyPress, setKeyPressed] = useState(false);
  useEffect(() => {
    const downHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    };
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };
    return () => {
      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);
    };
  }, [targetKey]);
  return keyPress;
};
export default useKeyPress;
