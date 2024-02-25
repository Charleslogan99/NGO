import React from 'react';
import { useSpring, animated } from 'react-spring';
import { PaperClipIcon } from '@heroicons/react/20/solid';

export default function Support() {
  // Define the spring animation config
  const heroSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 200, friction: 80 }, // Adjust tension and friction as needed
  });

  return (
    <div className='mt-20'>
      {/* Hero section */}
      <animated.div
        className="bg-gradient-to-br from-purple-700 to-zinc-900 py-12 h-screen px-4 sm:px-6 lg:px-8 flex items-center justify-center"
        style={heroSpring} // Apply the spring animation style
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-7xl font-bold text-white mb-4">
            Support Our NGO
          </h1>
          <p className="text-lg text-gray-300">
            Your contributions help us make a difference in the lives of those in need. 
            Join us in our mission to bring hope and assistance to communities worldwide.
          </p>
        </div>
      </animated.div>

      {/* Support information */}
      <div className="container mx-auto px-4 sm:px-0 mt-8">
        <h1 className='text-center text-purple-700 text-4xl font-satoshi mb-16'>Our Support Details</h1>
        <h3 className="text-4xl font-semibold leading-7 text-gray-900 mb-4 sm:text-md">Naira Account</h3>
        <dl className="divide-y divide-gray-400">
          {/* Information details */}
          <div className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-satoshi leading-6 text-gray-900">Bank Name</dt>
            <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Your Bank Name</dd>
          </div>
          <div className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">Account Number</dt>
            <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">0899505441</dd>
          </div>
         

          
        </dl>
      </div>
      <div className="container mx-auto px-4 sm:px-0 mt-16 mb-16">
        <h3 className="text-4xl font-semibold leading-7 text-gray-900 mb-4">Foreign Accounts</h3>
        <dl className="divide-y divide-gray-400">
          {/* Information details */}
          <div className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">Bank Name</dt>
            <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Your Bank Name</dd>
          </div>
          <div className=" py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-gray-900">Dollar Account Number</dt>
            <dd className="mt-1 mb-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">0899922219</dd>
            <dt className="text-lg font-medium leading-6 text-gray-900">Euro Account Number</dt>
            <dd className="mt-1 mb-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">0899922233</dd>
            <dt className="text-lg font-medium leading-6 text-gray-900">Pounds Account Number</dt>
            <dd className="mt-1 text-lg leading-6 text-gray-700 sm:col-span-2 sm:mt-0">0899922226</dd>
          </div>
          {/*  */}

          
        </dl>
      </div>
    </div>
  );
}
