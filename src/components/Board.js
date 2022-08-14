import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Cell from "./Cell";

const Board = () => {
  const colorsArr = [
    { id: uniqid(), name: "blue", matched: false },
    { id: uniqid(), name: "red", matched: false },
    { id: uniqid(), name: "yellow", matched: false },
    { id: uniqid(), name: "green", matched: false },
    { id: uniqid(), name: "brown", matched: false },
    { id: uniqid(), name: "gray", matched: false },
    { id: uniqid(), name: "lightgreen", matched: false },
    { id: uniqid(), name: "cadetblue", matched: false },
    { id: uniqid(), name: "blue", matched: false },
    { id: uniqid(), name: "red", matched: false },
    { id: uniqid(), name: "yellow", matched: false },
    { id: uniqid(), name: "green", matched: false },
    { id: uniqid(), name: "brown", matched: false },
    { id: uniqid(), name: "gray", matched: false },
    { id: uniqid(), name: "lightgreen", matched: false },
    { id: uniqid(), name: "cadetblue", matched: false },
  ];

  const [colorss, setColorss] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [turns, setTurns] = useState(0);
  const [disabled, setDisabled] = useState(false);

  function shuffle() {
    let array = colorsArr;
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
    return array;
  }

  function handleClick() {
    setColorss(shuffle);
  }

  const handleChoice = (color) => {
    console.log(color);
    choiceOne ? setChoiceTwo(color) : setChoiceOne(color);
  };

  useEffect(() => {
    setColorss(shuffle);
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.name === choiceTwo.name) {
        setColorss((prevColors) => {
          return prevColors.map((color) => {
            if (color.name === choiceOne.name) {
              return { ...color, matched: true };
            } else {
              return color;
            }
          });
        });
        choiceOne.matched = choiceTwo.matched = true;
        setTimeout(resetTurn, 1000);
      } else {
        setTimeout(resetTurn, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <>
      <div className="game">
        <button onClick={handleClick}>new game</button>
        <div className="container">
          {colorss.map((color, index) => {
            return (
              <Cell
                key={color.id}
                color={color}
                handleChoice={handleChoice}
                flipped={
                  color === choiceOne || color === choiceTwo || color.matched
                }
                disabled={disabled}
              />
            );
          })}
        </div>
        <p>turns: {turns}</p>
      </div>
    </>
  );
};

export default Board;
