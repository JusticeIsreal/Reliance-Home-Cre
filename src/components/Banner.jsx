import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
import { Fade, Slide } from "react-slideshow-image";
// import BannerImg from "../../components/Asset/Bannerimages";
import { ImPointRight } from "react-icons/im";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import BannerContents from "../sampleData/BannerContent";
function Banner() {
  return (
    <div className="banner-main-con">
      <div className="content">
        {/* SIAPLAYING PRODUCTS IMAGES*/}
        <div className="carousel-main-con">
          <div className="carousel-con">
            <Fade arrows={false}>
              {BannerContents.map((item, index) => (
                <div key={item.id}>
                  <div className="carousel-items-con">
                    <img
                      src={item.image}
                      alt="img"
                      className="img"
                      style={{
                        right: "0",
                      }}
                    />
                  </div>
                  <div className="banner-text-main-con">
                    <div className="banner-text-con">
                      <div className="text-con">
                        <h1>
                          We Offer:{" "}
                          <strong>
                            <span> {item.text}</span>
                          </strong>
                        </h1>
                      </div>

                      {/* <div className="contact">
                        <div className="contact-ions">
                          <div className="click">
                            <p>Click</p>
                            <ImPointRight className="icon" />
                          </div>
                          <a target="_blank" href="tel:+2348027591499">
                            <FiPhone className="icons" />
                          </a>
                          <a
                            target="_blank"
                            href="mailto:Info@calmwatersltd.com"
                          >
                            <MdOutlineEmail className="icons" />
                          </a>
                          <a
                            target="_blank"
                            href="https://wa.me/+2348027591499?text= Hello ! I am"
                          >
                            <FaWhatsapp className="icons" />
                          </a>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
