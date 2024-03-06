import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type EarlyAccessSectionProps = React.HTMLAttributes<HTMLDivElement>;

const EarlyAccessSection: React.FC<EarlyAccessSectionProps> = ({
  className,
}: EarlyAccessSectionProps) => {
  return (
    <section className={twMerge(clsx('mt-20'), className)}>
      <div className="container mx-auto flex max-w-4xl flex-col items-center space-y-6 rounded-lg bg-slate-200 p-8 shadow-md dark:bg-gray-800">
        <h3 className="text-2xl font-bold">Get early access today</h3>
        <p className="text-md text-center">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div className="flex flex-col space-y-6 self-stretch lg:flex-row lg:space-x-6 lg:space-y-0">
          <input
            placeholder="email@example.com"
            className="rounded-full px-6 py-2 text-black outline-none lg:flex-1"
          />
          <button className="rounded-full bg-teal-500 px-4 py-2 hover:opacity-80">
            Get Started For Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(EarlyAccessSection);
