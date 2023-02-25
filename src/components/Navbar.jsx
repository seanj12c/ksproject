import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex lg:justify-around justify-between items-center h-24 mx-auto px-4 fixed top-0 w-full lg:w-full z-50 bg-white bg-opacity-95">
      <a href="#home">
        <h1 className="w-full text-2xl tracking-widest font-medium text-[#ff4d05]">
          /KILL<span className="text-black">SPACE</span>
        </h1>
      </a>
      <ul className="hidden lg:flex p-4">
        <a href="#home">
          <li className="p-4 hover:text-[#ff4d05]">Home</li>
        </a>
        <a href="#services">
          <li className="p-4 hover:text-[#ff4d05]">Services</li>
        </a>
        <a href="#process">
          <li className="p-4 border-r border-gray-400 hover:text-[#ff4d05]">
            Process
          </li>
        </a>
        <a href="#founders">
          <li className="p-4 hover:text-[#ff4d05]">Founders</li>
        </a>
        <button href="#contact">
          <li className="px-6 py-2 border rounded-lg border-black hover:text-[#ff4d05]">
            Contact Us
          </li>
        </button>
      </ul>
      <div onClick={handleNav} className="block p-2 lg:hidden">
        {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#ffffff] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-2xl tracking-widest font-medium text-[#ff4d05] m-4">
          /KILL<span className="text-black">SPACE</span>
        </h1>

        <ul className="uppercase p-4">
          <a onClick={handleNav} href="#home">
            <li className="p-4 border-b border-gray-600 active:bg-[#ff4d05]">
              Home
            </li>
          </a>
          <a onClick={handleNav} href="#services">
            <li className="p-4 border-b border-gray-600 active:bg-[#ff4d05]">
              Services
            </li>
          </a>
          <a onClick={handleNav} href="#process">
            <li className="p-4 border-b border-gray-600 active:bg-[#ff4d05]">
              Process
            </li>
          </a>
          <a onClick={handleNav} href="#founders">
            <li className="p-4 border-b border-gray-600 active:bg-[#ff4d05]">
              Founders
            </li>
          </a>
          <button onClick={handleNav} href="#contact">
            <li className="px-6 py-2 mt-4 border  border-black rounded-lg p-4 active:bg-[#ff4d05]">
              Contact Us
            </li>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
