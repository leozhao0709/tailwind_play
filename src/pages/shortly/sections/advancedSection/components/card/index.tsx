import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string;
  img: {
    src: string;
    alt: string;
  };
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
        clsx(
          'relative flex flex-col items-center space-y-8 rounded bg-white p-8 shadow-md lg:text-left',
        ),
        className,
      )}
    >
      <div className="absolute -top-10 rounded-full bg-black p-4">
        <img src={img.src} alt={img.alt} className="" />
      </div>
      <h4 className="text-2xl font-bold text-black">{title}</h4>
      <p className="text-lg text-gray-400 ">{description}</p>
    </div>
  );
};

export default React.memo(Card);
