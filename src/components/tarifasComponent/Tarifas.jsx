
import { useState, useEffect } from "react"
import React from "react";

export function TarifasComponent() {
    const infoCards = [
        {
            id: 1,
            label: "Estandar",
            price: "41$",
            object: ["Sala de musculación", "Zumba", "Spinning"]
        },
        {
            id: 2,
            label: "Trimestral",
            price: "107$",
            object: ["Sala de musculación", "Zumba", "Spinning"]

        },
        {
            id: 3,
            label: "Anual",
            price: "351$",
            object: ["Sala de musculación", "Zumba", "Spinning"]
        },

        { 
            id: 4,
            label: "Estandar Boxeo",
            price: "30$",
            object: ["Boxeo", "MMA", "Karate"]

        }
        ,

        { 
            id: 5,
            label: "Judo junior",
            price: "30$",
            object: ["Judo", "Karate"]

        }
    ];

    const [flippedCards, setFlippedCards] = useState([]);

    const flipCard = (id) => {
        setFlippedCards((prev) => prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
        )
    }

    return (
        <div className="w-full h-full flex flex-col  items-center ">
            {/* title Section */}
            <h1 className="flex justify-center items-center w-full text-[#2160A8] text-5xl font-bold mt-10">Tarifas</h1>

            {/* Cards */}
            <div className="flex flex-wrap md:flex-row flex-col w-full gap-5 justify-center text-4xl font-bold items-center mt-11">
                {/* frontcard */}
                {infoCards.map((card) => (
                    <div key={card.id} className={`h-[500px] sm:w-[400px] w-80 md:mx-10 flex-grow rounded-2xl flex justify-center items-center relative overflow-hidden cursor-pointer transition-all duration-300 ease-in-out
                        ${flippedCards.includes(card.id) ? " bg-[#F25C05] shadow-xl shadow-slate-900 " : "bg-[#2160A8] text-[#fafafa]"}
                        `}
                        onClick={() => flipCard(card.id)}
                    >
                        {!flippedCards.includes(card.id) && (
                            <div className="flex justify-center flex-col items-center">
                                <h2 className="h-60 flex items-center">{card.label}</h2>

                                <button className="text-sm text-[#fafafa]">Pulsa para más información</button>
                            </div>
                        )}
                        {/* Reverse card */}
                        {flippedCards.includes(card.id) && (
                            <div className="w-full h-full text-white flex flex-col items-center px-3 py-5 shadow-2xl shadow-black">
                                <h2 className="flex-grow items-center text-center text-5xl mt-24 text-[#2D2D2D]">
                                    Precio <span className="text-[#2D2D2D]">{card.price}</span>
                                </h2>
                                <nav className="flex flex-grow h-52">
                                    <ul className="flex flex-col justify-around items-center text-2xl text-[#2D2D2D]">
                                        {card.object.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        )}
                    </div>
                ))}

            </div>


        </div>

    )

};