'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  HTMLMotionProps,
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from 'motion/react';

interface ScrollXCarouselContextValue {
  scrollYProgress: MotionValue<number>;
}

const ScrollXCarouselContext =
  React.createContext<ScrollXCarouselContextValue | null>(null);

function useScrollXCarousel() {
  const context = React.useContext(ScrollXCarouselContext);
  if (!context) {
    throw new Error('useScrollXCarousel must be used within a ScrollXCarousel');
  }
  return context;
}

export function ScrollXCarousel({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ['start start', 'end end'],
  });

  return (
    <ScrollXCarouselContext.Provider value={{ scrollYProgress }}>
      <div
        ref={carouselRef}
        className={cn('relative w-screen max-w-full', className)}
        {...props}
      >
        {children}
      </div>
    </ScrollXCarouselContext.Provider>
  );
}

export function ScrollXCarouselContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('sticky overflow-hidden w-full top-0 left-0', className)}
      {...props}
    />
  );
}

export function ScrollXCarouselWrap({
  className,
  style,
  xRagnge,
  ...props
}: HTMLMotionProps<'div'> & { xRagnge?: (string | number)[] }) {
  const { scrollYProgress } = useScrollXCarousel();
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const [scrollAmount, setScrollAmount] = React.useState(0);

  React.useEffect(() => {
    const calculateScroll = () => {
      if (wrapRef.current) {
        const totalScrollable = wrapRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const maxTranslate = Math.max(0, totalScrollable - viewportWidth + 80);
        setScrollAmount(maxTranslate);
      }
    };

    // Calculate immediately and also after a short delay to account for image loads
    calculateScroll();
    const timer = setTimeout(calculateScroll, 300);
    const timer2 = setTimeout(calculateScroll, 1000);

    window.addEventListener('resize', calculateScroll);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      window.removeEventListener('resize', calculateScroll);
    };
  }, []);

  const activeRange = xRagnge && xRagnge.length === 2 ? xRagnge : [0, -scrollAmount];
  const x = useTransform(scrollYProgress, [0, 1], activeRange);

  return (
    <motion.div
      ref={wrapRef}
      className={cn('w-fit', className)}
      style={{ ...(style as any), x }}
      {...props}
    />
  );
}

export function ScrollXCarouselProgress({
  className,
  style,
  progressStyle,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { progressStyle?: string }) {
  const { scrollYProgress } = useScrollXCarousel();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className={cn('max-w-screen overflow-hidden', className)} {...props}>
      <motion.div
        className={cn('origin-left', progressStyle)}
        style={{ ...(style as any), scaleX }}
      />
    </div>
  );
}

export { useScrollXCarousel };
