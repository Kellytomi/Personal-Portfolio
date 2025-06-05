'use client';

import { motion } from 'framer-motion';

export default function HowIWorkSection(): JSX.Element {
  const workProcess = [
    {
      step: 1,
      title: 'Chat & Brainstorm',
      description:
        "Let's grab a (virtual) coffee and talk about your ideas. The best solutions start with great conversations.",
    },
    {
      step: 2,
      title: 'Sketch & Prototype',
      description:
        "I'll create some mockups we can play with. It's like test-driving a car before buying it.",
    },
    {
      step: 3,
      title: 'Build & Launch',
      description:
        "I'll bring our ideas to life with code, keeping you in the loop. Then we celebrate when it goes live!",
    },
  ];

  return (
    <section className="py-32 bg-surface relative">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            My Approach
          </div>
          <h2 className="section-title mb-4">How I Like to Work</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            My approach is all about keeping things fun, collaborative, and focused on what matters
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {workProcess.map((process, index) => (
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
  );
} 