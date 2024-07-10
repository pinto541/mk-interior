import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import why1 from "@/assets/images/why1.webp";
import why2 from "@/assets/images/why2.webp";
import why3 from "@/assets/images/why3.webp";
import why4 from "@/assets/images/why4.webp";
import why5 from "@/assets/images/why5.webp";
import why1_1 from "@/assets/images/why1-1.png";
import why2_1 from "@/assets/images/why2-1.png";
import why3_1 from "@/assets/images/why3-1.png";
import why4_1 from "@/assets/images/why4-1.png";
import why5_1 from "@/assets/images/why5-1.png";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const data = [
  {
    label: "Personalized for You",
    value: "personalized",

    paragraph1:
      "Tell our design experts what makes you tick, and we deliver to your needs.",
    paragraph2:
      "Have a minimalist sensibility? Or a child who loves Virat Kohli? Our designers bring your taste to life.",
    paragraph3:
      "Feeling a bit cramped? Create up to 20% more space at a fraction of the cost of a larger home.",
    text: "Awards for Innovative Interior Design",
    buttonText: "Personalize Your Design",
    image1: why1,
    image2: why1_1,
  },
  {
    label: "Quality Guaranteed",
    value: "quality",
    paragraph1: "Quality is paramount at DesignCafe.",
    paragraph2:
      "We use DC gold plywood with a eucalyptus core, which is naturally termite and borer proof. ",
    paragraph3:
      "We use High Density Fibreboard (HDF) for dry areas and Boiling Water Proof (BWP) plywood and High Density and High Moisture Resistant (HDHMR) plywood for wet areas. All are ISI certified.",
    text: "Years Warranty",
    buttonText: "Get Assured Quality",
    image1: why2,
    image2: why2_1,
  },
  {
    label: "Project Management A to Z",
    value: "project",
    paragraph1:
      "Professional project managers answer your queries and keep the project on time.",
    paragraph2:
      "Trained carpenters and site staff ensure that your floors are protected during installation and that standard operating procedures on a 51 point checklist are followed.",
    paragraph3: "",
    text: "Quality Checks",
    buttonText: "Talk To an Expert Today",
    image1: why3,
    image2: why3_1,
  },
  {
    label: "Easy EMI options",
    value: "easy",
    paragraph1:
      "We have partnered with reputable lenders to make your interiors decision easier.",
    paragraph2:
      "EMIs can be split over 36 months and kick in after only a 20% payment (5% and 15%)",
    paragraph3: "",
    text: "EMI Available",
    buttonText: "Avail Attractive EMIs",
    image1: why4,
    image2: why4_1,
  },
  {
    label: "On-time Delivery",
    value: "ontime",
    paragraph1:
      "With more than 75% of materials factory-made on state-of-the-art machines, we ensure a superior finish, while keeping to timelines.",
    paragraph2:
      "We mockup products at our factory for a full quality check before carefully shipping it to you without scratches and damages in packaging made from recycled materials. ",
    paragraph3:
      "Our satisfaction lies in living up to your expectations, while delivering on time.",
    text: "Days to Move In",
    buttonText: "Start Your Project",
    image1: why5,
    image2: why5_1,
  },
];

function Content({ item }) {
  return (
    <>
      <div className="flex lg:flex-row flex-col p-8 gap-10">
        <div className="lg:w-1/3 w-full relative">
          <img src={item.image1} alt="" className="relative" />
          <div
            className="bg-white p-3 absolute bottom-0 right-0"
            style={{ width: "150px" }}
          >
            <img src={item.image2} alt="" className="" />
            <p className="mt-3">{item.text}</p>
          </div>
        </div>

        <div className="flex flex-col lg:gap-10 gap-4 w-full lg:w-2/3 text-[18px]">
          <p className="">{item.paragraph1}</p>
          <p className="">{item.paragraph2}</p>
          <p className="">{item.paragraph3}</p>
          <button className="bg-primary px-6 py-2 lg:mt-10 mt-4 text-white">
            {item.buttonText}
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
  const [activeTab, setActiveTab] = React.useState("personalized");

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

export default function Why() {
  return (
    <>
      <div className="p-8 flex flex-col lg:gap-10 gap-5 bg-secondary">
        <h2 className="text-[20px] lg:text-[25px] font-bold">Why DesignCafe</h2>
        <div className="lg:block hidden">
          <UnderlineTabs />
        </div>
        <div className="lg:hidden">
          <AccordionMobile />{" "}
        </div>
      </div>
    </>
  );
}
