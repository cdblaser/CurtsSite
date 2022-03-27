import React from "react";
import Gear from "./Gear";

const GearList = ({
  slot,
  onChoose,
  currentEquipId,
  currentGearName,
  twoHandRef,
}) => {
  const gearList = Gear.map((set) => {
    if (set.itemList[slot]) {
      return (
        <div key={set.itemList[slot]}>
          <button
            onClick={() => {
              currentEquipId[slot] = set.id;
              currentGearName[slot] = set.itemList[slot];

              if (slot === "rHand" && !set.twoHand) twoHandRef.current = false;
              if (slot === "rHand" && set.twoHand) twoHandRef.current = true;
              onChoose(slot);
            }}
          >
            {set.itemList[slot]}
          </button>
        </div>
      );
    }
    return null;
  });

  return <div className="gear-list">{gearList}</div>;
};

export default GearList;
