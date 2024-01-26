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
        <h1 className="text-3xl md:text-6xl lg:text-6xl  font-bold mb-4">Together Lets Make The World A Better Place</h1>
        <p className="text-xs p-2 md:text-xl lg:text-sm">That don't lights. Blessed land spirit creature divide our made two itself upon you'll dominion waters man second good you they're divided upon winged were replenish night

</p>
      </div>
   iii </div>
  );
};

export default Hero;
