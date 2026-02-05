import type { Category } from "../models/Category";

const DUMMY_ID = 23;

export const HIGHLIGHTS_CATEGORY: Category = {
  id: DUMMY_ID + 1,
  name: "Highlights",
  iconName: "highlights_icon"
}

export const VEREDELN_CATEGORY: Category = {
  id: DUMMY_ID + 2,
  name: "Veredeln & Verbessern",
  iconName: "upgrade_icon"
}

export const KOSMETIK_CATEGORY: Category = {
  id: DUMMY_ID + 3,
  name: "Kosmetik",
  iconName: "cosmetic_icon"
}

export const CHARACTER_CATEGORY: Category = {
  id: DUMMY_ID + 4,
  name: "Charakter",
  iconName: "character_icon"
}

export const METINPLUS_CATEGORY: Category = {
  id: DUMMY_ID + 11,
  name: "Metin+",
  parentCategory: HIGHLIGHTS_CATEGORY
}

export const REDUZIERT_CATEGORY: Category = {
  id: DUMMY_ID + 12,
  name: "Reduziert",
  parentCategory: HIGHLIGHTS_CATEGORY
}

export const OFFERS_CATEGORY: Category = {
  id: DUMMY_ID + 13,
  name: "Offers",
  parentCategory: HIGHLIGHTS_CATEGORY
}

export const PAKETE_CATEGORY: Category = {
  id: DUMMY_ID + 14,
  name: "Pakete",
  parentCategory: HIGHLIGHTS_CATEGORY
}

export const VEREDELUNGSSTEINE_CATEGORY: Category = {
  id: DUMMY_ID + 21,
  name: "Veredelungssteine",
  parentCategory: VEREDELN_CATEGORY
}

export const SEGENSSCHRIFTROLLEN_CATEGORY: Category = {
  id: DUMMY_ID + 22,
  name: "Segensschriftrollen",
  parentCategory: VEREDELN_CATEGORY
}

export const KOSTUEME_CATEGORY: Category = {
  id: DUMMY_ID + 31,
  name: "Kostüme",
  parentCategory: KOSMETIK_CATEGORY
}