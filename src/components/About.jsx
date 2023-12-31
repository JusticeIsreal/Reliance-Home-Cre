import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className="  flex flex-col lg:flex-row justify-between items-center lg:px-15 xl:px-20 px-5 pt-20  gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-start text-[#9a1aca]">
          About Us
        </h1>
        <p className="lg:text-start">
          <span className="text-[#9a1aca]">
            Reliance Home Health Caregivers
          </span>
          is a home health care agency that is independently owned and operated.
          We are located in 2625 Butterfield Road, Suite 314E, Oakbrook,
          Illinois 60523. You can click here to take a look at our map.
        </p>
        <p className="text-justify lg:text-start">
          This mission is set on motion by continually providing our services in
          a manner that is worthy of our client’s trust, approval and
          expectations.
        </p>
        <p className="text-justify lg:text-start">
          <span className="text-[#9a1aca]">
            Reliance Home Health Caregivers
          </span>
          <nav className="ml-5">
            <li>Respect</li>
            <li>Integrity</li>
            <li>Compassion</li>
            <li>Trust</li>
            <li>Open Communication</li>
            <li>Accountability</li>
          </nav>
        </p>
        <p className="text-justify lg:text-start">
          If you have any questions for us, please do not hesitate to give us a
          call at <strong className="text-[#9a1aca]">630-317-7083</strong> . You
          can also leave us a message through our online Contact Us form.
        </p>
      </div>
      <div className="w-full lg:w-3/4  about-us-img">
        <img className="rounded-lg " src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
