import type { TombolaTier } from "../../api/types/TombolaTier";
import type { TombolaItem } from "../../api/types/TombolaItem";

const DUMMY_ID = 100;
const TOMBOLA_ITEM_DUMMY_ID = 500;

const BRONZE_TOMBOLA_ITEMS: TombolaItem[] = [
  {
    id: TOMBOLA_ITEM_DUMMY_ID,
    item: {
      id: DUMMY_ID + 1,
      imageName: "segi",
      itemDetails: {
        de: { name: "Segensschriftrolle", description: "Diese Schriftrolle schützt dein Item vor dem Zerbrechen.", features: [] },
        en: { name: "Blessing Scroll", description: "This scroll protects your item from breaking.", features: [] },
      },
    },
    rollChance: 40,
  },
  {
    id: TOMBOLA_ITEM_DUMMY_ID + 11,
    item: {
      id: DUMMY_ID + 2,
      imageName: "verzaubern",
      itemDetails: {
        de: { name: "Gegenstand verzaubern", description: "Tausche mithilfe von Gegenstand verzaubern die bisherigen Boni eines deiner Ausrüstungsgegenstände gegen die gleiche Anzahl neuer Boni aus.", features: [] },
        en: { name: "Enchant Item", description: "Exchange the current bonuses of one of your equipment items for new ones.", features: [] },
      },
    },
    rollChance: 35,
  },
  {
    id: TOMBOLA_ITEM_DUMMY_ID + 12,
    item: {
      id: DUMMY_ID + 3,
      imageName: "passierschein",
      itemDetails: {
        de: { name: "Passierschein", description: "Mit diesem Passierschein steht deinen Dungeon-Abenteuern nichts mehr im Wege.", features: [] },
        en: { name: "Dungeon Pass", description: "With this pass, nothing stands in the way of your dungeon adventures.", features: [] },
      },
    },
    rollChance: 25,
  },
];

const SILBER_TOMBOLA_ITEMS: TombolaItem[] = [
  {
    id: TOMBOLA_ITEM_DUMMY_ID + 13,
    item: {
      id: DUMMY_ID + 11,
      imageName: "drgutschein",
      itemDetails: {
        de: { name: "DR-Gutschein (50)", description: "Mit diesem Gutschein im Wert von 50 Drachenmünzen treibst du den Yang-Umsatz in astronomische Höhen!", features: [] },
        en: { name: "DR Voucher (50)", description: "With this voucher worth 50 Dragon Coins, you'll drive Yang sales to astronomical heights!", features: [] },
      },
    },
    rollChance: 30,
  },
  {
    id: TOMBOLA_ITEM_DUMMY_ID + 14,
    item: {
      id: DUMMY_ID + 12,
      imageName: "schmuckschatulle",
      itemDetails: {
        de: { name: "Schmuckschatulle", description: "Du willst noch schneller stärker werden? Schau in die Schatulle!", features: [] },
        en: { name: "Jewelry Box", description: "Want to get stronger even faster? Look inside the box!", features: [] },
      },
    },
    rollChance: 45,
  },
  {
    id: TOMBOLA_ITEM_DUMMY_ID + 15,
    item: {
      id: DUMMY_ID + 13,
      imageName: "vedelungsstein7",
      itemDetails: {
        de: { name: "Veredelungsstein +7", description: "Mit diesem mächtigen Stein veredelst du dein Equip auf bis zu +7, ohne es zu gefährden.", features: [] },
        en: { name: "Refinement Stone +7", description: "With this powerful stone, you can refine your equipment up to +7 without endangering it.", features: [] },
      },
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
      imageName: "atlantisbrust",
      itemDetails: {
        de: { name: "Atlantiskrieger+", description: "Eine schlachtenerprobte Rüstung für alle mächtigen Krieger der Tiefen.", features: [] },
        en: { name: "Atlantis Warrior+", description: "A battle-tested armor for all mighty warriors of the deep.", features: [] },
      },
    },
    rollChance: 20,
  },
  {
    id: TOMBOLA_ITEM_DUMMY_ID + 20,
    item: {
      id: DUMMY_ID + 22,
      imageName: "ahnenwaechterschwert",
      itemDetails: {
        de: { name: "Ahnenwächter-Schwert+", description: "Das legendäre Schwert der Ahnenwächter - ein Symbol absoluter Stärke und Würde.", features: [] },
        en: { name: "Ancestral Guardian Sword+", description: "The legendary sword of the Ancestral Guardians - a symbol of absolute strength and dignity.", features: [] },
      },
    },
    rollChance: 5,
  },
  {
    id: TOMBOLA_ITEM_DUMMY_ID + 21,
    item: {
      id: DUMMY_ID + 23,
      imageName: "drgutschein200",
      itemDetails: {
        de: { name: "DR-Gutschein (200)", description: "Ein mächtiger Gutschein im Wert von 200 Drachenmünzen - perfekt für große Upgrades.", features: [] },
        en: { name: "DR Voucher (200)", description: "A powerful voucher worth 200 Dragon Coins - perfect for major upgrades.", features: [] },
      },
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
