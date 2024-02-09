import React from 'react';
import Carousel from './Carousel';

const ProjectPage = () => {
  // Define your project data
  const projectData = {
    title: 'First Project',
    date: '13th October, 2023',
    description: 'We visited Anonymous Community in Ebonyi State,We provided food items, and medical care.',
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
  const projectData2 = {
    title: 'Second Project',
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
    </div>
  );
};

export default ProjectPage;
