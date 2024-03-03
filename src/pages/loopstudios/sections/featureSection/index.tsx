import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import interactive from '../../images/desktop/image-interactive.jpg';

type FeatureSectionProps = React.HTMLAttributes<HTMLDivElement>;

const FeatureSection: React.FC<FeatureSectionProps> = ({
  className,
}: FeatureSectionProps) => {
  return (
    <section className={twMerge(clsx('mt-20', className))}>
      <div className=" relative mx-auto max-w-6xl p-6">
        <img src={interactive} alt="interactive" />
        <div className="mt-10 flex flex-col items-center space-y-6 bg-white p-12 text-center md:absolute md:bottom-6 md:right-0">
          <h1 className="max-w-md text-4xl font-light uppercase ">
            The leader in interactive VR
          </h1>
          <p className="max-w-md text-base text-gray-500">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(FeatureSection);
