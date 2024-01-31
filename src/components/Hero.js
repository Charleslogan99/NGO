import React from 'react';
import backgroundImage from '../assets/Image1.jpg'; 

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center mt-12"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Set background image dynamically
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="text-center z-10 text-white">
        <h1 className="text-3xl text-gray-400 md:text-6xl lg:text-8xl font-bold mb-4">Together Lets Make The World</h1>
        <h1 className="text-3xl text-gray-400 md:text-6xl lg:text-8xl  font-bold mb-4">A Better Place</h1>
      </div>
   </div>
  );
};

export default Hero;
