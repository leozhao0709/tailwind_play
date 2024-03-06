import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import NavItem from './navItem';
import { useThemeContext } from '../../context/themeContext';
import iconMoon from '../../images/icon-moon.svg';
import iconSun from '../../images/icon-sun.svg';

type NavProps = React.HTMLAttributes<HTMLDivElement>;

const Nav: React.FC<NavProps> = ({ className }: NavProps) => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <nav
      className={twMerge(
        clsx(
          'flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0',
        ),
        className,
      )}
    >
      <div className="h-20 w-48 bg-fylo-logo-light bg-center bg-no-repeat dark:bg-fylo-logo-dark" />
      <div className="flex items-center space-x-8">
        <NavItem to="#feature">Features</NavItem>
        <NavItem to="#testimonials">Testimonials</NavItem>
        <button
          onClick={toggleTheme}
          className="rounded-md p-1 duration-200 hover:bg-slate-300 dark:text-white dark:hover:bg-slate-500"
        >
          <img
            src={theme === 'dark' ? iconSun : iconMoon}
            className="h-5 w-5"
            alt="toggle theme"
          />
        </button>
      </div>
    </nav>
  );
};

export default React.memo(Nav);
