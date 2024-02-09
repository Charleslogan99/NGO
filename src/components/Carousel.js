import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Sample image URLs
  const images = [
    require('../assets/Image2.jpg'),
    require('../assets/Image2.jpg'),
    require('../assets/Image2.jpg'),
    require('../assets/Image2.jpg'),
    require('../assets/Image2.jpg'),
    require('../assets/Image2.jpg'),
    require('../assets/Image2.jpg'),
    require('../assets/Image2.jpg'),
    require('../assets/Image2.jpg'),
    require('../assets/Image2.jpg')
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Image Carousel</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="mx-auto h-screen w-screen" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
