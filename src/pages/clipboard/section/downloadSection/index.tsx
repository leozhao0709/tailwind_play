import React from 'react';
import Section from '../../components/Section';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import useScrollToAnchor from '@/hooks/useScrollToAnchor';

type DownloadSectionProps = React.HTMLAttributes<HTMLDivElement>;

const DownloadSection: React.FC<DownloadSectionProps> = ({
  className,
}: DownloadSectionProps) => {
  useScrollToAnchor();

  return (
    <Section
      title="Clipboard for iOS and MacOS"
      subtitle="Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard."
      className="mt-32"
    >
      <div className="mt-10 flex w-full flex-col items-center justify-center space-y-8 md:flex-row md:space-x-4 md:space-y-0 ">
        <Button className="self-stretch p-0">
          <Link to="./#hero" className="inline-block px-6 py-4">
            Download for iOS
          </Link>
        </Button>
        <Button className="self-stretch bg-indigo-500 p-0">
          <Link className="inline-block px-6 py-4" to="./#hero">
            Download for Mac
          </Link>
        </Button>
      </div>
    </Section>
  );
};

export default React.memo(DownloadSection);
