import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import MenuItem from '../menuItem';

type MenuGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  items: { label: string; to?: string }[];
};

const MenuGroup: React.FC<MenuGroupProps> = ({
  className,
  title,
  items,
}: MenuGroupProps) => {
  return (
    <div
      className={twMerge(
        clsx('flex flex-col items-center space-y-4 lg:items-start'),
        className,
      )}
    >
      <h5 className="text-lg font-bold">{title}</h5>
      <div className="flex flex-col items-center space-y-3 text-gray-400 lg:items-start">
        {items.map(({ label, to }) => (
          <MenuItem key={label} to={to} className="hover:text-teal-400">
            {label}
          </MenuItem>
        ))}
      </div>
    </div>
  );
};

export default React.memo(MenuGroup);
