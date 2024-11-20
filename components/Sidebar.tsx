/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div>
      <ul className="flex justify-center gap-10 rounded-[30px] transition duration-700 ease-in-out">
        <li className="w-8 h-8 flex hover:drop-shadow-gold md:drop-shadow-blackSvg justify-center items-center hover:scale-110 rounded-full transition duration-300 ease-in-out">
          <Link href="#home">
            <img src="svg/home.svg" alt="icono home" />
          </Link>
        </li>
        <li className="w-8 h-8 flex hover:drop-shadow-gold justify-center items-center hover:scale-110 rounded-full transition duration-300 ease-in-out">
          <Link href="#about">
            <img src="svg/about.svg" alt="icono about" />
          </Link>
        </li>
        <li className="w-8 h-8 flex hover:drop-shadow-goldXS justify-center items-center hover:scale-110 rounded-full transition duration-300 ease-in-out">
          <Link href="#projects">
            <img src="svg/projects.svg" alt="icono projects" />
          </Link>
        </li>
        <li className="w-8 h-8 flex hover:drop-shadow-gold justify-center items-center hover:scale-110 rounded-full transition duration-300 ease-in-out">
          <Link href="#footer">
            <img src="svg/contact.svg" alt="icono contact" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
