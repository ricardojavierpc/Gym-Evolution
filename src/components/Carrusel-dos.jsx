import { useState } from 'react';
import { ArrowRight } from './ArrowRight.jsx';
import { ArrowLeft } from './ArrowLeft.jsx';


export function CarruselDos() {
    const images = [
        {
            id: 1,
            url: '../../public/img-carrusel/prensa.webp',
            title: 'Sala de Musculación',
            subtitle: 'Aquí es donde los débiles se vuelven fuertes y los fuertes,imparables. 🔥 Prepárate para sudar, levantar y romper tus propios récords. ¡Los músculos no se hacen solos! 🏋️‍♂️💥'
        },
        {
            id: 2,
            url: '../../public/img-carrusel/spinning.webp',
            title: 'Sala de Boxeo Donde los Guantes Hablan Más Fuerte',
            subtitle: 'Prepárate para soltar golpes, liberar estrés y sentirte como un campeón. Aquí no solo se entrena el cuerpo, ¡se fortalece la mente! 🥇🔥'

        },
        {
            id: 3,
            url: '../../public/img-carrusel/boxeo.webp',
            title: 'Sala de Spinning Pedalea al Ritmo del Éxito',
            subtitle: 'Prepárate para una montaña rusa de energía y adrenalina. Subimos, bajamos y lo damos todo al ritmo de la música. ¡Vamos a quemar calorías como si no hubiera mañana! 🔥💦'

        },
        {
            id: 4,
            url: '../../public/img-carrusel/zumba.webp',
            title: 'Clase de Zumba Bailando se Quema Mejor',
            subtitle: 'Siente el ritmo, mueve el cuerpo y olvídate del estrés. ¡Aquí se viene a sudar, a reír y a quemar calorías al son de los mejores hits! 🕺💃'

        }
    ];

    const imgResponsive = [
        {

            url: '../../public/img-carrusel/prensa_responsive.webp',
            title: 'Sala de Boxeo Donde los Guantes Hablan Más Fuerte',
            subtitle: 'Prepárate para soltar golpes, liberar estrés y sentirte como un campeón. Aquí no solo se entrena el cuerpo, ¡se fortalece la mente! 🥇🔥'

        },
        {
            url: '../../public/img-carrusel/spinning_responsive.webp',
            title: 'Sala de Boxeo Donde los Guantes Hablan Más Fuerte',
            subtitle: 'Prepárate para soltar golpes, liberar estrés y sentirte como un campeón. Aquí no solo se entrena el cuerpo, ¡se fortalece la mente! 🥇🔥'
        },
        {
            url: '../../public/img-carrusel/boxeo_responsive.webp',
            title: 'Sala de Boxeo Donde los Guantes Hablan Más Fuerte',
            subtitle: 'Prepárate para soltar golpes, liberar estrés y sentirte como un campeón. Aquí no solo se entrena el cuerpo, ¡se fortalece la mente! 🥇🔥'
        },
        {
            url: '../../public/img-carrusel/zumba_responsive.webp',
            title: 'Sala de Boxeo Donde los Guantes Hablan Más Fuerte',
            subtitle: 'Prepárate para soltar golpes, liberar estrés y sentirte como un campeón. Aquí no solo se entrena el cuerpo, ¡se fortalece la mente! 🥇🔥'
        }

    ]

    const [imgActual, changeIMG] = useState(0);
    const [direction, setDirection] = useState('');

    const [imgActualR, changeIMGR] = useState(0)

    const nextIMG = () => {
        changeIMG(imgActual + 1);
        if (imgActual === images.length - 1) {
            changeIMG(0);
        };

        setDirection('');
        setTimeout(() => setDirection('right'), 0);


    };

    const prevIMG = () => {
        changeIMG(imgActual - 1);
        if (imgActual === 0) {
            changeIMG(images.length - 1);
        };
        setDirection('');
        setTimeout(() => setDirection('right'), 0);
    };

    const nextIMGresponsive = () => {
        changeIMGR(imgActualR + 1)
        if (imgActualR === imgResponsive.length - 1) {
            changeIMGR(0);
        };
        setDirection('');
        setTimeout(() => setDirection('right'), 0);
    };

    const prevIMGresponsive = () => {
        changeIMGR(imgActualR - 1)
        if (imgActualR === 0) {
            changeIMGR(imgResponsive.length - 1);
        };
        setDirection('');
        setTimeout(() => setDirection('right'), 0);
    };

    return (
        <div className={`w-full h-[500px] relative overflow-hidden
        
        `}>
            <img
                className={`hidden md:block w-full h-full object-cover 
                    ${direction === 'right' ? 'animate-fade-left animate-once animate-duration-1000 animate-ease-in-out' : ''}
                    ${direction === 'left' ? 'animate-fade-right animate-once animate-duration-1000 animate-ease-in-out' : ''}
                    `}
                // Asignar un estado para cambiar la img cuando sea responsive
                src={images[imgActual]?.url}
                alt='Imagenes del carrusel'
            />

            <img
                className={`block md:hidden w-full h-full object-cover  
                    ${direction === 'right' ? 'animate-fade-left animate-once animate-duration-1000 animate-ease-in-out' : ''}
                    ${direction === 'left' ? 'animate-fade-right animate-once animate-duration-1000 animate-ease-in-out' : ''}
                    `}
                // Asignar un estado para cambiar la img cuando sea responsive
                src={imgResponsive[imgActualR]?.url}
                alt='Imagenes del carrusel'
            />

            <div className={`bg-red-700 absolute md:top-1/2 md:left-0 md:w-full top-0 w-full md:h-full text-text-main
                 flex flex-col justify-between py-2 md:gap-2`}>
                <h1 className='md:text-3xl md:text-wrap md:text-left text-center font-bold text-2xl px-2'>
                    {images[imgActual].title}
                </h1>

                {/* <p className='md:text-left md:text-2xl md:text-wrap text-center text-lg px-2'>{images[imgActual].subtitle}</p> */}
            </div>

            {/* buttons Desktop */}
            <button
                className='md:absolute top-1/2 right-5 text-steel-blue-400 hover:text-steel-blue-950 transition-all ease-in-out duration-300 '
                onClick={nextIMG}>
                <ArrowRight />
            </button>
            <button
                className='md:absolute top-1/2 left-5 text-steel-blue-400 hover:text-steel-blue-950 transition-all ease-in-out duration-300 '
                onClick={prevIMG}>
                <ArrowLeft />
            </button>

            {/* buttons responsive */}
            <button
                className='md:hidden absolute top-1/2 right-5 text-steel-blue-400 hover:text-steel-blue-950 transition-all ease-in-out duration-300 '
                onClick={nextIMGresponsive}>
                <ArrowRight />
            </button>
            <button
                className='md:hidden absolute top-1/2 left-5 text-steel-blue-400 hover:text-steel-blue-950 transition-all ease-in-out duration-300 '
                onClick={prevIMGresponsive}>
                <ArrowLeft />
            </button>
        </div>
    )
}