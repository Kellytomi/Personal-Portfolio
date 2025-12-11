'use client';

import { motion } from 'framer-motion';
import { PaperCard } from '@/components/ui/PaperCard';
import { Sticker } from '@/components/ui/Sticker';
import { TextureOverlay } from '@/components/ui/TextureOverlay';

export default function ServicesSection(): JSX.Element {
  const services = [
    {
      title: 'Websites & Web Apps',
      description:
        'I create engaging websites and web apps that are not only beautiful but also fun to use. From landing pages to complex platforms.',
      icon: '🌐',
      tone: 'yellow',
      rotation: -1.2,
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Mobile Apps',
      description:
        'I build mobile apps that people actually want to use. Smooth, intuitive experiences that feel natural on iOS and Android.',
      icon: '📱',
      tone: 'teal',
      rotation: 1.4,
      technologies: ['Flutter', 'React Native', 'Firebase'],
    },
    {
      title: 'Automation & Integration',
      description:
        "I love making computers do boring stuff so humans don't have to. Connecting systems and automating workflows.",
      icon: '⚡',
      tone: 'coral',
      rotation: -0.6,
      technologies: ['Zapier', 'Make.com', 'Node.js', 'APIs'],
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <TextureOverlay opacity={0.55} className="absolute inset-0">
        <div className="absolute top-8 left-4 w-36 h-10 bg-[url(/textures/washi-yellow.svg)] bg-cover rotate-[-10deg] opacity-85" />
        <div className="absolute bottom-10 right-6 w-40 h-10 bg-[url(/textures/washi-teal.svg)] bg-cover rotate-[9deg] opacity-85" />
      </TextureOverlay>
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Sticker tone="yellow" variant="badge">
            What I Do
          </Sticker>
          <h2 className="section-title mb-4 text-primary mt-4">Skills & Services</h2>
          <p className="section-subtitle max-w-2xl mx-auto text-muted">
            A mix of product thinking, delightful UI, and dependable engineering—assembled like a curated board of what I love to build.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <PaperCard withTape rotation={service.rotation} tone={service.tone === 'teal' ? 'teal' : 'cream'} className="h-full">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                    <p className="text-sm text-muted mt-1">Signature offer</p>
                  </div>
                </div>
                <p className="text-muted mb-5">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, i) => (
                    <Sticker key={i} variant="label" tone="cream" className="normal-case tracking-normal">
                      {tech}
                    </Sticker>
                  ))}
                </div>
              </PaperCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 