import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Card from './components/card';
import brandRecognition from '../../images/icon-brand-recognition.svg';
import detailedRecords from '../../images/icon-detailed-records.svg';
import fullyCustomizable from '../../images/icon-fully-customizable.svg';

type AdvancedSectionProps = React.HTMLAttributes<HTMLDivElement>;

const AdvancedSection: React.FC<AdvancedSectionProps> = ({
  className,
}: AdvancedSectionProps) => {
  return (
    <section className={twMerge(clsx('bg-gray-100 p-8'), className)}>
      <div className="container flex flex-col items-center space-y-10 px-8 text-center">
        <h1 className="text-4xl font-bold">Advanced Statistics</h1>
        <p className="max-w-md text-lg text-gray-400">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="relative !mt-28">
          <div className="absolute left-1/2 h-full w-2 -translate-x-1 bg-cyan-500 lg:hidden" />
          <div className="absolute top-36 hidden h-2 w-full -translate-y-1 bg-cyan-500 lg:block" />
          <div className="flex flex-col space-y-28  lg:flex-row lg:items-start lg:space-x-8 lg:space-y-0 xl:items-stretch">
            <Card
              title="Brand Recognition"
              description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
              img={{ src: brandRecognition, alt: 'brand recognition' }}
            />
            <Card
              title="Detailed Records"
              description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
              img={{
                src: detailedRecords,
                alt: 'detailed records',
              }}
              className="lg:!mt-16 xl:!mt-0"
            />
            <Card
              title="Fully Customizable"
              description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
              img={{
                src: fullyCustomizable,
                alt: 'fullyCustomizable',
              }}
              className="lg:!mt-24 xl:!mt-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AdvancedSection);
