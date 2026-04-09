'use client';

import { motion } from 'motion/react';

const companies = [
  {
    name: 'Quarlatis',
    image:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1768289276/quarlatis_ag10jp.jpg',
    link: 'https://www.linkedin.com/company/quarlatis/?originalSubdomain=in',
    role: 'Full Stack Intern',
    duration: 'Oct 2025 — Nov 2026',
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
              {/* <Image
                src={company.image}
                alt={company.name}
                width={48}
                height={48}
                className="size-12 shrink-0 rounded-md border border-neutral-200"
              /> */}
              <div className="flex flex-1 flex-col">
                <div className="mt-1 flex max-w-full items-center justify-between gap-2 text-neutral-600 sm:text-base dark:text-neutral-400">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <p className="font-semibold text-neutral-800 dark:text-neutral-100">
                      {company.name} —
                    </p>
                    <p className="text-wrap">{company.role}</p>
                  </div>
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
