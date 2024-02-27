import React from 'react';
import Section from '../../components/Section';
import device from '../../images/image-devices.png';

type AccessSectionProps = React.HTMLAttributes<HTMLDivElement>;

const AccessSection: React.FC<AccessSectionProps> = ({
  className,
}: AccessSectionProps) => {
  return (
    <Section
      className="mt-28 md:mt-40"
      title="Access Clipboard Anywhere"
      subtitle="Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."
    >
      <img src={device} alt="device" className="mt-20" />
    </Section>
  );
};

export default React.memo(AccessSection);
