import React from 'react';
import backgroundImage from '../assets/Herologo2.jpg'; 
import Carousel from './Carousel';

const images = [
  require('../assets/Image1.jpg'),
  require('../assets/Image1.jpg'),
  require('../assets/Image1.jpg'),
  // Add more image paths as needed
];
const Project = ({ title, description, details }) => {
 
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg text-gray-700 mb-6">{description}</p>
      <p className="text-base text-gray-600">{details}</p>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-screen  flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
      <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="text-white text-center">
          <h1 className="text-4xl text-purple-700 font-bold lg:text-7xl">Our Projects</h1>
          <p className="text-lg mt-4 lg:text-lg">Explore our initiatives to support widows in need</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2> */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Project
            title="Medical Care"
            description="Our Medical Care project aims to provide widows with access to quality healthcare services. We organize medical camps, health check-ups, and provide support for treatments, medications, and surgeries, ensuring widows receive the care they need to live healthy and fulfilling lives."
            details="We collaborate with healthcare professionals and partner organizations to ensure widows receive comprehensive medical support."
          />
          <Project
            title="Community Sensitization"
            description="Community Sensitization is a crucial aspect of our work. Through awareness campaigns, workshops, and interactive sessions, we educate communities about the challenges widows face, promote empathy, challenge stereotypes, and advocate for the rights and dignity of widows."
            details="We conduct regular community outreach programs, engage with local leaders, and leverage media platforms to raise awareness about widows' issues."
          />
          <Project
            title="Advocacy"
            description="Advocacy is at the heart of our mission. We advocate for policy reforms, legal protections, and social support systems that address the unique needs of widows. Through lobbying, campaigning, and strategic partnerships, we strive to create a more inclusive and supportive environment for widows."
            details="We work closely with government agencies, policymakers, and civil society organizations to push for legislative changes and social reforms that benefit widows."
          />
        </div>
      </div>
      <Carousel images={images} />
    </div>
  );
};

export default ProjectsPage;
