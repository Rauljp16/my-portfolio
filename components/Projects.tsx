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
      className="relative w-full h-screen overflow-hidden flex justify-center items-center "
    >
      <div className="slider overflow-hidden">
        <article className="relative childFocus slides bg-[url('/images/projects/taqueria.png')]">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 rounded-[20px]"></div>
          <div
            id="focus"
            className="focusActive test absolute max-w-[450px] top-[5%] left-[2%]"
          >
            <h1 className="font-train font-bold text-5xl pb-8 text-background-light">
              TAQUERIA TAQUEANDO
            </h1>
            <p className="w-[70%] text-background-light tracking-wider mb-6 ">
              Taqueria Taqueando, una aplicación web para gestionar un
              restaurante mexicano ficticio, con funcionalidades completas tanto
              para los clientes como para el equipo de administración.
            </p>
            <ul className="flex gap-4 items-center mb-9 max-w-64 flex-wrap ">
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/react.svg"
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
                  className="w-12 h-12 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/tailwind.svg"
                  alt="icono projects"
                  className="w-12 h-12 drop-shadow-xl "
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/aws.svg"
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
                href="https://github.com/Rauljp16/Restaurante-mexicano"
                className="w-28 h-10 rounded-lg flex p-2 font-inter tracking-widest text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 font-bold justify-center items-center hover:scale-110 border-[1px] border-goldDark transition duration-700 ease-in-out"
              >
                WEB
              </Link>
              <Link
                target="_blank"
                href="https://github.com/Rauljp16/Restaurante-mexicano"
                className="w-28 h-10 rounded-lg flex p-2 font-inter tracking-widest font-bold text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 justify-center items-center hover:scale-110 border-[1px] border-goldDark  transition duration-700 ease-in-out"
              >
                CÓDIGO
              </Link>
            </div>
          </div>
        </article>
        <article className="childFocus slides  bg-[url('/images/projects/mirandaEdit.png')] ">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 rounded-[20px]"></div>
          <div
            id="focus"
            className="focusActive absolute max-w-[500px] top-[5%] left-[2%] "
          >
            <h1 className="font-train font-bold text-6xl pb-8 text-background-light">
              HOTEL MIRANDA
            </h1>
            <p className="w-[80%] text-background-light tracking-wider mb-6 max-w-72">
              Hotel Miranda, una aplicación web para gestionar un hotel
              ficticio, con funcionalidades completas tanto para los usuarios
              como para los administradores.
            </p>
            <ul className="flex gap-4 items-center mb-9 max-w-80 flex-wrap">
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
                  src="svg/carrusel/js.svg"
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
                  className="w-12 h-12 drop-shadow-xl "
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/php.svg"
                  alt="icono projects"
                  className="w-12 h-12 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/laravel.svg"
                  alt="icono projects"
                  className="w-12 h-12 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/mysql.svg"
                  alt="icono projects"
                  className="w-12 h-12 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/aws.svg"
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
                href="http://13.38.228.91"
                className="w-28 h-10 rounded-lg flex p-2 font-inter tracking-widest text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 font-bold justify-center items-center hover:scale-110 border-[1px] border-goldDark transition duration-700 ease-in-out"
              >
                WEB
              </Link>
              <Link
                target="_blank"
                href="https://github.com/Rauljp16/Miranda-Laravel"
                className="w-28 h-10 rounded-lg flex p-2 font-inter tracking-widest font-bold text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 justify-center items-center hover:scale-110 border-[1px] border-goldDark  transition duration-700 ease-in-out"
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
            className="focusDesactive absolute max-w-[500px] top-[5%] left-[2%]"
          >
            <h1 className="font-train font-bold text-5xl pb-8 text-background-light">
              DASHBOARD MIRANDA
            </h1>
            <p className="w-[80%] text-background-light tracking-wider mb-6 max-w-[340px]">
              Dashboard Miranda, una aplicación diseñad apara la gestión interna
              del Hotel Miranda. Facilita el control de reservas, administración
              de habitaciones, monitoreo de la ocupación, y gestión de
              servicios, optimizando la operatividad diaria del hotel.
            </p>
            <ul className="flex gap-4 items-center mb-9 max-w-64 flex-wrap ">
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/react.svg"
                  alt="icono projects"
                  className="w-12 h-12 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/ts.svg"
                  alt="icono projects"
                  className="w-12 h-12 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/styled.svg"
                  alt="icono projects"
                  className="w-12 h-12 drop-shadow-xl "
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/mysql.svg"
                  alt="icono projects"
                  className="w-12 h-12 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/aws.svg"
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
                href="https://d17y33nb4a9wqn.cloudfront.net/"
                className="w-28 h-10 rounded-lg flex p-2 font-inter tracking-widest text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 font-bold justify-center items-center hover:scale-110 border-[1px] border-goldDark transition duration-700 ease-in-out"
              >
                WEB
              </Link>
              <Link
                target="_blank"
                href="https://github.com/Rauljp16/Dashboard-"
                className="w-28 h-10 rounded-lg flex p-2 font-inter tracking-widest font-bold text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 justify-center items-center hover:scale-110 border-[1px] border-goldDark  transition duration-700 ease-in-out"
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
            className="focusDesactive absolute max-w-[500px] top-[5%] left-[2%] "
          >
            <h1 className="font-train font-bold text-5xl pb-8 text-background-light">
              OXYGALLERY
            </h1>
            <p className="w-[80%] text-background-light tracking-wider mb-6 ">
              Oxygarelly, buscador de imágenes dinámico que permite explorar y
              buscar imágenes de alta calidad en tiempo real, aprovechando la
              API pública de Unsplash. Facilita a los usuarios el acceso rápido
              a imágenes categorizadas y personalizables, optimizando la
              experiencia de búsqueda visual.
            </p>
            <ul className="flex gap-4 items-center mb-10 max-w-96 flex-wrap">
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/react.svg"
                  alt="icono projects"
                  className="w-12 h-12 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/redux.svg"
                  alt="icono projects"
                  className="w-12 h-12 drop-shadow-xl"
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/css.svg"
                  alt="icono projects"
                  className="w-12 h-12 drop-shadow-xl "
                  width={30}
                  height={30}
                />
              </li>
              <li className="bg-background-dark/60 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">
                <Image
                  src="svg/carrusel/aws.svg"
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
                href="https://d2y2vhecn82g01.cloudfront.net/"
                className="w-28 h-10 rounded-lg flex p-2 font-inter tracking-widest text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 font-bold justify-center items-center hover:scale-110 border-[1px] border-goldDark transition duration-700 ease-in-out"
              >
                WEB
              </Link>
              <Link
                target="_blank"
                href="https://github.com/Rauljp16/oxygallery"
                className="w-28 h-10 rounded-lg flex p-2 font-inter tracking-widest font-bold text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 justify-center items-center hover:scale-110 border-[1px] border-goldDark  transition duration-700 ease-in-out"
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
                className="w-28 h-10 rounded-lg flex p-2 font-inter tracking-widest text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 font-bold justify-center items-center hover:scale-110 border-[1px] border-goldDark transition duration-700 ease-in-out"
              >
                WEB
              </Link>
              <Link
                target="_blank"
                href="https://github.com/Rauljp16/OxygenShop"
                className="w-28 h-10 rounded-lg flex p-2 font-inter tracking-widest font-bold text-teal-600 hover:drop-shadow-tealXs hover:text-background-light bg-background-dark/80 justify-center items-center hover:scale-110 border-[1px] border-goldDark  transition duration-700 ease-in-out"
              >
                CÓDIGO
              </Link>
            </div>
          </div>
        </article>
      </div>
      <article className="absolute bottom-[116px] left-[40px] flex gap-10 z-20 ">
        <button
          className="w-16 h-12 flex bg-background-dark/70 hover:drop-shadow-tealXs justify-center items-center hover:scale-110 border-[1px] border-goldDark rounded-xl transition duration-700 ease-in-out"
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
          className="w-16 h-12 flex bg-background-dark/70 hover:drop-shadow-tealXs justify-center items-center hover:scale-110 border-[1px] border-goldDark rounded-xl transition duration-700 ease-in-out"
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
    </section>
  );
}

export default Projects;
