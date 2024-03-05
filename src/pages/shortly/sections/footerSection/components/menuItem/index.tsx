import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

type MenuItemProps = React.HTMLAttributes<HTMLLinkElement> & {
  to?: string;
};

const MenuItem: React.FC<MenuItemProps> = ({
  className,
  children,
  to = '#',
}: MenuItemProps) => {
  return (
    <Link to={to} className={twMerge(clsx(''), className)}>
      {children}
    </Link>
  );
};

export default React.memo(MenuItem);
