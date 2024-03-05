import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import working from '../../images/illustration-working.svg';
import { Link } from 'react-router-dom';

type HeroSectionProps = React.HTMLAttributes<HTMLDivElement>;

const HeroSection: React.FC<HeroSectionProps> = ({
  className,
}: HeroSectionProps) => {
  return (
    <section className={twMerge(clsx('mt-10 p-8'), className)}>
      <div className="container mx-auto flex flex-col items-center lg:flex-row-reverse">
        <img src={working} alt="working" className="md:max-w-md xl:max-w-2xl" />
        <div className="mt-20 flex flex-col items-center space-y-8 text-center lg:items-start lg:space-y-10 lg:text-left xl:max-w-xl">
          <h1 className="text-5xl font-bold lg:text-6xl">
            More than just shorter links
          </h1>
          <p className="text-2xl text-gray-500 ">
            {
              // eslint-disable-next-line quotes
              "Build your brand's recognition and get detailed insights on how your links are performing."
            }
          </p>
          <Link
            to="#"
            className="rounded-full bg-cyan-500 px-8 py-4 text-2xl font-bold text-white hover:opacity-80"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
