import Carrusel from "@/components/Carrusel";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (<>
    <Header />
    <main className="relative flex flex-col w-full">
      <div className="absolute w-full h-screen bg-[url('/svg/bg.svg')]">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={2000}
          height={2000}
          className="w-40 -ml-1 pt-1 drop-shadow-blackSvg "
        />
      </div>
      <section className="relative h-screen pt-52">
        <div className=" flex items-start justify-around px-8 ">
          <article className="w-2/3">
            <h3 className="relative font-bold mb-2 text-5xl font-waterfall text-teal-600 tracking-wide drop-shadow-teal dark:drop-shadow-teal rounded-xl px-1 -left-1  max-w-fit transition duration-700 ease-in-out">
              Raúl Jerez Pagán
            </h3>
            <h1 className="text-[63px] font-train mb-10 text-transparent bg-clip-text bg-gradient-to-r from-goldDark via-goldLight to-goldDark py-2">
              Full Stack Developer
            </h1>
            <p className="text-md tracking-wide leading-7 mb-4 font-inter drop-shadow-white dark:drop-shadow-black transition duration-75 ease-linear  max-w-[500px]">
              Soy Raúl Jerez Pagán, <br />
              Full Stack Developer apasionado por crear aplicaciones bien
              estructuradas y centradas en el usuario. Disfruto cada etapa del
              desarrollo web, aprendiendo y adaptándome constantemente a nuevas
              tecnologías y desafíos. En mi portafolio puedes conocerme mejor y
              ver mis proyectos.{" "}
            </p>
            <p className="text-lg text-transparent font-inter bg-clip-text bg-gradient-to-r from-goldDark via-goldLight to-goldDark">
              ¡Espero que lo disfrutes tanto como yo al crearlo!
            </p>
            <div className="my-12">
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
      <section>
        <Carrusel />
      </section>
    </main>
  </>
  );
}
