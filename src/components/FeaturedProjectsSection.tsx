'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Sticker, WashiTape, PaperBackground, CutoutLetters } from '@/components/scrapbook';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tag: string;
  tagColor: string;
  url?: string;
  technologies: string[];
  type: 'web' | 'mobile' | 'automation';
  status: 'live' | 'coming-soon';
  previewImage?: string;
  stickerIcon: 'star' | 'heart' | 'sparkle' | 'lightning' | 'flower';
  stickerColor: 'coral' | 'mustard' | 'sage' | 'lavender' | 'sky' | 'peach' | 'mint';
}

export default function FeaturedProjectsSection(): JSX.Element {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const webProjects: Project[] = [
    {
      id: 'yacht-zero',
      title: 'Yacht Zero',
      description: 'Luxury yacht brokerage platform',
      longDescription: 'A premium yacht brokerage website built for discerning clients from Wall Street to Silicon Valley.',
      tag: 'Web Dev',
      tagColor: 'bg-scrapbook-sky text-gray-800',
      url: 'https://www.yachtzero.com/',
      technologies: ['Next.js', 'React', 'Tailwind'],
      type: 'web',
      status: 'live',
      previewImage: '/projects/yacht-zero.png',
      stickerIcon: 'star',
      stickerColor: 'mustard',
    },
    {
      id: 'debut-hub',
      title: 'The Debut Hub',
      description: 'Music community & chart platform',
      longDescription: 'A global music community platform for artists and fans. Features trending charts and artist tools.',
      tag: 'Web Dev',
      tagColor: 'bg-scrapbook-lavender text-white',
      url: 'https://thedebuthub.com/',
      technologies: ['Next.js', 'React', 'API'],
      type: 'web',
      status: 'live',
      previewImage: '/projects/debut-hub.png',
      stickerIcon: 'heart',
      stickerColor: 'coral',
    },
    {
      id: 'docsyde',
      title: 'Docsyde',
      description: 'Document automation platform',
      longDescription: 'An AI-powered document management platform that transforms workflows with smart templates.',
      tag: 'Web App',
      tagColor: 'bg-scrapbook-sage text-white',
      url: 'https://staging.usedocsyde.com/',
      technologies: ['React', 'Node.js', 'AI/ML'],
      type: 'web',
      status: 'live',
      previewImage: '/projects/docsyde.png',
      stickerIcon: 'sparkle',
      stickerColor: 'sage',
    },
  ];

  const mobileProjects: Project[] = [
    {
      id: 'subtrackr',
      title: 'Subtrackr',
      description: 'Subscription management app',
      longDescription: 'A mobile app that helps you track and manage all your subscriptions in one place.',
      tag: 'Mobile App',
      tagColor: 'bg-scrapbook-lavender text-white',
      technologies: ['Flutter', 'Firebase'],
      type: 'mobile',
      status: 'coming-soon',
      stickerIcon: 'lightning',
      stickerColor: 'lavender',
    },
  ];

  const renderProjectCard = (project: Project, index: number) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -2 : 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -2 : 2 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      className="relative group"
    >
      <div className="absolute -top-4 -right-4 z-20">
        <Sticker variant={project.stickerIcon} size="md" color={project.stickerColor} rotation={15} />
      </div>

      <div
        className={`relative bg-white p-4 rounded-lg shadow-polaroid transition-all duration-300 transform ${
          hoveredProject === project.id ? 'shadow-polaroid-hover scale-[1.02] rotate-0' : ''
        }`}
      >
        <div className="absolute -top-3 left-1/4">
          <WashiTape color={index % 2 === 0 ? 'yellow' : 'pink'} width="md" rotation={index % 2 === 0 ? -5 : 5} />
        </div>

        <div className="relative aspect-video bg-scrapbook-cream rounded overflow-hidden mb-4 mt-2">
          {project.previewImage ? (
            <Image
              src={project.previewImage}
              alt={`${project.title} preview`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-4xl">{project.type === 'mobile' ? '📱' : '🖥️'}</span>
            </div>
          )}

          <div className="absolute top-2 right-2">
            {project.status === 'coming-soon' ? (
              <span className="px-2 py-1 bg-scrapbook-mustard text-white text-xs font-handwriting rounded-full">Coming Soon ⏰</span>
            ) : (
              <span className="px-2 py-1 bg-scrapbook-sage text-white text-xs font-handwriting rounded-full">Live ✓</span>
            )}
          </div>
        </div>

        <span className={`inline-block px-3 py-1 rounded-full text-xs font-handwriting ${project.tagColor} mb-2`}>{project.tag}</span>

        <h3 className="font-handwriting text-2xl font-bold text-gray-800 mb-1">{project.title}</h3>
        <p className="font-sketch text-gray-600 text-sm mb-3">{project.description}</p>

        <AnimatePresence>
          {hoveredProject === project.id && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="font-sketch text-gray-500 text-xs mb-3"
            >
              {project.longDescription}
            </motion.p>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-scrapbook-cream border border-dashed border-scrapbook-kraft rounded text-xs font-sketch text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-scrapbook-coral text-white rounded-lg font-handwriting text-lg hover:bg-scrapbook-coral/90 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View Site →
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-scrapbook-kraft/30 text-gray-600 rounded-lg font-handwriting text-lg cursor-default">
            Coming Soon ⏳
          </span>
        )}
      </div>
    </motion.div>
  );

  return (
    <PaperBackground variant="grid" className="py-24 md:py-32 relative overflow-hidden" id="projects">
      <div className="absolute top-20 left-10 z-20 hidden md:block">
        <Sticker variant="star" size="xl" color="mustard" rotation={-12} />
      </div>
      <div className="absolute bottom-32 right-16 z-20 hidden lg:block">
        <Sticker variant="flower" size="lg" color="sage" rotation={20} />
      </div>
      <div className="absolute top-1/2 right-8 z-20 hidden lg:block">
        <Sticker variant="heart" size="md" color="coral" />
      </div>
      <div className="absolute top-12 right-1/4 z-10 hidden lg:block">
        <WashiTape color="mint" pattern="stripe" width="lg" rotation={15} />
      </div>
      <div className="absolute bottom-20 left-1/3 z-10 hidden lg:block">
        <WashiTape color="lavender" pattern="dots" width="md" rotation={-10} />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-scrapbook-cream border-2 border-dashed border-scrapbook-kraft rounded-lg font-handwriting text-lg mb-4 shadow-sm transform -rotate-1">
            ✨ Projects I've Shipped
          </div>
          <h2 className="mb-4 flex flex-col items-center">
            <span className="hidden sm:inline-block">
              <CutoutLetters text="Projects I've Shipped" size="lg" colorScheme="vibrant" />
            </span>
            <span className="sm:hidden flex flex-col items-center gap-1 leading-tight">
              <CutoutLetters text="Projects" size="lg" colorScheme="vibrant" />
              <CutoutLetters text="I've" size="md" colorScheme="vibrant" />
              <CutoutLetters text="Shipped" size="lg" colorScheme="vibrant" />
            </span>
          </h2>
          <p className="font-sketch text-lg text-gray-600 max-w-2xl mx-auto">
            Real projects, real clients, real impact. Here's a scrapbook of work I'm proud of! 📸
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="text-2xl">🌐</span>
            <h3 className="font-handwriting text-3xl font-bold text-gray-800">Web Projects</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="text-2xl">📱</span>
            <h3 className="font-handwriting text-3xl font-bold text-gray-800">Mobile Projects</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="font-handwriting text-xl text-gray-600 mb-4">Have a project in mind? 🤔</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-handwriting text-xl text-scrapbook-coral hover:text-scrapbook-coral/80 transition-colors"
          >
            Let's build something amazing together →
          </a>
        </motion.div>
      </div>
    </PaperBackground>
  );
}
