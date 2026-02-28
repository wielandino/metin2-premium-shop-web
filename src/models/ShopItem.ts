import type { Category } from "./Category";
import type { Item } from "./Item";

export interface ShopItem extends Item {
    category?: Category,
    price: number,
    features: string[],  
    maxQuantity: number,
    quantityPercentDelimeter: number,
    isNew: boolean,
    isHot: boolean
}