import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-purple-700 sm:py-40">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <h2 className="text-2xl font-bold mb-2">Company Name</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex items-center space-x-4 sm:ml-24 mt-4 lg:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 transition duration-200"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 transition duration-200"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 transition duration-200"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 transition duration-200"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-400">
            © 2024 Company Name. All rights reserved.
          </p>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-200 transition duration-200 flex items-center space-x-1 mt-4"
          >
            <IoMdMail size={20} />
            <span>info@companyname.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;