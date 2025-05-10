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
        <section className="min-h-[85vh] flex items-center pt-16 sm:pt-20 md:pt-16 lg:pt-0 relative">
          {/* Grid with gradient mask for top-to-bottom blending */}
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/30 to-transparent" />
          
          <motion.div 
            className="absolute inset-0" 
            style={{ y }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-surface/50 to-white/30" />
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="text-center lg:text-left mt-4 sm:mt-0">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                    <span className="relative inline-flex mr-2">
                      <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                      <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-green-400 opacity-75"></span>
                    </span>
                    Available for Projects
                  </div>
                  <h4 className="text-primary font-medium mb-2 md:mb-3">Hi, I'm Etoma (Kelvin)</h4>
                  <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-5">
                    Turn Hours of <span className="gradient-text">Coding</span><br />into Minutes.
                  </h1>
                  <p className="text-base sm:text-lg mb-6 md:mb-8 text-muted max-w-xl mx-auto lg:mx-0">
                    Building seamless apps, powerful websites, and smart automated systems that transform how businesses operate. Combining technical expertise with a passion for elegant solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:mb-0 mb-10 max-w-md mx-auto lg:mx-0">
                    <Link href="/skills" className="cta-button">
                      <span>See My Skills</span>
                    </Link>
                    <Link href="/projects" className="btn btn-secondary text-center">
                      View Projects
                    </Link>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="hidden lg:block relative"
              >
                <div className="relative h-[60vh] max-h-[600px] rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 z-10"></div>
                  <Image
                    src="/desk-header.jpg"
                    alt="Digital Workspace"
                    fill
                    className="object-cover rounded-xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-multiply rounded-xl" />
                </div>
                
                {/* Floating highlighted box similar to ACAD AI */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-card p-6 max-w-xs">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold">Automate every step</h3>
                  </div>
                  <p className="text-sm text-muted">from creation to deployment and managing results for all your code</p>
                </div>
              </motion.div>
            </div>

            {/* Scroll to explore animation */}
            <motion.div 
              className="flex flex-col items-center text-center text-gray-500 mt-12 md:mt-16 mb-0"
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
                  className="bg-white p-6 rounded-xl shadow-card text-center"
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
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">My Services</div>
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
                  gradient: 'from-[#3151B5] to-[#56CCF2]',
                  skillsLink: '/skills#web-development'
                },
                {
                  title: 'Mobile Development',
                  description: 'I create powerful native and cross-platform mobile applications with intuitive interfaces and powerful functionality.',
                  icon: '📱',
                  gradient: 'from-[#3151B5] to-[#56CCF2]',
                  skillsLink: '/skills#mobile-development'
                },
                {
                  title: 'Workflow Automation',
                  description: 'I streamline operations with intelligent automation that eliminates repetitive tasks and creates efficient processes.',
                  icon: '⚡',
                  gradient: 'from-[#3151B5] to-[#56CCF2]',
                  skillsLink: '/skills#automation-and-integration'
                },
              ].map((service, index) => (
                <Link 
                  href={service.skillsLink} 
                  key={index}
                  className="block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="feature-card group h-full cursor-pointer"
                  >
                    <div className={`w-16 h-16 rounded-lg bg-primary/10 group-hover:bg-gradient-to-r ${service.gradient} flex items-center justify-center text-2xl mb-6 transition-all duration-300 group-hover:text-white text-primary`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted mb-4">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center text-primary font-medium">
                      Learn more
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 bg-surface relative">
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">How I Work</div>
              <h2 className="section-title mb-4">My Development Process</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                A streamlined approach to ensure efficient delivery of high-quality solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  step: 1,
                  title: 'Discovery & Planning',
                  description: 'I work closely with you to understand your requirements, goals, and vision for the project.'
                },
                {
                  step: 2,
                  title: 'Design & Prototyping',
                  description: 'Create wireframes and interactive prototypes to visualize the solution before development begins.'
                },
                {
                  step: 3,
                  title: 'Development',
                  description: 'Build the solution using modern technologies and frameworks, following best practices and standards.'
                },
                {
                  step: 4,
                  title: 'Testing & QA',
                  description: 'Rigorous testing across devices and browsers to ensure functionality, performance, and security.'
                },
                {
                  step: 5,
                  title: 'Deployment & Launch',
                  description: 'Smooth deployment process with complete documentation and support to ensure a successful launch.'
                },
                {
                  step: 6,
                  title: 'Maintenance & Support',
                  description: 'Ongoing maintenance, updates, and support to keep your solution running optimally.'
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="step-card"
                >
                  <div className="step-number">{process.step}</div>
                  <h3 className="text-xl font-bold mb-3 text-secondary">{process.title}</h3>
                  <p className="text-muted">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-primary text-white p-8 md:p-12 rounded-xl">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to work together?</h2>
                <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
                  Let's collaborate to turn your vision into reality. Contact me to discuss your project requirements.
                </p>
                <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100 py-3 px-8 text-lg inline-block">
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer variant="white" />
      </main>
    </PageTransition>
  );
}
