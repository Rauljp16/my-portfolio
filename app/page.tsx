import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex w-full bg-[url('/svg/bg.svg')] ">
        <section className="w-1/2 flex flex-col items-center justify-around p-8">
          <h3 className="text-lg">Full Stack Developer</h3>
          <h1 className="text-3xl font-bold">Hola soy</h1>
          <h1 className="text-4xl font-bold">Raúl Jerez Pagán</h1>
          <p className="text-md">kldj ldsjklkjf dljdfl fldjs</p>
        </section>
        <section className="w-1/2 h-96 flex items-center justify-center">
          <Image
            src="/images/raul.png"
            alt="Logo"
            width={400}
            height={400}
            className=""
          />
        </section>
      </main>
      <Sidebar />
    </>
  );
}
