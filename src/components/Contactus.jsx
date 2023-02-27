import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import contact from "../assets/contact.png";
const Contactus = () => {
  return (
    <div
      id="contact"
      className="grid items-center w-full h-full px-4 py-24 text-center lg:py-32 lg:text-left lg:px-20 2xl:mt-40 "
    >
      <h1 className="pb-5 text-2xl font-bold text-center md:text-4xl lg:text-5xl 2xl:text-6xl">
        <span className="text-primary">Contact</span> Us
      </h1>
      <div className="justify-between lg:flex">
        <div className="my-auto lg:w-full">
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
        <div className="flex justify-center lg:w-full">
          <img
            className="lg:ml-auto object-contain rounded-xl w-72 md:w-[550px] lg:w-[600px] 2xl:w-[1000px] lg:h-full"
            src={contact}
            alt=""
          />
        </div>
      </div>

      <div className="justify-center gap-7 py-10 lg:flex">
        <p className="text-gray-400">
          Email:<a href="mailto:kitscratch@info.com">kitscratch@info.com</a>
        </p>
        <p className="text-gray-400">
          Phone:<a href="tel:09761002831">+639761002831</a>
        </p>
      </div>
      <div className="grid grid-cols-2 justify-between md:flex">
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
      </div>
    </div>
  );
};

export default Contactus;
