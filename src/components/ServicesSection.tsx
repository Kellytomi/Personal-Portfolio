'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesSection(): JSX.Element {
  const services = [
    {
      title: 'Websites & Apps',
      description:
        'I create engaging websites and web apps that are not only beautiful but also fun to use. I focus on the details that make users smile.',
      icon: '🌐',
      gradient: 'from-[#3151B5] to-[#56CCF2]',
      skillsLink: '/skills#web-development',
    },
    {
      title: 'Mobile Experiences',
      description:
        'I build mobile apps that people actually want to use. No clunky interfaces here - just smooth, intuitive experiences that feel natural.',
      icon: '📱',
      gradient: 'from-[#8B5A2B] to-[#FFA500]',
      skillsLink: '/skills#mobile-development',
    },
    {
      title: 'Smart Automation',
      description:
        "I love making computers do boring stuff so humans don't have to. It's like magic, but with code instead of wands.",
      icon: '⚡',
      gradient: 'from-[#9333EA] to-[#EC4899]',
      skillsLink: '/skills#automation-and-integration',
    },
  ];

  return (
    <section className="py-32 bg-white relative">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            My Skills
          </div>
          <h2 className="section-title mb-4">What I Love Building</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Here are the things I'm passionate about creating
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link href={service.skillsLink} key={index} className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="feature-card group h-full cursor-pointer"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-primary/10 group-hover:bg-gradient-to-r ${service.gradient} flex items-center justify-center text-2xl mb-6 transition-all duration-300 group-hover:text-white text-primary`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted mb-4">{service.description}</p>
                <div className="inline-flex items-center text-primary font-medium">
                  Check it out
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 