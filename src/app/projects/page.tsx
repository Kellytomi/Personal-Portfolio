'use client';

import Navigation from '@/components/Navigation';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';
import { PinContainer, PinProvider } from '@/components/ui/3d-pin';

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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <iframe src={url} className="w-full h-full border-0" title="Website Preview" />
      </motion.div>
    </motion.div>
  );
};

export default function Projects(): JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const projects: Project[] = [
    {
      title: 'Healthcare Patient Portal',
      description:
        'Custom patient intake and documentation system that reduced paperwork by 70% and improved patient satisfaction.',
      image: '/projects/healthcare.jpg',
      category: ['Automation', 'Integration'],
      technologies: ['Zapier', 'Make.com', 'DocuSign', 'REST API'],
      previewUrl: 'https://example.com/patient-portal',
    },
    {
      title: 'E-commerce Integration Solution',
      description:
        'Seamless integration between online store, fulfillment, and accounting systems for streamlined operations.',
      image: '/projects/ecommerce.jpg',
      category: ['Integration', 'Development'],
      technologies: ['Shopify', 'Make.com', 'Node.js', 'API'],
      link: 'https://example.com/ecommerce',
    },
    {
      title: 'Legal Document Automation',
      description:
        'Automated contract generation and approval workflow for law firm, reducing turnaround time by 60%.',
      image: '/projects/legal.jpg',
      category: ['Automation', 'Document'],
      technologies: ['PandaDoc', 'Airtable', 'Zapier', 'JavaScript'],
      previewUrl: 'https://example.com/legal-automation',
    },
    {
      title: 'Real Estate Management System',
      description:
        'Custom platform for property management company to handle listings, tenant applications, and maintenance requests.',
      image: '/projects/realestate.jpg',
      category: ['Development', 'Automation'],
      technologies: ['Next.js', 'React', 'Node.js', 'MongoDB'],
      previewUrl: 'https://example.com/real-estate',
    },
    {
      title: 'Manufacturing Process Automation',
      description:
        'Streamlined production tracking and inventory management system, increasing efficiency by 35%.',
      image: '/projects/manufacturing.jpg',
      category: ['Automation', 'Integration'],
      technologies: ['Make.com', 'Airtable', 'REST API', 'Custom Scripts'],
      link: 'https://example.com/manufacturing',
    },
    {
      title: 'Non-profit Donation Portal',
      description:
        'Integrated donation platform with automatic receipting and donor management, increasing donations by 28%.',
      image: '/projects/nonprofit.jpg',
      category: ['Development', 'Integration'],
      technologies: ['React', 'Node.js', 'Stripe API', 'Zapier'],
      previewUrl: 'https://example.com/nonprofit',
    },
  ];

  const filters = ['all', 'Automation', 'Integration', 'Development', 'Document'];

  // Initialize filter from URL parameter on component mount
  useEffect(() => {
    const filterParam = searchParams.get('filter');
    if (filterParam && filters.includes(filterParam)) {
      setActiveFilter(filterParam);
    }
  }, [searchParams]);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  // Update URL when filter changes
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);

    // Update URL with the selected filter
    const newUrl =
      filter === 'all' ? '/projects' : `/projects?filter=${encodeURIComponent(filter)}`;

    router.push(newUrl, { scroll: false });
  };

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 gradient-text">
                Project Highlights
              </h1>
              <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                Explore a selection of my recent projects that demonstrate my expertise in
                automation, integration, and digital solution development.
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
                  onClick={() => handleFilterChange(filter)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all
                    ${
                      activeFilter === filter
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-white text-muted hover:bg-primary/5 hover:text-primary shadow-soft'
                    }`}
                >
                  {filter === 'all' ? 'All Projects' : filter}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
              <PinProvider>
                <AnimatePresence>
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      layout
                    >
                      <PinContainer
                        title={project.link ? 'Visit Site' : 'View Details'}
                        href={project.link || '#'}
                        containerClassName="h-[26rem] w-[18rem] sm:h-[28rem] sm:w-[20rem] md:h-[30rem] md:w-[22rem]"
                        id={`project-${index}`}
                      >
                        <div className="flex basis-full flex-col p-3 sm:p-4 tracking-tight text-gray-600 w-[18rem] sm:w-[20rem] md:w-[22rem] h-[22rem] sm:h-[24rem] md:h-[26rem]">
                          <h3 className="max-w-xs !pb-1 sm:!pb-2 !m-0 font-bold text-sm sm:text-base text-gray-900">
                            {project.title}
                          </h3>
                          <div className="text-xs sm:text-sm !m-0 !p-0 font-normal mb-3 sm:mb-4">
                            <span className="text-gray-600">{project.description}</span>
                          </div>

                          {/* Categories */}
                          <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                            {project.category.map((cat, i) => (
                              <span
                                key={i}
                                className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                              >
                                {cat}
                              </span>
                            ))}
                          </div>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                            {project.technologies.slice(0, 3).map((tech, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                +{project.technologies.length - 3} more
                              </span>
                            )}
                          </div>

                          {/* Image/Visual */}
                          <div className="flex flex-1 w-full rounded-lg mt-2 sm:mt-4 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                            <div
                              className="absolute inset-0 bg-cover bg-center opacity-60"
                              style={{ backgroundImage: `url(${project.image})` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                            {/* Action buttons overlay */}
                            <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 flex gap-1 sm:gap-2">
                              {project.previewUrl && (
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    openPreview(project.previewUrl!);
                                  }}
                                  className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-md text-white rounded-lg hover:bg-white/30 transition-colors"
                                  title="Preview"
                                >
                                  <svg
                                    className="w-3 h-3 sm:w-4 sm:h-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </PinContainer>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </PinProvider>
            </div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-lg text-muted">
                  No projects found in this category. Please try another filter.
                </p>
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
              <div className="bg-primary text-white p-8 md:p-12 rounded-xl dark-section">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a project in mind?</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  I'm always open to discussing new projects and how I can help bring your ideas to
                  life.
                </p>
                <Link
                  href="/contact"
                  className="btn bg-white text-primary hover:bg-gray-100 py-3 px-8 text-lg inline-block"
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
        <Footer variant="white" />
      </main>
    </PageTransition>
  );
}
