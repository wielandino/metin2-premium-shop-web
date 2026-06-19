const BASE = import.meta.env.VITE_API_BASE_URL;

export const ENDPOINTS = {
    TOMBOLA_TIERS: `${BASE}/tombola/tiers`,
    TOMBOLA_TIER_ITEMS: (tierLevel: string) => `${BASE}/tombola/tiers/${tierLevel}/items`
}