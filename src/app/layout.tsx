import React from 'react';
import './globals.scss';
import type { Metadata } from 'next';
import { Lato, Open_Sans, Roboto } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

const lato = Lato({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lato',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open_sans',
});

export const metadata: Metadata = {
  title: 'tailwind play',
  description:
    'tailwind play course from https://www.udemy.com/course/tailwind-from-scratch/?couponCode=KEEPLEARNING',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${roboto.variable} ${openSans.variable}`}
    >
      <body>{children}</body>
      <SpeedInsights />
    </html>
  );
}
