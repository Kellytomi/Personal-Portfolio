'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Button as MovingBorderButton } from '@/components/ui/moving-border';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>('#home');
  const pathname = usePathname();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track whether we're at the top of the page (navbar should be transparent)
  // Using scroll position is more reliable than IntersectionObserver when the hero has top margin
  const isAtTop = scrollY < 50;

  // Smooth scroll to section
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    
    // Close mobile menu first
    setIsOpen(false);
    
    // Small delay to allow menu to close and sections to be available
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  // Navbar styling based on scroll
  const navbarBgClass = isAtTop
    ? 'bg-transparent border-b-0 shadow-none [backdrop-filter:none]'
    : 'backdrop-blur-md bg-white/90 border-b border-gray-200/50 shadow-sm';

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${navbarBgClass}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center h-full"
          >
            <Image
              src="/images/etoma.png"
              alt="Etoma-Etoto Kelvin Odi"
              width={150}
              height={40}
              className="object-contain mt-1 w-[120px] sm:w-[140px] md:w-[150px] h-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group
                  ${
                    activeSection === item.href
                      ? 'text-primary'
                      : 'text-gray-600 hover:text-primary'
                  }`}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <MovingBorderButton
              as="a"
              href="#contact"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => scrollToSection(e, '#contact')}
              borderRadius="2rem"
              className="text-primary hover:text-primary font-medium px-6 py-3 bg-white hover:bg-white border-2 border-primary/10 cursor-pointer"
              containerClassName="h-12 w-32"
              duration={4000}
            >
              <div className="flex items-center gap-2">
                <span>Say Hello</span>
                <svg
                  width="16"
                  height="16"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </MovingBorderButton>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="lg:hidden p-2 hover:bg-primary/5 rounded-lg transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-primary" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden backdrop-blur-md bg-white/95 border-t border-gray-200/50"
          >
            <div className="container mx-auto py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200
                    ${
                      activeSection === item.href
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:bg-primary/5 hover:text-primary'
                    }`}
                >
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 px-4">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="block w-full text-center px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
