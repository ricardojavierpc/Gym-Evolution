export function NavDesktop() {
    return (
        <ul className="text-xl gap-9 md:flex text-[#F8F9FA] hidden relative font-bold font-lato">
            <li className="hover:text-[#6C757D] transition-all duration-300 ease-in-out  text-lg"><a href="#welcome">Inicio</a></li>
            <li className="hover:text-[#6C757D] transition-all duration-300 ease-in-out  text-lg"><a href="#carrusel">Salas</a></li>
            <li className="hover:text-[#6C757D] transition-all duration-300 ease-in-out  text-lg"><a href="#tarifas">Tarifas</a></li>
            <li className="hover:text-[#6C757D] transition-all duration-300 ease-in-out  text-lg"><a href="#horario">Horario</a></li>
            <li className="hover:text-[#6C757D] transition-all duration-300 ease-in-out  text-lg"><a href="#mapa">Mapa</a></li>
            <li className="hover:text-[#6C757D] transition-all duration-300 ease-in-out  text-lg"><a href="https://wa.me/34677038873" target="_blank">Contacto</a></li>
        </ul>
    )
}