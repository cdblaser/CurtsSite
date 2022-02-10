import React, { useState, useRef } from "react";
import GearList from "./GearList";

const ChooseGear = ({ slot, onChoose }) => {
  const [selected, setSelected] = useState("");

  const prevId = useRef();

  const gearList = GearList.map((set) => {
    const onClick = () => {
      setSelected(set.itemList[slot]);
      onChoose(set.id, prevId.current);
      prevId.current = set.id;
    };

    if (set.itemList[slot]) {
      return (
        <div key={set.itemList[slot]}>
          <button onClick={onClick}>{set.itemList[slot]}</button>
        </div>
      );
    } else return;
  });

  const removeSelected = selected ? (
    <button
      key={slot}
      onClick={(e) => {
        setSelected("");
        onChoose("", prevId.current);
        prevId.current = "";
      }}
    >
      Remove
    </button>
  ) : (
    ""
  );

  return (
    <div>
      {slot}: {gearList}
      Chosen {slot}: {selected === "" ? "none" : ""}
      {selected} {removeSelected}
    </div>
  );
};

export default ChooseGear;
