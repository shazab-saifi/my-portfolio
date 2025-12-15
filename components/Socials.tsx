const Socials = () => {
  const LINKS = [
    {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/in/shazab-saifi-85a207338/',
    },
    {
      title: 'Twitter',
      href: 'https://x.com/shazabsaifi_s9',
    },
    {
      title: 'Github',
      href: 'https://github.com/shazab-saifi',
    },
    {
      title: 'Email',
      href: 'https://mail.google.com/mail/?view=cm&to=shazabdev@gmail.com',
      isEmail: true,
    },
    {
      title: 'Toggle theme',
      isTheme: true,
    },
  ];

  return (
    <div className="mx-auto mb-12 flex gap-12 md:mb-16">
      {LINKS.filter((link) => !link.isTheme).map((link, idx) => (
        <a
          key={link.title}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-neutral-600 underline hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
