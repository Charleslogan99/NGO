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
      require('../assets/Widow1.JPG'),
      require('../assets/Widow2.jpg'),
      require('../assets/Widow3.jpg'),
      require('../assets/Widow4.JPG'),
      require('../assets/Widow6.jpg'),
      require('../assets/Widow7.jpg'),
      require('../assets/Widow8.jpg'),
      // require('../assets/Widow2.JPG'),
      // require('../assets/Widow2.JPG') 
2   ]
  };
  const projectData2 = {
    title: 'Community Sensitization',
    date: '24th November, 2023',
    description: 'We visited Anonymous Community in Abia State,We provided food items, and medical care.',
    images: [
      require('../assets/Image1.jpg'),
      require('../assets/Image2.jpg'),
      require('../assets/Image3.jpg'),
      require('../assets/Image3.jpg'),
      require('../assets/Image3.jpg'),
      require('../assets/Image3.jpg'),
      require('../assets/Image3.jpg'),
      require('../assets/Image3.jpg'),
      require('../assets/Image3.jpg'),
      require('../assets/Image3.jpg') 
    ]
  };
  const projectData3 = {
    title: 'Advocacy',
    date: '21st January, 2024',
    description: 'We visited Anonymous Community in Abia State,We provided food items, and medical care.',
    images: [
      require('../assets/Image1.jpg'),
      require('../assets/Image2.jpg'),
      require('../assets/Image3.jpg'),
      require('../assets/Image3.jpg'),
      require('../assets/Image3.jpg'),
      require('../assets/Image3.jpg'),
      require('../assets/Image3.jpg'),
      require('../assets/Image3.jpg'),
      require('../assets/Image3.jpg'),
      require('../assets/Image3.jpg') 
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
