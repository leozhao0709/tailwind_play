import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import HeroSection from './section/heroSection';
import FeatureSection from './section/featureSection';
import AccessSection from './section/accessSection';
import SuperchargeSection from './section/supercharSection';
import DownloadSection from './section/downloadSection';
import Footer from './footer';

type ClipboardProps = React.HTMLAttributes<HTMLDivElement>;

const Clipboard: React.FC<ClipboardProps> = ({
  className,
  ...restProps
}: ClipboardProps) => {
  return (
    <main {...restProps} className={twMerge(clsx(className))}>
      <HeroSection />
      <FeatureSection />
      <AccessSection />
      <SuperchargeSection />
      <DownloadSection />
      <Footer />
    </main>
  );
};

export default React.memo(Clipboard);
