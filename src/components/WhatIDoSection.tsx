'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Lazy load the FeaturesSectionDemo for performance
const FeaturesSectionDemo = dynamic(() => import('@/components/ui/features-section'), {
  loading: () => <div className="animate-pulse bg-gray-200 rounded-lg h-96" />,
  ssr: false,
});

export default function WhatIDoSection(): JSX.Element {
  return (
    <section className="py-20 relative bg-white">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            What I Do
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Things I'm good at</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FeaturesSectionDemo />
        </motion.div>
      </div>
    </section>
  );
} 