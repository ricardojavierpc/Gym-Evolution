import { useState } from "react";
import { Cross } from "./navComponent/Cross";

export function Horario() {
    const infos = [
        {
            id: 1,
            url: "../../public/img-horario/musculacion-desktop.webp",
            alt: "imagen de musculacion",
            titulo: "Sala de musculación",
            span: "ver más",
            horario: [

                {
                    dia: "Lunes", hora: "6:30 - 22:30"
                },
                {
                    dia: "Martes", hora: "6:30 - 22:30"
                },
                {
                    dia: "Miércoles", hora: "6:30 - 22:30"
                },
                {
                    dia: "Jueves", hora: "6:30 - 22:30"
                },
                {
                    dia: "Viernes", hora: "6:30 - 22:30"
                },
                { dia: "Sábado", hora: "9:00 - 13:00", },
                {
                    dia: "Domingo", hora: "9:00 - 13:00"
                }
            ]
        },
        {
            id: 2,
            url: "../../public/img-horario/boxeo-desktop.webp",
            alt: "imagen de boxeo",
            titulo: "Boxeo",
            span: "ver más",
            horario: [

                {
                    dia: "Lunes", hora: "20:30 - 22:00"
                },
                {
                    dia: "Miércoles", hora: "20:30 - 22:00"
                },
                {
                    dia: "Viernes", hora: "20:30 - 22:00"
                }
            ]
        },
        {
            id: 3,
            url: "../../public/img-horario/otrasActividades-desktop.webp",
            alt: "imagen de otras actividades",
            titulo: "Otras actividades",
            span: "ver más",
            urlEnlace: "#"
        }

    ];

    const infosResponsive = [
        {
            id: 1,
            url: "../../public/img-horario/musculacion-responsive.webp",
            alt: "imagen de musculacion",
            titulo: "Sala de musculación",
            span: "ver más",
            horario: [

                {
                    dia: "Lunes", hora: "6:30 - 22:30"
                },
                {
                    dia: "Martes", hora: "6:30 - 22:30"
                },
                {
                    dia: "Miércoles", hora: "6:30 - 22:30"
                },
                {
                    dia: "Jueves", hora: "6:30 - 22:30"
                },
                {
                    dia: "Viernes", hora: "6:30 - 22:30"
                },
                { dia: "Sábado", hora: "9:00 - 13:00", },
                {
                    dia: "Domingo", hora: "9:00 - 13:00"
                }
            ]
        },
        {
            id: 2,
            url: "../../public/img-horario/boxeo-responsive.webp",
            alt: "imagen de boxeo",
            titulo: "Boxeo",
            span: "ver más",
            horario: [

                {
                    dia: "Lunes", hora: "20:30 - 22:00"
                },
                {
                    dia: "Miércoles", hora: "20:30 - 22:00"
                },
                {
                    dia: "Viernes", hora: "20:30 - 22:00"
                }
            ]
        },
        {
            id: 3,
            url: "../../public/img-horario/otrasActividades-responsive.webp",
            alt: "imagen de otras actividades",
            titulo: "Otras actividades",
            span: "ver más"
        }

    ];


    const [isOpen, setIsOpen] = useState(null);
    const [isOpenRes, setIsOpenRes] = useState(null);


    const handleClick = (id) => {
        if (isOpen === id) {
            setIsOpen(null)
        } else {
            setIsOpen(id)
        }
    }

    const handleClickRes = (id) => {
        isOpenRes === id ? setIsOpenRes(null) : setIsOpenRes(id)
    }


    // Filter for other activities for desktop
    const otrasActividades = infos.find((i) => (i.titulo === "Otras actividades"));
    const otherElements = infos.filter((i) => (i.titulo !== "Otras actividades"));

    // Filter for other activities for responsive
    const otrasActividadesRes = infosResponsive.find((i) => (i.titulo === "Otras actividades"));
    const otherElementsRes = infosResponsive.filter((i) => (i.titulo !== "Otras actividades"));


    return (
        <div className="w-full h-full bg-nav text-white pt-20 flex flex-col items-center ">
            <h1 className="md:text-5xl text-2xl font-bold md:mb-24 mb-9">Encuentra tu mejor momento</h1>

            {/* circles Desktop*/}
            <div className='md:flex md:flex-col lg:flex-row hidden flex-wrap gap-9 relative'>
                {otherElements.map((item) => (
                    <div key={item.id} className="flex flex-col items-center gap-6 transition-all duration-300 ease-in-out">
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

                        {/* POP UPs - desktop*/}
                        {isOpen === item.id && (
                            <div key={item.id} className={`flex justify-center fixed bg-steel-blue-500 z-50 w-[90%] h-[80%] left-16 top-36 rounded-xl
                            ${isOpen === item.id ? 'animate-flip-up animate-once animate-duration-1000 animate-ease-in-out' : ''}
                            `}>
                                <table className="w-[90%] h-[90%] m-auto">
                                    <thead className="w-full border border-collapse border-gray-400">
                                        <tr className="bg-steel-blue-400 ">
                                            <th className=" border">Día</th>
                                            <th className="border">Horario</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {item.horario.map((horario, index) => (
                                            <tr>
                                                <th className="border">{horario.dia}</th>
                                                <th className="border">
                                                    {horario.hora}
                                                </th>
                                            </tr>


                                        ))}
                                    </tbody>


                                </table>


                                <button className="absolute right-4 top-4" onClick={() => setIsOpen(null)}><Cross /></button>
                            </div>
                        )}

                    </div>

                ))}

                {/* Other activities - link for other page */}

                {otrasActividades && (
                    <div className="flex flex-col items-center gap-6">
                        <a href="/otras-actividades" className="flex flex-wrap w-[300px] h-[300px] xl:w-[390px] xl:h-[390px] rounded-[999px] relative overflow-hidden
                        shadow-[8px_10px_17px_#cccccc]">
                            <img
                                className="rounded-[999px] w-full h-full border-[3px]"
                                src={otrasActividades.url}
                                alt={otrasActividades.alt}
                            />
                            <span className="flex justify-center items-center pb-72 lg:pb-48 md:pb-48 md:text-3xl xl:text-4xl xl:h-80 w-full absolute top-[60%] h-full bg-black bg-opacity-25 text-4xl lg:text-2xl font-bold transition-all duration-300 ease-in-out hover:scale-105">
                                {otrasActividades.span}
                            </span>
                        </a>
                        <h2 className="font-bold text-3xl">{otrasActividades.titulo}</h2>
                    </div>
                )}

            </div>


            {/* Responsive */}
            <div className="md:hidden flex flex-col gap-5 ">
                {otherElementsRes.map((item) => (
                    <div key={item.id} className="flex flex-col items-center gap-7" >
                        <button onClick={() => handleClickRes(item.id)} className="flex justify-end gap-5 w-[300px] h-[300px] rounded-[999px] bg-red-700 relative overflow-hidden  shadow-[8px_10px_17px_#cccccc]">
                            <img className="rounded-[999px] w-full h-full border-[3px] flex " src={item.url} alt={item.alt} />
                            <span className="flex justify-center items-center pb-52 w-full absolute top-[60%] h-full bg-black bg-opacity-25 text-3xl font-bold">
                                {item.span}
                            </span>

                        </button >
                        <h2 className="font-bold text-2xl">{item.titulo}</h2>

                        {/* // POP Ups - responsive */}
                        {isOpenRes === item.id && (
                            <div key={item.id} className={`flex justify-center fixed bg-steel-blue-500 z-50 w-full h-full left-0 top-0 rounded-xl
                            ${isOpenRes === item.id ? 'animate-jump-in animate-once animate-ease-in-out' : ''}
                            `}>
                                <table className="w-[90%] h-[85%] m-auto">
                                    <thead className="w-full border border-collapse border-gray-400">
                                        <tr className="bg-steel-blue-400 ">
                                            <th className=" border">Día</th>
                                            <th className="border">Horario</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {item.horario.map((horario, index) => (
                                            <tr>
                                                <th className="border">{horario.dia}</th>
                                                <th className="border">
                                                    {horario.hora}
                                                </th>
                                            </tr>


                                        ))}
                                    </tbody>


                                </table>


                                <button className="absolute right-4 top-4" onClick={() => setIsOpenRes(null)}><Cross /></button>
                            </div>
                        )}


                    </div>

                ))}

                {/* Others activities - responsive */}
                {otrasActividadesRes && (
                    <div className="flex flex-col items-center gap-7" >
                        <a href="#" className="flex justify-end gap-5 w-[300px] h-[300px] rounded-[999px] bg-red-700 relative overflow-hidden  shadow-[8px_10px_17px_#cccccc]">
                            <img className="rounded-[999px] w-full h-full border-[3px] flex " src={otrasActividadesRes.url} alt={otrasActividadesRes.alt} />
                            <span className="flex justify-center items-center pb-52 w-full absolute top-[60%] h-full bg-black bg-opacity-25 text-3xl font-bold">
                                {otrasActividadesRes.span}
                            </span>

                        </a >
                        <h2 className="font-bold text-2xl">{otrasActividadesRes.titulo}</h2>
                    </div>
                )}


            </div>
        </div >
    )
}