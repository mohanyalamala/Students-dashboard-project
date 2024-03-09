import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carousel from '../images/1.png';
import Embedded from "../images/2.png"; 
import Fullstack from "../images/4.png";
import carousel1 from '../images/5.png';
import Embedded1 from "../images/6.png"; 
import Fullstack1 from "../images/7.png";
//import backgrounds from "./backgrounds.jpg";
import "./carousel.css";

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
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Set autoplay speed in milliseconds (e.g., 2000ms for 2 seconds)
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className='carouselflex'>
          {/* <div className='carousel-background' style={{ backgroundImage: `url(${backgrounds})` }}> */}
          <img src={image} alt={`Slide ${index + 4}`} className='carousels' />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;