import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import accessAnywhere from '../../images/icon-access-anywhere.svg';
import security from '../../images/icon-security.svg';
import collaboration from '../../images/icon-collaboration.svg';
import anyFile from '../../images/icon-any-file.svg';
import Card from './Card';

type FeatureSectionProps = React.HTMLAttributes<HTMLDivElement>;

const cards = [
  {
    title: 'Access your file from anywhere',
    description:
      'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
    img: {
      src: accessAnywhere,
      alt: 'accessAnywhere',
    },
  },
  {
    title: 'Security you can trust',
    description:
      '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
    img: {
      src: security,
      alt: 'security',
    },
  },
  {
    title: 'Access your file from anywhere',
    description:
      'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
    img: {
      src: collaboration,
      alt: 'collaboration',
    },
  },
  {
    title: 'Access your file from anywhere',
    description:
      'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
    img: {
      src: anyFile,
      alt: 'anyFile',
    },
  },
];

const FeatureSection: React.FC<FeatureSectionProps> = ({
  className,
}: FeatureSectionProps) => {
  return (
    <section
      id="feature"
      className={twMerge(clsx('bg-slate-50 dark:bg-[#171F2B]'), className)}
    >
      <div className="container grid grid-cols-1 gap-y-32 pt-32 lg:grid-cols-2 lg:gap-x-12">
        {cards.map((card) => (
          <Card key={card.img.src} {...card} />
        ))}
      </div>
    </section>
  );
};

export default React.memo(FeatureSection);
