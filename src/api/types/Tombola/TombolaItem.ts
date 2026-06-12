import type { Item } from "../Item"
import type { BaseTombolaItem } from "./BaseTombolaItem"

export type TombolaItem = RegularTombolaItem | PenaltyTombolaItem


export interface RegularTombolaItem extends BaseTombolaItem {
    itemType: "regular"
    item: Item
}

export interface PenaltyTombolaItem extends BaseTombolaItem {
    itemType: "penalty"
    penaltyName: string
}