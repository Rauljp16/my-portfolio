"use client";

import About from "@/components/About";
import ButtonTheme from "@/components/ButtonTheme";
import Carrusel from "@/components/Carrusel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);

  const handleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  const handleDownload = () => {
    const pdfPath = "/CV-Raul.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "CV Raúl Jerez Pagán.pdf";
    link.click();
  };

  return (
    <>
      <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <main className="relative flex flex-col">
        <div className="absolute">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={2000}
            height={2000}
            className="w-32 md:w-40 -ml-1 pt-1 drop-shadow-blackSvg "
          />
        </div>
        <div className="lg:hidden fixed top-5 right-5 cursor-pointer z-50">
          {activeMenu ? (
            <div className="flex flex-row">
              <ButtonTheme />
              <Image
                src="svg/menu.svg"
                alt="icono menu burguer"
                width={30}
                height={30}
                onClick={handleMenu}
              />
            </div>
          ) : (
            <Image
              src="svg/close.svg"
              alt="icono menu burguer"
              width={30}
              height={30}
              onClick={handleMenu}
            />
          )}
        </div>

        <section
          id="home"
          className="relative flex h-full min-h-svh flex-col pt-28 lg:pt-10 mb-20"
        >
          <div className=" flex flex-col-reverse lg:flex-row h-full lg:h-screen items-center justify-around gap-4 lg:gap-0  px-4 lg:px-8 ">
            <article className=" lg:w-1/2 h- flex flex-col gap-8 justify-between">
              <h3 className=" font-bold mt-3 text-4xl lg:text-5xl font-waterfall text-teal-600 tracking-wide drop-shadow-teal dark:drop-shadow-teal rounded-xl max-w-fit transition duration-700 ease-in-out">
                Raúl Jerez Pagán
              </h3>
              <h1 className="w-fit text-3xl lg:text-6xl  font-train text-transparent bg-clip-text bg-gradient-to-r from-goldDark via-goldLight to-goldDark">
                Full Stack Developer
              </h1>
              <p className="text-md tracking-wide leading-7 font-inter drop-shadow-white dark:drop-shadow-black transition duration-75 ease-linear ">
                Desarrollador de aplicaciones web que combinan estructura y
                usabilidad. <br />
                Cada proyecto es una oportunidad para crear experiencias
                digitales que marcan la diferencia.
              </p>
              <p className="text-lg text-transparent font-inter bg-clip-text bg-gradient-to-r from-goldDark via-goldLight to-goldDark">
                ¡Espero que lo disfrutes tanto como yo al crearlo!
              </p>
              <div>
                <ul className="flex mx-auto justify-between max-w-96 lg:gap-10">
                  <button
                    onClick={handleDownload}
                    className="flex items-center h-12 pl-5 pr-3 gap-4 dark:hover:bg-teal-900 hover:bg-teal-900 bg-background-light dark:bg-background-dark justify-center hover:scale-105 border-[1px] border-goldDark rounded-full transition duration-700 ease-in-out"
                  >
                    <p className="text-lg text-goldDark">CV</p>
                    <Image
                      src="svg/download.svg"
                      alt="icono cv"
                      width={30}
                      height={30}
                    />
                  </button>
                  <li className="w-12 h-12 flex p-2 dark:hover:bg-teal-900 hover:bg-teal-900 bg-background-light dark:bg-background-dark justify-center items-center hover:scale-110 border-[1px] border-goldDark rounded-full transition duration-700 ease-in-out">
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/ra%C3%BAl-jerez-pag%C3%A1n-35570927a/"
                    >
                      <Image
                        src="svg/linkedin.svg"
                        alt="icono linkedin"
                        width={30}
                        height={30}
                      />
                    </Link>
                  </li>
                  <li className="w-12 h-12 flex p-2 dark:hover:bg-teal-900 hover:bg-teal-900 bg-background-light dark:bg-background-dark justify-center items-center hover:scale-110 border-[1px] border-goldDark rounded-full transition duration-700 ease-in-out">
                    <Link target="_blank" href="https://github.com/Rauljp16">
                      <Image
                        src="svg/gitHub.svg"
                        alt="icono gitHub"
                        width={30}
                        height={30}
                      />
                    </Link>
                  </li>
                  <li className="w-12 h-12 flex p-2 dark:hover:bg-teal-900 hover:bg-teal-900 bg-background-light dark:bg-background-dark justify-center items-center hover:scale-110 border-[1px] border-goldDark rounded-full transition duration-700 ease-in-out">
                    <Link href="mailto:raul_astra16@hotmail.com">
                      <Image
                        src="svg/contact.svg"
                        alt="icono contact"
                        width={30}
                        height={30}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </article>
            <article className="lg:w-1/2 flex justify-center">
              <Image
                src="/images/raul.png"
                alt="Logo"
                width={600}
                height={600}
                className="w-3/5 lg:w-4/5"
              />
            </article>
          </div>
        </section>
        <About />
        <Projects />
        <section className="px-5">
          <Carrusel />
        </section>
        <Footer />
      </main>
    </>
  );
}
