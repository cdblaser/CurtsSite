const Gear = [
  {
    id: 0,
    name: "Childhood Memories",
    setLvl: 20,
    itemList: {
      amulet: "Jenny's Necklace",
      ring: "Karl's Ring",
      rHand: "Otok's Pitchfork",
    },
    twoHand: true,
    setBonuses: { mAtk: 5640, castRate: 0.15 },
  },

  {
    id: 1,
    name: "Blood Wolf",
    setLvl: 30,
    itemList: {
      helmet: "Howl of the Blood Wolf",
      armor: "Blood Wolf Bone Armor",
      rHand: "Blood Wolf Claws",
      lHand: "Blood Wolf Scales",
    },
    setBonuses: { crit: 0.1, spd: 358, str: 1194 },
  },

  {
    id: 2,
    name: "Griffin Knight",
    setLvl: 40,
    itemList: {
      helmet: "Griffin Beak",
      armor: "Griffin Plate Armor",
      shoulder: "Griffin Shoulder Pads",
      shoes: "Griffin Shinguards",
    },
    setBonuses: { pAtk: 9112, castRate: 0.15, spd: 462 },
  },

  {
    id: 3,
    name: "Pietas",
    setLvl: 50,
    itemList: {
      shoulder: "Piety Shoulder Pads",
      shoes: "Piety Sandals",
      amulet: "Piety Pendant",
      ring: "Piety Ring",
    },
    setBonuses: { castRate: 0.1, int: 1887, spd: 566 },
  },

  {
    id: 4,
    name: "Lightforged",
    setLvl: 50,
    itemList: {
      helmet: "Helm of Light",
      armor: "Armor of Light",
      rHand: "Lightforged Longsword",
      lHand: "Lightforged Shield",
    },
    setBonuses: { str: 1887, castRate: 0.15, hp: 75491 },
  },

  {
    id: 5,
    name: "Blessing of Light",
    setLvl: 60,
    itemList: {
      helmet: "Hood of Blessing",
      armor: "Robe of Blessing",
      shoulder: "Pauldrons of Blessing",
      shoes: "Boots of Blessing",
      rHand: "Cross of Blessing",
    },
    twoHand: true,
    setBonuses: { hp: 83768, int: 2094, spd: 628, castRate: 0.25 },
  },

  {
    id: 6,
    name: "Shadow Hunters",
    setLvl: 60,
    itemList: {
      helmet: "Shadow Hood",
      armor: "Shadow Cape",
      amulet: "Shadow Pendant",
      ring: "Shadow Ring",
    },
    setBonuses: { str: 2234, castRate: 0.15, spd: 670 },
  },

  {
    id: 7,
    name: "Deity Knight",
    setLvl: 70,
    itemList: {
      helmet: "Deity Helmet",
      armor: "Deity Plate Armor",
      shoulder: "Deity Shoulder Pads",
      shoes: "Deity Boots",
    },
    setBonuses: { str: 2580, castRate: 0.15, spd: 774 },
  },

  {
    id: 8,
    name: "Shepherds",
    setLvl: 70,
    itemList: {
      shoulder: "Shepherd Cape",
      shoes: "Shepherd Shoes",
      amulet: "Shepherd Chain",
      ring: "Shepherd Ring",
    },
    setBonuses: { crit: 0.21, castRate: 0.15, spd: 774 },
  },
];
export default Gear;
