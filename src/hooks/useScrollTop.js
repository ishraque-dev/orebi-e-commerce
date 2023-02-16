import { useState, useEffect } from 'react';

function useScrollTop(ref) {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  });
  const scrollTop = () => {
    useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
          setShowBtn(true);
        } else {
          setShowBtn(false);
        }
      });
    }, []);
  };
  scrollTop();
  return [showBtn];
}
export default useScrollTop;
