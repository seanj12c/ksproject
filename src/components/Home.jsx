import React from "react";
import mock from "../assets/mock.png";
import dev from "../assets/dev.png";
import Typed from "react-typed";
import { AiOutlineDownload, AiOutlineMessage } from "react-icons/ai";
const Home = () => {
  return (
    <div
      id="home"
      className="w-full h-full lg:h-screen pt-28 md:pt-32 lg:pt-24 lg:text-left text-center lg:flex"
    >
      <div className="lg:w-[50%] my-auto lg:pl-14">
        <h1 className="text-4xl font-bold pb-5">
          Better Solution with <span className="text-[#ff4d05]">{`<KIT`}</span>
          {`SCRATCH/>`}
        </h1>
        <div className="lg:flex">
          <img
            className="w-28 object-contain mx-auto lg:mx-0"
            src={dev}
            alt=""
          />
          <div>
            <p className="pt-2 md:pl-4 pl-2 text-sm sm:text-base md:text-lg">
              We develop using
            </p>
            <Typed
              className="sm:text-4xl text-xl font-bold md:pl-4 pl-2 pb-5 text-[#ff4d05]"
              strings={[
                `PostgresSQL`,
                `ReactJS`,
                `Flutter`,
                `NestJS`,
                `Supabase`,
                `Firebase`,
                `Figma`,
              ]}
              typeSpeed={100}
              backSpeed={100}
              loop
            />
          </div>
        </div>
        <p className="lg:block hidden pt-4 pb-2">
          a group of talented students who are passionate about developing
          mobile apps, web apps, and UI/UX designs. We are a team of creative
          thinkers who are dedicated to delivering innovative solutions to our
          clients. Our goal is to bring your ideas to life and create unique
          digital experiences that exceed your expectations.
        </p>
        <div className="lg:flex lg:justify-start gap-2">
          <div>
            <button className="mt-2 px-6 py-1 border bg-black text-white border-black rounded-lg mb-4">
              <div className="flex items-center justify-center gap-2">
                <div>{<AiOutlineMessage />}</div>
                <div className="">
                  <h1 className="text-sm">Join now!</h1>
                  <p className="text-xs text-gray-300">Are you student?</p>
                </div>
              </div>
            </button>
          </div>
          <div>
            <button className="mt-2 px-5 py-3 rounded-lg mb-4">
              <div className="flex items-center justify-center gap-2">
                {<AiOutlineDownload />}
                <h1 className="text-sm">Download Soon</h1>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-[50%]">
        <img className="object-contain lg:h-full mx-auto" src={mock} alt="" />
      </div>
    </div>
  );
};

export default Home;
