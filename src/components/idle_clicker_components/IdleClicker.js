import React, { useState, useEffect, useRef } from "react";
import World from "./World";
import "./IdleClicker.css";

/* excerpt about useRef:
In order to create such a loop we are going to use setInterval(). The problem is, setInterval doesn’t really like to play nicely with React hooks. 
In order to make it work we’ll need to create a callback function, which will execute on each iteration of setInterval. 
Since this function will depend on the current state to tally up all the clicks, it will need to be created anew on each iteration. 
This could cause an infinite render loop. To avoid that we’ll use the useRef() hook to hold the current version of the callback and then a useEffect() hook to update it whenever the state changes.
Another useEffect will fire only once and run our setInterval. 
It will actually be dependent on the callback, but since that is a ref variable (remember that we used a useRef hook to hold it) it will execute just a single time — when the app is first starting.
*/

const IdleClicker = () => {
  const [click, setClick] = useState(1);
  const [damage, setDamage] = useState(0);
  const [auto, setAuto] = useState(0);
  const [hp, setHp] = useState(10);
  const [gold, setGold] = useState(0);
  const callback = useRef();

  const monster = () => {
    if (hp <= 0) {
      setHp(10);
      setGold(gold + 10);
    }
  };

  useEffect(() => {
    callback.current = () => {
      setDamage(damage + auto);
      setHp(hp - auto);
    };
    monster();
  }, [damage, auto, hp]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      callback.current();
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [callback]);

  const onClick = (e) => {
    setDamage(damage + click);
    setHp(hp - click);
  };

  const buyTier1 = (e) => {
    if (gold >= 10) {
      setAuto(auto + 1);
      setGold(gold - 10);
    }
  };

  return (
    <div className="ui page">
      Warning! If you click away from this page, you will lose your progress.
      <World width="500px" height="250px" />
      <div className="damage">
        <button type="button" className="damage" onClick={onClick}>
          Do damage! (damage: 1)
        </button>
      </div>
      <div className="damage">
        <button type="button" className="idle" onClick={buyTier1}>
          Buy Idleclicker! Cost: 10 gold
        </button>
      </div>
      <div className="idle text">Idleclicker Value: {auto}</div>
      <div className="damage text"> Total Damage: {damage}</div>
      <div className="hp">Total hp: {hp}</div>
      <div className="gold">Total gold: {gold}</div>
    </div>
  );
};

export default IdleClicker;
