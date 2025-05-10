"use client";

import Navigation from '@/components/Navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import CountUp from '@/components/CountUp';
import PageSpacer from '@/components/PageSpacer';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';

export default function Home(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <PageTransition>
      <main className="min-h-screen bg-surface overflow-hidden" ref={containerRef}>
        <Navigation />
        <PageSpacer />
        
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center pt-24 sm:pt-28 md:pt-20 lg:pt-0">
          <motion.div 
            className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"
            style={{ y }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface to-white/50" />
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium mb-4">
                    <span className="relative inline-flex mr-2">
                      <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                      <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-green-400 opacity-75"></span>
                    </span>
                    Available for Projects
                  </div>
                  <h4 className="text-primary font-medium mb-4">Hi, I'm Etoma (Kelvin)</h4>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
                    Digital Solutions <span className="gradient-text">Expert</span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl mb-10 text-muted max-w-xl mx-auto lg:mx-0">
                    I help businesses streamline operations and increase efficiency through automation, integration, and digital solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:mb-0 mb-16 max-w-xs mx-auto sm:mx-0">
                    <Link href="/contact" className="btn btn-primary text-center py-2.5 px-5">Get in Touch</Link>
                    <Link href="/projects" className="btn bg-white border border-black/10 text-text hover:bg-black/5 text-center py-2.5 px-5">
                      View Projects
                    </Link>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="relative h-[70vh] max-h-[700px]">
                  <Image
                    src="/desk-header.jpg"
                    alt="Digital Workspace"
                    fill
                    className="object-cover rounded-xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-multiply rounded-xl" />
                </div>
              </motion.div>
            </div>

            {/* Scroll to explore animation - now centered between hero and stats */}
            <motion.div 
              className="flex flex-col items-center text-center text-gray-500 mt-24 mb-0"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-sm mb-1">Scroll to explore</p>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 relative bg-white">
          <div className="absolute inset-0 bg-gradient-to-b from-surface to-white" />
          <div className="container relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: 95, label: 'Client Satisfaction', suffix: '%' },
                { value: 150, label: 'Workflows Automated', suffix: '+' },
                { value: 30, label: 'Integrations Mastered', suffix: '+' },
                { value: 5, label: 'Years Experience', suffix: '+' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-32 bg-white relative">
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="section-title mb-4">My Expertise</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                I specialize in creating seamless digital experiences that drive growth and efficiency
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Web Development',
                  description: 'I build responsive, performant websites and web applications using modern frameworks and best practices.',
                  icon: '🌐',
                  gradient: 'from-[#56CCF2] to-[#2F80ED]',
                },
                {
                  title: 'Mobile Development',
                  description: 'I create powerful native and cross-platform mobile applications with intuitive interfaces and powerful functionality.',
                  icon: '📱',
                  gradient: 'from-[#6A11CB] to-[#2575FC]',
                },
                {
                  title: 'Workflow Automation',
                  description: 'I streamline operations with intelligent automation that eliminates repetitive tasks and creates efficient processes.',
                  icon: '⚡',
                  gradient: 'from-[#FF4E50] to-[#F9D423]',
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-8 group"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center text-2xl mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted">
                    {service.description}
                  </p>
                  <Link href={`/skills`} className="inline-flex items-center mt-4 text-primary font-medium">
                    Learn more
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-32 bg-surface relative">
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="section-title mb-4">Featured Work</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                A selection of my recent projects showcasing my expertise and capabilities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: 'Healthcare Workflow Automation',
                  description: 'Automated patient intake and documentation processes for a medical practice, reducing administrative time by 70%.',
                  image: '/projects/healthcare.jpg',
                  tags: ['Zapier', 'Document Automation', 'PandaDoc']
                },
                {
                  title: 'E-commerce Integration Suite',
                  description: 'Developed a custom integration between Shopify, accounting software, and fulfillment services for seamless operations.',
                  image: '/projects/ecommerce.jpg',
                  tags: ['Make.com', 'API Integration', 'Shopify']
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card overflow-hidden group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <div key={i} className="px-3 py-1 bg-black/5 rounded-full text-sm">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/projects" className="btn bg-white border border-black/10 text-text hover:bg-black/5">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </PageTransition>
  );
}
