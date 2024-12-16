import { useState } from "react";

export function Horario() {
    const infos = [
        {
            id: 1,
            url: "../../public/img-horario/musculacion-desktop.webp",
            alt: "imagen de musculacion",
            titulo: "Sala de musculación",
            span: "ver más"
        },
        {
            id: 2,
            url: "../../public/img-horario/boxeo-desktop.webp",
            alt: "imagen de boxeo",
            titulo: "Boxeo",
            span: "ver más"
        },
        {
            id: 3,
            url: "../../public/img-horario/otrasActividades-desktop.webp",
            alt: "imagen de otras actividades",
            titulo: "Otras actividades",
            span: "ver más"
        }

    ];

    const infosResponsive = [
        {
            id: 1,
            url: "../../public/img-horario/musculacion-responsive.webp",
            alt: "imagen de musculacion",
            titulo: "Sala de musculación",
            span: "ver más"
        },
        {
            id: 2,
            url: "../../public/img-horario/boxeo-responsive.webp",
            alt: "imagen de boxeo",
            titulo: "Boxeo",
            span: "ver más"
        },
        {
            id: 3,
            url: "../../public/img-horario/otrasActividades-responsive.webp",
            alt: "imagen de otras actividades",
            titulo: "Otras actividades",
            span: "ver más"
        }

    ];


    const [isOpen, setIsOpen] = useState(null)

    const handleClick = (id) => {
        if (isOpen === id) {
            setIsOpen(null)
        } else {
            setIsOpen(id)
        }
    }

    

    return (
        <div className="w-full h-full bg-nav text-white pt-20 flex flex-col items-center">
            <h1 className="md:text-5xl text-2xl font-bold md:mb-24 mb-9">Encuentra tu mejor momento</h1>

            {/* circles */}
            {/* Desktop */}
            <div className='md:flex md:flex-col lg:flex-row hidden flex-wrap gap-9'>
                {infos.map((item) => (
                    <div key={item.id} className="flex flex-col items-center gap-6">
                        <button onClick={() => handleClick(item.id)}
                            className="flex flex-wrap w-[300px] h-[300px] xl:w-[390px] xl:h-[390px] rounded-[999px] relative overflow-hidden
                        shadow-[8px_10px_17px_#cccccc]">

                            <img className="rounded-[999px] w-full h-full border-[3px]"
                                src={item.url}
                                alt={item.alt}
                            />

                            <span className="flex justify-center items-center pb-72 lg:pb-48 md:pb-48 md:text-3xl xl:text-4xl xl:h-80 w-full absolute top-[60%] h-full bg-black bg-opacity-25 text-4xl lg:text-2xl font-bold transition-all duration-300 ease-in-out hover:scale-105">
                                {item.span}
                            </span>
                        </button>

                        <h2 className="font-bold text-3xl">{item.titulo}</h2>
                    </div>

                ))}
            </div>

            {/* Responsive */}
            <div className="md:hidden flex flex-col gap-5 ">
                {infosResponsive.map((item) => (
                    <div key={item.id} className="flex flex-col items-center gap-7" >
                        <a href="#" className="flex justify-end gap-5 w-[300px] h-[300px] rounded-[999px] bg-red-700 relative overflow-hidden  shadow-[8px_10px_17px_#cccccc]">
                            <img className="rounded-[999px] w-full h-full border-[3px] flex " src={item.url} alt={item.alt} />
                            <span className="flex justify-center items-center pb-52 w-full absolute top-[60%] h-full bg-black bg-opacity-25 text-3xl font-bold">
                                {item.span}
                            </span>

                        </a >
                        <h2 className="font-bold text-2xl">{item.titulo}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}