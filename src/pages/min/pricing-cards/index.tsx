import React from 'react';
import PricingCard, { PricingCardType } from './components/PricingCard';

type PricingCardProps = React.HTMLAttributes<HTMLDivElement>;

const pricingCards: PricingCardType[] = [
  { storage: '100GB', pricing: 1.99, type: 'basic' },
  { storage: '200GB', pricing: 3.99, active: true, type: 'standard' },
  { storage: '2TB', pricing: 8.99, type: 'premium' },
];

const PricingCards: React.FC<PricingCardProps> = ({
  className,
  ...restProps
}: PricingCardProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-800 text-white">
      <div className="my-8 flex flex-col items-center space-y-4 md:flex-row md:space-x-8 md:space-y-0">
        {pricingCards.map((card) => (
          <PricingCard key={card.storage} {...card} className="self-stretch" />
        ))}
      </div>
    </div>
  );
};

export default React.memo(PricingCards);
