import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Card from '../../components/Card';
import deepEarth from '../../images/mobile/image-deep-earth.jpg';
import nightArcade from '../../images/mobile/image-night-arcade.jpg';
import soccerTeam from '../../images/mobile/image-soccer-team.jpg';
import grid from '../../images/mobile/image-grid.jpg';
import fromAbove from '../../images/mobile/image-from-above.jpg';
import pocketBorealis from '../../images/mobile/image-pocket-borealis.jpg';
import curiosity from '../../images/mobile/image-curiosity.jpg';
import fisheye from '../../images/mobile/image-fisheye.jpg';
import deepEarthDesktop from '../../images/desktop/image-deep-earth.jpg';
import nightArcadeDesktop from '../../images/desktop/image-night-arcade.jpg';
import soccerTeamDesktop from '../../images/desktop/image-soccer-team.jpg';
import gridDesktop from '../../images/desktop/image-grid.jpg';
import fromAboveDesktop from '../../images/desktop/image-from-above.jpg';
import pocketBorealisDesktop from '../../images/desktop/image-pocket-borealis.jpg';
import curiosityDesktop from '../../images/desktop/image-curiosity.jpg';
import fisheyeDesktop from '../../images/desktop/image-fisheye.jpg';

type CreationSectionProps = React.HTMLAttributes<HTMLDivElement>;

const images = [
  {
    img: {
      src: {
        mobile: deepEarth,
        desktop: deepEarthDesktop,
      },
      alt: 'deepEarth',
    },
    caption: 'deep earth',
  },
  {
    img: {
      src: {
        mobile: nightArcade,
        desktop: nightArcadeDesktop,
      },
      alt: 'nightArcade',
    },
    caption: 'night arcade',
  },
  {
    img: {
      src: {
        mobile: soccerTeam,
        desktop: soccerTeamDesktop,
      },
      alt: 'soccerTeam',
    },
    caption: 'soccer team',
  },
  {
    img: {
      src: {
        mobile: grid,
        desktop: gridDesktop,
      },
      alt: 'grid',
    },
    caption: 'the grid',
  },
  {
    img: {
      src: {
        mobile: fromAbove,
        desktop: fromAboveDesktop,
      },
      alt: 'fromAbove',
    },
    caption: 'from up above vr',
  },
  {
    img: {
      src: {
        mobile: pocketBorealis,
        desktop: pocketBorealisDesktop,
      },
      alt: 'pocketBorealis',
    },
    caption: 'pocket borealis',
  },
  {
    img: {
      src: {
        mobile: curiosity,
        desktop: curiosityDesktop,
      },
      alt: 'curiosity',
    },
    caption: 'the curiosity',
  },
  {
    img: {
      src: {
        mobile: fisheye,
        desktop: fisheyeDesktop,
      },
      alt: 'fisheye',
    },
    caption: 'make it fisheye',
  },
];

const CreationSection: React.FC<CreationSectionProps> = ({
  className,
}: CreationSectionProps) => {
  const seeAllButton = (extraClassName) => {
    return (
      <button
        className={twMerge(
          'rounded-md border-2 border-black py-2 uppercase text-black duration-200 hover:bg-black hover:text-white',
          extraClassName,
        )}
      >
        see all
      </button>
    );
  };

  return (
    <section className={twMerge(clsx('mt-10 px-6', className))}>
      <div className="container mx-auto flex max-w-6xl flex-col items-center">
        <div className="mb-20 flex w-full items-center justify-center md:justify-between">
          <h1 className=" text-center text-5xl font-light uppercase text-zinc-600">
            our creations
          </h1>
          {seeAllButton('px-20 text-xl hidden md:inline-block')}
        </div>
        <div className="mb-12 grid grid-cols-1 gap-6 md:hidden">
          {images.map(({ img, caption }) => (
            <div key={img.src.mobile} className="overflow-hidden">
              <Card
                img={{ src: img.src.mobile, alt: img.alt }}
                caption={caption}
              />
            </div>
          ))}
        </div>
        <div className="mb-12  hidden grid-cols-4 gap-6 overflow-hidden md:grid">
          {images.map(({ img, caption }) => (
            <div key={img.src.desktop} className="overflow-hidden">
              <Card
                img={{ src: img.src.desktop, alt: img.alt }}
                caption={caption}
                textClassName="left-4 text-2xl"
              />
            </div>
          ))}
        </div>
        {seeAllButton('w-full md:hidden')}
      </div>
    </section>
  );
};

export default React.memo(CreationSection);
