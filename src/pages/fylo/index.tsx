import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import HeroSection from './section/heroSection';
import FeatureSection from './section/featureSection';
import ProductiveSection from './section/productiveSection';
import TestimonialsSection from './section/testimonialsSection';
import EarlyAccessSection from './section/earlyAccessSection';
import Nav from './section/nav';
import Footer from './section/footer';
import { ThemeContextProvider } from './context/themeContext';

type FyloProps = React.HTMLAttributes<HTMLDivElement>;

const Fylo: React.FC<FyloProps> = ({ className }: FyloProps) => {
  return (
    <div
      className={twMerge(
        clsx('min-h-screen dark:bg-zinc-900 dark:text-white'),
        className,
      )}
    >
      <ThemeContextProvider>
        <Nav className="p-8" />
        <HeroSection className="p-8" />
        <FeatureSection className="p-8" />
        <ProductiveSection className="p-8" />
        <TestimonialsSection className="p-8" />
        <EarlyAccessSection className="p-8" />
        <Footer className="p-8" />
      </ThemeContextProvider>
    </div>
  );
};

export default React.memo(Fylo);
