import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import illustration from '../../images/illustration-stay-productive.png';
import { Link } from 'react-router-dom';
import useScrollToAnchor from '../../../../hooks/useScrollToAnchor';

type ProductiveSectionProps = React.HTMLAttributes<HTMLDivElement>;

const ProductiveSection: React.FC<ProductiveSectionProps> = ({
  className,
}: ProductiveSectionProps) => {
  useScrollToAnchor();
  return (
    <section
      className={twMerge(clsx('bg-slate-50 dark:bg-slate-900'), className)}
    >
      <div className="container flex flex-col space-y-10 px-8 pt-48 lg:flex-row lg:space-x-20 lg:space-y-0">
        <img src={illustration} alt="illustration" className="lg:max-w-md" />
        <div className="flex flex-col space-y-4 lg:space-y-8 lg:text-lg">
          <h2 className="text-xl font-bold lg:text-3xl">
            Stay productive, wherever you are
          </h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <Link
            to="#hero"
            className="text-teal-400 underline underline-offset-4"
          >
            See how Flyo works →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default React.memo(ProductiveSection);
