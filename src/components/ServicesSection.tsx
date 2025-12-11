'use client';

import { motion } from 'framer-motion';
import { Sticker, WashiTape, PaperBackground, CutoutLetters } from '@/components/scrapbook';

export default function ServicesSection(): JSX.Element {
  const services = [
    {
      title: 'Websites & Web Apps',
      description:
        'I create engaging websites and web apps that are not only beautiful but also fun to use. From landing pages to complex platforms.',
      icon: '🌐',
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-300',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    },
    {
      title: 'Mobile Apps',
      description:
        'I build mobile apps that people actually want to use. Smooth, intuitive experiences that feel natural on iOS and Android.',
      icon: '📱',
      bgColor: 'bg-orange-100',
      borderColor: 'border-orange-300',
      technologies: ['Flutter', 'React Native', 'Firebase'],
    },
    {
      title: 'Automation & Integration',
      description:
        "I love making computers do boring stuff so humans don't have to. Connecting systems and automating workflows.",
      icon: '⚡',
      bgColor: 'bg-purple-100',
      borderColor: 'border-purple-300',
      technologies: ['Zapier', 'Make.com', 'Node.js', 'APIs'],
    },
  ];

  const stickerVariants: Array<'star' | 'sparkle' | 'lightning'> = ['star', 'sparkle', 'lightning'];
  const stickerColors: Array<'mustard' | 'lavender' | 'coral'> = ['mustard', 'lavender', 'coral'];

  return (
    <PaperBackground variant="kraft" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-16 right-16 z-20 hidden md:block">
        <Sticker variant="star" size="lg" color="mustard" rotation={-10} />
      </div>
      <div className="absolute bottom-24 left-12 z-20 hidden lg:block">
        <Sticker variant="heart" size="md" color="coral" rotation={15} />
      </div>
      <div className="absolute top-1/3 left-8 z-10 hidden lg:block">
        <WashiTape color="pink" pattern="stripe" width="lg" rotation={-80} />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-scrapbook-cream border-2 border-dashed border-scrapbook-kraft-dark rounded-lg font-handwriting text-lg mb-4 shadow-sm transform rotate-1">
            💼 What I Do
          </div>
          <h2 className="mb-4">
            <CutoutLetters text="Skills & Services" size="lg" colorScheme="cool" />
          </h2>
          <p className="font-sketch text-lg text-gray-700 max-w-2xl mx-auto">
            Here's what I bring to the table when working on projects ✨
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -2 : 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -top-3 -right-3 z-10">
                <Sticker variant={stickerVariants[index]} size="sm" color={stickerColors[index]} rotation={10 + index * 5} />
              </div>

              <div
                className={`
                  relative ${service.bgColor} p-6 rounded-lg shadow-md
                  border-2 border-dashed ${service.borderColor}
                  transition-all duration-300 h-full
                  hover:shadow-lg hover:-translate-y-1 hover:rotate-0
                `}
                style={{ boxShadow: '4px 4px 12px rgba(0,0,0,0.1)' }}
              >
                <div className="absolute -top-3 left-1/4">
                  <WashiTape
                    color={index === 0 ? 'blue' : index === 1 ? 'coral' : 'lavender'}
                    width="sm"
                    rotation={index % 2 === 0 ? -5 : 5}
                  />
              </div>

                <div className="text-5xl mb-4 pt-2">{service.icon}</div>

                <h3 className="font-handwriting text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>

                <p className="font-sketch text-gray-700 mb-5">{service.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, i) => (
                  <span
                    key={i}
                      className="px-2 py-1 bg-white/60 border border-gray-300 rounded text-xs font-sketch text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PaperBackground>
  );
} 