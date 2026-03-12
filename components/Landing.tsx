import HeroSection from './HeroSection';
import ProjectSection from './ProjectSection';
import SkillsSection from './SkillsSection';
import ThemeToggle from './ThemeToggle';
import Experience from './Experience';

const Landing = () => {
  return (
    <div className="scroll-content relative flex min-h-screen w-full justify-center bg-neutral-50 px-4 sm:px-20 dark:bg-neutral-950">
      {/* <BackgroundGrid /> */}
      <div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-20 h-16 w-full bg-linear-to-b from-neutral-100 to-transparent mask-b-from-40% backdrop-blur-[2px] md:h-20 dark:from-neutral-950"
      />
      <div className="h-[] bg-linear-to-t from-neutral-950 to-transparent" />
      <div className="flex max-w-xl flex-col gap-24 md:gap-32">
        <HeroSection />
        <SkillsSection />
        <Experience />
        <ProjectSection />
        {/* <DesignsSection /> */}
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Landing;
