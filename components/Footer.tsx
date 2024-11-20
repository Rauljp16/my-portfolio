import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <footer id="footer" className=" px-4 bg-[#1e1e1e]/80">
            <div className="relative max-w-7xl mx-auto">
                <div className=" flex gap-16 justify-center items-start">
                    {/* Logo and Description */}
                    <div className="absolute left-0 top-0">
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={2000}
                            height={2000}
                            className="w-32 drop-shadow-blackSvg "
                        />
                    </div>

                    {/* Contact Us */}
                    <div className="flex w-full flex-col ">
                        <h1 className="text-5xl text-teal-700 mx-auto mt-6 mb-16 border-b border-goldDark">
                            Contáctame!
                        </h1>
                        <div className="flex justify-evenly">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-start">
                                    <Image
                                        src="svg/contact.svg"
                                        alt="icon carrusel"
                                        width={40}
                                        height={40}
                                        className="mr-4"
                                    />
                                    <div>
                                        <h1>Email</h1>
                                        <a
                                            href="mailto:raul_astra16@hotmail.com"
                                        >
                                            raul_astra16@hotmail.com
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Image
                                        src="svg/contact.svg"
                                        alt="icon carrusel"
                                        width={40}
                                        height={40}
                                        className="mr-4"
                                    />
                                    <div>
                                        <h1>Ubicacion</h1>
                                        <p>Murcia</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Image
                                        src="svg/contact.svg"
                                        alt="icon carrusel"
                                        width={40}
                                        height={40}
                                        className="mr-4"
                                    />
                                    <div>
                                        <h1>Ubicacion</h1>
                                        <p>Murcia</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Image
                                        src="svg/contact.svg"
                                        alt="icon carrusel"
                                        width={40}
                                        height={40}
                                        className="mr-4"
                                    />
                                    <div>
                                        <h1>Ubicacion</h1>
                                        <p>Murcia</p>
                                    </div>
                                </li>
                            </ul>

                            <ul className="flex flex-col gap-4">
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-white transition-colors flex items-center"
                                    >
                                        <span className="mr-2">→</span> Free Resources
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-white transition-colors flex items-center"
                                    >
                                        <span className="mr-2">→</span> Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-white transition-colors flex items-center"
                                    >
                                        <span className="mr-2">→</span> About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-white transition-colors flex items-center"
                                    >
                                        <span className="mr-2">→</span> Reviews
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="hover:text-white transition-colors flex items-center"
                                    >
                                        <span className="mr-2">→</span> Pricing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex px-4 py-6 mt-16 items-center justify-between border-t border-goldDark text-center">
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">
                            <Image
                                src="svg/linkedin.svg"
                                alt="icon carrusel"
                                width={40}
                                height={40}
                            />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            <Image
                                src="svg/github.svg"
                                alt="icon carrusel"
                                width={40}
                                height={40}
                            />
                            <span className="sr-only">LinkedIn</span>
                        </Link>

                    </div>
                    <div className="">
                        <p className="text-sm">
                            🛠️ Porfolio realizado por Raúl Jerez Pagán. 2024
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
