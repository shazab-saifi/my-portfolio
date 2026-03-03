'use client';

import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    if (!mounted) return;

    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    if (!document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    document.startViewTransition(() => {
      setTheme(nextTheme);
    });
  };

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="fixed top-4 right-4 z-30 mx-auto flex cursor-pointer items-center justify-center rounded-full border border-neutral-200 bg-white/50 p-2 shadow-md backdrop-blur-md focus:outline-none dark:border-neutral-800 dark:bg-neutral-950/50"
      >
        <IconMoon className="h-5 w-5 text-neutral-950 dark:text-neutral-100" />
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={handleToggle}
      className="fixed top-4 right-4 z-30 mx-auto flex cursor-pointer items-center justify-center rounded-full border border-neutral-200 bg-white/50 p-2 shadow-md backdrop-blur-md focus:outline-none dark:border-neutral-800 dark:bg-neutral-950/50"
    >
      {isDark ? (
        <IconSun className="h-6 w-6 text-neutral-950 dark:text-neutral-100" />
      ) : (
        <IconMoon className="h-5 w-5 text-neutral-950 dark:text-neutral-100" />
      )}
    </button>
  );
};

export default ThemeToggle;
