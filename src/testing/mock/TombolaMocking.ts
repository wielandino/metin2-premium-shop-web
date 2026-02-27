import type { TombolaTier } from "../../models/TombolaTier";
import type { TombolaItem } from "../../models/TombolaItem";
import {
  HIGHLIGHTS_CATEGORY,
  VEREDELN_CATEGORY,
  CHARACTER_CATEGORY,
  KOSTUEME_CATEGORY,
  SEGENSSCHRIFTROLLEN_CATEGORY,
  VEREDELUNGSSTEINE_CATEGORY,
} from "./CategoryModelMocking";

const DUMMY_ID = 100;

const BRONZE_TOMBOLA_ITEMS: TombolaItem[] = [
  {
    item: {
      id: DUMMY_ID + 1,
      name: "Segensschriftrolle",
      price: 25,
      description: "Diese Schriftrolle schützt dein Item vor dem Zerbrechen.",
      features: [
        "Verhindert Itemverlust bei gescheiterter Veredelung",
        "Einmaliger Gebrauch",
      ],
      category: SEGENSSCHRIFTROLLEN_CATEGORY,
      imageName: "segi",
      maxQuantity: 20,
      quantityPercentDelimeter: 5,
      isNew: false,
      isHot: false,
    },
    rollChance: 40,
  },
  {
    item: {
      id: DUMMY_ID + 2,
      name: "Gegenstand verzaubern",
      price: 15,
      description:
        "Tausche mithilfe von Gegenstand verzaubern die bisherigen Boni eines deiner Ausrüstungsgegenstände gegen die gleiche Anzahl neuer Boni aus.",
      features: [
        "Tauscht 1x Boni eines Items gegen zufällige neue aus",
        "Gilt nur für die Boni 1-5",
      ],
      category: VEREDELN_CATEGORY,
      imageName: "verzaubern",
      maxQuantity: 50,
      quantityPercentDelimeter: 10,
      isNew: false,
      isHot: false,
    },
    rollChance: 35,
  },
  {
    item: {
      id: DUMMY_ID + 3,
      name: "Passierschein",
      price: 6,
      description:
        "Mit diesem Passierschein steht deinen Dungeon-Abenteuern nichts mehr im Wege.",
      features: ["Ermöglicht das Betreten einer weiteren Ebene", "Nicht handelbar"],
      category: CHARACTER_CATEGORY,
      imageName: "passierschein",
      maxQuantity: 14,
      quantityPercentDelimeter: 7,
      isNew: false,
      isHot: false,
    },
    rollChance: 25,
  },
];

const SILBER_TOMBOLA_ITEMS: TombolaItem[] = [
  {
    item: {
      id: DUMMY_ID + 11,
      name: "DR-Gutschein (50)",
      price: 80,
      description:
        "Mit diesem Gutschein im Wert von 50 Drachenmünzen treibst du den Yang-Umsatz in astronomische Höhen!",
      features: ["Gutschein im Wert von 50 DR", "Begrenzte Laufzeit"],
      category: VEREDELN_CATEGORY,
      imageName: "drgutschein",
      maxQuantity: 1,
      quantityPercentDelimeter: 0,
      isNew: false,
      isHot: true,
    },
    rollChance: 30,
  },
  {
    item: {
      id: DUMMY_ID + 12,
      name: "Schmuckschatulle",
      price: 99,
      description: "Du willst noch schneller stärker werden? Schau in die Schatulle!",
      features: [
        "Zufallstruhe",
        "Chance auf Ring, Amulett, Lolli oder Trank",
      ],
      category: HIGHLIGHTS_CATEGORY,
      imageName: "schmuckschatulle",
      maxQuantity: 1,
      quantityPercentDelimeter: 0,
      isNew: true,
      isHot: true,
    },
    rollChance: 45,
  },
  {
    item: {
      id: DUMMY_ID + 13,
      name: "Veredelungsstein +7",
      price: 55,
      description:
        "Mit diesem mächtigen Stein veredelst du dein Equip auf bis zu +7, ohne es zu gefährden.",
      features: [
        "Garantierte Veredelung auf +7",
        "Einmaliger Gebrauch",
        "Nicht handelbar",
      ],
      category: VEREDELUNGSSTEINE_CATEGORY,
      imageName: "vedelungsstein7",
      maxQuantity: 5,
      quantityPercentDelimeter: 1,
      isNew: false,
      isHot: true,
    },
    rollChance: 25,
  },
];

const GOLD_TOMBOLA_ITEMS: TombolaItem[] = [
  {
    item: {
      id: DUMMY_ID + 21,
      name: "Atlantiskrieger+",
      price: 199,
      description:
        "Eine schlachtenerprobte Rüstung für alle mächtigen Krieger der Tiefen. Eine Atlantiskrone+ oder ein Atlantishelm+, Kneifi und eine Heldenmedaille verleihen dir jeweils zusätzliche Set-Boni.",
      features: [
        "1 bis 3 zufällige Boni",
        "Kostüm mit Set-Bonus",
        "Kostüm für männliche Charaktere",
        "Begrenzte Laufzeit ab Kauf",
      ],
      category: KOSTUEME_CATEGORY,
      imageName: "atlantisbrust",
      maxQuantity: 1,
      quantityPercentDelimeter: 0,
      isNew: true,
      isHot: true,
    },
    rollChance: 20,
  },
  {
    item: {
      id: DUMMY_ID + 22,
      name: "Ahnenwächter-Schwert+",
      price: 299,
      description:
        "Das legendäre Schwert der Ahnenwächter - ein Symbol absoluter Stärke und Würde.",
      features: ["Exklusiver Inhalt", "Begrenzte Verfügbarkeit"],
      category: HIGHLIGHTS_CATEGORY,
      imageName: "ahnenwaechterschwert",
      maxQuantity: 1,
      quantityPercentDelimeter: 0,
      isNew: true,
      isHot: true,
    },
    rollChance: 5,
  },
  {
    item: {
      id: DUMMY_ID + 23,
      name: "DR-Gutschein (200)",
      price: 299,
      description:
        "Ein mächtiger Gutschein im Wert von 200 Drachenmünzen - perfekt für große Upgrades.",
      features: ["Gutschein im Wert von 200 DR", "Begrenzte Laufzeit"],
      category: VEREDELN_CATEGORY,
      imageName: "drgutschein200",
      maxQuantity: 1,
      quantityPercentDelimeter: 0,
      isNew: false,
      isHot: true,
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
