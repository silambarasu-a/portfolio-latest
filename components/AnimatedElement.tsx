'use client';

import { motion } from 'framer-motion';
import { useAnimationContext } from './AnimationProvider';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'span' | 'h1' | 'h2' | 'h3' | 'p' | 'article';
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
  transition?: Record<string, unknown>;
  [key: string]: unknown;
}

export default function AnimatedElement({ 
  children, 
  className, 
  delay = 0,
  as = 'div',
  initial,
  animate,
  transition,
  ...rest
}: AnimatedElementProps) {
  const { animationKey, isPageLoaded } = useAnimationContext();
  
  const MotionComponent = motion[as as keyof typeof motion] as React.ComponentType<Record<string, unknown>>;

  return (
    <MotionComponent
      key={animationKey}
      className={className}
      initial={initial || { opacity: 0, y: 30 }}
      animate={animate || (isPageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 })}
      transition={transition || { duration: 0.8, delay }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}