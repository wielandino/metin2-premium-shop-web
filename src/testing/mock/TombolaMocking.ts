import type { TombolaTier } from "../../api/types/TombolaTier";
import type { TombolaItem } from "../../api/types/TombolaItem";

const DUMMY_ID = 100;
const TOMBOLA_ITEM_DUMMY_ID = 500;

const BRONZE_TOMBOLA_ITEMS: TombolaItem[] = [
  {
    id: TOMBOLA_ITEM_DUMMY_ID,
    item: {
      id: DUMMY_ID + 1,
      name: "Segensschriftrolle",
      imageName: "segi",
      description: "Diese Schriftrolle schützt dein Item vor dem Zerbrechen.",
    },
    rollChance: 40,
  },
  {
    id: TOMBOLA_ITEM_DUMMY_ID + 11,
    item: {
      id: DUMMY_ID + 2,
      name: "Gegenstand verzaubern",
      imageName: "verzaubern",
      description: "Tausche mithilfe von Gegenstand verzaubern die bisherigen Boni eines deiner Ausrüstungsgegenstände gegen die gleiche Anzahl neuer Boni aus.",
    },
    rollChance: 35,
  },
  {
    id: TOMBOLA_ITEM_DUMMY_ID + 12,
    item: {
      id: DUMMY_ID + 3,
      name: "Passierschein",
      imageName: "passierschein",
      description: "Mit diesem Passierschein steht deinen Dungeon-Abenteuern nichts mehr im Wege.",
    },
    rollChance: 25,
  },
];

const SILBER_TOMBOLA_ITEMS: TombolaItem[] = [
  {
    id: TOMBOLA_ITEM_DUMMY_ID + 13,
    item: {
      id: DUMMY_ID + 11,
      name: "DR-Gutschein (50)",
      imageName: "drgutschein",
      description: "Mit diesem Gutschein im Wert von 50 Drachenmünzen treibst du den Yang-Umsatz in astronomische Höhen!",
    },
    rollChance: 30,
  },
  {
    id: TOMBOLA_ITEM_DUMMY_ID + 14,
    item: {
      id: DUMMY_ID + 12,
      name: "Schmuckschatulle",
      imageName: "schmuckschatulle",
      description: "Du willst noch schneller stärker werden? Schau in die Schatulle!",
    },
    rollChance: 45,
  },
  {
    id: TOMBOLA_ITEM_DUMMY_ID + 15,
    item: {
      id: DUMMY_ID + 13,
      name: "Veredelungsstein +7",
      imageName: "vedelungsstein7",
      description: "Mit diesem mächtigen Stein veredelst du dein Equip auf bis zu +7, ohne es zu gefährden.",
    },
    rollChance: 25,
  },
  {
    id: TOMBOLA_ITEM_DUMMY_ID + 16,
    name: "Pech gehabt!",
    rollChance: 12
  },
  {
    id: TOMBOLA_ITEM_DUMMY_ID + 17,
    name: "I tried so hard",
    rollChance: 12
  },
  {
    id: TOMBOLA_ITEM_DUMMY_ID + 18,
    name: "Versuchs erneut",
    rollChance: 12
  }
];

const GOLD_TOMBOLA_ITEMS: TombolaItem[] = [
  {
    id: TOMBOLA_ITEM_DUMMY_ID + 19,
    item: {
      id: DUMMY_ID + 21,
      name: "Atlantiskrieger+",
      imageName: "atlantisbrust",
      description: "Eine schlachtenerprobte Rüstung für alle mächtigen Krieger der Tiefen. Eine Atlantiskrone+ oder ein Atlantishelm+, Kneifi und eine Heldenmedaille verleihen dir jeweils zusätzliche Set-Boni.",
    },
    rollChance: 20,
  },
  {
    id: TOMBOLA_ITEM_DUMMY_ID + 20,
    item: {
      id: DUMMY_ID + 22,
      name: "Ahnenwächter-Schwert+",
      imageName: "ahnenwaechterschwert",
      description: "Das legendäre Schwert der Ahnenwächter - ein Symbol absoluter Stärke und Würde.",
    },
    rollChance: 5,
  },
  {
    id: TOMBOLA_ITEM_DUMMY_ID + 21,
    item: {
      id: DUMMY_ID + 23,
      name: "DR-Gutschein (200)",
      imageName: "drgutschein200",
      description: "Ein mächtiger Gutschein im Wert von 200 Drachenmünzen - perfekt für große Upgrades.",
    },
    rollChance: 75,
  },
];

export const TOMBOLA_TIER_BRONZE: TombolaTier = {
  id: 1,
  tierName: "Bronze",
  tierCost: 1,
  tierDescription: "Sichere Gewinne, niedrige Chancen auf DR-Gutschein",
  tombolaItems: BRONZE_TOMBOLA_ITEMS,
  tierLevel: "bronze"
};

export const TOMBOLA_TIER_SILBER: TombolaTier = {
  id: 2,
  tierName: "Silber",
  tierCost: 2,
  tierDescription: "Moderate Gewinnchancen, höheres Risiko",
  tombolaItems: SILBER_TOMBOLA_ITEMS,
  tierLevel: "silver"
};

export const TOMBOLA_TIER_GOLD: TombolaTier = {
  id: 3,
  tierName: "Gold",
  tierCost: 3,
  tierDescription: "Beste Items möglich, höchstes Risiko!",
  tombolaItems: GOLD_TOMBOLA_ITEMS,
  tierLevel: "gold"
};

export const mockTombolaTiers: TombolaTier[] = [
  TOMBOLA_TIER_BRONZE,
  TOMBOLA_TIER_SILBER,
  TOMBOLA_TIER_GOLD,
];