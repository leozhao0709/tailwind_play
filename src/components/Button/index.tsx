import React, { ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type TextProps = {
  text: string;
};

type ChildrenProps = {
  children: ReactNode;
};

type ButtonProps = Omit<React.HTMLAttributes<HTMLButtonElement>, 'children'> &
  (TextProps | ChildrenProps);

const Button: React.FC<ButtonProps> = ({
  className,
  ...restProps
}: ButtonProps) => {
  let childContent: string | React.ReactNode;
  let otherProps;
  if ('children' in restProps) {
    const { children, ...props } = restProps;
    childContent = children;
    otherProps = props;
  }

  if ('text' in restProps) {
    const { text, ...props } = restProps;
    childContent = text;
    otherProps = props;
  }

  return (
    <button
      {...otherProps}
      className={twMerge(
        clsx(
          'rounded-md bg-indigo-600 px-4 py-2 text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-500 active:translate-y-0.5 active:bg-indigo-600',
          className,
        ),
      )}
    >
      {childContent}
    </button>
  );
};

Button.defaultProps = {};

export default React.memo(Button);
