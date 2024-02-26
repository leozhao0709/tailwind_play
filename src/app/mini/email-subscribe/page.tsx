import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import img from './image/image.jpg';

export const metadata: Metadata = {
  title: 'Email Subscribe',
  description: '',
};

export default async function EmailSubscribe() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-700 ">
      <div className="mx-6 flex flex-col items-center overflow-hidden rounded-lg bg-zinc-800 p-3 md:flex-row">
        <Image
          src={img}
          alt="img"
          className="h-80 w-80 rounded-lg duration-300 hover:scale-105 md:h-60 md:w-48"
        />
        <div className="px-1 py-4 font-serif text-white md:ml-10">
          <h1 className="text-xl font-medium">
            Get diet and fitness tips in your inbox
          </h1>
          <p className="my-4 flex max-w-xs text-center text-xs leading-5 tracking-wide md:text-left">
            Eat better and exercise better. Sign up for the Diet&Fitness
            newsletter.
          </p>
          <div className="flex flex-col space-y-4 md:flex-row  md:space-x-3 md:space-y-0">
            <input
              type="text"
              placeholder="Enter your email address"
              className="rounded-sm border border-zinc-600 bg-zinc-800 px-4 py-2 text-center outline-none placeholder:text-xs md:text-left"
            />
            <button className="rounded-lg bg-lime-500 px-5 py-3 font-sans text-xs text-zinc-800 transition hover:bg-lime-600 hover:text-white">
              Subscribe
            </button>
          </div>
        </div>
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
