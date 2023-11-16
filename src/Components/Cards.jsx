import React, { useState, useEffect } from "react";
import "../Styles/Cardstyles.css";
import data from '../data/data.json';

import Card from "./Card";

export default function Cards() {
    const [flashCardData, setFlashCardData] = useState([]);
    const [current, setCurrent] = useState(0);

    const checkDuplication = (arr) => {
        const randomizerFunction = Math.floor(Math.random() * data.length)
        // if (arr.find(element => element.index === randomizerFunction) ) {
        //     checkDuplication(arr)
        // }
        return randomizerFunction
    }

    useEffect(() => {
        const cardsToDisplay = [];
        for (let i = 0; i < 10; i++) {
           const randomizer = checkDuplication(cardsToDisplay)
            const cardNumber = {
                index: randomizer,
                ...data[randomizer],
            }
            cardsToDisplay.push(cardNumber)
        }
        setFlashCardData(cardsToDisplay)
    }, []);

    useEffect(() => {
        console.log(flashCardData);
    }, [flashCardData])

    const cards = flashCardData.map((card) => {
        return <Card card={card} key={card.id} />;
    });

    const loading = <div className="loading">Loading flashcard content...</div>;

    // navigation in cards
    function previousCard() {
        setCurrent(current - 1);
    }
    function nextCard() {
        setCurrent(current + 1);
    }

    return (
        <div>
            {/* number of cards */}
            {flashCardData && flashCardData.length > 0 ? (
                <div className="cardNumber">
                    Card {current + 1} of {flashCardData.length}
                </div>
            ) : (
                ""
            )}
            {/* /number of cards */}

            {/* render cards */}
            {flashCardData && flashCardData.length > 0 ? cards[current] : loading}
            {/* /render cards */}

            {/* render nav buttons */}
            <div className="nav">
                {current > 0 ? (
                    <button onClick={previousCard}>Previous card</button>
                ) : (
                    <button className="disabled" disabled>
                        Previous card
                    </button>
                )}
                {current < flashCardData.length - 1 ? (
                    <button onClick={nextCard}>Next card</button>
                ) : (
                    <button className="disabled" disabled>
                        Next card
                    </button>
                )}
                {/* /render nav buttons */}
            </div>
        </div>
    );
}
