import React from "react";
import Hero from "./components/Hero";
import { BookingModal } from "../../components/BookingModal";
import HomeInterior from "./components/HomeInterior";
import HomesDelivered from "./components/HomesDelivered";
import PopularDesigns from "./components/PopularDesigns";
// import Banner from "./components/Banner";
import Why from "./components/Why";
import Testimonial from "./components/Testimonial";
import Suppliers from "./components/Suppliers";
// import Designers from "./components/Designers";
// import Guides from "./components/Guides";
import myBan from "../../assets/images/bedroom1.jpg";

import WhatWeOffer from "./components/WhatWeOffer";
import MyAbout from "../about/components/MyAbout";
import Logo from "../../assets/images/logo.svg";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import myBan1 from "../../assets/images/bedroom2.jpg";
import myBan2 from "../../assets/images/bedroom3.jpg";
import Slider from "react-slick";
import Client from "./components/Client";

export default function Landing() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,

    // centerMode: true,
    responsive: [
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
      title: "Professional Interior",
      message: "The Interior professional workers available in the xinterio",
      image: myBan,
    },
    {
      title: "Interior Work Plan",
      message: "The Interior professional workers available in the xinterio",
      image: myBan2,
    },
    {
      title: "Interior Work Plan",
      message: "The Interior professional workers available in the xinterio",
      image: myBan1,
    },
  ];
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  // React.useEffect(() => {
  //   handleOpen();
  // }, []);

  return (
    <>
      <Hero/>
      
      <MyAbout banner={Boolean} />
      <WhatWeOffer />
      <HomesDelivered />
      <PopularDesigns />
      
      
      {/* <Banner /> */}
      {/* <Why /> */}
      {/* <Designers /> */}
      {/* <Guides /> */}
      <HomeInterior />
      <Testimonial />
      <Suppliers />
      <Client/>
      <BookingModal open={open} setOpen={setOpen} handleOpen={handleOpen} />
    </>
  );
}
