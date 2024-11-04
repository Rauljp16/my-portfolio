"use client";

import { useState } from "react";
import Image from "next/image";

interface Destination {
    id: number;
    title: string;
    location: string;
    image: string;
    description: string;
}

const destinations: Destination[] = [
    {
        id: 1,
        title: "NAYARA CAMP",
        location: "Costa Rica",
        image: "/images/fondo.webp",
        description: "The journey to Rich Coast typically starts in the is a country in the Central American region of North America.",
    },
    {
        id: 2,
        title: "THE MAGNIFICENT",
        location: "Columbia",
        image: "/images/restaurant.webp",
        description: "Experience the natural wonders of Columbia's magnificent landscapes.",
    },
    {
        id: 3,
        title: "VILLA ROSA",
        location: "Masai Mara",
        image: "/images/about.webp",
        description: "Luxury meets wilderness in the heart of Kenya's most famous reserve.",
    },
];

export default function Projects() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % destinations.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length);
    };

    return (
        <div id="projects" className="relative h-screen py-32 px-20 w-full overflow-hidden rounded-md">
            {/* Main Slide */}
            <div className="relative h-full w-full rounded-md">
                <Image
                    src={destinations[currentSlide].image}
                    alt={destinations[currentSlide].title}
                    fill
                    className="object-cover rounded-md"
                    priority
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 pr-0 md:p-16 md:pr-0 rounded-md">
                    <div>
                        <span className="text-sm font-medium text-white/80">
                            {destinations[currentSlide].location}
                        </span>
                        <h1 className="mt-2 font-sans text-5xl font-bold text-white md:text-7xl">
                            {destinations[currentSlide].title}
                        </h1>
                        <p className="mt-4 max-w-md text-white/80">
                            {destinations[currentSlide].description}
                        </p>
                        <button className="mt-8 rounded-full bg-yellow-500 px-8 text-black hover:bg-yellow-400">
                            button
                        </button>
                    </div>

                    {/* Thumbnails Slider */}
                    <div className="relative overflow-hidden">
                        <div className="relative left-1/2 flex gap-8 pl-8">
                            <div
                                key={destinations[(currentSlide + 1) % destinations.length].id}
                                className="relative h-32 w-56 flex-shrink-0 cursor-pointer transition-opacity duration-300"
                                onClick={() => setCurrentSlide((currentSlide + 1) % destinations.length)}
                            >
                                <Image
                                    src={destinations[(currentSlide + 1) % destinations.length].image}
                                    alt={destinations[(currentSlide + 1) % destinations.length].title}
                                    fill
                                    className="rounded-lg object-cover blur-sm"
                                />
                                <div className="absolute bottom-2 left-2 right-2">
                                    <div className="text-base font-bold text-white">
                                        {destinations[(currentSlide + 1) % destinations.length].title}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="absolute bottom-2 left-40 gap-8 flex">
                            <button
                                className="w-10 h-10 flex p-2 dark:hover:bg-teal-900 hover:bg-teal-900 bg-background-light dark:bg-background-dark justify-center items-center hover:scale-110 border-[1px] border-goldDark rounded-full transition duration-700 ease-in-out"
                                onClick={prevSlide}
                            >
                                <img src="/svg/arrowleft.svg" className="h-10 w-10" />
                            </button>
                            <button
                                className="w-10 h-10 flex p-2 dark:hover:bg-teal-900 hover:bg-teal-900 bg-background-light dark:bg-background-dark justify-center items-center hover:scale-110 border-[1px] border-goldDark rounded-full transition duration-700 ease-in-out"
                                onClick={nextSlide}
                            >
                                <img src="/svg/arrowRight.svg" className="h-10 w-10" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
