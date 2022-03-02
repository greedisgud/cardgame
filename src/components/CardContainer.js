import React, { useEffect, useState } from "react";
import Card from "./Card";
import Beedrill from "../components/images/beedrill.png";
import Bulbasaur from "../components/images/bulbasaur.png";
import Caterpie from "../components/images/caterpie.png";
import Charmander from "../components/images/charmander.png";
import Charmeleon from "../components/images/charmeleon.png";
import Ivysaur from "../components/images/ivysaur.png";
import Venusaur from "../components/images/venusaur.png";
import Wartortle from "../components/images/wartortle.png";

function CardContainer(props) {
  const { handleGameLogic, score, highScore } = props;

  let data = [
    {
      src: Beedrill,
      title: "beedrill",
    },
    {
      src: Bulbasaur,
      title: "bulbasaur",
    },
    {
      src: Caterpie,
      title: "caterpie",
    },
    {
      src: Charmander,
      title: "charmander",
    },
    {
      src: Charmeleon,
      title: "charmeleon",
    },
    {
      src: Ivysaur,
      title: "ivysaur",
    },
    {
      src: Venusaur,
      title: "venusaur",
    },
    {
      src: Wartortle,
      title: "wartotle",
    },
  ];

  const [cards, setCards] = useState(data);

  const shuffle = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * i);

      [newCards[randomIndex], newCards[i]] = [
        newCards[i],
        newCards[randomIndex],
      ];
    }
  };

  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards);
    setCards(newCards);
  }, [score, highScore]);

  return (
    <div className="cardContainer">
      {cards.map((card) => (
        <Card card={card} key={card.title} handleGameLogic={handleGameLogic} />
      ))}
    </div>
  );
}

export default CardContainer;
