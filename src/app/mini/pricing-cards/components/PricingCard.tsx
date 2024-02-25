'use client';

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export type PricingCardType = {
  active?: boolean;
  pricing: number;
  storage: '100GB' | '200GB' | '2TB';
  type: 'basic' | 'standard' | 'premium';
};

type PricingCardProps = React.HTMLAttributes<HTMLDivElement> & PricingCardType;

const PricingCard: React.FC<PricingCardProps> = ({
  type,
  active = false,
  storage,
  pricing,
  className,
  ...restProps
}: PricingCardProps) => {
  return (
    <div
      {...restProps}
      className={twMerge(
        clsx(
          'rounded-lg bg-slate-700 p-2',
          {
            ['bg-violet-600']: active,
          },
          className,
        ),
      )}
    >
      <div className="rounded-lg bg-slate-800">
        <div className="flex flex-col items-center border-b border-slate-700 p-10">
          <div className="py-2 uppercase">{type}</div>
          <div className="mt-4 font-serif text-5xl">{storage}</div>
          <div className="mt-2 text-center">${pricing}/month</div>
          <button
            className={twMerge(
              clsx(
                'mt-4  rounded-md border border-violet-600 px-10 py-2 hover:border-violet-800 hover:bg-violet-800',
                {
                  ['bg-violet-600']: active,
                },
              ),
            )}
          >
            Purchase
          </button>
        </div>
        <div className="flex flex-col items-center space-y-2 p-8 text-xs">
          <div>✓ {storage} storage</div>
          <div>✓ Option to add members</div>
          <div>✓ Extra member benefits</div>
        </div>
      </div>
    </div>
  );
};

// PricingCard.defaultProps = {
//   active: false,
// };

export default React.memo(PricingCard);
