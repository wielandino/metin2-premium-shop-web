import type { Item } from "../models/Item";

const DUMMY_ID = 23;

export const ITEM_DUMMY_MODEL_1: Item = {
    id: DUMMY_ID + 1,
    name: "Passierschein",
    description: "ItemDummyModel1_DESCRIPTION",
    imageUrl: "ItemDummyModel1_IMAGEURL"
}

export const ITEM_DUMMY_MODEL_2: Item = {
    id: DUMMY_ID + 11,
    name: "DR-Gutschein (50)",
    description: "ItemDummyModel2_DESCRIPTION",
    imageUrl: "ItemDummyModel2_IMAGEURL"
}
