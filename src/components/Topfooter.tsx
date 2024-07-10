
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavTop = () => {
  return (
    <div className="bg-slate-100 w-full py-1 hidden md:block">
      <div className="container mx-auto flex justify-between">
        <div className="contacts flex space-x-10 text-black font-medium">
          <div className="flex">
            <FaPhoneSquareAlt className="text-xl mr-2" />
            <p className="tracking-wider text-base">+91 8496847337</p>
          </div>
          <div className="flex">
            <MdEmail className="text-xl mr-2" />
            <p className="tracking-wider text-base">info.innov8@gmail.com</p>
          </div>
        </div>
        <div className="socials flex space-x-5 text-black text-xl">
          <Link to="/" target="_blank">
            <FaSquareFacebook className="hover:text-black" />
          </Link>
          <Link to="/">
            <FaSquareTwitter className="hover:text-black" />
          </Link>
          <Link to="/">
            <FaSquareYoutube className="hover:text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavTop;
