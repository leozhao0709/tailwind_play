import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type ExampleSectionProps = React.HTMLAttributes<HTMLDivElement>;

const exampleLinks = [
  {
    original: 'https://frontendmentor.io',
    short: 'https://rel.ink/k4IKyk',
  },
  {
    original: 'https://twitter.com/frontendmentor',
    short: 'https://rel.ink/gxOXp9',
  },
  {
    original: 'https://linkedin.com/frontendmentor-io',
    short: 'https://rel.ink/gob3X9',
  },
];

const ExampleSection: React.FC<ExampleSectionProps> = ({
  className,
}: ExampleSectionProps) => {
  return (
    <section className={twMerge(clsx('mt-32 bg-gray-100 p-8'), className)}>
      <form className="md: flex -translate-y-20 flex-col space-y-6 rounded-md bg-violet-950 p-10 text-white shadow-md lg:flex-row lg:space-x-4 lg:space-y-0">
        <input
          type="text"
          className="flex-1 rounded-md px-2 py-3 text-lg text-black placeholder-yellow-500 outline-none"
          placeholder="Shorten a link here"
        />
        <button className="rounded-md bg-cyan-500 px-10 py-3 text-lg hover:bg-cyan-400">
          Shorten it!
        </button>
      </form>
      <div className="mt-4 space-y-8 p-8">
        {exampleLinks.map(({ original, short }, index) => (
          <div
            key={original}
            className="flex flex-col items-center justify-between space-y-2 rounded-md bg-white p-8 py-6 shadow-md lg:flex-row lg:space-y-0"
          >
            <div className="text-lg font-bold">{original}</div>
            <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
              <div className="text-lg font-bold text-cyan-500">{short}</div>
              <button
                className={clsx(
                  'rounded-md px-8 py-2 text-white hover:opacity-80',
                  {
                    'bg-cyan-500': index % 2 === 0,
                    'bg-violet-800': index % 2 === 1,
                  },
                )}
              >
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(ExampleSection);
