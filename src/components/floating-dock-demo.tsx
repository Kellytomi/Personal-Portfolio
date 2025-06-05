import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconUser,
  IconCode,
  IconFolder,
  IconMail,
  IconTools,
} from '@tabler/icons-react';

export default function FloatingDockDemo() {
  const links = [
    {
      title: 'Home',
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '/',
    },
    {
      title: 'About',
      icon: <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '/about',
    },
    {
      title: 'Skills',
      icon: <IconTools className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '/skills',
    },
    {
      title: 'Projects',
      icon: <IconFolder className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '/projects',
    },
    {
      title: 'Contact',
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '/contact',
    },
    {
      title: 'GitHub',
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: 'https://github.com/kelvin',
    },
    {
      title: 'LinkedIn',
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: 'https://linkedin.com/in/kelvin',
    },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
