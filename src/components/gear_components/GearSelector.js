import React, { useState, useRef } from "react";
import Gear from "./Gear";
import GearList from "./GearList";
import GearModal from "./GearModal";
import "./GearModal.css";
import "./GearSelector.css";

/*
materialUI library to make page
react styles props
look up dialogues instead of modals
*/

const GearSelector = () => {
  const GearSlots = {
    HELMET: "helmet",
    ARMOR: "armor",
    SHOULDER: "shoulder",
    SHOES: "shoes",
    LEFT_HAND: "lHand",
    RIGHT_HAND: "rHand",
    AMULET: "amulet",
    RING: "ring",
  };

  const [equipId, setEquipId] = useState({});
  const [bonuses, setBonuses] = useState({});
  const [gearName, setGearName] = useState({});
  const twoHandRef = useRef();

  let currentEquipId = { ...equipId }; //spread previous state object to keep old values every re-render
  let currentBonuses = {}; //keep empty so it resets upon re-render to accurately display gear counts
  let currentGearName = { ...gearName }; //spread to keep track of names for each slot

  const unequip = (slot) => {
    if (currentGearName[slot]) {
      return (
        <button
          className="unequip-button"
          key={slot}
          onClick={() => {
            currentEquipId[slot] = null;
            currentGearName[slot] = null;
            if (slot === "rHand" && twoHandRef.current)
              twoHandRef.current = false;
            setEquipId(currentEquipId);
            setGearName(currentGearName);
            countBonuses();
          }}
        >
          Remove
        </button>
      );
    }
  };

  const considerTwoHand = (slot) => {
    if (twoHandRef.current && slot === "rHand" && currentGearName["lHand"]) {
      currentEquipId["lHand"] = "";
      currentGearName["lHand"] = "";
    }
    if (twoHandRef.current && slot === "lHand" && currentGearName["rHand"]) {
      currentEquipId["rHand"] = "";
      currentGearName["rHand"] = "";
    }
  };

  const countBonuses = () => {
    //count # gear for each set currently equipped
    Object.values(currentEquipId).map((setId) => {
      return (currentBonuses[setId] = (currentBonuses[setId] || 0) + 1);
    });
    setBonuses(currentBonuses);
  };

  const onChoose = (slot) => {
    considerTwoHand(slot);
    setEquipId(currentEquipId);
    setGearName(currentGearName);
    countBonuses();
  };

  const displayCurrentBonuses = () => {
    if (!bonuses) return null;
    return Object.entries(bonuses)
      .filter(([_, gearCount]) => {
        return gearCount > 1;
      })
      .map(([id, gearCount]) => {
        const set = Gear.find((gearSet) => gearSet.id === Number(id));
        if (!set) return null;
        return (
          <div key={id} className="display-current-bonuses">
            Set Bonuses:
            {set.name} - {""}
            {Object.entries(set.setBonuses).map(
              ([bonus, bonusValue], index) => {
                if (index <= gearCount - 2) {
                  return `|${bonus} - ${bonusValue}| `;
                }
                return null;
              }
            )}
          </div>
        );
      });
  };

  const displayGearList = () => {
    return (
      <div>
        <div className="display-gear">
          {Object.values(GearSlots).map((slot) => {
            return (
              <div key={slot}>
                <GearModal slot={slot}>
                  <GearList
                    slot={slot}
                    onChoose={onChoose}
                    currentEquipId={currentEquipId}
                    currentGearName={currentGearName}
                    twoHandRef={twoHandRef}
                  />
                </GearModal>
                Chosen {slot}: {gearName[slot]}
                {gearName[slot] ? "" : "none"}
                <br />
                {unequip(slot)}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const displayAllBonuses = () => {
    return (
      <div className="display-all-bonuses">
        List of Possible Bonuses: <br />
        {Gear.map((set) => {
          return (
            <div key={set.id}>
              {set.name} -{" "}
              {Object.entries(set.setBonuses).map(([bonus, bonusValue]) => {
                return `|${bonus}: ${bonusValue}| `;
              })}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="gear-selector">
      {JSON.stringify(bonuses)}
      {displayCurrentBonuses()}
      {displayGearList()}
      {displayAllBonuses()}
    </div>
  );
};

export default GearSelector;
