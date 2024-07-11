import { ArrowUpRightIcon, ListBulletIcon, UserGroupIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { RiPriceTagLine, RiVipCrownLine } from "react-icons/ri";
import Slider from "react-slick";
import Bedroom from "../../../assets/images/bedroom1.jpg";

export default function WhatWeOffer() {
  const [activeIndex, setActiveIndex] = useState(-1); // Track active image index
  const isMobile = useMediaQuery({ maxWidth: 768 });

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
  };

  const data = [
    {
      title: "Tiles & Natural Stones",
      message: "Discover the essence of timeless elegance with our extensive collection of premium tiles and natural stone. From sleek modern designs to classic textures, each piece is meticulously selected to elevate your spaces with enduring style and quality craftsmanship.",
      image: 'https://kronosceramiche.com/src/uploads/sites/3/elementor/thumbs/living-room-black-tiles-q2fmlrefiubrrwiqk9dq6fug7zf0r0jinn7kaylo9c.jpg',
    },
    {
      title: "Sanitaryware",
      message: "Elevate your bathroom experience with our exquisite range of sanitaryware. Designed for both functionality and aesthetic appeal, our sanitaryware collection combines modern innovation with elegant design. Explore our diverse selection to find the perfect pieces that enhance your bathroom's ambiance and functionality.",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeI9qD1Wzm0KSEkWsK1J10YK3kftTdOeUXL80ufa-_ASXccdhfvvJdHyT0YHvjGUp3dC0&usqp=CAU',
    },
    {
      title: "Interior Products",
      message: "Transform your interiors with our exclusive range of premium products. From sophisticated furnishings to statement decor pieces, our collection is crafted to elevate your living spaces with elegance and functionality. Discover a curated selection that reflects your unique style and enhances the allure of your home.",
      image: 'https://imgmedia.lbb.in/media/2022/01/61e7be0d8db24021a0825254_1642577421930.jpg',
    },
  ];

  const handleImageEnter = (index) => {
    setActiveIndex(index); // Set active index on image hover
  };

  const handleImageLeave = () => {
    setActiveIndex(-1); // Reset active index when mouse leaves
  };

  return (
    <>
      <div className="px-3 mt-16 relative">
        <div className="lg:flex lg:w-[90%] lg:mx-auto lg:space-x-[2px]">
          <div className="md:flex lg:w-[50%] lg:mt-4">
            <div className="md:w-[50%] lg:border-none md:border-r-2 border-brown-500 py-4 bg-brown-50 text-brown-700 flex justify-center items-center flex-col space-y-4 text-center hover:bg-brown-700 hover:text-white">
              <RiVipCrownLine className="size-20" />
              <p>Client Satisfaction</p>
            </div>

            <div className="md:w-[50%] md:mt-0 py-4 bg-brown-50 text-brown-700 mt-4 flex justify-center items-center flex-col space-y-4 text-center hover:bg-brown-700 hover:text-white hover:outline-white">
              <ListBulletIcon className="size-20" />
              <p>Unique Collection of Designs</p>
            </div>
          </div>

          <div className="md:flex lg:w-[50%]">
            <div className="md:w-[50%] lg:border-none md:border-r-2 border-brown-500 py-4 bg-brown-50 text-brown-700 mt-4 flex justify-center items-center flex-col space-y-4 text-center hover:bg-brown-700 hover:text-white">
              <UserGroupIcon className="size-20" />
              <p>Premium Quality</p>
            </div>

            <div className="md:w-[50%] py-4 bg-brown-50 text-brown-700 mt-4 flex justify-center items-center flex-col space-y-4 text-center hover:bg-brown-700 hover:text-white">
              <RiPriceTagLine className="size-20" />
              <p>Best Pricing Guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-brown-200 pb-16 -mt-20 rounded-3xl">
        <div className="text-white pt-32 text-center">
          <div className="flex space-x-3 items-center justify-center">
            <div className="bg-brown-200 w-2 h-4 rounded-l-full"></div>
            <p className="text-sm text-brown-200">WHAT WE DO</p>
          </div>
          <h2 className="text-3xl font-bold">What we offer for you</h2>
          <div className="flex justify-center items-center space-x-3 mt-1">
            <hr className="border-2 border-brown-500 w-1/12" />
            <hr className="border-2 border-white w-[1%]" />
          </div>
        </div>

        <div className="md:px-10">
          {isMobile ? (
            <Slider {...settings}>
              {data.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleImageEnter(index)}
                  onMouseLeave={handleImageLeave}
                  className="w-[82%] md:w-3/4 mx-auto mt-16 relative"
                >
                  <img
                    src={item.image}
                    alt=""
                    className={`h-[450px] rounded-3xl transition-opacity ease-in-out duration-300 ${activeIndex === index ? 'opacity-50' : 'opacity-100'}`}
                  />
                  <div>
                    <div className="absolute bottom-6 left-2">
                      <p className="text-white text-2xl font-semibold hover:text-brown-500">
                        {item.title}
                      </p>
                      <p className={`w-2/3 text-white ${activeIndex === index ? 'block' : 'hidden'}`}>
                        {item.message}
                      </p>
                    </div>
                    <div className="absolute right-2 bottom-2 bg-white size-14 mx-auto flex justify-center items-center rounded-full hover:bg-brown-400 hover:text-white">
                      <ArrowUpRightIcon className="size-9" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="flex justify-center space-x-6 mt-16 px-4 lg:space-x-8 lg:px-16">
              {data.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleImageEnter(index)}
                  onMouseLeave={handleImageLeave}
                  className="w-[30%] lg:w-[32%] relative"
                >
                  <img
                    src={item.image}
                    alt=""
                    className={`h-[450px] rounded-3xl transition-opacity ease-in-out duration-300 ${activeIndex === index ? 'opacity-50' : 'opacity-100'}`}
                  />
                  <div className="absolute bottom-6 left-2">
                    <p className="text-white text-2xl font-semibold hover:text-brown-500">
                      {item.title}
                    </p>
                    <p className={`w-2/3 text-white ${activeIndex === index ? 'block' : 'hidden'}`}>
                      {item.message}
                    </p>
                  </div>
                  <div className="absolute right-2 bottom-2 bg-white size-14 mx-auto flex justify-center items-center rounded-full hover:bg-brown-400 hover:text-white">
                    <ArrowUpRightIcon className="size-9" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div> */}
      {/* </div> */}
    </>
  );
}
