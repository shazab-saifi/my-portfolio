'use client';

import { IconExternalLink } from '@tabler/icons-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const companies = [
  {
    name: 'Quarlatis',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1768289276/quarlatis_ag10jp.jpg',
    link: 'https://www.linkedin.com/company/quarlatis/?originalSubdomain=in',
    role: 'Full-stack intern',
    duration: 'Oct 2025 — Nov 2025',
  },
];

const Experience = () => {
  return (
    <div className="flex flex-col gap-8">
      <motion.div
        initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="font-geist-mono font-semibold text-neutral-800 dark:text-white">
          Experience
        </h1>
        <p className="font-geist-mono mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          Companies and startups I&apos;ve worked at
        </p>
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
            <div className="flex flex-row items-start gap-4">
              <Image
                src={company.image}
                alt={company.name}
                width={48}
                height={48}
                className="size-12 shrink-0"
              />
              <div className="flex flex-1 flex-col">
                <div className="flex items-center justify-between">
                  <div className="">
                    <Link
                      href={company.link}
                      className="group flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="font-semibold text-neutral-800 dark:text-white">
                        {company.name}
                      </h3>
                      <IconExternalLink
                        size={16}
                        className="transition-opacity group-hover:opacity-100 md:opacity-0"
                      />
                    </Link>
                  </div>
                </div>
                <div className="mt-1 flex max-w-full items-center gap-2 text-sm text-neutral-600 sm:text-base dark:text-neutral-400">
                  <p className="text-wrap">{company.role},</p>
                  <p>{company.duration}</p>
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
