import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

const useUpdateEffect = function (
  effect: EffectCallback,
  deps?: DependencyList
) {
  const isFirstMount = useRef(false);

  useEffect(() => {
    return () => {
      isFirstMount.current = false;
    };
  }, []);

  useEffect(() => {
    if (!isFirstMount.current) {
      isFirstMount.current = true;
    } else {
      return effect();
    }
  }, deps);
};

export default useUpdateEffect;
