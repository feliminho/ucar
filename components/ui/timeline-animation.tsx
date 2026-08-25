'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface TimelineContentProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  animationNum?: number;
  timelineRef?: React.RefObject<any>;
  customVariants?: any;
  className?: string;
  as?: 'div' | 'p' | 'article' | 'section';
}

export function TimelineContent({
  children,
  animationNum = 0,
  customVariants,
  className,
  as = 'div',
  ...props
}: TimelineContentProps) {
  const defaultVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        delay: i * 0.15,
        duration: 0.4,
      },
    }),
    hidden: {
      filter: 'blur(6px)',
      y: 20,
      opacity: 0,
    },
  };

  if (as === 'p') {
    return (
      <motion.p
        custom={animationNum}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={customVariants || defaultVariants}
        className={className}
      >
        {children}
      </motion.p>
    );
  }

  return (
    <motion.div
      custom={animationNum}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={customVariants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
