"use client";

import React from "react";

function Projects() {
    const handleNext = () => {
        const slider = document.querySelector(".slider") as HTMLElement;

        const slide1 = slider.children[0] as HTMLElement;
        const slide3 = slider.children[2] as HTMLElement;
        const slide4 = slider.children[3] as HTMLElement;
        const slide5 = slider.children[4] as HTMLElement;

        if (slider) {
            slide1.classList.replace("childFocus", "child3");
            slide3.classList.replace("child1", "childFocus");
            slide4.classList.replace("child2", "child1");
            slide5.classList.replace("child3", "child2");

            slider.appendChild(slide1);
        }
    };

    const handlePrev = () => {
        const slider = document.querySelector(".slider") as HTMLElement;

        const slide2 = slider.children[1] as HTMLElement;
        const slide3 = slider.children[2] as HTMLElement;
        const slide4 = slider.children[3] as HTMLElement;
        const slide5 = slider.children[4] as HTMLElement;

        if (slider) {
            slide5.classList.replace("child3", "childFocus");
            slide2.classList.replace("childFocus", "child1");
            slide3.classList.replace("child1", "child2");
            slide4.classList.replace("child2", "child3");

            slider.insertBefore(slide5, slider.firstElementChild);
        }
    };

    return (
        <section
            id="projects"
            className="relative w-full h-screen overflow-hidden flex justify-center items-center bg-[url('/svg/bg.svg')]"
        >
            <div className="absolute top-0 left-0 w-full h-[5%] bg-background-light/50 dark:bg-background-dark/50 transition duration-700 ease-in-out"></div>
            <div className="absolute top-0 left-0 w-full h-[10%] bg-background-light/50 dark:bg-background-dark/50 transition duration-700 ease-in-out"></div>
            <div className="slider overflow-hidden">
                <article className="relative childFocus slides bg-[url('/images/fondo.webp')]">
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
                    <div className="absolute max-w-[500px] top-[5%] left-[5%]">
                        <h1 className="font-train font-bold text-background-light text-5xl pb-4">
                            HOTEL MIRANDA
                        </h1>
                        <p className="w-[90%] text-background-light tracking-wider mb-4">
                            Hotel Miranda, una aplicación web para gestionar un hotel
                            ficticio, con funcionalidades completas tanto para los usuarios
                            como para los administradores.
                        </p>
                        <ul className="flex gap-4 items-center mb-2">
                            <li className="bg-background-light/30 rounded-xl p-1 backdrop-blur-sm">
                                {" "}
                                <img src="svg/carrusel/html.svg" alt="icono projects" className="w-12 drop-shadow-xl" />
                            </li>
                            <li>
                                {" "}
                                <img src="svg/carrusel/js.svg" alt="icono projects" className="w-14 " />
                            </li>
                            <li>
                                {" "}
                                <img src="svg/carrusel/sass.svg" alt="icono projects" className="w-14 " />
                            </li>
                            <li>
                                {" "}
                                <img src="svg/carrusel/php.svg" alt="icono projects" className="w-16 " />
                            </li>
                            <li>
                                {" "}
                                <img src="svg/carrusel/laravel.svg" alt="icono projects" className="w-10 " />
                            </li>
                            <li>
                                {" "}
                                <img src="svg/carrusel/mysql.svg" alt="icono projects" className="w-16 " />
                            </li>
                        </ul>
                        <div className="flex gap-5">
                            <button className="w-28 h-10 rounded-lg flex p-2 font-inter tracking-widest text-background-light bg-teal-800  justify-center items-center hover:scale-110 border-[1px] border-goldDark transition duration-700 ease-in-out">
                                WEBSITE
                            </button>
                            <button className="w-28 h-10 rounded-lg flex p-2 bg-teal-800 font-inter tracking-widest text-background-light justify-center items-center hover:scale-110 border-[1px] border-goldDark  transition duration-700 ease-in-out">
                                CODE
                            </button>
                        </div>
                    </div>
                </article>
                <article className="childFocus slides  bg-[url('/images/about.webp')] ">
                    <div></div>
                </article>
                <article className="child1 slides bg-[url('/images/restaurant.webp')] ">
                    <div></div>
                </article>
                <article className="child2 slides bg-[url('/images/reception.webp')]  ">
                    <div></div>
                </article>
                <article className="child3 slides bg-[url('/images/logo.png')]  ">
                    <div></div>
                </article>
            </div>
            <article className="absolute bottom-40 left-44 flex gap-10 z-20">
                <button
                    className="w-14 h-10 flex p-2 bg-background-light/70 dark:bg-background-dark/70 justify-center items-center hover:scale-110 border-[1px] border-goldDark rounded-xl transition duration-700 ease-in-out"
                    onClick={handlePrev}
                >
                    <img src="/svg/arrowleft.svg" className="h-8 w-8" />
                </button>
                <button
                    className="w-14 h-10 flex p-2 bg-background-light/70 dark:bg-background-dark/70 justify-center items-center hover:scale-110 border-[1px] border-goldDark rounded-xl transition duration-700 ease-in-out"
                    onClick={handleNext}
                >
                    <img src="/svg/arrowRight.svg" className="h-8 w-8" />
                </button>
            </article>
        </section>
    );
}

export default Projects;
