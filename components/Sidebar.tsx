/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    // <div className="fixed w-full flex justify-center bottom-[-56px] left-0">
    //   <ul className="flex justify-center bg-background-light dark:bg-background-dark gap-10 md:gap-28 md:px-8 pl-5 pr-7 pt-[10px] pb-14  rounded-[30px] shadow-[0px_6px_16px_#ac8661] shadow-golDark transition duration-700 ease-in-out">
    //     <li className="mb-2 w-10 h-10 flex hover:drop-shadow-gold md:drop-shadow-blackSvg  justify-center items-center hover:scale-110 rounded-full transition duration-300 ease-in-out">
    //       <Link href="/">
    //         <img src="svg/home.svg" alt="icono home" />
    //       </Link>
    //     </li>
    //     <li className="mb-2 w-10 h-10 flex hover:drop-shadow-gold justify-center items-center hover:scale-110 rounded-full transition duration-300 ease-in-out">
    //       <Link href="/">
    //         <img src="svg/about.svg" alt="icono about" />
    //       </Link>
    //     </li>
    //     <li className="mb-2 w-10 h-10 flex hover:drop-shadow-goldXS justify-center items-center hover:scale-110 rounded-full transition duration-300 ease-in-out">
    //       <Link href="/">
    //         <img src="svg/projects.svg" alt="icono projects" />
    //       </Link>
    //     </li>
    //     <li className="mb-2 w-10 h-10 flex hover:drop-shadow-gold justify-center items-center hover:scale-110 rounded-full transition duration-300 ease-in-out">
    //       <Link href="/">
    //         <img src="svg/contact.svg" alt="icono contact" />
    //       </Link>
    //     </li>
    //   </ul>
    // </div>
    <div className="">
      <ul className="flex justify-center gap-10 rounded-[30px] transition duration-700 ease-in-out">
        <li className=" w-8 h-8 flex hover:drop-shadow-gold md:drop-shadow-blackSvg  justify-center items-center hover:scale-110 rounded-full transition duration-300 ease-in-out">
          <Link href="/">
            <img src="svg/home.svg" alt="icono home" />
          </Link>
        </li>
        <li className=" w-8 h-8 flex hover:drop-shadow-gold justify-center items-center hover:scale-110 rounded-full transition duration-300 ease-in-out">
          <Link href="/">
            <img src="svg/about.svg" alt="icono about" />
          </Link>
        </li>
        <li className=" w-8 h-8 flex hover:drop-shadow-goldXS justify-center items-center hover:scale-110 rounded-full transition duration-300 ease-in-out">
          <Link href="/">
            <img src="svg/projects.svg" alt="icono projects" />
          </Link>
        </li>
        <li className=" w-8 h-8 flex hover:drop-shadow-gold justify-center items-center hover:scale-110 rounded-full transition duration-300 ease-in-out">
          <Link href="/">
            <img src="svg/contact.svg" alt="icono contact" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
