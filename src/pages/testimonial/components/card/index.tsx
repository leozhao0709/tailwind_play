import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  avatarUrl: string;
  name: string;
  status?: string;
  outline: string;
  details: string;
  nameClassName?: string;
  outlineClassName?: string;
  detailsClassName?: string;
};

const Card: React.FC<CardProps> = ({
  className,
  avatarUrl,
  name,
  status = 'Verified Graduate',
  outline,
  details,
  nameClassName,
  outlineClassName,
  detailsClassName,
}: CardProps) => {
  return (
    <div
      className={twMerge(
        clsx('flex flex-col space-y-8 rounded-lg bg-gray-600 p-8 text-white'),
        className,
      )}
    >
      <button className="flex items-center space-x-4">
        <div className="overflow-hidden rounded-full ring-2 ring-purple-300">
          <img src={avatarUrl} alt={name} />
        </div>
        <div className="flex flex-col items-start">
          <h3 className={twMerge('text-md text-gray-200', nameClassName)}>
            {name}
          </h3>
          <h3 className="text-sm text-gray-400">{status}</h3>
        </div>
      </button>
      <div className={twMerge('text-lg', outlineClassName)}>{outline}</div>
      <p className={twMerge('text-md text-gray-400', detailsClassName)}>
        {details}
      </p>
    </div>
  );
};

export default React.memo(Card);
