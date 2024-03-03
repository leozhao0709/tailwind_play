import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import styles from './index.module.scss';
import logo from '../../images/logo.svg';
import HamburgerButton from '../../../../components/HamburgerButton';
import NavItem from '../../components/NavItem';

type HeroSectionProps = React.HTMLAttributes<HTMLDivElement>;

const HeroSection: React.FC<HeroSectionProps> = ({
  className,
}: HeroSectionProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const handleToggleMenu = (isMenuOpen) => {
    setIsMobileMenuOpen(isMenuOpen);
  };

  return (
    <section className={twMerge(clsx(styles.HeroSection, className))}>
      <div className="container mx-auto  px-10 py-10 text-white">
        <nav className="flex items-center justify-between py-2 ">
          <img src={logo} alt="logo" />
          <HamburgerButton
            className="z-40 md:hidden"
            onToggleMenu={handleToggleMenu}
          />
          <div className="hidden md:flex md:space-x-4">
            <NavItem to="#">About</NavItem>
            <NavItem to="#">Careers</NavItem>
            <NavItem to="#">Events</NavItem>
            <NavItem to="#">Products</NavItem>
            <NavItem to="#">Support</NavItem>
          </div>

          {/* mobile menu */}
          <div
            className={twMerge(
              clsx(
                'fixed left-0 right-0 top-16 flex max-h-96  flex-col items-start space-y-2 overflow-hidden bg-black text-xl uppercase md:hidden',
                {
                  ['max-h-0']: !isMobileMenuOpen,
                },
              ),
            )}
          >
            <div className="p-10">
              <NavItem to="#">About</NavItem>
              <NavItem to="#">Careers</NavItem>
              <NavItem to="#">Events</NavItem>
              <NavItem to="#">Products</NavItem>
              <NavItem to="#">Support</NavItem>
            </div>
          </div>
        </nav>
        <div className="my-32 max-w-lg border-2 p-4 text-4xl tracking-wider md:p-10 md:text-5xl">
          IMPRESSIVE EXPERIENCES THAT DELIVER
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
