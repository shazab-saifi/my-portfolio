'use client';

import { IconExternalLink } from '@tabler/icons-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const Experience = () => {
  const companies = [
    {
      name: 'Quarlatis',
      image:
        'https://media.licdn.com/dms/image/v2/D560BAQFRdrIZue68hA/company-logo_200_200/B56Zcq041lHoAM-/0/1748770197624?e=1767225600&v=beta&t=mY8j_XpexaUa8DfAYpJVref9pMruRbV6EvZx39uMqWA',
      link: 'https://www.linkedin.com/company/quarlatis/?originalSubdomain=in',
      role: 'Full-stack intern, Sep 2024 to Nov 2025',
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <motion.h1
        initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg font-semibold text-neutral-800 md:text-xl dark:text-white"
      >
        Experience
      </motion.h1>
      <div className="flex flex-col gap-12">
        {companies.map((company, idx) => (
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
                src={company.image}
                alt={company.name}
                width={48}
                height={48}
                className="size-12 flex-shrink-0"
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
                <p className="mt-1 max-w-full text-sm text-wrap text-neutral-600 sm:text-base dark:text-neutral-400">
                  {company.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
