import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mini',
  description: '',
};

export default async function Mini() {
  const subpages = [
    { label: 'Email Subscribe', href: './email-subscribe' },
    { label: 'Pricing Card', href: './pricing-cards' },
    { label: 'Product Model', href: './product-model' },
    { label: 'Image Gallery', href: './image-gallery' },
    { label: 'Login Model', href: './login-modal' },
  ];

  return (
    <main className="h-screen px-10 py-10 md:px-20">
      <ul className="list-decimal">
        {subpages.map(({ label, href }) => (
          <li key={label}>
            <Link className="text-blue-400 underline" href={href}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamic = 'auto';
export const dynamicParams = true;
export const revalidate = 60;
export const fetchCache = 'auto';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';
