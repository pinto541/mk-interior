import { ListItemPrefix } from "@material-tailwind/react";
import Kitchen1 from "../../assets/images/kitchen1.jpg";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

export default function DesignGallery() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      image: Kitchen1,
      title: "A Bold Navy Blue and White Modular Kitchen Design",
    },
    {
      image: Kitchen1,
      title: "A Bold Navy Blue and White Modular Kitchen Design",
    },
    {
      image: Kitchen1,
      title: "A Bold Navy Blue and White Modular Kitchen Design",
    },
  ];
  return (
    <div>
      <div className="pt-6 px-5">
        <select
          name=""
          id=""
          className="md:hidden outline-black  p-3 w-full border-4 text-lg border-secondary mt-4"
        >
          <option value="">Select Category</option>
          <option value="">Modular Kitchen</option>
          <option value="">Modular Kitchen</option>
          <option value="">Modular Kitchen</option>
          <option value="">Modular Kitchen</option>
          <option value="">Modular Kitchen</option>
        </select>
        <h2 className="text-2xl font-semibold mt-5">Home Interior Designs</h2>
      </div>

      <div className="px-5 pt-10">
        <div>
          <p className="font-semibold">Modular Kitchen Designs</p>
          <div className="mt-10 px-10">
            <Slider {...settings}>
              {data.map((item, index) => (
                <div key={index}>
                  <img src={item.image} alt="" className="w-full size-56" />
                  <div className="flex justify-between mt-4">
                    <div className="w-1/2">
                      <p> {item.title}</p>
                      <p className="text-primary font-semibold flex">
                        More Details
                        <ChevronRightIcon className="size-4 mt-1" />{" "}
                      </p>
                    </div>
                    <div>
                      <button className="border-primary border-4 font-semibold text-primary px-3 py-2">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="py-10">
            <p className="font-semibold text-primary text-center flex justify-center">
              View More Kitchen Designs{" "}
              <span>
                <ChevronRightIcon className="size-4" />{" "}
              </span>
            </p>
          </div>
        </div>

        <div>
          <p className="font-semibold">Modular Kitchen Designs</p>
          <div className="mt-10 px-10">
            <Slider {...settings}>
              {data.map((item, index) => (
                <div key={index}>
                  <img src={item.image} alt="" className="w-full size-56" />
                  <div className="flex justify-between mt-4">
                    <div className="w-1/2">
                      <p> {item.title}</p>
                      <p className="text-primary font-semibold flex">
                        More Details
                        <ChevronRightIcon className="size-4 mt-1" />{" "}
                      </p>
                    </div>
                    <div>
                      <button className="border-primary border-4 font-semibold text-primary px-3 py-2">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="py-10">
            <p className="font-semibold text-primary text-center flex justify-center">
              View More Kitchen Designs{" "}
              <span>
                <ChevronRightIcon className="size-4" />{" "}
              </span>
            </p>
          </div>
        </div>

        <div>
          <p className="font-semibold">Modular Kitchen Designs</p>
          <div className="mt-10 px-10">
            <Slider {...settings}>
              {data.map((item, index) => (
                <div key={index}>
                  <img src={item.image} alt="" className="w-full size-56" />
                  <div className="flex justify-between mt-4">
                    <div className="w-1/2">
                      <p> {item.title}</p>
                      <p className="text-primary font-semibold flex">
                        More Details
                        <ChevronRightIcon className="size-4 mt-1" />{" "}
                      </p>
                    </div>
                    <div>
                      <button className="border-primary border-4 font-semibold text-primary px-3 py-2">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="py-10">
            <p className="font-semibold text-primary text-center flex justify-center">
              View More Kitchen Designs{" "}
              <span>
                <ChevronRightIcon className="size-4" />{" "}
              </span>
            </p>
          </div>
        </div>

        <div>
          <p className="font-semibold">Modular Kitchen Designs</p>
          <div className="mt-10 px-10">
            <Slider {...settings}>
              {data.map((item, index) => (
                <div key={index}>
                  <img src={item.image} alt="" className="w-full size-56" />
                  <div className="flex justify-between mt-4">
                    <div className="w-1/2">
                      <p> {item.title}</p>
                      <p className="text-primary font-semibold flex">
                        More Details
                        <ChevronRightIcon className="size-4 mt-1" />{" "}
                      </p>
                    </div>
                    <div>
                      <button className="border-primary border-4 font-semibold text-primary px-3 py-2">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="py-10">
            <p className="font-semibold text-primary text-center flex justify-center">
              View More Kitchen Designs{" "}
              <span>
                <ChevronRightIcon className="size-4" />{" "}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="py-5 bg-white ">
        <p className=" w-2/3 mx-auto text-center">
          Disclaimer: The images on our site are for reference only. Pleae
          contact us to discuss your specific needs and to tailor a unique
          design for you.
        </p>
      </div>
    </div>
  );
}
