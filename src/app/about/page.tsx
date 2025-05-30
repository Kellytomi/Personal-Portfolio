"use client";

import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';

export default function About(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  
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
    }
  ];

  // Skills timeline data  
  const skills = [
    {
      year: '2021 - Present',
      title: 'Full-Stack Web Development',
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python'],
      description: 'Building end-to-end web applications with modern frameworks and tools.'
    },
    {
      year: '2022 - Present', 
      title: 'Mobile Development',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      description: 'Creating cross-platform mobile applications for iOS and Android.'
    },
    {
      year: '2020 - Present',
      title: 'Automation & Integration',
      technologies: ['Zapier', 'Make.com', 'Power Automate', 'APIs'],
      description: 'Streamlining business processes through automated workflows and system integrations.'
    }
  ];

  return (
    <PageTransition>
      <div ref={containerRef} className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">About Me</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
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
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/projects" 
                  className="btn bg-primary text-white hover:bg-primary/90"
                >
                  View My Work
                </Link>
                <Link 
                  href="/contact" 
                  className="btn border border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-hero.jpg"
                  alt="Kelvin working at his desk"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* My Story Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="section-title mb-4">My Story</h2>
                <p className="section-subtitle max-w-2xl mx-auto">
                  How I went from curious teenager to full-stack developer
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="prose prose-lg">
                    <p>
                      My journey into tech started pretty unconventionally. I was 14, obsessed with online games, 
                      and frustrated that I couldn't build the features I wanted to see. So I did what any 
                      reasonable teenager would do - I decided to learn how to code.
                    </p>
                    <p>
                      Fast forward through countless Stack Overflow tabs, failed projects, and "aha!" moments, 
                      and here I am - a developer who's worked with everyone from Nigerian startups to 
                      international agencies, helping them solve real problems with code.
                    </p>
                    <p>
                      What I love most about this field is that there's always something new to learn. 
                      Whether it's a new framework, a design pattern, or just a better way to solve an old problem, 
                      the learning never stops - and I wouldn't have it any other way.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-primary/5 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted">Years of Experience</span>
                        <span className="font-bold">4+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted">Projects Completed</span>
                        <span className="font-bold">50+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted">Happy Clients</span>
                        <span className="font-bold">25+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted">Coffee Consumed</span>
                        <span className="font-bold">∞</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gray-50">
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
                Education and skill development milestones
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {/* Education Timeline */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
                <div className="space-y-8">
                  {education.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative pl-8 border-l-2 border-primary/20"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                      <div className="bg-white p-6 rounded-xl shadow-card">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-lg font-bold">{item.degree}</h4>
                          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-muted font-medium mb-2">{item.institution}</p>
                        <p className="text-sm text-muted">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills Timeline */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-center">Skill Development</h3>
                <div className="space-y-8">
                  {skills.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative pl-8 border-l-2 border-primary/20"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                      <div className="bg-white p-6 rounded-xl shadow-card">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h4 className="text-lg font-bold">{item.title}</h4>
                          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-muted">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="section-title mb-4">What I Believe In</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                The principles that guide my work and life
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: '🎯',
                  title: 'Quality Over Quantity',
                  description: 'I\'d rather build one amazing thing than ten mediocre ones. Every line of code should have a purpose.'
                },
                {
                  icon: '🤝',
                  title: 'Collaboration is Key',
                  description: 'The best solutions come from diverse perspectives. I love working with teams that challenge and inspire each other.'
                },
                {
                  icon: '📚',
                  title: 'Never Stop Learning',
                  description: 'Technology evolves fast, and so should we. I\'m always exploring new tools, techniques, and ideas.'
                },
                {
                  icon: '💡',
                  title: 'Solve Real Problems',
                  description: 'Code is just a tool. What matters is using it to make people\'s lives easier, businesses more efficient, or experiences more delightful.'
                },
                {
                  icon: '🌱',
                  title: 'Sustainable Growth',
                  description: 'Whether it\'s code architecture or personal development, I believe in building for the long term.'
                },
                {
                  icon: '😊',
                  title: 'Have Fun Doing It',
                  description: 'Work shouldn\'t feel like work. When you love what you do, it shows in the quality of your output.'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="py-20 bg-gray-50">
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
      </div>
    </PageTransition>
  );
} 