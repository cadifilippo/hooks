import { EffectCallback, useCallback, useEffect, useRef } from 'react';

const useMount = (effect?: EffectCallback) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      effect?.();
    }
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return { isMounted: useCallback(() => !isMounted.current, []) };
};

export default useMount;
