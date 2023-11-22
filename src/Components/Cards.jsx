import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';
import "../Styles/Cardstyles.scss";
import data from '../data/data.json';
import Card from "./Card";
import {IconButton} from "@mui/material";
import {Logout, ThumbDown, ThumbUp} from "@mui/icons-material";

ChartJS.register(ArcElement, Legend);

export default function Cards({ setIsLogged }) {
    const [flashCardData, setFlashCardData] = useState([]);
    const [current, setCurrent] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const checkDuplication = (arr) => {
        const randomizerFunction = Math.floor(Math.random() * data.length);
        return randomizerFunction;
    };

    useEffect(() => {
        const cardsToDisplay = [];
        for (let i = 0; i < 10; i++) {
            const randomizer = checkDuplication(cardsToDisplay);
            const cardNumber = {
                index: randomizer,
                ...data[randomizer],
            };
            cardsToDisplay.push(cardNumber);
        }
        setFlashCardData(cardsToDisplay);
    }, []);

    useEffect(() => {
        console.log(flashCardData);
    }, [flashCardData]);

    // navigation in cards
    function previousCard() {
        if (current > 0) {
            setCurrent(current - 1);
            setShowResult(false);
        }
    }

    function nextCard() {
        if (current < flashCardData.length - 1) {
            setCurrent(current + 1);
            setShowResult(false);
        } else {
            setShowResult(true);
        }
    }

    // handle thumbs up (👍) button click
    function handleThumbUpClick() {
        setCorrectCount(correctCount + 1);
        nextCard();
    }

    // handle thumbs down (👎) button click
    function handleThumbDownClick() {
        setIncorrectCount(incorrectCount + 1);
        nextCard();
    }

    // handle restart button click
    function handleRestartClick() {
        const cardsToDisplay = [];
        for (let i = 0; i < 10; i++) {
            const randomizer = checkDuplication(cardsToDisplay);
            const cardNumber = {
                index: randomizer,
                ...data[randomizer],
            };
            cardsToDisplay.push(cardNumber);
        }
        setFlashCardData(cardsToDisplay);
        setCurrent(0);
        setCorrectCount(0);
        setIncorrectCount(0);
        setShowResult(false);
    }

    function logOut() {
        localStorage.setItem('isLogged', 'false');
        setIsLogged(false);
    }

    const correctPercentage = (correctCount / flashCardData.length) * 100;
    const incorrectPercentage = (incorrectCount / flashCardData.length) * 100;
    const skippedPercentage = ( flashCardData.length - (correctCount + incorrectCount)) / flashCardData.length * 100;

    return (
        <div className="container">
            <IconButton
                variant="outlined"
                color="error"
                className="logoutbtn"
                onClick={logOut}
            >
                <Logout />
            </IconButton>

            {/* number of cards */}
            {flashCardData && flashCardData.length > 0 && !showResult ? (
                <div className="cardNumber">
                    Card {current + 1} of {flashCardData.length}
                </div>
            ) : (
                ""
            )}
            {/* /number of cards */}

            {/* render cards */}
            {flashCardData && flashCardData.length > 0 && current < flashCardData.length && !showResult ? (
                <Card card={flashCardData[current]} key={flashCardData[current].id} />
            ) : null}
            {/* /render cards */}

            {/* render thumbs up (👍) and thumbs down (👎) buttons */}
            {flashCardData && flashCardData.length > 0 && current < flashCardData.length && !showResult && (
                <div className="checkbtns">
                    <Button
                        className="percentbtn"
                        variant="contained"
                        color="error"
                        onClick={handleThumbDownClick}
                    >
                            <ThumbDown/>
                    </Button>
                    <Button
                        className="percentbtn"
                        variant="contained"
                        color="success"
                        onClick={handleThumbUpClick}
                    >
                            <ThumbUp/>
                    </Button>
                </div>
            )}

            {/* render result after the last card */}
            {showResult && (
                <div className="result">
                    <Pie
                        data={{
                        labels: [`${correctPercentage.toFixed(2)}% Correct`, `${incorrectPercentage.toFixed(2)}% Incorrect`, `${skippedPercentage.toFixed(2)}% Skipped`],
                        datasets: [{
                            data: [correctCount, incorrectCount, flashCardData.length - (correctCount + incorrectCount)],
                            backgroundColor: ['green', 'red', 'grey'],
                        }],
                    }}
                    />
                    <Button
                        className="restartbtn"
                        variant="contained"
                        color="primary"
                        onClick={handleRestartClick}
                    >
                        Restart
                    </Button>
                </div>
            )}

            {/* render nav buttons */}
            <div className="nav">
                {current > 0 && current < flashCardData.length && !showResult ? (
                    <button onClick={previousCard}>Previous card</button>
                ) : (
                    <button className="disabled" disabled>
                        Previous card
                    </button>
                )}
                {current < flashCardData.length - 1 && !showResult ? (
                    <button onClick={nextCard}>Next card</button>
                ) : (
                    <button className="disabled" disabled>
                        Next card
                    </button>
                )}
            </div>
            {/* /render nav buttons */}
        </div>
    );
}
