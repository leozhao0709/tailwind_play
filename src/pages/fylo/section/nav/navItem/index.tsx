import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { NavLink } from 'react-router-dom';
import useScrollToAnchor from '@/hooks/useScrollToAnchor';

type NavItemProps = React.HTMLAttributes<HTMLAnchorElement> & {
  to: string;
};

const NavItem: React.FC<NavItemProps> = ({
  to,
  children,
  className,
}: NavItemProps) => {
  useScrollToAnchor();

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        twMerge(
          clsx('text-gray-500 hover:text-teal-500 dark:text-slate-300', {}),
          className,
        )
      }
    >
      {children}
    </NavLink>
  );
};

export default React.memo(NavItem);
