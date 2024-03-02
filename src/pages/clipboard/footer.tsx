import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import logo from './images/logo.svg';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import instagram from './images/icon-instagram.svg';

type FooterProps = React.HTMLAttributes<HTMLDivElement>;

const Footer: React.FC<FooterProps> = ({
  className,
  ...restProps
}: FooterProps) => {
  return (
    <footer
      {...restProps}
      className={twMerge(
        clsx(
          'mt-20 flex flex-col items-center justify-center space-y-8 bg-gray-50 p-10 md:flex-row md:justify-between md:space-y-0 md:p-8',
          className,
        ),
      )}
    >
      <img src={logo} alt="logo" className="w-16" />
      <div className="grid grid-cols-1 gap-4 text-center text-gray-400 md:grid-cols-3 ">
        <button className="hover:text-teal-500 md:text-left">FAQs</button>
        <button className="hover:text-teal-500 md:text-left">Contact Us</button>
        <button className="hover:text-teal-500 md:text-left">
          Privacy Policy
        </button>
        <button className="hover:text-teal-500 md:text-left">Press Kit</button>
        <button className="hover:text-teal-500 md:text-left">
          Install Guide
        </button>
      </div>
      <div className="flex items-center justify-center space-x-8">
        <button>
          <img src={facebook} alt="facebook" />
        </button>
        <button>
          <img src={twitter} alt="twitter" />
        </button>
        <button>
          <img src={instagram} alt="instagram" />
        </button>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
