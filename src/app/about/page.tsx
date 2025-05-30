"use client";

import Navigation from '@/components/Navigation';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';

export default function About(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Education timeline data
  const education = [
    {
      year: '2024 - 2028',
      degree: 'BSc in Software Engineering',
      institution: 'Lead City University, Ibadan',
      description: 'Specialized in software engineering with focus on application development and system architecture.'
    },
    {
      year: '2019 - 2020',
      degree: 'Professional Certification',
      institution: 'Automation Professional Academy',
      description: 'Specialized training in enterprise automation, integration platforms, and workflow optimization.'
    },
  ];
  
  // Work experience timeline data
  const experience = [
    {
      year: '2022 - Present',
      position: 'Founder & Digital Solutions Expert',
      company: 'Fxsion',
      description: 'Founded Fxsion to provide comprehensive digital solutions for businesses, specializing in workflow automation, document solutions, and custom digital development.',
      achievements: [
        'Built and deployed over 100 custom automation workflows',
        'Reduced operational costs by 40% for enterprise clients',
        'Developed innovative document automation solutions'
      ]
    },
    {
      year: '2020 - 2022',
      position: 'Digital Transformation Consultant',
      company: 'Deloitte Digital',
      description: 'Led digital transformation initiatives for enterprise clients, focusing on process automation and systems integration.',
      achievements: [
        'Managed major automation projects for Fortune 500 clients',
        'Designed and implemented CRM integration solutions',
        'Led cross-functional teams on complex implementations'
      ]
    },
    {
      year: '2019 - 2020',
      position: 'Solutions Developer',
      company: 'TechSolutions Inc.',
      description: 'Developed custom automation solutions and integrations for midsize businesses across industries.',
      achievements: [
        'Built custom API integrations for various platforms',
        'Implemented document workflow automation solutions',
        'Contributed to open-source integration tools'
      ]
    },
  ];

  return (
    <PageTransition>
      <main className="min-h-screen bg-surface overflow-hidden" ref={containerRef}>
        <Navigation />
        
        {/* Hero Section - Split Design */}
        <section className="min-h-screen flex flex-col lg:flex-row pt-16 sm:pt-20 md:pt-16 lg:pt-0 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-surface/50 to-white/30" />
          
          {/* Left panel - Photo & Visual */}
          <div className="w-full lg:w-1/2 relative h-[60vh] lg:h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
            <motion.div 
              className="absolute inset-0 overflow-hidden"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src="/profile-full.jpg"
                alt="Etoma-Etoto Kelvin Odi"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-multiply" />
            </motion.div>
          </div>
          
          {/* Right panel - Bio & Information */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary mb-6">
                <span className="text-sm font-medium">About Me</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Hi, I'm Kelvin
              </h1>
              <p className="text-xl text-muted mb-8">
                Developer, basketball enthusiast, and pasta chef in training
              </p>
              <div className="prose prose-lg mb-8">
                <p>
                  I'm a self-taught developer who loves creating digital stuff that people enjoy using. 
                  I started coding as a teenager because I wanted to make my own games, and that 
                  curiosity has evolved into a passion for building all kinds of digital experiences.
                </p>
                <p>
                  When I'm not glued to my keyboard, you'll find me on the basketball court trying 
                  (and occasionally succeeding) at three-pointers, experimenting with new pasta recipes, 
                  or binge-watching sci-fi shows with my cat, Pixel.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a 
                  href="https://drive.google.com/file/d/YOUR_RESUME_FILE_ID/view" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Resume
                </a>
                <Link href="/contact" className="btn btn-secondary">
                  Contact Me
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* My Journey Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="section-title mb-4">My Journey</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                A slightly less boring timeline of how I got here
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-16">
              {/* Work Experience */}
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold mb-8 flex items-center"
                >
                  <span className="inline-block w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 13.2554C20.7753 13.3723 20.5289 13.4335 20.2689 13.4335H18.0005V14.5C18.0005 14.7761 17.7766 15 17.5005 15H16.5005C16.2243 15 16.0005 14.7761 16.0005 14.5V13.4335H8.00049V14.5C8.00049 14.7761 7.77663 15 7.50049 15H6.50049C6.22435 15 6.00049 14.7761 6.00049 14.5V13.4335H3.73209C3.47205 13.4335 3.22566 13.3723 3.00098 13.2554V18.5C3.00098 19.3284 3.67253 20 4.50098 20H19.501C20.3294 20 21.001 19.3284 21.001 18.5V13.2554H21Z" fill="currentColor"/>
                      <path d="M6.00049 11.5V10.4665H3.73209C2.59347 10.4665 1.67598 11.384 1.67598 12.5226C1.67598 13.6613 2.59347 14.5788 3.73209 14.5788H6.00049V13.5H8.00049V14.5788H16.0005V13.5H18.0005V14.5788H20.2689C21.4075 14.5788 22.325 13.6613 22.325 12.5226C22.325 11.384 21.4075 10.4665 20.2689 10.4665H18.0005V11.5C18.0005 11.7761 17.7766 12 17.5005 12H16.5005C16.2243 12 16.0005 11.7761 16.0005 11.5V10.4665H8.00049V11.5C8.00049 11.7761 7.77663 12 7.50049 12H6.50049C6.22435 12 6.00049 11.7761 6.00049 11.5Z" fill="currentColor"/>
                      <path d="M19.501 4H4.50098C3.67253 4 3.00098 4.67157 3.00098 5.5V11.1446C3.22566 11.0277 3.47205 10.9665 3.73209 10.9665H6.00049V10H8.00049V10.9665H16.0005V10H18.0005V10.9665H20.2689C20.5289 10.9665 20.7753 11.0277 21 11.1446V5.5C21 4.67157 20.3294 4 19.501 4Z" fill="currentColor"/>
                    </svg>
                  </span>
                  My Work Adventures
                </motion.h3>
                
                <div className="space-y-8">
                  {experience.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative pl-8 border-l-2 border-primary/20"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                      <span className="inline-block px-3 py-1 bg-primary/5 rounded-full text-sm font-medium mb-2">
                        {item.year}
                      </span>
                      <h4 className="text-xl font-bold mb-1">{item.position}</h4>
                      <p className="text-primary font-medium mb-2">{item.company}</p>
                      <p className="text-muted mb-4">{item.description}</p>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Skills and Education */}
              <div className="space-y-12">
                {/* Skills */}
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold mb-8 flex items-center"
                  >
                    <span className="inline-block w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.25 7C9.25 8.24264 8.24264 9.25 7 9.25C5.75736 9.25 4.75 8.24264 4.75 7C4.75 5.75736 5.75736 4.75 7 4.75C8.24264 4.75 9.25 5.75736 9.25 7Z" fill="currentColor"/>
                        <path d="M9.25 17C9.25 18.2426 8.24264 19.25 7 19.25C5.75736 19.25 4.75 18.2426 4.75 17C4.75 15.7574 5.75736 14.75 7 14.75C8.24264 14.75 9.25 15.7574 9.25 17Z" fill="currentColor"/>
                        <path d="M9.25 12C9.25 13.2426 8.24264 14.25 7 14.25C5.75736 14.25 4.75 13.2426 4.75 12C4.75 10.7574 5.75736 9.75 7 9.75C8.24264 9.75 9.25 10.7574 9.25 12Z" fill="currentColor"/>
                        <path d="M19.25 7C19.25 8.24264 18.2426 9.25 17 9.25C15.7574 9.25 14.75 8.24264 14.75 7C14.75 5.75736 15.7574 4.75 17 4.75C18.2426 4.75 19.25 5.75736 19.25 7Z" fill="currentColor"/>
                        <path d="M19.25 17C19.25 18.2426 18.2426 19.25 17 19.25C15.7574 19.25 14.75 18.2426 14.75 17C14.75 15.7574 15.7574 14.75 17 14.75C18.2426 14.75 19.25 15.7574 19.25 17Z" fill="currentColor"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12ZM18 16C15.7909 16 14 14.2091 14 12C14 9.79086 15.7909 8 18 8C20.2091 8 22 9.79086 22 12C22 14.2091 20.2091 16 18 16Z" fill="currentColor"/>
                        <path d="M14.75 12C14.75 13.2426 13.7426 14.25 12.5 14.25C11.2574 14.25 10.25 13.2426 10.25 12C10.25 10.7574 11.2574 9.75 12.5 9.75C13.7426 9.75 14.75 10.7574 14.75 12Z" fill="currentColor"/>
                      </svg>
                    </span>
                    Cool Stuff I Can Do
                  </motion.h3>
                  
                  <div className="space-y-6">
                    {[
                      { name: 'Workflow Automation', level: 95, icon: '⚡' },
                      { name: 'API Integrations', level: 90, icon: '🔄' },
                      { name: 'Web Development', level: 88, icon: '💻' },
                      { name: 'Mobile Development (Flutter)', level: 87, icon: '📱' },
                      { name: 'Document Solutions', level: 92, icon: '📄' },
                      { name: 'Project Management', level: 85, icon: '📊' },
                    ].map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium flex items-center gap-2">
                            <span className="inline-block w-6 text-center">{skill.icon}</span>
                            {skill.name}
                          </span>
                          <span className="text-primary">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Education */}
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold mb-8 flex items-center"
                  >
                    <span className="inline-block w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L3 9L12 14L21 9L12 4Z" fill="currentColor"/>
                        <path d="M3 9V14L12 19L21 14V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.5 11.5V16.5M16.5 11.5V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    Education
                  </motion.h3>
                  
                  <div className="space-y-6">
                    {education.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="pl-8 relative border-l-2 border-primary/20 pb-6"
                      >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                        <span className="inline-block px-3 py-1 bg-primary/5 rounded-full text-sm font-medium mb-2">
                          {item.year}
                        </span>
                        <h4 className="text-xl font-bold mb-1">{item.degree}</h4>
                        <p className="text-primary font-medium mb-2">{item.institution}</p>
                        <p className="text-muted">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Certifications Section - Full Width */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-8 flex items-center"
            >
              <span className="inline-block w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 15.5L10.5 13.5M10.5 13.5L12.5 17.5M10.5 13.5L14.5 9.5M14.5 9.5L18.5 7.5M14.5 9.5L16.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Certifications & Credentials
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: 'Certified Zapier Expert',
                  issuer: 'Zapier',
                  year: '2022',
                  color: 'from-orange-400 to-red-500',
                  hoverClass: 'hover:from-orange-400 hover:to-red-500',
                  icon: '⚡'
                },
                {
                  name: 'Flutter Developer',
                  issuer: 'Google',
                  year: '2021',
                  color: 'from-blue-400 to-indigo-500',
                  hoverClass: 'hover:from-blue-400 hover:to-indigo-500',
                  icon: '📱'
                },
                {
                  name: 'Next.js & React Pro',
                  issuer: 'Vercel',
                  year: '2022',
                  color: 'from-slate-700 to-slate-900',
                  hoverClass: 'hover:from-slate-700 hover:to-slate-900',
                  icon: '🌐'
                },
                {
                  name: 'PandaDoc Partner',
                  issuer: 'PandaDoc',
                  year: '2023',
                  color: 'from-blue-400 to-sky-500',
                  hoverClass: 'hover:from-blue-400 hover:to-sky-500',
                  icon: '📄'
                },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-r from-gray-400 to-gray-600 ${cert.hoverClass} text-white p-6 transition-all duration-500`}>
                    <div className="text-3xl mb-3">{cert.icon}</div>
                    <h4 className="text-xl font-bold">{cert.name}</h4>
                  </div>
                  <div className="p-4 bg-white">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        {cert.issuer}
                      </span>
                      <span className="text-xs bg-gray-200 text-gray-600 group-hover:bg-primary/10 group-hover:text-primary px-2 py-1 rounded-full transition-all duration-300">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Add Fun Facts section before the CTA */}
        <section className="py-20 bg-surface">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="section-title mb-4">Fun Facts About Me</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                The stuff you won't find on my LinkedIn profile
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { icon: '🏀', title: 'Basketball Fanatic', description: 'I play pickup games twice a week and have a small collection of NBA jerseys' },
                { icon: '🍝', title: 'Pasta Chef', description: 'I\'m on a mission to perfect my homemade carbonara recipe' },
                { icon: '🎮', title: 'Casual Gamer', description: 'I stay up way too late playing indie games and retro classics' },
                { icon: '🐱', title: 'Cat Person', description: 'My coding buddy is a black cat named Pixel who loves to walk on my keyboard' },
                { icon: '🌱', title: 'Plant Dad', description: 'I have a small jungle of houseplants that somehow haven\'t died yet' },
                { icon: '🎬', title: 'Sci-Fi Nerd', description: 'I can quote entire episodes of Firefly and The Expanse from memory' },
              ].map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-card"
                >
                  <div className="text-3xl mb-4">{fact.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{fact.title}</h3>
                  <p className="text-muted text-sm">{fact.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-primary text-white p-8 md:p-12 rounded-xl dark-section">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
                <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
                  Let's discuss how I can help solve your challenges and achieve your business goals through my expertise in web development, mobile development, and workflow automation.
                </p>
                <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100 py-3 px-8 text-lg inline-block">
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
} 