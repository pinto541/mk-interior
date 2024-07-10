import React, { useState } from "react";
import Logo from "./Logo";
import { Collapse, IconButton, Typography } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

function NavList() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <ul className="my-2 flex flex-col gap-3 mx-5 lg:mx-0 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-semibold text-lg"
      >
        <Link
          to="/"
          className="flex items-center hover:text-brown-700 transition-colors"
        >
          Home
        </Link>
      </Typography>
      <hr className="border-primary lg:hidden" />

      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="relative p-1 font-semibold text-lg"
      >
        <button
          onClick={handleDropdownToggle}
          className="flex items-center hover:text-brown-700 transition-colors"
        >
          Design Gallery
        </button>
        {openDropdown && (
          <div className="absolute left-0 mt-2 w-56 bg-brown-800 text-white rounded-lg shadow-lg z-50 lg:w-56">
            <ul className="flex flex-col p-2">
              <li className="p-2 rounded-lg hover:bg-brown-700 transition-colors">
                <Link to="/tiles">Tiles & Natural Stones</Link>
              </li>
              <li className="p-2 rounded-lg hover:bg-brown-700 transition-colors">
                <Link to="/sanitary">Sanitaryware</Link>
              </li>
              <li className="p-2 rounded-lg hover:bg-brown-700 transition-colors">
                <Link to="/interior">Interior Products</Link>
              </li>
            </ul>
          </div>
        )}
      </Typography>
      <hr className="border-primary lg:hidden" />

      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-semibold text-lg"
      >
        <Link
          to="/about"
          className="flex items-center hover:text-brown-700 transition-colors"
        >
          About Us
        </Link>
      </Typography>
      <hr className="border-primary lg:hidden" />

      <Typography
        as="li"
        variant="h6"
        color="blue-gray"
        className="p-1 font-semibold text-lg"
      >
        <Link
          to="/contact"
          className="flex items-center hover:text-brown-700 transition-colors"
        >
          Contact Us
        </Link>
      </Typography>

      <div className="hidden lg:flex lg:items-center lg:gap-4">
        <a href="tel:+91">
          <button className="bg-brown-800 text-white px-7 py-2 rounded-md hover:bg-black-600 transition-colors">
            Call Us
          </button>
        </a>
      </div>
    </ul>
  );
}

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className="px-5 py-5 flex justify-between items-center">
        <Logo />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </>
  );
}
