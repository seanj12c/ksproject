import React from "react";
import process from "../assets/process.png";
const Process = () => {
  return (
    <div
      id="process"
      className="grid items-center w-full h-screen px-4 pt-40 text-center md:pt-32 lg:pt-28 lg:text-right lg:px-20"
    >
      <div>
        <h1 className="pb-10 text-2xl font-bold text-center md:text-4xl lg:text-5xl 2xl:text-6xl">
          Our Process
        </h1>
      </div>
      <div className="lg:flex">
        <div className="lg:w-[50%]">
          <img
            className="object-contain mx-auto mb-4 w-72 md:w-[550px] lg:w-[600px] 2xl:w-[1000px] rounded-xl lg:h-full"
            src={process}
            alt=""
          />
        </div>
        <div className="lg:w-[50%] lg:my-auto">
          <h1 className="font-bold text-base md:text-xl lg:text-3xl lg:w-[80%] ml-auto lg:pr-12">
            We use{" "}
            <span className="text-[#ff4d05]">
              P<span className="text-xs">and</span>Triple D
            </span>{" "}
            <span className="font-normal">
              <br />
              {`(Plan, Designs, Develop and Deploy) `}
            </span>
            principle for better and organize solutions
          </h1>
          <p className="text-sm md:text-base py-6 lg:w-[80%] ml-auto lg:pr-12">
            At{" "}
            <span className="font-bold">
              <span className="text-[#ff4d05]">{`<KIT`}</span> {`SCRATCH/>`}
            </span>{" "}
            we follow a well-defined process to ensure that our clients get the
            best possible product
          </p>
        </div>
      </div>
      <div className="pb-32"></div>
    </div>
  );
};

export default Process;
