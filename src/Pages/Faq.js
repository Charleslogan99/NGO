import Accordion from '../components/Accordion';
import Footer from '../components/Footer';
import Nav from '../components/Header';
import { useSpring, animated } from 'react-spring';

const FAQPage = () => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 },
  });
  return (
    <div>
      <Nav />
      {/* Hero Section with Gradient Background */}
      <animated.div
        // className="absolute inset-0 flex flex-col justify-center items-center p-16 text-white"
        style={animationProps}
      >
      <div className="relative mt-20  md:mt-2 lg:mt-20 bg-gradient-to-r  from-purple-700 to-gray-900 bg-cover bg-center h-96 md:h-screen">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-8xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-2xl">
              Find answers to common questions below.
            </p>
          </div>
        </div>
      </div>
</animated.div>
      {/* Main Content */}
      <div className="container mx-auto px-4 mb-20 mt-20 py-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold mb-8">Questions & Answers</h2>
          {/* Accordion Component */}
          <Accordion />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
