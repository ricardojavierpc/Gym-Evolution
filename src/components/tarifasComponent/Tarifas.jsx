
import { useState, useEffect } from "react"
import React from "react";
import { infoCards } from "./const";
import { Cards } from "./Cards";

export function TarifasComponent() {

    const [flippedCards, setFlippedCards] = useState([]);

    const flipCard = (id) => {
        setFlippedCards((prev) => prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
        )
    }



    return (
        <div className="w-full h-full flex flex-col  items-center ">
            {/* title Section */}
            <h2 className="flex justify-center items-center w-full text-[#F8F9FA] text-5xl font-bold font-bebas mt-10">Tarifas</h2>

            {/* Cards */}
            <div className="flex flex-wrap md:flex-row flex-col w-full gap-5 justify-center text-4xl font-bold items-center mt-11">
                {/* frontcard */}
                {infoCards.map((card) => (
                    <div key={card.id} >
                        <Cards
                            card={card}
                            flippedCards={flippedCards}
                            flipCard={flipCard}
                        />

                    </div>
                ))}

            </div>


        </div>

    )

};