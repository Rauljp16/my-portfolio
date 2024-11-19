import About from "@/components/About";
import Carrusel from "@/components/Carrusel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
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
            <article className="w-2/3 h-full flex flex-col gap-4 justify-between pt-12">
              <div className="pt-12">
                <h3 className=" font-bold mb-2 text-5xl font-waterfall text-teal-600 tracking-wide drop-shadow-teal dark:drop-shadow-teal rounded-xl px-1 -left-1  max-w-fit transition duration-700 ease-in-out">
                  Raúl Jerez Pagán
                </h3>
                <h1 className="text-[63px] font-train text-transparent bg-clip-text bg-gradient-to-r from-goldDark via-goldLight to-goldDark py-2 mb-6">
                  Full Stack Developer
                </h1>
              </div>
              <p className="text-md tracking-wide leading-7 font-inter drop-shadow-white dark:drop-shadow-black transition duration-75 ease-linear  max-w-[500px] mb-4">
                Desarrollador de aplicaciones web que combinan estructura y usabilidad. <br />
                Cada proyecto es una oportunidad para crear experiencias digitales que marcan la diferencia.
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
        <About />
        <Projects />
        <section className="px-5">
          <Carrusel />
        </section>
        <Footer />
      </main>
    </>
  );
}
