"use client";

import { useState, useEffect } from 'react';
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
  { name: 'Testimonials', href: '/testimonials' },
];

export default function Navigation(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const pathname = usePathname();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Set initial scroll position
    setScrollY(window.scrollY);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set up intersection observer to detect dark sections
  useEffect(() => {
    // Define sections that should trigger a color change in the navbar
    const darkSections = document.querySelectorAll('.dark-section, .bg-primary, .bg-secondary, .bg-gradient-to-r');
    
    if (darkSections.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      // Check if any dark section is intersecting with the viewport
      const isIntersecting = entries.some(entry => entry.isIntersecting);
      setIsOverDarkSection(isIntersecting);
    }, { 
      threshold: 0.15, // When at least 15% of the section is visible
      rootMargin: '-80px 0px 0px 0px' // Adjust based on navbar height
    });
    
    // Observe all dark sections
    darkSections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      darkSections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [pathname]); // Re-run when path changes to observe sections on new pages

  // Determine navbar classes based on current state and scroll position
  // At the top of any page (scrollY near 0), always use transparent styling
  // Otherwise, check if over dark section
  const navbarBgClass = scrollY < 10
    ? 'backdrop-blur-sm bg-white/10'
    : isOverDarkSection 
      ? 'backdrop-blur-sm bg-white/80 border-b border-gray-200/20 shadow-sm'
      : 'backdrop-blur-sm bg-white/10';
  
  const textColorClass = scrollY < 10
    ? 'text-muted' 
    : isOverDarkSection
      ? 'text-primary'
      : 'text-muted';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarBgClass}`}>
      <div className="relative border-none">
        <div className="container mx-auto relative z-10">
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
                    pathname === item.href ? 'text-primary font-medium' : textColorClass
                  }`}
                >
                  <span className="relative">
                    {item.name}
                    {pathname === item.href && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 top-full block h-0.5 w-full bg-primary"
                      />
                    )}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link href="/contact" className="cta-button">
                <span>Say Hello</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden p-2 hover:bg-primary/5 rounded-lg transition-colors duration-200"
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
            className={`md:hidden relative border-none backdrop-blur-sm ${scrollY < 10 ? 'bg-white/20' : (isOverDarkSection ? 'bg-white/90' : 'bg-white/20')}`}
          >
            <div className="container mx-auto py-4 space-y-4 relative z-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
                    pathname === item.href
                      ? 'bg-primary text-white'
                      : `${textColorClass} hover:bg-primary/5`
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block px-4 py-3 mt-4 bg-primary text-white rounded-lg text-center font-medium"
                onClick={() => setIsOpen(false)}
              >
                Say Hello
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 