"use client";

import Navigation from '@/components/Navigation';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import CountUp from '@/components/CountUp';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  project: string;
  industry?: string;
  logo?: string;
  results?: string[];
}

export default function Testimonials(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Operations Director',
      company: 'TechFlow Solutions',
      image: '/testimonials/sarah.jpg',
      quote: 'The workflow automation solution implemented by Kelvin has transformed our operations. We have seen a 40% increase in efficiency and significant time savings across departments.',
      project: 'Workflow Automation Suite',
      industry: 'Technology',
      logo: '/testimonials/logos/techflow.svg',
      results: [
        '40% increase in operational efficiency',
        'Reduced manual task time by 15 hours per week',
        'Seamless integration with existing systems'
      ]
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'Marine Ventures',
      image: '/testimonials/michael.jpg',
      quote: 'The yacht website project exceeded our expectations. The real-time data integration and elegant design have significantly improved our customer engagement.',
      project: 'Yacht Zero Website',
      industry: 'Luxury & Travel',
      logo: '/testimonials/logos/marine.svg',
      results: [
        '35% increase in online inquiries',
        'Integrated real-time availability system',
        'Mobile-responsive design with premium UX'
      ]
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager',
      company: 'Growth Dynamics',
      image: '/testimonials/emily.jpg',
      quote: 'The marketing asset automation system has streamlined our content creation process. We can now generate and distribute materials in a fraction of the time.',
      project: 'Marketing Asset Automation',
      industry: 'Marketing',
      logo: '/testimonials/logos/growth.svg',
      results: [
        'Reduced design turnaround time by 60%',
        'Consistent branding across all materials',
        'Integrated with CRM for targeted distribution'
      ]
    },
    {
      name: 'David Thompson',
      role: 'Founder',
      company: 'SubTrackr',
      image: '/testimonials/david.jpg',
      quote: 'Kelvin\'s expertise in Flutter development helped us create a robust subscription tracking app that our users love. The attention to detail and user experience is outstanding.',
      project: 'SubTrackr Mobile App',
      industry: 'Technology',
      logo: '/testimonials/logos/subtrackr.svg',
      results: [
        'Successfully launched on iOS and Android',
        '4.8/5 average user rating',
        'Intuitive UI with custom animations'
      ]
    },
    {
      name: 'Lisa Anderson',
      role: 'Sales Director',
      company: 'Global Solutions Inc.',
      image: '/testimonials/lisa.jpg',
      quote: 'The PandaDoc CRM integration has revolutionized our sales process. We can now generate and track proposals automatically, saving countless hours of manual work.',
      project: 'PandaDoc CRM Integration',
      industry: 'Professional Services',
      logo: '/testimonials/logos/global.svg',
      results: [
        'Reduced proposal creation time by 75%',
        'Increased proposal acceptance rate by 25%',
        'Complete visibility into document analytics'
      ]
    },
    {
      name: 'James Wilson',
      role: 'Creative Director',
      company: 'Design Studio Pro',
      image: '/testimonials/james.jpg',
      quote: 'The proposal templates and brand kit design have given our agency a professional edge. The automated workflow has made our client onboarding process seamless.',
      project: 'Agency Proposal Templates',
      industry: 'Creative',
      logo: '/testimonials/logos/designstudio.svg',
      results: [
        'Standardized client onboarding process',
        'Professional document templates with customization',
        'Automated follow-up sequences'
      ]
    },
  ];

  // Auto-rotate featured testimonial
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Manual navigation for featured testimonial
  const goToTestimonial = (index: number) => {
    setCurrentTestimonialIndex(index);
  };
  
  // Get unique industries for filter
  const industries = ["All", ...Array.from(new Set(testimonials.map(t => t.industry).filter(Boolean) as string[]))];
  
  // Apply industry filter
  const filteredTestimonials = activeFilter === "All" 
    ? testimonials 
    : testimonials.filter(t => t.industry === activeFilter);

  return (
    <PageTransition>
      <main className="min-h-screen bg-surface overflow-hidden" ref={containerRef}>
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative">
          <motion.div 
            className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"
            style={{ y }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface to-white/50" />
          
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight">
                Client<br />Testimonials
              </h1>
              <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                Real results from real clients. Discover how my solutions have transformed businesses across industries.
              </p>
            </motion.div>

            {/* Featured Testimonial Carousel */}
            <div className="max-w-5xl mx-auto mb-12 relative">
              <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary z-10" />
                
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentTestimonialIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 h-full"
                  >
                    <div className="relative h-60 md:h-full">
                      <Image
                        src={testimonials[currentTestimonialIndex].image}
                        alt={testimonials[currentTestimonialIndex].name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-8 text-white">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
                            <Image
                              src={testimonials[currentTestimonialIndex].image}
                              alt={testimonials[currentTestimonialIndex].name}
                              width={56}
                              height={56}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-xl">{testimonials[currentTestimonialIndex].name}</h3>
                            <p className="text-sm text-white/90">{testimonials[currentTestimonialIndex].role}, {testimonials[currentTestimonialIndex].company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="text-6xl text-black/10 mb-6 font-serif">"</div>
                      <blockquote className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed">
                        {testimonials[currentTestimonialIndex].quote}
                      </blockquote>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div>
                          <div className="font-bold text-primary">{testimonials[currentTestimonialIndex].project}</div>
                          <div className="text-sm text-gray-500">{testimonials[currentTestimonialIndex].industry}</div>
                        </div>
                        <Link 
                          href="/projects" 
                          className="group inline-flex items-center text-sm font-medium border-b border-primary text-primary hover:border-secondary transition-colors duration-300"
                        >
                          View Project
                          <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Carousel Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6 mb-16">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonialIndex 
                        ? 'bg-primary w-6' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Industry Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {industries.map((industry, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveFilter(industry)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 text-sm font-medium ${
                    activeFilter === industry 
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg' 
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                  whileHover={{ y: -3 }}
                  whileTap={{ y: 0 }}
                >
                  {industry} {industry !== "All" && "Projects"}
                </motion.button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial Cards Grid */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    layout
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group h-full flex flex-col"
                  >
                    <div className="relative h-64">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={48}
                              height={48}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{testimonial.name}</h3>
                            <p className="text-xs opacity-90">{testimonial.role}, {testimonial.company}</p>
                          </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs self-start">
                          {testimonial.industry}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <blockquote className="text-gray-600 mb-6 leading-relaxed flex-grow">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="mt-auto">
                        <h4 className="font-bold text-primary mb-4">{testimonial.project}</h4>
                        
                        {testimonial.results && (
                          <div className="space-y-2 mb-6">
                            {testimonial.results.map((result, i) => (
                              <div key={i} className="flex items-start gap-2 text-sm">
                                <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">{result}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {filteredTestimonials.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg text-gray-500">No testimonials found for this industry.</p>
                <button 
                  onClick={() => setActiveFilter("All")}
                  className="mt-4 inline-flex items-center text-primary font-medium"
                >
                  <span>View all testimonials</span>
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-white to-surface">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Results That Speak Volumes</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                My solutions deliver measurable impact for businesses across industries. 
                Here's the quantifiable difference I've made for my clients.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { value: 40, suffix: '%', label: 'Average Efficiency Increase' },
                { value: 60, suffix: '%', label: 'Reduced Manual Tasks' },
                { value: 45, suffix: '%', label: 'Increased Customer Engagement' },
                { value: 85, suffix: '%', label: 'Client Satisfaction Rate' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card p-8 text-center"
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
                Let's discuss how my expertise can help solve your challenges and achieve your business goals.
              </p>
              <Link 
                href="/contact" 
                className="btn bg-white text-primary hover:bg-white/90 hover:shadow-xl hover:shadow-black/10"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    </PageTransition>
  );
} 