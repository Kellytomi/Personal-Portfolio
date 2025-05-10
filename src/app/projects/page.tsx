"use client";

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';

interface Project {
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  link?: string;
  previewUrl?: string;
}

interface PreviewModalProps {
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

const PreviewModal = ({ url, isOpen, onClose }: PreviewModalProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-6xl h-[80vh] bg-white rounded-xl overflow-hidden"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <iframe
          src={url}
          className="w-full h-full border-0"
          title="Website Preview"
        />
      </motion.div>
    </motion.div>
  );
};

export default function Projects(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  
  const projects: Project[] = [
    {
      title: 'Healthcare Patient Portal',
      description: 'Custom patient intake and documentation system that reduced paperwork by 70% and improved patient satisfaction.',
      image: '/projects/healthcare.jpg',
      category: ['Automation', 'Integration'],
      technologies: ['Zapier', 'Make.com', 'DocuSign', 'REST API'],
      previewUrl: 'https://example.com/patient-portal'
    },
    {
      title: 'E-commerce Integration Solution',
      description: 'Seamless integration between online store, fulfillment, and accounting systems for streamlined operations.',
      image: '/projects/ecommerce.jpg',
      category: ['Integration', 'Development'],
      technologies: ['Shopify', 'Make.com', 'Node.js', 'API'],
      link: 'https://example.com/ecommerce'
    },
    {
      title: 'Legal Document Automation',
      description: 'Automated contract generation and approval workflow for law firm, reducing turnaround time by 60%.',
      image: '/projects/legal.jpg',
      category: ['Automation', 'Document'],
      technologies: ['PandaDoc', 'Airtable', 'Zapier', 'JavaScript'],
      previewUrl: 'https://example.com/legal-automation'
    },
    {
      title: 'Real Estate Management System',
      description: 'Custom platform for property management company to handle listings, tenant applications, and maintenance requests.',
      image: '/projects/realestate.jpg',
      category: ['Development', 'Automation'],
      technologies: ['Next.js', 'React', 'Node.js', 'MongoDB'],
      previewUrl: 'https://example.com/real-estate'
    },
    {
      title: 'Manufacturing Process Automation',
      description: 'Streamlined production tracking and inventory management system, increasing efficiency by 35%.',
      image: '/projects/manufacturing.jpg',
      category: ['Automation', 'Integration'],
      technologies: ['Make.com', 'Airtable', 'REST API', 'Custom Scripts'],
      link: 'https://example.com/manufacturing'
    },
    {
      title: 'Non-profit Donation Portal',
      description: 'Integrated donation platform with automatic receipting and donor management, increasing donations by 28%.',
      image: '/projects/nonprofit.jpg',
      category: ['Development', 'Integration'],
      technologies: ['React', 'Node.js', 'Stripe API', 'Zapier'],
      previewUrl: 'https://example.com/nonprofit'
    },
  ];
  
  const filters = ['all', 'Automation', 'Integration', 'Development', 'Document'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));
  
  const openPreview = (url: string) => {
    setPreviewUrl(url);
    setIsPreviewOpen(true);
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-surface">
        <Navigation />
        
        {/* Hero section */}
        <section className="pt-32 pb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface to-white/50" />
          
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary mb-6">
                <span className="text-sm font-medium">Showcasing My Work</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
                Project Highlights
              </h1>
              <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                Explore a selection of my recent projects that demonstrate my expertise in automation, integration, and digital solution development.
              </p>
            </motion.div>
            
            {/* Project Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-16"
            >
              {filters.map((filter, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all
                    ${activeFilter === filter 
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-muted hover:bg-primary/5 hover:text-primary shadow-soft'
                    }`}
                >
                  {filter === 'all' ? 'All Projects' : filter}
                </button>
              ))}
            </motion.div>
            
            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    layout
                    className="card overflow-hidden group"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex gap-2">
                          {project.previewUrl && (
                            <button
                              onClick={() => openPreview(project.previewUrl!)}
                              className="flex items-center justify-center bg-white/20 backdrop-blur-md text-white rounded-lg px-3 py-2 text-sm hover:bg-white/30 transition-colors"
                            >
                              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              Preview
                            </button>
                          )}
                          {project.link && (
                            <Link
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center bg-white/20 backdrop-blur-md text-white rounded-lg px-3 py-2 text-sm hover:bg-white/30 transition-colors"
                            >
                              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              Visit Site
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted mb-4">{project.description}</p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.category.map((cat, i) => (
                          <span key={i} className="px-3 py-1 bg-primary/5 rounded-full text-xs font-medium">
                            {cat}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-muted">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {filteredProjects.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-lg text-muted">No projects found in this category. Please try another filter.</p>
              </motion.div>
            )}
            
            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-20 text-center"
            >
              <div className="bg-black text-white p-8 md:p-12 rounded-xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a project in mind?</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  I'm always open to discussing new projects and how I can help bring your ideas to life.
                </p>
                <Link 
                  href="/contact" 
                  className="btn bg-white text-black hover:bg-gray-100 py-3 px-8 text-lg inline-block"
                >
                  Let's Talk
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Preview Modal */}
        <AnimatePresence>
          {isPreviewOpen && (
            <PreviewModal 
              url={previewUrl} 
              isOpen={isPreviewOpen} 
              onClose={() => setIsPreviewOpen(false)} 
            />
          )}
        </AnimatePresence>
        <Footer />
      </main>
    </PageTransition>
  );
} 