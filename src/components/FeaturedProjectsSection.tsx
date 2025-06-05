'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Lazy load the 3D pin components for performance
const PinContainer = dynamic(
  () => import('@/components/ui/3d-pin').then((mod) => ({ default: mod.PinContainer })),
  {
    loading: () => <div className="animate-pulse bg-gray-200 rounded-lg h-64" />,
    ssr: false,
  }
);

const PinProvider = dynamic(
  () => import('@/components/ui/3d-pin').then((mod) => ({ default: mod.PinProvider })),
  {
    loading: () => <div className="animate-pulse bg-gray-200 rounded-lg h-64" />,
    ssr: false,
  }
);

export default function FeaturedProjectsSection(): JSX.Element {
  const featuredProjects = [
    {
      id: 'featured-project-1',
      title: 'Recipe Finder App',
      description: 'A mobile app that helps you find recipes based on ingredients you already have',
      tag: 'Personal Favorite',
      tagColor: 'bg-primary/20 text-primary',
      gradient: 'from-violet-500 via-purple-500 to-blue-500',
      image: '/project1.jpg',
    },
    {
      id: 'featured-project-2',
      title: 'Volleyball Stats Tracker',
      description: 'A web app I built to track my volleyball game stats with friends',
      tag: 'Fun Project',
      tagColor: 'bg-secondary/20 text-secondary',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      image: '/project2.jpg',
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
            My Projects
          </div>
          <h2 className="section-title mb-4">Stuff I've Built</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Here are some of my favorite projects I've worked on recently
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-20">
          <PinProvider>
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PinContainer
                  title="View Project"
                  href="/projects"
                  containerClassName="h-[22rem] w-[18rem] md:h-[25rem] md:w-[20rem]"
                  id={project.id}
                >
                  <div className="flex basis-full flex-col p-3 md:p-4 tracking-tight text-gray-600 w-[18rem] md:w-[20rem] h-[18rem] md:h-[20rem]">
                    <h3 className="max-w-xs !pb-1 md:!pb-2 !m-0 font-bold text-sm md:text-base text-gray-900">
                      {project.title}
                    </h3>
                    <div className="text-sm md:text-base !m-0 !p-0 font-normal">
                      <span className="text-gray-600">{project.description}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-3 md:mt-4 mb-3 md:mb-4">
                      <span className={`px-2 md:px-3 py-1 ${project.tagColor} text-xs rounded-full`}>
                        {project.tag}
                      </span>
                    </div>
                    <div
                      className={`flex flex-1 w-full rounded-lg mt-2 md:mt-4 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-70"
                        style={{ backgroundImage: `url('${project.image}')` }}
                      ></div>
                    </div>
                  </div>
                </PinContainer>
              </motion.div>
            ))}
          </PinProvider>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-12"
        >
          <Link href="/projects" className="btn btn-primary">
            See all my projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 