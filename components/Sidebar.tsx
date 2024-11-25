"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveSection(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight - 10) {
        // Si estás al final del scroll
        const lastSection = document.querySelector("footer");
        if (lastSection) {
          const id = lastSection.getAttribute("id");
          if (id) setActiveSection(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <ul className="flex text-goldDark font-bold justify-center gap-4 rounded-[30px] transition duration-700 ease-in-out">
        <li
          className={`flex p-3 border border-goldDark rounded-lg justify-center items-center cursor-pointer ${
            activeSection === "home"
              ? "text-teal-600 border-teal-800 scale-110 bg-teal-800/20"
              : ""
          }`}
        >
          <Link href="#home">
            <p>HOME</p>
          </Link>
        </li>
        <li
          className={`flex p-3 border border-goldDark rounded-lg justify-center items-center cursor-pointer ${
            activeSection === "about"
              ? "text-teal-600 border-teal-800 scale-110 bg-teal-800/20"
              : ""
          }`}
        >
          <Link href="#about">
            <p>ABOUT</p>
          </Link>
        </li>
        <li
          className={`flex p-3 border border-goldDark rounded-lg justify-center items-center cursor-pointer ${
            activeSection === "projects"
              ? "text-teal-600 border-teal-800 scale-110 bg-teal-800/20"
              : ""
          }`}
        >
          <Link href="#projects">
            <p>PROJECTS</p>
          </Link>
        </li>
        <li
          className={`flex p-3 border border-goldDark rounded-lg justify-center items-center cursor-pointer ${
            activeSection === "footer"
              ? "text-teal-600 border-teal-800 scale-110 bg-teal-800/20"
              : ""
          }`}
        >
          <Link href="#footer">
            <p>CONTACT</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
