import React from "react";
import mock from "../assets/mock.png";
import dev from "../assets/dev.png";
import Typed from "react-typed";
import { AiOutlineDownload } from "react-icons/ai";

import { MdOpenInNew } from "react-icons/md";
const Home = () => {
  return (
    <div
      id="home"
      className="justify-around w-full h-full text-center lg:px-20 lg:h-screen pt-28 md:pt-32 lg:pt-24 lg:text-left lg:flex"
    >
      <div className="w-full my-auto">
        <h1 className="pb-5 text-4xl font-bold">
          Better Solution with <span className="text-primary">{`<KIT`}</span>
          {`SCRATCH/>`}
        </h1>

        <div className="lg:flex">
          <img
            className="object-contain mx-auto w-28 lg:mx-0"
            src={dev}
            alt=""
          />
          <div>
            <p className="pt-2 pl-2 text-sm md:pl-4 sm:text-base md:text-lg">
              We develop using
            </p>
            <Typed
              className="pb-5 pl-2 text-xl font-bold sm:text-4xl md:pl-4 text-primary"
              strings={[
                `ReactJS`,
                `Flutter`,
                `NestJS`,
                `Supabase`,
                `Firebase`,
                `Figma`,
                `PostgresSQL`,
                `NextJS`,
                `VueJS`,
                `NuxtJS`,
                `TailwindCSS`,
                `Material UI`,
                `Vuetify`,
                `Java`,
                `Dart`,
                `Python`,
                `C++`,
                `Javascript`,
                `Photoshop`,
                `Lucidchart`,
                `Typescript`,
              ]}
              typeSpeed={100}
              backSpeed={40}
              loop
            />
          </div>
        </div>
        <p className="hidden pt-4 pb-2 lg:block">
          a group of talented students who are passionate about developing
          mobile apps, web apps, and UI/UX designs. We are a team of creative
          thinkers who are dedicated to delivering innovative solutions to our
          clients. Our goal is to bring your ideas to life and create unique
          digital experiences that exceed your expectations.
        </p>
        <div className="gap-2 lg:flex lg:justify-start">
          <div>
            <button className="px-6 py-1 mt-2 mb-4 text-white bg-black border border-black rounded-lg">
              <div className="flex items-center justify-center gap-2">
                <div>{<MdOpenInNew size={18} />}</div>
                <div className="">
                  <h1 className="text-sm font-semibold">Join now!</h1>
                  <p className="text-xs text-gray-300">Are you student?</p>
                </div>
              </div>
            </button>
          </div>
          <div>
            <button className="px-5 py-3 mt-2 mb-4 rounded-lg">
              <div className="flex items-center justify-center gap-2">
                {<AiOutlineDownload size={18} />}
                <h1 className="text-sm font-semibold">Download Soon</h1>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-auto lg:w-full">
        <img
          className="lg:ml-auto object-contain w-72 md:w-[550px] lg:w-[600px] 2xl:w-[900px] lg:h-full "
          src={mock}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
