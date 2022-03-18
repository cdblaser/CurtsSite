import React, { useState, useRef } from "react";
import Gear from "./Gear";
import GearList from "./GearList";
import GearModal from "./GearModal";
import "./GearModal.css";
import "./GearSelector.css";
import helmet from "../../assets/images/helmet.PNG";
import armor from "../../assets/images/armor.PNG";
import shoulder from "../../assets/images/shoulder.PNG";
import shoes from "../../assets/images/shoes.PNG";
import lHand from "../../assets/images/lHand.PNG";
import rHand from "../../assets/images/rHand.PNG";
import amulet from "../../assets/images/amulet.PNG";
import ring from "../../assets/images/ring.PNG";
/*
materialUI library to make page
react styles props
look up dialogues instead of modals
*/

console.log(amulet);

const GearSelector = () => {
  const GearSlot = {
    HELMET: "helmet",
    ARMOR: "armor",
    SHOULDER: "shoulder",
    SHOES: "shoes",
    LEFT_HAND: "lHand",
    RIGHT_HAND: "rHand",
    AMULET: "amulet",
    RING: "ring",
  };
  const GearSlots = [
    { slot: GearSlot.HELMET, src: helmet },
    { slot: GearSlot.ARMOR, src: armor },
    { slot: GearSlot.SHOULDER, src: shoulder },
    { slot: GearSlot.SHOES, src: shoes },
    { slot: GearSlot.LEFT_HAND, src: lHand },
    { slot: GearSlot.RIGHT_HAND, src: rHand },
    { slot: GearSlot.AMULET, src: amulet },
    { slot: GearSlot.RING, src: ring },
  ];

  const [equipId, setEquipId] = useState({});
  const [bonuses, setBonuses] = useState({});
  const [gearName, setGearName] = useState({});
  const [show, setShow] = useState(false);
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
            if (slot === GearSlot.RIGHT_HAND && twoHandRef.current)
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
    if (
      twoHandRef.current &&
      slot === GearSlot.RIGHT_HAND &&
      currentGearName[GearSlot.LEFT_HAND]
    ) {
      currentEquipId[GearSlot.LEFT_HAND] = "";
      currentGearName[GearSlot.LEFT_HAND] = "";
    }
    if (
      twoHandRef.current &&
      slot === GearSlot.LEFT_HAND &&
      currentGearName[GearSlot.RIGHT_HAND]
    ) {
      currentEquipId[GearSlot.RIGHT_HAND] = "";
      currentGearName[GearSlot.RIGHT_HAND] = "";
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
      <div className="display-gear">
        {GearSlots.map((slot) => {
          return (
            <div>
              <GearModal slot={slot.slot} src={slot.src}>
                <GearList
                  slot={slot.slot}
                  onChoose={onChoose}
                  currentEquipId={currentEquipId}
                  currentGearName={currentGearName}
                  twoHandRef={twoHandRef}
                />
              </GearModal>
              Chosen {slot.slot}: {gearName[slot.slot]}
              {gearName[slot.slot] ? "" : "none"}
              <br />
              {unequip(slot.slot)}
            </div>
          );
        })}
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
