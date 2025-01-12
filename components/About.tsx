import Image from "next/image";
import React from "react";

function About() {
  return (
    <div>
      <section
        id="about"
        className="relative flex flex-col lg:flex-row lg:h-svh items-center justify-center lg:gap-12 pt-20 lg:pt-32 p-10"
      >
        <div className="relative aspect-square rounded-full overflow-hidden w-4/6 md:w-[400px] lg:w-1/2 lg:max-w-[500px] lg:bottom-16">
          <Image
            src="/images/about.webp"
            alt="Logo"
            width={600}
            height={600}
            className="w-full h-full"
          />
        </div>
        <div className="pb-8 lg:w-1/2 max-w-[800px]">
          <h1 className="relative lg:-left-64 lg:mb-12 lg:w-[600px] text-4xl tracking-wide sm:text-6xl md:text-6xl lg:text-[88px] font-train text-transparent bg-clip-text bg-gradient-to-r from-goldDark via-goldLight to-goldDark py-4 drop-shadow-blackSvg">
            Sobre mí
          </h1>
          <p className="text-sm sm:text-md md:text-lg tracking-wide leading-7 font-inter drop-shadow-white dark:drop-shadow-black transition duration-75 ease-linear max-w-full lg:max-w-[500px] mb-10">
            Soy Raúl Jerez Pagán, <br />
            Full Stack Developer apasionado por crear aplicaciones bien
            estructuradas y centradas en el usuario. Disfruto cada etapa del
            desarrollo web, aprendiendo y adaptándome constantemente a nuevas
            tecnologías y desafíos.
          </p>
          <h3 className="font-inter font-bold tracking-wider text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-goldDark via-goldLight to-goldDark">
            Skills
          </h3>
          <ul className="columns-3 font-inter font-bold text-sm sm:text-base tracking-wider text-teal-600 mt-4 space-y-1 ">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Angular</li>
            <li>Node</li>
            <li>Html</li>
            <li>Css</li>
            <li>Tailwind</li>
            <li>Mongo</li>
            <li>Php</li>
            <li>Laravel</li>
            <li>MySql</li>
            <li>Sass</li>
            <li>Bem</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="absolute w-[800] h-[800] top-0 right-0 overflow-hidden blur-sm -z-10">
          <Image
            src="/images/rectangle.png"
            alt="Logo"
            width={656}
            height={656}
            className="relative -top-48 -right-64 blur-[50px] "
          />
        </div>
      </section>
    </div>
  );
}

export default About;
