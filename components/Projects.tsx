"use client";

import Image from "next/image";
import Link from "next/link";

function Projects() {
  const handleNext = () => {
    const slider = document.querySelector(".slider") as HTMLElement;
    const divFocus = document.getElementById("focus") as HTMLElement;

    const slide1 = slider.children[0] as HTMLElement;
    const slide2 = slider.children[1] as HTMLElement;
    const slide3 = slider.children[2] as HTMLElement;
    const slide4 = slider.children[3] as HTMLElement;
    const slide5 = slider.children[4] as HTMLElement;
    const slideFocus = slide3.children[1] as HTMLElement;

    if (slider) {
      slide1.classList.replace("childFocus", "child3");
      slide3.classList.replace("child1", "childFocus");
      slide4.classList.replace("child2", "child1");
      slide5.classList.replace("child3", "child2");

      slider.appendChild(slide1);
    }

    if (slide2.classList.contains("childFocus")) {
      slideFocus.classList.replace("focusDesactive", "focusActive");
    }

    if (!slide5.classList.contains("childFocus")) {
      divFocus.classList.replace("focusActive", "focusDesactive");
    }
  };

  const handlePrev = () => {
    const slider = document.querySelector(".slider") as HTMLElement;
    const divFocus = document.getElementById("focus") as HTMLElement;

    const slide2 = slider.children[1] as HTMLElement;
    const slide3 = slider.children[2] as HTMLElement;
    const slide4 = slider.children[3] as HTMLElement;
    const slide5 = slider.children[4] as HTMLElement;
    const slideFocus = slide2.children[1] as HTMLElement;

    if (slider) {
      slide5.classList.replace("child3", "childFocus");
      slide2.classList.replace("childFocus", "child1");
      slide3.classList.replace("child1", "child2");
      slide4.classList.replace("child2", "child3");

      slider.insertBefore(slide5, slider.firstElementChild);
    }

    if (!slide2.classList.contains("childFocus")) {
      slideFocus.classList.replace("focusActive", "focusDesactive");
    }

    if (slide5.classList.contains("childFocus")) {
      divFocus.classList.replace("focusDesactive", "focusActive");
    }
  };

  return (
    <section
      id="projects"
      className="relative w-full h-screen overflow-hidden flex flex-col justify-start items-center pt-20 lg:pt-32 px-10"
    >
      <div className="relative w-full flex items-end mb-5 ">
        <h1 className="relative mr-auto text-3xl lg:text-6xl font-train text-transparent bg-clip-text bg-gradient-to-r from-goldDark via-goldLight to-goldDark">
          Projects
        </h1>
        <article className="relative w-fit  flex gap-5 z-20 ">
          <button
            className="w-12 lg:h-9 flex bg-background-dark/70 hover:drop-shadow-tealXs justify-center items-center hover:scale-110 border-[1px] border-goldLight rounded-xl transition duration-700 ease-in-out"
            onClick={handlePrev}
          >
            <Image
              src="svg/arrowLeft.svg"
              alt="buttom"
              className="h-9 w-9"
              width={30}
              height={30}
            />
          </button>
          <button
            className="w-12 lg:h-9 flex bg-background-dark/70 hover:drop-shadow-tealXs justify-center items-center hover:scale-110 border-[1px] border-goldLight rounded-xl transition duration-700 ease-in-out"
            onClick={handleNext}
          >
            <Image
              src="svg/arrowRight.svg"
              alt="buttom"
              className="h-9 w-9"
              width={30}
              height={30}
            />
          </button>
        </article>
      </div>

      <div className="relative slider w-[100%] h-[75%] overflow-hidden">
        <article className="relative childFocus slides bg-neutral-700 lg:bg-none p-3 md:p-18 lg:p-0">
          <Image
            src="/images/projects/taqueria.png"
            alt="project taqueria"
            className="w-full h-auto lg:w-full lg:h-full rounded-[20px]"
            width={1300}
            height={1300}
          />
          <div
            id="focus"
            className="focusActive flex flex-col gap-4 lg:absolute lg:w-2/5 lg:h-1/2 lg:top-[5%] lg:left-[2%] pt-4"
          >
            <h1 className="font-train w-[90%] text-3xl font-bold text-background-light">
              TAQUERIA TAQUEANDO
            </h1>
            <p className="w-[90%] lg:w-4/6 text-background-light">
              Taqueria Taqueando, una aplicación web para gestionar un
              restaurante mexicano ficticio, con funcionalidades completas tanto
              para los clientes como para el equipo de administración.
            </p>
            <ul className="flex gap-2 items-center w-fit bg-background-dark/80 lg:bg-transparent  flex-wrap p-1 rounded-xl">
              <li className="lg:bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/react.svg"
                  alt="icono projects"
                  className=" w-6 lg:w-8 h-6 lg:h-8 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="lg:bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/js.svg"
                  alt="icono projects"
                  className=" w-6 lg:w-8 h-6 lg:h-8 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="lg:bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/tailwind.svg"
                  alt="icono projects"
                  className=" w-6 lg:w-8 h-6 lg:h-8 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="lg:bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/aws.svg"
                  alt="icono projects"
                  className=" w-6 lg:w-8 h-6 lg:h-8 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
            </ul>
            <div className="relative w-full flex gap-4 lg:p-1">
              <Link
                target="_blank"
                href="https://github.com/Rauljp16/Restaurante-mexicano"
                className="rounded-lg w-20 h-8 flex justify-center text-[11px] font-semibold tracking-widest text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 hover:scale-110 transition duration-700 ease-in-out py-1"
              >
                <p className="flex items-center">WEB</p>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/Rauljp16/Restaurante-mexicano"
                className="rounded-lg w-20 h-8 flex justify-center font-semibold text-[11px] tracking-widest text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 hover:scale-110 transition duration-700 ease-in-out py-1"
              >
                <p className="flex items-center">CÓDIGO</p>
              </Link>
            </div>
          </div>
        </article>
        <article className="childFocus slides bg-[url('/images/projects/mirandaEdit.png')] ">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 rounded-[20px]"></div>
          <div
            id="focus"
            className="focusActive flex flex-col gap-6 absolute w-2/5 h-1/2 top-[5%] left-[2%]"
          >
            <h1 className="font-train w-4/5 text-4xl font-bold text-background-light">
              HOTEL MIRANDA
            </h1>
            <p className="w-3/4 text-background-light tracking-wider">
              Hotel Miranda, una aplicación web para gestionar un hotel
              ficticio, con funcionalidades completas tanto para los usuarios
              como para los administradores.
            </p>
            <ul className="flex gap-4 items-center w-2/3 flex-wrap">
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/html.svg"
                  alt="icono projects"
                  className="w-10 h-10 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/js.svg"
                  alt="icono projects"
                  className="w-10 h-10 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/sass.svg"
                  alt="icono projects"
                  className="w-10 h-10 drop-shadow-xl "
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/php.svg"
                  alt="icono projects"
                  className="w-10 h-10 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/laravel.svg"
                  alt="icono projects"
                  className="w-10 h-10 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/mysql.svg"
                  alt="icono projects"
                  className="w-10 h-10 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/aws.svg"
                  alt="icono projects"
                  className="w-10 h-10 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
            </ul>
            <div className="flex gap-8">
              <Link
                target="_blank"
                href="http://13.39.47.117/"
                className="w-20 h-6 lg:w-24 lg:h-8 rounded-lg flex p-2 font-inter tracking-widest text-sm text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 font-bold justify-center items-center hover:scale-110 border-[1px] border-goldDark transition duration-700 ease-in-out"
              >
                WEB
              </Link>
              <Link
                target="_blank"
                href="https://github.com/Rauljp16/Miranda-Laravel"
                className="w-20 h-6 lg:w-24 lg:h-8 rounded-lg flex p-2 font-inter tracking-widest text-sm text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 font-bold justify-center items-center hover:scale-110 border-[1px] border-goldDark transition duration-700 ease-in-out"
              >
                CÓDIGO
              </Link>
            </div>
          </div>
        </article>
        <article className="child1 slides bg-[url('/images/projects/dashboardEdit.png')]">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10  rounded-[20px]"></div>
          <div
            id="focus"
            className="focusDesactive flex flex-col gap-6 absolute w-2/5 h-1/2 top-[5%] left-[2%]"
          >
            <h1 className="font-train w-4/5 text-4xl font-bold text-background-light">
              DASHBOARD MIRANDA
            </h1>
            <p className="w-4/6 text-background-light tracking-wider">
              Dashboard Miranda, una aplicación diseñad apara la gestión interna
              del Hotel Miranda. Facilita el control de reservas, administración
              de habitaciones, monitoreo de la ocupación, y gestión de
              servicios, optimizando la operatividad diaria del hotel.
            </p>
            <ul className="flex gap-4 items-center w-4/5 flex-wrap ">
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/react.svg"
                  alt="icono projects"
                  className="w-10 h-10 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/ts.svg"
                  alt="icono projects"
                  className="w-10 h-10 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/styled.svg"
                  alt="icono projects"
                  className="w-10 h-10 drop-shadow-xl "
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/mysql.svg"
                  alt="icono projects"
                  className="w-10 h-10 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/aws.svg"
                  alt="icono projects"
                  className="w-10 h-10 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
            </ul>
            <div className="flex gap-8">
              <Link
                target="_blank"
                href="https://d17y33nb4a9wqn.cloudfront.net/"
                className="w-20 h-6 lg:w-24 lg:h-8 rounded-lg flex p-2 font-inter tracking-widest text-sm text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 font-bold justify-center items-center hover:scale-110 border-[1px] border-goldDark transition duration-700 ease-in-out"
              >
                WEB
              </Link>
              <Link
                target="_blank"
                href="https://github.com/Rauljp16/Dashboard-"
                className="w-20 h-6 lg:w-24 lg:h-8 rounded-lg flex p-2 font-inter tracking-widest text-sm text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 font-bold justify-center items-center hover:scale-110 border-[1px] border-goldDark transition duration-700 ease-in-out"
              >
                CÓDIGO
              </Link>
            </div>
          </div>
        </article>
        <article className="child2 slides bg-[url('/images/projects/oxygalleryEdit.png')]  ">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 rounded-[20px]"></div>
          <div
            id="focus"
            className="focusDesactive flex flex-col gap-6 absolute w-2/5 h-1/2 top-[5%] left-[2%]"
          >
            <h1 className="font-train w-4/5 text-4xl font-bold text-background-light">
              OXYGALLERY
            </h1>
            <p className="w-4/6 text-background-light tracking-wider">
              Oxygarelly, buscador de imágenes dinámico que permite explorar y
              buscar imágenes de alta calidad en tiempo real, aprovechando la
              API pública de Unsplash. Facilita a los usuarios el acceso rápido
              a imágenes categorizadas y personalizables, optimizando la
              experiencia de búsqueda visual.
            </p>
            <ul className="flex gap-4 items-center w-4/5 flex-wrap ">
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/react.svg"
                  alt="icono projects"
                  className="w-10 h-10 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/redux.svg"
                  alt="icono projects"
                  className="w-10 h-10 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/css.svg"
                  alt="icono projects"
                  className="w-10 h-10 drop-shadow-xl "
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/aws.svg"
                  alt="icono projects"
                  className="w-10 h-10 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
            </ul>
            <div className="flex gap-8">
              <Link
                target="_blank"
                href="https://d2y2vhecn82g01.cloudfront.net/"
                className="w-20 h-6 lg:w-24 lg:h-8 rounded-lg flex p-2 font-inter tracking-widest text-sm text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 font-bold justify-center items-center hover:scale-110 border-[1px] border-goldDark transition duration-700 ease-in-out"
              >
                WEB
              </Link>
              <Link
                target="_blank"
                href="https://github.com/Rauljp16/oxygallery"
                className="w-20 h-6 lg:w-24 lg:h-8 rounded-lg flex p-2 font-inter tracking-widest text-sm text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 font-bold justify-center items-center hover:scale-110 border-[1px] border-goldDark transition duration-700 ease-in-out"
              >
                CÓDIGO
              </Link>
            </div>
          </div>
        </article>
        <article className="child3 slides bg-[url('/images/projects/oxygenShopEdit.png')] bg-zinc-800  ">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 rounded-[20px]"></div>
          <div
            id="focus"
            className="focusDesactive absolute max-w-[500px] top-[5%] left-[2%]"
          >
            <h1 className="font-train font-bold max-w-60 text-6xl pb-8 text-background-light">
              OXYGEN SHOP
            </h1>
            <p className="w-[80%] text-background-light tracking-wider mb-6 ">
              Oxygen Shop, una aplicación web creada para ofrecer una
              experiencia de tienda en línea dinámica y accesible. Con un diseño
              intuitivo, Oxygen Shop permite a los usuarios explorar una amplia
              variedad de productos y disfrutar de una experiencia de compra
              fluida y segura
            </p>
            <ul className="flex gap-4 items-center mb-10 max-w-96 flex-wrap">
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/html.svg"
                  alt="icono projects"
                  className="w-12 h-12 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/sass.svg"
                  alt="icono projects"
                  className="w-12 h-12 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/js.svg"
                  alt="icono projects"
                  className="w-12 h-12 drop-shadow-xl "
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/gitHub.svg"
                  alt="icono projects"
                  className="w-12 h-12 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
            </ul>
            <div className="flex gap-8">
              <Link
                target="_blank"
                href="https://rauljp16.github.io/OxygenShop/"
                className="w-20 h-6 lg:w-24 lg:h-8 rounded-lg flex p-2 font-inter tracking-widest text-sm text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 font-bold justify-center items-center hover:scale-110 border-[1px] border-goldDark transition duration-700 ease-in-out"
              >
                WEB
              </Link>
              <Link
                target="_blank"
                href="https://github.com/Rauljp16/OxygenShop"
                className="w-20 h-6 lg:w-24 lg:h-8 rounded-lg flex p-2 font-inter tracking-widest text-sm text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 font-bold justify-center items-center hover:scale-110 border-[1px] border-goldDark transition duration-700 ease-in-out"
              >
                CÓDIGO
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
