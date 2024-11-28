import { useState } from 'react';
import { ArrowRight } from './ArrowRight.jsx';
import { ArrowLeft } from './ArrowLeft.jsx';


export function CarruselDos() {
    const images = [
        {
            id: 1,
            url: '../../public/img-carrusel/Mancuerna.webp',
            title: 'Sala de Musculación donde los Hierros se Convierten en Héroes',
            subtitle: 'Aquí es donde los débiles se vuelven fuertes y los fuertes,imparables. 🔥 Prepárate para sudar, levantar y romper tus propios récords. ¡Los músculos no se hacen solos! 🏋️‍♂️💥'
        },
        {
            id: 2,
            url: '../../public/img-carrusel/boxeo.webp',
            title: 'Sala de Boxeo Donde los Guantes Hablan Más Fuerte',
            subtitle: 'Prepárate para soltar golpes, liberar estrés y sentirte como un campeón. Aquí no solo se entrena el cuerpo, ¡se fortalece la mente! 🥇🔥'

        },
        {
            id: 3,
            url: '../../public/img-carrusel/spinning.webp',
            title: 'Sala de Spinning Pedalea al Ritmo del Éxito',
            subtitle: 'Prepárate para una montaña rusa de energía y adrenalina. Subimos, bajamos y lo damos todo al ritmo de la música. ¡Vamos a quemar calorías como si no hubiera mañana! 🔥💦'

        },
        {
            id: 4,
            url: '../../public/img-carrusel/Zumba.webp',
            title: 'Clase de Zumba Bailando se Quema Mejor',
            subtitle: 'Siente el ritmo, mueve el cuerpo y olvídate del estrés. ¡Aquí se viene a sudar, a reír y a quemar calorías al son de los mejores hits! 🕺💃'

        }
    ];

    const [imgActual, changeIMG] = useState(0);
    const [direction, setDirection] = useState('');
    const [letters, setLetters] = useState(false)


    console.log(imgActual)

    const nextIMG = () => {
        changeIMG(imgActual + 1);
        if (imgActual === images.length - 1) {
            changeIMG(0);
        };
        setDirection('');
        setTimeout(() => setDirection('right'), 0);

        setLetters(!letters)

    };

    const prevIMG = () => {
        changeIMG(imgActual - 1);
        if (imgActual === 0) {
            changeIMG(images.length - 1);
        };
        setDirection('');
        setTimeout(() => setDirection('right'), 0);
        setLetters(!letters)
    };

    return (
        <div className={`w-full h-full relative overflow-hidden
        
        `}>
            <img
                className={`w-full h-full md:object-cover scale-125
                    ${direction === 'right' ? 'animate-fade-left animate-once animate-duration-1000 animate-ease-in-out' : ''}
                    ${direction === 'left' ? 'animate-fade-right animate-once animate-duration-1000 animate-ease-in-out' : ''}
                    `}
                src={images[imgActual].url}
                alt='Imagenes del carrusel'
            />

            <div className={`absolute md:top-1/2 md:left-40 md:w-1/3 md:h-1/3 top-0 w-full h-full text-text-main flex flex-col justify-between py-2 md:gap-2 
             ${letters ? 'md:translate-x-full animate-fade animate-once animate-duration-1000 animate-ease-in-out' : 'translate-x-0  animate-fade animate-once animate-duration-1000 animate-ease-in-out'}
                
                `}>
                <h1 className='md:text-3xl md:text-wrap md:text-left text-center font-bold text-2xl px-2'>
                    {images[imgActual].title}
                </h1>

                <p className='md:text-left md:text-2xl md:text-wrap text-center text-lg px-2'>{images[imgActual].subtitle}</p>
            </div>
            <button
                className='absolute top-1/2 right-5 text-steel-blue-400 hover:text-steel-blue-950 transition-all ease-in-out duration-300 '
                onClick={nextIMG}>
                <ArrowRight />
            </button>
            <button
                className='absolute top-1/2 left-5 text-steel-blue-400 hover:text-steel-blue-950 transition-all ease-in-out duration-300 '
                onClick={prevIMG}>
                <ArrowLeft />
            </button>
        </div>
    )
}