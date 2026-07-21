'use client';

import { IconArrowUpRight } from '@tabler/icons-react';
import { motion } from 'motion/react';

const companies = [
  {
    name: 'Quarlatis LLP',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1768289276/quarlatis_ag10jp.jpg',
    link: 'https://www.linkedin.com/company/quarlatis/?originalSubdomain=in',
    role: 'Full Stack Intern',
    duration: 'Oct 2025 — Nov 2025',
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col gap-8">
      <motion.div
        initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.3, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h1 className="text-lg font-semibold text-neutral-800 dark:text-white">
          Where I’ve Worked
        </h1>
      </motion.div>
      <div className="flex flex-col gap-12">
        {companies.map((company, idx) => (
          <motion.div
            initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: true }}
            key={idx}
            className="space-y-4"
          >
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-1 flex-col">
                <div className="mt-1 flex max-w-full items-center justify-between gap-2 text-neutral-600 sm:text-base dark:text-neutral-400">
                  <a
                    href={company.link}
                    target="_blank"
                    rel="external noopener noreferrer"
                    className="group flex items-center overflow-hidden hover:gap-1"
                  >
                    <IconArrowUpRight
                      className="-translate-x-full translate-y-full text-neutral-950 transition-transform duration-100 ease-out group-hover:translate-x-0 group-hover:translate-y-0 dark:text-neutral-100"
                      size={24}
                    />
                    <div className="flex -translate-x-6 flex-col transition-transform duration-150 ease-out group-hover:translate-x-0 sm:flex-row sm:items-center">
                      <p className="flex items-center font-semibold text-neutral-800 underline md:no-underline md:group-hover:underline dark:text-neutral-100">
                        {company.name}
                      </p>
                      <span className="mx-2 font-semibold text-neutral-800 dark:text-neutral-100">
                        —
                      </span>
                      <p className="text-wrap">{company.role}</p>
                    </div>
                  </a>
                  <p className="text-sm">{company.duration}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
