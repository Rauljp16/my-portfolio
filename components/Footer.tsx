import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <section id="footer" className=" px-4">
      <div className=" flex justify-between items-center px-4 pt-8 pb-0 mx-auto border-t border-goldDark ]">
        <div className="relative -left-4 -top-1 ">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={2000}
            height={2000}
            className="w-32 drop-shadow-blackSvg "
          />
        </div>
        <ul className="flex gap-10">
          <li>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/ra%C3%BAl-jerez-pag%C3%A1n-35570927a/"
              className="flex items-center gap-1 text-goldDark"
            >
              <Image
                src="svg/linkedin.svg"
                alt="icon carrusel"
                width={36}
                height={36}
                className="hover:drop-shadow-gold hover:scale-110"
              />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://github.com/Rauljp16"
              className="flex items-center gap-1 text-goldDark"
            >
              <Image
                src="svg/gitHub.svg"
                alt="icon carrusel"
                width={36}
                height={36}
                className="hover:drop-shadow-gold hover:scale-110"
              />
            </Link>
          </li>
          <li>
            <Link
              href="mailto:rauljp16@gmail.com"
              className="flex items-center gap-1 text-goldDark"
            >
              <Image
                src="svg/contact2.svg"
                alt="icon carrusel"
                width={37}
                height={37}
                className="hover:drop-shadow-gold hover:scale-110"
              />
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-end gap-2 pb-4 pt-5 ">
        <Image src="svg/bulb.svg" alt="icon tools" width={22} height={22} />
        <Image
          src="svg/palette.svg"
          alt="icon palette"
          width={22}
          height={22}
        />
        <p className="text-sm text-zinc-500 pl-2">
          Portfolio realizado por RAÚL JEREZ PAGÁN. 2025
        </p>
      </div>
    </section>
  );
}

export default Footer;
