import { client } from "../client"
import { TOMBOLA_ENDPOINTS } from "../endpoints"
import type { TombolaItem } from "../types/Tombola/TombolaItem"
import type { TombolaTier } from "../types/Tombola/TombolaTier"

export async function getTombolaTiers() {
  return client.get<TombolaTier[]>(TOMBOLA_ENDPOINTS.TOMBOLA_TIERS)
}

export async function getTombolaTierItems(tierLevel: string) {
  return client.get<TombolaItem[]>(TOMBOLA_ENDPOINTS.TOMBOLA_TIER_ITEMS(tierLevel))
}