import React from 'react';
import { FaHandshake, FaBalanceScale, FaHandsHelping } from 'react-icons/fa';

import logo from '../assets/Widow7.jpg';

export default function Section() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-purple-700 sm:text-4xl">
                {/* Our Mission */}
                ENOURI JEHOVAH-JIREH FOUNDATION
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                We are a nonprofit organization dedicated to improving the lives of widows in Nigeria. Our mission is to provide comprehensive support and resources to empower widows, ensuring they have the opportunity to thrive and reach their full potential.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[23rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[44rem]"
            src={logo}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Our organization is committed to the following principles and objectives:
              </p>
              <ul  className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <FaHandshake
                    className="mt-1 h-7 w-7 flex-none text-purple-700"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Empowering Widows:
                    </strong>{" "}
                    We strive to empower widows by providing them & their children with access to education, healthcare, and essential resources that promote their well-being and independence.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaBalanceScale
                    className="mt-1 h-7 w-7 flex-none text-purple-700"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Advocating for Rights and Equality:
                    </strong>{" "}
                    We advocate for the rights and equality of widows, working to eliminate discrimination, violence, and injustice that hinder their progress and development.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaHandsHelping
                    className="mt-1 h-7 w-7 flex-none text-purple-700"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Providing Support and Assistance:
                    </strong>{" "}
                    We provide support and assistance to widows facing adversity, including survivors of violence, refugees, and those living in poverty or conflict-affected areas.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Our organization is dedicated to creating a world where widows are valued, respected, and empowered to lead fulfilling lives. Through our programs, partnerships, and advocacy efforts, we strive to make a positive and lasting impact on the lives of widows everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
