"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-50">
      <div className="glass-effect">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center h-full">
              <Image 
                src="/images/etoma.png" 
                alt="Etoma-Etoto Kelvin Odi" 
                width={150} 
                height={40} 
                className="object-contain mt-1"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative group ${
                    pathname === item.href ? 'text-primary font-medium' : 'text-muted'
                  }`}
                >
                  <span className="relative">
                    {item.name}
                    {pathname === item.href && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 top-full block h-0.5 w-full bg-black"
                      />
                    )}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden p-2 hover:bg-black/5 rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <Bars3Icon className="h-6 w-6 text-primary" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-effect"
          >
            <div className="container mx-auto py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
                    pathname === item.href
                      ? 'bg-black text-white'
                      : 'text-muted hover:bg-black/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 