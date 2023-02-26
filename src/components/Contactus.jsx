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
      className="grid items-center w-full h-full px-4 py-20 text-center xl:h-screen lg:py-32 lg:text-left lg:px-20"
    >
      <h1 className="pb-5 text-2xl font-bold text-center md:text-4xl lg:text-5xl 2xl:text-6xl">
        Contact Us
      </h1>
      <div className="justify-between lg:flex">
        <div className="w-full my-auto">
          <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">
            We’d love to hear from you.Tell us how we can be of service.
          </h1>
          <p className="py-3 text-sm font-light md:text-base lg:text-xl">
            If you have any questions or would like to discuss your project with
            us, please don't hesitate to contact us. You can reach us by email,
            phone, or through our website. We would love to hear from you and
            help you bring your ideas to life.
          </p>
        </div>
        <div className="w-full">
          <img
            className="ml-auto object-contain rounded-xl w-72 md:w-[550px] lg:w-[600px] 2xl:w-[800px] lg:h-full"
            src={contact}
            alt=""
          />
        </div>
      </div>

      <div className="justify-center gap-4 py-10 lg:flex">
        <p className="text-gray-400">
          Email:<a href="/">kitscratch@info.com</a>
        </p>
        <p className="text-gray-400">
          Phone:<a href="/">+639761002831</a>
        </p>
      </div>
      <div className="justify-center md:flex gap-7">
        <div>
          {<FaLinkedin size={30} className="mx-auto text-[#0A66C2] md:py-0" />}
          <a href="/" className="py-2 text-base">
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
          <a href="/" className="py-2 text-base">
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
          <a href="/" className="py-2 text-base">
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
          <a href="/" className="py-2 text-base">
            @kscratch_tw
          </a>
        </div>
        <div>
          {<FaYoutube size={30} className="mx-auto text-[#FF0000] md:py-0" />}
          <a href="/" className="py-2 text-base">
            @kscratch_yt
          </a>
          <div className="pb-48"></div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
