import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = <RiMicroscopeLine size={35} className=" text-[#9a1aca]" />;
  const icon2 = <MdHealthAndSafety size={35} className=" text-[#9a1aca]" />;
  const icon3 = <FaHeartbeat size={35} className=" text-[#9a1aca]" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div className="m-auto">
          <h1 className=" text-4xl font-semibold text-center  text-[#9a1aca]">
            Our Services
          </h1>
          <p className=" mt-2 text-center " style={{ maxWidth: "700px" }}>
            We bring forth good news by being the agency that you can truly rely
            on. We bring you care at home. Are you concerned about the Safety &
            Care of an aging or sick parent/child? WE CAN HELP!
          </p>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row flex-wrap justify-evenly gap-5 pt-20">
        <ServicesCard icon={icon1} title="Home Nursing Services" />
        <ServicesCard icon={icon2} title="24 Hour In Home Care" />
        <ServicesCard icon={icon3} title="Speech Therapy Services" />
        <ServicesCard icon={icon1} title="Home Health Services" />
        <ServicesCard icon={icon2} title="Home Health Aid" />
        <ServicesCard icon={icon3} title="Therapy Health Services" />
      </div>
    </div>
  );
};

export default Services;
