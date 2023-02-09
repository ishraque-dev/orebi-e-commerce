import { useEffect } from 'react';

function usePageTitle(title) {
  useEffect(() => {
    document.title = title;
    return () => (document.title = '');
  }, []);
}

export default usePageTitle;
