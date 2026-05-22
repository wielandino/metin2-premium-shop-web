import type { Item } from "./Item";

export interface Reward {
    rewardChance: number; // Chance in percentage (0-100)
    rewardItem: Item;
}