import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  details: string;
  avatarUrl: string;
  name: string;
  role: string;
};

const Card: React.FC<CardProps> = ({
  className,
  details,
  avatarUrl,
  name,
  role,
}: CardProps) => {
  return (
    <div
      className={twMerge(
        clsx(
          'space-y-6 rounded-lg bg-slate-100 px-6 py-10 shadow-md dark:bg-slate-800',
        ),
        className,
      )}
    >
      <p>{details}</p>
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <img src={avatarUrl} alt={name} />
        </div>
        <div className="flex flex-col">
          <div className="font-bold">{name}</div>
          <div className="text-sm">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
