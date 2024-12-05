import { useState, useEffect } from "react"

export function TarifasComponent() {

    const [isHover, setIshover] = useState(false);

    setInterval(() => {
        setIshover(!isHover);
    }, 3000)


    return (
        <div className="w-full h-full flex flex-col  items-center bg-nav">
            {/* title Section */}
            <h1 className="flex flex-grow justify-center items-center w-full text-text-main text-5xl font-bold">Tarifas</h1>

            {/* Cards */}
            <div className="flex flex-grow w-full gap-12 justify-center mt-10 text-4xl font-bold ">
                {/* frontcard */}
                <div className='h-[526px] w-[400px] bg-steel-blue-400 rounded-2xl flex justify-center items-center text-[#9E6C54] relative  overflow-hidden'
                >
                    Estandar
                    {/* Reflejo */}
                    <div
                        className={`h-[700px] bg-white opacity-20 w-16 rotate-45 absolute -top-[600px] transition-all  duration-500 ease-in-out ${isHover ? "translate-y-[1100px]" : ""}`}
                    ></div>
                </div>


                <div className="h-[526px] w-[400px] bg-steel-blue-400 rounded-2xl flex justify-center items-center text-[#E3E4E5] relative overflow-hidden">
                    Trimestral

                    {/* Reflejo */}
                    <div
                        className={`h-[700px] bg-white opacity-20 w-16 rotate-45 absolute -top-[600px] transition-all  duration-500 ease-in-out ${isHover ? "translate-y-[1100px]" : ""} `}
                    ></div>
                </div >

                <div className="h-[526px] w-[400px] bg-steel-blue-400 rounded-2xl flex justify-center items-center text-[#FFD700] relative overflow-hidden">
                    Anual

                    {/* Reflejo */}
                    <div
                        className={`h-[700px] bg-white opacity-20 w-16 rotate-45 absolute -top-[600px] transition-all  duration-500 ease-in-out ${isHover ? "translate-y-[1100px]" : ""} `}
                    ></div>
                </div>

            </div>
        </div >
    )

};