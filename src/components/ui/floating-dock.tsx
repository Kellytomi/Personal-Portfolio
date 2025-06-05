import { cn } from '@/lib/utils';
import { IconLayoutNavbarCollapse } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      {/* Mobile version removed - using traditional mobile navigation instead */}
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn('relative block md:hidden', className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-3 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  href={item.href}
                  key={item.title}
                  className="flex items-center gap-3 px-4 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 hover:bg-primary/10 transition-colors"
                >
                  <motion.div
                    className="flex items-center gap-3"
                    whileTap={{
                      scale: 0.95,
                      transition: { type: 'spring', stiffness: 400, damping: 10 },
                    }}
                  >
                    <div className="w-4 h-4 text-primary/70">{item.icon}</div>
                    <span className="text-sm font-medium text-gray-700">{item.title}</span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-gray-200/50 hover:bg-primary/10 transition-colors"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-primary/70" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const pathname = usePathname();

  return (
    <motion.div
      className={cn(
        'mx-auto hidden h-auto items-center gap-1 rounded-full bg-white/90 backdrop-blur-md px-4 lg:px-6 py-2 lg:py-3 lg:flex shadow-lg border border-gray-200/50',
        className
      )}
    >
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.title}
            href={item.href}
            className={`group relative flex items-center gap-1 lg:gap-2 px-2 lg:px-4 py-1 lg:py-2 rounded-full transition-all duration-300 ${
              isActive ? 'bg-primary text-white' : 'hover:bg-primary/10'
            }`}
          >
            <motion.div
              className="flex items-center gap-1 lg:gap-2"
              whileHover={{
                scale: 1.1,
                transition: { type: 'spring', stiffness: 400, damping: 10 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`w-3 lg:w-4 h-3 lg:h-4 transition-colors ${
                  isActive ? 'text-white' : 'text-primary/70 group-hover:text-primary'
                }`}
              >
                {item.icon}
              </div>
              <span
                className={`text-xs lg:text-sm font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-gray-700 group-hover:text-primary'
                }`}
              >
                {item.title}
              </span>
            </motion.div>

            {/* Hover background effect - only show when not active */}
            {!isActive && (
              <div className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            )}
          </Link>
        );
      })}
    </motion.div>
  );
};
