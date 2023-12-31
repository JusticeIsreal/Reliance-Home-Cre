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
                    <div className="text-con">
                      <h1>
                        We Offer:
                        {/* <br /> */}
                        <strong>
                          <span> {item.text}</span>
                        </strong>
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </Fade>
          </div>
        </div>
        <div className="banner-bottom-img-con">
          <div className="contact-details">
            <div className="contact-details-sub-con">
              <p>
                email: <i>info@reliancecaregroup.com</i>
              </p>
              <p>
                Address: <i>1730 Park Street Suite 214 Naperville IL 60563</i>{" "}
              </p>
              <div>
                <button
                  className="bg-brightColor text-white px-2 py-1 md:px-4 md:py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
                  //   onClick={openForm}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/isreal/image/upload/v1704007171/mid-bg_Background_Removed_xysu83.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
