import React from "react";
import android from "../assets/android.png";
import apple from "../assets/apple.png";
import mock from "../assets/mock.png";
import dev from "../assets/dev.png";
const Home = () => {
  return (
    <div
      id="home"
      className="w-full h-screen pt-44 md:pt-32 lg:pt-24 lg:text-left text-center lg:flex"
    >
      <div className="lg:w-[50%] my-auto lg:pl-14">
        <h1 className="text-4xl font-bold pb-5">
          Welcome to <span className="text-[#ff4d05]">/KILL</span>SPACE,
        </h1>
        <div className="lg:flex">
          <img
            className="w-28 object-contain mx-auto lg:mx-0"
            src={dev}
            alt=""
          />
          <p className="py-2 text-sm sm:text-base md:text-lg">
            Join with 4600+ Developers and start getting feedbacks right now{" "}
          </p>
        </div>
        <p className="lg:block hidden pb-2">
          a group of talented students who are passionate about developing
          mobile apps, web apps, and UI/UX designs. We are a team of creative
          thinkers who are dedicated to delivering innovative solutions to our
          clients. Our goal is to bring your ideas to life and create unique
          digital experiences that exceed your expectations.
        </p>
        <button className="px-6 py-2 border border-black rounded-lg mb-4">
          Get Feedback
        </button>
        <div className="flex lg:justify-start justify-center gap-2">
          <div>
            <img
              className="rounded-xl w-28 object-cover mx-auto"
              src={android}
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-xl w-28 object-cover mx-auto"
              src={apple}
              alt=""
            />
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
