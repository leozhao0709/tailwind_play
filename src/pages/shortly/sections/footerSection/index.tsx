import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import logo from '../../images/logo.svg';
import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';
import pinterest from '../../images/icon-pinterest.svg';
import instagram from '../../images/icon-instagram.svg';
import MenuGroup from './components/menuGroup';
import MenuItem from './components/menuItem';

type FooterSectionProps = React.HTMLAttributes<HTMLDivElement>;

const FooterSection: React.FC<FooterSectionProps> = ({
  className,
}: FooterSectionProps) => {
  return (
    <footer className={twMerge(clsx('bg-black text-white'), className)}>
      <div className="container flex flex-col items-center justify-between space-y-16 px-8 py-10 lg:flex-row">
        <img src={logo} alt="logo" />
        <div className="flex flex-col justify-between space-y-12 lg:flex-row  lg:space-x-16 lg:space-y-0">
          <MenuGroup
            title="Features"
            items={[
              { label: 'Link Shortening' },
              { label: 'Branded Links' },
              { label: 'Analytics' },
            ]}
          />
          <MenuGroup
            title="Resources"
            items={[
              { label: 'Blog' },
              { label: 'Developers' },
              { label: 'Support' },
            ]}
          />
          <MenuGroup
            title="Company"
            items={[
              { label: 'About' },
              { label: 'Developers' },
              { label: 'Support' },
            ]}
          />
        </div>
        <div className="flex space-x-6">
          <MenuItem>
            <img src={facebook} alt="facebook" />
          </MenuItem>
          <MenuItem>
            <img src={twitter} alt="twitter" />
          </MenuItem>
          <MenuItem>
            <img src={pinterest} alt="pinterest" />
          </MenuItem>
          <MenuItem>
            <img src={instagram} alt="instagram" />
          </MenuItem>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(FooterSection);
