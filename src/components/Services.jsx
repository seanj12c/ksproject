import React from "react";
import { AiFillMobile } from "react-icons/ai";
import { FaLaptopCode, FaDraftingCompass } from "react-icons/fa";

const Services = () => {
  return (
    <div
      id="services"
      className="lg:w-full h-full text-center w-[90%] sm:w-[50%] md:w-[70%] mx-auto md:py-36"
    >
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold p2 md:pt-0 lg:pt-20 pt-28">
          Our Services
        </h1>
        <p className="text-sm font-light md:pb-3 lg:pb-14 lg:w-[70%] mx-auto">
          We offer a wide range of services to help businesses and individuals
          bring their ideas to life. Our services include:
        </p>
      </div>
      <div className="lg:grid grid-cols-3">
        {/* box1 */}
        <div className="py-5 px-2 lg:px-6 w-full">
          {<AiFillMobile size={40} className="mx-auto" />}
          <h1 className="text-xl font-semibold md:text-2xl py-4">
            Mobile app development
          </h1>
          <p className="text-sm md:text-base font-light">
            We specialize in developing high-quality mobile apps for iOS and
            Android platforms. From idea to launch, we work closely with our
            clients to ensure that their app meets their needs and exceeds their
            expectations.
          </p>
        </div>
        {/* box2 */}
        <div className="py-5 px-2 lg:px-6 lg:border-x border-gray-300 w-full">
          {<FaLaptopCode size={40} className="mx-auto" />}
          <h1 className="text-xl font-semibold md:text-2xl py-4">
            Web app development
          </h1>
          <p className="text-sm md:text-base font-light">
            We develop web apps that are responsive, scalable, and
            user-friendly. We use the latest technologies and frameworks to
            create web apps that are fast and reliable.
          </p>
        </div>
        {/* box3 */}
        <div className="py-5 px-2 lg:px-6 w-full">
          {<FaDraftingCompass size={40} className="mx-auto" />}
          <h1 className="text-xl font-semibold md:text-2xl py-4">
            UI/UX design
          </h1>
          <p className="text-sm md:text-base font-light">
            We believe that good design is the foundation of a great digital
            product. Our team of designers creates user-centric designs that are
            intuitive, engaging, and visually appealing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
