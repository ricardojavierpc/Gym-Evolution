export function CarruselImg({ direction, imgActual, imgResponsive, imgActualR }) {
    return (
        <>
            {/* IMG DESKTOP */}
            <img
                className={`hidden md:block w-full h-full object-cover 
                            ${direction === 'right' ? 'animate-fade-left animate-once animate-duration-1000 animate-ease-in-out' : ''}
                            ${direction === 'left' ? 'animate-fade-right animate-once animate-duration-1000 animate-ease-in-out' : ''}
                            `}
                // Asignar un estado para cambiar la img cuando sea responsive
                src={imgActual?.url}
                alt='Imagenes del carrusel'
            />

            {/* IMG RESPONSIVE */}
            <img
                className={`block md:hidden w-full h-full object-cover  
                            ${direction === 'right' ? 'animate-fade-left animate-once animate-duration-1000 animate-ease-in-out' : ''}
                            ${direction === 'left' ? 'animate-fade-right animate-once animate-duration-1000 animate-ease-in-out' : ''}
                            `}
                // Asignar un estado para cambiar la img cuando sea responsive
                src={imgResponsive?.url}
                alt='Imagenes del carrusel'
            />
        </>
    )
}