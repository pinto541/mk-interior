import React from "react";
import brand1 from "@/assets/images/p1.png";
import brand2 from "@/assets/images/p2.png";
import brand3 from "@/assets/images/p3.png";
import brand4 from "@/assets/images/p4.png";
import brand5 from "@/assets/images/p5.png";
import brand6 from "@/assets/images/p6.png";

const data = [
  { image: brand1 },
  { image: brand2 },
  { image: brand3 },
  { image: brand4 },
  { image: brand5 },
  { image: brand6 },
];

export default function Suppliers() {
  return (
    <>
      <div className="p-8 flex flex-col lg:gap-10 gap-5">
      <div className="text-black pt-22 text-center">
          
          <h2 className="text-3xl font-bold">Brands Worked In</h2>
          <div className="flex justify-center items-center space-x-3 mt-1">
            <hr className="border-2 border-brown-500 w-1/12" />
            <hr className="border-2 border-white w-[1%]" />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-3">
        <div className="w-full lg:w-[40%]">
            <h2 className="bg-black text-white p-10 leading-[33px] text-[12px] md:text-[20px] lg:text[30px] w-full lg:w-[70%]">
              We use carefully screened, reputable suppliers for materials and
              fittings. They must meet our quality standards to be included in a
              DC home.
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 flex-grow">
            {data.map(({ image }, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className="w-[250px] h-[100px] object-contain mx-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
