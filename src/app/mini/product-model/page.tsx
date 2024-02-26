import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import headphone from './images/headphone.png';
import heart from './images/heart.png';
import weight from './images/weight.png';

export const metadata: Metadata = {
  title: 'Product Model',
  description: '',
};

export default async function ProductModel() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="m-3 flex flex-col items-center rounded-lg bg-white p-10 shadow-xl md:m-10 md:flex-row md:items-start md:space-x-10 md:p-16">
        <Image
          src={headphone}
          priority={false}
          alt="headphone"
          className="w-60 cursor-pointer duration-200 hover:scale-105"
        />
        <div className="mt-10 flex  flex-col items-center justify-center md:mt-0 md:items-start">
          <div className="rounded-full bg-black px-4 py-1 text-sm text-white">
            Free Shipping
          </div>
          <div className="mt-4 max-w-sm text-center text-2xl text-slate-600 md:text-left">
            Razer Kraken Kitty Edt Gaming Headset Quartz
          </div>
          <div className="mt-3 text-slate-600 line-through">$799</div>
          <div className="mt-2 text-5xl font-bold text-slate-900">$599</div>
          <div className="my-5 text-sm text-slate-400">
            This offer is valid until April 3rd or as long as stock lasts!
          </div>
          <button className="group w-full rounded-lg border-b-8 border-blue-700 bg-blue-700 text-white duration-150 hover:border-b-0 hover:border-t-8 ">
            <div className=" rounded-lg bg-blue-500 p-4 group-hover:bg-blue-700">
              Add to cart
            </div>
          </button>
          <div className="group my-4 flex w-full items-center space-x-3">
            <div className="h-3 w-3 rounded-full bg-green-400  group-hover:animate-ping"></div>
            <div className="text-sm">50+ pcs. in stock</div>
          </div>
          <div className="flex w-full flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <button className="flex w-full items-center justify-center space-x-2 rounded-lg border-2 border-gray-300 py-2 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
              <Image src={weight} alt="weight" className="w-8" />
              <span>Add to cart</span>
            </button>
            <button className="flex w-full items-center justify-center space-x-2 rounded-lg border-2 border-gray-300 py-2 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
              <Image src={heart} alt="heart" className="w-8" />
              <span>Add to wishlist</span>
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
export const runtime = 'edge';
export const preferredRegion = 'auto';
