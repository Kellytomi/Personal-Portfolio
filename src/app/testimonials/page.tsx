"use client";

import Navigation from '@/components/Navigation';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import CountUp from '@/components/CountUp';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';
import AnimatedTestimonialsDemo from '@/components/animated-testimonials-demo';
import { HoverEffect } from '@/components/ui/card-hover-effect';

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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary mb-6">
                <span className="text-sm font-medium">Client Success Stories</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight gradient-text">
                Client<br />Testimonials
              </h1>
              <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                Real results from real clients. Discover how my solutions have transformed businesses across industries.
              </p>
            </motion.div>

            {/* Featured Testimonial Carousel - New Animated Version */}
            <AnimatedTestimonialsDemo />
            
            {/* Industry Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-4">
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
        <section className="pt-4 pb-8 bg-white">
          <div className="container">
            <HoverEffect items={filteredTestimonials.map(testimonial => ({
              title: `${testimonial.name}`,
              description: `${testimonial.role} at ${testimonial.company}\n\n"${testimonial.quote}"\n\n📊 Key Results:\n• ${testimonial.results?.slice(0, 2).join('\n• ') || 'Outstanding project outcomes'}`
            }))} />
            
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  Let's discuss how my expertise can help solve your challenges and achieve your business goals.
                </p>
                <Link 
                  href="/contact" 
                  className="btn bg-white text-primary hover:bg-gray-100 py-3 px-8 text-lg inline-block"
                >
                  Get in Touch
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