import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import logo from '../../images/logo.svg';
import HamburgerButton from '../../../../components/HamburgerButton';
import { NavLink } from 'react-router-dom';

type NavProps = React.HTMLAttributes<HTMLDivElement>;

const menu = ['feature', 'pricing', 'resources'];

const Nav: React.FC<NavProps> = ({ className }: NavProps) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const onToggleMobileMenu = (isOpen: boolean) => {
    setShowMobileMenu(isOpen);
  };

  return (
    <nav
      className={twMerge(
        clsx('z-50 p-8 text-xl font-bold capitalize'),
        className,
      )}
    >
      <div className="flex items-center justify-between text-gray-400">
        <div className="flex items-center">
          <img src={logo} alt="logo" />
          <div className="ml-10 hidden items-center space-x-8    md:flex">
            {menu.map((item) => (
              <NavLink to="#" key={item}>
                {item}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="ml-auto hidden items-center space-x-4 md:flex">
          <NavLink to="#">Login</NavLink>
          <NavLink
            to="#"
            className="rounded-full bg-cyan-400 px-8 py-2 text-white"
          >
            Sign Up
          </NavLink>
        </div>

        <HamburgerButton
          onToggleMenu={onToggleMobileMenu}
          barClassName="bg-slate-400 md:hidden"
        />
      </div>
      {/* mobil menu */}
      {showMobileMenu && (
        <div
          className={clsx(
            'fixed left-4 right-4 mt-4 divide-y bg-violet-950 px-4 text-white md:hidden',
          )}
        >
          <div className="flex flex-col space-y-4 py-4 text-center text-xl font-bold capitalize">
            {menu.map((item) => (
              <NavLink to="#" key={item}>
                {item}
              </NavLink>
            ))}
          </div>
          <div className="flex flex-col space-y-4  py-4 text-center text-xl font-bold capitalize">
            <NavLink to="#">Login</NavLink>
            <NavLink to="#" className="rounded-full bg-cyan-400 py-2">
              Sign Up
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default React.memo(Nav);
