import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-[url('/svg/bg.svg')] bg-fixed">
      <Header />
      <Sidebar />
      <main className="flex w-full">
        <section className="w-full flex items-center justify-around px-8 pt-16">
          <article className="w-1/2">
            <h1 className="text-7xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-goldDark via-goldLight to-goldDark mb-4 py-2">
              Raúl Jerez Pagán
            </h1>
            <h3 className="text-2xl font-inter mb-8 text-teal-700">Full Stack Developer</h3>
            <p className="text-md mb-4">
              Soy Raúl Jerez Pagán, <br />
              Full Stack Developer apasionado por crear aplicaciones útiles y
              bien estructuradas. Disfruto trabajando en cada detalle del
              desarrollo web, desde el backend hasta el frontend, siempre
              buscando la mejor experiencia para el usuario. Me gusta aprender y
              adaptarme a nuevas tecnologías y retos. En mi portfolio podrás
              conocerme y ver algunos de mis proyectos.
            </p>
            <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-goldDark via-goldLight to-goldDark">¡Espero que lo disfrutes tanto como yo al crearlo!</p>
          </article>
          <article className="w-1/2 flex justify-end items-center">
            <Image
              src="/images/raul.png"
              alt="Logo"
              width={600}
              height={600}
              className="w-96"
            />
          </article>
        </section>
      </main>
    </div>
  );
}
