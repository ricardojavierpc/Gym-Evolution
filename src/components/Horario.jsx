import { useState } from "react";

export function Horario() {
    const infos = [
        {
            id: 1,
            url: "../../public/img-horario/musculacion-desktop.webp",
            alt: "imagen de musculacion",
            span: "ver más"
        },
        {
            id: 2,
            url: "../../public/img-horario/boxeo-desktop.webp",
            alt: "imagen de boxeo",
            span: "ver más"
        },
        {
            id: 3,
            url: "../../public/img-horario/otrasActividades-desktop.webp",
            alt: "imagen de otras actividades",
            span: "ver más"
        }

    ];

    const infosResponsive = [
        {
            id: 1,
            url: "../../public/img-horario/musculacion-responsive.webp",
            alt: "imagen de musculacion"
        },
        {
            id: 2,
            url: "../../public/img-horario/boxeo-responsive.webp",
            alt: "imagen de boxeo"
        },
        {
            id: 3,
            url: "../../public/img-horario/otrasActividades-responsive.webp",
            alt: "imagen de otras actividades"
        }

    ];


    const [isDesktop, setIsDesktop] = useState(false)

    return (
        <div className="w-full h-dvh bg-nav text-white pt-20 flex flex-col items-center">
            <h1 className="text-5xl font-bold mb-24">Encuentra tu mejor momento</h1>

            {/* circles */}
            {/* Desktop */}
            <div className='md:flex flex-row hidden flex-grow flex-wrap gap-16'>
                {infos.map((item) => (
                    <div className="relative overflow-hidden flex justify-center">
                        <img className="rounded-[999px] w-[420px] h-[420px] border-[3px] shadow-[8px_10px_17px_#cccccc] overflow-hidden" key={item.id} src={item.url} alt={item.alt} />
                        <span className="absolute bottom-[55%] w-1/2 bg-red-50 flex justify-center">{item.span}</span>
                    </div>
                ))}
            </div>

            {/* Responsive */}
            <div className="md:hidden flex flex-col">
                {infosResponsive.map((item) => (
                    <img key={item.id} src={item.url} alt={item.alt} />
                ))}
            </div>
        </div>
    )
}