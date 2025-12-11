'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Lazy load the BackgroundGradient for performance
const BackgroundGradient = dynamic(
  () =>
    import('@/components/ui/background-gradient').then((mod) => ({
      default: mod.BackgroundGradient,
    })),
  {
    loading: () => <div className="animate-pulse bg-gray-200 rounded-lg h-48" />,
    ssr: false,
  }
);

export default function PersonalStorySection(): JSX.Element {
  return (
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
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              My Story
            </div>
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
                  src="/about-me.jpg"
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
              <BackgroundGradient className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">👨‍💻</span>
                  <h3 className="text-xl font-bold">The Dev Journey</h3>
                </div>
                <p className="text-muted">
                  I'm Kelvin, a self-taught developer with a passion for creating digital experiences
                  that make people smile. I started coding when I was 14, building simple games and
                  websites for fun.
                </p>
              </BackgroundGradient>

              <BackgroundGradient className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🛠️</span>
                  <h3 className="text-xl font-bold">What Drives Me</h3>
                </div>
                <p className="text-muted">
                  These days, I love combining creativity with technology to build things that solve
                  real problems. Whether it's a sleek mobile app, an intuitive website, or a clever
                  automation tool, I'm happiest when I'm making something that helps people.
                </p>
              </BackgroundGradient>

              <BackgroundGradient className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🏐</span>
                  <h3 className="text-xl font-bold">Outside the Code</h3>
                </div>
                <p className="text-muted">
                  When I'm not in front of my computer, I'm probably spiking at the local volleyball
                  court, trying to perfect my pasta carbonara recipe, or binge-watching sci-fi shows
                  with my dog, Buddy.
                </p>
              </BackgroundGradient>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mt-8"
          >
            <a href="#contact" className="btn btn-primary">
              Let's connect
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 