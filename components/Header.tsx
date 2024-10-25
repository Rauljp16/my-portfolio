import React from "react";
import Image from "next/image";
import ButtonTheme from "./ButtonTheme";

function Header() {
  return (
    <div className=" flex items-center justify-between">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={2134}
        height={1866}
        className="w-40 h-auto drop-shadow-blackSvg"
      />
      <ButtonTheme />
    </div>
  );
}

export default Header;
