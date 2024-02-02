import React from 'react';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Adding icons for Facebook and Twitter

const Footer = () => {
  return (
    <footer className="bg-gray-900 shadow-lg py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="text-white">
            <h4 className="text-lg font-semibold mb-4">ENOURI-JEHOVAH-JIREH-FOUNDATION</h4>
            {/* <p className="text-blue-700 text-md">ADURI-EL-SHADDAI-FOUNDATION</p> */}
                <p className='text-purple-700 text-xs'>lorem ipsum dolor machkatib djjsk yruxnn lorem ipsum dolor machkatib djjsk yruxnnlorem ipsum dolor machkatib djjsk yruxnnlorem ipsum dolor machkatib djjsk yruxnnlorem ipsum dolor machkatib djjsk yruxnn</p>
          </div>

          {/* Column 2 */}
          <div className="text-white xl:ml-20">
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className='flex flex-col'>
              <a href='/' className="text-purple-700" >Home</a>
              <a href='/about' className="text-purple-700">About</a>
              <a href='/contact' className="text-purple-700">Contact</a>
              <a href='/projects' className="text-purple-700">Projects</a>
              <a href='/faq' className="text-purple-700">Faq</a>
              {/* Add more programs */}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="">
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <p className="text-purple-700">
              <MdLocationOn className="inline-block mr-2" /> Plot 10 Conquest Avenue, MaryLand
            </p>
            <p className="text-purple-700">
              <MdEmail className="inline-block mr-2" /> example@example.com
            </p>
            <p className="text-purple-700">
              <MdPhone className="inline-block mr-2" /> +1234567890
            </p>
            {/* Add more contact information */}
          </div>

          {/* Column 4 */}
          <div className="text-white xl:ml-20">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul>
              <li className="text-purple-700">
                <FaFacebook className="inline-block mr-2" /> Facebook: @Test4041
              </li>
              <li className="text-purple-700">
                <FaTwitter className="inline-block mr-2" /> Twitter: @Test4041
              </li>
              <li className="text-purple-700">
                <FaInstagram className="inline-block mr-2" /> Instagram: @Test4041
              </li>
              {/* Add more social media links */}
            </ul>
          </div>
        </div>
        <div className="text-center text-white mt-8">
          <p>
            &copy; {new Date().getFullYear()} ENOURI-JEHOVAH-JIREH-FOUNDATION. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
