import { useState } from "react";
import { Burger } from "./Burger.jsx";
import { Cross } from "./Cross.jsx";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

    };


    return (
        <nav className="flex items-center" >
            <ul className="text-xl gap-9 md:flex text-white hidden relative">
                <li className="hover:text-steel-blue-400  transition-all duration-300 ease-in-out"><a href="/">Inicio</a></li>
                <li className="hover:text-steel-blue-400  transition-all duration-300 ease-in-out"><a href="/">Tarifas</a></li>
                <li className="hover:text-steel-blue-400  transition-all duration-300 ease-in-out"><a href="/">Horario</a></li>
                <li className="hover:text-steel-blue-400  transition-all duration-300 ease-in-out"><a href="/">Contacto</a></li>
                <li className="hover:text-steel-blue-400  transition-all duration-300 ease-in-out"><a href="/"></a></li>
            </ul>
            {!isOpen && <Burger toggleMenu={toggleMenu} />}
            {isOpen && (
                <div className="! md:hidden py-5 px-5 w-2/3 h-dvh left-0 top-0 absolute text-3xl bg-black flex flex-col content-around gap-9  animate-fade-right animate-duration-300 animate-ease-in-out">
                    <span className="flex w-full justify-end"><Cross toggleMenu={toggleMenu} /></span>
                    <div className="h-full">
                        <ul className="h-full flex flex-col items-center justify-center gap-3 text-steel-blue-50">
                            <li className="hover:text-steel-blue-400  transition-all duration-300 ease-in-out animate-fade-right animate-duration-100 animate-delay-200 animate-ease-in-out"><a href="/">Inicio</a></li>
                            <hr className="border-white w-full" />
                            <li className="hover:text-steel-blue-400  transition-all duration-300 ease-in-out animate-fade-right animate-duration-200 animate-delay-200 animate-ease-in-out"><a href="/">Tarifas</a></li>
                            <hr className="border-white w-full" />
                            <li className="hover:text-steel-blue-400  transition-all duration-300 ease-in-out animate-fade-right animate-duration-300 animate-delay-200 animate-ease-in-out"><a href="/">Horario</a></li>
                            <hr className="border-white w-full" />
                            <li className="hover:text-steel-blue-400  transition-all duration-300 ease-in-out animate-fade-right animate-duration-500 animate-delay-200 animate-ease-in-out "><a href="/">Contacto</a></li>
                            <hr className="border-white w-full" />
                            <li className="hover:text-steel-blue-400  transition-all duration-300 ease-in-outout"><a href="/"></a></li>
                        </ul>
                    </div>
                </div>
            )}

        </nav>
    );
};