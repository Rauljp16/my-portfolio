import React from "react";
import Image from "next/image";

function Banner() {
    // Array de nombres de archivos SVG en `public/svg`
    const icons = [
        "svg/carrusel/angular.svg",
        "svg/carrusel/css.svg",
        "svg/carrusel/html.svg",
        "svg/carrusel/jest.svg",
        "svg/carrusel/js.svg",
        "svg/carrusel/laravel.svg",
        "svg/carrusel/mongo.svg",
        "svg/carrusel/mysql.svg",
        "svg/carrusel/node.svg",
        "svg/carrusel/php.svg",
        "svg/carrusel/react.svg",
        "svg/carrusel/redux.svg",
        "svg/carrusel/sass.svg",
        "svg/carrusel/sql.svg",
        "svg/carrusel/ts.svg",
    ];

    return (
        <div className="flex h-44 overflow-hidden bg-gradient mb-10 ">
            {/* Contenedor principal de íconos con animación animate-marquee */}
            <div className="flex justify-between animate-marquee ">
                {/* Recorre los íconos y los muestra en el banner */}
                {icons.map((icon, index) => (
                    <div key={index} className=" w-36 flex items-center justify-center ">
                        <Image
                            src={icon}
                            alt={`Icon ${index + 1}`}
                            width={66}
                            height={66}
                        />
                    </div>
                ))}
                {icons.map((icon, index) => (
                    <div key={index} className=" w-36 flex items-center justify-center ">
                        <Image
                            src={icon}
                            alt={`Icon ${index + 1}`}
                            width={66}
                            height={66}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Banner;
