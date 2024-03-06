import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';
import iconPhone from '../../images/icon-phone.svg';
import iconEmail from '../../images/icon-email.svg';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import ins from '../../images/instagram.svg';

type FooterProps = React.HTMLAttributes<HTMLDivElement>;

const Footer: React.FC<FooterProps> = ({ className }: FooterProps) => {
  return (
    <footer
      className={twMerge(clsx('mt-20 bg-zinc-900  text-white'), className)}
    >
      <div className="container flex max-w-7xl flex-col justify-between space-y-16 p-10 lg:flex-row lg:space-y-0">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <img src={iconPhone} alt="phone" className="h-4" />{' '}
            <div>+1-543-123-4567</div>
          </div>
          <div className="flex items-center space-x-4">
            <img src={iconEmail} alt="email" className="h-4" />{' '}
            <div>example@fylo.com</div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 text-xl">
          <Link to="#">About</Link>
          <Link to="#">Jobs</Link>
          <Link to="#">Press</Link>
          <Link to="#">Blog</Link>
        </div>
        <div className="flex flex-col space-y-4 text-xl">
          <Link to="#">Contact Us</Link>
          <Link to="#">Terms</Link>
          <Link to="#">Privacy</Link>
        </div>
        <div className="flex space-x-4 self-center lg:self-start">
          <div className="rounded-full bg-slate-800 p-2 hover:bg-teal-400">
            <Link to="#">
              <img src={facebook} alt="facebook" />
            </Link>
          </div>
          <div className="rounded-full bg-slate-800 p-2 hover:bg-teal-400">
            <Link to="#">
              <img src={twitter} alt="twitter" />
            </Link>
          </div>
          <div className="rounded-full bg-slate-800 p-2 hover:bg-teal-400">
            <Link to="#">
              <img src={ins} alt="instagram" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
