'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const SkillsSection = () => {
  const skills = [
    {
      title: 'JavaScript',
      logo: 'https://www.svgrepo.com/show/303206/javascript-logo.svg',
    },
    {
      title: 'TypeScript',
      logo: 'https://www.svgrepo.com/show/374146/typescript-official.svg',
    },
    {
      title: 'React.js',
      logo: 'https://www.svgrepo.com/show/374032/reactjs.svg',
    },
    {
      title: 'Next.js',
      logo: 'https://cdn.brandfetch.io/id2alue-rx/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    },
    // {
    //   title: 'React Native',
    //   logo: 'https://cdn.brandfetch.io/idTpJSSBPD/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    // },
    {
      title: 'Tailwindcss',
      logo: 'https://www.svgrepo.com/show/354431/tailwindcss-icon.svg',
    },
    { title: 'Figma', logo: 'https://www.svgrepo.com/show/452202/figma.svg' },
    {
      title: 'Motion',
      logo: 'https://cdn.brandfetch.io/idDJv1mfrb/theme/light/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    },
    {
      title: 'Node.js',
      logo: 'https://cdn.brandfetch.io/id7JRtQEAa/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    },
    {
      title: 'Express.js',
      logo: 'https://www.svgrepo.com/show/452075/node-js.svg',
    },
    {
      title: 'Mongodb',
      logo: 'https://www.svgrepo.com/show/331488/mongodb.svg',
    },
    {
      title: 'Postgresql',
      logo: 'https://www.svgrepo.com/show/354200/postgresql.svg',
    },
    {
      title: 'Prisma',
      logo: 'https://cdn.brandfetch.io/idBBE3_R9e/theme/light/idJ9Tiato-.svg?c=1dxbfHSJFAPEGdCLU4o5B',
    },
  ];

  return (
    <div className="flex w-full max-w-2xl flex-col gap-8">
      <motion.div
        initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="font-geist-mono font-semibold text-neutral-800 dark:text-white">
          Skills
        </h1>
        <p className="font-geist-mono mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          Technologies and tools I&apos;m good at
        </p>
      </motion.div>
      <div className="grid max-w-full grid-cols-2 gap-4 sm:grid-cols-3">
        {skills.map((skill, idx) => (
          <motion.span
            initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
            key={idx}
            className="flex w-fit items-center gap-2 rounded-md border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-sm text-neutral-800 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
          >
            <Image
              src={skill.logo}
              alt={`${skill.title} logo`}
              width={18}
              height={18}
              className="h-[18px] w-[18px] object-contain"
            />
            <span>{skill.title}</span>
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
