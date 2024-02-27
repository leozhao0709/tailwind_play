import React from 'react';
import Section from '../../components/Section';
import Button from '../../components/Button';
import { HashLink } from 'react-router-hash-link';

type DownloadSectionProps = React.HTMLAttributes<HTMLDivElement>;

const DownloadSection: React.FC<DownloadSectionProps> = ({
  className,
}: DownloadSectionProps) => {
  return (
    <Section
      title="Clipboard for iOS and MacOS"
      subtitle="Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard."
      className="mt-32"
    >
      <div className="mt-10 flex w-full flex-col items-center justify-center space-y-8 md:flex-row md:space-x-4 md:space-y-0 ">
        <Button className="self-stretch">
          <HashLink to="./#hero">Download for iOS</HashLink>
        </Button>
        <Button className="self-stretch bg-indigo-500">
          <HashLink to="./#hero">Download for Mac</HashLink>
        </Button>
      </div>
    </Section>
  );
};

export default React.memo(DownloadSection);
