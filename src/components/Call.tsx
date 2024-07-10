
import { FaPhone } from "react-icons/fa";

const CallButton = () => {
  const handleCall = () => {
    // Replace the phone number with your own
    window.location.href = "tel:8496847337";
  };

  return (
    <button
      className=" md:hidden  text-white py-3 px-3 rounded-full fixed bottom-8 left-1 z-10 shadow-lg hover:bg-opacity-60 transition duration-300" style={{backgroundColor:'#4681f4'}}
      onClick={handleCall}
    >
      <FaPhone className="text-3xl" />
    </button>
  );
};

export default CallButton;
