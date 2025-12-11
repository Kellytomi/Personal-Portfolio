'use client';

import { motion } from 'framer-motion';

export default function ServicesSection(): JSX.Element {
  const services = [
    {
      title: 'Websites & Web Apps',
      description:
        'I create engaging websites and web apps that are not only beautiful but also fun to use. From landing pages to complex platforms.',
      icon: '🌐',
      gradient: 'from-[#3151B5] to-[#56CCF2]',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Mobile Apps',
      description:
        'I build mobile apps that people actually want to use. Smooth, intuitive experiences that feel natural on iOS and Android.',
      icon: '📱',
      gradient: 'from-[#8B5A2B] to-[#FFA500]',
      technologies: ['Flutter', 'React Native', 'Firebase'],
    },
    {
      title: 'Automation & Integration',
      description:
        "I love making computers do boring stuff so humans don't have to. Connecting systems and automating workflows.",
      icon: '⚡',
      gradient: 'from-[#9333EA] to-[#EC4899]',
      technologies: ['Zapier', 'Make.com', 'Node.js', 'APIs'],
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            What I Do
          </div>
          <h2 className="section-title mb-4">Skills & Services</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Here's what I bring to the table when working on projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card group h-full"
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-2xl mb-6 shadow-lg`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted mb-5">{service.description}</p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 