"use client";
import React from "react";
import { useTheme } from "next-themes";

function ButtonTheme() {
    const { resolvedTheme, theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
    };

    return (
        <div>
            <div className="p-4">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        checked={resolvedTheme === "dark"}
                        onChange={toggleTheme}
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                    />
                    <div
                        className="w-12 h-6 bg-transparent hover:bg-transparent peer-focus:outline-0 peer-focus:ring-transparent 
                        rounded-full peer transition-all duration-700 ease-in-out 
                        peer-checked:after:translate-x-6 peer-checked:after:border-transparent 
                        after:content-[''] after:absolute after:top-[3px] after:left-[3px] 
                        after:bg-gradient-to-r from-goldDark via-goldLight to-goldDark 
                        after:border-transparent after:border after:rounded-full after:h-[18px] 
                        after:w-[18px] after:transition-transform after:duration-[700ms] 
                        peer-checked:bg-transparent hover:peer-checked:bg-transparent border border-goldDark"
                    ></div>
                </label>
            </div>
        </div>
    );
}

export default ButtonTheme;