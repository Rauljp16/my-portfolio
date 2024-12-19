import React from "react";
import ButtonTheme from "./ButtonTheme";
import Sidebar from "./Sidebar";

function Header() {
  return (
    <div className="fixed w-full top-6 left-0 flex bg-transparent items-center justify-center z-50">
      <div className=" lg:rounded-lg py-3 px-3 flex gap-4 items-center bg-background-light/60 dark:bg-background-dark/60 backdrop-filter backdrop-blur-lg bg-opacity-40 transition ease-in-out duration-700 border border-goldDark/40 ">
        <Sidebar />
        <ButtonTheme />
      </div>
    </div>
  );
}

export default Header;
