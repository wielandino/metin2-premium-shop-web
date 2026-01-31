import type { ShopItem } from "../models/ShopItem";
import { DUMMY_CATEGORY_1 } from "./CategoryModelMocking";
import { ITEM_DUMMY_MODEL_1, ITEM_DUMMY_MODEL_2 } from "./ItemModelMocking";

const DUMMY_ID = 23;

export const SHOP_ITEM_DUMMY_MODEL_1: ShopItem = {
    id: DUMMY_ID + 1,
    item: ITEM_DUMMY_MODEL_1,
    price: 6,
    description: "Mit diesem Passierschein steht deinen Dungeon-Abenteuern nichts mehr im Wege. Wage dich auf weitere Ebenen und stelle dich der Herausforderung!",
    features: [
        "Ermöglicht das Betreten einer weiteren Ebene",
        "2. Spinnenungeons, Rotdrachenfestung, Meleys Hort (Gruppe), Schiffsverteidigung und Gnollhöhlen",
        "Passierschein muss dem zuständigen Wächter vorgelegt werden",
        "Nicht handelbar"
    ],
    category: DUMMY_CATEGORY_1,
    imageName: "passierschein",
    maxQuantity: 14,
    quantityPercentDelimeter: 7,
} 

export const SHOP_ITEM_DUMMY_MODEL_2: ShopItem = {
    id: DUMMY_ID + 11,
    item: ITEM_DUMMY_MODEL_2,
    price: 80,
    description: "Mit diesem Gutschein im Wert von 50 Drachenmünzen treibst du den Yang-Umsatz in deinem privaten Laden in astronomische Höhen! Ebenfalls eignet er sich als perfektes Geschenk für einen guten Freund. Die Laufzeit des Gutscheins beginnt ab dem Kauf. Durch Rechtsklick einlösbar.",
    features: [
        "Gutschein im Wert von 50 DR",
        "Begrenzte Laufzeit",
    ],
    category: DUMMY_CATEGORY_1,
    imageName: "drgutschein",
    maxQuantity: 1,
    quantityPercentDelimeter: 0,
}

export const mockShopItems: ShopItem[] = [
  {
    id: 1,
    item: {
      id: 1,
      name: 'DR-Gutschein (50)',
      description: 'Gutschein im Wert von 50 DR',
      imageUrl: '/images/dr-gutschein.png'
    },
    price: 80,
    category: { id: 1, name: 'Währung', icon: '💰' },
    features: [
      'Gutschein im Wert von 50 DR',
      'Begrenzte Laufzeit'
    ],
    imageName: 'dr-gutschein',
    maxQuantity: 50,
    quantityPercentDelimeter: 10
  },
  {
    id: 2,
    item: {
      id: 2,
      name: 'Segnung',
      description: 'Verteidigung & Verbessern',
      imageUrl: '/images/segnung.png'
    },
    price: 129,
    category: { id: 2, name: 'Buffs', icon: '✨' },
    features: [
      'Verteidigen & Verbessern',
      'Ändert die 6. und 7. Boni eines Gegenstands',
      'Nicht handelbar'
    ],
    imageName: 'segnung',
    maxQuantity: 10,
    quantityPercentDelimeter: 5
  },
  {
    id: 3,
    item: {
      id: 3,
      name: 'Mächtige Loot-Truhe',
      description: 'Schnee-Leoparden (Beute)',
      imageUrl: '/images/loot-truhe.png'
    },
    price: 399,
    category: { id: 3, name: 'Truhen', icon: '📦' },
    features: [
      'Schnee-Leoparden (Beute)',
      'Loot-Pass'
    ],
    imageName: 'loot-truhe',
    maxQuantity: 1, // Kein Quantity Selector
    quantityPercentDelimeter: 1
  },
  {
    id: 4,
    item: {
      id: 4,
      name: 'Passierschein',
      description: 'Zugang zu weiteren Ebenen',
      imageUrl: '/images/passierschein.png'
    },
    price: 9,
    category: { id: 4, name: 'Service', icon: '📋' },
    features: [
      'Ermöglicht das Betreten einer weiteren Ebene',
      'Rotdrachenfestung, Meleys Hort',
      'Nicht handelbar'
    ],
    imageName: 'passierschein',
    maxQuantity: 25,
    quantityPercentDelimeter: 5
  }
];