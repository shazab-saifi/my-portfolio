'use client';

import { IconSun } from '@tabler/icons-react';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('dark');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const shouldBeDark = stored ? JSON.parse(stored) : prefersDark;

    document.documentElement.classList.toggle('dark', shouldBeDark);
    setIsDark(shouldBeDark);
  }, []);

  const handleToggle = () => {
    const next = !isDark;

    if (!document.startViewTransition) {
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('dark', JSON.stringify(next));
      setIsDark(next);
      return;
    }

    document.startViewTransition(() => {
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('dark', JSON.stringify(next));
      setIsDark(next);
    });
  };

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={handleToggle}
      className="fixed top-4 right-4 mx-auto flex items-center justify-center rounded-full border border-neutral-200 bg-white/50 p-2 shadow-md backdrop-blur-md focus:outline-none dark:border-neutral-800 dark:bg-neutral-950/50"
    >
      <IconSun className="h-6 w-6 text-neutral-950 dark:text-neutral-100" />
    </button>
  );
};

export default ThemeToggle;
