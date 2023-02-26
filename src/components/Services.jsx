import React from "react";
import { AiFillMobile } from "react-icons/ai";
import { FaLaptopCode, FaDraftingCompass } from "react-icons/fa";

const Services = () => {
  return (
    <div
      id="services"
      className="lg:w-full h-full lg:h-screen text-center w-[90%] sm:w-[50%] md:w-[70%] grid items-center my-auto mx-auto lg:py-32 lg:px-16"
    >
      <div>
        <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl 2xl:text-6xl p2 lg:pt-0 pt-28">
          Our Services
        </h1>
        <p className="text-sm font-light lg:w-[70%] mx-auto">
          We offer a wide range of services to help businesses and individuals
          bring their ideas to life. Our services include:
        </p>
      </div>
      <div className="grid-cols-3 lg:grid">
        {/* box1 */}
        <div className="w-full px-2 py-5 lg:px-6">
          {<AiFillMobile size={40} className="mx-auto" />}
          <h1 className="py-4 text-xl font-semibold md:text-2xl">
            Mobile app development
          </h1>
          <p className="text-sm font-light md:text-base">
            We specialize in developing high-quality mobile apps for iOS and
            Android platforms. From idea to launch, we work closely with our
            clients to ensure that their app meets their needs and exceeds their
            expectations.
          </p>
        </div>
        {/* box2 */}
        <div className="w-full px-2 py-5 border-gray-300 lg:px-6 lg:border-x">
          {<FaLaptopCode size={40} className="mx-auto" />}
          <h1 className="py-4 text-xl font-semibold md:text-2xl">
            Web app development
          </h1>
          <p className="text-sm font-light md:text-base">
            We develop web apps that are responsive, scalable, and
            user-friendly. We use the latest technologies and frameworks to
            create web apps that are fast and reliable.
          </p>
        </div>
        {/* box3 */}
        <div className="w-full px-2 py-5 lg:px-6">
          {<FaDraftingCompass size={40} className="mx-auto" />}
          <h1 className="py-4 text-xl font-semibold md:text-2xl">
            UI/UX design
          </h1>
          <p className="text-sm font-light md:text-base">
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
