import React from 'react';
import Link from 'next/link';

export default async function Home() {
  const subRoutes = [
    {
      href: '/mini',
      label: 'Mini',
    },
  ];

  return (
    <main className="container px-10 pt-10 md:px-20">
      <ul className="list-decimal">
        {subRoutes.map(({ label, href }) => (
          <li key={label}>
            <Link className="text-xl text-blue-400 underline" href={href}>
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
