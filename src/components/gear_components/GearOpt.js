import React, { useState } from "react";
import GearList from "./GearList";
import ChooseGear from "./ChooseGear";
import "./GearOpt.css";

const GearOpt = () => {
  const [setBonuses, setSetBonuses] = useState({});

  const gearSlots = [
    { slot: "helmet" },
    { slot: "armor" },
    { slot: "shoulder" },
    { slot: "shoes" },
    { slot: "lHand" },
    { slot: "rHand" },
    { slot: "twoHand" },
    { slot: "amulet" },
    { slot: "ring" },
  ];

  const countBonuses = (setId, prevId) => {
    let nextBonuses = { ...setBonuses };

    if (nextBonuses[setId]) nextBonuses[setId] += 1;
    else nextBonuses[setId] = 1;
    if (nextBonuses[prevId]) nextBonuses[prevId] -= 1;

    setSetBonuses(nextBonuses);
  };

  const displayBonuses = () => {
    if (!setBonuses) return null;
    return Object.entries(setBonuses)
      .filter(([_, gearCount]) => {
        return gearCount > 1;
      })
      .map(([id, gearCount]) => {
        const set = GearList.find((gearSet) => gearSet.id === Number(id));

        return (
          <div key={id}>
            {set.name}
            {Object.entries(set.setBonuses).map(
              ([bonus, bonusValue], index) => {
                if (index <= gearCount - 2) {
                  return ` ${bonus} - ${bonusValue} `;
                }
                return null;
              }
            )}
          </div>
        );
      });
  };

  const onChoose = (setId, prevId) => {
    if (setId !== prevId) {
      countBonuses(setId, prevId);
    }
  };

  return (
    <div className="gear">
      <div className="column1">
        {gearSlots.map((slot, i) => {
          return (
            <ChooseGear slot={slot.slot} key={slot.slot} onChoose={onChoose} />
          );
        })}
      </div>

      <div className="column2">
        <div>Set Bonuses: {displayBonuses()}</div>
      </div>
    </div>
  );
};

export default GearOpt;
