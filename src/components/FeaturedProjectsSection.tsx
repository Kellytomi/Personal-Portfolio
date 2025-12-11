'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

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
      <div
        className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient} 
          min-h-[450px] md:min-h-[500px] p-6 md:p-8 flex flex-col
          transition-all duration-500 transform 
          ${hoveredProject === project.id ? 'scale-[1.02] shadow-2xl' : 'shadow-xl'}
          ${project.status === 'coming-soon' ? 'opacity-90' : ''}`}
      >
        {/* Overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }}
          />
        </div>

        {/* Top Section - Header */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <span
              className={`px-3 py-1.5 rounded-full text-xs font-semibold ${project.tagColor} backdrop-blur-sm`}
            >
              {project.tag}
            </span>
            {project.status === 'coming-soon' && (
              <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white flex items-center gap-1.5">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                Coming Soon
              </span>
            )}
            {project.status === 'live' && project.url && (
              <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Live
              </span>
            )}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-white/80 text-lg mb-4">{project.description}</p>
        </div>

        {/* Site Preview Image */}
        {project.previewImage && project.url && (
          <div className="relative z-10 flex-1 mb-4">
            <div className="relative w-full h-full min-h-[160px] rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Image
                src={project.previewImage}
                alt={`${project.title} preview`}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={(e) => {
                  // Hide image on error
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        )}

        {/* Mobile app placeholder */}
        {project.type === 'mobile' && !project.previewImage && (
          <div className="relative z-10 flex-1 mb-4 flex items-center justify-center">
            <div className="relative w-32 h-56 bg-white/10 backdrop-blur-sm rounded-3xl border-4 border-white/30 shadow-lg flex items-center justify-center">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-white/30 rounded-full" />
              <div className="text-center px-4">
                <svg className="w-12 h-12 mx-auto mb-2 text-white/60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 18H12.01M7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xs text-white/60 font-medium">App Preview Coming Soon</span>
              </div>
            </div>
          </div>
        )}

        {/* Extended description on hover */}
        <AnimatePresence>
          {hoveredProject === project.id && !project.previewImage && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-white/70 text-sm leading-relaxed relative z-10 mb-4"
            >
              {project.longDescription}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Bottom Section */}
        <div className="relative z-10 mt-auto">
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/90 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Button */}
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold 
                hover:bg-white/90 transition-all duration-300 group/btn"
            >
              <span>View Live Site</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold cursor-default">
              <span>Launching Soon</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Featured Work
          </div>
          <h2 className="section-title mb-4">Projects I've Shipped</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Real projects, real clients, real impact. Here's a selection of work I'm proud of.
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
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Web Projects</h3>
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
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-violet-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 18H12.01M7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Mobile Projects</h3>
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
