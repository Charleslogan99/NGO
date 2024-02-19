import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ title, date, description, images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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

  return (
    <div className="container mx-auto py-8 mt-24 mb-24">
      <div>
        <h2 className="text-3xl font-semibold text-center mb-1">{title}</h2>
        <p className="text-xs text-gray-500 text-center mb-1">{date}</p>
        <p className="text-lg text-gray-500 text-center mb-8">{description}</p>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="flex-none h-screen w-24 rounded-lg">
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
