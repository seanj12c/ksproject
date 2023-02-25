import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import contact from "../assets/contact.png";
const Contactus = () => {
  return (
    <div
      id="contact"
      className="w-full py-32 px-4 lg:text-left text-center h-screen"
    >
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center pb-10">
        Contact Us
      </h1>
      <div className="lg:flex">
        <div className="lg:w-[50%] px-6 my-auto">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold lg:w-[70%] mr-auto">
            We’d love to hear from you.Tell us how we can be of service.
          </h1>
          <p className="text-sm md:text-base lg:text-xl lg:w-[85%] font-light py-3 mr-auto">
            If you have any questions or would like to discuss your project with
            us, please don't hesitate to contact us. You can reach us by email,
            phone, or through our website. We would love to hear from you and
            help you bring your ideas to life.
          </p>
        </div>
        <div className="lg:w-[50%] px-6">
          <img
            className="rounded-xl object-contain lg:h-full mx-auto"
            src={contact}
            alt=""
          />
        </div>
      </div>

      <div className="lg:flex justify-center gap-4 py-10">
        <p className="text-gray-400">
          Email:<a href="/">kitscratch@info.com</a>
        </p>
        <p className="text-gray-400">
          Phone:<a href="/">+639761002831</a>
        </p>
      </div>
      <div className="md:flex justify-center gap-7">
        <div>
          {<FaLinkedin size={30} className="mx-auto text-[#0A66C2] md:py-0" />}
          <a href="/" className="text-base py-2">
            @kscratch_lk
          </a>
        </div>
        <div>
          {
            <FaFacebookSquare
              size={30}
              className="mx-auto text-[#1877F2] md:py-0"
            />
          }
          <a href="/" className="text-base py-2">
            @kscratch_fb
          </a>
        </div>
        <div>
          {
            <FaInstagramSquare
              size={30}
              className="mx-auto text-[#C837AB] md:py-0"
            />
          }
          <a href="/" className="text-base py-2">
            @kscratch_ig
          </a>
        </div>
        <div>
          {
            <FaTwitterSquare
              size={30}
              className="mx-auto text-[#1D9BF0] md:py-0"
            />
          }
          <a href="/" className="text-base py-2">
            @kscratch_tw
          </a>
        </div>
        <div>
          {<FaYoutube size={30} className="mx-auto text-[#FF0000] md:py-0" />}
          <a href="/" className="text-base py-2">
            @kscratch_yt
          </a>
          <div className="pb-48"></div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
