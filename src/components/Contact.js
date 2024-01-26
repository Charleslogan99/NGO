
import { FaFacebook, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import Nav from './Header';

const Contact = () => {
  return (
    <div>
        <Nav />
      {/* Hero Section with Gradient Background */}
      <div className="relative bg-gradient-to-r from-blue-700 to-white h-96 md:h-screen">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl">Get in touch with us</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Social Media Section */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaFacebook className="text-4xl" />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <FaTwitter className="text-4xl" />
            </a>
            {/* Add more social media icons */}
          </div>

          {/* Address Section */}
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-gray-600 text-xl mr-2" />
            <p>Plot 10 Conquest Avenue, MaryLand</p>
          </div>

          {/* Email Section */}
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-gray-600 text-xl mr-2" />
            <p>example@example.com</p>
          </div>

          {/* Phone Number Section */}
          <div className="flex items-center">
            <FaPhone className="text-gray-600 text-xl mr-2" />
            <p>+1234567890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
