/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="fixed w-full flex justify-center bottom-[-58px] left-0">
      <ul className="flex justify-center cursor-pointer transition ease-in-out duration-700 gap-10 md:gap-28 md:px-10 pl-5 pr-7 pt-4 pb-14  rounded-full shadow-[0px_6px_20px_#ac8661]  shadow-golDark">
        <li className="mb-2 w-14 h-14 flex hover:drop-shadow-gold md:drop-shadow-blackSvg  justify-center items-center hover:scale-125 rounded-full">
          <Link href="/">
            <img src="svg/home.svg" alt="icono home" />
          </Link>
        </li>
        <li className="mb-2 w-14 h-14 flex hover:drop-shadow-gold justify-center items-center hover:scale-125 rounded-full">
          <Link href="/">
            <img src="svg/about.svg" alt="icono about" />
          </Link>
        </li>
        <li className="mb-2 w-14 h-14 flex hover:drop-shadow-goldXS justify-center items-center hover:scale-125 rounded-full">
          <Link href="/">
            <img src="svg/projects.svg" alt="icono projects" />
          </Link>
        </li>
        <li className="mb-2 w-14 h-14 flex hover:drop-shadow-gold justify-center items-center hover:scale-125 rounded-full">
          <Link href="/">
            <img src="svg/contact.svg" alt="icono contact" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
