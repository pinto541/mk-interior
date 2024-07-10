import React from "react";
import banner from "@/assets/images/banner.jpg";
import bannerMobile from "@/assets/images/bannerMobile.jpg";

export default function Banner() {
  return (<>
    <div className="p-10 flex flex-col lg:gap-10 gap-5">
    <img src={banner} alt="" className="lg:block hidden" />
    <img src={bannerMobile} alt="" className="lg:hidden" />
    </div>
    </>
  );
}
