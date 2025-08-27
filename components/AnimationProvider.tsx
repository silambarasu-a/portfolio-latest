'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface AnimationContextType {
  animationKey: number;
  isPageLoaded: boolean;
}

const AnimationContext = createContext<AnimationContextType>({
  animationKey: 0,
  isPageLoaded: false
});

export const useAnimationContext = () => useContext(AnimationContext);

export default function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [animationKey, setAnimationKey] = useState(0);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsPageLoaded(false);
    setAnimationKey(prev => prev + 1);
    
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimationContext.Provider value={{ animationKey, isPageLoaded }}>
      {children}
    </AnimationContext.Provider>
  );
}