"use client";

import React from "react";

function Projects() {

    const handleNext = () => {
        const slider = document.querySelector('.slider') as HTMLElement;
        const firstSlide = slider.firstElementChild as HTMLElement;

        if (firstSlide) {
            slider.appendChild(firstSlide);  // Mueve el primer elemento al final
        }
    };
    const handlePrev = () => {
        const slider = document.querySelector('.slider') as HTMLElement;
        const lastSlide = slider.lastElementChild as HTMLElement;

        if (lastSlide) {
            slider.insertBefore(lastSlide, slider.firstElementChild);  // Mueve el último elemento al inicio
        }
    };

    return (
        <section className="relative w-full h-screen bg-purple-50/70 overflow-hidden flex justify-center items-center">
            <div className="slider">
                <article className="child slides bg-[url('/images/fondo.webp')]  ">
                    <div className=" text-xl text-red-800 font-bold p-4">
                        imagen 1
                    </div>
                </article>
                <article className=" child slides  bg-[url('/images/about.webp')] ">
                    <div className=" text-xl text-red-800 font-bold p-4">
                        imagen 2
                    </div>
                </article>
                <article className="slides bg-[url('/images/restaurant.webp')] ">
                    <div className=" text-xl text-red-800 font-bold p-4">
                        imagen 3
                    </div>
                </article>
                <article className="slides bg-[url('/images/reception.webp')]  ">
                    <div className=" text-xl text-red-800 font-bold p-4">
                        imagen 4
                    </div>
                </article>
                <article className="absolute bottom-20 left-40 flex gap-8">
                    <button
                        className="w-12 h-12 flex p-2 dark:hover:bg-teal-900 hover:bg-teal-900 bg-background-light dark:bg-background-dark justify-center items-center hover:scale-110 border-[1px] border-goldDark rounded-full transition duration-700 ease-in-out"
                        onClick={handlePrev}
                    >
                        <img src="/svg/arrowleft.svg" className="h-12 w-12" />
                    </button>
                    <button
                        className="w-12 h-12 flex p-2 dark:hover:bg-teal-900 hover:bg-teal-900 bg-background-light dark:bg-background-dark justify-center items-center hover:scale-110 border-[1px] border-goldDark rounded-full transition duration-700 ease-in-out"
                        onClick={handleNext}
                    >
                        <img src="/svg/arrowRight.svg" className="h-12 w-12" />
                    </button>
                </article>
            </div>
        </section>
    );
}

export default Projects;
