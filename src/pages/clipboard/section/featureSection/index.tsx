import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import computer from '../../images/image-computer.png';
import Section from '../../components/Section';
import Card from '../../components/Card';

type FeatureSectionProps = React.HTMLAttributes<HTMLDivElement>;

const FeatureSection: React.FC<FeatureSectionProps> = ({
  className,
}: FeatureSectionProps) => {
  return (
    <Section
      className={twMerge(clsx('mt-28', className))}
      title="Keep Track of your snippet"
      subtitle="Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything."
    >
      <div className="mt-24 flex flex-col items-start justify-center md:flex-row md:space-x-4 xl:items-center">
        <img src={computer} alt="computer" className="md:mt-7" />
        <div className="mt-10 flex flex-col items-center justify-center space-y-12 md:mt-0">
          <Card
            title="Quick Search"
            description="Easily search your snippets by content, category, web address, application, and more."
          />
          <Card
            title="iCloud Sync"
            description="Instantly saves and syncs snippets across all your devices."
          />
          <Card
            title="Completely History"
            description="Retrieve any snippets from the first moment you started using the app."
          />
        </div>
      </div>
    </Section>
  );
};

export default React.memo(FeatureSection);
