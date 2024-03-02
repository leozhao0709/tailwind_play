import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
  img?: {
    src: string;
    alt: string;
  };
  title: string;
  subtitle: string;
};

const Section: React.FC<SectionProps> = ({
  className,
  img,
  title,
  subtitle,
  children,
  ...restProps
}: SectionProps) => {
  return (
    <section
      {...restProps}
      className={twMerge(clsx('flex flex-col items-center', className))}
    >
      <div className="container flex flex-col items-center justify-center p-10 text-center">
        {img && <img src={img.src} alt={img.alt} className="mx-auto" />}
        <h1 className="mb-10 mt-16 font-serif text-4xl font-bold leading-9 text-zinc-700 md:text-5xl">
          {title}
        </h1>
        <p className="mb-10 max-w-[48rem] text-xl  leading-9 text-gray-400">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
};

export default React.memo(Section);
