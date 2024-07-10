import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import kitchen1 from "@/assets/images/kitchen1.jpg";
import kitchen2 from "@/assets/images/kitchen2.jpg";
import kitchen3 from "@/assets/images/kitchen3.jpg";
import kitchen4 from "@/assets/images/kitchen4.jpg";
import bedroom1 from "@/assets/images/bedroom1.jpg";
import bedroom2 from "@/assets/images/bedroom2.jpg";
import bedroom3 from "@/assets/images/bedroom3.jpg";
import bedroom4 from "@/assets/images/bedroom4.jpg";
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const data = [
  {
    label: "Kitchen Guides",
    value: "kitchen",

    card: [
      {
        image: kitchen1,
        title: "A Guide To Planning Your Kitchen Interior Design",
        desc: "The process of planning your kitchen interiors invoolves more than just picking the...",
      },
      {
        image: kitchen2,
        title: "Modular Kitchen Design Types",
        desc: "Modular kitchens have become the hotest topic i town! The fast-paced lifestyle of...",
      },
      {
        image: kitchen3,
        title: "What Is The Difference Between A Modular And Civil Kitchen",
        desc: "Have you just bought your dream houe or want to give your existing...",
      },
      {
        image: kitchen4,
        title: "5 Things To Know Before Designing A Modular Kitchen",
        desc: "Modular kitchens are a popular choice among modern homeowners because they utilize every....",
      },
    ],
  },
  {
    label: "Bedroom Guides",
    value: "bedroom",

    card: [
      {
        image: bedroom1,
        title: "Checklist For Arranging Furniture In A Small Bedroom",
        desc: "Having an unorganised bedroom space can be a chaotic living experience for everyone,…",
      },
      {
        image: bedroom2,
        title: "Different Types Of Bedroom Lighting For Your Home",
        desc: "Your bedroom is your safe haven and a place exclusively for you to…",
      },
      {
        image: bedroom3,
        title: "A Bedroom Interior Design Checklist",
        desc: "you planning your bedroom interiors? Our design checklist will get you covered...",
      },
      {
        image: bedroom4,
        title: "10 Interior Design Styles For Your Bedroom",
        desc: "Do you want a dream bedroom? Check out our style guide now ...",
      },
    ],
  },
  {
    label: "Living Room Guides",
    value: "living",
    card: [
      {
        image: bedroom1,
        title: "Checklist For Arranging Furniture In A Small Bedroom",
        desc: "Having an unorganised bedroom space can be a chaotic living experience for everyone,…",
      },
      {
        image: bedroom2,
        title: "Different Types Of Bedroom Lighting For Your Home",
        desc: "Your bedroom is your safe haven and a place exclusively for you to…",
      },
      {
        image: bedroom3,
        title: "A Bedroom Interior Design Checklist",
        desc: "you planning your bedroom interiors? Our design checklist will get you covered...",
      },
      {
        image: bedroom4,
        title: "10 Interior Design Styles For Your Bedroom",
        desc: "Do you want a dream bedroom? Check out our style guide now ...",
      },
    ],
  },
  {
    label: "Kids Room Guides",
    value: "kids",
    card: [
      {
        image: bedroom1,
        title: "Checklist For Arranging Furniture In A Small Bedroom",
        desc: "Having an unorganised bedroom space can be a chaotic living experience for everyone,…",
      },
      {
        image: bedroom2,
        title: "Different Types Of Bedroom Lighting For Your Home",
        desc: "Your bedroom is your safe haven and a place exclusively for you to…",
      },
      {
        image: bedroom3,
        title: "A Bedroom Interior Design Checklist",
        desc: "you planning your bedroom interiors? Our design checklist will get you covered...",
      },
      {
        image: bedroom4,
        title: "10 Interior Design Styles For Your Bedroom",
        desc: "Do you want a dream bedroom? Check out our style guide now ...",
      },
    ],
  },
  {
    label: "Study Room Guides",
    value: "study",
    card: [
      {
        image: bedroom1,
        title: "Checklist For Arranging Furniture In A Small Bedroom",
        desc: "Having an unorganised bedroom space can be a chaotic living experience for everyone,…",
      },
      {
        image: bedroom2,
        title: "Different Types Of Bedroom Lighting For Your Home",
        desc: "Your bedroom is your safe haven and a place exclusively for you to…",
      },
      {
        image: bedroom3,
        title: "A Bedroom Interior Design Checklist",
        desc: "you planning your bedroom interiors? Our design checklist will get you covered...",
      },
      {
        image: bedroom4,
        title: "10 Interior Design Styles For Your Bedroom",
        desc: "Do you want a dream bedroom? Check out our style guide now ...",
      },
    ],
  },
];

function Content({ item }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <h2 className="">{`Are You Designing Your ${item.value}?`}</h2>
        <p className="">
          {`Below are the few guides which will help you to design your ${item.value} in
          most elegant way`}
        </p>
        <div className="slider-container p-3 ">
          <Slider
            {...settings}
            
          >
            {item.card.map((card, index) => (
              <div key={index} className=" border border-black lg:p-3 p-0 w-full mb-3 ">
                <div className="flex lg:flex-row flex-col gap-3">
                  <div className="lg:max-w-[198px] w-full">
                    <img src={card.image} className="" alt="" />
                  </div>
                  <div className="lg:mt-5 lg:h-auto h-[80px] lg:p-0 p-3">
                    <h2 className="lg:text-[20px] text-[14px] lg:leading-5 leading-4 lg:mb-4 mb-3 h-[40%]">
                      {card.title}
                    </h2>
                    <p className="lg:text-[14px] text-[12px] leading-3 h-[60%] ">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex items-center justify-center">
          <button className="underline bg-transparent text-primary text-[14px] lg:text-[20px]">
            View All Design Guides{">"}
          </button>
        </div>
      </div>
    </>
  );
}

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionMobile() {
  const [open, setOpen] = React.useState(null);

  const handleOpen = (index) => {
    setOpen((prevOpen) => (prevOpen === index ? null : index));
  };
  return (
    <>
      {data.map((item, index) => (
        <Accordion
          key={item.value}
          open={open === index}
          icon={<Icon id={index} open={open} />}
        >
          <AccordionHeader
            className="font-normal lg:text-[20px] text-[14px]"
            onClick={() => handleOpen(index)}
          >
            {item.label}
          </AccordionHeader>
          <AccordionBody>
            <Content item={item} />
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
}

export function UnderlineTabs() {
  const [activeTab, setActiveTab] = React.useState("kitchen");

  return (
    <Tabs id="custom-animation" value={activeTab}>
      <TabsHeader
        className="rounded-none  border-b-[4px] border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-[#d5b58f] shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map((item) => (
          <TabPanel key={item.value} value={item.value}>
            <Content item={item} />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

export default function Guides() {
  return (
    <>
      <div className="p-8 flex flex-col lg:gap-10 gap-5 bg-secondary">
        <h2 className="text-[20px] lg:text-[25px] font-bold">
          Guides For Home Interiors
        </h2>
        <div className="lg:block hidden">
          <UnderlineTabs />
        </div>
        <div className="lg:hidden">
          <AccordionMobile />
        </div>
      </div>
    </>
  );
}
