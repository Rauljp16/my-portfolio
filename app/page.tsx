import Carrusel from "@/components/Carrusel";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main id="home" className="relative flex flex-col w-full">
        <div className="absolute ">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={2000}
            height={2000}
            className="w-40 -ml-1 pt-1 drop-shadow-blackSvg "
          />
        </div>
        <section className="flex h-full min-h-svh flex-col pt-32 bg-[url('/svg/bg.svg')]">
          <div className=" flex h-full items-center justify-around px-8 ">
            <article className="w-2/3 h-full flex flex-col justify-between pt-8">
              <div className="pt-12">
                <h3 className=" font-bold mb-2 text-5xl font-waterfall text-teal-600 tracking-wide drop-shadow-teal dark:drop-shadow-teal rounded-xl px-1 -left-1  max-w-fit transition duration-700 ease-in-out">
                  Raúl Jerez Pagán
                </h3>
                <h1 className="text-[63px] font-train text-transparent bg-clip-text bg-gradient-to-r from-goldDark via-goldLight to-goldDark py-2 mb-6">
                  Full Stack Developer
                </h1>
              </div>
              <p className="text-md tracking-wide leading-7 font-inter drop-shadow-white dark:drop-shadow-black transition duration-75 ease-linear  max-w-[500px] mb-4">
                Soy Raúl Jerez Pagán, <br />
                Full Stack Developer apasionado por crear aplicaciones bien
                estructuradas y centradas en el usuario. Disfruto cada etapa del
                desarrollo web, aprendiendo y adaptándome constantemente a
                nuevas tecnologías y desafíos. En mi portafolio puedes conocerme
                mejor y ver mis proyectos.
              </p>
              <p className="text-lg text-transparent font-inter bg-clip-text bg-gradient-to-r from-goldDark via-goldLight to-goldDark">
                ¡Espero que lo disfrutes tanto como yo al crearlo!
              </p>
              <div className="mt-12 mb-20">
                <ul className="flex gap-10">
                  <button className="flex items-center h-10 pl-5 pr-3 gap-4 dark:hover:bg-teal-900 hover:bg-teal-900 bg-background-light dark:bg-background-dark justify-center hover:scale-105 border-[1px] border-goldDark rounded-full transition duration-700 ease-in-out">
                    <p className="text-lg text-goldDark">CV</p>
                    <img src="svg/download.svg" alt="icono cv" />
                  </button>
                  <li className="w-10 h-10 flex p-2 dark:hover:bg-teal-900 hover:bg-teal-900 bg-background-light dark:bg-background-dark justify-center items-center hover:scale-110 border-[1px] border-goldDark rounded-full transition duration-700 ease-in-out">
                    <Link href="/">
                      <img src="svg/linkedin.svg" alt="icono linkedin" />
                    </Link>
                  </li>
                  <li className="w-10 h-10 flex p-2 dark:hover:bg-teal-900 hover:bg-teal-900 bg-background-light dark:bg-background-dark justify-center items-center hover:scale-110 border-[1px] border-goldDark rounded-full transition duration-700 ease-in-out">
                    <Link href="/">
                      <img src="svg/gitHub.svg" alt="icono gitHub" />
                    </Link>
                  </li>
                  <li className="w-10 h-10 flex p-2 dark:hover:bg-teal-900 hover:bg-teal-900 bg-background-light dark:bg-background-dark justify-center items-center hover:scale-110 border-[1px] border-goldDark rounded-full transition duration-700 ease-in-out">
                    <Link href="/">
                      <img src="svg/contact.svg" alt="icono contact" />
                    </Link>
                  </li>
                </ul>
              </div>
            </article>
            <article className=" w-1/3 flex justify-end items-center">
              <Image
                src="/images/raul.png"
                alt="Logo"
                width={600}
                height={600}
                className="w-96"
              />
            </article>
          </div>
        </section>
        <section className="">
          <Carrusel />
        </section>
        <section id="about" className="flex items-start justify-between p-8 mt-20">
          <article className="">
            <Image
              src="/images/about.webp"
              alt="Logo"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </article>
          <div>
            <h1 className="text-[63px] font-train text-transparent bg-clip-text bg-gradient-to-r from-goldDark via-goldLight to-goldDark py-2 mb-6">
              About me!!!
            </h1>
            <p className="text-md tracking-wide leading-7 font-inter drop-shadow-white dark:drop-shadow-black transition duration-75 ease-linear  max-w-[600px] mb-4">
              Soy Raúl Jerez Pagán, <br />
              Full Stack Developer apasionado por crear aplicaciones bien
              estructuradas y centradas en el usuario. Disfruto cada etapa del
              desarrollo web, aprendiendo y adaptándome constantemente a
              nuevas tecnologías y desafíos. En mi portafolio puedes conocerme
              mejor y ver mis proyectos.
            </p>
            <h3 className="mt-10 font-inter font-bold tracking-wider text-2xl text-transparent bg-clip-text bg-gradient-to-r from-goldDark via-goldLight to-goldDark">Skills</h3>
            <ul className="columns-2 font-inter font-bold text-base tracking-wider text-teal-600 mt-4">
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
            </ul>
          </div>

        </section>
      </main>
    </>
  );
}
