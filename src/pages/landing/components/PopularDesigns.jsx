import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../../assets/images/popular1.jpg';
import img2 from '../../../assets/images/popular2.jpg';
import img3 from '../../../assets/images/popular3.jpg';
import img4 from '../../../assets/images/popular4.jpg';
import img5 from '../../../assets/images/popular5.jpg';
import img6 from '../../../assets/images/popular6.jpg';

const images = [img1, img2, img3, img4, img5, img6];

const PopularDesigns = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
          <div className="text-black pt-28 text-center">
          
          <h2 className="text-3xl font-bold">Design Gallery</h2>
          <div className="flex justify-center items-center space-x-3 mt-1">
            <hr className="border-2 border-brown-500 w-1/12" />
            <hr className="border-2 border-white w-[1%]" />
          </div>
        </div>
       
        <div className="py-7 lg:py-23">
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`Popular Design ${index + 1}`} className="w-full h-auto rounded-lg shadow-md object-cover" />
                    </div>
                ))}
            </Slider>
        </div>
        </>
    );
};

export default PopularDesigns;
