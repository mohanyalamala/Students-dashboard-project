import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carousel from '../images/images/1.png';
import Embedded from "../images/images/2.png"; 
import Fullstack from "../images/images/3.png";
import carousel1 from '../images/images/4.png';
import Embedded1 from "../images/images/5.png"; 
import Fullstack1 from "../images/images/6.png";
//import backgrounds from "./images/background.jpg";

// Component for the image carousel
const ImageCarousel = () => {
  const images = [
    carousel,
    Embedded,
    Fullstack,
    carousel1,
    Embedded1,
    Fullstack1
  ];

  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className='carouselflex-1'>
          {/* <div className='carousel-background' style={{ backgroundImage: `url(${backgrounds})` }}> */}
          <img src={image} alt={`Slide ${index + 4}`} className='carousels-1' />
        </div>
        // </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;