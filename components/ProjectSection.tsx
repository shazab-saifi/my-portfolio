'use client';

import { IconArrowUpRight, IconBrandGithub } from '@tabler/icons-react';
import { motion } from 'motion/react';
import Badge from './Badge';
import { useTheme } from 'next-themes';

interface Projects {
  name: string;
  previewVideo?: string;
  description: string;
  url: string;
  techStack: string[];
  githubLink?: string;
  inDevelopment?: boolean;
}

const projects: Projects[] = [
  {
    name: 'Quartz UI',
    previewVideo:
      'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1771162566/quartzui_xzwwdg.mp4',
    description:
      'Quartz UI is a modern animated UI library for Next.js, with easy integration and a CLI for adding components.',
    url: 'https://quartzui.shazab.site',
    githubLink: 'https://github.com/shazab-saifi/quartzui',
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
    previewVideo:
      'https://res.cloudinary.com/dlpjh3fcx/video/upload/v1771162714/pixory_ij9myc.mp4',
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
  // {
  //   name: 'Periskope Assignment',
  //   image:
  //     'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1768289584/periskopeLogo_okapfh.png',
  //   description:
  //     'A real-time group chat app built for a Periskope internship assignment. Users can create rooms and chat instantly.',
  //   url: 'https://periskope.shazab.site',
  //   githubLink: 'https://github.com/shazab-saifi/periskopeassignment',
  //   techStack: ['React.js', 'Next.js', 'Tailwind.css', 'Supabase realtime db'],
  // },
];

const ProjectSection = () => {
  const { theme } = useTheme();

  return (
    <div className="mb-24 flex flex-col gap-8 md:mb-32">
      <motion.div
        initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.3, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-lg font-semibold text-neutral-800 dark:text-white">
          Things I’ve Built
        </h1>
      </motion.div>

      <div className="flex flex-col gap-12">
        {projects.map((project, idx) => (
          <motion.div
            initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.3, delay: 0.7 }}
            viewport={{ once: true }}
            key={idx}
            className="space-y-4"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex flex-1 flex-col">
                <div className="flex items-center justify-between">
                  {project.url && (
                    <>
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
                    </>
                  )}
                </div>
                <p className="mt-1 max-w-full text-sm text-wrap text-neutral-600 sm:text-base dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <a
                    target="_blank"
                    href={project.githubLink}
                    className="flex w-fit items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm font-semibold text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-800 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-100"
                  >
                    <IconBrandGithub size={16} />
                    Code
                  </a>
                  <a
                    target="_blank"
                    href={project.url}
                    className="flex w-fit items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-semibold text-neutral-600 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-100"
                  >
                    Visit
                    <IconArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
            <video
              src={project.previewVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="aspect-video w-full rounded-xl border border-neutral-100 object-cover md:rounded-2xl dark:border-neutral-800"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
