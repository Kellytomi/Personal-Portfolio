import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';

interface SocialCardProps {
  className?: string;
}

export default function ComingSoonSocialCard({ className = '' }: SocialCardProps) {
  const socialLinks = [
    { icon: <FaTwitter size={20} />, href: siteConfig.socialLinks.twitter, label: 'Twitter' },
    { icon: <FaLinkedinIn size={20} />, href: siteConfig.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: <FaGithub size={20} />, href: siteConfig.socialLinks.github, label: 'GitHub' },
  ];

  return (
    <div className={`flex justify-center gap-4 ${className}`}>
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
}
