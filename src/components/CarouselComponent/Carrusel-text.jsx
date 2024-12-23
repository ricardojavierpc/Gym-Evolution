export function CarruselText({ imgActualtitle, imgActualsubtitle, imgResponsiveTitle, imgResponsiveSubtitle }) {
    return (
        <>
            {/* desktop messages */}
            <div className={`md:absolute md:top-1/2 md:left-0 top-0 w-full h-[250px] text-text-main
                         flex flex-col items-center justify-center py-2 md:gap-9 text-center`}>
                <h1 className='md:text-3xl md:text-wrap text-center font-bold text-2xl px-2 text-[#F8F9FA] '>
                    {imgActualtitle?.title}
                </h1>
                <p className='md:text-left md:text-2xl md:text-wrap text-lg px-2 whitespace-pre-wrap text-center text-[#DEE2E6] '>{imgActualsubtitle?.subtitle}</p>

            </div>

            {/* Responsive messages */}
            <div className={`md:hidden absolute top-1/2 left-0 w-full h-[250px] text-text-main
                 flex flex-col items-center justify-center py-2 gap-5 text-center`}>
                <h1 className='text-center font-bold text-2xl px-2 text-[#F8F9FA] '>
                    {imgActualtitle?.title}
                </h1>
                <p className='text-wrap text-lg px-2 whitespace-pre-wrap text-center text-[#DEE2E6] '>
                    {imgActualsubtitle?.subtitle}
                </p>

            </div>
        </>


    )
}