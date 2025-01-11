"use client";
import React from "react";
import { useTheme } from "next-themes";

function ButtonTheme() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative w-fit scale-75 md:scale-90 lg:scale-100 flex left-0 lg:left-0 lg:top-0  z-40 rounded-lg gap-2 items-center font-bold tracking-wide text-goldDark">
      <p className="text-xs">dark</p>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          checked={resolvedTheme === "light"}
          onChange={toggleTheme}
          type="checkbox"
          value=""
          className="sr-only peer"
        />
        <div
          className="w-12 h-6 bg-transparent hover:bg-transparent peer-focus:outline-0 peer-focus:ring-transparent 
                        rounded-lg peer transition-all duration-700 ease-in-out 
                        peer-checked:after:translate-x-6 peer-checked:after:border-transparent 
                        after:content-[''] after:absolute after:top-[3px] after:left-[3px] 
                        after:bg-gradient-to-r from-goldDark via-goldDark to-goldDark 
                        after:border-transparent after:border after:rounded-md after:h-[18px] 
                        after:w-[18px] after:transition-transform after:duration-[700ms] 
                        peer-checked:bg-transparent hover:peer-checked:bg-transparent border border-goldDark"
        ></div>
      </label>
      <p className="text-xs">light</p>
    </div>
  );
}

export default ButtonTheme;
