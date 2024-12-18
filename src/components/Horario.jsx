import { useState } from "react";
import { CrossT } from "./Crosstable.jsx";

export function Horario() {
    const infos = [
        {
            id: 1,
            url: "/img-horario/musculacion-desktop.webp",
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
            url: "/img-horario/boxeo-desktop.webp",
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
            url: "/img-horario/otrasActividades-desktop.webp",
            alt: "imagen de otras actividades",
            titulo: "Otras actividades",
            span: "ver más",
            urlEnlace: "#"
        }

    ];

    const infosResponsive = [
        {
            id: 1,
            url: "/img-horario/musculacion-responsive.webp",
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
            url: "/img-horario/boxeo-responsive.webp",
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
            url: "/img-horario/otrasActividades-responsive.webp",
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
        <div className="w-full h-full  text-white pt-20 flex flex-col items-center ">
            <h2 className="md:text-5xl text-2xl font-bold md:mb-24 mb-9 text-[#2160A8]">Encuentra tu mejor momento</h2>

            {/* circles Desktop*/}
            <div className='md:flex md:flex-col lg:flex-row hidden flex-wrap gap-9 relative'>
                {otherElements.map((item) => (
                    <div key={item.id} className="flex flex-col items-center gap-6 transition-all duration-300 ease-in-out">
                        <button onClick={() => handleClick(item.id)}
                            className="flex flex-wrap w-[300px] h-[300px] xl:w-[390px] xl:h-[390px] rounded-[999px] relative overflow-hidden
                        shadow-2xl shadow-slate-700">

                            <img className="rounded-[999px] w-full h-full border-[3px]"
                                src={item.url}
                                alt={item.alt}
                            />

                            <span className="flex justify-center items-center pb-72 lg:pb-48 md:pb-48 md:text-3xl xl:text-4xl xl:h-80 w-full absolute top-[60%] h-full
                             bg-black bg-opacity-25 text-4xl lg:text-2xl font-bold transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#F25C05]">
                                {item.span}
                            </span>
                        </button>

                        <h3 className="font-bold text-3xl text-[#2160A8]">{item.titulo}</h3>

                        {/* POP UPs - desktop*/}
                        {isOpen === item.id && (
                            <div key={item.id} className={`flex justify-center fixed bg-[#FFFF] z-50 w-[90%] h-[80%] left-16 top-36 rounded-xl
                            ${isOpen === item.id ? 'animate-flip-up animate-once animate-duration-1000 animate-ease-in-out' : ''}
                            `}>
                                <table className="w-[90%] h-[90%] m-auto">
                                    <thead className="w-full border border-collapse bg-[#2160A8]">
                                        <tr className="text-[#F4F8FC]">
                                            <th className=" border">Día</th>
                                            <th className="border">Horario</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {item.horario.map((horario, index) => (
                                            <tr className="bg-[#F4F8FC] text-[#2D2D2D]">
                                                <th className="border border-[#D1D1D1]">{horario.dia}</th>
                                                <th className="border border-[#D1D1D1]">
                                                    {horario.hora}
                                                </th>
                                            </tr>


                                        ))}
                                    </tbody>


                                </table>


                                <button className="absolute right-4 top-4" onClick={() => setIsOpen(null)}><CrossT /></button>
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
                            <span className="flex justify-center items-center pb-72 lg:pb-48 md:pb-48 md:text-3xl xl:text-4xl xl:h-80 w-full absolute top-[60%] 
                            h-full bg-black bg-opacity-25 text-4xl lg:text-2xl font-bold transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#F25C05]">
                                {otrasActividades.span}
                            </span>
                        </a>
                        <h3 className="font-bold text-3xl text-[#2160A8]">{otrasActividades.titulo}</h3>
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
                        <h3 className="font-bold text-2xl">{item.titulo}</h3>

                        {/* // POP Ups - responsive */}
                        {isOpenRes === item.id && (
                            <div key={item.id} className={`flex justify-center fixed bg-[#FFFF] z-50 w-full h-full left-0 top-0 rounded-xl
                            ${isOpenRes === item.id ? 'animate-flip-up animate-once animate-ease-in-out' : ''}
                            `}>
                                <table className="w-[90%] h-[85%] m-auto">
                                    <thead className="w-full border border-collapse bg-[#2160A8]">
                                        <tr className="text-[#F4F8FC]">
                                            <th className=" border">Día</th>
                                            <th className="border">Horario</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {item.horario.map((horario, index) => (
                                            <tr className="bg-[#F4F8FC] text-[#2D2D2D]">
                                                <th className="border border-[#D1D1D1]">{horario.dia}</th>
                                                <th className="border border-[#D1D1D1]">
                                                    {horario.hora}
                                                </th>
                                            </tr>


                                        ))}
                                    </tbody>


                                </table>


                                <button className="absolute right-4 top-4" onClick={() => setIsOpenRes(null)}><CrossT /></button>
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
                        <h3 className="font-bold text-2xl">{otrasActividadesRes.titulo}</h3>
                    </div>
                )}


            </div>
        </div >
    )
}