import React from "react";
import nav_consult from "@/assets/images/nav-consult.png";
import nav_home from "@/assets/images/nav-home.png";
import nav_contact from "@/assets/images/nav-contact.png";
import nav_whatsapp from "@/assets/images/nav-whatsapp.png";
import { Link } from "react-router-dom";

export default function NavBottom() {
  return (
    <>
      <div className="md:hidden fixed bottom-0 bg-brown-500 h-[76px] flex items-center justify-between w-full px-5 py-2 text-white">
        <Link to="" className="flex flex-col gap-1 items-center">
          <img src={nav_contact} alt="" className="w-[37px]" />
          <p className="">Call Now</p>
        </Link>
        <Link to="" className="flex flex-col gap-1 items-center">
          <img src={nav_consult} alt="" className="w-[37px]" />
          <p className="">Mail us</p>
        </Link>
        <Link to="" className="flex flex-col gap-1 items-center">
          <img src={nav_whatsapp} alt="" className="w-[37px]" />
          <p className="">WhatsApp</p>
        </Link>
      </div>
    </>
  );
}
