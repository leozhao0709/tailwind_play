import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { RouteObject } from 'react-router-dom';
import NavItem from './NavItem';
import hamburger from './images/menu-burger.svg';

type NavProps = React.HTMLAttributes<HTMLDivElement> & {
  routes: RouteObject[];
};

const Nav: React.FC<NavProps> = ({
  routes,
  className,
  ...restProps
}: NavProps) => {
  const [isOpen, setIsOpen] = React.useState(true);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  const onNavItemClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <nav
      {...restProps}
      className={twMerge(
        clsx(
          'flex  flex-col justify-between bg-slate-900 text-center text-gray-300 md:min-h-screen md:p-6 md:text-left',
          className,
        ),
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="self-end p-4 md:hidden"
      >
        <img src={hamburger} alt="menu" className="h-8 w-8" />
      </button>
      <div
        className={clsx(
          {
            ['max-h-0']: !isOpen,
            ['max-h-screen']: isOpen,
          },
          'duration-300',
          'overflow-hidden',
          'flex',
          'flex-col',
        )}
      >
        {routes.map((route) => (
          <NavItem
            onClick={onNavItemClick}
            key={route.path ?? 'index'}
            route={route}
          />
        ))}
      </div>
    </nav>
  );
};

export default React.memo(Nav);
