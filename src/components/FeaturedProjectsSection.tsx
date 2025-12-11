'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { PaperCard } from '@/components/ui/PaperCard';
import { Sticker } from '@/components/ui/Sticker';
import { TextureOverlay } from '@/components/ui/TextureOverlay';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tag: string;
  tagColor: string;
  gradient: string;
  url?: string;
  technologies: string[];
  type: 'web' | 'mobile' | 'automation';
  status: 'live' | 'coming-soon';
  previewImage?: string;
}

export default function FeaturedProjectsSection(): JSX.Element {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const webProjects: Project[] = [
    {
      id: 'yacht-zero',
      title: 'Yacht Zero',
      description: 'Luxury yacht brokerage platform',
      longDescription:
        'A premium yacht brokerage website built for discerning clients from Wall Street to Silicon Valley. Features advanced search filters, yacht comparison tools, and seamless integration with their global network.',
      tag: 'Web Development',
      tagColor: 'bg-blue-500/20 text-blue-600',
      gradient: 'from-slate-900 via-blue-900 to-cyan-800',
      url: 'https://www.yachtzero.com/',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      type: 'web',
      status: 'live',
      previewImage: 'https://www.yachtzero.com/og-image.jpg',
    },
    {
      id: 'debut-hub',
      title: 'The Debut Hub',
      description: 'Music community & chart platform',
      longDescription:
        'A global music community platform for artists and fans. Features trending charts, breaking news, artist features, and tools to help musicians elevate their sound and reach their audience.',
      tag: 'Web Development',
      tagColor: 'bg-purple-500/20 text-purple-600',
      gradient: 'from-purple-900 via-pink-800 to-orange-700',
      url: 'https://thedebuthub.com/',
      technologies: ['Next.js', 'React', 'API Integration', 'Responsive Design'],
      type: 'web',
      status: 'live',
      previewImage: 'https://thedebuthub.com/og-image.png',
    },
    {
      id: 'docsyde',
      title: 'Docsyde',
      description: 'Document automation platform',
      longDescription:
        'An AI-powered document management platform that transforms workflows. Features smart templates, real-time collaboration, enterprise security, and intelligent document analysis.',
      tag: 'Web Application',
      tagColor: 'bg-emerald-500/20 text-emerald-600',
      gradient: 'from-emerald-900 via-teal-800 to-cyan-700',
      url: 'https://staging.usedocsyde.com/',
      technologies: ['React', 'Node.js', 'AI/ML', 'Document Processing'],
      type: 'web',
      status: 'live',
      previewImage: 'https://staging.usedocsyde.com/og-image.png',
    },
  ];

  const mobileProjects: Project[] = [
    {
      id: 'subtrackr',
      title: 'Subtrackr',
      description: 'Subscription management app',
      longDescription:
        'A mobile app that helps you track and manage all your subscriptions in one place. Get reminders before renewals, analyze your spending patterns, and never pay for forgotten subscriptions again.',
      tag: 'Mobile App',
      tagColor: 'bg-violet-500/20 text-violet-600',
      gradient: 'from-violet-600 via-purple-600 to-indigo-700',
      technologies: ['Flutter', 'Firebase', 'Mobile Development'],
      type: 'mobile',
      status: 'coming-soon',
    },
  ];

  // Render a project card
  const renderProjectCard = (project: Project, index: number) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      className="group relative"
    >
      <PaperCard
        withTape
        rotation={index % 2 === 0 ? -1.5 : 1.2}
        tone={project.type === 'mobile' ? 'teal' : 'cream'}
        className={`min-h-[450px] md:min-h-[500px] transition-all duration-500 ${
          hoveredProject === project.id ? 'scale-[1.01]' : ''
        }`}
      >
        <div className="flex flex-col h-full gap-4">
          <div className="flex items-center justify-between">
            <Sticker
              variant="badge"
              tone={project.type === 'mobile' ? 'teal' : 'yellow'}
              className="shadow-none"
            >
              {project.tag}
            </Sticker>
            {project.status === 'coming-soon' && (
              <Sticker tone="cream" variant="label" className="gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full animate-ping" />
                Coming soon
              </Sticker>
            )}
            {project.status === 'live' && project.url && (
              <Sticker tone="coral" variant="label">
                Live
              </Sticker>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">{project.title}</h3>
            <p className="text-muted text-base md:text-lg">{project.description}</p>
          </div>

          {/* Preview image */}
          {project.previewImage && project.url && (
            <div className="relative w-full min-h-[200px] rounded-2xl overflow-hidden border border-primary/10 bg-white shadow-card">
              <Image
                src={project.previewImage}
                alt={`${project.title} preview`}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="absolute -top-3 left-4 w-16 h-6 bg-[url(/textures/washi-teal.svg)] bg-cover rotate-[-8deg] opacity-90" />
            </div>
          )}

          {/* Mobile placeholder */}
          {project.type === 'mobile' && !project.previewImage && (
            <div className="relative z-10 flex-1 mb-2 flex items-center justify-center">
              <div className="relative w-32 h-56 bg-white rounded-3xl border-4 border-primary/10 shadow-card flex items-center justify-center">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-primary/15 rounded-full" />
                <div className="text-center px-4">
                  <svg className="w-12 h-12 mx-auto mb-2 text-primary/60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 18H12.01M7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-xs text-muted font-medium">App preview in progress</span>
                </div>
              </div>
            </div>
          )}

          <AnimatePresence>
            {hoveredProject === project.id && !project.previewImage && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-muted text-sm leading-relaxed"
              >
                {project.longDescription}
              </motion.p>
            )}
          </AnimatePresence>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <Sticker key={i} variant="label" tone="cream" className="normal-case tracking-normal">
                {tech}
              </Sticker>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-xl font-semibold shadow-soft hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>View live</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-5 py-3 bg-secondary/80 text-primary rounded-xl font-semibold">
                <span>Launching soon</span>
              </div>
            )}

            <span className="text-sm text-muted">{project.type === 'mobile' ? 'Mobile' : 'Web'}</span>
          </div>
        </div>
      </PaperCard>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <TextureOverlay opacity={0.5} className="absolute inset-0">
        <div className="absolute top-10 left-6 w-36 h-10 bg-[url(/textures/washi-yellow.svg)] bg-cover rotate-[-12deg] opacity-90" />
        <div className="absolute bottom-16 right-8 w-40 h-10 bg-[url(/textures/washi-teal.svg)] bg-cover rotate-[10deg] opacity-90" />
      </TextureOverlay>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Sticker tone="yellow" variant="badge">
            Featured Work
          </Sticker>
          <h2 className="section-title mb-4 text-primary mt-4">Projects I've Shipped</h2>
          <p className="section-subtitle max-w-2xl mx-auto text-muted">
            Real projects, real clients, real impact—packaged like a memory board of the things I loved building.
          </p>
        </motion.div>

        {/* Web Projects Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <Sticker tone="teal" variant="label">
              Web Projects
            </Sticker>
            <h3 className="text-2xl font-bold text-primary">Polished & live</h3>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {webProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>

        {/* Mobile Projects Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <Sticker tone="coral" variant="label">
              Mobile Projects
            </Sticker>
            <h3 className="text-2xl font-bold text-primary">Handheld builds</h3>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mobileProjects.map((project, index) => renderProjectCard(project, index))}
          </div>
        </div>

        {/* Want to work together CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted mb-4">Have a project in mind?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            <span>Let's build something amazing together</span>
            <svg
              className="w-5 h-5"
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
          </a>
        </motion.div>
      </div>
    </section>
  );
}
