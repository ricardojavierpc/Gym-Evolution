export function Cards({ card, flipCard, flippedCards}) {
    return (
        <div className={`h-[500px] sm:w-[400px] w-80 md:mx-10 flex-grow rounded-2xl 
            flex justify-center items-center relative overflow-hidden cursor-pointer transition-all duration-300 ease-in-out 
            ${flippedCards.includes(card.id) ? " bg-[#6C757D]" : "bg-[#ADB5BD] text-[#F8F9FA]"}
            `}
            onClick={() => flipCard(card.id)}
        >

            {/* Front card */}
            {!flippedCards.includes(card.id) && (
                <div className="flex justify-center flex-col items-center">
                    <h2 className="h-60 flex items-center">{card.label}</h2>

                    <button className="text-sm text-[#fafafa]">Pulsa para más información</button>
                </div>
            )}

            {/* Reverse card */}
            {flippedCards.includes(card.id) && (
                <div className="w-full h-full text-white flex flex-col items-center px-3 py-5 shadow-2xl shadow-black">
                    <h2 className="flex-grow items-center text-center text-5xl mt-24 text-[#DEE2E6]">
                        Precio <span className="text-[#DEE2E6]">{card.price}</span>
                    </h2>
                    <nav className="flex flex-grow h-52">
                        <ul className="flex flex-col justify-around items-center text-2xl text-[#CED4DA]">
                            {card.object.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}

        </div>
    )
}