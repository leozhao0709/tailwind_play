import React from 'react';
import Section from '../../components/Section';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import Card from '../../components/Card';
import blacklist from '../../images/icon-blacklist.svg';
import text from '../../images/icon-text.svg';
import preview from '../../images/icon-preview.svg';
import google from '../../images/logo-google.png';
import ibm from '../../images/logo-ibm.png';
import microsoft from '../../images/logo-microsoft.png';
import hp from '../../images/logo-hp.png';
import graphics from '../../images/logo-vector-graphics.png';

type SuperchargeProps = React.HTMLAttributes<HTMLDivElement>;

const Supercharge: React.FC<SuperchargeProps> = ({
  className,
}: SuperchargeProps) => {
  return (
    <Section
      className={twMerge(clsx('mt-20', className))}
      title="Supercharge your workflow"
      subtitle="We've got the tools to boost your productivity."
    >
      <div className="flex flex-col space-y-12 md:flex-row md:space-y-0">
        <Card
          title="Create Blacklists"
          description="Easily search your snippets by content, category, web address, application, and more."
          img={{
            src: blacklist,
            alt: 'blacklist',
          }}
        />
        <Card
          title="Plain Text Snippets"
          description="Remove unwanted formatting from copied text for a consistent look."
          img={{
            src: text,
            alt: 'text',
          }}
        />
        <Card
          title="Sneak Preview"
          description="Quick preview of all snippets on your Clipboard for easy access."
          img={{
            src: preview,
            alt: 'preview',
          }}
        />
      </div>
      <div className="mt-40 flex flex-col space-y-16 p-10 md:container md:flex-row md:justify-between md:space-y-0">
        <img src={google} alt="google" />
        <img src={ibm} alt="ibm" />
        <img src={microsoft} alt="microsoft" />
        <img src={hp} alt="hp" />
        <img src={graphics} alt="graphics" />
      </div>
    </Section>
  );
};

export default React.memo(Supercharge);
