import React, { useState, useId } from 'react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

interface TestimonialItem {
  title: string;
  description: string;
  link?: string;
}

export const TestimonialsGrid = ({
  items,
  className,
}: {
  items: TestimonialItem[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="py-10">
      <div
        className={cn(
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto',
          className
        )}
      >
        {items.map((item, idx) => {
          const CardWrapper = item.link ? 'a' : 'div';
          const wrapperProps = item.link ? { href: item.link } : {};

          // Parse the description to separate parts
          const descriptionParts = item.description.split('\n\n');
          const roleCompany = descriptionParts[0] || '';
          const quote = descriptionParts[1] || '';
          const results = descriptionParts[2] || '';

          return (
            <CardWrapper
              {...wrapperProps}
              key={item.title + idx}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-primary/5 block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>

              <div className="rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-gray-200 group-hover:border-primary/30 relative z-20 shadow-md hover:shadow-lg transition-all duration-300">
                <Grid size={20} />

                <div className="relative z-50">
                  <div className="p-4">
                    <h4 className="text-gray-900 font-bold text-xl mb-1">{item.title}</h4>

                    <p className="text-primary font-medium text-sm mb-4">{roleCompany}</p>

                    <blockquote className="text-gray-700 italic text-sm leading-relaxed mb-4 border-l-2 border-primary/20 pl-3">
                      {quote.replace(/"/g, '')}
                    </blockquote>

                    <div className="text-gray-600 text-xs leading-relaxed">{results}</div>
                  </div>
                </div>
              </div>
            </CardWrapper>
          );
        })}
      </div>
    </div>
  );
};

export const Grid = ({ pattern, size }: { pattern?: number[][]; size?: number }) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-primary/5 to-primary/10 opacity-50">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay stroke-primary/20 fill-primary/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
