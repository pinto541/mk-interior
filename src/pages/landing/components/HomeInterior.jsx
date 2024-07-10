import React from "react";
import interior1 from "@/assets/images/interior1.jpg";
import interior2 from "@/assets/images/interior2.jpg";
import interior3 from "@/assets/images/interior3.jpg";
import interior4 from "@/assets/images/interior4.webp";
import { Link } from "react-router-dom";

const interiorData = [
  {
    number: "01",
    title: "Call us or Visit us",
    image: interior1,
  },
  {
    number: "02",
    title: "Choose your tiles/Stones",
    image: interior2,

  },
  {
    number: "03",
    title: "Finalize your designs",
    image: interior3,

  },
  {
    number: "04",
    title: "Get your Tiles/Stones delivered",
    image: interior4,

  },
];

export default function HomeInterior() {
  return (
    <>
      <div className="p-10 flex flex-col lg:gap-10 gap-5">
      <div className="text-black pt-32 text-center">
          
          <h2 className="text-3xl font-bold">Our Process</h2>
          <div className="flex justify-center items-center space-x-3 mt-1">
            <hr className="border-2 border-brown-500 w-1/12" />
            <hr className="border-2 border-white w-[1%]" />
          </div>
        </div>
       

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {interiorData.map((item, index) => (
            <div className="flex flex-col">
              <img src={item.image} alt="" className="" />
              <div className="flex items-center gap-2">
                <p className="text-[24px] lg:text-[40px]">{item.number}</p>
                <p className="text-[14px] lg:text-[20px]">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-10 justify-center">
          
            <button className="bg-brown-800 hover:bg-brown-200 py-2 px-6 text-[14px] lg:text-[20px] text-white">Book Consultation</button>

        </div>
      </div>
    </>
  );
}
