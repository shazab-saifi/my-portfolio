import HeroSection from './HeroSection';
import ProjectSection from './ProjectSection';
import SkillsSection from './SkillsSection';
import ThemeToggle from './ThemeToggle';
import BackgroundGrid from './BackgroundGrid';
import Experience from './Experience';
import Socials from './Socials';

const Landing = () => {
  return (
    <div className="scroll-content relative flex min-h-screen w-full justify-center bg-neutral-50 px-4 sm:px-20 dark:bg-neutral-950">
      <BackgroundGrid />
      <div className="flex max-w-2xl flex-col gap-24">
        <HeroSection />
        <SkillsSection />
        <Experience />
        <ProjectSection />
        {/* <DesignsSection /> */}
        <Socials />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Landing;
