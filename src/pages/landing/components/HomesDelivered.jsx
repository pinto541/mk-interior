import React from "react";
import delivered1 from "../../../assets/3.jpeg"
import delivered2 from "../../../assets/6.jpeg";

export default function HomesDelivered() {
  return (
    <>
      <div className="p-8 flex flex-col lg:gap-10 gap-5">
      <div className="text-black pt-32 text-center">
          
          <h2 className="text-3xl font-bold">Our Recent Projects</h2>
          <div className="flex justify-center items-center space-x-3 mt-1">
            <hr className="border-2 border-brown-500 w-1/12" />
            <hr className="border-2 border-white w-[1%]" />
          </div>
        </div>

        <div className="lg:relative lg:p-10">
          <img src={delivered1} alt="" className="" />
          {/* <p className="lg:absolute lg:p-10 lg:bg-white lg:top-1/2 lg:-right-[60px] lg:text-[25px] lg:w-[40%] text-center text-[12px] md:text-[14px]">
            Shankarnarayan Balakrishna’s 3 BHK Home In Bangalore
          </p> */}
        </div>

        <div className="lg:relative lg:p-5 flex lg:flex-row flex-col justify-end">
 
  <img src={delivered2} alt="" className="" />
  {/* <p className="z-[9999] lg:absolute lg:p-10 lg:bg-white lg:top-[200px] lg:-left-[60px] lg:text-[25px] lg:w-[40%] text-center text-[12px] md:text-[14px]">
    Karthikeyan And Gauthami’s 2 BHK Home In Bangalore
  </p> */}
</div>


        {/* <div className="flex items-center gap-10 justify-center">
          <button className="underline bg-transparent text-primary text-[14px] lg:text-[20px]">
            View All Projects{">"}
          </button>
         
        </div> */}
      </div>
    </>
  );
}
