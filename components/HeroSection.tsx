'use client';

import Link from 'next/link';
import Badge from './Badge';
import { motion } from 'motion/react';

const HeroSection = () => (
  <main className="mt-16 max-w-full md:mt-28">
    <div className="flex w-fit flex-col">
      <motion.div
        initial={{ opacity: 0, filter: 'blue(10px)', y: 10 }}
        animate={{ opacity: 1, filter: 'blue(0px)', y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between">
            <p className="text-lg font-semibold text-neutral-800 md:text-xl dark:text-white">
              Shazab Saifi
            </p>
          </div>
          <p className="text-neutral-800 dark:text-neutral-300">
            Design engineer
          </p>
          <Badge
            variant="info"
            textShimmer
            baseColor="var(--color-blue-600)"
            shimmerColor="var(--color-white)"
            className="mt-2 w-fit sm:hidden dark:bg-blue-900/50"
          >
            Available For Work
          </Badge>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, filter: 'blue(10px)', y: 10 }}
        animate={{ opacity: 1, filter: 'blue(0px)', y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="mt-10 max-w-2xl"
      >
        <div className="space-y-2 font-medium text-neutral-800 dark:text-neutral-300">
          <p>
            Hi, I&apos;m Shazab Saifi, a passionate Design engineer. I can
            design user interfaces and turn them into real life products. I love
            bridging the gap between beautiful design and robust code, and I
            enjoy solving problems that make digital experiences more delightful
            and accessible.
          </p>
          <p>
            I find designing and engineering to be a form of art. And I like
            art.
          </p>
          <p className="flex items-center gap-1">
            Wrapped up web3 products as a full-stack intern at
            <Link
              href="https://www.linkedin.com/company/quarlatis/?originalSubdomain=in"
              className="underline decoration-sky-500 decoration-wavy transition-colors hover:text-black dark:hover:text-white"
            >
              Quarlatis
            </Link>
          </p>
          <p className="inline-flex items-center gap-1">
            Mostly you&apos;ll find me on
            <Link
              href="https://x.com/shazabsaifi_s9"
              className="underline decoration-sky-500 decoration-wavy transition-colors hover:text-black dark:hover:text-white"
            >
              Twitter
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  </main>
);

export default HeroSection;
