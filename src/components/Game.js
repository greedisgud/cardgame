import React, { useState } from "react";
import CardContainer from "./CardContainer";

function Game() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardsArray, addCard] = useState([]);

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleHighScore = () => {
    setHighScore(score);
  };

  const handleCard = (cardName) => {
    addCard((prevArr) => [...cardsArray, cardName]);
  };

  const reset = () => {
    setScore(0);
    addCard([]);
  };

  const handleGameLogic = (cardName) => {
    if (!cardsArray.includes(cardName)) {
      handleCard(cardName);
      handleScore();
    } else {
      handleHighScore();
      reset();
    }
  };

  return (
    <div className="gameplay">
      <h2>
        <span>
          Score : {score} High Score : {highScore}
        </span>
      </h2>
      <CardContainer
        handleGameLogic={handleGameLogic}
        score={score}
        highScore={highScore}
      />
    </div>
  );
}

export default Game;
