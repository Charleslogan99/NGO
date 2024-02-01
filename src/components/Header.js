import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from '../assets/Logo.jpg'
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="p-1 inset-x-0 top-0 bg-white shadow-xl fixed z-50">
      <div
        id="google_translate_element"
        className="fixed top-0 left-0 z-50 p-4"
      ></div>

      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img
              className="h-8 w-auto lg:h-12"
              src={logo}
              // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
          {/* End Logo Section */}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle Menu</span>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {/* Navigation Links */}
          <div className="hidden md:flex">
            <a
              href="/about"
              className="text-purple-700 px-3 py-2 rounded-md text-lg font-satoshi hover:text-gray-500"
            >
              About
            </a>
            <a
              href="/"
              className="text-purple-700 px-3 py-2 rounded-md text-lg font-satoshi hover:text-gray-500"
            >
              Contact
            </a>
            <a
              href="/"
              className="text-purple-700 px-3 py-2 rounded-md text-lg font-satoshi hover:text-gray-500"
            >
              Projects
            </a>
            <a
              href="/"
              className="text-purple-700 px-3 py-2 rounded-md text-lg font-satoshi hover:text-gray-500"
            >
              FAQ
            </a>
          </div>
          {/* End Navigation Links */}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* Donate Button */}
          <a
            href="/"
            className="text-sm font-semibold leading-6 text-gray-50 hover:bg-slate-500 bg-purple-700 p-2 rounded-xl"
          >
            Donate now <span aria-hidden="true">&rarr;</span>
          </a>
          {/* End Donate Button */}
        </div>
      </nav>
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Mobile Navigation Links */}
            <a
              href="/"
              className="text-purple-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="/"
              className="text-purple-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
            <a
              href="/"
              className="text-purple-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>
            <a
              href="/"
              className="text-purple-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              FAQ
            </a>
          </div>
          {/* Donate Button in Mobile Menu */}
          <div className="px-2 pt-2 pb-3 sm:px-3">
            <button className="bg-purple-700 text-purple-50 font-satoshi text-lg hover:bg-slate-50 w-full py-2 rounded-md">
              Donate Now
            </button>
          </div>
          {/* Close Menu Button */}
          <div className="flex justify-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-purple-700"
              onClick={toggleMenu}
            >
              <span className="sr-only">Close Menu</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
