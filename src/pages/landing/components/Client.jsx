import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Client.css'; // Your custom CSS for styling

import client01 from '../../../assets/images/b1.png';
import client02 from '../../../assets/images/b2.png';
import client03 from '../../../assets/images/b3.png';
import client04 from '../../../assets/images/b4.png';

import client07 from '../../../assets/images/b7.png';
import client08 from '../../../assets/images/b8.png';
import client09 from '../../../assets/images/b9.png';

const ClientCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Autoplay delay in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    client01,
    client02,
    client03,
    client04,
   
    client07,
    client08,
    client09,
  ];

  return (
    <>
    <div className="cslient-carousel-container">
    <div className="text-black pt-32 text-center">
          
          <h2 className="text-3xl font-bold">Brands Working With</h2>
          <div className="flex justify-center items-center space-x-3 mt-1">
            <hr className="border-2 border-brown-500 w-1/12" />
            <hr className="border-2 border-white w-[1%]" />
          </div>
        </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="client-slide">
            <img src={image} alt={`Client ${index + 1}`} className="client-image" />
          </div>
        ))}
      </Slider>
    </div>
    
    {/* <br/>
    <iframe className='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.78009149507!2d77.6092719!3d13.0709583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae195f3977a191%3A0x3d184f53f188a2f!2sStudio%20Eleven%20TILES%2C%20STONES%20AND%20MURALS!5e0!3m2!1sen!2sin!4v1720564660823!5m2!1sen!2sin" ></iframe>
    <br/> */}
    
    </>
  );
};

export default ClientCarousel;
