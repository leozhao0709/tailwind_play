import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type HamburgerButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  onToggleMenu: (isOpen) => void;
  barClassName?: string;
};

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  className,
  barClassName,
  onToggleMenu,
}: HamburgerButtonProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const toggleMobileMenu = () => {
    const menuState = !isMobileMenuOpen;
    setIsMobileMenuOpen(menuState);
    onToggleMenu(menuState);
  };

  return (
    <button
      className={twMerge(clsx('space-y-1'), className)}
      onClick={toggleMobileMenu}
    >
      <div
        className={twMerge(
          clsx('h-1 w-8 rounded-lg bg-white duration-200', {
            ['rotate-45']: isMobileMenuOpen,
          }),
          barClassName,
        )}
      />
      {!isMobileMenuOpen && (
        <div
          className={twMerge(clsx('h-1 w-8 rounded-lg bg-white'), barClassName)}
        />
      )}
      <div
        className={twMerge(
          clsx('h-1 w-8 rounded-lg bg-white duration-200', {
            ['-rotate-45']: isMobileMenuOpen,
            ['-translate-y-2']: isMobileMenuOpen,
          }),
          barClassName,
        )}
      />
    </button>
  );
};

export default React.memo(HamburgerButton);
