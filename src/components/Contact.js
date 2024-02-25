import { FaPhoneAlt, FaTwitter, FaMapMarkerAlt, FaEnvelope,  FaInstagram, FaFacebook } from 'react-icons/fa';
import Nav from './Header';
import Footer from './Footer';
import { useSpring, animated } from 'react-spring';
import Map from './Map';

const Contact = () => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 },
  });
  return (
    <div>
      <Nav />
      <animated.div
        // className="absolute inset-0 flex flex-col justify-center items-center p-16 text-white"
        style={animationProps}
      >
        <div className="relative mt-20  md:mt-2 lg:mt-20 bg-gradient-to-r from-purple-700 to-stone-800 h-96 md:h-screen">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-8xl font-bold mb-4">
                Contact Us
              </h1>
              <p className="text-lg md:text-2xl">Get in touch with us</p>
            </div>
          </div>
        </div>
      </animated.div>
      {/* Main Content */}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Detail 1: Phone */}
          <div className="bg-white transition duration-300 ease-in-out transform hover:scale-105 shadow-none rounded-lg p-6 flex flex-col items-center">
            <FaPhoneAlt className="text-4xl text-purple-700 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-700">+234 803 320 7833</p>
          </div>

          <div className="bg-white transition duration-300 ease-in-out transform hover:scale-105 shadow-none rounded-lg p-6 flex flex-col items-center">
            <FaEnvelope className="text-4xl text-purple-700 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-700">Jehovahjirehenouri@gmail.com</p>
          </div>

          <div className="bg-white transition duration-300 ease-in-out transform hover:scale-105 shadow-none rounded-lg p-6 flex flex-col items-center">
            <FaMapMarkerAlt className="text-4xl text-purple-700 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-700">X14b Patrick Fluret, Sunnyvale Homes, Abuja, Nigeria</p>
          </div>
          <div className="bg-white transition duration-300 ease-in-out transform hover:scale-105 shadow-none rounded-lg p-6 flex flex-col items-center">
            <FaInstagram className="text-4xl text-purple-700 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <p className="text-gray-700">Available soon</p>
          </div>
          <div className="bg-white transition duration-300 ease-in-out transform hover:scale-105 shadow-none rounded-lg p-6 flex flex-col items-center">
            <FaTwitter className="text-4xl text-purple-700 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <p className="text-gray-700">Available soon</p>
          </div>
          <div className="bg-white transition duration-300 ease-in-out transform hover:scale-105 shadow-none rounded-lg p-6 flex flex-col items-center">
            <FaFacebook className="text-4xl text-purple-700 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <p className="text-gray-700">Available soon</p>
          </div>
        </div>
      </div>
     <Map />
      <Footer />
    </div>
  );
};

export default Contact;

