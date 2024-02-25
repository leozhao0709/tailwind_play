import React from 'react';
import { Metadata } from 'next';
import PricingCard, { PricingCardType } from './components/PricingCard';

export const metadata: Metadata = {
  title: 'Pricing Card',
  description: '',
};

export default async function PricingCardPage() {
  const pricingCards: PricingCardType[] = [
    { storage: '100GB', pricing: 1.99, type: 'basic' },
    { storage: '200GB', pricing: 3.99, active: true, type: 'standard' },
    { storage: '2TB', pricing: 8.99, type: 'premium' },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-800 text-white">
      <div className="my-8 flex flex-col items-center space-y-4 md:flex-row md:space-x-8 md:space-y-0">
        {pricingCards.map((card) => (
          <PricingCard key={card.storage} {...card} className="self-stretch" />
        ))}
      </div>
    </div>
  );
}

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamic = 'auto';
export const dynamicParams = true;
export const revalidate = 60;
export const fetchCache = 'auto';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';
