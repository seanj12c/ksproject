import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 z-50 flex items-center justify-between w-full h-24 px-4 mx-auto bg-white lg:px-20 bg-opacity-95">
      <a href="#home">
        <h1 className="w-full text-lg font-medium tracking-widest text-primary">
          {`<KIT`}
          <span className="text-black">{`SCRATCH/>`}</span>
        </h1>
      </a>
      <ul className="hidden py-4 lg:flex">
        <a href="#home">
          <li className="p-4 hover:text-primary">Home</li>
        </a>
        <a href="#services">
          <li className="p-4 hover:text-primary">Services</li>
        </a>
        <a href="#process">
          <li className="p-4 border-r border-gray-400 hover:text-primary">
            Process
          </li>
        </a>
        <a href="#founders">
          <li className="p-4 hover:text-primary">Founders</li>
        </a>
        <a href="#contact">
          <button className="px-6 py-2 mt-2 border border-black rounded-lg hover:text-primary">
            Contact Us
          </button>
        </a>
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
        <h1 className="w-full m-4 text-lg font-medium tracking-widest text-primary">
          {`<KIT`}
          <span className="text-black">{`SCRATCH/>`}</span>
        </h1>

        <ul className="p-4 uppercase">
          <a onClick={handleNav} href="#home">
            <li className="p-4 border-b border-gray-600 active:bg-primary">
              Home
            </li>
          </a>
          <a onClick={handleNav} href="#services">
            <li className="p-4 border-b border-gray-600 active:bg-primary">
              Services
            </li>
          </a>
          <a onClick={handleNav} href="#process">
            <li className="p-4 border-b border-gray-600 active:bg-primary">
              Process
            </li>
          </a>
          <a onClick={handleNav} href="#founders">
            <li className="p-4 border-b border-gray-600 active:bg-primary">
              Founders
            </li>
          </a>
          <a onClick={handleNav} href="#contact">
            <button className="p-4 px-6 py-2 mt-4 border border-black rounded-lg active:bg-primary">
              Contact Us
            </button>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
