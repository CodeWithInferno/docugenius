'use client';
import Image from "next/image";
import Header from "./components/header";
import Link from "next/link";
import Images from "./components/ui/image";
import { Fade } from 'react-awesome-reveal';

export default function Home() {
  return (
    <Fade>
      <div className="bg-white text-black h-full bg-no-repeat">
        <Header />
        <div className="flex flex-col items-center justify-center mx-20 mb-12 mt-28 sm:mt-40">
          <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl text-center'>
            Chat with your{' '}
            <span className='text-blue-600'>Documents</span>{' '}
            in seconds.
          </h1>
          <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg text-center'>
            Quill allows you to have conversations with any
            PDF document. Simply upload your file and start
            asking questions right away.
          </p>
          <Link href="/dashboard">
          <button className="bg-black text-white px-4 py-2 my-5 rounded flex items-center">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </Link>
        <Images />
        </div>
      </div>
    </Fade>
  );
}























// <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 019.07 4h5.86a2 2 0 011.664.89l.812 1.22a2 2 0 001.664.89H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
// <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
// </svg>