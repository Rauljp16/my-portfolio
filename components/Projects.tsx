"use client";

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
            slideFocus.classList.replace("focusDesactive", "focusActive")
            console.log("si funciona");
        }
        if (!slide5.classList.contains("childFocus")) {
            divFocus.classList.replace("focusActive", "focusDesactive")
            console.log("no funciona");
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
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-[20px]"></div>
                    <div id="focus" className="focusActive absolute max-w-[500px] top-[5%] left-[5%]">
                        <h1 className="font-train font-bold text-6xl pb-8 text-background-light">
                            HOTEL MIRANDA
                        </h1>
                        <p className="w-[80%] text-background-light tracking-wider mb-6 ">
                            Hotel Miranda, una aplicación web para gestionar un hotel
                            ficticio, con funcionalidades completas tanto para los usuarios
                            como para los administradores.
                        </p>
                        <ul className="flex gap-4 items-center mb-10">
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/html.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/js.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/sass.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl " />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/php.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/laravel.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/mysql.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                        </ul>
                        <div className="flex gap-8">
                            <button className="w-28 h-10 rounded-lg flex p-2 font-inter tracking-widest text-background-light bg-teal-800  justify-center items-center hover:scale-110 border-[1px] border-goldDark transition duration-700 ease-in-out">
                                WEBSITE
                            </button>
                            <button className="w-28 h-10 rounded-lg flex p-2 bg-teal-800 font-inter tracking-widest text-background-light justify-center items-center hover:scale-110 border-[1px] border-goldDark  transition duration-700 ease-in-out">
                                CODE
                            </button>
                        </div>
                    </div>
                </article>
                <article className="childFocus slides  bg-[url('/images/projects/h.miranda.jpg')] ">
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 rounded-[20px]"></div>
                    <div id="focus" className="focusActive absolute max-w-[500px] top-[5%] left-[5%] ">
                        <h1 className="font-train font-bold text-6xl pb-8 text-background-light">
                            HOTEL MIRANDA
                        </h1>
                        <p className="w-[80%] text-background-light tracking-wider mb-6 ">
                            Hotel Miranda, una aplicación web para gestionar un hotel
                            ficticio, con funcionalidades completas tanto para los usuarios
                            como para los administradores.
                        </p>
                        <ul className="flex gap-4 items-center mb-9">
                            <li className="bg-background-light/10 dark:bg-background-dark/80 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/html.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/js.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/sass.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl " />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/php.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/laravel.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/mysql.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                        </ul>
                        <div className="flex gap-8">
                            <button className="w-28 h-10 rounded-lg flex p-2 font-inter tracking-widest text-background-light bg-teal-800  justify-center items-center hover:scale-110 border-[1px] border-goldDark transition duration-700 ease-in-out">
                                WEBSITE
                            </button>
                            <button className="w-28 h-10 rounded-lg flex p-2 bg-teal-800 font-inter tracking-widest text-background-light justify-center items-center hover:scale-110 border-[1px] border-goldDark  transition duration-700 ease-in-out">
                                CODE
                            </button>
                        </div>
                    </div>
                </article>
                <article className="child1 slides bg-[url('/images/restaurant.webp')] ">
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-[20px]"></div>
                    <div id="focus" className="focusDesactive absolute max-w-[500px] top-[5%] left-[5%]">
                        <h1 className="font-train font-bold text-6xl pb-8 text-background-light">
                            HOTEL MIRANDA
                        </h1>
                        <p className="w-[80%] text-background-light tracking-wider mb-6 ">
                            Hotel Miranda, una aplicación web para gestionar un hotel
                            ficticio, con funcionalidades completas tanto para los usuarios
                            como para los administradores.
                        </p>
                        <ul className="flex gap-4 items-center mb-10">
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/html.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/js.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/sass.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl " />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/php.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/laravel.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/mysql.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                        </ul>
                        <div className="flex gap-8">
                            <button className="w-28 h-10 rounded-lg flex p-2 font-inter tracking-widest text-background-light bg-teal-800  justify-center items-center hover:scale-110 border-[1px] border-goldDark transition duration-700 ease-in-out">
                                WEBSITE
                            </button>
                            <button className="w-28 h-10 rounded-lg flex p-2 bg-teal-800 font-inter tracking-widest text-background-light justify-center items-center hover:scale-110 border-[1px] border-goldDark  transition duration-700 ease-in-out">
                                CODE
                            </button>
                        </div>
                    </div>
                </article>
                <article className="child2 slides bg-[url('/images/reception.webp')]  ">
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-[20px]"></div>
                    <div id="focus" className="focusDesactive absolute max-w-[500px] top-[5%] left-[5%]">
                        <h1 className="font-train font-bold text-6xl pb-8 text-background-light">
                            HOTEL MIRANDA
                        </h1>
                        <p className="w-[80%] text-background-light tracking-wider mb-6 ">
                            Hotel Miranda, una aplicación web para gestionar un hotel
                            ficticio, con funcionalidades completas tanto para los usuarios
                            como para los administradores.
                        </p>
                        <ul className="flex gap-4 items-center mb-10">
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/html.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/js.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/sass.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl " />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/php.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/laravel.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/mysql.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                        </ul>
                        <div className="flex gap-8">
                            <button className="w-28 h-10 rounded-lg flex p-2 font-inter tracking-widest text-background-light bg-teal-800  justify-center items-center hover:scale-110 border-[1px] border-goldDark transition duration-700 ease-in-out">
                                WEBSITE
                            </button>
                            <button className="w-28 h-10 rounded-lg flex p-2 bg-teal-800 font-inter tracking-widest text-background-light justify-center items-center hover:scale-110 border-[1px] border-goldDark  transition duration-700 ease-in-out">
                                CODE
                            </button>
                        </div>
                    </div>
                </article>
                <article className="child3 slides bg-[url('/images/logo.png')] bg-zinc-800  ">
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-[20px]"></div>
                    <div id="focus" className="focusDesactive absolute max-w-[500px] top-[5%] left-[5%]">
                        <h1 className="font-train font-bold text-6xl pb-8 text-background-light">
                            HOTEL MIRANDA
                        </h1>
                        <p className="w-[80%] text-background-light tracking-wider mb-6 ">
                            Hotel Miranda, una aplicación web para gestionar un hotel
                            ficticio, con funcionalidades completas tanto para los usuarios
                            como para los administradores.
                        </p>
                        <ul className="flex gap-4 items-center mb-10">
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/html.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/js.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/sass.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl " />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/php.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/laravel.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                            <li className="bg-background-light/10 dark:bg-background-dark/10 rounded-xl p-1 backdrop-blur-sm transition duration-700 ease-in-out">

                                <img src="svg/carrusel/mysql.svg" alt="icono projects" className="w-12 h-12 drop-shadow-xl" />
                            </li>
                        </ul>
                        <div className="flex gap-8">
                            <button className="w-28 h-10 rounded-lg flex p-2 font-inter tracking-widest text-background-light bg-teal-800  justify-center items-center hover:scale-110 border-[1px] border-goldDark transition duration-700 ease-in-out">
                                WEBSITE
                            </button>
                            <button className="w-28 h-10 rounded-lg flex p-2 bg-teal-800 font-inter tracking-widest text-background-light justify-center items-center hover:scale-110 border-[1px] border-goldDark  transition duration-700 ease-in-out">
                                CODE
                            </button>
                        </div>
                    </div>
                </article>
            </div>
            <article className="absolute bottom-40 left-44 flex gap-10 z-20">
                <button
                    className="w-14 h-10 flex bg-background-light/60 dark:bg-background-dark/60 justify-center items-center hover:scale-110 border-[1px] border-goldDark rounded-xl transition duration-700 ease-in-out"
                    onClick={handlePrev}
                >
                    <img src="/svg/arrowleft.svg" className="h-9 w-9" />
                </button>
                <button
                    className="w-14 h-10 flex bg-background-light/60 dark:bg-background-dark/60 justify-center items-center hover:scale-110 border-[1px] border-goldDark rounded-xl transition duration-700 ease-in-out"
                    onClick={handleNext}
                >
                    <img src="/svg/arrowRight.svg" className="h-9 w-9" />
                </button>
            </article>
        </section>
    );
}

export default Projects;
