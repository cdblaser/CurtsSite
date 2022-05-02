import React, { useState, useEffect } from "react";
import "./Rps.css";

const Rps = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [score, setScore] = useState(0);
  const [resultString, setResultString] = useState("");
  const [turnCounter, setTurnCounter] = useState(0);
  const choices = ["Rock", "Paper", "Scissors"];

  const onClick = (e) => {
    setPlayerChoice(e.target.id);
    setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);
    setTurnCounter(turnCounter + 1);
  };

  const chooseYourWeapon = ([choiceA, choiceB, choiceC]) => {
    return (
      <div>
        <button className={choiceA} id={choiceA} onClick={onClick}>
          {choiceA}
        </button>
        <button id={choiceB} onClick={onClick}>
          {choiceB}
        </button>
        <button id={choiceC} onClick={onClick}>
          {choiceC}
        </button>
      </div>
    );
  };

  const result = ([choiceA, choiceB, choiceC]) => {
    if (!playerChoice) return;

    if (computerChoice === playerChoice) {
      setResultString("You tied!");
    } else if (
      (computerChoice === choiceA && playerChoice === choiceC) ||
      (computerChoice === choiceB && playerChoice === choiceA) ||
      (computerChoice === choiceC && playerChoice === choiceB)
    ) {
      setScore(score - 1);
      setResultString("You lost!");
    } else {
      setScore(score + 1);
      setResultString("You won!");
    }
  };

  useEffect(() => {
    result(choices);
  }, [turnCounter]);

  return (
    <div className="board">
      {chooseYourWeapon(choices)}
      You chose: {playerChoice}
      <div>Computer chose: {computerChoice}</div>
      <div>Result: {resultString}</div>
      <div>Score: {score}</div>
      <div>Turn counter: {turnCounter}</div>
    </div>
  );
};

export default Rps;
