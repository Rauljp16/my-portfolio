"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

function Projects() {
  const [screenSize, setScreenSize] = useState<string>("");

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 768) setScreenSize("slidesMobile");
      else if (window.innerWidth < 1024) setScreenSize("slidesTablet");
      else setScreenSize("slides");
    };

    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const divFocusRef = useRef<HTMLDivElement | null>(null);

  const handleNext = () => {
    if (sliderRef.current && divFocusRef.current) {
      const slider = sliderRef.current;

      const slide1 = slider.children[0] as HTMLElement;
      const slide2 = slider.children[1] as HTMLElement;
      const slide3 = slider.children[2] as HTMLElement;
      const slide4 = slider.children[3] as HTMLElement;
      const slide5 = slider.children[4] as HTMLElement;
      const slideFocus = slide3.children[1] as HTMLElement;
      const slideImage1 = slide3.children[0] as HTMLElement;
      const slideImage2 = slide1.children[0] as HTMLElement;

      slide1.classList.replace("childFocus", "child3");
      slide3.classList.replace("child1", "childFocus");
      slide4.classList.replace("child2", "child1");
      slide5.classList.replace("child3", "child2");

      slider.appendChild(slide1);

      if (slide2.classList.contains("childFocus")) {
        slideFocus.classList.replace("focusDesactive", "focusActive");
        slideImage1.classList.replace("height100", "height45");
      }

      if (!slide5.classList.contains("childFocus")) {
        slide1.children[1].classList.replace("focusActive", "focusDesactive");
        slideImage2.classList.replace("height45", "height100");
      }
    }
  };

  const handlePrev = () => {
    if (sliderRef.current && divFocusRef.current) {
      const slider = sliderRef.current;

      const slide2 = slider.children[1] as HTMLElement;
      const slide3 = slider.children[2] as HTMLElement;
      const slide4 = slider.children[3] as HTMLElement;
      const slide5 = slider.children[4] as HTMLElement;
      const slideFocus = slide2.children[1] as HTMLElement;
      const slideImage1 = slide2.children[0] as HTMLElement;
      const slideImage2 = slide5.children[0] as HTMLElement;

      slide5.classList.replace("child3", "childFocus");
      slide2.classList.replace("childFocus", "child1");
      slide3.classList.replace("child1", "child2");
      slide4.classList.replace("child2", "child3");

      slider.insertBefore(slide5, slider.firstElementChild);

      if (!slide2.classList.contains("childFocus")) {
        slideFocus.classList.replace("focusActive", "focusDesactive");
        slideImage2.classList.replace("height100", "height45");
      }

      if (slide5.classList.contains("childFocus")) {
        slide5.children[1].classList.replace("focusDesactive", "focusActive");
        slideImage1.classList.replace("height45", "height100");
      }
    }
  };
  return (
    <section
      id="projects"
      className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center lg:pt-20 p-4 lg:px-10"
    >
      <div className="relative w-full md:max-w-[90%] lg:max-w-[100%] flex items-end mb-5 ">
        <h1 className="relative mr-auto text-3xl md:text-5xl lg:text-6xl font-train text-transparent bg-clip-text bg-gradient-to-r from-goldDark via-goldLight to-goldDark">
          Proyectos
        </h1>
        <article className="relative w-fit flex gap-5 z-20 ">
          <button
            className="w-8 md:w-10 lg:w-12 h-7 md:h-8 lg:h-9 flex bg-background-light/70 dark:bg-background-dark/70 hover:drop-shadow-tealXs justify-center items-center hover:scale-110 border-[1px] border-goldLight rounded-lg md:rounded-xl lg:rounded-xl transition duration-700 ease-in-out"
            onClick={handlePrev}
          >
            <Image
              src="svg/arrowLeft.svg"
              alt="buttom"
              className="h-5 w-5 md:h-8 md:w-8 lg:h-9 lg:w-9"
              width={30}
              height={30}
            />
          </button>
          <button
            className="w-8 md:w-10 lg:w-12 h-7 md:h-8 lg:h-9 flex bg-background-light/70 dark:bg-background-dark/70 hover:drop-shadow-tealXs justify-center items-center hover:scale-110 border-[1px] border-goldLight rounded-lg md:rounded-xl lg:rounded-xl transition duration-700 ease-in-out"
            onClick={handleNext}
          >
            <Image
              src="svg/arrowRight.svg"
              alt="buttom"
              className="h-5 w-5 md:h-8 md:w-8 lg:h-9 lg:w-9"
              width={30}
              height={30}
            />
          </button>
        </article>
      </div>

      <div
        ref={sliderRef}
        className="relative slider w-[100%] h-[62%] lg:h-[80%] md:h-[70%] overflow-hidden md:max-w-[90%] lg:max-w-[100%] "
      >
        <article
          className={`relative short:flex short:flex-row-reverse childFocus ${screenSize} bg-neutral-700 lg:bg-none p-4 lg:p-0`}
        >
          <Image
            src="/images/projects/taqueria.png"
            alt="project taqueria"
            className="w-full short:h-full height45 lg:h-full object-cover md:object-center rounded-[20px]"
            width={1300}
            height={1300}
          />
          <div
            id="focus"
            ref={divFocusRef}
            className="focusActive flex flex-col gap-3 md:gap-6 lg:gap-8 short:relative short:scale-75 short:-top-9 short:gap-3 lg:absolute lg:w-80 lg:h-1/2 lg:top-[5%] lg:left-[2%] pt-4"
          >
            <h1 className="font-train w-[90%] text-lg md:text-3xl lg:text-4xl  font-bold text-background-light">
              TAQUERIA TAQUEANDO
            </h1>
            <p className=" text-xs md:text-sm text-background-light">
              Taqueria Taqueando, una aplicación web para gestionar un
              restaurante mexicano ficticio, con funcionalidades completas tanto
              para los clientes como para el equipo de administración.
            </p>
            <ul className="flex gap-2 items-center w-fit bg-background-dark/80 flex-wrap px-2 py-1 rounded-xl">
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/react.svg"
                  alt="icono projects"
                  className="w-5 h-5"
                  width={30}
                  height={30}
                />
              </li>
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/js.svg"
                  alt="icono projects"
                  className="w-5 h-5"
                  width={30}
                  height={30}
                />
              </li>
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/tailwind.svg"
                  alt="icono projects"
                  className="w-5 h-5"
                  width={30}
                  height={30}
                />
              </li>
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/aws.svg"
                  alt="icono projects"
                  // className="w-5 h-5"
                  width={30}
                  height={30}
                />
              </li>
            </ul>
            <div className="relative w-full flex gap-4 ">
              <Link
                target="_blank"
                href="https://github.com/Rauljp16/Restaurante-mexicano"
                className="rounded-xl w-20 h-8 flex justify-center text-[11px] font-semibold tracking-widest border border-goldDark text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 hover:scale-110 transition duration-700 ease-in-out py-1"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="svg/web.svg"
                    alt="icono projects"
                    className="w-5 h-5"
                    width={30}
                    height={30}
                  />
                  <p className="flex items-center">WEB</p>
                </div>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/Rauljp16/Restaurante-mexicano"
                className="rounded-xl w-24 h-8 flex justify-center font-semibold text-[11px] tracking-widest border border-goldDark text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 hover:scale-110 transition duration-700 ease-in-out py-1"
              >
                <div className="flex items-center gap-2 ">
                  <Image
                    src="svg/code.svg"
                    alt="icono projects"
                    className="w-5 h-5"
                    width={30}
                    height={30}
                  />
                  <p className="flex items-center">CÓDIGO</p>
                </div>
              </Link>
            </div>
          </div>
        </article>
        <article
          className={`relative short:flex short:flex-row-reverse childFocus ${screenSize} bg-neutral-700 lg:bg-none p-4 lg:p-0`}
        >
          <Image
            src="/images/projects/mirandaEdit.png"
            alt="project hotel miranda"
            className="w-full short:h-full height45 lg:h-full object-cover md:object-center rounded-[20px]"
            width={1300}
            height={1300}
          />

          <div
            // id="focus"
            ref={divFocusRef}
            className="focusActive flex flex-col gap-3 md:gap-6 lg:gap-8 short:relative short:scale-75 short:-top-9 short:gap-3 lg:absolute lg:w-80 lg:h-1/2 lg:top-[5%] lg:left-[2%] pt-4"
          >
            <h1 className="font-train w-[90%] text-lg md:text-3xl lg:text-4xl  font-bold text-background-light">
              HOTEL MIRANDA
            </h1>
            <p className=" text-xs md:text-sm text-background-light">
              Hotel Miranda, una aplicación web para gestionar un hotel
              ficticio, con funcionalidades completas tanto para los usuarios
              como para los administradores.
            </p>
            <ul className="flex gap-2 items-center w-fit bg-background-dark/80 flex-wrap py-1 px-2 rounded-xl">
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/html.svg"
                  alt="icono projects"
                  className="w-5 h-5"
                  width={30}
                  height={30}
                />
              </li>
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/js.svg"
                  alt="icono projects"
                  className="w-5 h-5"
                  width={30}
                  height={30}
                />
              </li>
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/sass.svg"
                  alt="icono projects"
                  // className="w-5 h-5"
                  width={25}
                  height={25}
                />
              </li>
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/php.svg"
                  alt="icono projects"
                  // className="w-5 h-5"
                  width={33}
                  height={30}
                />
              </li>
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/laravel.svg"
                  alt="icono projects"
                  className="w-5 h-5"
                  width={30}
                  height={30}
                />
              </li>
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/mysql.svg"
                  alt="icono projects"
                  // className="w-5 h-5"
                  width={32}
                  height={30}
                />
              </li>
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/aws.svg"
                  alt="icono projects"
                  // className="w-5 h-5"
                  width={32}
                  height={30}
                />
              </li>
            </ul>
            <div className="relative w-full flex gap-4 ">
              <Link
                target="_blank"
                href="http://13.39.47.117/"
                className="rounded-xl w-20 h-8 flex justify-center text-[11px] font-semibold tracking-widest border border-goldDark text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 hover:scale-110 transition duration-700 ease-in-out py-1"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="svg/web.svg"
                    alt="icono projects"
                    className="w-5 h-5"
                    width={30}
                    height={30}
                  />
                  <p className="flex items-center">WEB</p>
                </div>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/Rauljp16/Miranda-Laravel"
                className="rounded-xl w-24 h-8 flex justify-center text-[11px] font-semibold tracking-widest border border-goldDark text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 hover:scale-110 transition duration-700 ease-in-out py-1"
              >
                <div className="flex items-center gap-2 ">
                  <Image
                    src="svg/code.svg"
                    alt="icono projects"
                    className="w-5 h-5"
                    width={30}
                    height={30}
                  />
                  <p className="flex items-center">CÓDIGO</p>
                </div>
              </Link>
            </div>
          </div>
        </article>
        <article
          className={`relative child1 short:flex short:flex-row-reverse ${screenSize} bg-neutral-700 lg:bg-none p-4 lg:p-0`}
        >
          <Image
            src="/images/projects/dashboardEdit.png"
            alt="project dashboard miranda"
            className="w-full height100 short:h-full lg:h-full object-cover md:object-center rounded-[20px]"
            width={1300}
            height={1300}
          />
          <div
            // id="focus"
            ref={divFocusRef}
            className="focusDesactive flex flex-col gap-3 md:gap-6 lg:gap-8 short:relative short:scale-75 short:-top-10 short:gap-2 lg:absolute lg:w-80 lg:h-1/2 lg:top-[5%] lg:left-[2%] pt-4"
          >
            <h1 className="font-train w-[90%] text-lg md:text-3xl lg:text-4xl  font-bold text-background-light">
              DASHBOARD MIRANDA
            </h1>
            <p className=" text-xs md:text-sm text-background-light">
              Dashboard Miranda, una aplicación diseñada para la gestión interna
              del Hotel Miranda. Facilita el control de reservas, administración
              de habitaciones, monitoreo de la ocupación, y gestión de
              servicios, optimizando la operatividad diaria del hotel.
            </p>
            <ul className="flex gap-2 items-center w-fit bg-background-dark/80 flex-wrap px-2 py-1 rounded-xl">
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/react.svg"
                  alt="icono projects"
                  className="w-5 h-5"
                  width={30}
                  height={30}
                />
              </li>
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/ts.svg"
                  alt="icono projects"
                  // className="w-5 h-5"
                  width={29}
                  height={30}
                />
              </li>
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/styled.svg"
                  alt="icono projects"
                  // className="w-5 h-5"
                  width={31}
                  height={30}
                />
              </li>
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/mysql.svg"
                  alt="icono projects"
                  // className="w-5 h-5"
                  width={30}
                  height={30}
                />
              </li>
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/aws.svg"
                  alt="icono projects"
                  // className="w-5 h-5"
                  width={30}
                  height={30}
                />
              </li>
            </ul>
            <div className="relative w-full flex gap-4 ">
              <Link
                target="_blank"
                href="https://d17y33nb4a9wqn.cloudfront.net/"
                className="rounded-xl w-20 h-8 flex justify-center font-semibold text-[11px] tracking-widest border border-goldDark text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 hover:scale-110 transition duration-700 ease-in-out py-1"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="svg/web.svg"
                    alt="icono projects"
                    className="w-5 h-5"
                    width={30}
                    height={30}
                  />
                  <p className="flex items-center">WEB</p>
                </div>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/Rauljp16/Dashboard-"
                className="rounded-xl w-24 h-8 flex justify-center font-semibold text-[11px] tracking-widest border border-goldDark text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 hover:scale-110 transition duration-700 ease-in-out py-1"
              >
                <div className="flex items-center gap-2 ">
                  <Image
                    src="svg/code.svg"
                    alt="icono projects"
                    className="w-5 h-5"
                    width={30}
                    height={30}
                  />
                  <p className="flex items-center">CÓDIGO</p>
                </div>
              </Link>
            </div>
          </div>
        </article>
        <article
          className={`relative child2 short:flex short:flex-row-reverse ${screenSize} bg-neutral-700 lg:bg-none p-4 lg:p-0`}
        >
          <Image
            src="/images/projects/oxygalleryEdit.png"
            alt="project oxygallery"
            className="w-full short:h-full height100 lg:h-full object-cover md:object-center rounded-[20px]"
            width={1300}
            height={1300}
          />
          <div
            // id="focus"
            ref={divFocusRef}
            className="focusDesactive flex flex-col gap-3 md:gap-6 lg:gap-8 short:relative short:scale-75 short:-top-9 short:gap-3 lg:absolute lg:w-80 lg:h-1/2 lg:top-[5%] lg:left-[2%] pt-4"
          >
            <h1 className="font-train w-[90%] text-lg md:text-3xl lg:text-4xl  font-bold text-background-light">
              OXYGALLERY
            </h1>
            <p className=" text-xs md:text-sm text-background-light">
              Oxygarelly, buscador de imágenes dinámico que permite explorar y
              buscar imágenes de alta calidad en tiempo real, aprovechando la
              API pública de Unsplash. Facilita a los usuarios el acceso rápido
              a imágenes categorizadas y personalizables, optimizando la
              experiencia de búsqueda visual.
            </p>
            <ul className="flex gap-2 items-center w-fit bg-background-dark/80 flex-wrap px-2 py-1 rounded-xl">
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/react.svg"
                  alt="icono projects"
                  className="w-5 h-5"
                  width={30}
                  height={30}
                />
              </li>
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/redux.svg"
                  alt="icono projects"
                  className="w-5 h-5"
                  width={30}
                  height={30}
                />
              </li>
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/css.svg"
                  alt="icono projects"
                  className="w-5 h-5"
                  width={30}
                  height={30}
                />
              </li>
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/aws.svg"
                  alt="icono projects"
                  // className="w-5 h-5"
                  width={30}
                  height={30}
                />
              </li>
            </ul>
            <div className="relative w-full flex gap-4 ">
              <Link
                target="_blank"
                href="https://d2y2vhecn82g01.cloudfront.net/"
                className="rounded-xl w-20 h-8 flex justify-center font-semibold text-[11px] tracking-widest border border-goldDark text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 hover:scale-110 transition duration-700 ease-in-out py-1"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="svg/web.svg"
                    alt="icono projects"
                    className="w-5 h-5"
                    width={30}
                    height={30}
                  />
                  <p className="flex items-center">WEB</p>
                </div>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/Rauljp16/oxygallery"
                className="rounded-xl w-24 h-8 flex justify-center font-semibold text-[11px] tracking-widest border border-goldDark text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 hover:scale-110 transition duration-700 ease-in-out py-1"
              >
                <div className="flex items-center gap-2 ">
                  <Image
                    src="svg/code.svg"
                    alt="icono projects"
                    className="w-5 h-5"
                    width={30}
                    height={30}
                  />
                  <p className="flex items-center">CÓDIGO</p>
                </div>
              </Link>
            </div>
          </div>
        </article>
        <article
          className={`relative child3 short:flex short:flex-row-reverse ${screenSize} bg-neutral-700 lg:bg-none p-4 lg:p-0`}
        >
          <Image
            src="/images/projects/oxygenShopEdit.png"
            alt="project oxygen shop"
            className="w-full short:h-full height100 lg:h-full object-cover md:object-center rounded-[20px]"
            width={1300}
            height={1300}
          />
          <div
            // id="focus"
            ref={divFocusRef}
            className="focusDesactive flex flex-col gap-3 md:gap-6 lg:gap-8 short:relative short:scale-75 short:-top-9 short:gap-3 lg:absolute lg:w-80 lg:h-1/2 lg:top-[5%] lg:left-[2%] pt-4"
          >
            <h1 className="font-train w-[90%] text-lg md:text-3xl lg:text-4xl  font-bold text-background-light">
              OXYGEN SHOP
            </h1>
            <p className=" text-xs md:text-sm text-background-light">
              Oxygen Shop, una aplicación web creada para ofrecer una
              experiencia de tienda en línea dinámica y accesible. Con un diseño
              intuitivo, Oxygen Shop permite a los usuarios explorar una amplia
              variedad de productos y disfrutar de una experiencia de compra
              fluida y segura
            </p>
            <ul className="flex gap-2 items-center w-fit bg-background-dark/80 flex-wrap px-2 py-1 rounded-xl">
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/html.svg"
                  alt="icono projects"
                  className="w-5 h-5"
                  width={30}
                  height={30}
                />
              </li>
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/sass.svg"
                  alt="icono projects"
                  // className="w-5 h-5"
                  width={25}
                  height={30}
                />
              </li>
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/js.svg"
                  alt="icono projects"
                  className="w-5 h-5"
                  width={30}
                  height={30}
                />
              </li>
              <li className="w-fit h-fit">
                <Image
                  src="svg/carrusel/gitHub.svg"
                  alt="icono projects"
                  className="w-5 h-5"
                  width={30}
                  height={30}
                />
              </li>
            </ul>
            <div className="relative w-full flex gap-4 ">
              <Link
                target="_blank"
                href="https://rauljp16.github.io/OxygenShop/"
                className="rounded-xl w-20 h-8 flex justify-center font-semibold text-[11px] tracking-widest border border-goldDark text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 hover:scale-110 transition duration-700 ease-in-out py-1"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="svg/web.svg"
                    alt="icono projects"
                    className="w-5 h-5"
                    width={30}
                    height={30}
                  />
                  <p className="flex items-center">WEB</p>
                </div>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/Rauljp16/OxygenShop"
                className="rounded-xl w-24 h-8 flex justify-center font-semibold text-[11px] tracking-widest border border-goldDark text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 hover:scale-110 transition duration-700 ease-in-out py-1"
              >
                <div className="flex items-center gap-2 ">
                  <Image
                    src="svg/code.svg"
                    alt="icono projects"
                    className="w-5 h-5"
                    width={30}
                    height={30}
                  />
                  <p className="flex items-center">CÓDIGO</p>
                </div>
              </Link>
            </div>
          </div>
        </article>
      </div>
      <article className="absolute bottom-[16%] md:bottom-[13%] lg:bottom-[7%] mx-auto w-full"></article>
    </section>
  );
}

export default Projects;
