import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import NavItem from '../../components/NavItem';
import logo from '../../images/logo.svg';
import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';
import pinterest from '../../images/icon-pinterest.svg';
import instagram from '../../images/icon-instagram.svg';

type FooterSectionProps = React.HTMLAttributes<HTMLDivElement>;

const FooterSection: React.FC<FooterSectionProps> = ({
  className,
}: FooterSectionProps) => {
  return (
    <footer
      className={twMerge(clsx('mt-20 bg-black p-10 md:py-20', className))}
    >
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-center text-white md:flex-row md:justify-between">
        <div>
          <img src={logo} alt="logo" className="max-w-56" />
          <div className="mt-4 flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <NavItem to="#">About</NavItem>
            <NavItem to="#">Careers</NavItem>
            <NavItem to="#">Events</NavItem>
            <NavItem to="#">Products</NavItem>
            <NavItem to="#">Support</NavItem>
          </div>
        </div>
        <div className="mt-8 space-y-4 md:mt-0">
          <div className="flex items-center justify-center space-x-5">
            <NavItem hideUnderline to="#">
              <img src={facebook} alt="facebook" />
            </NavItem>
            <NavItem hideUnderline to="#">
              <img src={twitter} alt="twitter" />
            </NavItem>
            <NavItem hideUnderline to="#">
              <img src={pinterest} alt="pinterest" />
            </NavItem>
            <NavItem hideUnderline to="#">
              <img src={instagram} alt="instagram" />
            </NavItem>
          </div>
          <p className="text-gray-500">
            © 2022 Loopstudios. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(FooterSection);
