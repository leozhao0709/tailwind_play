import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import bookmark from './images/bookmark.svg';
import search from './images/search.svg';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';

export const metadata: Metadata = {
  title: 'Image Gallery',
  description: '',
};

export default async function ImageGallery() {
  const nav = ['Vector', 'Illustrations', 'Images', 'Icons'];
  const images = [image1, image2, image3, image4, image5, image6];
  return (
    <div className="flex min-h-screen items-center justify-center bg-cyan-50 ">
      <div className="m-3 rounded-lg bg-white p-6 shadow-md md:p-32">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-end md:space-x-6 md:space-y-0">
          {nav.map((tab) => (
            <div className="group" key={tab}>
              <Link href="#">{tab}</Link>
              <div className="border-b-2 border-black pb-1 opacity-0 transition duration-500 group-hover:opacity-100" />
            </div>
          ))}
        </div>
        <div className="my-8 flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0">
          <div className="flex items-center border-b-2 md:min-w-80">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 px-2 outline-none"
            />
            <button>
              <Image src={search} alt="search" priority={false} />
            </button>
          </div>
          <button className="rounded-md border-2 border-black bg-black px-10 py-2 text-white transition duration-300 hover:bg-white hover:text-black">
            Upload
          </button>
        </div>

        <div className=" flex flex-col items-center justify-center space-y-4 md:flex-row md:flex-wrap md:justify-start md:space-y-0">
          {images.map((img, i) => (
            <div key={i} className="group relative  md:w-1/3 md:p-2 lg:w-1/4">
              <Image src={img} alt="" className="w-72" priority={false} />
              <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-black/30 px-3 py-2 text-white opacity-0  duration-300 group-hover:opacity-100">
                <div className="space-y-1">
                  <div className="text-sm">Abstract Painting</div>
                  <div className="text-xs">245 likes - 35 Shares</div>
                </div>
                <button>
                  <Image src={bookmark} alt="bookmark" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <div key={i} className="group relative">
              <Image src={img} alt="" className="w-72" priority={false} />
              <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-black/30 px-3 py-2 text-white opacity-0  duration-300 group-hover:opacity-100">
                <div className="space-y-1">
                  <div className="text-sm">Abstract Painting</div>
                  <div className="text-xs">245 likes - 35 Shares</div>
                </div>
                <button>
                  <Image src={bookmark} alt="bookmark" />
                </button>
              </div>
            </div>
          ))}
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
