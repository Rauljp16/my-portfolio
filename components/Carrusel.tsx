import React from "react";
import Image from "next/image";

function Banner() {
    // Array de nombres de archivos SVG en `public/svg`
    const icons = ["svg/contact.svg", "svg/about.svg", "svg/gitHub.svg", "svg/linkedin.svg", "svg/projects.svg"]

    return (
        <div className="flex  w-full overflow-hidden py-4">
            {/* Contenedor principal de íconos con animación */}
            <div className="flex gap-20 animate-marquee ">
                {/* Recorre los íconos y los muestra en el banner */}
                {icons.map((icon, index) => (
                    <div key={index} className="">
                        <Image src={icon} alt={`Icon ${index + 1}`} width={60} height={60} />
                    </div>
                ))}
                {/* Duplica el arreglo de íconos para lograr un desplazamiento continuo */}
                {icons.map((icon, index) => (
                    <div key={`repeat-${index}`} className="">
                        <Image src={icon} alt={`Icon ${index + 1}`} width={60} height={60} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Banner;
