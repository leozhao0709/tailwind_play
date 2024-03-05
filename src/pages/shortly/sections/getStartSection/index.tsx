import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.scss';

type GetStartSectionProps = React.HTMLAttributes<HTMLDivElement>;

const GetStartSection: React.FC<GetStartSectionProps> = ({
  className,
}: GetStartSectionProps) => {
  return (
    <section
      className={twMerge(
        clsx(styles.GetStartSection, 'bg-[hsl(257,27%,26%)] py-24 text-white'),
        className,
      )}
    >
      <div className="container flex flex-col items-center space-y-6 font-bold">
        <h1 className="text-4xl">Boost your links today</h1>
        <button className="rounded-full bg-teal-500 px-10 py-5 text-2xl lg:py-3">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default React.memo(GetStartSection);
