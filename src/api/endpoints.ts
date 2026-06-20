const BASE = import.meta.env.VITE_API_BASE_URL;

export const TOMBOLA_ENDPOINTS = {
    TOMBOLA_TIERS: `${BASE}/tombola/tiers`,
    TOMBOLA_TIER_ITEMS: (tierLevel: string) => `${BASE}/tombola/tiers/${tierLevel}/items`
}

export const ITEM_ENDPOINTS = {
    ITEMS: `${BASE}/items`,
}