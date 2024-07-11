import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import hero1 from "../../../assets/3.jpeg";
import hero2 from "../../../assets/4.jpeg";
import hero3 from "../../../assets/5.webp";
import herom1 from "../../../assets/3.jpeg";
import herom2 from "../../../assets/4.jpeg";
import herom3 from "../../../assets/5.webp";
import "./Hero.css";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 960);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 960);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = [
    { image: hero1, title: "2 BHK Interior Designs" },
    { image: hero2, title: "3 BHK Interior Designs" },
    { image: hero3, title: "Modular Kitchen Designs" },
  ];

  const dataMobile = [
    { image: herom1, title: "2 BHK Interior Designs" },
    { image: herom2, title: "3 BHK Interior Designs" },
    { image: herom3, title: "Modular Kitchen Designs" },
  ];

  return (
    <div className="w-full relative">
      <Slider {...settings}>
        {(isDesktop ? data : dataMobile).map((item, index) => (
          <div key={index} className="relative w-full h-screen">
            <div className="relative w-full h-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="hero-content">
              <div className="hero-title animate-fadeIn ">
                WELCOME TO MK INTERIOR POINT
              </div>
              <div className="hero-subtitle animate-fadeIn" >
                Transforming Spaces, Elevating Lives
              </div>
              {isDesktop && (
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
                  {/* <button className="hero-button1">
                    <Link to="/design">OUR SERVICES</Link>
                  </button> */}
                  <button className="hero-button bg-brown-800">
                    <Link to="/contact">CONTACT US</Link>
                  </button>
                </div>
              )}
              {!isDesktop && (
                <div className="flex flex-col items-center">
                  <button className="hero-button1 hero-button-primary bg-brown-800">
                    <Link to="/contact">CONTACT US</Link>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
