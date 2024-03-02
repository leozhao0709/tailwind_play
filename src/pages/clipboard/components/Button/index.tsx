import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      {...restProps}
      className={twMerge(
        clsx(
          'rounded-full bg-teal-500 px-6 py-4 text-xl text-white shadow-lg duration-200 hover:opacity-80',
          className,
        ),
      )}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
