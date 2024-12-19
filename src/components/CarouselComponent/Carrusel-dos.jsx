import { useState } from 'react';
import { ArrowRight } from '../navComponent/ArrowRight.jsx';
import { ArrowLeft } from '../navComponent/ArrowLeft.jsx';


export function CarruselDos() {
    const images = [
        {
            id: 1,
            url: '/img-carrusel/prensa.webp',
            title: 'Sala de Musculación',
            subtitle: 'El rincón perfecto para convertir calorías en fuerza.\n       ¡No garantizamos superpoderes, pero casi!'
        },
        {
            id: 2,
            url: '/img-carrusel/spinning.webp',
            title: 'Sala de spinning',
            subtitle: 'Donde las ruedas giran y las calorías desaparecen.\n                       ¡Siente la adrenalina!'

        },
        {
            id: 3,
            url: '/img-carrusel/boxeo.webp',
            title: 'Sala de boxeo',
            subtitle: 'Donde cada golpe libera estrés y cada round te acerca más a la victoria'

        },
        {
            id: 4,
            url: '/img-carrusel/zumba.webp',
            title: 'Sala de zumba',
            subtitle: '  Aquí no solo se suda, también se sonríe. \n¡Zumba, diversión y energía en cada paso!'

        }
    ];

    const imgResponsive = [
        {

            url: '/img-carrusel/prensa_responsive.webp',
            title: 'Sala de Musculación',
            subtitle: 'El rincón perfecto para convertir calorías en fuerza.\n ¡No garantizamos superpoderes, pero casi!'

        },
        {
            url: '/img-carrusel/spinning_responsive.webp',
            title: 'Sala de spinning',
            subtitle: 'Donde las ruedas giran y las calorías desaparecen.\n¡Siente la adrenalina!'
        },
        {
            url: '/img-carrusel/boxeo_responsive.webp',
            title: 'Sala de boxeo',
            subtitle: 'Donde cada golpe libera estrés y cada round te acerca más a la victoria'
        },
        {
            url: '/img-carrusel/zumba_responsive.webp',
            title: 'Sala de zumba',
            subtitle: '  Aquí no solo se suda, también se sonríe. \n¡Zumba, diversión y energía en cada paso!'
        }

    ]

    const [imgActual, changeIMG] = useState(0);
    const [direction, setDirection] = useState('');

    const [imgActualR, changeIMGR] = useState(0);



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
        setTimeout(() => setDirection('left'), 0);
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
        setTimeout(() => setDirection('left'), 0);
    };


    return (
        <div className={`w-full h-[500px] relative overflow-hidden
        `}
        >
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

            {/* desktop messages */}

            <div className={`md:absolute md:top-1/2 md:left-0 top-0 w-full h-[250px] text-text-main
                 flex flex-col items-center justify-center py-2 md:gap-9 text-center`}>
                <h1 className='md:text-3xl md:text-wrap text-center font-bold text-2xl px-2 text-[#F8F9FA] '>
                    {images[imgActual].title}
                </h1>
                <p className='md:text-left md:text-2xl md:text-wrap text-lg px-2 whitespace-pre-wrap text-center text-[#DEE2E6] '>{images[imgActual].subtitle}</p>

            </div>

            {/* responsive messages */}
            <div className={`md:hidden absolute top-1/2 left-0 w-full h-[250px] text-text-main
                 flex flex-col items-center justify-center py-2 gap-5 text-center`}>
                <h1 className='text-center font-bold text-2xl px-2 text-[#F8F9FA] '>
                    {imgResponsive[imgActualR].title}
                </h1>
                <p className='text-wrap text-lg px-2 whitespace-pre-wrap text-center text-[#DEE2E6] '>
                    {imgResponsive[imgActualR].subtitle}
                </p>

            </div>


            {/* buttons Desktop */}
            <button
                className='md:absolute top-1/2 right-5 text-[#F8F9FA] md:hover:text-[#6C757D] transition-all ease-in-out duration-300 '
                onClick={nextIMG}>
                <ArrowRight />
            </button>
            <button
                className='md:absolute top-1/2 left-5 text-[#F8F9FA] md:hover:text-[#6C757D] transition-all ease-in-out duration-300 '
                onClick={prevIMG}>
                <ArrowLeft />
            </button>

            {/* buttons responsive */}
            <button
                className='md:hidden absolute top-1/2 right-5 text-[#F8F9FA]'
                onClick={nextIMGresponsive}>
                <ArrowRight />
            </button>
            <button
                className='md:hidden absolute top-1/2 left-5 text-[#F8F9FA]'
                onClick={prevIMGresponsive}>
                <ArrowLeft />
            </button>
        </div>
    )
}