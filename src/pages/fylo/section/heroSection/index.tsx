import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import illustrationIntro from '../../images/illustration-intro.png';
import { Link } from 'react-router-dom';

type HeroSectionProps = React.HTMLAttributes<HTMLDivElement>;

const HeroSection: React.FC<HeroSectionProps> = ({
  className,
}: HeroSectionProps) => {
  return (
    <section
      id="hero"
      className={twMerge(
        clsx(
          'bg-fylo-curvy-light bg-contain bg-bottom bg-no-repeat dark:bg-fylo-curvy-dark',
        ),
        className,
      )}
    >
      <div className="container mt-10 flex flex-col items-center space-y-12 text-center">
        <img src={illustrationIntro} alt="illustration" />
        <h1 className="max-w-lg text-3xl font-bold lg:text-4xl">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="text-md max-w-md text-gray-700 lg:max-w-lg dark:text-gray-300">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <Link
          to="#"
          className="rounded-full bg-teal-400 px-12 py-2 hover:opacity-80"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
