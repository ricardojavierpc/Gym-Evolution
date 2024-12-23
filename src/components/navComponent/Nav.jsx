import { useState } from "react";
import { Burger } from "./Burger.jsx";
import { Cross } from "./Cross.jsx";
import { NavDesktop } from "./NavDesktop.jsx";
import { NavResponsive } from "./NavResponsive.jsx";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center z-50">
            {/* Menú de escritorio */}
            <NavDesktop />

            {/* Botón de hamburguesa */}
            {!isOpen && <Burger toggleMenu={toggleMenu} />}

            {/* Menú móvil */}
            <NavResponsive
                isOpen={isOpen}
                toggleMenu={toggleMenu}
            />
        </nav>
    );
}
