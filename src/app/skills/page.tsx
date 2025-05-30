"use client";

import Navigation from '@/components/Navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';

interface Skill {
  name: string;
  level: number;
  color?: string;
  icon?: string;
}

interface SkillCategory {
  category: string;
  description: string;
  moreInfo: string;
  icon: string;
  iconBg: string;
  skills: Skill[];
}

export default function Skills(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Define skill categories
  const skillCategories: SkillCategory[] = [
    {
      category: 'Automation & Integration',
      description: 'Connecting and automating business systems for maximum efficiency',
      moreInfo: 'I specialize in creating seamless workflows between different platforms, eliminating manual processes and reducing operational overhead. My automation solutions have helped businesses save thousands of hours in manual tasks.',
      icon: '⚡',
      iconBg: 'from-amber-400 to-orange-500',
      skills: [
        { name: 'Zapier', level: 95, color: '#FF4F00', icon: '/skills/zapier.svg' },
        { name: 'Make.com', level: 90, color: '#00B6CB', icon: '/skills/make.svg' },
        { name: 'Airtable', level: 85, color: '#2D7FF9', icon: '/skills/airtable.svg' },
        { name: 'Notion API', level: 88, color: '#000000', icon: '/skills/notion.svg' },
        { name: 'REST APIs', level: 92, color: '#61AFFE', icon: '/skills/api.svg' },
      ],
    },
    {
      category: 'Web Development',
      description: 'Building modern web applications with cutting-edge technologies',
      moreInfo: 'My development approach focuses on creating scalable, maintainable web applications using the latest technologies. I prioritize performance, accessibility, and user experience in every project.',
      icon: '🌐',
      iconBg: 'from-blue-400 to-indigo-500',
      skills: [
        { name: 'Next.js', level: 90, color: '#000000', icon: '/skills/nextjs.svg' },
        { name: 'React', level: 88, color: '#61DAFB', icon: '/skills/react.svg' },
        { name: 'TypeScript', level: 85, color: '#3178C6', icon: '/skills/typescript.svg' },
        { name: 'Node.js', level: 82, color: '#339933', icon: '/skills/nodejs.svg' },
        { name: 'Tailwind CSS', level: 92, color: '#38B2AC', icon: '/skills/tailwind.svg' },
      ],
    },
    {
      category: 'Mobile Development',
      description: 'Creating native and cross-platform mobile applications',
      moreInfo: 'I build high-performance mobile applications that provide exceptional user experiences. Using Flutter, I can deliver beautiful, natively compiled applications from a single codebase.',
      icon: '📱',
      iconBg: 'from-blue-400 to-indigo-500',
      skills: [
        { name: 'Flutter', level: 87, color: '#02569B', icon: '/skills/flutter.svg' },
        { name: 'Dart', level: 85, color: '#0175C2', icon: '/skills/dart.svg' },
        { name: 'Firebase', level: 82, color: '#FFCA28', icon: '/skills/firebase.svg' },
        { name: 'RESTful APIs', level: 90, color: '#61AFFE', icon: '/skills/api.svg' },
        { name: 'UI/UX Design', level: 80, color: '#FF3366', icon: '/skills/ui-ux.svg' },
      ],
    },
    {
      category: 'Document Solutions',
      description: 'Streamlining document workflows and automating paperwork processes',
      moreInfo: 'I transform document-heavy processes into streamlined digital workflows. From contract generation to automated approvals, my document solutions reduce turnaround times and improve accuracy.',
      icon: '📄',
      iconBg: 'from-sky-400 to-cyan-500',
      skills: [
        { name: 'PandaDoc', level: 95, color: '#569AF6', icon: '/skills/pandadoc.svg' },
        { name: 'DocuSign', level: 85, color: '#FDB52B', icon: '/skills/docusign.svg' },
        { name: 'Document AI', level: 80, color: '#4285F4', icon: '/skills/documentai.svg' },
        { name: 'PDF Automation', level: 90, color: '#FF0000', icon: '/skills/pdf.svg' },
      ],
    },
  ];
  
  // Helper function for generating category IDs
  const getCategoryId = (category: string): string => {
    return category.toLowerCase()
      .replace(/&/g, 'and')
      .replace(/\s+/g, '-');
  };
  
  // Setup initial state for activeCategory based on URL hash
  const [activeCategory, setActiveCategory] = useState<number>(() => {
    // This function runs only on initial render
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const index = skillCategories.findIndex(
          category => getCategoryId(category.category) === hash
        );
        if (index !== -1) {
          return index;
        }
      }
    }
    return 0; // Default to first category if no hash or no match
  });
  
  // Handle URL hash changes and scroll to the correct section
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.substring(1);
      
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          // Delay the scroll slightly to ensure the page has rendered
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 300);
        }
        
        // Set active category based on hash
        const index = skillCategories.findIndex(
          category => getCategoryId(category.category) === hash
        );
        if (index !== -1 && index !== activeCategory) {
          setActiveCategory(index);
        }
      }
    }
  }, []); // Empty dependency array so it only runs once on mount

  return (
    <PageTransition>
      <main className="min-h-screen bg-surface overflow-hidden" ref={containerRef}>
        <Navigation />
        
        {/* Hero Section */}
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
                <span className="text-sm font-medium">Technical Proficiency</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
                Skills & Expertise
              </h1>
              <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                Combining deep technical knowledge with strategic thinking to deliver exceptional digital solutions that drive business growth and innovation.
              </p>
            </motion.div>

            {/* Skills Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {skillCategories.map((category, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                    activeCategory === index 
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  whileTap={{ y: 0 }}
                  id={getCategoryId(category.category)}
                >
                  <span className="flex items-center gap-2">
                    <span>{category.icon}</span>
                    <span>{category.category}</span>
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Skills Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Category Info - Left Panel */}
              <motion.div 
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                key={`info-${activeCategory}`}
              >
                <div className="sticky top-32" id={getCategoryId(skillCategories[activeCategory].category)}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skillCategories[activeCategory].iconBg} flex items-center justify-center mb-6 text-3xl shadow-lg`}>
                    {skillCategories[activeCategory].icon}
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4 text-primary">
                    {skillCategories[activeCategory].category}
                  </h2>
                  
                  <p className="text-lg text-muted mb-6 leading-relaxed">
                    {skillCategories[activeCategory].description}
                  </p>
                  
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-primary">Expertise Highlight</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {skillCategories[activeCategory].moreInfo}
                    </p>
                  </div>
                  
                  <Link 
                    href="/projects" 
                    className="inline-flex items-center text-primary font-medium"
                  >
                    <span>View Related Projects</span>
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
              
              {/* Skills Detail - Right Panel */}
              <motion.div 
                className="lg:col-span-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                key={`skills-${activeCategory}`}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <h3 className="text-xl font-bold mb-8 text-gray-700">Skill Proficiency</h3>
                  
                  <div className="space-y-10">
                    {skillCategories[activeCategory].skills.map((skill, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center">
                            <div className="w-10 h-10 mr-4 relative">
                              <Image 
                                src={skill.icon || '/skills/placeholder.svg'} 
                                alt={skill.name}
                                width={40}
                                height={40}
                                className="object-contain"
                              />
                            </div>
                            <h4 className="font-bold text-gray-800 group-hover:text-primary transition-colors">
                              {skill.name}
                            </h4>
                          </div>
                          <div className="text-sm font-bold" style={{ color: skill.color }}>
                            {skill.level}%
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                              className="h-full rounded-full"
                              style={{ 
                                backgroundColor: skill.color,
                                boxShadow: `0 0 20px ${skill.color}40`
                              }}
                            />
                          </div>
                          
                          {/* Skill level markers */}
                          <div className="absolute -top-2 left-0 right-0 flex justify-between">
                            {[0, 25, 50, 75, 100].map((marker) => (
                              <div 
                                key={marker} 
                                className={`relative h-0 ${marker === 0 ? 'text-left' : marker === 100 ? 'text-right' : 'text-center'}`}
                                style={{ left: `${marker}%` }}
                              >
                                <div className={`absolute h-3 w-px bg-gray-200 ${marker === 0 ? '-left-px' : marker === 100 ? '-right-px' : ''}`}></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Technical Process Cards */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <motion.div 
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <h4 className="font-bold mb-3 text-primary">My Approach</h4>
                    <p className="text-gray-600 text-sm">
                      I focus on understanding your business goals first, then leverage these skills to create solutions that are not just technically sound, but strategically aligned with your objectives.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <h4 className="font-bold mb-3 text-primary">Continuous Learning</h4>
                    <p className="text-gray-600 text-sm">
                      Technology evolves rapidly, and so do I. I&apos;m constantly expanding my skills and keeping up with the latest innovations in {skillCategories[activeCategory].category.toLowerCase()}.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white relative">
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-primary text-white p-8 md:p-12 rounded-xl dark-section">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Let&apos;s Put These Skills to Work
                </h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  Looking for a technical partner who can bring your ideas to life?
                  Let&apos;s discuss how my expertise can help solve your challenges and achieve your business goals.
                </p>
                <Link 
                  href="/contact" 
                  className="btn bg-white text-primary hover:bg-gray-100 py-3 px-8 text-lg inline-block"
                >
                  Discuss Your Project
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