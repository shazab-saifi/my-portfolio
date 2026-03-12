'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import TypeWriter from 'typewriter-effect';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from '@tabler/icons-react';

const HeroSection = () => (
  <main className="z-10 mt-16 max-w-full md:mt-28 lg:mt-42">
    <div className="flex w-fit flex-col">
      <motion.div
        initial={{ opacity: 0, filter: 'blue(10px)', y: 10 }}
        animate={{ opacity: 1, filter: 'blue(0px)', y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-3xl font-semibold text-wrap text-neutral-950 md:text-5xl dark:text-neutral-100">
              Shazab <br />
              Saifi
            </p>
          </div>
          <div className="mt-1 font-medium text-neutral-800 md:text-lg dark:text-neutral-400">
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
              className="underline decoration-rose-500 decoration-wavy transition-colors hover:text-black dark:hover:text-white"
            >
              𝕏
            </Link>
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, filter: 'blue(10px)', y: 10 }}
        animate={{ opacity: 1, filter: 'blue(0px)', y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="mt-8"
      >
        <Socials />
      </motion.div>
    </div>
  </main>
);

const Socials = () => {
  const LINKS = [
    {
      title: 'Twitter',
      href: 'https://x.com/shazabsaifi_s9',
      icon: IconBrandX,
    },
    {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/in/shazab-saifi-85a207338/',
      icon: IconBrandLinkedin,
    },
    {
      title: 'Github',
      href: 'https://github.com/shazab-saifi',
      icon: IconBrandGithub,
    },
    {
      title: 'Email',
      href: 'https://mail.google.com/mail/?view=cm&to=shazabdev@gmail.com',
      isEmail: true,
      icon: IconMail,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {LINKS.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.title}
            className="rounded-lg border border-neutral-200 bg-neutral-100 p-2 text-neutral-950 transition-all hover:bg-rose-500 hover:text-neutral-100 active:scale-105 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
          >
            <Icon size={18} stroke={1.8} />
          </a>
        );
      })}
    </div>
  );
};

export default HeroSection;
