import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import BookingImage from "@/assets/images/bookingImage.jpg";
import BookingImageMobile from "@/assets/images/bookingImageMobile.jpg";
import PhoneInput from "react-phone-number-input";
import "../../node_modules/react-phone-number-input/style.css";

export function BookingModal({ open, setOpen, handleOpen }) {
  const [formData, setFormData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [active, setActive] = React.useState(null);

  const handleInputChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: undefined }); // Clear error on input change
  };

  const handleClick = (index) => {
    setActive((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <div className="flex lg:flex-row flex-col w-full justify-center">
          <div className=" w-2/5 hidden lg:block">
            <img src={BookingImage} />
           
          </div>
          <div className=" w-full block md:hidden relative">
            <img src={BookingImageMobile} />
            <div className="justify-end pr-2 pt-2 md:hidden flex absolute top-0 right-0">
              <XMarkIcon
                className="h-6 w-6 cursor-pointer"
                strokeWidth={2}
                onClick={handleOpen}
              />
            </div>
            <h2 className="text-xl text-center py-2 font-semibold leading-5 bg-primary text-white">
              Get a free design consultation
            </h2>
          </div>
          <div className="bg-secondary  lg:w-3/5 w-full">
            <div className="justify-end pr-2 pt-2 lg:block hidden">
              <XMarkIcon
                className="h-6 w-6 cursor-pointer"
                strokeWidth={2}
                onClick={handleOpen}
              />
            </div>
            <div className="w-[95%] mx-auto flex flex-col gap-2">
              <h2 className="text-2xl font-semibold leading-5 mb-4 lg:block hidden">
                Get a free design consultation
              </h2>
              <p className="text-black text-sm mt-2 md:mt-0">Property type</p>
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2">
                  <button
                    onClick={() => handleClick(1)}
                    className={` text-gray-600 text-sm p-2 rounded-md border-2 border-gray-300 font-[500] ${
                      active === 1 ? "bg-gray-600 text-white" : "bg-white"
                    }`}
                  >
                    1 BHK
                  </button>
                  <button
                    onClick={() => handleClick(2)}
                    className={` text-gray-600 text-sm p-2 rounded-md border-2 border-gray-300 font-[500] ${
                      active === 2 ? "bg-gray-600 text-white" : "bg-white"
                    }`}
                  >
                    2 BHK
                  </button>
                  <button
                    onClick={() => handleClick(3)}
                    className={` text-gray-600 text-sm p-2 rounded-md border-2 border-gray-300 font-[500] ${
                      active === 3 ? "bg-gray-600 text-white" : "bg-white"
                    }`}
                  >
                    3 BHK
                  </button>
                  <button
                    onClick={() => handleClick(4)}
                    className={` text-gray-600 text-sm p-2 rounded-md border-2 border-gray-300 font-[500] ${
                      active === 4 ? "bg-gray-600 text-white" : "bg-white"
                    }`}
                  >
                    4+ BHK/Duplex
                  </button>
                </div>
                <p className="text-xs">
                  {active === 1
                    ? "We find hidden space in 1BHKs"
                    : active === 2
                    ? "We've got smart designs for your 2 bedroom home"
                    : "Our designs satisfy all family members"}
                </p>
              </div>
              <div className="flex flex-col mt-4 items-start">
                <select
                  className="w-full border-2 py-2 border-gray-300 px-2 text-gray-500 font-[500] rounded-md"
                  name="property"
                  value={formData.property || ""}
                >
                  <option value="">Property Location</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <p className="text-red-400 text-xs my-1">
                  please select a location
                </p>
                <input
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={(e) => handleInputChange(e.target.value, "name")}
                  className="w-full border-2 py-1 border-gray-300 px-2 text-black rounded-md mb-5"
                  placeholder="Input name"
                  required
                />
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  className="w-full border-2 py-1 border-gray-300 px-2 text-black rounded-md lg:mb-8 mb-4"
                  name="phone"
                  placeholder="Input Phone"
                  value={formData.phone || ""}
                  onChange={(value) => handleInputChange(value, "phone")}
                  required
                />
                <div className="flex items-center mt-2 ml-2 gap-1">
                  <input type="checkbox" className="" />
                  <p className="text-xs">Yes, send me updates via Whatsapp.</p>
                </div>
              </div>
              <button className="bg-red-700 text-white text-center py-2 rounded-md">
                Book a Free Consultation
              </button>
              <p className="text-xs text-center mb-2">
                By submitting, you consent to{" "}
                <span className="text-primary">privacy policy</span> and{" "}
                <span className="text-primary">terms of use</span>
              </p>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
