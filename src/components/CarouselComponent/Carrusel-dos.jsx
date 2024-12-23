import { useState } from 'react';
import { images, imgResponsive } from './const-carousel/const.js';
import { CarruselImg } from './Carrusel-img.jsx';
import { CarruselNavButtons } from './Carrusel-nav-buttons.jsx';
import { CarruselText } from './Carrusel-text.jsx';

export function CarruselDos() {
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
            <CarruselImg
                direction={direction}
                imgActual={images[imgActual]}
                imgResponsive={imgResponsive[imgActualR]}
                imgActualR={imgActualR}
            />

            {/* desktop messages */}
            <CarruselText
                imgActualtitle={images[imgActual]}
                imgActualsubtitle={images[imgActual]}
                imgResponsiveTitle={imgResponsive[imgActualR]}
                imgResponsiveSubtitle={imgResponsive[imgActualR]}
            />

            {/* buttons Desktop */}
            <CarruselNavButtons
                nextIMG={nextIMG}
                prevIMG={prevIMG}
                nextIMGresponsive={nextIMGresponsive}
                prevIMGresponsive={prevIMGresponsive}
            />
        </div>
    )
}