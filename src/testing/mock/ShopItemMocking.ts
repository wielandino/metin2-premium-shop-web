import type { ShopItem } from "../../api/types/ShopItem";
import {
  HIGHLIGHTS_CATEGORY,
  METINPLUS_CATEGORY,
  OFFERS_CATEGORY,
  CHARACTER_CATEGORY,
  VEREDELN_CATEGORY
} from "./CategoryModelMocking";

const DUMMY_ID = 23;

export const SHOP_ITEM_DUMMY_MODEL_1: ShopItem = {
  id: DUMMY_ID + 1,
  itemDetails: {
    de: {
      name: "Passierschein",
      description: "Mit diesem Passierschein steht deinen Dungeon-Abenteuern nichts mehr im Wege.",
      features: [
        "Ermöglicht das Betreten einer weiteren Ebene",
        "Nicht handelbar"
      ],
    },
    en: {
      name: "Dungeon Pass",
      description: "With this pass, nothing stands in the way of your dungeon adventures.",
      features: [
        "Allows entry to another dungeon level",
        "Not tradeable"
      ],
    },

  },
  price: 6,
  category: METINPLUS_CATEGORY,
  imageName: "passierschein",
  maxQuantity: 15,
  quantityPackageSplit: 3,
  isNew: false,
  isHot: true
}

export const SHOP_ITEM_DUMMY_MODEL_2: ShopItem = {
  id: DUMMY_ID + 2,
  itemDetails: {
    de: {
      name: "DR-Gutschein (50)",
      description: "Mit diesem Gutschein im Wert von 50 Drachenmünzen treibst du den Yang-Umsatz in astronomische Höhen!",
      features: [
        "Gutschein im Wert von 50 DR",
        "Begrenzte Laufzeit",
      ],
    },
    en: {
      name: "DR Voucher (50)",
      description: "With this voucher worth 50 Dragon Coins, you'll skyrocket your Yang revenue!",
      features: [
        "Voucher worth 50 DR",
        "Limited duration",
      ],
    },

  },
  price: 80,
  category: VEREDELN_CATEGORY,
  imageName: "drgutschein",
  maxQuantity: 1,
  quantityPackageSplit: 1,
  isNew: false,
  isHot: true
}

export const SHOP_ITEM_DUMMY_MODEL_3: ShopItem = {
  id: DUMMY_ID + 3,
  itemDetails: {
    de: {
      name: "Schmuckschatulle",
      description: "Du willst noch schneller stärker werden? Schau in die Schatulle!",
      features: [
        "Zufallstruhe",
        "Chance auf Ring, Amulett, Lolli oder Trank",
      ],
    },
    en: {
      name: "Jewelry Box",
      description: "Want to get stronger even faster? Look inside the box!",
      features: [
        "Random chest",
        "Chance for ring, amulet, candy, or potion",
      ],
    },

  },
  price: 99,
  category: OFFERS_CATEGORY,
  imageName: "schmuckschatulle",
  maxQuantity: 1,
  quantityPackageSplit: 1,
  isNew: true,
  isHot: true
}

export const SHOP_ITEM_DUMMY_MODEL_4: ShopItem = {
  id: DUMMY_ID + 4,
  itemDetails: {
    de: {
      name: "Autojagd",
      description: "Hiermit greift dein Charakter bei der automatischen Jagd nicht nur Monster an.",
      features: [
        "Automatisches Angreifen von Monstern",
        "Automatische Benutzung von Fertigkeiten",
      ],
    },
    en: {
      name: "Auto Hunt",
      description: "Your character will not only attack monsters during automatic hunting.",
      features: [
        "Automatic monster attacking",
        "Automatic skill usage",
      ],
    },

  },
  price: 49,
  category: CHARACTER_CATEGORY,
  imageName: "autojagd",
  maxQuantity: 1,
  quantityPackageSplit: 1,
  isNew: true,
  isHot: false
}

export const SHOP_ITEM_DUMMY_MODEL_5: ShopItem = {
  id: DUMMY_ID + 5,
  itemDetails: {
    de: {
      name: "Gegenstand verzaubern",
      description: "Tausche mithilfe von Gegenstand verzaubern die bisherigen Boni eines deiner Ausrüstungsgegenstände gegen die gleiche Anzahl neuer Boni aus. Diese werden zufällig bestimmt.",
      features: [
        "Tauscht 1x Boni eines Items gegen zufällige neue aus",
        "Gilt nur für die Boni 1-5"
      ],
    },
    en: {
      name: "Enchant Item",
      description: "Exchange the existing bonuses of one of your equipment items for the same number of new bonuses. These are determined randomly.",
      features: [
        "Replaces item bonuses with random new ones",
        "Only applies to bonuses 1-5"
      ],
    },

  },
  price: 15,
  category: HIGHLIGHTS_CATEGORY,
  imageName: "verzaubern",
  maxQuantity: 50,
  quantityPackageSplit: 10,
  isNew: false,
  isHot: false
}

export const SHOP_ITEM_DUMMY_MODEL_6: ShopItem = {
  id: DUMMY_ID + 6,
  itemDetails: {
    de: {
      name: "Segensschriftrolle",
      description: "Diese Schriftrolle schützt dein Item vor dem Zerbrechen.",
      features: [
        "Verhindert Itemverlust bei gescheiterter Veredelung",
        "Einmaliger Gebrauch"
      ],
    },
    en: {
      name: "Blessing Scroll",
      description: "This scroll protects your item from breaking.",
      features: [
        "Prevents item loss on failed upgrade",
        "Single use"
      ],
    },

  },
  price: 25,
  category: HIGHLIGHTS_CATEGORY,
  imageName: "segi",
  maxQuantity: 20,
  quantityPackageSplit: 5,
  isNew: false,
  isHot: true
}

export const SHOP_ITEM_DUMMY_MODEL_7: ShopItem = {
  id: DUMMY_ID + 7,
  itemDetails: {
    de: {
      name: "Atlantiskrieger+",
      description: "Eine schlachtenerprobte Rüstung für alle mächtigen Krieger der Tiefen. Eine Atlantiskrone+ oder ein Atlantishelm+, Kneifi und eine Heldenmedaille verleihen dir jeweils zusätzliche Set-Boni.",
      features: [
        "1 bis 3 zufällige Boni",
        "Kostüm mit Set-Bonus",
        "Kostüm für männliche Charaktere",
        "Begrenzte Laufzeit ab Kauf"
      ],
    },
    en: {
      name: "Atlantis Warrior+",
      description: "A battle-tested armor for all mighty warriors of the deep. An Atlantis Crown+ or Atlantis Helmet+, Kneifi, and a Hero Medal each grant additional set bonuses.",
      features: [
        "1 to 3 random bonuses",
        "Costume with set bonus",
        "Costume for male characters",
        "Limited duration from purchase"
      ],
    },

  },
  price: 199,
  category: HIGHLIGHTS_CATEGORY,
  imageName: "atlantisbrust",
  maxQuantity: 1,
  quantityPackageSplit: 0,
  isNew: true,
  isHot: true
}

export const SHOP_ITEM_DUMMY_MODEL_8: ShopItem = {
  id: DUMMY_ID + 8,
  itemDetails: {
    de: {
      name: "Ahnenwächter-Schwert+",
      description: "",
      features: [
        "Exklusiver Inhalt",
        "Begrenzte Verfügbarkeit"
      ],
    },
    en: {
      name: "Ancestral Guardian Sword+",
      description: "",
      features: [
        "Exclusive content",
        "Limited availability"
      ],
    },

  },
  price: 299,
  category: HIGHLIGHTS_CATEGORY,
  imageName: "ahnenwaechterschwert",
  maxQuantity: 1,
  quantityPackageSplit: 0,
  isNew: true,
  isHot: true
}

export const mockShopItems: ShopItem[] = [
  SHOP_ITEM_DUMMY_MODEL_1,
  SHOP_ITEM_DUMMY_MODEL_2,
  SHOP_ITEM_DUMMY_MODEL_3,
  SHOP_ITEM_DUMMY_MODEL_4,
  SHOP_ITEM_DUMMY_MODEL_5,
  SHOP_ITEM_DUMMY_MODEL_6,
  SHOP_ITEM_DUMMY_MODEL_7,
  SHOP_ITEM_DUMMY_MODEL_8,
];
