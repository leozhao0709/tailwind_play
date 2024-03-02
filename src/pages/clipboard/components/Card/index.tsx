import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  img?: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({
  img,
  className,
  title,
  description,
}: CardProps) => {
  return (
    <div
      className={twMerge(
        clsx('flex flex-col items-center justify-center p-4', className),
      )}
    >
      {img && <img src={img.src} alt={img.alt} className="mb-4" />}
      <h3 className="py-4 text-3xl font-bold text-zinc-700">{title}</h3>
      <p className="text-lg text-gray-400">{description}</p>
    </div>
  );
};

export default React.memo(Card);
