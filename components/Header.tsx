import React from "react";
import Image from "next/image";
import ButtonTheme from "./ButtonTheme";

function Header() {
  return (
    <div className="sticky top-0 flex items-center z-30 justify-between bg-background-light dark:bg-background-dark transition ease-in-out duration-700 overflow-hidden">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={2134}
        height={1866}
        className="w-20 md:w-40 h-auto drop-shadow-blackSvg object-cover object-center"
      />
      <ButtonTheme />
    </div>
  );
}

export default Header;
