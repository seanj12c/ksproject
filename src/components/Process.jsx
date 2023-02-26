import React from "react";
import process from "../assets/process.png";
const Process = () => {
  return (
    <div
      id="process"
      className="grid items-center w-full h-screen pt-40 text-center md:pt-32 lg:pt-28 lg:text-right lg:px-20"
    >
      <div>
        <h1 className="pb-10 text-2xl font-bold text-center md:text-4xl lg:text-5xl 2xl:text-6xl">
          Our Process
        </h1>
      </div>
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="flex justify-center lg:w-full">
          <img
            className="lg:mr-auto object-contain rounded-xl w-72 md:w-[550px] lg:w-[600px] 2xl:w-[900px] lg:h-full"
            src={process}
            alt=""
          />
        </div>
        <div className="w-full lg:my-auto">
          <h1 className="pt-3 text-base font-bold md:text-xl lg:text-3xl">
            We use{" "}
            <span className="text-primary">
              P<span className="text-xs">and</span>Triple D
            </span>{" "}
            <span className="font-normal">
              <br />
              {`(Plan, Designs, Develop and Deploy) `}
            </span>
            principle for better and organize solutions
          </h1>
          <p className="py-6 text-sm md:text-base">
            At{" "}
            <span className="font-bold">
              <span className="text-primary">{`<KIT`}</span> {`SCRATCH/>`}
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
