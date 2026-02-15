'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import TypeWriter from 'typewriter-effect';

const HeroSection = () => (
  <main className="z-10 mt-16 max-w-full md:mt-28">
    <div className="flex w-fit flex-col">
      <motion.div
        initial={{ opacity: 0, filter: 'blue(10px)', y: 10 }}
        animate={{ opacity: 1, filter: 'blue(0px)', y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between">
            <p className="font-geist-mono text-lg font-semibold text-neutral-800 dark:text-white">
              Shazab Saifi
            </p>
          </div>
          <div className="font-geist-mono mt-1 text-neutral-800 dark:text-neutral-300">
            <TypeWriter
              options={{
                strings: ['Design engineer', 'Full stack developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, filter: 'blue(10px)', y: 10 }}
        animate={{ opacity: 1, filter: 'blue(0px)', y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="mt-10 max-w-2xl"
      >
        <div className="space-y-2 leading-7 font-medium text-neutral-800 dark:text-neutral-300">
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

          <p className="inline-flex items-center gap-1">
            Mostly you&apos;ll find me on
            <Link
              href="https://x.com/shazabsaifi_s9"
              className="underline decoration-sky-500 decoration-wavy transition-colors hover:text-black dark:hover:text-white"
            >
              𝕏 (Formerly Twitter)
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  </main>
);

export default HeroSection;
