import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import profile1 from '../../images/profile-1.jpg';
import profile2 from '../../images/profile-2.jpg';
import profile3 from '../../images/profile-3.jpg';
import Card from './card';

type TestimonialsSectionProps = React.HTMLAttributes<HTMLDivElement>;

const testimonials = [
  {
    avatarUrl: profile1,
    name: 'Satish Patel',
    role: 'Founder & CEO. Huddle',
    details:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
  },
  {
    avatarUrl: profile2,
    name: 'Bruce McKenzie',
    role: 'Founder & CEO. Huddle2',
    details:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
  },
  {
    avatarUrl: profile3,
    name: 'Eva Boyd',
    role: 'Founder & CEO. Huddle3',
    details:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
  },
];

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  className,
}: TestimonialsSectionProps) => {
  return (
    <section id="testimonials" className={twMerge(clsx(''), className)}>
      <div className="container flex flex-col space-y-8 pt-20 md:flex-row md:space-x-8 md:space-y-0">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default React.memo(TestimonialsSection);
