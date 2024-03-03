import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { NavLink } from 'react-router-dom';

type NavItemProps = React.HTMLAttributes<HTMLDivElement> & {
  to: string;
  hideUnderline?: boolean;
};

const NavItem: React.FC<NavItemProps> = ({
  className,
  to,
  hideUnderline = false,
  children,
}: NavItemProps) => {
  return (
    <div className={twMerge(clsx('group relative p-1'), className)}>
      <NavLink to={to}>{children}</NavLink>
      {!hideUnderline && (
        <div className="absolute left-0 hidden w-full border-b group-hover:block" />
      )}
    </div>
  );
};

export default React.memo(NavItem);
