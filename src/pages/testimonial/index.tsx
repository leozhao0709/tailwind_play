import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Card from './components/card';
import daniel from './images/image-daniel.jpg';
import jonathan from './images/image-jonathan.jpg';
import jeanette from './images/image-jeanette.jpg';
import patrick from './images/image-patrick.jpg';
import kira from './images/image-kira.jpg';

type TestiMonialProps = React.HTMLAttributes<HTMLDivElement>;

const TestiMonial: React.FC<TestiMonialProps> = ({
  className,
}: TestiMonialProps) => {
  return (
    <div
      className={twMerge(
        clsx('min-h-screen w-full bg-gray-300 p-12'),
        className,
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4  lg:grid-cols-4">
        <Card
          avatarUrl={daniel}
          name="Daniel Clifford"
          outline="I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth."
          details={`"I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam veritatis natus illum ullam ab, nesciunt rerum nobis, quibusdam ad voluptatum rem necessitatibus facere nihil deleniti assumenda vel velit neque quia, nisi ipsum laudantium impedit eveniet iste. Pariatur, exercitationem consequuntur praesentium a est eum velit quos maiores ipsum facere tempora! "`}
          className="bg-purple-700 lg:col-span-2"
          detailsClassName="line-clamp-6"
        />
        <Card
          name="Jonathan Walters"
          avatarUrl={jonathan}
          outline="The team was very supportive and kept me motivated"
          details={`"I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam veritatis natus illum ullam ab, nesciunt rerum nobis, quibusdam ad voluptatum rem necessitatibus facere nihil deleniti assumenda vel velit neque quia, nisi ipsum laudantium impedit eveniet iste. Pariatur, exercitationem consequuntur praesentium a est eum velit quos maiores ipsum facere tempora! "`}
          detailsClassName="line-clamp-5"
        />
        <Card
          name="Kira Whittle"
          avatarUrl={kira}
          outline="Such a life-changing experience. Highly recommended!"
          details={`"Before joining the bootcamp, I've never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I've often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!"`}
          className="bg-white lg:row-span-2"
          nameClassName="text-zinc-900"
          outlineClassName="text-zinc-900"
        />
        <Card
          name="Jeanette Harmon"
          avatarUrl={jeanette}
          outline="An overall wonderful and rewarding experience"
          details='"Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."'
          className="bg-white"
          nameClassName="text-black/60"
          outlineClassName="text-zinc-900"
        />
        <Card
          name="Patrick Abrams"
          avatarUrl={patrick}
          outline="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy."
          details={`"The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people."`}
          className="bg-gray-900 lg:col-span-2"
        />
      </div>
    </div>
  );
};

export default React.memo(TestiMonial);
