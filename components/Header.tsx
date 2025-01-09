import React, { useState } from "react";
import ButtonTheme from "./ButtonTheme";
import Sidebar from "./Sidebar";

function Header() {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <div className="hidden fixed w-full lg:top-6 left-0 lg:flex bg-transparent lg:justify-center z-50">
      <div className="w-full lg:w-auto lg:rounded-lg py-3 px-3 flex gap-4 items-center bg-background-light/60 dark:bg-background-dark/60 backdrop-filter backdrop-blur-lg bg-opacity-40 transition ease-in-out duration-700 border border-goldDark/40 ">
        <Sidebar />
        <ButtonTheme />
      </div>
    </div>
  );
}

export default Header;
