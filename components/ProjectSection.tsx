'use client';

import { IconExternalLink, IconBrandGithub } from '@tabler/icons-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Badge from './Badge';
import { useTheme } from 'next-themes';

interface Projects {
  name: string;
  image: string;
  description: string;
  url: string;
  techStack: string[];
  githubLink?: string;
  inDevelopment?: boolean;
}

const projects: Projects[] = [
  {
    name: 'Quartz UI',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1759296296/quartzui-light_ytrk9a.svg',
    description:
      'Quartz UI is a modern animated UI library for Next.js, with easy integration and a CLI for adding components.',
    url: 'https://quartzui.shazab.site',
    techStack: [
      'React.js',
      'Next.js',
      'Tailwind.css',
      'Motion.dev',
      'Storybook.js',
    ],
  },
  {
    name: 'Pixory',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1768289602/pixoryIcon_pjkima.png',
    description:
      'Pixory is a modern platform to explore, download, and share high-quality photos and videos. Features include search, authentication, and personalized collections.',
    url: 'https://pixory.shazab.site',
    githubLink: 'https://github.com/shazab-saifi/Pixory',
    techStack: [
      'React.js',
      'Next.js',
      'Zustand',
      'Tailwind.css',
      'React query',
      'Prisma',
      'neon.tech',
    ],
  },
  {
    name: 'Periskope Assignment',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1768289584/periskopeLogo_okapfh.png',
    description:
      'A real-time group chat app built for a Periskope internship assignment. Users can create rooms and chat instantly.',
    url: 'https://periskope.shazab.site',
    githubLink: 'https://github.com/shazab-saifi/periskopeassignment',
    techStack: ['React.js', 'Next.js', 'Tailwind.css', 'Supabase realtime db'],
  },
];

const ProjectSection = () => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-6">
      <motion.h1
        initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg font-semibold text-neutral-800 md:text-xl dark:text-white"
      >
        Projects
      </motion.h1>
      <div className="flex flex-col gap-12">
        {projects.map((project, idx) => (
          <motion.div
            initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            key={idx}
            className="space-y-4"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <Image
                src={project.image}
                alt={project.name}
                width={48}
                height={48}
                className="size-12 flex-shrink-0"
              />
              <div className="flex flex-1 flex-col">
                <div className="flex items-center justify-between">
                  <div
                    className={`group flex items-center gap-2 ${
                      project.inDevelopment ? '' : 'cursor-pointer'
                    }`}
                  >
                    <h3 className="font-semibold text-neutral-800 dark:text-white">
                      {project.name}
                    </h3>
                    {project.inDevelopment && (
                      <Badge
                        variant="default"
                        textShimmer
                        className="ml-2"
                        baseColor={theme === 'dark' ? '#fff' : '#000'}
                        shimmerColor={theme === 'dark' ? '#000' : '#fff'}
                      >
                        In Development
                      </Badge>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        className="flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconExternalLink
                          size={16}
                          className="transition-opacity group-hover:opacity-100 md:opacity-0"
                        />
                      </a>
                    )}
                  </div>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-fit items-center"
                    >
                      <IconBrandGithub className="text-neutral-800 sm:size-5 dark:text-white" />
                    </a>
                  )}
                </div>
                <p className="mt-1 max-w-full text-sm text-wrap text-neutral-600 sm:text-base dark:text-neutral-400">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
