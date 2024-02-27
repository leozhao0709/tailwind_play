import React from 'react';
import bookmark from './images/bookmark.svg';
import search from './images/search.svg';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import { Link } from 'react-router-dom';

type ImageGalleryProps = React.HTMLAttributes<HTMLDivElement>;

const nav = ['Vector', 'Illustrations', 'Images', 'Icons'];
const images = [image1, image2, image3, image4, image5, image6];

const ImageGallery: React.FC<ImageGalleryProps> = ({
  className,
  ...restProps
}: ImageGalleryProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cyan-50 ">
      <div className="m-3 rounded-lg bg-white p-6 shadow-md md:p-32">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-end md:space-x-6 md:space-y-0">
          {nav.map((tab) => (
            <div className="group" key={tab}>
              <Link to="#">{tab}</Link>
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
              <img src={search} alt="search" />
            </button>
          </div>
          <button className="rounded-md border-2 border-black bg-black px-10 py-2 text-white transition duration-300 hover:bg-white hover:text-black">
            Upload
          </button>
        </div>

        <div className=" flex flex-col items-center justify-center space-y-4 md:flex-row md:flex-wrap md:justify-start md:space-y-0">
          {images.map((img, i) => (
            <div key={i} className="group relative  md:w-1/3 md:p-2 lg:w-1/4">
              <img src={img} alt="" className="w-72" />
              <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-black/30 px-3 py-2 text-white opacity-0  duration-300 group-hover:opacity-100">
                <div className="space-y-1">
                  <div className="text-sm">Abstract Painting</div>
                  <div className="text-xs">245 likes - 35 Shares</div>
                </div>
                <button>
                  <img src={bookmark} alt="bookmark" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <div key={i} className="group relative">
              <img src={img} alt="" className="w-72" />
              <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-black/30 px-3 py-2 text-white opacity-0  duration-300 group-hover:opacity-100">
                <div className="space-y-1">
                  <div className="text-sm">Abstract Painting</div>
                  <div className="text-xs">245 likes - 35 Shares</div>
                </div>
                <button>
                  <img src={bookmark} alt="bookmark" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ImageGallery);
