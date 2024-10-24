import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="bg-zinc-800 flex items-center justify-between">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={2134}
        height={1866}
        className="w-32 h-auto"
      />
      <div className="p-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div
            className=" w-12 h-6 bg-transparent hover:bg-transparent peer-focus:outline-0 peer-focus:ring-transparent 
            rounded-full peer transition-all ease-in-out duration 700 peer-checked:after:translate-x-6
            peer-checked:after:border-transparent after:content-[''] after:absolute after:top-[3px] after:left-[3px] 
            after:bg-gradient-to-r from-goldDark via-goldLight to-goldDark
            after:border-transparent after:border after:rounded-full after:h-[18px] after:w-[18px] after:transition-all 
            peer-checked:bg-transparent hover:peer-checked:bg-transparent border border-goldDark"
          ></div>
        </label>
      </div>
    </div>
  );
}

export default Header;
