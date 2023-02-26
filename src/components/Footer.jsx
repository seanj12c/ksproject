import React from "react";

const Footer = () => {
  return (
    <div className="items-end justify-between w-full h-full px-4 text-center md:flex">
      <div>
        <p className="text-xs">
          Copyright © 2023 KitScratch. All rights reserved.
        </p>
      </div>
      <div className="flex justify-center gap-2">
        <a className="text-xs" href="/">
          Terms & Agreements
        </a>
        <a className="text-xs" href="/">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
