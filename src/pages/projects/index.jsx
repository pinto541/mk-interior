import React, { useEffect, useState } from "react";

import { TbReload } from "react-icons/tb";
import { Carousel } from "react-responsive-carousel";

import Kitchen1 from "../../assets/images/kitchen1.jpg";
import Kitchen2 from "../../assets/images/kitchen2.jpg";
import Kitchen3 from "../../assets/images/kitchen3.jpg";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { ImQuotesLeft } from "react-icons/im";
import { FiFilter } from "react-icons/fi";

export default function Projects() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 960);
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 960);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-secondary">
      <div className="flex  justify-between px-8 font-semibold pt-14 ">
        <div>
          <p>Recent Projects</p>
        </div>
        <div>
          <p className="flex ">
            <span className="flex space-x-4">
              <TbReload className="size-4" />{" "}
              <FiFilter className="size-4 fill-black mt-[1px]" />
            </span>
            Filter
          </p>
        </div>
      </div>

      <div className="pt-28 md:w-3/4 md:mx-auto md:bg-white md:pt-0 md:mt-28">
        <div className="rounded p-2">
          {isDesktop ? (
            <Carousel
              autoPlay
              swipeable={true}
              emulateTouch={true}
              infiniteLoop
              showThumbs={false}
              showStatus={false}
            >
              {/* Desktop Images */}
              <div className=" w-screen hidden lg:block">
                <img src={Kitchen1} className="size-60 md:h-96" />
                <p className="italic font-semibold w-5/6 text-sm mx-auto text-center">
                  A living cum dining room with wooden furniture gives this
                  space classic Indian look,
                </p>
              </div>
              <div className="size-60 w-screen hidden lg:block">
                <img src={Kitchen2} />
                <p className="italic font-semibold w-5/6 text-sm mx-auto text-center">
                  A living cum dining room with wooden furniture gives this
                  space classic Indian look,
                </p>
              </div>
              <div className="size-60 w-screen hidden lg:block">
                <img src={Kitchen2} />
                <p className="italic font-semibold w-5/6 text-sm mx-auto text-center">
                  A living cum dining room with wooden furniture gives this
                  space classic Indian look,
                </p>
              </div>
            </Carousel>
          ) : (
            <Carousel
              autoPlay
              swipeable={true}
              emulateTouch={true}
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              // className="absolute"
            >
              {/* Mobile Images */}
              <div className="size-60 w-screen lg:hidden ">
                <img src={Kitchen1} />
                <p className="italic font-semibold w-5/6 text-sm mx-auto text-center">
                  A living cum dining room with wooden furniture gives this
                  space classic Indian look,
                </p>
              </div>
              <div className="size-60 w-screen lg:hidden">
                <img src={Kitchen2} />
                <p className="italic font-semibold w-5/6 text-sm mx-auto text-center">
                  A living cum dining room with wooden furniture gives this
                  space classic Indian look,
                </p>
              </div>

              <div className="size-60 w-screen lg:hidden">
                <img src={Kitchen3} />
                <p className="italic font-semibold w-5/6 text-sm mx-auto text-center">
                  A living cum dining room with wooden furniture gives this
                  space classic Indian look,
                </p>
              </div>
            </Carousel>
          )}
        </div>
        <div className="px-5 py-10 bg-white text-sm">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            ut vel eum, expedita quos enim dolore ea.
          </p>
          <p className="text-sm mt-5">
            Designed By: <span className="font-semibold">Priyanka</span>
          </p>
          {!isReduced && (
            <>
              <p
                onClick={() => setIsReduced(true)}
                className="mt-4 font-semibold text-primary cursor-pointer flex"
              >
                <span>More Details</span>
                <ChevronDownIcon className="size-4 mt-[1px]" />
              </p>
              <div className="mx-auto w-2/3 text-center md:flex md:justify-end">
                <button className="bg-primary px-4 py-2 text-[16px] text-center text-white ">
                  Get Free Quote
                </button>
              </div>
            </>
          )}

          {isReduced && (
            <div>
              <div>
                <p className="font-bold mt-5">Project Details</p>
                <div className="mt-3">
                  <div className="flex space-x-16 py-3 border-b-2 border-black ">
                    <p>Project Name</p>
                    <p>Ele Vana</p>
                  </div>
                  <div className="flex space-x-16 py-3 border-b-2 border-black ">
                    <p>Property Area </p>
                    <p>Sarjapur, Bengaluru</p>
                  </div>
                  <div className="flex space-x-16 py-3 border-b-2 border-black ">
                    <p>Property Type </p>
                    <p>3 BHK Villa</p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <p className="font-semibold">Client Brief</p>
                <p className="mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
                  sit. Repellat delectus dolor quo porro nihil sapiente quia
                  quis facilis repudiandae eveniet, dolorem esse similique
                  voluptas possimus hic temporibus recusandae? Ipsam amet dolor
                  unde a, fugit voluptate natus, id perspiciatis rem, molestiae
                  autem? Nisi, architecto, culpa cumque facilis pariatur tenetur
                  quae modi accusamus ea non dolorem vero veritatis, odit
                  itaque.
                </p>
              </div>

              <div className="mt-5">
                <p className="font-semibold">Design Solution</p>
                <p className="mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
                  sit. Repellat delectus dolor quo porro nihil sapiente quia
                  quis facilis repudiandae eveniet, dolorem esse similique
                  voluptas possimus hic temporibus recusandae? Ipsam amet dolor
                  unde a, fugit voluptate natus, id perspiciatis rem, molestiae
                  autem? Nisi, architecto, culpa cumque facilis pariatur tenetur
                  quae modi accusamus ea non dolorem vero veritatis, odit
                  itaque.
                </p>
              </div>
              <div className="mt-5">
                <p className="font-semibold">Client Feedback</p>
                <p className="mt-2 flex">
                  <span>
                    <ImQuotesLeft className="size-5 text-[#5a5959]" />{" "}
                  </span>
                  <span className="text-justify px-6 mt-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Est, sit. Repellat delectus dolor quo porro nihil sapiente
                    quia quis facilis repudiandae eveniet, dolorem esse
                    similique voluptas possimus hic temporibus recusandae? Ipsam
                    amet dolor unde a, fugit voluptate natus, id perspiciatis
                    rem, molestiae autem? Nisi, architecto, culpa cumque facilis
                    pariatur tenetur quae modi accusamus ea non dolorem vero
                    veritatis, odit itaque.
                  </span>
                </p>
                <p
                  onClick={() => setIsReduced(false)}
                  className="mt-4 font-semibold text-primary cursor-pointer flex"
                >
                  <span>Less Details</span>
                  <ChevronUpIcon className="size-4 mt-[2px]" />
                </p>
                <div className="mx-auto w-2/3 text-center md:flex md:justify-end">
                  <button className="bg-primary px-4 py-2 text-[16px] text-center text-white ">
                    Get Free Quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="pt-28 md:w-3/4 md:mx-auto md:bg-white md:pt-0 md:mt-28">
        <div className="rounded p-2">
          {isDesktop ? (
            <Carousel
              autoPlay
              swipeable={true}
              emulateTouch={true}
              infiniteLoop
              showThumbs={false}
              showStatus={false}
            >
              {/* Desktop Images */}
              <div className=" w-screen hidden lg:block">
                <img src={Kitchen1} className="size-60 md:h-96" />
                <p className="italic font-semibold w-5/6 text-sm mx-auto text-center">
                  A living cum dining room with wooden furniture gives this
                  space classic Indian look,
                </p>
              </div>
              <div className="size-60 w-screen hidden lg:block">
                <img src={Kitchen2} />
                <p className="italic font-semibold w-5/6 text-sm mx-auto text-center">
                  A living cum dining room with wooden furniture gives this
                  space classic Indian look,
                </p>
              </div>
              <div className="size-60 w-screen hidden lg:block">
                <img src={Kitchen2} />
                <p className="italic font-semibold w-5/6 text-sm mx-auto text-center">
                  A living cum dining room with wooden furniture gives this
                  space classic Indian look,
                </p>
              </div>
            </Carousel>
          ) : (
            <Carousel
              autoPlay
              swipeable={true}
              emulateTouch={true}
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              // className="absolute"
            >
              {/* Mobile Images */}
              <div className="size-60 w-screen lg:hidden ">
                <img src={Kitchen1} />
                <p className="italic font-semibold w-5/6 text-sm mx-auto text-center">
                  A living cum dining room with wooden furniture gives this
                  space classic Indian look,
                </p>
              </div>
              <div className="size-60 w-screen lg:hidden">
                <img src={Kitchen2} />
                <p className="italic font-semibold w-5/6 text-sm mx-auto text-center">
                  A living cum dining room with wooden furniture gives this
                  space classic Indian look,
                </p>
              </div>

              <div className="size-60 w-screen lg:hidden">
                <img src={Kitchen3} />
                <p className="italic font-semibold w-5/6 text-sm mx-auto text-center">
                  A living cum dining room with wooden furniture gives this
                  space classic Indian look,
                </p>
              </div>
            </Carousel>
          )}
        </div>
        <div className="px-5 py-10 bg-white text-sm">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            ut vel eum, expedita quos enim dolore ea.
          </p>
          <p className="text-sm mt-5">
            Designed By: <span className="font-semibold">Priyanka</span>
          </p>
          {!isReduced && (
            <>
              <p
                onClick={() => setIsReduced(true)}
                className="mt-4 font-semibold text-primary cursor-pointer flex"
              >
                <span>More Details</span>
                <ChevronDownIcon className="size-4 mt-[1px]" />
              </p>
              <div className="mx-auto w-2/3 text-center md:flex md:justify-end">
                <button className="bg-primary px-4 py-2 text-[16px] text-center text-white ">
                  Get Free Quote
                </button>
              </div>
            </>
          )}

          {isReduced && (
            <div>
              <div>
                <p className="font-bold mt-5">Project Details</p>
                <div className="mt-3">
                  <div className="flex space-x-16 py-3 border-b-2 border-black ">
                    <p>Project Name</p>
                    <p>Ele Vana</p>
                  </div>
                  <div className="flex space-x-16 py-3 border-b-2 border-black ">
                    <p>Property Area </p>
                    <p>Sarjapur, Bengaluru</p>
                  </div>
                  <div className="flex space-x-16 py-3 border-b-2 border-black ">
                    <p>Property Type </p>
                    <p>3 BHK Villa</p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <p className="font-semibold">Client Brief</p>
                <p className="mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
                  sit. Repellat delectus dolor quo porro nihil sapiente quia
                  quis facilis repudiandae eveniet, dolorem esse similique
                  voluptas possimus hic temporibus recusandae? Ipsam amet dolor
                  unde a, fugit voluptate natus, id perspiciatis rem, molestiae
                  autem? Nisi, architecto, culpa cumque facilis pariatur tenetur
                  quae modi accusamus ea non dolorem vero veritatis, odit
                  itaque.
                </p>
              </div>

              <div className="mt-5">
                <p className="font-semibold">Design Solution</p>
                <p className="mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
                  sit. Repellat delectus dolor quo porro nihil sapiente quia
                  quis facilis repudiandae eveniet, dolorem esse similique
                  voluptas possimus hic temporibus recusandae? Ipsam amet dolor
                  unde a, fugit voluptate natus, id perspiciatis rem, molestiae
                  autem? Nisi, architecto, culpa cumque facilis pariatur tenetur
                  quae modi accusamus ea non dolorem vero veritatis, odit
                  itaque.
                </p>
              </div>
              <div className="mt-5">
                <p className="font-semibold">Client Feedback</p>
                <p className="mt-2 flex">
                  <span>
                    <ImQuotesLeft className="size-5 text-[#5a5959]" />{" "}
                  </span>
                  <span className="text-justify px-6 mt-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Est, sit. Repellat delectus dolor quo porro nihil sapiente
                    quia quis facilis repudiandae eveniet, dolorem esse
                    similique voluptas possimus hic temporibus recusandae? Ipsam
                    amet dolor unde a, fugit voluptate natus, id perspiciatis
                    rem, molestiae autem? Nisi, architecto, culpa cumque facilis
                    pariatur tenetur quae modi accusamus ea non dolorem vero
                    veritatis, odit itaque.
                  </span>
                </p>
                <p
                  onClick={() => setIsReduced(false)}
                  className="mt-4 font-semibold text-primary cursor-pointer flex"
                >
                  <span>Less Details</span>
                  <ChevronUpIcon className="size-4 mt-[2px]" />
                </p>
                <div className="mx-auto w-2/3 text-center md:flex md:justify-end">
                  <button className="bg-primary px-4 py-2 text-[16px] text-center text-white ">
                    Get Free Quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="pt-28 md:w-3/4 md:mx-auto md:bg-white md:pt-0 md:mt-28">
        <div className="rounded p-2">
          {isDesktop ? (
            <Carousel
              autoPlay
              swipeable={true}
              emulateTouch={true}
              infiniteLoop
              showThumbs={false}
              showStatus={false}
            >
              {/* Desktop Images */}
              <div className=" w-screen hidden lg:block">
                <img src={Kitchen1} className="size-60 md:h-96" />
                <p className="italic font-semibold w-5/6 text-sm mx-auto text-center">
                  A living cum dining room with wooden furniture gives this
                  space classic Indian look,
                </p>
              </div>
              <div className="size-60 w-screen hidden lg:block">
                <img src={Kitchen2} />
                <p className="italic font-semibold w-5/6 text-sm mx-auto text-center">
                  A living cum dining room with wooden furniture gives this
                  space classic Indian look,
                </p>
              </div>
              <div className="size-60 w-screen hidden lg:block">
                <img src={Kitchen2} />
                <p className="italic font-semibold w-5/6 text-sm mx-auto text-center">
                  A living cum dining room with wooden furniture gives this
                  space classic Indian look,
                </p>
              </div>
            </Carousel>
          ) : (
            <Carousel
              autoPlay
              swipeable={true}
              emulateTouch={true}
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              // className="absolute"
            >
              {/* Mobile Images */}
              <div className="size-60 w-screen lg:hidden ">
                <img src={Kitchen1} />
                <p className="italic font-semibold w-5/6 text-sm mx-auto text-center">
                  A living cum dining room with wooden furniture gives this
                  space classic Indian look,
                </p>
              </div>
              <div className="size-60 w-screen lg:hidden">
                <img src={Kitchen2} />
                <p className="italic font-semibold w-5/6 text-sm mx-auto text-center">
                  A living cum dining room with wooden furniture gives this
                  space classic Indian look,
                </p>
              </div>

              <div className="size-60 w-screen lg:hidden">
                <img src={Kitchen3} />
                <p className="italic font-semibold w-5/6 text-sm mx-auto text-center">
                  A living cum dining room with wooden furniture gives this
                  space classic Indian look,
                </p>
              </div>
            </Carousel>
          )}
        </div>
        <div className="px-5 py-10 bg-white text-sm">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            ut vel eum, expedita quos enim dolore ea.
          </p>
          <p className="text-sm mt-5">
            Designed By: <span className="font-semibold">Priyanka</span>
          </p>
          {!isReduced && (
            <>
              <p
                onClick={() => setIsReduced(true)}
                className="mt-4 font-semibold text-primary cursor-pointer flex"
              >
                <span>More Details</span>
                <ChevronDownIcon className="size-4 mt-[1px]" />
              </p>
              <div className="mx-auto w-2/3 text-center md:flex md:justify-end">
                <button className="bg-primary px-4 py-2 text-[16px] text-center text-white ">
                  Get Free Quote
                </button>
              </div>
            </>
          )}

          {isReduced && (
            <div>
              <div>
                <p className="font-bold mt-5">Project Details</p>
                <div className="mt-3">
                  <div className="flex space-x-16 py-3 border-b-2 border-black ">
                    <p>Project Name</p>
                    <p>Ele Vana</p>
                  </div>
                  <div className="flex space-x-16 py-3 border-b-2 border-black ">
                    <p>Property Area </p>
                    <p>Sarjapur, Bengaluru</p>
                  </div>
                  <div className="flex space-x-16 py-3 border-b-2 border-black ">
                    <p>Property Type </p>
                    <p>3 BHK Villa</p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <p className="font-semibold">Client Brief</p>
                <p className="mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
                  sit. Repellat delectus dolor quo porro nihil sapiente quia
                  quis facilis repudiandae eveniet, dolorem esse similique
                  voluptas possimus hic temporibus recusandae? Ipsam amet dolor
                  unde a, fugit voluptate natus, id perspiciatis rem, molestiae
                  autem? Nisi, architecto, culpa cumque facilis pariatur tenetur
                  quae modi accusamus ea non dolorem vero veritatis, odit
                  itaque.
                </p>
              </div>

              <div className="mt-5">
                <p className="font-semibold">Design Solution</p>
                <p className="mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
                  sit. Repellat delectus dolor quo porro nihil sapiente quia
                  quis facilis repudiandae eveniet, dolorem esse similique
                  voluptas possimus hic temporibus recusandae? Ipsam amet dolor
                  unde a, fugit voluptate natus, id perspiciatis rem, molestiae
                  autem? Nisi, architecto, culpa cumque facilis pariatur tenetur
                  quae modi accusamus ea non dolorem vero veritatis, odit
                  itaque.
                </p>
              </div>
              <div className="mt-5">
                <p className="font-semibold">Client Feedback</p>
                <p className="mt-2 flex">
                  <span>
                    <ImQuotesLeft className="size-5 text-[#5a5959]" />{" "}
                  </span>
                  <span className="text-justify px-6 mt-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Est, sit. Repellat delectus dolor quo porro nihil sapiente
                    quia quis facilis repudiandae eveniet, dolorem esse
                    similique voluptas possimus hic temporibus recusandae? Ipsam
                    amet dolor unde a, fugit voluptate natus, id perspiciatis
                    rem, molestiae autem? Nisi, architecto, culpa cumque facilis
                    pariatur tenetur quae modi accusamus ea non dolorem vero
                    veritatis, odit itaque.
                  </span>
                </p>
                <p
                  onClick={() => setIsReduced(false)}
                  className="mt-4 font-semibold text-primary cursor-pointer flex"
                >
                  <span>Less Details</span>
                  <ChevronUpIcon className="size-4 mt-[2px]" />
                </p>
                <div className="mx-auto w-2/3 text-center md:flex md:justify-end">
                  <button className="bg-primary px-4 py-2 text-[16px] text-center text-white ">
                    Get Free Quote
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="py-10">
        <p className="text-center text-primary">Load More </p>
      </div>

      <div className="py-5 bg-white ">
        <p className=" w-2/3 mx-auto text-center">
          Disclaimer: The images on our site are for reference only. Pleae
          contact us to discuss your specific needs and to tailor a unique
          design for you.
        </p>
      </div>
    </div>
  );
}
