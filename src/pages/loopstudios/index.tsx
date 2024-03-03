import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import HeroSection from './sections/heroSection';
import FeatureSection from './sections/featureSection';
import CreationSection from './sections/creationSection';
import FooterSection from './sections/footerSection';

type LoopstudiosProps = React.HTMLAttributes<HTMLDivElement>;

const Loopstudios: React.FC<LoopstudiosProps> = ({
  className,
}: LoopstudiosProps) => {
  return (
    <main className={twMerge(clsx(className))}>
      <HeroSection />
      <FeatureSection />
      <CreationSection />
      <FooterSection />
    </main>
  );
};

export default React.memo(Loopstudios);
