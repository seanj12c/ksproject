import React from "react";
import dev1 from "../assets/dev1.png";
import dev2 from "../assets/dev2.png";
import dev3 from "../assets/dev3.png";
import dev4 from "../assets/dev4.png";
import dev5 from "../assets/dev5.png";
import dev6 from "../assets/dev6.png";
import logo1 from "../assets/logo1.png";

const Founders = () => {
  return (
    <div
      id="founders"
      className="grid items-center w-full h-full py-24 text-center xl:h-screen lg:px-20"
    >
      <div>
        <h1 className="pb-6 text-2xl font-semibold md:text-xl lg:text-5xl 2xl:text-6xl lg:pt-16 lg:pb-16">
          Meet our Team
        </h1>
      </div>
      {/* boxes */}
      <div className="flex flex-col justify-between lg:grid-cols-3 lg:grid ">
        {/* box1 */}
        <div className="py-4">
          <img
            className="object-cover mx-auto border border-gray-500 rounded-full h-28 w-28 filter grayscale"
            src={dev1}
            alt=""
          />
          <h1 className="py-2 text-xl font-medium lg:text-lg md:text-2xl 2xl:text-4xl">
            <span className="text-primary">{"<Karl"} </span>
            {"Jan Reginaldo/>"}
          </h1>
          <p className="text-sm md:text-base 2xl:text-lg">
            Full Stack Developer, Founder
          </p>
          <p className="text-[#026C3B] 2xl:text-lg text-sm">
            Cavite State University,
            <br /> <span className="font-semibold">Rosario</span>
          </p>
        </div>
        {/* box2 */}
        <div className="py-4">
          <img
            className="object-cover mx-auto border border-gray-500 rounded-full h-28 w-28 "
            src={dev2}
            alt=""
          />
          <h1 className="py-2 text-xl font-medium lg:text-lg md:text-2xl 2xl:text-4xl ">
            <span className=" text-primary">{"<Sean"} </span>
            {"Jimwell Buclatin/>"}
          </h1>
          <p className="text-sm md:text-base lg:text-sm 2xl:text-lg">
            Web Designer/Developer, Co-Founder
          </p>
          <p className="text-[#026C3B] 2xl:text-lg text-sm">
            Cavite State University,
            <br /> <span className="font-semibold">Rosario</span>
          </p>
        </div>
        {/* box3 */}
        <div className="py-4">
          <img
            className="object-cover mx-auto border border-gray-500 rounded-full h-28 w-28 filter grayscale"
            src={dev3}
            alt=""
          />
          <h1 className="py-2 text-xl font-medium md:text-2xl lg:text-lg 2xl:text-4xl">
            <span className=" text-primary">{"<Kyle"} </span>
            {"Dennis Reginaldo/>"}
          </h1>
          <p className="text-sm md:text-base lg:text-sm 2xl:text-lg">
            Mobile App Developer, Co-Founder
          </p>
          <p className="text-[#026C3B] 2xl:text-lg text-sm">
            Cavite State University,
            <br /> <span className="font-semibold">Trece</span>
          </p>
        </div>
        {/* box4 */}
        <div className="py-4">
          <img
            className="object-cover mx-auto border border-gray-500 rounded-full h-28 w-28 filter grayscale"
            src={dev4}
            alt=""
          />
          <h1 className="py-2 text-xl font-medium lg:text-lg md:text-2xl 2xl:text-4xl">
            <span className=" text-primary">{"<Kathlyn"} </span>
            {"Jordan/>"}
          </h1>
          <p className="text-sm md:text-base lg:text-sm 2xl:text-lg">
            UI/UX Designer, Co-Founder
          </p>
          <p className="text-[#026C3B] 2xl:text-lg text-sm">
            Cavite State University,
            <br /> <span className="font-semibold">Rosario</span>
          </p>
        </div>
        {/* box5 */}
        <div className="py-4">
          <img
            className="object-cover mx-auto border border-gray-500 rounded-full h-28 w-28 filter grayscale"
            src={dev5}
            alt=""
          />
          <h1 className="py-2 text-xl font-medium lg:text-lg md:text-2xl 2xl:text-4xl">
            <span className=" text-primary">{"<Jannray"} </span>
            {"Mostajo/>"}
          </h1>
          <p className="text-sm md:text-base lg:text-sm 2xl:text-lg">
            Mobile App Developer, Co-Founder
          </p>
          <p className="text-[#026C3B] pb-7  text-sm 2xl:text-lg">
            Cavite State University,
            <br /> <span className="font-semibold">Trece</span>
          </p>
        </div>
        <div className="py-4">
          <img
            className="object-cover mx-auto border border-gray-500 rounded-full h-28 w-28 filter grayscale"
            src={dev6}
            alt=""
          />
          <h1 className="py-2 text-xl font-medium lg:text-lg md:text-2xl 2xl:text-4xl">
            <span className=" text-primary">{"<Kimberly"} </span>
            {"Bay/>"}
          </h1>
          <p className="text-sm md:text-base lg:text-sm 2xl:text-lg">
            Graphic / UI/UX Designer, Co-Founder
          </p>
          <p className="text-[#026C3B] pb-7  text-sm 2xl:text-lg">
            Cavite State University,
            <br /> <span className="font-semibold">Imus</span>
          </p>
        </div>
      </div>
      <hr className="w-[40%] decoration-gray-300 mx-auto" />
      <div className="pt-4 mx-auto pb-28">
        <div>
          <img
            className="object-contain h-20 py-2 mx-auto 2xl:h-40"
            src={logo1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Founders;
