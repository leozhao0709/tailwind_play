import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import HeroSection from './sections/heroSection';
import ExampleSection from './sections/exampleSection';
import AdvancedSection from './sections/advancedSection';
import FooterSection from './sections/footerSection';
import GetStartSection from './sections/getStartSection';
import Nav from './sections/nav';

type ShortlyProps = React.HTMLAttributes<HTMLDivElement>;

const Shortly: React.FC<ShortlyProps> = ({ className }: ShortlyProps) => {
  return (
    <div className={twMerge(clsx(), className)}>
      <Nav />
      <HeroSection />
      <ExampleSection />
      <AdvancedSection />
      <GetStartSection />
      <FooterSection />
    </div>
  );
};

export default React.memo(Shortly);
