import React from 'react';
import backgroundImage from '../assets/Image1.jpg'; 

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center sm:mt-10 md:mt-10 xl:mt-24"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Set background image dynamically
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="text-center z-10 text-white">
        <h1 className="text-3xl text-purple-50 md:text-6xl lg:text-8xl font-bold mb-8">Empowering Widows</h1>
        <h1 className="text-3xl text-purple-600 md:text-6xl lg:text-7xl font-bold mb-4">&</h1>
        <h1 className="text-3xl text-purple-50 md:text-6xl lg:text-8xl  font-bold mb-4">Providing Hope,</h1>
        <h1 className="text-3xl text-purple-50 md:text-6xl lg:text-8xl  font-bold mb-4"> Dignity, and Opportunity</h1>
      </div>
   </div>
  );
};

export default Hero;
