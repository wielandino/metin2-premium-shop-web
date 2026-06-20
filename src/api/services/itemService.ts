import { client } from "../client"
import { ITEM_ENDPOINTS } from "../endpoints"
import type { ShopItem } from "../types/ShopItem"

export async function getShopItems() {
    return client.get<ShopItem[]>(ITEM_ENDPOINTS.ITEMS);
}