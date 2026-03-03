'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import TypeWriter from 'typewriter-effect';

const HeroSection = () => (
  <main className="z-10 mt-16 max-w-full md:mt-28 lg:mt-42">
    <div className="flex w-fit flex-col">
      <motion.div
        initial={{ opacity: 0, filter: 'blue(10px)', y: 10 }}
        animate={{ opacity: 1, filter: 'blue(0px)', y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between">
            <p className="text-lg font-semibold text-neutral-800 dark:text-white">
              Shazab Saifi
            </p>
          </div>
          <div className="mt-1 text-neutral-800 dark:text-neutral-300">
            <TypeWriter
              options={{
                strings: ['Frontend Developer', 'Design Engineer'],
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
            Hii, I&apos;m Shazab, A Design-minded Frontend Developer with strong
            expertise in building visually appealing, user-centric interfaces
            and seamless user experiences. Proficient in modern JavaScript,
            React, and responsive design principles, with a keen eye for detail,
            motion, and interaction design. Passionate about translating ideas
            into elegant, performant, and scalable web applications.
          </p>

          <p className="inline-flex items-center gap-1">
            Mostly you&apos;ll find me on
            <Link
              href="https://x.com/shazabsaifi_s9"
              className="underline decoration-green-500 decoration-wavy transition-colors hover:text-black dark:hover:text-white"
            >
              𝕏
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  </main>
);

export default HeroSection;
