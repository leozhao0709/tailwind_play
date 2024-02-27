import React from 'react';
import close from './images/close.svg';
import facebook from './images/facebook.png';
import google from './images/google.png';
import image from './images/image.jpg';
import { Link } from 'react-router-dom';

type LoginModalProps = React.HTMLAttributes<HTMLDivElement>;

const LoginModal: React.FC<LoginModalProps> = ({
  className,
  ...restProps
}: LoginModalProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-rose-50">
      <div className="relative m-10 flex rounded-lg shadow-xl">
        <button className="absolute right-4 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 duration-200 hover:-translate-y-1">
          <img src={close} alt="close" />
        </button>
        <div className="flex  flex-col rounded-lg bg-white p-6">
          <h1 className="mb-5 font-serif text-4xl font-bold">Log In</h1>
          <div className="mb-12 max-w-sm text-gray-500">
            Log in to your account to upload or download pictures, videos or
            music.
          </div>
          <input
            type="text"
            placeholder="Enter your email address"
            className="rounded-lg border p-4"
          />
          <div className="my-6 flex flex-col items-center space-y-5">
            <Link to="#" className="text-cyan-700">
              Forgot password
            </Link>
            <button className="self-stretch rounded-lg bg-cyan-700 py-6 text-white duration-150 hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-lg">
              Next →
            </button>
          </div>
          <div className="mb-4 mt-6 border border-gray-300"></div>
          <p className="text-center text-sm font-thin text-gray-400">
            or login with
          </p>
          <div className="my-4 flex flex-col space-y-4 md:flex-row  md:space-x-4 md:space-y-0">
            <button className="flex items-center justify-center space-x-4 rounded-lg border border-gray-300 py-2 duration-200 hover:-translate-y-0.5 hover:shadow-lg md:flex-1">
              <img src={facebook} alt="facebook login" className="w-9 " />
              <span className="font-thin text-gray-500">Facebook</span>
            </button>
            <button className="flex items-center justify-center space-x-4 rounded-lg border border-gray-300 py-2 duration-200 hover:-translate-y-0.5 hover:shadow-lg md:flex-1">
              <img src={google} alt="google login" className="h-8 w-8" />
              <span className="font-thin text-gray-500">Google</span>
            </button>
          </div>
        </div>
        <img src={image} alt="" className="hidden w-[430px] md:block" />
      </div>
    </div>
  );
};

export default React.memo(LoginModal);
