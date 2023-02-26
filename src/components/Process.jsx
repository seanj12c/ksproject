import React from "react";
import process from "../assets/process.png";
const Process = () => {
  return (
    <div
      id="process"
      className="w-full h-screen px-4 pt-28 lg:pt-44 lg:text-right text-center"
    >
      <div>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center pb-10">
          Our Process
        </h1>
      </div>
      <div className="lg:flex">
        <div className="lg:w-[50%]">
          <img
            className="rounded-xl object-contain mb-4 lg:h-full mx-auto"
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
