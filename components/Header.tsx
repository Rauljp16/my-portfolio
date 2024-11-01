import React from "react";
import ButtonTheme from "./ButtonTheme";
import Sidebar from "./Sidebar";

function Header() {
  return (
    <div className="fixed w-full top-6 left-0 flex items-center justify-center z-50">
      <div className=" rounded-3xl px-4 py-2 flex gap-10 items-center backdrop-blur-lg bg-background-light dark:bg-background-dark transition ease-in-out duration-700 shadow-[0px_2px_6px_#ac8661] ">
        <Sidebar />
        <ButtonTheme />
      </div>
    </div>
  );
}

export default Header;
