"use client";

import Navigation from '@/components/Navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import CountUp from '@/components/CountUp';
import PageSpacer from '@/components/PageSpacer';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';
import PageFadeIn from '@/components/PageFadeIn';
import { PinContainer } from '@/components/ui/3d-pin';

export default function Home(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  // Add loading state
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Hide loading screen after everything is loaded
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
        // Add loaded class to body to trigger background image
        document.body.classList.add('loaded');
      }, 800); // Small delay to ensure smooth transition and show the animation
    };
    
    // If the window is already loaded, run immediately
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    
    // Apply loaded class immediately as well to ensure grid is visible
    document.body.classList.add('loaded');
    
    // Initial timeout in case load event doesn't fire
    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add('loaded');
    }, 2500); // Increased timeout to allow animation to be seen
    
    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <PageTransition>
      <PageFadeIn>
        {/* Loading screen */}
        {isLoading && (
          <div className="loading-screen">
            <div className="loader">
              <div className="loader-cube">
                <div className="loader-face"></div>
                <div className="loader-face"></div>
                <div className="loader-face"></div>
                <div className="loader-face"></div>
                <div className="loader-face"></div>
                <div className="loader-face"></div>
              </div>
            </div>
            <div className="loading-text">CREATING EXPERIENCE</div>
            <div className="progress-bar"></div>
          </div>
        )}
        
        <main className={`min-h-screen bg-surface overflow-hidden ${isLoading ? 'loading' : ''}`} ref={containerRef}>
          <Navigation />
          <PageSpacer />
          
          {/* Hero Section */}
          <section className="min-h-[85vh] flex items-center pt-16 sm:pt-20 md:pt-16 lg:pt-0 relative">
            {/* Direct grid background with inline styles */}
            <div 
              className="absolute inset-0" 
              style={{
                backgroundImage: 'url(/grid-pattern.svg)',
                backgroundSize: '30px 30px',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                opacity: 0.5,
                pointerEvents: 'none',
                zIndex: 0
              }}
            />

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
                    animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                      <span className="relative inline-flex mr-2">
                        <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                        <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-green-400 opacity-75"></span>
                      </span>
                      Open to new projects
                    </div>
                    <h4 className="text-primary font-medium mb-2 md:mb-3">Hey there, I'm Etoma-etoto (Kelvin) Odi 👋</h4>
                    <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-5">
                      I build <span className="gradient-text">awesome digital stuff</span> that people love
                    </h1>
                    <p className="text-base sm:text-lg mb-6 md:mb-8 text-muted max-w-xl mx-auto lg:mx-0">
                      When I'm not coding, you'll find me playing basketball, binging Netflix shows, or experimenting with new recipes. My passion is creating digital experiences that make people's lives easier and more enjoyable.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:mb-0 mb-10 max-w-md mx-auto lg:mx-0">
                      <Link href="/about" className="cta-button">
                        <span>Get to know me</span>
                      </Link>
                      <Link href="/projects" className="btn btn-secondary text-center">
                        See my work
                      </Link>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: isLoading ? 0 : 1, x: isLoading ? 20 : 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="lg:block relative"
                >
                  <div className="relative h-[60vh] max-h-[600px] rounded-xl overflow-hidden">
                    <Image
                      src="/profile-casual.jpg"
                      alt="Kelvin smiling"
                      fill
                      className="object-cover rounded-xl"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-multiply rounded-xl" />
                  </div>
                  
                  {/* Floating highlighted box with personal touch */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-card p-6 max-w-xs">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xl">🎮</span>
                      </div>
                      <h3 className="font-bold">Fun fact</h3>
                    </div>
                    <p className="text-sm text-muted">I once stayed up 48 hours straight to finish a game jam project. Worth it!</p>
                  </div>
                </motion.div>
              </div>

              {/* Scroll to explore animation */}
              <motion.div 
                className="flex flex-col items-center text-center text-gray-500 mt-12 md:mt-16 mb-0"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-sm mb-1">Scroll down for more</p>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>
          </section>

          {/* Rest of the content */}
          <div className={`grid-loaded ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
            {/* Personal section - Restructured */}
            <section className="py-20 relative bg-white">
              <div className="absolute inset-0 bg-gradient-to-b from-surface to-white" />
              <div className="container relative">
                <div className="max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                  >
                    <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">My Story</div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">A bit about me</h2>
                  </motion.div>
                  
                  <div className="grid md:grid-cols-5 gap-8 items-start">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="md:col-span-2"
                    >
                      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                        <Image
                          src="/profile-casual-2.jpg"
                          alt="Kelvin coding"
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="md:col-span-3 space-y-4 md:ml-4"
                    >
                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">👨‍💻</span>
                          <h3 className="text-xl font-bold">The Dev Journey</h3>
                        </div>
                        <p className="text-muted">
                          I'm Kelvin, a self-taught developer with a passion for creating digital experiences that make people smile. 
                          I started coding when I was 14, building simple games and websites for fun.
                        </p>
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">🛠️</span>
                          <h3 className="text-xl font-bold">What Drives Me</h3>
                        </div>
                        <p className="text-muted">
                          These days, I love combining creativity with technology to build things that solve real problems. 
                          Whether it's a sleek mobile app, an intuitive website, or a clever automation tool, I'm happiest when I'm making something that helps people.
                        </p>
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">🏀</span>
                          <h3 className="text-xl font-bold">Outside the Code</h3>
                        </div>
                        <p className="text-muted">
                          When I'm not in front of my computer, I'm probably shooting hoops at the local court, trying to perfect my pasta carbonara recipe, or binge-watching sci-fi shows with my cat, Pixel.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center mt-8"
                  >
                    <Link href="/about" className="btn btn-primary">
                      More about me
                    </Link>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* What I Do section (renamed from Stats) */}
            <section className="py-20 relative bg-white">
              <div className="container relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-12"
                >
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">What I Do</div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Things I'm good at</h2>
                </motion.div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {[
                    { title: 'Frontend Development', description: 'Creating beautiful, responsive interfaces that people enjoy using', icon: '💻' },
                    { title: 'Problem Solving', description: 'Finding elegant solutions to complex technical challenges', icon: '🧩' },
                    { title: 'Mobile Apps', description: 'Building native-feeling experiences for iOS and Android', icon: '📱' },
                    { title: 'UI/UX Design', description: 'Crafting intuitive interfaces with the user in mind', icon: '🎨' },
                    { title: 'Smart Automation', description: 'Making computers do the boring stuff so humans don\'t have to', icon: '⚡' },
                    { title: 'Learning New Tech', description: 'Quickly picking up new tools and frameworks', icon: '🚀' },
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-6 rounded-xl shadow-card text-center"
                    >
                      <div className="text-4xl mb-4">{skill.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-primary">{skill.title}</h3>
                      <p className="text-muted">{skill.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Services section with more personal tone */}
            <section className="py-32 bg-white relative">
              <div className="container relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-16"
                >
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">My Skills</div>
                  <h2 className="section-title mb-4">What I Love Building</h2>
                  <p className="section-subtitle max-w-2xl mx-auto">
                    Here are the things I'm passionate about creating
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: 'Websites & Apps',
                      description: 'I create engaging websites and web apps that are not only beautiful but also fun to use. I focus on the details that make users smile.',
                      icon: '🌐',
                      gradient: 'from-[#3151B5] to-[#56CCF2]',
                      skillsLink: '/skills#web-development'
                    },
                    {
                      title: 'Mobile Experiences',
                      description: 'I build mobile apps that people actually want to use. No clunky interfaces here - just smooth, intuitive experiences that feel natural.',
                      icon: '📱',
                      gradient: 'from-[#3151B5] to-[#56CCF2]',
                      skillsLink: '/skills#mobile-development'
                    },
                    {
                      title: 'Smart Automation',
                      description: 'I love making computers do boring stuff so humans don\'t have to. It\'s like magic, but with code instead of wands.',
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
                          Check it out
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

            {/* How I Work section with more personal approach */}
            <section className="py-32 bg-surface relative">
              <div className="container relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-16"
                >
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">My Approach</div>
                  <h2 className="section-title mb-4">How I Like to Work</h2>
                  <p className="section-subtitle max-w-2xl mx-auto">
                    My approach is all about keeping things fun, collaborative, and focused on what matters
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                  {[
                    {
                      step: 1,
                      title: 'Chat & Brainstorm',
                      description: 'Let\'s grab a (virtual) coffee and talk about your ideas. The best solutions start with great conversations.'
                    },
                    {
                      step: 2,
                      title: 'Sketch & Prototype',
                      description: 'I\'ll create some mockups we can play with. It\'s like test-driving a car before buying it.'
                    },
                    {
                      step: 3,
                      title: 'Build & Launch',
                      description: 'I\'ll bring our ideas to life with code, keeping you in the loop. Then we celebrate when it goes live!'
                    },
                  ].map((process, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white p-8 md:p-10 rounded-xl shadow-card relative overflow-hidden group"
                    >
                      <div
                        className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/80 to-primary flex items-start justify-end p-2 text-white font-extrabold text-xl"
                        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                      >
                        {process.step}
                      </div>
                      <h3 className="text-xl font-bold mb-4 mt-4">{process.title}</h3>
                      <p className="text-muted mb-4">{process.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Personal projects showcase */}
            <section className="py-32 bg-white relative">
              <div className="container relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-16"
                >
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">My Projects</div>
                  <h2 className="section-title mb-4">Stuff I've Built</h2>
                  <p className="section-subtitle max-w-2xl mx-auto">
                    Here are some of my favorite projects I've worked on recently
                  </p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-20">
                  {/* Featured Project 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <PinContainer
                      title="View Project"
                      href="/projects"
                      containerClassName="h-[22rem] w-[18rem] md:h-[25rem] md:w-[20rem]"
                    >
                      <div className="flex basis-full flex-col p-3 md:p-4 tracking-tight text-gray-600 w-[18rem] md:w-[20rem] h-[18rem] md:h-[20rem]">
                        <h3 className="max-w-xs !pb-1 md:!pb-2 !m-0 font-bold text-sm md:text-base text-gray-900">
                          Recipe Finder App
                        </h3>
                        <div className="text-sm md:text-base !m-0 !p-0 font-normal">
                          <span className="text-gray-600">
                            A mobile app that helps you find recipes based on ingredients you already have
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-3 md:mt-4 mb-3 md:mb-4">
                          <span className="px-2 md:px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                            Personal Favorite
                          </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-2 md:mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 relative overflow-hidden">
                          <div className="absolute inset-0 bg-[url('/project1.jpg')] bg-cover bg-center opacity-70"></div>
                        </div>
                      </div>
                    </PinContainer>
                  </motion.div>

                  {/* Featured Project 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <PinContainer
                      title="View Project"
                      href="/projects"
                      containerClassName="h-[22rem] w-[18rem] md:h-[25rem] md:w-[20rem]"
                    >
                      <div className="flex basis-full flex-col p-3 md:p-4 tracking-tight text-gray-600 w-[18rem] md:w-[20rem] h-[18rem] md:h-[20rem]">
                        <h3 className="max-w-xs !pb-1 md:!pb-2 !m-0 font-bold text-sm md:text-base text-gray-900">
                          Basketball Stats Tracker
                        </h3>
                        <div className="text-sm md:text-base !m-0 !p-0 font-normal">
                          <span className="text-gray-600">
                            A web app I built to track my pickup basketball game stats with friends
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-3 md:mt-4 mb-3 md:mb-4">
                          <span className="px-2 md:px-3 py-1 bg-secondary/20 text-secondary text-xs rounded-full">
                            Fun Project
                          </span>
                        </div>
                        <div className="flex flex-1 w-full rounded-lg mt-2 md:mt-4 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
                          <div className="absolute inset-0 bg-[url('/project2.jpg')] bg-cover bg-center opacity-70"></div>
                        </div>
                      </div>
                    </PinContainer>
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center mt-12"
                >
                  <Link href="/projects" className="btn btn-primary">
                    See all my projects
                  </Link>
                </motion.div>
              </div>
            </section>

            {/* Contact CTA - More friendly tone */}
            <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden dark-section">
              <div className="absolute inset-0 opacity-10 pattern-dots" />
              <div className="container relative">
                <div className="max-w-3xl mx-auto text-center text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's create something awesome together!</h2>
                    <p className="text-lg text-white/80 mb-8">
                      Got a cool project idea? Want to chat about tech? Or just want to say hi? I'd love to hear from you!
                    </p>
                    <Link 
                      href="/contact"
                      className="inline-block px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      Get in touch
                    </Link>
                  </motion.div>
                </div>
              </div>
            </section>

            <Footer />
          </div>
        </main>
      </PageFadeIn>
    </PageTransition>
  );
}