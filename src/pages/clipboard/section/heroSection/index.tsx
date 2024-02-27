import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.scss';
import logo from '../../images/logo.svg';
import Button from '../../components/Button';
import Section from '../../components/Section';

type HeroSectionProps = React.HTMLAttributes<HTMLDivElement>;

const HeroSection: React.FC<HeroSectionProps> = ({
  className,
}: HeroSectionProps) => {
  return (
    <Section
      id="hero"
      title="A history of everything you copy"
      subtitle="Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices."
      className={twMerge(clsx(styles.HeroSection, 'pt-32', className))}
      img={{
        src: logo,
        alt: 'logo',
      }}
    >
      <div className="mt-10 flex w-full flex-col items-center justify-center space-y-8 md:flex-row md:space-x-4 md:space-y-0 ">
        <Button className="self-stretch">Download for iOS</Button>
        <Button className="self-stretch bg-indigo-500">Download for Mac</Button>
      </div>
    </Section>
  );
};

export default React.memo(HeroSection);
