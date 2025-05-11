"use client";

import { useState, useEffect, useRef, Fragment } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';

interface CommandItem {
  id: string;
  name: string;
  shortcut?: string;
  action: () => void;
  section?: string;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMac, setIsMac] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Detect OS on mount
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMac(userAgent.indexOf('Mac') !== -1);
  }, []);

  // Generate command items
  const items: CommandItem[] = [
    {
      id: 'home',
      name: 'Home',
      action: () => router.push('/'),
      section: 'Navigation',
    },
    {
      id: 'about',
      name: 'About',
      action: () => router.push('/about'),
      section: 'Navigation',
    },
    {
      id: 'projects',
      name: 'Projects',
      action: () => router.push('/projects'),
      section: 'Navigation',
    },
    {
      id: 'skills',
      name: 'Skills',
      action: () => router.push('/skills'),
      section: 'Navigation',
    },
    {
      id: 'contact',
      name: 'Contact',
      action: () => router.push('/contact'),
      section: 'Navigation',
    },
    {
      id: 'portfolio',
      name: 'Portfolio',
      action: () => router.push('/portfolio'),
      section: 'Navigation',
    },
    {
      id: 'testimonials',
      name: 'Testimonials',
      action: () => router.push('/testimonials'),
      section: 'Navigation',
    },
    {
      id: 'theme',
      name: 'Toggle Theme',
      shortcut: '⇧+T',
      action: () => {
        // Placeholder for theme toggle
        console.log('Theme toggled');
        setIsOpen(false);
      },
      section: 'Actions',
    },
    {
      id: 'source',
      name: 'View Source',
      shortcut: '⇧+S',
      action: () => {
        window.open('https://github.com', '_blank');
        setIsOpen(false);
      },
      section: 'Actions',
    },
  ];

  // Filter items based on query
  const filteredItems = query === ''
    ? items
    : items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.section?.toLowerCase().includes(query.toLowerCase())
      );

  // Group items by section
  const sections = filteredItems.reduce((acc, item) => {
    const section = item.section || 'Other';
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(item);
    return acc;
  }, {} as Record<string, CommandItem[]>);

  // Reset selected index when filtered items change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle command palette with proper OS shortcut
      if ((isMac && e.metaKey && e.key.toLowerCase() === 'k') ||
          (!isMac && e.altKey && e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      // Close on escape
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMac]);

  // Handle keyboard navigation within the palette
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const allItems = Object.values(sections).flat();
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < allItems.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : allItems.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (allItems[selectedIndex]) {
        allItems[selectedIndex].action();
        setIsOpen(false);
      }
    }
  };

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  return (
    <>
      {/* Floating indicator with improved visibility on any background */}
      <div 
        className="fixed bottom-4 right-4 bg-secondary/90 backdrop-blur-sm p-2 rounded-lg shadow-lg border border-white/20 text-white text-xs hidden sm:flex items-center gap-2 hover:bg-secondary transition-colors cursor-pointer z-50"
        onClick={() => setIsOpen(true)}
      >
        <kbd className="bg-black/20 rounded px-1.5 py-0.5 font-sans text-white/90">
          {isMac ? '⌘' : 'Alt'}
        </kbd>
        <kbd className="bg-black/20 rounded px-1.5 py-0.5 font-sans text-white/90">
          K
        </kbd>
        <span className="ml-1">Command Palette</span>
      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[100] overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/70 backdrop-blur-md" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-2xl text-left align-middle transition-all transform bg-secondary border border-white/10 shadow-2xl rounded-xl mt-[15vh]">
                <div className="relative">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search commands..."
                    className="w-full py-4 px-6 bg-transparent text-white outline-none border-b border-white/10 focus:border-accent/70 transition-colors text-lg"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <kbd className="px-2 py-1 text-xs rounded bg-black/20 text-white/70">↑↓</kbd>
                    <span className="text-white/50 text-xs">to navigate</span>
                    <kbd className="px-2 py-1 text-xs rounded bg-black/20 text-white/70">↵</kbd>
                    <span className="text-white/50 text-xs">to select</span>
                    <kbd className="px-2 py-1 text-xs rounded bg-black/20 text-white/70">esc</kbd>
                    <span className="text-white/50 text-xs">to close</span>
                  </div>
                </div>
                
                <div className="max-h-[60vh] overflow-auto p-2">
                  {Object.entries(sections).map(([sectionName, sectionItems], sectionIdx) => (
                    <div key={sectionName} className={sectionIdx > 0 ? 'mt-4' : ''}>
                      <div className="px-4 py-2 text-xs font-medium text-white/50 uppercase tracking-wider">
                        {sectionName}
                      </div>
                      <div className="mt-1">
                        {sectionItems.map((item, itemIdx) => {
                          // Calculate the overall index of this item
                          const allItems = Object.values(sections).flat();
                          const globalIdx = allItems.findIndex(i => i.id === item.id);
                          const isSelected = globalIdx === selectedIndex;
                          
                          return (
                            <div
                              key={item.id}
                              className={`px-4 py-2 cursor-pointer rounded-lg flex items-center justify-between ${
                                isSelected ? 'bg-accent/30 text-white' : 'text-white/80 hover:bg-white/5'
                              }`}
                              onClick={() => {
                                item.action();
                                setIsOpen(false);
                              }}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                  isSelected ? 'bg-accent text-secondary' : 'bg-white/10 text-white/70'
                                }`}>
                                  {sectionName === 'Navigation' ? (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  ) : (
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  )}
                                </div>
                                <span className={`${isSelected ? 'text-white font-medium' : 'text-white/80'}`}>
                                  {item.name}
                                </span>
                              </div>
                              {item.shortcut && (
                                <kbd className="text-xs text-white/50 bg-black/20 px-2 py-1 rounded">
                                  {item.shortcut}
                                </kbd>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                  
                  {filteredItems.length === 0 && (
                    <div className="py-8 text-center text-white/50">
                      No results found for "{query}"
                    </div>
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
} 
