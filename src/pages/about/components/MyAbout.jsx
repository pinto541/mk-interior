import who from "../../../assets/images/bedroom2.jpg";
import img2 from "../../../assets/images/bedroom3.jpg";
import {
  HiBriefcase,
  HiCheckCircle,
  HiTranslate,
  HiViewList,
} from "react-icons/hi";
import { motion } from "framer-motion";

export default function MyAbout({ banner }) {
  return (
    <div>
     
      
      <div className="mx-auto w-full mt-10 mb-5 md:w-2/3 lg:w-[95%] text-center md:text-left lg:mt-48">
        <div className="lg:flex lg:space-x-8">
          <div className="lg:w-[50%]">
            <div className="px-10 lg:mt-16">
              <p className="text-primary text-lg">ABOUT DESIHGN STUDIO</p>
              <h2 className="text-3xl font-bold font-sans">
                We're Providing Best Quality Products with Best Services
              </h2>
              <div className="w-4/5 mt-5 lg:flex lg:mt-10 lg:space-x-8 ">
                <div className="lg:w-[50%] border-2 border-l-4 px-6 py-5 flex items-center space-x-2 font-semibold border-brown-600 rounded-r-full cursor-pointer hover:animate-pulse hover:bg-brown-600 hover:text-white">
                  <HiTranslate className="size-10" />
                  <p>Unique Collection</p>
                </div>
                <div className="lg:w-[50%] lg:mt-0 mt-5 border-2 border-l-4 px-6 py-5 flex items-center space-x-2 font-semibold border-brown-600 rounded-r-full cursor-pointer hover:animate-pulse hover:bg-brown-600 hover:text-white">
                  <HiBriefcase className="size-10" />
                  <p>Premium Quality Products</p>
                </div>
              </div>
            </div>
            <div className="px-10 mt-12">
              <p className={`text-left text-lg text-brown-600 ${banner ? 'font-sans' : ''}`}>
                At Design Studio, we specialize in supplying premium tiles, natural stone cladding, interior products, and sanitaryware to discerning customers. With over a decade of experience in the industry, our mission is to provide unique and exclusive products that enhance the beauty and functionality of your new abode.
              </p>
              {banner && (
                <button className="px-6 py-4 flex justify-start mt-10 bg-brown-900 text-white font-sans font-bold border-l-4 hover:bg-brown-200 border-l-brown-300 hover:bg-brown-300">
                  Read More 
                </button>
              )}
            </div>

            <div className={banner ? "hidden" : "md:flex md:space-x-8"}>
              <div className="px-10 mt-8 text-center md:text-left w-3/4 mx-auto md:mx-0">
                <h2 className="font-bold text-xl flex justify-center items-center md:justify-start space-x-2 font-sans">
                  <HiCheckCircle className="size-7" /> Quality Material
                </h2>
                <p className="mt-4 text-base">
                  Our clients like the quality of our services and have helped us to grow by providing recurring orders.
                </p>
              </div>

              <div className="px-10 mt-8 text-center md:text-left w-3/4 mx-auto md:mx-0">
                <h2 className="font-bold text-xl flex justify-center items-center md:justify-start space-x-2 font-sans">
                  <HiCheckCircle className="size-7" />
                  Professional Team
                </h2>
                <p className="mt-4 text-base">
                  We have a team which is dedicated to providing the best to our clients
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-[50%] pl-12">
            <motion.div className="py-10 md:relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1, x: "0%" }}
                animate={{ x: "60%" }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 200,
                  duration: 1.5,
                }}
                className="md:flex md:flex-row-reverse md:justify-center md:items-center"
              >
                <div className="px-10 ">
                  <img
                    src={who}
                    alt=""
                    className="size-96  mx-auto rounded-r-[120px] rounded-bl-[120px] rounded-tl-none md:size-[550px] lg:size-[450px] lg:rounded-r-[90px]"
                  />
                  <img
                    src={img2}
                    alt=""
                    className="size-46 rounded-l-[90px] rounded-tr-[90px] hidden md:flex md:absolute md:-left-20 md:size-72 lg:size-[400px] lg:top-40"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
