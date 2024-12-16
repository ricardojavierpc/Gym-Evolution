import { useState } from "react";
import { Burger } from "./Burger.jsx";
import { Cross } from "./Cross.jsx";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center z-50">
            {/* Menú de escritorio */}
            <ul className="text-xl gap-9 md:flex text-white hidden relative">
                <li className="hover:text-steel-blue-400 transition-all duration-300 ease-in-out"><a href="#welcome">Inicio</a></li>
                <li className="hover:text-steel-blue-400 transition-all duration-300 ease-in-out"><a href="#carrusel">Salas</a></li>
                <li className="hover:text-steel-blue-400 transition-all duration-300 ease-in-out"><a href="#tarifas">Tarifas</a></li>
                <li className="hover:text-steel-blue-400 transition-all duration-300 ease-in-out"><a href="#horario">Horario</a></li>
                <li className="hover:text-steel-blue-400 transition-all duration-300 ease-in-out"><a href="#">Contacto</a></li>
            </ul>

            {/* Botón de hamburguesa */}
            {!isOpen && <Burger toggleMenu={toggleMenu} />}


            {/* Menú móvil */}
            <div
                className={`md:hidden py-5 px-5 w-full h-dvh left-0 top-0 absolute text-3xl bg-black flex flex-col content-around gap-9
                transition-transform duration-500 ease-in-out  z-50 
                ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                {/* Botón de cierre */}
                <span className="flex w-full justify-end"><Cross toggleMenu={toggleMenu} /></span>

                {/* Contenido del menú */}
                <div className="h-full">
                    <ul className="h-full flex flex-col items-center justify-center gap-3 text-steel-blue-50">
                        <li className={`hover:text-steel-blue-400 transition-all duration-300 ease-in-out 
                            ${isOpen ? 'animate-fade-left animate-duration-200 animate-delay-300 ' : ''}`}>
                            <a href="#">
                                Inicio
                            </a>
                        </li>

                        <hr className="border-2 border-steel-blue-200 w-3/4" />

                        <li className={`hover:text-steel-blue-400 transition-all duration-300 ease-in-out 
                            ${isOpen ? 'animate-fade-left animate-duration-200 animate-delay-300 ' : ''}`}>
                            <a href="#carrusel">
                                Salas
                            </a>
                        </li>

                        <hr className="border-2 border-steel-blue-200 w-3/4" />


                        <li className={`hover:text-steel-blue-400 transition-all duration-300 ease-in-out 
                            ${isOpen ? 'animate-fade-left animate-duration-300 animate-delay-300 ' : ''}`}>
                            <a href="#tarifas">
                                Tarifas
                            </a>
                        </li>

                        <hr className="border-2 border-steel-blue-200 w-3/4" />

                        <li className={`hover:text-steel-blue-400 transition-all duration-300 ease-in-out 
                            ${isOpen ? 'animate-fade-left animate-duration-500 animate-delay-300 ' : ''}`}>
                            <a href="#horario">
                                Horario
                            </a>
                        </li>

                        <hr className="border-2 border-steel-blue-200 w-3/4" />

                        <li className={`hover:text-steel-blue-400 transition-all duration-300 ease-in-out 
                            ${isOpen ? 'animate-fade-left animate-duration-700 animate-delay-300 ' : ''}`}>
                            <a href="#">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
