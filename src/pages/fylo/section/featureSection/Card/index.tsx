import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  img: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({
  className,
  title,
  description,
  img,
}: CardProps) => {
  return (
    <div
      className={twMerge(
        clsx('flex flex-col items-center text-center'),
        className,
      )}
    >
      <img src={img.src} alt={img.alt} className="h-24" />
      <h3 className="mt-12 text-2xl font-bold">{title}</h3>
      <p className="mt-4 max-w-md text-xl font-light">{description}</p>
    </div>
  );
};

export default React.memo(Card);
