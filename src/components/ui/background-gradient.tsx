import { cn } from '@/lib/utils';
import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
    },
  };
  return (
    <div className={cn('relative p-[4px] group', containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className={cn(
          'absolute inset-0 rounded-xl z-[1] opacity-20 group-hover:opacity-40 blur-lg transition duration-500 will-change-transform',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#3151B520,transparent),radial-gradient(circle_farthest-side_at_100%_0,#56CCF220,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#9333EA20,transparent),radial-gradient(circle_farthest-side_at_0_0,#EC489920,transparent)]'
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className={cn(
          'absolute inset-0 rounded-xl z-[1] opacity-10 group-hover:opacity-20 will-change-transform',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#3151B510,transparent),radial-gradient(circle_farthest-side_at_100%_0,#56CCF210,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#9333EA10,transparent),radial-gradient(circle_farthest-side_at_0_0,#EC489910,transparent)]'
        )}
      />

      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  );
};
