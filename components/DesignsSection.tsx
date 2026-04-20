'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { IconArrowUpRight, IconExternalLink } from '@tabler/icons-react';

const DesignsSection = () => {
  return (
    <div>
      <motion.div
        initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.3, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h1 className="text-lg font-semibold text-neutral-800 dark:text-white">
          My Designs
        </h1>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.notion.so/Shazab-s-designs-32325654690f8086815ffbe293e138e6?source=copy_link"
          className="mt-8 flex w-fit items-center font-semibold hover:underline"
        >
          <Image
            src="https://cdn.brandfetch.io/idZHcZ_i7F/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
            width={12}
            height={12}
            alt="fignam-logo"
          />
          <p className="ml-2">Figma</p>
          <IconArrowUpRight className="mt-0.5 ml-0.5 size-4" />
        </Link>
      </motion.div>
    </div>
  );
};

export default DesignsSection;
