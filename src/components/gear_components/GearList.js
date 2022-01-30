import React from "react";

const GearList = [
  {
    ChildhoodMemories: {
      name: "Childhood Memories",
      setLvl: 20,
      itemList: {
        amulet: "Jenny's Necklace",
        ring: "Karl's Ring",
        twoHand: "Otok's Pitchfork",
      },
      setBonuses: {
        2: { mAtk: 5640 },
        3: { castRate: 0.15 },
      },
    },
  },
  {
    BloodWolf: {
      name: "Blood Wolf",
      setLvl: 30,
      itemList: {
        helmet: "Howl of the Blood Wolf",
        armor: "Blood Wolf Bone Armor",
        rHand: "Blood Wolf Claws",
        lHand: "Blood Wolf Scales",
      },
      setBonuses: {
        2: { crit: 0.1 },
        3: { spd: 358 },
        4: { str: 1194 },
      },
    },
  },
  {
    GriffinKnight: {
      name: "Griffin Knight",
      setLvl: 40,
      itemList: {
        helmet: "Griffin Beak",
        armor: "Griffin Plate Armor",
        shoulder: "Griffin Shoulder Pads",
        shoes: "Griffin Shinguards",
      },
      setBonuses: {
        2: { pAtk: 9112 },
        3: { castRate: 0.15 },
        4: { spd: 462 },
      },
    },
  },
  {
    Pietas: {
      name: "Pietas",
      setLvl: 50,
      itemList: {
        shoulder: "Piety Shoulder Pads",
        shoes: "Piety Sandals",
        amulet: "Piety Pendant",
        ring: "Piety Ring",
      },
      setBonuses: {
        2: { castRate: 0.1 },
        3: { int: 1887 },
        4: { spd: 566 },
      },
    },
  },
  {
    Lightforged: {
      name: "Lightforged",
      setLvl: 50,
      itemList: {
        helmet: "Helm of Light",
        armor: "Armor of Light",
        rHand: "Lightforged Longsword",
        lHand: "Lightforged Shield",
      },
      setBonuses: {
        2: { str: 1887 },
        3: { castRate: 0.15 },
        4: { hp: 75491 },
      },
    },
  },
  {
    BlessingOfLight: {
      name: "Blessing of Light",
      setLvl: 60,
      itemList: {
        helmet: "Hood of Blessing",
        armor: "Robe of Blessing",
        shoulder: "Pauldrons of Blessing",
        shoes: "Boots of Blessing",
        twoHand: "Cross of Blessing",
      },
      setBonuses: {
        2: { hp: 83768 },
        3: { int: 2094 },
        4: { spd: 628 },
        5: { castRate: 0.25 },
      },
    },
  },
  {
    ShadowHunters: {
      name: "Shadow Hunters",
      setLvl: 60,
      itemList: {
        helmet: "Shadow Hood",
        armor: "Shadow Cape",
        amulet: "Shadow Pendant",
        ring: "Shadow Ring",
      },
      setBonuses: {
        2: { str: 2234 },
        3: { castRate: 0.15 },
        4: { spd: 670 },
      },
    },
  },
  {
    DietyKnight: {
      name: "Deity Knight",
      setLvl: 70,
      itemList: {
        helmet: "Deity Helmet",
        armor: "Deity Plate Armor",
        shoulder: "Deity Shoulder Pads",
        shoes: "Deity Boots",
      },
      setBonuses: {
        2: { str: 2580 },
        3: { castRate: 0.15 },
        4: { spd: 774 },
      },
    },
  },
  {
    Shepherds: {
      name: "Shepherds",
      setLvl: 70,
      itemList: {
        shoulder: "Shepherd Cape",
        shoes: "Shepherd Shoes",
        amulet: "Shepherd Chain",
        ring: "Shepherd Ring",
      },
      setBonuses: {
        2: { crit: 0.21 },
        3: { castRate: 0.15 },
        4: { spd: 774 },
      },
    },
  },
];

export default GearList;
