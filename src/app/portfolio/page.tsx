"use client";

import Navigation from '@/components/Navigation';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio(): JSX.Element {
  const portfolioItems = [
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with React, Next.js, and other cutting-edge technologies.",
      image: "/projects/project1.jpg",
      tags: ["React", "Next.js", "TailwindCSS", "API Integration"]
    },
    {
      title: "Mobile Applications",
      description: "Cross-platform mobile applications that deliver seamless experiences across devices.",
      image: "/projects/project2.jpg",
      tags: ["React Native", "Flutter", "Mobile Design", "Cross-platform"]
    },
    {
      title: "Workflow Automation",
      description: "Custom automation solutions that streamline business processes and increase productivity.",
      image: "/projects/project3.jpg",
      tags: ["Python", "Node.js", "API Integration", "Process Optimization"]
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and engaging user interfaces that prioritize user experience and conversion.",
      image: "/projects/project4.jpg",
      tags: ["Figma", "User Research", "Wireframing", "Prototyping"]
    },
    {
      title: "E-commerce Solutions",
      description: "End-to-end e-commerce platforms with secure payment processing and inventory management.",
      image: "/projects/project5.jpg",
      tags: ["Shopify", "WooCommerce", "Payment Integration", "Inventory Management"]
    },
    {
      title: "Data Visualization",
      description: "Interactive dashboards and data visualization tools that transform complex data into actionable insights.",
      image: "/projects/project6.jpg",
      tags: ["D3.js", "Chart.js", "Data Analysis", "Interactive Dashboards"]
    }
  ];
  
  return (
    <PageTransition>
      <main className="min-h-screen bg-surface">
        <Navigation />
        
        <section className="pt-32 pb-20">
          <div className="container max-w-6xl mx-auto">
            {/* Page Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                My Portfolio
              </h1>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                A showcase of my work as a Full-Stack Developer & Workflow Automation Specialist
              </p>
            </motion.div>
            
            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card overflow-hidden group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href="/projects" 
                      className="inline-flex items-center text-primary font-medium"
                    >
                      See details
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-20 text-center"
            >
              <div className="bg-black text-white p-8 md:p-12 rounded-xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to work together?
                </h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  Let's create something amazing! Whether you have a project in mind or just want to discuss possibilities, I'm here to help.
                </p>
                <Link 
                  href="/contact" 
                  className="btn bg-white text-black hover:bg-gray-100 py-3 px-8 text-lg inline-block"
                >
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