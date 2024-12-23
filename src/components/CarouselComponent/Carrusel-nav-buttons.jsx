import { ArrowLeft } from "../navComponent/ArrowLeft.jsx"
import { ArrowRight } from "../navComponent/ArrowRight.jsx"

export function CarruselNavButtons({ nextIMG, prevIMG, nextIMGresponsive, prevIMGresponsive }) {
    return (
        <>
            {/* Buttons Desktop */}
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
        </>
    )
}