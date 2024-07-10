import React from "react";
import designers from "@/assets/images/designer.webp";


export default function Designers() {
  return (
    <>
      <div className="p-8 flex flex-col lg:gap-10 gap-5">
        <h2 className="text-[20px] lg:text-[25px] font-bold">
          Meet Our Designers
        </h2>
        <div className="flex lg:flex-row flex-col gap-3">
          <div className="flex flex-col lg:gap-10 gap-4 w-full lg:w-2/3 text-[18px]">
            <p className="">The magicians who transform and create space...</p>
            <p className="">
              Boho chic, rustic, mediterranean, minimalist, modern, industrial,
              classic-contemporary, art deco, traditional {"–"} do you get lost with
              these terms? Or perhaps you know what you want, but don{"’"}t know how
              to get there?
            </p>
            <p className="">
              That is why we have a team of 400+ designers to advise customers.
            </p>
            <button className="bg-primary px-6 py-2 lg:mt-10 mt-4 text-white">
             Talk To us Today!
            </button>
          </div>
          <img src={designers} alt="" className="" />
        </div>
      </div>
    </>
  );
}
