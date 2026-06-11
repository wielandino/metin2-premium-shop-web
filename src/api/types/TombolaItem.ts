import type { Item } from "./Item";

export interface TombolaItem {
    id: number
    item?: Item
    rollChance: number
}