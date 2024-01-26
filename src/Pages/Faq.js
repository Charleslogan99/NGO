import Accordion from '../components/Accordion';
import Footer from '../components/Footer';
import Nav from '../components/Header';

const FAQPage = () => {
  return (
    <div>
        <Nav />
      {/* Hero Section with Gradient Background */}
      <div className="relative bg-gradient-to-r  from-blue-700 to-white bg-cover bg-center h-96 md:h-screen">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg md:text-xl">Find answers to common questions below.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Questions & Answers</h2>
          {/* Accordion Component */}
          <Accordion />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
