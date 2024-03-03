import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  img: {
    src: string;
    alt: string;
  };
  caption: string;
  textClassName?: string;
};

const Card: React.FC<CardProps> = ({
  className,
  img,
  caption,
  textClassName,
}: CardProps) => {
  return (
    <div
      className={twMerge(
        clsx(
          'group relative cursor-pointer overflow-hidden duration-200 hover:scale-110',
        ),
        className,
      )}
    >
      <img src={img.src} alt={img.alt} className="group-hover:opacity-50" />
      <p
        className={twMerge(
          'absolute bottom-5 left-10 max-w-48 text-3xl font-light uppercase text-white group-hover:text-black',
          textClassName,
        )}
      >
        {caption}
      </p>
    </div>
  );
};

export default React.memo(Card);
