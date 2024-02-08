import React from 'react';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 shadow-lg py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="text-purple-700">
            <h4 className="text-lg font-semibold mb-4">Enouri JehovahJireh Foundation</h4>
                <p className='text-gray-400 text-sm'>At the Enouri JehovahJireh Foundation, we are committed to empowering widows, safeguarding their rights, and nurturing a promising future for generations ahead.</p>
          </div>

          <div className="text-purple-700 xl:ml-20">
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className='flex flex-col'>
              <a href='/' className="text-gray-400 hover:text-purple-700" >Home</a>
              <a href='/about' className="text-gray-400 hover:text-purple-700">About</a>
              <a href='/contact' className="text-gray-400 hover:text-purple-700">Contact</a>
              <a href='/projects' className="text-gray-400 hover:text-purple-700">Projects</a>
              <a href='/faq' className="text-gray-400 hover:text-purple-700">Faq</a>
            </ul>
          </div>

          <div className="">
            <h4 className="text-lg font-semibold text-purple-700 mb-4">
              Contact Us
            </h4>
            <p className="text-gray-400">
              <MdLocationOn className="inline-block mr-2" /> Plot 10 Conquest Avenue, MaryLand
            </p>
            <p className="text-gray-400">
              <MdEmail className="inline-block mr-2" /> example@example.com
            </p>
            <p className="text-gray-400">
              <MdPhone className="inline-block mr-2" /> +234 803 320 7833
            </p>
          </div>

          <div className="text-purple-700 xl:ml-20">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul>
              <li className="text-gray-400">
                <FaFacebook className="inline-block mr-2" /> Facebook: @Test4041
              </li>
              <li className="text-gray-400">
                <FaTwitter className="inline-block mr-2" /> Twitter: @Test4041
              </li>
              <li className="text-gray-400">
                <FaInstagram className="inline-block mr-2" /> Instagram: @Test4041
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:text-center text-purple-700 mt-24">
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
