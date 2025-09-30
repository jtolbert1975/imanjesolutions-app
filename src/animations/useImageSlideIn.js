import { useState, useEffect } from 'react';

export const useImageSlideIn = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return loaded;
};



export default useImageSlideIn;

