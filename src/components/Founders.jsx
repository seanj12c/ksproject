import React from "react";
import dev1 from "../assets/dev1.png";
import dev2 from "../assets/dev2.png";
import dev3 from "../assets/dev3.png";
import dev4 from "../assets/dev4.png";
import dev5 from "../assets/dev5.png";
import logo1 from "../assets/logo1.png";

const Founders = () => {
  return (
    <div id="founders" className="w-full h-full lg:pt-0 py-24 text-center">
      <div>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold lg:pt-40 pb-16">
          Meet our Founders
        </h1>
      </div>
      {/* boxes */}
      <div className="lg:flex justify-center gap-5">
        {/* box1 */}
        <div className="py-4">
          <img
            className="object-cover mx-auto md:h-36 md:w-36 h-28 w-28 rounded-full filter grayscale border border-gray-500"
            src={dev1}
            alt=""
          />
          <h1 className="text-xl md:text-2xl font-medium py-2">
            Karl Jan Reginaldo
          </h1>
          <p className="text-sm md:text-base">Full Stack Developer, Founder</p>
          <p className="text-[#026C3B]">
            Cavite State University,
            <br /> <span className="font-semibold">Rosario</span>
          </p>
        </div>
        {/* box2 */}
        <div className="py-4">
          <img
            className="object-cover mx-auto md:h-36 md:w-36 h-28 w-28 rounded-full border border-gray-500"
            src={dev2}
            alt=""
          />
          <h1 className="text-xl md:text-2xl font-medium py-2">
            Sean Jimwell Buclatin
          </h1>
          <p className="text-sm md:text-base">
            Web Designer/Developer, Founder
          </p>
          <p className="text-[#026C3B]">
            Cavite State University,
            <br /> <span className="font-semibold">Rosario</span>
          </p>
        </div>
        {/* box3 */}
        <div className="py-4">
          <img
            className="object-cover mx-auto md:h-36 md:w-36 h-28 w-28 rounded-full filter grayscale border border-gray-500"
            src={dev3}
            alt=""
          />
          <h1 className="text-xl md:text-2xl font-medium py-2">
            Kyle Reginaldo
          </h1>
          <p className="text-sm md:text-base">Mobile App Developer, Founder</p>
          <p className="text-[#026C3B]">
            Cavite State University,
            <br /> <span className="font-semibold">Trece</span>
          </p>
        </div>
        {/* box4 */}
        <div className="py-4">
          <img
            className="object-cover mx-auto md:h-36 md:w-36 h-28 w-28 rounded-full filter grayscale border border-gray-500"
            src={dev4}
            alt=""
          />
          <h1 className="text-xl md:text-2xl font-medium py-2">
            Kathlyn Jordan
          </h1>
          <p className="text-sm md:text-base">UI/UX Designer, Founder</p>
          <p className="text-[#026C3B]">
            Cavite State University,
            <br /> <span className="font-semibold">Rosario</span>
          </p>
        </div>
        {/* box5 */}
        <div className="py-4">
          <img
            className="object-cover mx-auto md:h-36 md:w-36 h-28 w-28 rounded-full filter grayscale border border-gray-500"
            src={dev5}
            alt=""
          />
          <h1 className="text-xl md:text-2xl font-medium py-2">
            Jannray Mostajo
          </h1>
          <p className="text-sm md:text-base">
            Mobile App Developer, Co-Founder
          </p>
          <p className="text-[#026C3B] pb-7">
            Cavite State University,
            <br /> <span className="font-semibold">Trece</span>
          </p>
        </div>
      </div>
      <hr className="w-[40%] decoration-gray-300 mx-auto" />
      <div className="mx-auto pt-4 pb-28">
        <div>
          <img
            className="mx-auto h-28 py-2 object-contain"
            src={logo1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Founders;
