import { useEffect, useRef } from 'react';

const useUnmount = (callback: () => void) => {
  const ref = useRef(callback);

  useEffect(() => {
    return ref.current();
  }, []);
};

export default useUnmount;
