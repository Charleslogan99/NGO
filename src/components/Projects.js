import React from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
const ProjectPage = () => {
  // Define your project data
  const projectData = {
    title: 'Medical Outreach',
    date: '13th October, 2023',
    description: 'We visited Anonymous Community in Ebonyi State,We provided food items, and medical care.',
    images: [
      require('../assets/Image1.jpg'),
      require('../assets/Image2.jpg'),
      require('../assets/Image3.jpg'),
      require('../assets/Image4.jpg'),
      require('../assets/Widow4.JPG'),
      require('../assets/Widow6.jpg'),
      require('../assets/Widow11.JPG'),
      require('../assets/Widow12.JPG')
   ]
  };
  const projectData2 = {
    title: 'Community Sensitization',
    date: '24th November, 2023',
    description: 'We visited Anonymous Community in Abia State,We provided food items, and medical care.',
    images: [
      require('../assets/Image7.jpg'),
      require('../assets/Image8.jpg'),
      require('../assets/Image11.jpg'),
      require('../assets/Image15.jpg'),
      require('../assets/Image16.JPG'),
      require('../assets/Image17.JPG'),
      require('../assets/Widow10.jpg'),
      require('../assets/Widow7.jpg'),
      require('../assets/Widow8.jpg'),
     
    ]
  };
  const projectData3 = {
    title: 'Advocacy',
    date: '21st January, 2024',
    description: 'We visited Anonymous Community in Abia State,We provided food items, and medical care.',
    images: [
      require('../assets/Image13.JPG'),
      require('../assets/Image16.JPG')
     
    ]
  };

  return (
    <div>
      <Carousel 
        title={projectData.title} 
        date={projectData.date} 
        description={projectData.description} 
        images={projectData.images} 
      />
      <Carousel 
        title={projectData2.title} 
        date={projectData2.date} 
        description={projectData2.description} 
        images={projectData2.images} 
      />
     ` <Carousel 
        title={projectData3.title} 
        date={projectData3.date} 
        description={projectData3.description} 
        images={projectData3.images} 
      />`
      <Footer />
    </div>
  );
};

export default ProjectPage;
